import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { Income } from '../../classes/association';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import { Noticable } from '../../classes/idea/Noticable';
import { ImpressionDisplay } from '../../classes/impressionDisplay/ImpressionDisplay';
import { AddButton } from '../../components/buttons/Buttons';
import { WeServe } from '../../editNavigator/WeServe';
import { Describable } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { BasePrice } from '../menuScene/basePrice';
import { menuSceneStyles } from '../menuScene/menuStyles';
import { Demand } from '../menuScene/offerList/actionInterfaces';
import { OfferListItem } from '../menuScene/offerList/Item';
import { LIST_END_BUTTON_SIZE } from '../menuScene/offerList/LIST_END_BUTTON_SIZE';
import { Impression } from './impressions/Impression';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    onInfoPress: (income: Income) => void;
    onPriceSetPress: (income: Income) => void;
    onAdd: (add: Demand) => void;
    onDelete: (
        name: string,
        deleted: Demand,
        key: FantasyKeys | 'isUserMade'
    ) => void;
    onReroll: (name: string, rerolled: Demand) => void;
    onCurrencySetPress: () => void;
    impressions: Impression[];
    noticablesLeft: Map<Describable, boolean>;
}) => {
    const impressionTitles = Object.values(Noticable);
    const impressionAccordion = impressionTitles.map((title) => {
        const impressionsOfTitle = props.impressions.filter(
            (impression) => impression.category === title
        );
        const demand: Demand = {
            isAbout: WeServe.impressions,
            category: title,
        };
        return (
            <ImpressionAccordion
                key={title}
                isBartender={title == Noticable.bartender}
                title={title}
                impressions={impressionsOfTitle}
                onDelete={(name: string, key: FantasyKeys | 'isUserMade') =>
                    props.onDelete(name, demand, key)
                }
                onReroll={(name: string) => props.onReroll(name, demand)}
                onAdd={() => props.onAdd(demand)}
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
    impressions: Impression[];
    onDelete: (name: string, key: FantasyKeys | 'isUserMade') => void;
    onAdd: () => void;
    onReroll: (name: string) => void;
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
                              props.onReroll(impression.name);
                          },
                    onDelete: () => {
                        props.onDelete(text, impression.universe);
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
            titleStyle={menuSceneStyles.accordionListTitle}
            key={props.title}
        >
            {[...descriptionItems, addBar]}
        </List.Accordion>
    );
};
