import { StyleSheet } from 'react-native';
import {
    HEIGHT_FACTOR,
    TEST_SCREEN_HEIGHT,
    TEST_SCREEN_WIDTH,
    WIDTH_FACTOR,
} from '../../dimensionConstants';

export const nameSceneStyles = StyleSheet.create({
    backgroundView: {
        flexDirection: 'column',
        backgroundColor: '#E8D7B4',
        zIndex: 0,
        width: TEST_SCREEN_WIDTH * WIDTH_FACTOR,
        height: TEST_SCREEN_HEIGHT * HEIGHT_FACTOR,
    },
    button: {
        backgroundColor: '#fff',
    },
    associationView: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        zIndex: 0,
    },
    signView: {
        marginTop: 10 * HEIGHT_FACTOR,
        marginBottom: 50 * HEIGHT_FACTOR,
    },
    pickersBar: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonsInDialog: {
        marginVertical: 10 * HEIGHT_FACTOR,
        marginHorizontal: 50 * WIDTH_FACTOR,
    },
    viewInDialog: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
});
