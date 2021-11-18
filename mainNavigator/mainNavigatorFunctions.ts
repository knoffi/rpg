import { Noticable } from '../classes/idea/Noticable';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { getAllNewBannerDataAndOffersLeft } from '../editNavigator/getNewBannerDataAndIdeasLeft';
import { WeServe } from '../editNavigator/WeServe';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { MinimalTavernData, TavernData } from './TavernData';
import { UniverseMap } from './UniverseMap';

export const getTavernHistoryInitializer = (
    universe: UniverseMap
): MinimalTavernData => {
    return {
        fitting: {},
        name: 'Nameless Tavern',
        [WeServe.drinks]: [],
        [WeServe.food]: [],
        prices: standardBasePrice,
        boughtOffers: [],
        [WeServe.impressions]: [],
        universe,
    };
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
