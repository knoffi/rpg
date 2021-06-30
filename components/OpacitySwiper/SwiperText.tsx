import React from 'react';
import { Text, View } from 'react-native';
import { menuSceneStyles } from '../../scenes/menuScene/menuStyles';
import { getDishTexts } from '../../scenes/menuScene/offerList/nameSplitter/getDishTexts';
import { AppearingView } from './AppearingView';

export const MemoizedSwiperText = React.memo(
    (props: { drinkName: string; priceString: string }) => {
        const { name, description } = getDishTexts(props.drinkName);
        const isNotForDishes = props.priceString === '';
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}
            >
                <AppearingView>
                    <View>
                        <View
                            style={
                                isNotForDishes
                                    ? menuSceneStyles.detailsListItemView
                                    : menuSceneStyles.drinkListItemView
                            }
                        >
                            <Text style={menuSceneStyles.drinkName}>
                                {name}
                            </Text>
                            <Text style={menuSceneStyles.drinkDescription}>
                                {description}
                            </Text>
                            {isNotForDishes ? undefined : (
                                <Text style={menuSceneStyles.drinkPrice}>
                                    {props.priceString}
                                </Text>
                            )}
                        </View>
                    </View>
                </AppearingView>
            </View>
        );
    }
);
