import { StyleSheet } from 'react-native';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../../dimensionConstants';

export const productEditorStyles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
        marginTop: 80 * HEIGHT_FACTOR,
    },
    topTextFields: {
        marginHorizontal: 10 * WIDTH_FACTOR,
        width: 170 * WIDTH_FACTOR,
    },
    bottomItem: {
        marginVertical: 20 * HEIGHT_FACTOR,
        marginHorizontal: 10 * WIDTH_FACTOR,
        justifyContent: 'center',
    },
    descriptionTextField: { width: 300 * WIDTH_FACTOR },
});
