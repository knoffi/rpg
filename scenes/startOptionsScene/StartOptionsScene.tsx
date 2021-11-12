import React from 'react';
import { View } from 'react-native';
import { UniverseMap } from '../../mainNavigator/UniverseMap';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { EditModal } from './EditModal';

export const StartOptionsScene = (props: {
    onTavernTemplate: (key: string) => void;
    onRandomGenerator: (map: UniverseMap) => void;
    onNextScene: () => void;
}) => {
    return (
        <View style={nameSceneStyles.backgroundView}>
            <EditModal
                buildTavernTemplate={(key: string) => {
                    props.onTavernTemplate(key);
                    props.onNextScene();
                }}
                buildRandomTavern={(map: UniverseMap) => {
                    props.onRandomGenerator(map);
                    props.onNextScene();
                }}
            />
        </View>
    );
};
