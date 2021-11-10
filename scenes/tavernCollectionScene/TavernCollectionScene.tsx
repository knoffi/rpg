import React, { useState } from 'react';
import { View } from 'react-native';
import { Database } from '../../classes/database/Database';
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
                building={{
                    isAbout: 'tavern',
                    build: (minimalData: MinimalTavernData) => {
                        props.buildTavern(minimalData);
                        setListVisible(false);
                    },
                }}
                dataHandler={new Database()}
                title={'TAVERNS'}
                onDismiss={() => {
                    setListVisible(false);
                }}
            ></ListOfSaves>
        </View>
    );
};
