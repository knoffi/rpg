import React, { useState } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { CreationQuality } from '../../../classes/contentCreator/creationQuality';
import { FantasyKeys } from '../../../classes/contentCreator/FantasKeys';
import {
    AddButton,
    FeatherButton,
    ImportButton,
} from '../../../components/buttons/Buttons';
import { WeServe } from '../../../editNavigator/WeServe';
import { menuSceneStyles } from '../menuStyles';
import { Offer } from '../Offer';
import { Demand, IAddingActions, IOfferActions } from './actionInterfaces';
import { OfferListItem } from './Item';
import { LIST_END_BUTTON_SIZE } from './LIST_END_BUTTON_SIZE';
export const OfferAccordion = (props: {
    demand: Demand & { isAbout: WeServe.drinks | WeServe.food };
    listOfOffers: Offer[];
    offerActions: IOfferActions;
    addingActions: IAddingActions;
    qualityLeft: CreationQuality;
    getPriceString: (offer: Offer) => string;
}) => {
    const [changes, setChanges] = useState({
        deletions: [] as string[],
        rerolls: [] as string[],
        demand: props.demand,
        universes: [] as (FantasyKeys | 'isUserMade')[],
        nameCounters: new Map<string, number>(),
    });
    const [lastChange, setLastChange] = useState({
        deletion: undefined as undefined | string,
        reroll: undefined as undefined | string,
    });
    const onLastChangeRequest = () => {
        props.offerActions.reduceOffers(
            changes.deletions,
            changes.rerolls,
            props.demand,
            changes.universes
        );
        const newNameCounters = new Map<string, number>(changes.nameCounters);
        const itemsForRerender = [...changes.deletions, ...changes.rerolls];
        itemsForRerender.forEach((name) => {
            const prevNameCounter = newNameCounters.get(name) || 0;
            newNameCounters.set(name, prevNameCounter + 1);
        });
        setChanges({
            ...changes,
            deletions: [],
            universes: [],
            rerolls: [],
            nameCounters: newNameCounters,
        });
    };
    React.useEffect(() => {
        setTimeout(() => {
            const newestDeletion =
                changes.deletions.length >= 1
                    ? changes.deletions[changes.deletions.length - 1]
                    : undefined;
            const newestReroll =
                changes.rerolls.length >= 1
                    ? changes.rerolls[changes.rerolls.length - 1]
                    : undefined;
            setLastChange({ deletion: newestDeletion, reroll: newestReroll });
        }, 800);
    }, [changes]);
    React.useEffect(() => {
        const userNeverDeleted = changes.deletions.length === 0;
        const userNeverRerolled = changes.rerolls.length === 0;
        const userFinishedDeleting =
            !userNeverDeleted &&
            lastChange.deletion ===
                changes.deletions[changes.deletions.length - 1];
        const userFinishedRerolling =
            !userNeverRerolled &&
            lastChange.reroll === changes.rerolls[changes.rerolls.length - 1];
        if (
            (userFinishedDeleting && userFinishedRerolling) ||
            (userFinishedDeleting && userNeverRerolled) ||
            (userNeverDeleted && userFinishedRerolling)
        ) {
            onLastChangeRequest();
        }
    }, [lastChange]);
    const onRandomAdd = props.addingActions.randomAdd;
    const onImport = props.addingActions.import;
    const onEdit = props.addingActions.edit;
    const thisDemand = props.demand;
    const noDrinkToAddLeft = props.qualityLeft === CreationQuality.NONE;
    const getPriceString = props.getPriceString;
    const offerItems = props.listOfOffers.map((offer, index) => {
        const name = offer.name;
        return (
            <OfferListItem
                key={name + changes.nameCounters.get(name)}
                title={name}
                description={offer.description}
                actions={{
                    onDelete: () => {
                        const newDeletions = [...changes.deletions, name];
                        const newUniverses = [
                            ...changes.universes,
                            offer.universe,
                        ];
                        setChanges({
                            ...changes,
                            deletions: newDeletions,
                            universes: newUniverses,
                        });
                    },
                    onInfo: () => {},
                    onReroll: () => {
                        const newRerolls = [...changes.rerolls, name];
                        setChanges({
                            ...changes,
                            rerolls: newRerolls,
                        });
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
