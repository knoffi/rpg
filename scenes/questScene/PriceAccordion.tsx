import React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { association } from '../../classes/association';
import { InfoButton, PencilButton } from '../../components/buttons/Buttons';
import { BasePrice } from '../menuScene/basePrice';
import { menuSceneStyles } from '../menuScene/menuStyles';

export const PriceAccordion = (props: {
    basePrice: BasePrice;
    onInfoPress: (income: association) => void;
    onPriceSetPress: (income: association) => void;
    onCurrencySetPress: () => void;
}) => {
    const currency = props.basePrice.currency;
    const onCurrencySetPress = props.onCurrencySetPress;
    return (
        <List.Accordion
            title="Currency &amp; Prices"
            titleStyle={menuSceneStyles.accordeonListTitle}
        >
            <List.Item
                title=""
                left={(props) => {
                    return <Text>{'Smallest Currency: ' + currency}</Text>;
                }}
                right={(props) => {
                    return (
                        <PencilButton
                            onPress={onCurrencySetPress}
                        ></PencilButton>
                    );
                }}
            />
            <AveragePriceItem
                onPriceSetPress={() => {
                    props.onPriceSetPress(association.poor);
                }}
                price={props.basePrice.poor}
                income={association.poor}
                onInfoPress={() => {
                    props.onInfoPress(association.poor);
                }}
            ></AveragePriceItem>
            <AveragePriceItem
                onPriceSetPress={() => {
                    props.onPriceSetPress(association.modest);
                }}
                price={props.basePrice.modest}
                income={association.modest}
                onInfoPress={() => {
                    props.onInfoPress(association.modest);
                }}
            ></AveragePriceItem>
            <AveragePriceItem
                onPriceSetPress={() => {
                    props.onPriceSetPress(association.wealthy);
                }}
                price={props.basePrice.wealthy}
                income={association.wealthy}
                onInfoPress={() => {
                    props.onInfoPress(association.wealthy);
                }}
            ></AveragePriceItem>
            <AveragePriceItem
                onPriceSetPress={() => {
                    props.onPriceSetPress(association.rich);
                }}
                price={props.basePrice.rich}
                income={association.rich}
                onInfoPress={() => {
                    props.onInfoPress(association.rich);
                }}
            ></AveragePriceItem>
        </List.Accordion>
    );
};

const AveragePriceItem = (props: {
    income: association;
    onInfoPress: () => void;
    price: number;
    onPriceSetPress: () => void;
}) => {
    const income = props.income;
    const price = props.price;
    const onInfoPress = props.onInfoPress;
    const onPriceSetPress = props.onPriceSetPress;
    return (
        <List.Item
            title=""
            left={(props) => {
                return (
                    <Text>
                        {'Price factor for ' +
                            income +
                            ' : ' +
                            price.toString()}
                    </Text>
                );
            }}
            right={(props) => {
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <PencilButton onPress={onPriceSetPress}></PencilButton>
                        <InfoButton onPress={onInfoPress}></InfoButton>
                    </View>
                );
            }}
        />
    );
};
