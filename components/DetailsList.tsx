import React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { association } from '../classes/Adjectives';
import { globalStyles } from '../scenes/globalStyles';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { menuSceneStyles } from '../scenes/menuScene/menuStyles';
import { InfoButton, PencilButton } from './buttons/generalButtons';

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

export const DetailsList = (props: {
    basePrice: BasePrice;
    fitting: { fits: association[]; misfits: association[] };
    onInfoPress: (income: association) => void;
    onPriceSetPress: (income: association) => void;
    onCurrencySetPress: () => void;
}) => {
    const currency = props.basePrice.currency;
    const onCurrencySetPress = props.onCurrencySetPress;
    return (
        <List.Section title={'NOTES'} titleStyle={globalStyles.title}>
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
                        props.onPriceSetPress(association.worker);
                    }}
                    price={props.basePrice.modest}
                    income={association.worker}
                    onInfoPress={() => {
                        props.onInfoPress(association.worker);
                    }}
                ></AveragePriceItem>
                <AveragePriceItem
                    onPriceSetPress={() => {
                        props.onPriceSetPress(association.sophisticated);
                    }}
                    price={props.basePrice.wealthy}
                    income={association.sophisticated}
                    onInfoPress={() => {
                        props.onInfoPress(association.sophisticated);
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
        </List.Section>
    );
};
