import React from 'react';
import { Button } from 'react-native-paper';
import { ContentCreator } from '../../../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../../../classes/contentCreator/FantasKeys';

export const ContextController = (props: {
    setText: (text: FantasyKeys) => void;
    text: FantasyKeys;
}) => {
    const onPress = () => {
        const nextKey = ContentCreator.getNextKey(props.text);
        props.setText(nextKey);
    };
    ContentCreator.getNextKey;
    return <Button onPress={onPress}>{props.text}</Button>;
};
