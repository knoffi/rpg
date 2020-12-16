import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { TitleButtons } from './TitleButtons';
import { titleSceneStyle } from './titleSceneStyle';

export const TitleScene = ({ navigation }: any) => {
    return (
        <View style={titleSceneStyle.BG}>
            <Text style={titleSceneStyle.headline}>
                You all meet in a tavern
            </Text>
            <TitleButtons
                onEdit={() => {
                    navigation.navigate('START OPTIONS');
                }}
                onCollection={() => {}}
                onAssets={() => {}}
                onAcknowledgments={() => {}}
                paddingTop={titleSceneStyle.buttonBlock.paddingTop}
            />
        </View>
    );
};
