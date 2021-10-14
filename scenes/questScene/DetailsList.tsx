import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { Income } from '../../classes/association';
import { Noticable } from '../../classes/idea/Noticable';
import { ImpressionDisplay } from '../../classes/impressionDisplay/ImpressionDisplay';
import { AddButton } from '../../components/buttons/Buttons';
import { Describable } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { BasePrice } from '../menuScene/basePrice';
import { menuSceneStyles } from '../menuScene/menuStyles';
import { OfferListItem } from '../menuScene/offerList/Item';
import { LIST_END_BUTTON_SIZE } from '../menuScene/offerList/LIST_END_BUTTON_SIZE';
import { IImpression } from './impressions/IImpression';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    onInfoPress: (income: Income) => void;
    onPriceSetPress: (income: Income) => void;
    onReroll: (impression: IImpression) => void;
    onDelete: (name: string) => void;
    onAdd: (category: Noticable) => void;
    onCurrencySetPress: () => void;
    impressions: IImpression[];
    noticablesLeft: Map<Describable, boolean>;
}) => {
    const impressionTitles = Object.values(Noticable);
    const impressionAccordion = impressionTitles.map((title) => {
        const impressionsOfTitle = props.impressions.filter(
            (impression) => impression.category === title
        );
        return (
            <ImpressionAccordion
                key={title}
                isBartender={title == Noticable.bartender}
                title={title}
                impressions={impressionsOfTitle}
                onDelete={props.onDelete}
                onReroll={props.onReroll}
                onAdd={() => {
                    props.onAdd(title);
                }}
                isNotFull={props.noticablesLeft.get(title)!}
            ></ImpressionAccordion>
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
            {impressionAccordion}
        </List.Section>
    );
};

const ImpressionAccordion = (props: {
    title: string;
    isBartender: boolean;
    impressions: IImpression[];
    onDelete: (name: string) => void;
    onAdd: () => void;
    onReroll: (impression: IImpression) => void;
    isNotFull: boolean;
}) => {
    const [bartenderSex, setBartenderSex] = useState(
        'male' as 'female' | 'male'
    );
    const toggleBartenderSex = props.isBartender
        ? () => {
              setBartenderSex(bartenderSex === 'male' ? 'female' : 'male');
          }
        : () => {};
    const impressionsFull = !props.isNotFull;
    const descriptionItems = props.impressions.map((impression) => {
        const impressionDisplay = new ImpressionDisplay(
            impression.name,
            impression.category,
            impression.sex
        );
        if (props.isBartender) {
            impressionDisplay.setSex(bartenderSex);
        }
        const text = impressionDisplay.getText();
        const newKey = text;
        return (
            <OfferListItem
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
            ></OfferListItem>
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
                    onLongPress={toggleBartenderSex}
                    disabled={impressionsFull}
                />
            )}
        ></List.Item>
    );
    const title =
        props.isBartender && bartenderSex === 'female'
            ? 'Barmaid'
            : props.title;
    return (
        <List.Accordion
            title={title}
            titleStyle={menuSceneStyles.accordeonListTitle}
            key={props.title}
        >
            {[...descriptionItems, addBar]}
        </List.Accordion>
    );
};
