import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { association } from '../classes/Adjectives';
import {
    drinkCategory,
    foodCategory,
    menuCategory,
} from '../classes/TavernProduct';
import AppBar from '../components/AppBar';
import { EditNavigator } from '../editNavigator/EditNavigator';
import {
    getProductsLeftAndBannerData,
    getStartMenuMaps,
} from '../editNavigator/editNavigatorFunctions';
import { BasePrice, standardBasePrice } from '../scenes/menuScene/basePrice';
import { NothingLeftOffer, Offer } from '../scenes/menuScene/menuEnums';
import {
    getNewRandomDrinkOffer,
    weServe,
} from '../scenes/menuScene/menuFunctions';
import { BannerData } from '../scenes/menuScene/MenuScene';
import { StartOptionsScene } from '../scenes/startOptionsScene/StartOptionsScene';
import { TitleScene } from '../scenes/titleScene/TitleScene';
import { taverns } from '../templates/taverns';
import { ITavernData } from './ITavernData';

const Stack = createStackNavigator();
export const MainNavigator = () => {
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
    } as ITavernData;
    const [tavernHistory, setTavernHistory] = useState([startData]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const onDataChange = (newTavernData: ITavernData) => {
        const pastTavernHistory = [] as ITavernData[];
        tavernHistory.forEach((tavernData: ITavernData, index: number) => {
            if (index <= historyIndex) {
                pastTavernHistory.push(tavernData);
            }
        });
        setTavernHistory([...pastTavernHistory, newTavernData]);
        setHistoryIndex(historyIndex + 1);
    };

    const updateFitting = (fitting: {
        fits: association[];
        misfits: association[];
    }) => {
        const tavern = tavernHistory[historyIndex];
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
                    {
                        fits: tavern.fits,
                        misfits: tavernData.fitting.misfits,
                    },
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
        setHistoryIndex(0);
        setTavernHistory([tavernData]);
    };

    const updateName = (name: string) => {
        const tavern = tavernHistory[historyIndex];
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
            add: menuCategory | undefined;
            delete: menuCategory | undefined;
        }
    ) => {
        const tavern = tavernHistory[historyIndex];
        const newDrinksLeft = new Map([]) as Map<menuCategory, boolean>;
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
            const newBannerVisible =
                newEmptyCategories.length < 1
                    ? false
                    : tavern.drinkBannerData.isVisible;
            newDrinkBannerData = {
                emptyCategories: newEmptyCategories,
                isVisible: newBannerVisible,
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
    //TODO: Comapre this with updateDrinks
    const updateDishes = (
        dishes: Offer[],
        is: {
            add: menuCategory | undefined;
            delete: menuCategory | undefined;
        }
    ) => {
        const tavern = tavernHistory[historyIndex];
        const newDishesLeft = new Map([]) as Map<menuCategory, boolean>;
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
            const newBannerVisible =
                newEmptyCategories.length < 1
                    ? false
                    : tavern.foodBannerData.isVisible;

            newFoodBannerData = {
                emptyCategories: newEmptyCategories,
                isVisible: newBannerVisible,
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
        const tavern = tavernHistory[historyIndex];
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
        const tavern = tavernHistory[historyIndex];
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
        const tavern = tavernHistory[historyIndex];
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

    const onUpdate = {
        forFitting: updateFitting,
        forDrinks: updateDrinks,
        forDishes: updateDishes,
        forDrinkBannerVisible: setDrinkBannerVisible,
        forFoodBannerVisible: setFoodBannerVisible,
        forPrice: updatePrice,
        forTavernTemplate: buildTavernTemplate,
        forName: updateName,
    };
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="YOU ALL MEET IN A TAVERN!"
                    component={TitleScene}
                />
                <Stack.Screen
                    name="START OPTIONS"
                    children={({ navigation }) => (
                        <StartOptionsScene
                            onTavernTemplate={onUpdate.forTavernTemplate}
                            onNextScene={() => {
                                navigation.navigate('EDIT TAVERN');
                            }}
                        ></StartOptionsScene>
                    )}
                    options={{
                        header: ({ navigation }) => (
                            <AppBar
                                onRedo={() => {
                                    setHistoryIndex(historyIndex + 1);
                                }}
                                onUndo={() => {
                                    setHistoryIndex(historyIndex - 1);
                                }}
                                redoDisabled={
                                    historyIndex === tavernHistory.length - 1
                                }
                                undoDisabled={historyIndex === 0}
                                onBackNavigation={() => {
                                    navigation.navigate(
                                        'YOU ALL MEET IN A TAVERN!'
                                    );
                                }}
                                sceneTitle="EDIT TAVERN"
                            ></AppBar>
                        ),
                    }}
                />
                <Stack.Screen
                    name="EDIT TAVERN"
                    options={{
                        header: ({ navigation }) => (
                            <AppBar
                                onRedo={() => {
                                    setHistoryIndex(historyIndex + 1);
                                }}
                                onUndo={() => {
                                    setHistoryIndex(historyIndex - 1);
                                }}
                                redoDisabled={
                                    historyIndex === tavernHistory.length - 1
                                }
                                undoDisabled={historyIndex === 0}
                                onBackNavigation={() => {
                                    navigation.navigate(
                                        'YOU ALL MEET IN A TAVERN!'
                                    );
                                }}
                                sceneTitle="EDIT TAVERN"
                            ></AppBar>
                        ),
                    }}
                    children={() => (
                        <EditNavigator
                            tavern={tavernHistory[historyIndex]}
                            onUpdate={onUpdate}
                        ></EditNavigator>
                    )}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
