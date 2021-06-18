import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { MenuCategory } from '../../../classes/TavernProduct';
import {
    AddButton,
    FeatherButton,
    ImportButton,
} from '../../../components/buttons/generalButtons';
import { Offer } from '../menuEnums';
import { menuSceneStyles } from '../menuStyles';
import { LIST_END_BUTTON_SIZE } from './LIST_END_BUTTON_SIZE';
import { OfferListTopItem } from './OfferListTopItem';
import { addingActions, offerActions } from './productActions';

export const OfferListAccordeon = (props: {
    Drinkable: MenuCategory;
    listOfOffers: Offer[];
    offerActions: offerActions;
    addingActions: addingActions;
    noDrinkToAddLeft: boolean;
    getPriceString: (offer: Offer) => string;
}) => {
    const onRandomAdd = props.addingActions.randomAdd;
    const onImport = props.addingActions.import;
    const onEdit = props.addingActions.edit;
    const thisCategory = props.Drinkable;
    const noDrinkToAddLeft = props.noDrinkToAddLeft;
    const getPriceString = props.getPriceString;
    const offerItems = props.listOfOffers.map((offerOfList) => {
        const name = offerOfList.product.name;
        return (
            <View key={name}>
                <OfferListTopItem
                    drinkName={name}
                    actions={{
                        onDelete: () => {
                            props.offerActions.deleteOffer(name);
                        },
                        onInfo: () => {},
                        onReroll: () => {
                            props.offerActions.rerollOffer(name);
                        },
                        onShop: () => {
                            props.offerActions.shopOffer(name);
                        },
                        onEdit: () => {
                            const product = offerOfList.product;
                            const description = product.description
                                ? product.description
                                : '';
                            props.offerActions.editUserOffer({
                                name: product.name,
                                priceText: offerOfList.price.toString(),
                                description: description,
                                category: product.category,
                                isUserMade: true,
                            });
                        },
                    }}
                    noDrinkToAddLeft={noDrinkToAddLeft}
                    isUserMade={offerOfList.product.isUserMade}
                    priceString={getPriceString(offerOfList)}
                ></OfferListTopItem>
            </View>
        );
    });

    return (
        <List.Accordion
            title={props.Drinkable}
            titleStyle={menuSceneStyles.accordeonListTitle}
        >
            {offerItems}
            <List.Item
                title=""
                onPress={() => {}}
                left={(props) => {
                    return (
                        <View style={{ flexDirection: 'row' }}>
                            <AddButton
                                onPress={() => {
                                    onRandomAdd(thisCategory);
                                }}
                                size={LIST_END_BUTTON_SIZE}
                                disabled={noDrinkToAddLeft}
                            />
                            <ImportButton
                                onPress={() => {
                                    onImport(thisCategory);
                                }}
                                size={LIST_END_BUTTON_SIZE}
                            />
                            <FeatherButton
                                onPress={() => {
                                    onEdit(thisCategory);
                                }}
                                size={LIST_END_BUTTON_SIZE}
                            />
                        </View>
                    );
                }}
            />
        </List.Accordion>
    );
};
