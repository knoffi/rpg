import React, { useState } from 'react';
import { View } from 'react-native';
import { SavedDataHandler, WeSave } from '../../classes/database/Database';
import { ListOfSaves } from '../../components/ListOfSaves/ListOfSaves';
import { MinimalTavernData } from '../../mainNavigator/TavernData';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
export const TavernCollectionScene = (props: {
    buildTavern: (minimalTavernData: MinimalTavernData) => void;
}) => {
    const [listIsVisible, setListVisible] = useState(true);
    return (
        <View style={nameSceneStyles.backgroundView}>
            <ListOfSaves
                visible={listIsVisible}
                dataHandler={new SavedDataHandler(WeSave.taverns)}
                title={'TAVERNS'}
                onDismiss={() => {
                    setListVisible(false);
                }}
                tavernHandling={{
                    buildTavern: (minimalData: MinimalTavernData) => {
                        props.buildTavern(minimalData);
                        setListVisible(false);
                    },
                }}
            ></ListOfSaves>
        </View>
    );
};
