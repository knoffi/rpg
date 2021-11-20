import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import {
    AddButton,
    FeatherButton,
    ImportButton,
} from '../../../components/buttons/Buttons';
import { WeServe } from '../../../editNavigator/WeServe';
import { menuSceneStyles } from '../menuStyles';
import { Offer } from '../Offer';
import { Demand, IAddingActions, IOfferActions } from './actionInterfaces';
import { OfferListItem } from './ListItem';
import { LIST_END_BUTTON_SIZE } from './LIST_END_BUTTON_SIZE';

export const OfferAccordion = (props: {
    demand: Demand & { isAbout: WeServe.drinks | WeServe.food };
    listOfOffers: Offer[];
    offerActions: IOfferActions;
    addingActions: IAddingActions;
    noDrinkToAddLeft: boolean;
    getPriceString: (offer: Offer) => string;
}) => {
    const onRandomAdd = props.addingActions.randomAdd;
    const onImport = props.addingActions.import;
    const onEdit = props.addingActions.edit;
    const thisDemand = props.demand;
    const noDrinkToAddLeft = props.noDrinkToAddLeft;
    const getPriceString = props.getPriceString;
    const offerItems = props.listOfOffers.map((offer) => {
        const name = offer.name;
        return (
            <View key={name}>
                <OfferListItem
                    title={name}
                    description={offer.description}
                    actions={{
                        onDelete: () => {
                            props.offerActions.deleteOffer(
                                name,
                                thisDemand,
                                offer.universe
                            );
                        },
                        onInfo: () => {},
                        onReroll: () => {
                            props.offerActions.rerollOffer(name, thisDemand);
                        },
                        onShop: () => {
                            props.offerActions.shopOffer(name);
                        },
                        onEdit: () => {
                            const description = offer.description
                                ? offer.description
                                : '';
                            props.offerActions.editUserOffer({
                                name: offer.name,
                                priceText: offer.price.toString(),
                                description: description,
                                isUserMade: true,
                                ...thisDemand,
                            });
                        },
                    }}
                    noDrinkToAddLeft={noDrinkToAddLeft}
                    isUserMade={offer.isUserMade}
                    price={getPriceString(offer)}
                ></OfferListItem>
            </View>
        );
    });

    return (
        <List.Accordion
            title={props.demand.category}
            titleStyle={menuSceneStyles.accordionListTitle}
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
                                    onRandomAdd(thisDemand);
                                }}
                                size={LIST_END_BUTTON_SIZE}
                                disabled={noDrinkToAddLeft}
                            />
                            <ImportButton
                                onPress={() => {
                                    onImport(thisDemand);
                                }}
                                size={LIST_END_BUTTON_SIZE}
                            />
                            <FeatherButton
                                onPress={() => {
                                    onEdit(thisDemand);
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
