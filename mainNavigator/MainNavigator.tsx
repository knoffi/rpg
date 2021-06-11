import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { AppBar } from '../appBar/AppBar';
import { association } from '../classes/association';
import { SavedDataHandler, WeSave } from '../classes/Database';
import { EditNavigator } from '../editNavigator/EditNavigator';
import { Offer } from '../scenes/menuScene/menuEnums';
import { getAdjustedPrice } from '../scenes/menuScene/priceFunctions';
import { StartOptionsScene } from '../scenes/startOptionsScene/StartOptionsScene';
import { TavernCollectionScene } from '../scenes/tavernCollectionScene/TavernCollectionScene';
import { TitleScene } from '../scenes/titleScene/TitleScene';
import { taverns } from '../templates/taverns';
import { getRandomStartTavern } from './getRandomStartTavern';
import {
    getMinimalDataFromTavern,
    getTavernFromMinimalData,
    getTavernHistoryInitializer,
} from './mainNavigatorFunctions';
import { MinimalTavernData, TavernData } from './TavernData';

const Stack = createStackNavigator();
export const MainNavigator = () => {
    const [tavernHistory, setTavernHistory] = useState([
        getTavernHistoryInitializer(),
    ]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const onDataChange = (newData: Partial<TavernData>) => {
        const newTavernData = { ...tavernHistory[historyIndex], ...newData };
        const pastTavernHistory = [] as TavernData[];
        //TODO: use declarative approach
        tavernHistory.forEach((tavernData: TavernData, index: number) => {
            if (index <= historyIndex) {
                pastTavernHistory.push(tavernData);
            }
        });
        setTavernHistory([...pastTavernHistory, newTavernData]);
        setHistoryIndex(historyIndex + 1);
    };
    const buildRandomTavern = () => {
        const randomStartTavern = getRandomStartTavern();
        setHistoryIndex(0);
        setTavernHistory([randomStartTavern]);
    };
    const buildTavernTemplate = (
        templateKey: string,
        getMisfits: (fits: association[]) => association[]
    ) => {
        const minTavernDataByID = taverns.find(
            (tavern) => tavern.key === templateKey
        );
        const tavernData = minTavernDataByID
            ? getTavernFromMinimalData(minTavernDataByID)
            : getTavernHistoryInitializer();
        setHistoryIndex(0);
        setTavernHistory([tavernData]);
    };
    //TODO: Here continue
    const saveMinimalTavernData = async () => {
        const tavern = tavernHistory[historyIndex];
        const minimalData = getMinimalDataFromTavern(tavern);
        const dataHandler = new SavedDataHandler(WeSave.taverns);
        dataHandler.saveData(minimalData);
    };

    const buildTavernFromMinimalData = (minimalData: MinimalTavernData) => {
        const buildTavern = getTavernFromMinimalData(minimalData);
        setHistoryIndex(0);
        setTavernHistory([buildTavern]);
    };

    const getOfferPrice = (offer: Offer) => {
        const tavern = tavernHistory[historyIndex];
        return getAdjustedPrice(
            offer,
            tavern.fitting.fits,
            tavern.fitting.misfits,
            tavern.prices
        );
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
                                sceneTitle="EDIT TAVERN"
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
                                sceneTitle="EDIT TAVERN"
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
