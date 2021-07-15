import React from 'react';
import { List } from 'react-native-paper';
import { association } from '../../classes/association';
import { Noticable } from '../../classes/idea/Noticable';
import { AddButton } from '../../components/buttons/generalButtons';
import { TavernData } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { BasePrice } from '../menuScene/basePrice';
import { menuSceneStyles } from '../menuScene/menuStyles';
import { LIST_END_BUTTON_SIZE } from '../menuScene/offerList/LIST_END_BUTTON_SIZE';
import { OfferListTopItem } from '../menuScene/offerList/OfferListTopItem';
import { IImpression } from './impressions/IImpression';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    onInfoPress: (income: association) => void;
    onPriceSetPress: (income: association) => void;
    onCurrencySetPress: () => void;
    onDataChange: (data: Partial<TavernData>) => void;
    onDelete: (name: string) => void;
    onAdd: (category: Noticable) => void;
    impressions: IImpression[];
    noticablesLeft: Map<Noticable, boolean>;
    getImpliedChanges: (newImpressions: IImpression[]) => Partial<TavernData>;
    onReroll: (impression: IImpression) => void;
}) => {
    //TODO: What about barmaids?
    const impressionTitles = Object.values(Noticable);
    const impressionListAccordions = impressionTitles.map((title) => {
        const impressionsOfTitle = props.impressions.filter(
            (impression) => impression.category === title
        );
        return (
            <ImpressionListAccordion
                key={title}
                title={title}
                impressions={impressionsOfTitle}
                onDelete={props.onDelete}
                onReroll={props.onReroll}
                onAdd={() => {
                    props.onAdd(title);
                }}
                isNotFull={props.noticablesLeft.get(title)!}
            ></ImpressionListAccordion>
        );
    });

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

const ImpressionListAccordion = (props: {
    title: string;
    impressions: IImpression[];
    onDelete: (name: string) => void;
    onAdd: () => void;
    onReroll: (impression: IImpression) => void;
    isNotFull: boolean;
}) => {
    const impressionsFull = !props.isNotFull;
    const descriptionItems = props.impressions.map((impression) => {
        const text = impression.name;
        const newKey = text;
        return (
            <OfferListTopItem
                drinkName={text}
                key={newKey}
                priceString={''}
                //TODO: make this adjustable, so that instead of reroll user can edit
                //TODO: also, do use "NO DESCRIPTION LEFT" instead of "MENU FULL!"
                isUserMade={false}
                noDrinkToAddLeft={impressionsFull}
                actions={{
                    onReroll: impressionsFull
                        ? () => {}
                        : () => {
                              props.onReroll(impression);
                          },
                    onDelete: () => {
                        props.onDelete(text);
                    },
                    onEdit: () => {},
                    onShop: () => {},
                    onInfo: () => {},
                }}
            ></OfferListTopItem>
        );
    });
    const addBar = (
        <List.Item
            title=""
            key={+'addBar'}
            left={() => (
                <AddButton
                    size={LIST_END_BUTTON_SIZE}
                    onPress={impressionsFull ? () => {} : props.onAdd}
                    disabled={impressionsFull}
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
