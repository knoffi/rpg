import React from 'react';
import { Button } from 'react-native-paper';

export const ContextController = (props: {
    onPress: () => void;
    text: string;
}) => {
    //TODO: Get content list by static method from ContentCreator
    return <Button onPress={props.onPress}>{props.text}</Button>;
};
