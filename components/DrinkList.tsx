import React from 'react';
import { View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { drinkCategory, foodCategory } from '../classes/TavernProduct';
import { globalStyles } from '../scenes/globalStyles';
import { Offer } from '../scenes/menuScene/menuEnums';
import { weServe } from '../scenes/menuScene/menuFunctions';
import { menuCategory } from '../scenes/menuScene/menuProduct';
import { menuSceneStyles } from '../scenes/menuScene/menuStyles';
import { nameSplitter } from '../scenes/nameScene/nameSplitter';
import {
    AddButton,
    buttonEmphasis,
    DeleteButton,
    ImportButton,
    InfoIconButton,
    RerollButton,
    ShopButton,
} from './buttons/generalButtons';

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
}
interface productActionsByName {
    deleteOffer: (name: string) => void;
    rerollOffer: (name: string) => void;
    shopOffer: (name: string) => void;
}

const DrinkListItemRight = (props: {
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
const DrinkListTopItem = (props: {
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
                        <Text style={menuSceneStyles.drinkName}>
                            {nameSplitter(
                                thisDrinkName,
                                CHARACTER_MAX_DRINK_NAME
                            )}
                        </Text>
                        <InfoIconButton onPress={infoAction} size={20} />
                    </View>
                );
            }}
        ></List.Item>
    );
};
const DrinkListBottomItem = (props: {
    price: number;
    actions: productActions;
    noDrinkToAddLeft: boolean;
    currencyName: string;
}) => {
    const actions = props.actions;
    const thisPrice = props.price;
    const noDrinkToAddLeft = props.noDrinkToAddLeft;
    return (
        <List.Item
            title={
                '   Price: ' + props.price.toString() + ' ' + props.currencyName
            }
            titleStyle={menuSceneStyles.drinkPrice}
            right={(props) => {
                return (
                    <DrinkListItemRight
                        actions={actions}
                        noDrinkToAddLeft={noDrinkToAddLeft}
                    />
                );
            }}
        ></List.Item>
    );
};
const DrinkListAccordeon = (props: {
    drinkCategory: menuCategory;
    listOfOffers: Offer[];
    offerActions: productActionsByName;
    addingActions: addingActions;
    noDrinkToAddLeft: boolean;
    currencyName: string;
}) => {
    const onRandomAdd = props.addingActions.randomAdd;
    const onImport = props.addingActions.import;
    const thisCategory = props.drinkCategory;
    const noDrinkToAddLeft = props.noDrinkToAddLeft;
    const currencyName = props.currencyName;
    let offerItems = [] as JSX.Element[];
    props.listOfOffers.forEach((offerOfList) => {
        const name = offerOfList.product.name;
        offerItems.push(
            <DrinkListTopItem
                drinkName={name}
                key={name + '-top'}
                infoAction={() => {}}
            ></DrinkListTopItem>
        );
        offerItems.push(
            <DrinkListBottomItem
                price={offerOfList.price}
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
                currencyName={currencyName}
            ></DrinkListBottomItem>
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
                                size={menuSceneStyles.drinkName.fontSize + 5}
                                disabled={noDrinkToAddLeft}
                            />
                            <ImportButton
                                onPress={() => {
                                    onImport(thisCategory);
                                }}
                                size={menuSceneStyles.drinkName.fontSize + 5}
                                disabled={noDrinkToAddLeft}
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
    currencyName: string;
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
            <DrinkListAccordeon
                key={chapter.category}
                drinkCategory={chapter.category}
                listOfOffers={chapter.offers}
                offerActions={props.offerActions}
                addingActions={{
                    randomAdd: props.addingActions.randomAdd,
                    import: props.addingActions.import,
                }}
                currencyName={props.currencyName}
                noDrinkToAddLeft={!props.offersLeftMap.get(chapter.category)!}
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
                paddingBottom: props.isAbout === weServe.drinks ? 265 : 188,
            }}
        >
            {chapterLists}
        </List.Section>
    );
};
