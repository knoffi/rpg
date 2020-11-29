import React from 'react';
import { View } from 'react-native';
import { association } from '../../classes/Adjectives';
import { misfitMode } from '../../helpingFunctions/misfitModes';
import { getMisfits } from '../../helpingFunctions/misFitsHandlers';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import { EditModal } from './EditModal';

export const StartOptionsScene = (props: {
    onTavernTemplate: (
        key: string,
        getMisfits: (fits: association[]) => association[]
    ) => void;
    onNextScene: () => void;
}) => {
    return (
        <View style={nameSceneStyles.backgroundView}>
            <EditModal
                buildTavernTemplate={(key: string) => {
                    props.onTavernTemplate(key, (fits: association[]) => {
                        return getMisfits(fits, misfitMode.stricter);
                    });
                    props.onNextScene();
                }}
            />
        </View>
    );
};
