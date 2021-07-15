import React from 'react';
import { List } from 'react-native-paper';
import {
    Drinkable,
    Eatable,
    MenuCategory,
} from '../../../classes/TavernProduct';
import { HEIGHT_FACTOR } from '../../../dimensionConstants';
import { globalStyles } from '../../globalStyles';
import { Offer } from '../menuEnums';
import { WeServe } from '../../../editNavigator/WeServe';
import { OfferListAccordeon } from './OfferListAccordeon';
import { addingActions, offerActions } from './productActions';

const BOTTOM_PADDING_DRINKS = 265 * HEIGHT_FACTOR;
const BOTTOM_PADDING_FOOD = 188 * HEIGHT_FACTOR;

export const OfferList = (props: {
    offers: Offer[];
    isAbout: WeServe;
    offerActions: offerActions;
    addingActions: addingActions;
    offersLeftMap: Map<MenuCategory, boolean>;
    getPriceString: (offer: Offer) => string;
}) => {
    const categories = props.isAbout === WeServe.drinks ? Drinkable : Eatable;
    const menu = Object.values(categories).map((category) => {
        const offersOfCategory = props.offers.filter(
            (offer) => offer.product.category === category
        );
        return {
            category: category as MenuCategory,
            offers: offersOfCategory,
        };
    });
    // Now: menu=[ {"beer", [] }, {"wine", [] }, ...

    const chapterLists = menu.map((chapter) => {
        return (
            <OfferListAccordeon
                key={chapter.category}
                Drinkable={chapter.category}
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
    // TODO: Check, whether different drinks from different categories have different names

    return (
        <List.Section
            title={props.isAbout.toUpperCase()}
            titleStyle={globalStyles.title}
            style={{
                paddingBottom:
                    props.isAbout === WeServe.drinks
                        ? BOTTOM_PADDING_DRINKS
                        : BOTTOM_PADDING_FOOD,
            }}
        >
            {chapterLists}
        </List.Section>
    );
};
