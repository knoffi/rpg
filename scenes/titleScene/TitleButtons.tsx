import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { titleSceneStyle } from './titleSceneStyle';

export const TitleButtons = (props: {
    onEdit: () => void;
    onCollection: () => void;
    onAssets: () => void;
    onAcknowledgments: () => void;
    paddingTop: number;
}) => {
    return (
        <View
            style={{ justifyContent: 'center', paddingTop: props.paddingTop }}
        >
            <Button
                mode="contained"
                style={titleSceneStyle.button}
                onPress={props.onEdit}
            >
                Edit Tavern
            </Button>
            <Button
                mode="contained"
                style={titleSceneStyle.button}
                onPress={props.onCollection}
            >
                Tavern Collection
            </Button>
            <Button
                mode="contained"
                style={titleSceneStyle.button}
                onPress={props.onAssets}
            >
                Tavern Assets
            </Button>
            <Button
                mode="contained"
                style={titleSceneStyle.button}
                onPress={props.onAcknowledgments}
            >
                Acknowledgements
            </Button>
        </View>
    );
};
