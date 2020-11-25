import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { association } from './classes/Adjectives';
import { drinkCategory, foodCategory } from './classes/TavernProduct';
import { EditFABGroup } from './components/EditFABGoup';
import Icon from './components/icons';
import { iconKeys } from './components/icons/iconKeys';
import { standardBasePrice } from './examples/priceClasses';
import { taverns } from './examples/taverns';
import { getNewRandomDrinkOffer, weServe } from './helpingFunctions/menuCode';
import {
    BasePrice,
    NothingLeftOffer,
    Offer,
} from './helpingFunctions/menuCodeEnums';
import { BannerData, MenuScene } from './scenes/MenuScene';
import { NameScene } from './scenes/NameScene';
import { nameSceneStyles } from './scenes/nameSceneStyles';
import { QuestScene } from './scenes/QuestScene';
import { TitleScene } from './scenes/TitleScene';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const removeEmptyStrings = (
    newFits: association[],
    newMisfits: association[]
) => {
    const filteredFits = newFits.filter((entry) => {
        return entry !== association.empty;
    });
    return { fits: filteredFits, misfits: newMisfits };
};

const getStartMenuMaps = () => {
    const startDrinksLeft = new Map([]) as Map<
        drinkCategory | foodCategory,
        boolean
    >;
    // assuming that every category has additional drinks to add from the start!
    Object.values(drinkCategory).forEach((category) => {
        startDrinksLeft.set(category as drinkCategory, true);
    });
    const startDishesLeft = new Map([]) as Map<
        drinkCategory | foodCategory,
        boolean
    >;
    // assuming that every category has additional drinks to add from the start!
    Object.values(foodCategory).forEach((category) => {
        startDishesLeft.set(category as foodCategory, true);
    });
    return { drinkMap: startDrinksLeft, dishesMap: startDishesLeft };
};

const getProductsLeftAndBannerData = (
    fitting: { fits: association[]; misfits: association[] },
    drinkOffers: Offer[],
    foodOffers: Offer[]
) => {
    const emptyDrinkCategories = [] as drinkCategory[];
    let drinkBannerVisible = false;
    const isDrinkLeftMap = new Map([]) as Map<drinkCategory, boolean>;
    const emptyFoodCategories = [] as foodCategory[];
    let foodBannerVisible = false;
    const isFoodLeftMap = new Map([]) as Map<foodCategory, boolean>;
    Object.values(foodCategory).forEach((foodCategory) => {
        const testFoodOffer = getNewRandomDrinkOffer(
            fitting.fits,
            fitting.misfits,
            foodCategory,
            foodOffers,
            weServe.food
        );
        if (testFoodOffer === undefined || testFoodOffer === NothingLeftOffer) {
            isFoodLeftMap.set(foodCategory, false);
            foodBannerVisible = true;
            emptyFoodCategories.push(foodCategory);
        } else {
            isFoodLeftMap.set(foodCategory, true);
        }
    });
    Object.values(drinkCategory).forEach((drinkCategory) => {
        const testDrinkOffer = getNewRandomDrinkOffer(
            fitting.fits,
            fitting.misfits,
            drinkCategory,
            drinkOffers,
            weServe.drinks
        );
        if (
            testDrinkOffer === undefined ||
            testDrinkOffer === NothingLeftOffer
        ) {
            isDrinkLeftMap.set(drinkCategory, false);
            drinkBannerVisible = true;
            emptyDrinkCategories.push(drinkCategory);
        } else {
            isDrinkLeftMap.set(drinkCategory, true);
        }
    });
    return {
        drinkBannerData: {
            emptyCategories: emptyDrinkCategories,
            isVisible: drinkBannerVisible,
        } as BannerData,
        foodBannerData: {
            emptyCategories: emptyFoodCategories,
            isVisible: foodBannerVisible,
        } as BannerData,
        isDrinkLeftMap: isDrinkLeftMap,
        isFoodLeftMap: isFoodLeftMap,
    };
};

