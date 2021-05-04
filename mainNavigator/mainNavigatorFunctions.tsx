import {
    drinkCategory,
    foodCategory,
    menuCategory,
    TavernProduct,
} from '../classes/TavernProduct';
import { getNewBannerDataAndOffersLeft } from '../editNavigator/getNewBannerDataAndOffersLeft';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { Offer } from '../scenes/menuScene/menuEnums';
import { MinimalTavernData, TavernData } from './TavernData';

export const getTavernHistoryInitializer = () => {
    const startMenuMaps = getStartMenuMaps();
    return {
        fitting: { fits: [], misfits: [] },
        name: 'Nameless Tavern',
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        drinksLeft: startMenuMaps.drinkMap,
        dishesLeft: startMenuMaps.dishesMap,
        drinkBannerData: { isVisible: false, emptyCategories: [] },
        foodBannerData: { isVisible: false, emptyCategories: [] },
        boughtOffers: [],
        impressions: [],
    } as TavernData;
};

const rebuildOffers = (offers: Offer[]) => {
    return offers.map((offer) => {
        return {
            price: offer.price,
            product: new TavernProduct(
                offer.product.name,
                offer.product.copperPrice,
                offer.product.associations,
                offer.product.category,
                offer.product.description,
                offer.product.isUserMade
            ),
        } as Offer;
    });
};

export const getTavernFromMinimalData = (minimalData: MinimalTavernData) => {
    const rebuildDrinkOffers = rebuildOffers(minimalData.drinks);
    const rebuildFoodOffers = rebuildOffers(minimalData.dishes);
    const rebuildBoughtOffers = rebuildOffers(minimalData.boughtOffers);

    const oldBannerData = { isVisible: false, emptyCategories: [] };
    const BannerData = getNewBannerDataAndOffersLeft(
        minimalData.fitting,
        minimalData.drinks,
        minimalData.dishes,
        oldBannerData,
        oldBannerData
    );
    return {
        ...minimalData,
        boughtOffers: rebuildBoughtOffers,
        drinks: rebuildDrinkOffers,
        dishes: rebuildFoodOffers,
        drinkBannerData: BannerData.drinkBannerData,
        foodBannerData: BannerData.foodBannerData,
        dishesLeft: BannerData.dishesLeft,
        drinksLeft: BannerData.drinksLeft,
    } as TavernData;
};
export const getMinimalDataFromTavern = (tavern: TavernData) => {
    const minimalData: MinimalTavernData = {
        name: tavern.name,
        fitting: tavern.fitting,
        drinks: tavern.drinks,
        dishes: tavern.dishes,
        prices: tavern.prices,
        boughtOffers: tavern.boughtOffers,
        impressions: tavern.impressions,
    };
    return minimalData;
};

const getStartMenuMaps = () => {
    const startDrinksLeft = new Map([]) as Map<menuCategory, boolean>;
    // assuming that every category has additional drinks to add from the start!
    Object.values(drinkCategory).forEach((category) => {
        startDrinksLeft.set(category as drinkCategory, true);
    });
    const startDishesLeft = new Map([]) as Map<menuCategory, boolean>;
    // assuming that every category has additional food to add from the start!
    Object.values(foodCategory).forEach((category) => {
        startDishesLeft.set(category as foodCategory, true);
    });
    return { drinkMap: startDrinksLeft, dishesMap: startDishesLeft };
};
