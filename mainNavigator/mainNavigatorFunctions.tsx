import { Noticable } from '../classes/idea/Noticable';
import { Drinkable, Eatable, TavernProduct } from '../classes/TavernProduct';
import { getAllNewBannerDataAndOffersLeft } from '../editNavigator/getNewBannerDataAndIdeasLeft';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { Offer } from '../scenes/menuScene/menuEnums';
import { IImpression } from '../scenes/questScene/impressions/IImpression';
import { MinimalTavernData, TavernData } from './TavernData';

export const getTavernHistoryInitializer = () => {
    const startIdeasLeft = getDefaultIdeasLeft();
    const startBanner = { isVisible: false, emptyCategories: [] };
    return {
        fitting: {},
        name: 'Nameless Tavern',
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        ideasLeft: startIdeasLeft,
        bannerData: {
            drink: startBanner,
            food: startBanner,
            impression: startBanner,
        },
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
const rebuildImpressions = (impressions: IImpression[]) => {
    return impressions.map((impression) => {
        return {
            name: impression.name,
            category: impression.category,
        } as IImpression;
    });
};

export const getTavernFromMinimalData = (minimalData: MinimalTavernData) => {
    const newDrinks = rebuildOffers(minimalData.drinks);
    const newDishes = rebuildOffers(minimalData.dishes);
    const newBoughtOffers = rebuildOffers(minimalData.boughtOffers);
    const newImpressions = rebuildImpressions(minimalData.impressions);
    const { drinks, dishes, impressions } = minimalData;
    const startBanner = { isVisible: false, emptyCategories: [] };
    const { bannerData, ideasLeft } = getAllNewBannerDataAndOffersLeft(
        minimalData.fitting,
        { drinks, dishes, impressions },
        { drink: startBanner, food: startBanner, impression: startBanner }
    );
    return {
        ...minimalData,
        boughtOffers: newBoughtOffers,
        drinks: newDrinks,
        dishes: newDishes,
        impressions: newImpressions,
        bannerData: bannerData,
        ideasLeft: ideasLeft,
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

const getDefaultIdeasLeft = () => {
    const startDrinksLeft = new Map(
        Object.values(Drinkable).map((category) => [category, true])
    );
    const startFoodLeft = new Map(
        Object.values(Eatable).map((category) => [category, true])
    );
    const startImpressionsLeft = new Map(
        Object.values(Noticable).map((category) => [category, true])
    );
    return {
        drink: startDrinksLeft,
        food: startFoodLeft,
        impression: startImpressionsLeft,
    };
};
