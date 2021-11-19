import React, { useState } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { Income } from '../../classes/association';
import { UserMadeImpression } from '../../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import { Noticable } from '../../classes/idea/Noticable';
import { ImpressionDisplay } from '../../classes/impressionDisplay/ImpressionDisplay';
import {
    AddButton,
    FeatherButton,
    ImportButton,
} from '../../components/buttons/Buttons';
import { WeServe } from '../../editNavigator/WeServe';
import { Describable } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { BasePrice } from '../menuScene/basePrice';
import { menuSceneStyles } from '../menuScene/menuStyles';
import {
    Demand,
    IAddingActions,
} from '../menuScene/offerList/actionInterfaces';
import { OfferListItem } from '../menuScene/offerList/Item';
import { LIST_END_BUTTON_SIZE } from '../menuScene/offerList/LIST_END_BUTTON_SIZE';
import { Impression } from './impressions/Impression';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    onInfoPress: (income: Income) => void;
    onPriceSetPress: (income: Income) => void;
    addingAcions: IAddingActions;
    onDelete: (
        name: string,
        deleted: Demand,
        key: FantasyKeys | 'isUserMade'
    ) => void;
    onReroll: (name: string, rerolled: Demand) => void;
    onEdit: (startData: UserMadeImpression) => void;
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
                onAdd={() => props.addingAcions.randomAdd(demand)}
                onEdit={props.onEdit}
                onCreate={() => props.addingAcions.edit(demand)}
                onImport={() => props.addingAcions.import(demand)}
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
    onEdit: (data: UserMadeImpression) => void;
    onReroll: (name: string) => void;
    onCreate: () => void;
    onImport: () => void;
    isNotFull: boolean;
}) => {
    const [bartenderSex, setBartenderSex] = useState(
        'male' as 'female' | 'male'
    );
    const adjustDisplayText = (impression: Impression) => {
        const impressionDisplay = new ImpressionDisplay(
            impression.name,
            impression.category,
            impression.sex
        );
        if (props.isBartender) {
            impressionDisplay.setSex(bartenderSex);
        }
        return impressionDisplay.getText();
    };
    const toggleBartenderSex = props.isBartender
        ? () => {
              setBartenderSex(bartenderSex === 'male' ? 'female' : 'male');
          }
        : () => {};
    const onCreate = props.onCreate;
    const onImport = props.onImport;
    const impressionsFull = !props.isNotFull;
    const descriptionItems = props.impressions.map((impression) => {
        const isUserMade = impression.universe === 'isUserMade';
        const text =
            isUserMade || impression.category !== Noticable.bartender
                ? impression.name
                : adjustDisplayText(impression);
        const newKey = text;
        return (
            <OfferListItem
                title={text}
                key={newKey}
                description={''}
                price={''}
                //TODO: also, do use "NO DESCRIPTION LEFT" instead of "MENU FULL!"
                isUserMade={isUserMade}
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
                    onEdit: () =>
                        props.onEdit({
                            ...impression,
                            isAbout: WeServe.impressions,
                            isUserMade: true,
                            name: text,
                        }),
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
                <View style={{ flexDirection: 'row' }}>
                    <AddButton
                        size={LIST_END_BUTTON_SIZE}
                        onPress={impressionsFull ? () => {} : props.onAdd}
                        onLongPress={toggleBartenderSex}
                        disabled={impressionsFull}
                    />
                    <ImportButton
                        onPress={onImport}
                        size={LIST_END_BUTTON_SIZE}
                    />
                    <FeatherButton
                        onPress={onCreate}
                        size={LIST_END_BUTTON_SIZE}
                    />
                </View>
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
