import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { association } from '../classes/Adjectives';
import AppBar from '../components/AppBar';
import { EditNavigator } from '../editNavigator/EditNavigator';
import {
    getProductsLeftAndBannerData,
    getStartMenuMaps,
} from '../editNavigator/editNavigatorFunctions';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { Offer } from '../scenes/menuScene/menuEnums';
import { StartOptionsScene } from '../scenes/startOptionsScene/StartOptionsScene';
import { TitleScene } from '../scenes/titleScene/TitleScene';
import { taverns } from '../templates/taverns';
import { TavernData } from './TavernData';

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
        boughtOffers: [] as Offer[],
    } as TavernData;
    const [tavernHistory, setTavernHistory] = useState([startData]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const onDataChange = (newData: Partial<TavernData>) => {
        let newTavernData = { ...tavernHistory[historyIndex], ...newData };
        const pastTavernHistory = [] as TavernData[];
        tavernHistory.forEach((tavernData: TavernData, index: number) => {
            if (index <= historyIndex) {
                pastTavernHistory.push(tavernData);
            }
        });
        setTavernHistory([...pastTavernHistory, newTavernData]);
        setHistoryIndex(historyIndex + 1);
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

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="YOU ALL MEET IN A TAVERN!"
                    component={TitleScene}
                    options={{ title: 'IMPROVISE & FANTASIZE.' }}
                />
                <Stack.Screen
                    name="START OPTIONS"
                    children={({ navigation }) => (
                        <StartOptionsScene
                            onTavernTemplate={buildTavernTemplate}
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
                                boughtOffers={[] as Offer[]}
                                currencyName={
                                    tavernHistory[historyIndex].prices.currency
                                }
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
                                boughtOffers={
                                    tavernHistory[historyIndex].boughtOffers
                                }
                                currencyName={
                                    tavernHistory[historyIndex].prices.currency
                                }
                            ></AppBar>
                        ),
                    }}
                    children={() => (
                        <EditNavigator
                            tavern={tavernHistory[historyIndex]}
                            onDataChange={onDataChange}
                        ></EditNavigator>
                    )}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
