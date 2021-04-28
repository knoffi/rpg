import * as React from 'react';
import { useState } from 'react';
import { Animated, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Divider, List, Text } from 'react-native-paper';
import { menuSceneStyles } from '../menuStyles';
import { productActions } from './productActions';

export const OfferListTopItem = (props: {
    drinkName: string;
    actions: productActions;
    noDrinkToAddLeft: boolean;
    priceString: string;
    isUserMade?: boolean;
}) => {
    const [isSwiping, setIsSwiping] = useState(false);
    const actions = props.actions;
    const thisDrinkName = props.drinkName;
    const editPossible = props.isUserMade;
    const rerollPossible = !props.noDrinkToAddLeft && !props.isUserMade;
    const price = props.priceString;

    const actionText = (
        text: string,
        inputRange: number[],
        outputRange: number[]
    ) => (progress, dragX) => {
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
                            { fontWeight: 'bold', padding: 20 },
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
                    <Swipeable
                        renderLeftActions={actionText(
                            rerollPossible
                                ? 'REROLL!'
                                : editPossible
                                ? 'EDIT!'
                                : 'FULL MENU',
                            [0, 100],
                            [0, 1]
                        )}
                        renderRightActions={actionText(
                            'DELETE!',
                            [-100, 0],
                            [1, 0]
                        )}
                        onActivated={() => {
                            setIsSwiping(true);
                        }}
                        onEnded={() => {
                            if (isSwiping) {
                                setIsSwiping(false);
                            } else {
                                actions.onShop();
                            }
                        }}
                        onSwipeableLeftWillOpen={() => {
                            if (editPossible) {
                                actions.onEdit();
                            }
                            if (rerollPossible) {
                                actions.onReroll();
                            }
                        }}
                        onSwipeableRightWillOpen={() => {
                            actions.onDelete();
                        }}
                        leftThreshold={100}
                        rightThreshold={100}
                    >
                        <Animated.View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <DishTextForMenu
                                drinkName={thisDrinkName}
                                priceString={price}
                            ></DishTextForMenu>
                            <Divider />
                            {/* </GestureRecognizer> */}
                        </Animated.View>
                    </Swipeable>
                );
            }}
        ></List.Item>
    );
};

const DishTextForMenu = (props: { drinkName: string; priceString: string }) => {
    const splittedDishText = props.drinkName.split(' ');
    const firstText = splittedDishText[0] + ' ' + splittedDishText[1];
    const secondText = splittedDishText.reduce(
        (res, cur, index) => (index > 1 ? res + ' ' + cur : res),
        ' '
    );

    return (
        <View>
            <View style={{ flexDirection: 'column', marginBottom: 20 }}>
                <Text style={menuSceneStyles.drinkName}>{firstText}</Text>
                <Text style={menuSceneStyles.drinkDescription}>
                    {secondText}
                </Text>
                <Text style={menuSceneStyles.drinkPrice}>
                    {props.priceString}
                </Text>
            </View>
        </View>
    );
};
