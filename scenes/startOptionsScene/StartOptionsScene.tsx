import React from 'react';
import { View } from 'react-native';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { EditModal } from './EditModal';

export const StartOptionsScene = (props: {
    onTavernTemplate: (key: string) => void;
    onRandomGenerator: () => void;
    onNextScene: () => void;
}) => {
    return (
        <View style={nameSceneStyles.backgroundView}>
            <EditModal
                buildTavernTemplate={(key: string) => {
                    props.onTavernTemplate(key);
                    props.onNextScene();
                }}
                buildRandomTavern={() => {
                    props.onRandomGenerator();
                    props.onNextScene();
                }}
            />
        </View>
    );
};
