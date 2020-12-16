import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List, Text } from 'react-native-paper';
import { WIDTH_FACTOR } from '../dimensionConstants';
import { Offer } from '../scenes/menuScene/menuEnums';
import { appBarStyles } from './appBarStyles';
import { getOrderListItem } from './getOrderListItem';

const LIST_MARGIN = 10 * WIDTH_FACTOR;

export const ShoppingList = (props: {
    boughtOffers: Offer[];
    currencyName: string;
    increaseOrder: (name: string) => void;
    decreaseOrder: (name: string) => void;
}) => {
    const boughtDrinks = [] as JSX.Element[];
    const boughtFood = [] as JSX.Element[];
    let priceSum = 0;

    const drinkMap = new Map<string, { price: number; count: number }>([]);
    const foodMap = new Map<string, { price: number; count: number }>([]);
    props.boughtOffers.forEach((offer) => {
        const name = offer.product.name;
        const thisMap = offer.product.isFood() ? foodMap : drinkMap;
        const orderValues = thisMap.get(name);
        if (orderValues) {
            //thisMap.delete(name);
            thisMap.set(name, {
                price: orderValues.price + offer.price,
                count: orderValues.count + 1,
            });
        } else {
            thisMap.set(name, { price: offer.price, count: 1 });
        }
    });
    drinkMap.forEach((orderValues, name) => {
        boughtDrinks.push(
            getOrderListItem(
                orderValues,
                name,
                props.currencyName,
                props.increaseOrder,
                props.decreaseOrder
            )
        );
        priceSum += orderValues.price;
    });
    foodMap.forEach((orderValues, name) => {
        boughtFood.push(
            getOrderListItem(
                orderValues,
                name,
                props.currencyName,
                props.increaseOrder,
                props.decreaseOrder
            )
        );
        priceSum += orderValues.price;
    });

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', margin: LIST_MARGIN }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={appBarStyles.totalPrizeText}>
                        {'Total Price: '}
                    </Text>
                    <Text style={appBarStyles.totalPrizeNumber}>
                        {priceSum.toString() + ' ' + props.currencyName}
                    </Text>
                </View>
            </View>
            <List.Section title="You ordered">
                <List.Accordion
                    titleStyle={appBarStyles.listTitle}
                    title="Drinks"
                >
                    {boughtDrinks}
                </List.Accordion>
                <List.Accordion
                    titleStyle={appBarStyles.listTitle}
                    title="Food"
                >
                    {boughtFood}
                </List.Accordion>
            </List.Section>
        </ScrollView>
    );
};