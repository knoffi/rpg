import React from 'react';
import { Text, View } from 'react-native';
import { menuSceneStyles } from '../../scenes/menuScene/menuStyles';
import { AppearingView } from './AppearingView';

export const MemoizedSwiperText = React.memo(
    (props: {
        title: string;
        description: string;
        price: string;
        noAnimation: boolean;
    }) => {
        const isNotForDishes = props.price === '';
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}
            >
                <AppearingView noAnimation={props.noAnimation}>
                    <View>
                        <View
                            style={
                                isNotForDishes
                                    ? menuSceneStyles.detailsListItemView
                                    : menuSceneStyles.drinkListItemView
                            }
                        >
                            <Text style={menuSceneStyles.drinkName}>
                                {props.title}
                            </Text>
                            <Text style={menuSceneStyles.drinkDescription}>
                                {props.description}
                            </Text>
                            {isNotForDishes ? undefined : (
                                <Text style={menuSceneStyles.drinkPrice}>
                                    {props.price}
                                </Text>
                            )}
                        </View>
                    </View>
                </AppearingView>
            </View>
        );
    }
);
