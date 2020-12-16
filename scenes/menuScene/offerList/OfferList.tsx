import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { IconButton, List, Text } from 'react-native-paper';
import {
    drinkCategory,
    foodCategory,
    menuCategory,
} from '../../../classes/TavernProduct';
import {
    AddButton,
    buttonEmphasis,
    DeleteButton,
    FeatherButton,
    ImportButton,
    RerollButton,
    ShopButton,
} from '../../../components/buttons/generalButtons';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../../dimensionConstants';
import { globalStyles } from '../../globalStyles';
import { Offer } from '../menuEnums';
import { weServe } from '../menuFunctions';
import { menuSceneStyles } from '../menuStyles';

const BOTTOM_PADDING_DRINKS = 265 * HEIGHT_FACTOR;
const BOTTOM_PADDING_FOOD = 188 * HEIGHT_FACTOR;
const CHARACTER_MAX_DRINK_NAME = 33;
interface MenuChapter {
    category: menuCategory;
    offers: Offer[];
}

interface productActions {
    onDelete: () => void;
    onReroll: () => void;
    onShop: () => void;
}
interface addingActions {
    randomAdd: (category: menuCategory) => void;
    import: (category: menuCategory) => void;
    edit: (category: menuCategory) => void;
}
interface productActionsByName {
    deleteOffer: (name: string) => void;
    rerollOffer: (name: string) => void;
    shopOffer: (name: string) => void;
}

const OfferListItemRight = (props: {
    actions: productActions;
    noDrinkToAddLeft: boolean;
}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <RerollButton
                mode={buttonEmphasis.medium}
                onPress={props.actions.onReroll}
                disabled={props.noDrinkToAddLeft}
            />
            <ShopButton
                mode={buttonEmphasis.high}
                onPress={props.actions.onShop}
            />
            <DeleteButton
                mode={buttonEmphasis.medium}
                onPress={props.actions.onDelete}
            />
        </View>
    );
};
const OfferListTopItem = (props: {
    drinkName: string;
    infoAction: () => void;
}) => {
    const thisDrinkName = props.drinkName;
    const infoAction = props.infoAction;
    return (
        <List.Item
            title=""
            left={(props) => {
                return (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <IconButton
                            icon={(props) => (
                                <Feather
                                    name="info"
                                    size={props.size}
                                    color={props.color}
                                    style={{ marginHorizontal: 0 }}
                                />
                            )}
                            onPress={infoAction}
                            style={{ translateY: -10 }}
                        />
                        <Text style={menuSceneStyles.drinkName}>
                            {thisDrinkName}
                        </Text>
                    </View>
                );
            }}
        ></List.Item>
    );
};
const BOTTOM_ITEM_MARGIN = 30 * HEIGHT_FACTOR;
const OfferListBottomItem = (props: {
    actions: productActions;
    noDrinkToAddLeft: boolean;
    priceString: string;
}) => {
    const actions = props.actions;
    const noDrinkToAddLeft = props.noDrinkToAddLeft;
    return (
        <List.Item
            title={'   Price: ' + props.priceString}
            titleStyle={menuSceneStyles.drinkPrice}
            style={{ marginBottom: BOTTOM_ITEM_MARGIN }}
            right={(props) => {
                return (
                    <OfferListItemRight
                        actions={actions}
                        noDrinkToAddLeft={noDrinkToAddLeft}
                    />
                );
            }}
        ></List.Item>
    );
};
const LIST_END_BUTTON_SIZE =
    (menuSceneStyles.drinkName.fontSize + 5) * WIDTH_FACTOR;
const OfferListAccordeon = (props: {
    drinkCategory: menuCategory;
    listOfOffers: Offer[];
    offerActions: productActionsByName;
    addingActions: addingActions;
    noDrinkToAddLeft: boolean;
    getPriceString: (offer: Offer) => string;
}) => {
    const onRandomAdd = props.addingActions.randomAdd;
    const onImport = props.addingActions.import;
    const onEdit = props.addingActions.edit;
    const thisCategory = props.drinkCategory;
    const noDrinkToAddLeft = props.noDrinkToAddLeft;
    const getPriceString = props.getPriceString;
    let offerItems = [] as JSX.Element[];
    props.listOfOffers.forEach((offerOfList) => {
        const name = offerOfList.product.name;
        offerItems.push(
            <OfferListTopItem
                drinkName={name}
                key={name + '-top'}
                infoAction={() => {}}
            ></OfferListTopItem>
        );
        offerItems.push(
            <OfferListBottomItem
                priceString={getPriceString(offerOfList)}
                key={name + '-bottom'}
                actions={{
                    onDelete: () => {
                        props.offerActions.deleteOffer(name);
                    },
                    onReroll: () => {
                        props.offerActions.rerollOffer(name);
                    },
                    onShop: () => {
                        props.offerActions.shopOffer(name);
                    },
                }}
                noDrinkToAddLeft={noDrinkToAddLeft}
            ></OfferListBottomItem>
        );
    });
    return (
        <List.Accordion
            title={props.drinkCategory}
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
                                disabled={noDrinkToAddLeft}
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
export const OfferList = (props: {
    offers: Offer[];
    isAbout: weServe;
    offerActions: productActionsByName;
    addingActions: addingActions;
    offersLeftMap: Map<menuCategory, boolean>;
    getPriceString: (offer: Offer) => string;
}) => {
    const menu = [] as MenuChapter[];
    let categories =
        props.isAbout === weServe.drinks ? drinkCategory : foodCategory;

    Object.values(categories).forEach((category) => {
        menu.push({
            category: category as menuCategory,
            offers: [],
        });
    });
    // Now: menu=[ {"beer", [] }, {"wine", [] }, ... ]

    // TODO: improve by continuing with next offer, if old offer was already pushed into a menu chapter
    props.offers.forEach((offer) =>
        menu.forEach((menuChapter) => {
            if (menuChapter.category === offer.product.category) {
                menuChapter.offers.push(offer);
            }
        })
    );

    const chapterLists = menu.map((chapter) => {
        return (
            <OfferListAccordeon
                key={chapter.category}
                drinkCategory={chapter.category}
                listOfOffers={chapter.offers}
                offerActions={props.offerActions}
                addingActions={{
                    randomAdd: props.addingActions.randomAdd,
                    import: props.addingActions.import,
                    edit: props.addingActions.edit,
                }}
                noDrinkToAddLeft={!props.offersLeftMap.get(chapter.category)!}
                getPriceString={props.getPriceString}
            />
        );
    });

    // TODO: use a unique state for every drink category. For example, removing a single beer would then be faster because wineList etc. can be skipped.
    // TODO: Check, wether different drinks from different categories have different names

    return (
        <List.Section
            title={props.isAbout.toUpperCase()}
            titleStyle={globalStyles.title}
            style={{
                paddingBottom:
                    props.isAbout === weServe.drinks
                        ? BOTTOM_PADDING_DRINKS
                        : BOTTOM_PADDING_FOOD,
            }}
        >
            {chapterLists}
        </List.Section>
    );
};
