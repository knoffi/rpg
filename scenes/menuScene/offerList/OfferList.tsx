import React from 'react';
import { List } from 'react-native-paper';
import {
    drinkCategory,
    foodCategory,
    menuCategory,
} from '../../../classes/TavernProduct';
import { HEIGHT_FACTOR } from '../../../dimensionConstants';
import { globalStyles } from '../../globalStyles';
import { weServe } from '../addRandomDrink';
import { Offer } from '../menuEnums';
import { OfferListAccordeon } from './OfferListAccordeon';
import { addingActions, offerActions } from './productActions';

const BOTTOM_PADDING_DRINKS = 265 * HEIGHT_FACTOR;
const BOTTOM_PADDING_FOOD = 188 * HEIGHT_FACTOR;

export const OfferList = (props: {
    offers: Offer[];
    isAbout: weServe;
    offerActions: offerActions;
    addingActions: addingActions;
    offersLeftMap: Map<menuCategory, boolean>;
    getPriceString: (offer: Offer) => string;
}) => {
    const categories =
        props.isAbout === weServe.drinks ? drinkCategory : foodCategory;
    const menu = Object.values(categories).map((category) => {
        const offersOfCategory = props.offers.filter(
            (offer) => offer.product.category === category
        );
        return {
            category: category as menuCategory,
            offers: offersOfCategory,
        };
    });
    // Now: menu=[ {"beer", [] }, {"wine", [] }, ...

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
    // TODO: Check, whether different drinks from different categories have different names

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
