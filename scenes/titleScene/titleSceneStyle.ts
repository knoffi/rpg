import { StyleSheet } from 'react-native';
import {
    HEIGHT_FACTOR,
    TEST_SCREEN_HEIGHT,
    WIDTH_FACTOR,
} from '../../dimensionConstants';
import { globalStyles } from '../globalStyles';

export const titleSceneStyle = StyleSheet.create({
    button: {
        marginHorizontal: 50 * WIDTH_FACTOR,
        paddingVertical: 15 * HEIGHT_FACTOR,
        marginVertical: 20 * HEIGHT_FACTOR,
    },
    headline: {
        backgroundColor: '#4f3627',
        fontSize: globalStyles.title.fontSize * WIDTH_FACTOR,
        fontFamily: globalStyles.title.fontFamily,
        color: 'lightgrey',
        borderTopColor: 'black',
        borderTopWidth: 3 * HEIGHT_FACTOR,
        borderBottomColor: 'black',
        borderBottomWidth: 3 * HEIGHT_FACTOR,
        paddingVertical: 30 * HEIGHT_FACTOR,
        textAlign: 'center',
    },
    buttonBlock: { paddingTop: 50 * HEIGHT_FACTOR },
    BG: {
        backgroundColor: 'beige',
        height: TEST_SCREEN_HEIGHT,
    },
});
