import React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { WeServe } from '../../editNavigator/WeServe';
import { nameSceneStyles } from './nameSceneStyles';

export const GeneratorDialog = (props: {
    isVisible: boolean;
    onDismiss: () => void;
    generate: (isAbout: WeServe | 'ALL') => void;
}) => {
    const buttonTitles: (WeServe | 'ALL')[] = [
        ...Object.values(WeServe),
        'ALL',
    ];
    const buttons = buttonTitles.map((isAbout) => (
        <Button
            mode="contained"
            style={nameSceneStyles.buttonsInDialog}
            key={isAbout}
            onPress={() => {
                props.generate(isAbout);
                props.onDismiss();
            }}
        >
            {isAbout.toUpperCase()}
        </Button>
    ));
    return (
        <Portal>
            <Dialog
                dismissable={true}
                visible={props.isVisible}
                onDismiss={props.onDismiss}
            >
                <View style={nameSceneStyles.viewInDialog}>{buttons}</View>
            </Dialog>
        </Portal>
    );
};
