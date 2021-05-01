import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { association } from '../../classes/association';
import { aspect, Impression } from '../../classes/Atmosphere';
import { AddButton } from '../../components/buttons/generalButtons';
import { globalStyles } from '../globalStyles';
import { BasePrice } from '../menuScene/basePrice';
import { menuSceneStyles } from '../menuScene/menuStyles';
import { LIST_END_BUTTON_SIZE } from '../menuScene/offerList/LIST_END_BUTTON_SIZE';
import { OfferListTopItem } from '../menuScene/offerList/OfferListTopItem';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    fits: association[];
    onInfoPress: (income: association) => void;
    onPriceSetPress: (income: association) => void;
    onCurrencySetPress: () => void;
}) => {
    const impressionListAccordions = getImpressionAccordions(props.fits);
    return (
        <List.Section title={'NOTES'} titleStyle={globalStyles.title}>
            <PriceAccordion
                onCurrencySetPress={props.onCurrencySetPress}
                onInfoPress={props.onInfoPress}
                basePrice={props.basePrice}
                onPriceSetPress={props.onPriceSetPress}
            />
            {impressionListAccordions}
        </List.Section>
    );
};

const getImpressionAccordions = (fits: association[]) => {
    const impression = new Impression(fits);
    //TODO: What about barmaids?
    const chefOfBarTitle = 'Bartender';
    const mostGuestsTitle = 'Most Guests';
    const intriguingTitle = 'Intriguing';
    const interiorTitle = 'Interior';
    const aspectKeyValuePairs = Object.values(aspect).map((aspect) => {
        return { [aspect]: [aspect as string] };
    });
    const startImpressions = aspectKeyValuePairs.reduce(
        (collection, keyValue) => {
            const key = Object.keys(keyValue)[0];
            const value = Object.values(keyValue)[0];
            collection[key] = [impression.getText(value[0] as aspect)];
            return collection;
        },
        {}
    );
    const [impressions, setImpressions] = useState(startImpressions);
    const onReroll = (aspect: aspect, indexForReroll: number) => {
        const oldTextsOfAspect = impressions[aspect];
        const newTextsOfAspect = oldTextsOfAspect.map((text, index) =>
            index === indexForReroll ? impression.getText(aspect) : text
        );
        const impressionsCopy = { ...impressions, [aspect]: newTextsOfAspect };
        setImpressions(impressionsCopy);
    };
    const onAdd = (aspect: aspect) => {
        const oldTextsOfAspect = impressions[aspect];
        const newTextsOfAspect = [
            ...oldTextsOfAspect,
            impression.getText(aspect),
        ];
        const impressionsCopy = { ...impressions, [aspect]: newTextsOfAspect };
        setImpressions(impressionsCopy);
    };
    const onDelete = (aspect: aspect, indexForDelete: number) => {
        const oldTextsOfAspect = impressions[aspect];
        const newTextsOfAspect = [
            ...oldTextsOfAspect.slice(0, indexForDelete),
            ...oldTextsOfAspect.slice(indexForDelete + 1),
        ];
        const impressionsCopy = { ...impressions, [aspect]: newTextsOfAspect };
        setImpressions(impressionsCopy);
    };
    const bartenderAccordions = (
        <ImpressionListAccordion
            key={aspect.bartender}
            aspect={aspect.bartender}
            title={chefOfBarTitle}
            descriptions={impressions[aspect.bartender]}
            onReroll={onReroll}
            onAdd={onAdd}
            onDelete={onDelete}
        ></ImpressionListAccordion>
    );
    const averageCustomerAccordions = (
        <ImpressionListAccordion
            key={aspect.averageCustomer}
            aspect={aspect.averageCustomer}
            title={mostGuestsTitle}
            descriptions={impressions[aspect.averageCustomer]}
            onReroll={onReroll}
            onAdd={onAdd}
            onDelete={onDelete}
        ></ImpressionListAccordion>
    );
    const intriguingAccordions = (
        <ImpressionListAccordion
            key={aspect.someCustomers}
            aspect={aspect.someCustomers}
            title={intriguingTitle}
            descriptions={impressions[aspect.someCustomers]}
            onReroll={onReroll}
            onAdd={onAdd}
            onDelete={onDelete}
        ></ImpressionListAccordion>
    );
    const interiorAccordions = (
        <ImpressionListAccordion
            key={aspect.interior}
            aspect={aspect.interior}
            title={interiorTitle}
            descriptions={impressions[aspect.interior]}
            onReroll={onReroll}
            onAdd={onAdd}
            onDelete={onDelete}
        ></ImpressionListAccordion>
    );

    return [
        bartenderAccordions,
        averageCustomerAccordions,
        intriguingAccordions,
        interiorAccordions,
    ];
};
const ImpressionListAccordion = (props: {
    aspect: aspect;
    title: string;
    descriptions: string[];
    onDelete: (aspect: aspect, index: number) => void;
    onAdd: (aspect: aspect) => void;
    onReroll: (aspect: aspect, index: number) => void;
}) => {
    const descriptionItems = props.descriptions.map((text, index) => (
        <OfferListTopItem
            drinkName={text}
            key={props.aspect + index.toString() + 'text'}
            priceString={''}
            //TODO: make this adjustable, so that instad of reroll user can edit
            //TODO: also, do use "NO DESCRIPTION LEFT" instead of "MENU FULL!"
            isUserMade={false}
            //TODO: check, if there is no description left
            noDrinkToAddLeft={false}
            actions={{
                onReroll: () => props.onReroll(props.aspect, index),
                onDelete: () => props.onReroll(props.aspect, index),
                onEdit: () => {},
                onShop: () => {},
                onInfo: () => {},
            }}
        ></OfferListTopItem>
    ));
    const addBar = (
        <List.Item
            title=""
            key={props.aspect + 'addBar'}
            left={() => (
                <AddButton
                    size={LIST_END_BUTTON_SIZE}
                    onPress={() => {
                        props.onAdd!(props.aspect);
                    }}
                />
            )}
        ></List.Item>
    );
    return (
        <List.Accordion
            title={props.title}
            titleStyle={menuSceneStyles.accordeonListTitle}
            key={props.title}
        >
            {[...descriptionItems, addBar]}
        </List.Accordion>
    );
};
