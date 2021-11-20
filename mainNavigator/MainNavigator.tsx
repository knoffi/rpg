import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { AppBar } from '../appBar/AppBar';
import { Database } from '../classes/database/Database';
import { EditNavigator } from '../editNavigator/EditNavigator';
import { Offer } from '../scenes/menuScene/Offer';
import { getAdjustedPrice } from '../scenes/menuScene/priceFunctions';
import { StartOptionsScene } from '../scenes/startOptionsScene/StartOptionsScene';
import { TavernCollectionScene } from '../scenes/tavernCollectionScene/TavernCollectionScene';
import { TitleScene } from '../scenes/titleScene/TitleScene';
import { taverns } from '../templates/taverns';
import { getRandomStartTavern } from './randomTavern/getRandomStartTavern';
import { getTavernHistoryInitializer } from './mainNavigatorFunctions';
import { MinimalTavernData } from './TavernData';
import { DEFAULT_UNIVERSE_MAP, UniverseMap } from './UniverseMap';

const Stack = createStackNavigator();
export const MainNavigator = () => {
    const [tavernHistory, setTavernHistory] = useState([
        getTavernHistoryInitializer(DEFAULT_UNIVERSE_MAP),
    ]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const onDataChange = (newData: Partial<MinimalTavernData>) => {
        if (newData) {
            const newTavernData = {
                ...tavernHistory[historyIndex],
                ...newData,
            };
            const pastTavernHistory = tavernHistory.filter(
                (data, index) => index <= historyIndex
            );
            setTavernHistory([...pastTavernHistory, newTavernData]);
            setHistoryIndex(historyIndex + 1);
        }
    };
    const buildRandomTavern = (map: UniverseMap) => {
        const randomStartTavern = getRandomStartTavern(map);
        setHistoryIndex(0);
        setTavernHistory([randomStartTavern]);
    };
    const buildTavernTemplate = (templateKey: string) => {
        const minTavernDataByID = taverns.find(
            (tavern) => tavern.key === templateKey
        );
        const tavernData =
            minTavernDataByID ||
            getTavernHistoryInitializer(DEFAULT_UNIVERSE_MAP);
        setHistoryIndex(0);
        setTavernHistory([tavernData]);
    };
    const saveMinimalTavernData = async () => {
        const tavern = tavernHistory[historyIndex];
        const minimalData: MinimalTavernData = tavern;
        const dataHandler = new Database();
        dataHandler.saveData(minimalData, 'tavern');
    };

    const buildTavernFromMinimalData = (minimalData: MinimalTavernData) => {
        setHistoryIndex(0);
        setTavernHistory([minimalData]);
    };

    const getOfferPrice = (offer: Offer) => {
        const tavern = tavernHistory[historyIndex];
        return getAdjustedPrice(offer, tavern.prices, tavern.fitting.income);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'YOU ALL MEET IN A TAVERN!'}>
                <Stack.Screen
                    name="YOU ALL MEET IN A TAVERN!"
                    component={TitleScene}
                    options={{ title: 'IMPROVISE & FANTASIZE.' }}
                />
                <Stack.Screen
                    name="START OPTIONS"
                    children={({ navigation }) => (
                        <StartOptionsScene
                            onRandomGenerator={buildRandomTavern}
                            onTavernTemplate={buildTavernTemplate}
                            onNextScene={() => {
                                navigation.navigate('EDIT TAVERN');
                            }}
                        ></StartOptionsScene>
                    )}
                    options={{
                        header: ({ navigation }) => (
                            <AppBar
                                getAdjustedPrice={getOfferPrice}
                                onSave={saveMinimalTavernData}
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
                                sceneTitle=""
                                boughtOffers={[] as Offer[]}
                                currencyName={
                                    tavernHistory[historyIndex].prices.currency
                                }
                                onDataChange={onDataChange}
                            ></AppBar>
                        ),
                    }}
                />
                <Stack.Screen
                    name="EDIT TAVERN"
                    options={{
                        header: ({ navigation }) => (
                            <AppBar
                                getAdjustedPrice={getOfferPrice}
                                onSave={saveMinimalTavernData}
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
                                sceneTitle=""
                                boughtOffers={
                                    tavernHistory[historyIndex].boughtOffers
                                }
                                currencyName={
                                    tavernHistory[historyIndex].prices.currency
                                }
                                onDataChange={onDataChange}
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
                <Stack.Screen
                    name="TAVERN COLLECTION"
                    children={({ navigation }) => (
                        <TavernCollectionScene
                            buildTavern={(minimalData: MinimalTavernData) => {
                                buildTavernFromMinimalData(minimalData);
                                navigation.navigate('EDIT TAVERN');
                            }}
                        ></TavernCollectionScene>
                    )}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
