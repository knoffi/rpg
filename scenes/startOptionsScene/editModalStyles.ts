import { StyleSheet } from 'react-native';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../dimensionConstants';

export const editModalStyles = StyleSheet.create({
    button: {
        marginHorizontal: 32 * WIDTH_FACTOR,
        marginVertical: 16 * HEIGHT_FACTOR,
        paddingHorizontal: 16 * WIDTH_FACTOR,
        paddingVertical: 16 * HEIGHT_FACTOR,
    },
    paragraph: {
        fontWeight: 'bold',
        fontSize: 30 * WIDTH_FACTOR,
        textDecorationLine: 'underline',
        paddingTop: 30 * HEIGHT_FACTOR,
        paddingBottom: 20 * HEIGHT_FACTOR,
    },
    containerStyle: {
        backgroundColor: 'white',
        paddingHorizontal: 10 * WIDTH_FACTOR,
        paddingVertical: 10 * HEIGHT_FACTOR,
        zIndex: 3,
    },
});
