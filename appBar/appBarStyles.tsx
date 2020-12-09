import { StyleSheet } from 'react-native';
import { WIDTH_FACTOR } from '../dimensionConstants';

const BADGE_POSITION = { top: -35, right: -4 };
const moneyColor = '#996515';

export const appBarStyles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    badge: BADGE_POSITION,
    listItemView: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,

        width: 325 * WIDTH_FACTOR,
        margin: 10 * WIDTH_FACTOR,
        padding: 5,
        justifyContent: 'space-between',
    },
    orderName: {
        fontSize: 18 * WIDTH_FACTOR,
        fontWeight: 'bold',
    },
    orderPriceView: {
        justifyContent: 'flex-end',
        width: 315 * WIDTH_FACTOR,
        flexDirection: 'row',
    },
    orderPriceText: {
        color: moneyColor,
        fontSize: 18 * WIDTH_FACTOR,
        fontWeight: 'bold',
    },
    listTitle: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 22 * WIDTH_FACTOR,
    },
    totalPrizeNumber: {
        fontSize: 22 * WIDTH_FACTOR,
        color: moneyColor,
    },
    totalPrizeText: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 22 * WIDTH_FACTOR,
    },
});
