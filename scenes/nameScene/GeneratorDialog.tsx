import React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, Title } from 'react-native-paper';
import { WeServe } from '../../editNavigator/WeServe';

export const GeneratorDialog = (props: {
    isVisible: boolean;
    onDismiss: () => void;
    generate: (isAbout: WeServe | 'ALL') => void;
}) => {
    const titles = [...Object.values(WeServe), 'ALL'];
    const buttons = titles.map((isAbout) => (
        <View
            style={{ flexDirection: 'row', justifyContent: 'center' }}
            key={isAbout}
        >
            <Button>{isAbout.toUpperCase()}</Button>
        </View>
    ));
    return (
        <Portal>
            <Dialog
                dismissable={true}
                visible={props.isVisible}
                onDismiss={props.onDismiss}
            >
                <Title>ROLL CHAPTERS</Title>
                <View style={{ justifyContent: 'space-evenly' }}>
                    {buttons}
                </View>
            </Dialog>
        </Portal>
    );
};
