import * as React from 'react';
import { List } from 'react-native-paper';
import { OpacitySwiperText } from '../../../components/OpacitySwiper/OpacitySwiperText';
import { WIDTH_FACTOR } from '../../../dimensionConstants';
import { IProductActions } from './actionInterfaces';

const SWIPE_THRESHOLD = 70 * WIDTH_FACTOR;
export const OfferListItem = (props: {
    title: string;
    description: string;
    actions: IProductActions;
    noDrinkToAddLeft: boolean;
    price: string;
    isUserMade?: boolean;
}) => {
    const actions = props.actions;
    const title = props.title;
    const editPossible = props.isUserMade || false;
    const rerollPossible = !editPossible && !props.noDrinkToAddLeft;
    const onRightSwipe = props.isUserMade
        ? actions.onEdit
        : props.noDrinkToAddLeft
        ? () => {}
        : actions.onReroll;
    const onLeftSwipe = props.actions.onDelete;
    const price = props.price;
    const description = props.description;
    const swiperResetToggle = editPossible || rerollPossible;
    return (
        <List.Item
            title=""
            onPressOut={actions.onShop}
            onLongPress={actions.onInfo}
            left={(props) => {
                return (
                    <OpacitySwiperText
                        key={'' + swiperResetToggle}
                        swipeThreshold={SWIPE_THRESHOLD}
                        onSwipeRight={onRightSwipe}
                        onSwipeLeft={onLeftSwipe}
                        onClick={actions.onShop}
                        title={title}
                        description={description}
                        price={price}
                        leftSwipePossible={true}
                        rightSwipePossible={
                            editPossible ? true : rerollPossible
                        }
                        isUserMade={editPossible}
                    ></OpacitySwiperText>
                );
            }}
        ></List.Item>
    );
};