export interface FABFamily {
    redoFAB: JSX.Element;
    undoFAB: JSX.Element;
    saveFAB: JSX.Element;
}
interface TavernData {
    fitting: { fits: association[]; misfits: association[] };
    name: string;
    drinks: Offer[];
    dishes: Offer[];
    prices: BasePrice;
    drinksLeft: Map<drinkCategory, boolean>;
    dishesLeft: Map<foodCategory, boolean>;
    drinkBannerData: BannerData;
    foodBannerData: BannerData;
}
//using isVisible on bottomNavigator can cause glitches! rigorous testing is needed!
const EditSceneWithBottomTabs = () => {
    const startMenuMaps = getStartMenuMaps();
    const startData = {
        fitting: { fits: [], misfits: [] },
        name: 'Nameless Tavern',
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        drinksLeft: startMenuMaps.drinkMap,
        dishesLeft: startMenuMaps.dishesMap,
        drinkBannerData: { isVisible: false, emptyCategories: [] },
        foodBannerData: { isVisible: false, emptyCategories: [] },
    } as TavernData;
    const [tavernDatas, setTavernDatas] = useState([startData]);
    const [tavernDataIndex, setTavernDataIndex] = useState(0);
    const [bottomNavigationVisible, setBottomNavigationVisible] = useState(
        false
    );

    const onDataChange = (newTavernData: TavernData) => {
        const newTavernDatas = [] as TavernData[];
        tavernDatas.forEach((tavernData: TavernData, index: number) => {
            if (index <= tavernDataIndex) {
                newTavernDatas.push(tavernData);
            }
        });
        newTavernDatas.push(newTavernData);
        setTavernDatas(newTavernDatas);
        setTavernDataIndex(tavernDataIndex + 1);
    };

    const updateFitting = (fitting: {
        fits: association[];
        misfits: association[];
    }) => {
        const tavern = tavernDatas[tavernDataIndex];
        const newData = getProductsLeftAndBannerData(
            tavern.fitting,
            tavern.drinks,
            tavern.dishes
        );
        const newTavernData = {
            foodBannerData: newData.foodBannerData,
            drinkBannerData: newData.drinkBannerData,
            fitting: fitting,
            name: tavern.name,
            drinks: tavern.drinks,
            dishes: tavern.dishes,
            prices: tavern.prices,
            drinksLeft: newData.isDrinkLeftMap,
            dishesLeft: newData.isFoodLeftMap,
        };
        onDataChange(newTavernData);
    };
    const buildTavernTemplate = (
        templateKey: string,
        getMisfits: (fits: association[]) => association[]
    ) => {
        let tavernData = startData;
        taverns.forEach((tavern) => {
            if (templateKey === tavern.key) {
                tavernData.name = tavern.name;
                tavernData.fitting = {
                    fits: tavern.fits,
                    misfits: getMisfits(tavern.fits),
                };
                tavernData.drinks = tavern.drinks;
                tavernData.dishes = tavern.dishes;
                const bannerData = getProductsLeftAndBannerData(
                    { fits: tavern.fits, misfits: tavernData.fitting.misfits },
                    tavernData.drinks,
                    tavernData.dishes
                );
                tavernData.drinksLeft = bannerData.isDrinkLeftMap;
                tavernData.dishesLeft = bannerData.isFoodLeftMap;
                tavernData.drinkBannerData = bannerData.drinkBannerData;
                tavernData.foodBannerData = bannerData.foodBannerData;
                tavernData.prices = tavern.basePrice;
            }
        });
        setTavernDataIndex(0);
        setTavernDatas([tavernData]);
        setBottomNavigationVisible(true);
    };

    const updateName = (name: string) => {
        const tavern = tavernDatas[tavernDataIndex];
        const newTavernData = {
            foodBannerData: tavern.foodBannerData,
            drinkBannerData: tavern.drinkBannerData,
            fitting: tavern.fitting,
            name: name,
            drinks: tavern.drinks,
            dishes: tavern.dishes,
            prices: tavern.prices,
            drinksLeft: tavern.drinksLeft,
            dishesLeft: tavern.dishesLeft,
        };
        onDataChange(newTavernData);
    };
    const updateDrinks = (
        drinks: Offer[],
        is: {
            add: foodCategory | drinkCategory | undefined;
            delete: foodCategory | drinkCategory | undefined;
        }
    ) => {
        const tavern = tavernDatas[tavernDataIndex];
        const newDrinksLeft = new Map([]) as Map<
            drinkCategory | foodCategory,
            boolean
        >;
        Object.values(drinkCategory).forEach((category) => {
            const testDrinkOffer = getNewRandomDrinkOffer(
                tavern.fitting.fits,
                tavern.fitting.misfits,
                category,
                drinks,
                weServe.drinks,
                tavern.prices
            );
            if (
                testDrinkOffer === undefined ||
                testDrinkOffer === NothingLeftOffer
            ) {
                newDrinksLeft.set(category, false);
            } else {
                newDrinksLeft.set(category, true);
            }
        });
        let newDrinkBannerData = tavern.drinkBannerData;
        if (is.add) {
            if (!newDrinksLeft.get(is.add)) {
                const newEmptyCategories = newDrinkBannerData.emptyCategories.slice() as drinkCategory[];
                newEmptyCategories.push(is.add as drinkCategory);
                newDrinkBannerData = {
                    emptyCategories: newEmptyCategories,
                    isVisible: true,
                };
            }
        }
        if (
            is.delete &&
            (tavern.drinkBannerData
                .emptyCategories as drinkCategory[]).includes(
                is.delete as drinkCategory
            )
        ) {
            const newEmptyCategories = [] as drinkCategory[];
            (newDrinkBannerData.emptyCategories as drinkCategory[]).forEach(
                (category) => {
                    if (category !== is.delete) {
                        newEmptyCategories.push(category);
                    }
                }
            );
            newDrinkBannerData = {
                emptyCategories: newEmptyCategories,
                isVisible:
                    newEmptyCategories.length < 1
                        ? false
                        : tavern.drinkBannerData.isVisible,
            };
        }

        const newTavernData = {
            foodBannerData: tavern.foodBannerData,
            drinkBannerData: newDrinkBannerData as BannerData,
            fitting: tavern.fitting,
            name: tavern.name,
            drinks: drinks,
            dishes: tavern.dishes,
            prices: tavern.prices,
            drinksLeft: newDrinksLeft as Map<drinkCategory, boolean>,
            dishesLeft: tavern.dishesLeft,
        };
        onDataChange(newTavernData);
    };
    const updateDishes = (
        dishes: Offer[],
        is: {
            add: foodCategory | drinkCategory | undefined;
            delete: foodCategory | drinkCategory | undefined;
        }
    ) => {
        const tavern = tavernDatas[tavernDataIndex];
        const newDishesLeft = new Map([]) as Map<
            drinkCategory | foodCategory,
            boolean
        >;
        Object.values(foodCategory).forEach((category) => {
            const testFoodOffer = getNewRandomDrinkOffer(
                tavern.fitting.fits,
                tavern.fitting.misfits,
                category,
                dishes,
                weServe.food,
                tavern.prices
            );
            if (
                testFoodOffer === undefined ||
                testFoodOffer === NothingLeftOffer
            ) {
                newDishesLeft.set(category, false);
            } else {
                newDishesLeft.set(category, true);
            }
        });
        let newFoodBannerData = tavern.foodBannerData;
        if (is.add) {
            if (!newDishesLeft.get(is.add)) {
                const newEmptyCategories = newFoodBannerData.emptyCategories.slice() as foodCategory[];
                newEmptyCategories.push(is.add as foodCategory);
                newFoodBannerData = {
                    emptyCategories: newEmptyCategories,
                    isVisible: true,
                };
            }
        }
        if (
            is.delete &&
            (tavern.foodBannerData.emptyCategories as foodCategory[]).includes(
                is.delete as foodCategory
            )
        ) {
            const newEmptyCategories = [] as foodCategory[];
            (newFoodBannerData.emptyCategories as foodCategory[]).forEach(
                (category) => {
                    if (category !== is.delete) {
                        newEmptyCategories.push(category);
                    }
                }
            );
            newFoodBannerData = {
                emptyCategories: newEmptyCategories,
                isVisible: false,
            };
        }
        const newTavernData = {
            foodBannerData: newFoodBannerData as BannerData,
            drinkBannerData: tavern.drinkBannerData,
            fitting: tavern.fitting,
            name: tavern.name,
            drinks: tavern.drinks,
            dishes: dishes,
            prices: tavern.prices,
            drinksLeft: tavern.drinksLeft,
            dishesLeft: newDishesLeft as Map<foodCategory, boolean>,
        };
        onDataChange(newTavernData);
    };
    const updatePrice = (basePrice: BasePrice) => {
        const tavern = tavernDatas[tavernDataIndex];
        const newTavernData = {
            foodBannerData: tavern.foodBannerData,
            drinkBannerData: tavern.drinkBannerData,
            fitting: tavern.fitting,
            name: tavern.name,
            drinks: tavern.drinks,
            dishes: tavern.dishes,
            prices: basePrice,
            drinksLeft: tavern.drinksLeft,
            dishesLeft: tavern.dishesLeft,
        };
        onDataChange(newTavernData);
    };
    // no setting of prevTavernData, since this is not supposed to change back when user clicks on undoButton
    const setDrinkBannerVisible = (isVisible: boolean) => {
        const tavern = tavernDatas[tavernDataIndex];
        const newDrinkBannerData = {
            emptyCategories: tavern.drinkBannerData.emptyCategories,
            isVisible: isVisible,
        } as BannerData;
        const newTavernData = {
            foodBannerData: tavern.foodBannerData,
            drinkBannerData: newDrinkBannerData,
            fitting: tavern.fitting,
            name: tavern.name,
            drinks: tavern.drinks,
            dishes: tavern.dishes,
            prices: tavern.prices,
            drinksLeft: tavern.drinksLeft,
            dishesLeft: tavern.dishesLeft,
        };
        onDataChange(newTavernData);
    };
    // no setting of prevTavernData, since this is not supposed to change back when user clicks on undoButton
    const setFoodBannerVisible = (isVisible: boolean) => {
        const tavern = tavernDatas[tavernDataIndex];
        const newFoodBannerData = {
            emptyCategories: tavern.foodBannerData.emptyCategories,
            isVisible: isVisible,
        } as BannerData;
        const newTavernData = {
            foodBannerData: newFoodBannerData,
            drinkBannerData: tavern.drinkBannerData,
            fitting: tavern.fitting,
            name: tavern.name,
            drinks: tavern.drinks,
            dishes: tavern.dishes,
            prices: tavern.prices,
            drinksLeft: tavern.drinksLeft,
            dishesLeft: tavern.dishesLeft,
        };
        onDataChange(newTavernData);
    };
    const FABGroup = (
        <EditFABGroup
            onRedo={() => {
                setTavernDataIndex(tavernDataIndex + 1);
            }}
            onUndo={() => {
                setTavernDataIndex(tavernDataIndex - 1);
            }}
            onSave={() => {}}
        />
    );

    return (
        <Tab.Navigator
            tabBarOptions={
                bottomNavigationVisible
                    ? {
                          inactiveBackgroundColor: '#857256',
                          activeBackgroundColor: '#63481F',
                          activeTintColor: '#FFFFFF',
                          inactiveTintColor: '#F4EADB',
                      }
                    : {
                          inactiveBackgroundColor:
                              nameSceneStyles.backgroundContainer
                                  .backgroundColor,
                          activeBackgroundColor:
                              nameSceneStyles.backgroundContainer
                                  .backgroundColor,
                          activeTintColor:
                              nameSceneStyles.backgroundContainer
                                  .backgroundColor,
                          inactiveTintColor:
                              nameSceneStyles.backgroundContainer
                                  .backgroundColor,
                      }
            }
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Name': {
                            iconName = iconKeys.sign;
                            break;
                        }
                        case 'Drink': {
                            iconName = iconKeys.beer;
                            break;
                        }
                        case 'Food': {
                            iconName = iconKeys.food;
                            break;
                        }
                        default: {
                            iconName = iconKeys.quest;
                            break;
                        }
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarVisible: bottomNavigationVisible,
            })}
        >
            <Tab.Screen
                name="Name"
                children={() => (
                    <NameScene
                        name={tavernDatas[tavernDataIndex].name}
                        updateName={updateName}
                        fitting={tavernDatas[tavernDataIndex].fitting}
                        updateFitting={(
                            newFits: association[],
                            newMisfits: association[]
                        ) => {
                            updateFitting(
                                removeEmptyStrings(newFits, newMisfits)
                            );
                        }}
                        FABGroup={FABGroup}
                        buildTavernTemplate={buildTavernTemplate}
                    ></NameScene>
                )}
            />
            <Tab.Screen
                name="Drink"
                children={() => (
                    <MenuScene
                        FABGroup={FABGroup}
                        fitting={tavernDatas[tavernDataIndex].fitting}
                        isAbout={weServe.drinks}
                        offers={tavernDatas[tavernDataIndex].drinks}
                        setOffers={updateDrinks}
                        offersLeft={tavernDatas[tavernDataIndex].drinksLeft}
                        basePrice={tavernDatas[tavernDataIndex].prices}
                        bannerData={
                            tavernDatas[tavernDataIndex].drinkBannerData
                        }
                        onBannerButtonClick={setDrinkBannerVisible}
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Food"
                children={() => (
                    <MenuScene
                        FABGroup={FABGroup}
                        fitting={tavernDatas[tavernDataIndex].fitting}
                        isAbout={weServe.food}
                        offers={tavernDatas[tavernDataIndex].dishes}
                        setOffers={updateDishes}
                        offersLeft={tavernDatas[tavernDataIndex].dishesLeft}
                        basePrice={tavernDatas[tavernDataIndex].prices}
                        bannerData={tavernDatas[tavernDataIndex].foodBannerData}
                        onBannerButtonClick={setFoodBannerVisible}
                    ></MenuScene>
                )}
            />
            <Tab.Screen
                name="Quest"
                children={() => (
                    <QuestScene
                        FABGroup={FABGroup}
                        fitting={tavernDatas[tavernDataIndex].fitting}
                        basePrice={tavernDatas[tavernDataIndex].prices}
                        setBasePrice={updatePrice}
                    ></QuestScene>
                )}
            />
        </Tab.Navigator>
    );
};

const App = () => {
    let [fontsLoaded] = useFonts({
        primitive: require('./assets/fonts/primitive.ttf'),
        icons: require('./assets/fonts/icomoon.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="YOU ALL MEET IN A TAVERN!"
                            component={TitleScene}
                        />
                        <Stack.Screen
                            name="EDIT TAVERN"
                            component={EditSceneWithBottomTabs}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        );
    }
};
export default App;
