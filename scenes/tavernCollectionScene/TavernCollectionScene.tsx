import React, { useState } from 'react';
import { View } from 'react-native';
import {
    prefixMap,
    TAVERN_KEY_PREIMAGE,
} from '../../components/ListOfSaves/keyHandlers';
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
                mainKey={prefixMap.get(TAVERN_KEY_PREIMAGE)!}
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
