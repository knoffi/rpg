import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { AppBar } from '../appBar/AppBar';
import { ContentFiller } from '../classes/contentFiller/ContentFiller';
import { Database } from '../classes/database/Database';
import { EditNavigator } from '../editNavigator/EditNavigator';
import { Offer } from '../scenes/menuScene/Offer';
import { getAdjustedPrice } from '../scenes/menuScene/priceFunctions';
import { StartOptionsScene } from '../scenes/startOptionsScene/StartOptionsScene';
import { TavernCollectionScene } from '../scenes/tavernCollectionScene/TavernCollectionScene';
import { TitleScene } from '../scenes/titleScene/TitleScene';
import { taverns } from '../templates/taverns';
import {
    buildTracker,
    getNewTracker,
    getTavernHistoryInitializer,
} from './mainNavigatorFunctions';
import { TavernChange } from './TavernChange';
import { MinimalTavernData } from './TavernData';
import { DEFAULT_UNIVERSE_MAP, UniverseMap } from './UniverseMap';

const Stack = createStackNavigator();
export const MainNavigator = () => {
    const [tavernHistory, setTavernHistory] = useState([
        getTavernHistoryInitializer(DEFAULT_UNIVERSE_MAP),
    ]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const onDataChange = (change: TavernChange) => {
        const current = tavernHistory[historyIndex];
        const newTracker = getNewTracker(change, current.tracker);
        const newTavern = { ...current.tavern, ...change };
        const newSlice = { tavern: newTavern, tracker: newTracker };
        const pastHistory = tavernHistory.filter(
            (data, index) => index <= historyIndex
        );
        setTavernHistory(pastHistory.concat(newSlice));
        setHistoryIndex(historyIndex + 1);
    };
    const buildRandomTavern = (map: UniverseMap) => {
        const randomTavern = new ContentFiller(map).getRandomTavern();
        const newTracker = buildTracker(randomTavern);
        setHistoryIndex(0);
        setTavernHistory([{ tavern: randomTavern, tracker: newTracker }]);
    };
    const buildTavernTemplate = (templateKey: string) => {
        const minTavernDataByID = taverns.find(
            (tavern) => tavern.key === templateKey
        );
        if (minTavernDataByID) {
            const tavern = minTavernDataByID;
            const tracker = buildTracker(tavern);
            setHistoryIndex(0);
            setTavernHistory([{ tavern, tracker }]);
        } else {
            const defaultTavern =
                getTavernHistoryInitializer(DEFAULT_UNIVERSE_MAP);
            setHistoryIndex(0);
            setTavernHistory([defaultTavern]);
        }
    };
    const saveMinimalTavernData = async () => {
        const current = tavernHistory[historyIndex];
        const minimalData: MinimalTavernData = current.tavern;
        const dataHandler = new Database();
        dataHandler.saveData(minimalData, 'tavern');
    };

    const buildTavernFromMinimalData = (minimalData: MinimalTavernData) => {
        const newTracker = buildTracker(minimalData);
        const newStart = { tavern: minimalData, tracker: newTracker };
        setHistoryIndex(0);
        setTavernHistory([newStart]);
    };

    const getOfferPrice = (offer: Offer) => {
        const current = tavernHistory[historyIndex];
        return getAdjustedPrice(
            offer,
            current.tavern.prices,
            current.tavern.fitting.income
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
                            onTavernCollection={() =>
                                navigation.navigate('TAVERN COLLECTION')
                            }
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
                                    tavernHistory[historyIndex].tavern.prices
                                        .currency
                                }
                                onBuyChange={onDataChange}
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
                                    tavernHistory[historyIndex].tavern
                                        .boughtOffers
                                }
                                currencyName={
                                    tavernHistory[historyIndex].tavern.prices
                                        .currency
                                }
                                onBuyChange={onDataChange}
                            ></AppBar>
                        ),
                    }}
                    children={() => (
                        <EditNavigator
                            tavern={tavernHistory[historyIndex].tavern}
                            onDataChange={onDataChange}
                            tracker={tavernHistory[historyIndex].tracker}
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
                            onCancel={() => {
                                navigation.navigate(
                                    'YOU ALL MEET IN A TAVERN!'
                                );
                            }}
                        ></TavernCollectionScene>
                    )}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
