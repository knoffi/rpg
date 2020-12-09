import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { View } from 'react-native';
import { IconButton, List, Text } from 'react-native-paper';
import { WIDTH_FACTOR } from '../dimensionConstants';
import { appBarStyles } from './appBarStyles';

const BUTTON_SIZE_INCREASE = 8 * WIDTH_FACTOR;
const LIST_ITEM_MARGIN = 5 * WIDTH_FACTOR;

export const getOrderListItem = (
    orderValues: { price: number; count: number },
    name: string,
    currencyName: string,
    increaseOrder: (offerName: string) => void,
    decreaseOrder: (offerName: string) => void
) => {
    return (
        <List.Item
            style={{ margin: LIST_ITEM_MARGIN }}
            title={' '}
            left={() => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}
                >
                    <View style={appBarStyles.listItemView}>
                        <Text style={appBarStyles.orderName}>
                            {orderValues.count.toString() + 'x ' + ' ' + name}
                        </Text>
                        <View style={appBarStyles.orderPriceView}>
                            <Text style={appBarStyles.orderPriceText}>
                                {orderValues.price.toString() +
                                    ' ' +
                                    currencyName}
                            </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-between' }}>
                        <IconButton
                            icon={(props) => (
                                <MaterialCommunityIcons
                                    name="plus-box-outline"
                                    size={props.size + BUTTON_SIZE_INCREASE}
                                    color={props.color}
                                />
                            )}
                            onPress={() => {
                                increaseOrder(name);
                            }}
                        />
                        <IconButton
                            icon={(props) => (
                                <MaterialCommunityIcons
                                    name="minus-box-outline"
                                    size={props.size + BUTTON_SIZE_INCREASE}
                                    color={props.color}
                                    onPress={() => {
                                        decreaseOrder(name);
                                    }}
                                />
                            )}
                        />
                    </View>
                </View>
            )}
            key={name + orderValues.price.toString()}
        ></List.Item>
    );
};
