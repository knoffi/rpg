import React from 'react';
import { Button } from 'react-native-paper';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../../dimensionConstants';
import { Describable } from '../../../mainNavigator/TavernData';

export const CategoryButton = (props: {
    category: Describable;
    onPress: () => void;
}) => {
    return (
        <Button
            onPress={props.onPress}
            mode="contained"
            style={{
                marginVertical: 10 * HEIGHT_FACTOR,
                marginHorizontal: 50 * WIDTH_FACTOR,
            }}
        >
            {props.category}
        </Button>
    );
};
