import React from 'react';
import { List } from 'react-native-paper';
import { Drinkable, Eatable } from '../../../classes/TavernProduct';
import { HEIGHT_FACTOR } from '../../../dimensionConstants';
import { WeServe } from '../../../editNavigator/WeServe';
import { Describable } from '../../../mainNavigator/TavernData';
import { globalStyles } from '../../globalStyles';
import { Offer } from '../Offer';
import { OfferListAccordeon } from './Accordeon';
import { Demand, IAddingActions, IOfferActions } from './actionInterfaces';

const BOTTOM_PADDING_DRINKS = 265 * HEIGHT_FACTOR;
const BOTTOM_PADDING_FOOD = 188 * HEIGHT_FACTOR;

export const OfferList = (props: {
    offers: Offer[];
    isAbout: WeServe;
    offerActions: IOfferActions;
    addingActions: IAddingActions;
    offersLeftMap: Map<Describable, boolean>;
    getPriceString: (offer: Offer) => string;
}) => {
    const demands =
        props.isAbout === WeServe.drinks
            ? { isAboutFood: false, categories: Drinkable }
            : { isAboutFood: true, categories: Eatable };
    const menu = Object.values(demands.categories).map((category) => {
        const offersOfCategory = props.offers.filter(
            (offer) => offer.product.category === category
        );
        return {
            category: category,
            offers: offersOfCategory,
        };
    });
    // Now: menu=[ {"beer", [] }, {"wine", [] }, ... ]

    const chapterLists = menu.map((chapter) => {
        const demand: Demand = {
            isAbout: demands.isAboutFood ? WeServe.food : WeServe.drinks,
            category: chapter.category,
        };
        return (
            <OfferListAccordeon
                key={chapter.category}
                demand={demand}
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
