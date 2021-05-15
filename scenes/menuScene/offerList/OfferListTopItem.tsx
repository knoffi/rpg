import * as React from 'react';
import { Animated, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { WIDTH_FACTOR } from '../../../dimensionConstants';
import { OpacitySwiper } from '../../titleScene/OpacitySwiper';
import { menuSceneStyles } from '../menuStyles';
import { getDishTexts } from './nameSplitter/getDishTexts';
import { productActions } from './productActions';

const SWIPE_THRESHOLD = 150 * WIDTH_FACTOR;
export const OfferListTopItem = (props: {
    drinkName: string;
    actions: productActions;
    noDrinkToAddLeft: boolean;
    priceString: string;
    isUserMade?: boolean;
}) => {
    const actions = props.actions;
    const thisDrinkName = props.drinkName;
    const editPossible = props.isUserMade;
    const rerollPossible = !props.noDrinkToAddLeft && !props.isUserMade;
    const price = props.priceString;
    const actionText =
        (text: string, inputRange: number[], outputRange: number[]) =>
        (progress: any, dragX: any) => {
            const scale = dragX.interpolate({
                inputRange: inputRange,
                outputRange: outputRange,
                extrapolate: 'clamp',
            });
            return (
                <View style={{ justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <Animated.Text
                            style={[
                                menuSceneStyles.animatedText,
                                { transform: [{ scale }] },
                            ]}
                        >
                            {text}
                        </Animated.Text>
                    </View>
                </View>
            );
        };

    return (
        <List.Item
            title=""
            onPressOut={actions.onShop}
            onLongPress={actions.onInfo}
            left={(props) => {
                return (
                    <OpacitySwiper
                        swipeThreshold={SWIPE_THRESHOLD}
                        onSwipeRight={actions.onReroll}
                        onSwipeLeft={actions.onDelete}
                        onClick={actions.onShop}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <DishText
                                drinkName={thisDrinkName}
                                priceString={price}
                            ></DishText>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}
                            ></View>
                        </View>
                    </OpacitySwiper>
                );
            }}
        ></List.Item>
    );
};

const DishText = (props: { drinkName: string; priceString: string }) => {
    const { name, description } = getDishTexts(props.drinkName);

    return (
        <View>
            <View style={menuSceneStyles.listItemView}>
                <Text style={menuSceneStyles.drinkName}>{name}</Text>
                <Text style={menuSceneStyles.drinkDescription}>
                    {description}
                </Text>
                <Text style={menuSceneStyles.drinkPrice}>
                    {props.priceString}
                </Text>
            </View>
        </View>
    );
};
