import * as React from 'react';
import { useState } from 'react';
import { Animated, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Divider, List, Text } from 'react-native-paper';
import { menuSceneStyles } from '../menuStyles';
import { getDishTexts } from './nameSplitter/getDishTexts';
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
    ) => (progress: any, dragX: any) => {
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
    const swipeableRef = React.useRef(null);
    // Is used for use in ImpressionAccordionList, otherwise Swipeable will not close on its own
    //TODO: Find the reason for this. Impressions and Dishes do not seem to be updated in the same
    const closeSwipeable = () => {
        if (swipeableRef.current !== null) {
            swipeableRef.current.close();
        }
    };

    return (
        <List.Item
            title=""
            onPressOut={actions.onShop}
            onLongPress={actions.onInfo}
            left={(props) => {
                return (
                    <Swipeable
                        ref={swipeableRef}
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
                                console.log('I Reroll');
                                actions.onReroll();
                            }
                            closeSwipeable();
                        }}
                        onSwipeableRightWillOpen={() => {
                            closeSwipeable();
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
                            <DishText
                                drinkName={thisDrinkName}
                                priceString={price}
                            ></DishText>
                            <Divider />
                        </Animated.View>
                    </Swipeable>
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
