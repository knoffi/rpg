import React from 'react';
import { List } from 'react-native-paper';
import { association } from '../../classes/Adjectives';
import { globalStyles } from '../globalStyles';
import { BasePrice } from '../menuScene/basePrice';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    onInfoPress: (income: association) => void;
    onPriceSetPress: (income: association) => void;
    onCurrencySetPress: () => void;
}) => {
    return (
        <List.Section title={'NOTES'} titleStyle={globalStyles.title}>
            <PriceAccordion
                onCurrencySetPress={props.onCurrencySetPress}
                onInfoPress={props.onInfoPress}
                basePrice={props.basePrice}
                onPriceSetPress={props.onPriceSetPress}
            />
        </List.Section>
    );
};
