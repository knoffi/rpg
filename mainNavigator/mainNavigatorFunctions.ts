import { Noticable } from '../classes/idea/Noticable';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { getAllNewBannerDataAndOffersLeft } from '../editNavigator/getNewBannerDataAndIdeasLeft';
import { WeServe } from '../editNavigator/WeServe';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { MinimalTavernData, TavernData } from './TavernData';

export const getTavernHistoryInitializer = (): MinimalTavernData => {
    const startIdeasLeft = getDefaultIdeasLeft();
    const startBanner = { isVisible: false, emptyCategories: [] };
    return {
        fitting: {},
        name: 'Nameless Tavern',
        [WeServe.drinks]: [],
        [WeServe.food]: [],
        prices: standardBasePrice,
        ideasLeft: startIdeasLeft,
        bannerData: {
            drink: startBanner,
            food: startBanner,
            impression: startBanner,
        },
        boughtOffers: [],
        [WeServe.impressions]: [],
    } as TavernData;
};

export const getTavernFromMinimalData = (
    minimalData: MinimalTavernData,
    impressionIsLeft: (category: Noticable) => boolean,
    drinkIsLeft: (category: Drinkable) => boolean,
    foodIsLeft: (category: Eatable) => boolean
): TavernData => {
    const startBanner = { isVisible: false, emptyCategories: [] };
    const { bannerData, ideasLeft } = getAllNewBannerDataAndOffersLeft(
        {
            drink: startBanner,
            food: startBanner,
            impression: startBanner,
        },
        impressionIsLeft,
        foodIsLeft,
        drinkIsLeft
    );
    return {
        ...minimalData,
        boughtOffers: minimalData.boughtOffers,
        bannerData: bannerData,
        ideasLeft: ideasLeft,
    };
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
