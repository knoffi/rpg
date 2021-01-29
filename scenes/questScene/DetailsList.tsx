import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { association } from '../../classes/Adjectives';
import { Impression } from '../../classes/Atmosphere';
import { globalStyles } from '../globalStyles';
import { BasePrice } from '../menuScene/basePrice';
import { menuSceneStyles } from '../menuScene/menuStyles';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    fits: association[];
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
            <ImpressionAccordion fits={props.fits}></ImpressionAccordion>
        </List.Section>
    );
};

const ImpressionAccordion = (props: { fits: association[] }) => {
    const impression = new Impression(props.fits);
    const [bartenderText, setBartenderText] = useState(
        '(Bartender) ' + impression.getBartenderText()
    );
    return (
        <List.Accordion
            title="Impressions"
            titleStyle={menuSceneStyles.accordeonListTitle}
        >
            <List.Item title={bartenderText}></List.Item>
        </List.Accordion>
    );
};
