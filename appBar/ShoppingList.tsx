import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List, Text } from 'react-native-paper';
import { WIDTH_FACTOR } from '../dimensionConstants';
import { WeServe } from '../editNavigator/WeServe';
import { Offer } from '../scenes/menuScene/Offer';
import { appBarStyles } from './appBarStyles';
import { getOrderListItem } from './getOrderListItem';

const LIST_MARGIN = 10 * WIDTH_FACTOR;

export const ShoppingList = (props: {
    boughtOffers: Offer[];
    currencyName: string;
    increaseOrder: (name: string) => void;
    decreaseOrder: (name: string) => void;
    getAdjustedPrice: (offer: Offer) => number;
}) => {
    const boughtDrinks = [] as JSX.Element[];
    const boughtFood = [] as JSX.Element[];
    const getOrderChanger = (name: string, change: 1 | -1) => () => {
        change === 1 ? props.increaseOrder(name) : props.decreaseOrder(name);
    };

    const drinkMap = new Map<string, { price: number; count: number }>([]);
    const foodMap = new Map<string, { price: number; count: number }>([]);
    const totalPrice = props.boughtOffers
        .map((offer) => props.getAdjustedPrice(offer))
        .reduce((priceSum, price) => {
            return priceSum + price;
        }, 0);
    props.boughtOffers.forEach((offer) => {
        const name = offer.name;
        const thisMap = offer.isAbout === WeServe.food ? foodMap : drinkMap;
        const orderValues = thisMap.get(name);
        if (orderValues) {
            //thisMap.delete(name);
            thisMap.set(name, {
                price: orderValues.price + props.getAdjustedPrice(offer),
                count: orderValues.count + 1,
            });
        } else {
            thisMap.set(name, {
                price: props.getAdjustedPrice(offer),
                count: 1,
            });
        }
    });
    drinkMap.forEach((orderValues, name) => {
        boughtDrinks.push(
            getOrderListItem(
                orderValues,
                name,
                props.currencyName,
                getOrderChanger(name, 1),
                getOrderChanger(name, -1)
            )
        );
    });
    foodMap.forEach((orderValues, name) => {
        boughtFood.push(
            getOrderListItem(
                orderValues,
                name,
                props.currencyName,
                getOrderChanger(name, 1),
                getOrderChanger(name, -1)
            )
        );
    });

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', margin: LIST_MARGIN }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={appBarStyles.totalPrizeText}>
                        {'Total Price: '}
                    </Text>
                    <Text style={appBarStyles.totalPrizeNumber}>
                        {totalPrice.toString() + ' ' + props.currencyName}
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
