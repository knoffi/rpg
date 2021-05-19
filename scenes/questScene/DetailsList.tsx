import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { association } from '../../classes/association';
import { Noticable } from '../../classes/ImpressionIdea';
import { AddButton } from '../../components/buttons/generalButtons';
import { TavernData } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { BasePrice } from '../menuScene/basePrice';
import { menuSceneStyles } from '../menuScene/menuStyles';
import { LIST_END_BUTTON_SIZE } from '../menuScene/offerList/LIST_END_BUTTON_SIZE';
import { OfferListTopItem } from '../menuScene/offerList/OfferListTopItem';
import { IImpression } from './impressions/IImpression';
import {
    getImpressionsWithOneReroll,
    getRandomImpression,
} from './impressions/impressionChapters';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    fits: association[];
    onInfoPress: (income: association) => void;
    onPriceSetPress: (income: association) => void;
    onCurrencySetPress: () => void;
    onDataChange: (data: Partial<TavernData>) => void;
    impressions: IImpression[];
    noticablesLeft: Map<Noticable, boolean>;
    getImpliedChanges: (newImpressions: IImpression[]) => Partial<TavernData>;
}) => {
    const onDelete = (oldImpression: IImpression) => {
        const otherImpressions = props.impressions.filter(
            (impression) => impression.name !== oldImpression.name
        );
        const bannerChanges = props.getImpliedChanges(otherImpressions);
        props.onDataChange({ impressions: otherImpressions, ...bannerChanges });
    };
    const onReroll = (oldImpression: IImpression) => {
        const newImpressions = getImpressionsWithOneReroll(
            oldImpression.name,
            props.impressions,
            props.fits,
            oldImpression.category
        );
        const bannerChanges = props.getImpliedChanges(newImpressions);
        props.onDataChange({ impressions: newImpressions, ...bannerChanges });
    };
    const onAdd = (category: Noticable) => {
        const oldNames = props.impressions.map((impression) => impression.name);
        const newImpression = getRandomImpression(
            props.fits,
            category,
            oldNames
        );
        const extendedImpressions = [...props.impressions, newImpression];
        const bannerChanges = props.getImpliedChanges(extendedImpressions);
        props.onDataChange({
            impressions: extendedImpressions,
            ...bannerChanges,
        });
    };
    //TODO: What about barmaids?
    const impressionTitles = Object.values(Noticable);
    const impressionListAccordions = impressionTitles.map((title) => {
        const impressionsOfTitle = props.impressions.filter(
            (impression) => impression.category === title
        );
        const namesOfTitle = impressionsOfTitle.map(
            (impression) => impression.name
        );
        return (
            <ImpressionListAccordion
                key={title}
                title={title}
                descriptionNames={namesOfTitle}
                onDelete={(name: string) =>
                    onDelete({ name: name, category: title })
                }
                onReroll={(name: string) =>
                    onReroll({ name: name, category: title })
                }
                onAdd={() => onAdd(title)}
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
    descriptionNames: string[];
    onDelete: (name: string) => void;
    onAdd: () => void;
    onReroll: (name: string) => void;
    isNotFull: boolean;
}) => {
    const [renderedItems, setRenderedItems] = useState(
        props.descriptionNames.length
    );
    const descriptionItems = props.descriptionNames.map((text, index) => {
        const newID = index + renderedItems;
        const newKey = newID.toString() + props.title;
        return (
            <OfferListTopItem
                drinkName={text}
                key={newKey}
                priceString={''}
                //TODO: make this adjustable, so that instead of reroll user can edit
                //TODO: also, do use "NO DESCRIPTION LEFT" instead of "MENU FULL!"
                isUserMade={false}
                //TODO: check, if there is no description left
                noDrinkToAddLeft={!props.isNotFull}
                actions={{
                    onReroll: () => {
                        setRenderedItems(
                            renderedItems + props.descriptionNames.length
                        );
                        props.onReroll(text);
                    },
                    onDelete: () => props.onDelete(text),
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
                    onPress={() => {
                        props.onAdd();
                    }}
                    disabled={!props.isNotFull}
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
