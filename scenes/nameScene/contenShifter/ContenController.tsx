import React from 'react';
import { Button } from 'react-native-paper';
import { ContentCreator } from '../../../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../../../classes/contentCreator/FantasKeys';

export const ContextController = (props: {
    setText: (text: FantasyKeys) => void;
    text: FantasyKeys;
}) => {
    // const texts = Object.values(FantasyKeys);
    // const startIndex = texts.findIndex(key=>key===FantasyKeys.standard);
    // const [index,setIndex]=useState(startIndex);
    // const incrementText = ()=>{
    //     const newIndex =
    //     setIndex(index+1);

    // }
    const onPress = () => {
        const nextKey = ContentCreator.getNextKey(props.text);
        props.setText(nextKey);
    };
    ContentCreator.getNextKey;
    return <Button onPress={onPress}>{props.text}</Button>;
};
