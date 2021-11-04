import { StyleSheet } from 'react-native';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../dimensionConstants';

export const menuSceneStyles = StyleSheet.create({
    accordionListTitle: {
        fontSize: 30 * WIDTH_FACTOR,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    drinkName: {
        fontSize: 20 * WIDTH_FACTOR,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginRight: 10 * WIDTH_FACTOR,
        width: 348 * WIDTH_FACTOR,
        marginBottom: 5 * HEIGHT_FACTOR,
    },
    animatedText: { fontWeight: 'bold', padding: 20 },
    drinkListItemView: { flexDirection: 'column', marginBottom: 20 },
    detailsListItemView: { flexDirection: 'column', marginBottom: 1 },
    drinkDescription: {
        fontSize: 15 * WIDTH_FACTOR,
        fontWeight: '100',
        textAlign: 'center',
        letterSpacing: 0.6 * WIDTH_FACTOR,
        fontStyle: 'italic',
        // marginRight: 10 * WIDTH_FACTOR,
        width: 348 * WIDTH_FACTOR,
        marginBottom: 15 * HEIGHT_FACTOR,
    },
    drinkPrice: {
        fontSize: 18 * WIDTH_FACTOR,
        textAlign: 'center',
        color: '#996515',
    },
});
