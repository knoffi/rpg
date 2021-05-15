import React from 'react';
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
import { getRandomTavernDescription } from './impressions/impressionChapters';
import { TavernDescription } from './impressions/tavernDescription';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    fits: association[];
    onInfoPress: (income: association) => void;
    onPriceSetPress: (income: association) => void;
    onCurrencySetPress: () => void;
    onDataChange: (data: Partial<TavernData>) => void;
    impressions: TavernDescription[];
}) => {
    const onDelete = (oldImpression: TavernDescription) => {
        const otherImpressions = props.impressions.filter(
            (impression) => impression.name !== oldImpression.name
        );
        props.onDataChange({ impressions: otherImpressions });
    };
    const onReroll = (oldImpression: TavernDescription) => {
        const newImpressions = props.impressions.map((impression) =>
            impression.name !== oldImpression.name
                ? impression
                : getRandomTavernDescription(props.fits, oldImpression.category)
        );
        props.onDataChange({ impressions: newImpressions });
    };
    const onAdd = (category: Noticable) => {
        const newImpression = getRandomTavernDescription(props.fits, category);
        props.onDataChange({
            impressions: [...props.impressions, newImpression],
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
}) => {
    const descriptionItems = props.descriptionNames.map((text, index) => (
        <OfferListTopItem
            drinkName={text}
            key={+index.toString() + 'text'}
            priceString={''}
            //TODO: make this adjustable, so that instad of reroll user can edit
            //TODO: also, do use "NO DESCRIPTION LEFT" instead of "MENU FULL!"
            isUserMade={false}
            //TODO: check, if there is no description left
            noDrinkToAddLeft={false}
            actions={{
                onReroll: () => props.onReroll(text),
                onDelete: () => props.onDelete(text),
                onEdit: () => {},
                onShop: () => {},
                onInfo: () => {},
            }}
        ></OfferListTopItem>
    ));
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
