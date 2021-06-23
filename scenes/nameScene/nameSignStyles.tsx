import { StyleSheet } from 'react-native';
import {
    FONT_FACTOR,
    HEIGHT_FACTOR,
    WIDTH_FACTOR,
} from '../../dimensionConstants';

export const nameSignStyles = StyleSheet.create({
    textView2: {
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 380 * WIDTH_FACTOR,
        height: 198 * HEIGHT_FACTOR,
        marginVertical: 10 * WIDTH_FACTOR,
        marginHorizontal: 10 * HEIGHT_FACTOR,
        paddingBottom: 30 * HEIGHT_FACTOR,
    },
    textView: {
        justifyContent: 'center',
        width: 380 * WIDTH_FACTOR,
        height: 198 * HEIGHT_FACTOR,
        marginVertical: 10 * WIDTH_FACTOR,
        marginHorizontal: 10 * HEIGHT_FACTOR,
    },
    articleText: {
        alignContent: 'center',
        textAlign: 'center',
        fontSize: (34 / 2) * FONT_FACTOR,
        color: 'goldenrod',
        fontFamily: 'primitive',
        marginBottom: 10 * HEIGHT_FACTOR,
    },
    nameText: {
        textAlign: 'center',
        fontSize: 34 * FONT_FACTOR,
        color: 'goldenrod',
        fontFamily: 'primitive',
        paddingBottom: 30 * HEIGHT_FACTOR,
        paddingTop: 60 * HEIGHT_FACTOR,
        paddingHorizontal: 10 * WIDTH_FACTOR,
        textAlignVertical: 'center',
    },
});
