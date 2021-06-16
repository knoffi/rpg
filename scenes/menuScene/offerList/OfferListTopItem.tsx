import * as React from 'react';
import { List } from 'react-native-paper';
import { OpacitySwiperText } from '../../../components/OpacitySwiper/OpacitySwiperText';
import { WIDTH_FACTOR } from '../../../dimensionConstants';
import { productActions } from './productActions';

const SWIPE_THRESHOLD = 50 * WIDTH_FACTOR;
export const OfferListTopItem = (props: {
    drinkName: string;
    actions: productActions;
    noDrinkToAddLeft: boolean;
    priceString: string;
    isUserMade?: boolean;
}) => {
    const actions = props.actions;
    const drinkName = props.drinkName;
    const editPossible = props.isUserMade;
    const rerollPossible = !editPossible && !props.noDrinkToAddLeft;
    const priceString = props.priceString;
    return (
        <List.Item
            title=""
            onPressOut={actions.onShop}
            onLongPress={actions.onInfo}
            left={(props) => {
                return (
                    <OpacitySwiperText
                        swipeThreshold={SWIPE_THRESHOLD}
                        onSwipeRight={
                            editPossible
                                ? () => {
                                      actions.onEdit();
                                  }
                                : actions.onReroll
                        }
                        onSwipeLeft={actions.onDelete}
                        onClick={actions.onShop}
                        descriptionText={drinkName}
                        priceString={priceString}
                        leftSwipePossible={true}
                        rightSwipePossible={
                            editPossible ? true : rerollPossible
                        }
                        isUserMade={editPossible || false}
                    ></OpacitySwiperText>
                );
            }}
        ></List.Item>
    );
};
