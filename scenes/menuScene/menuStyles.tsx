import { StyleSheet } from 'react-native';
import { WIDTH_FACTOR } from '../../dimensionConstants';

export const menuSceneStyles = StyleSheet.create({
    accordeonListTitle: {
        fontSize: 30 * WIDTH_FACTOR,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    drinkName: {
        fontSize: 20 * WIDTH_FACTOR,
        fontWeight: 'bold',
        marginRight: 10 * WIDTH_FACTOR,
        width: 348 * WIDTH_FACTOR,
    },
    drinkPrice: {
        fontSize: 18 * WIDTH_FACTOR,
        fontStyle: 'italic',
        color: '#996515',
    },
});
