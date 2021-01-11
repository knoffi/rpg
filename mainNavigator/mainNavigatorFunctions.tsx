import {
    drinkCategory,
    foodCategory,
    menuCategory,
} from '../classes/TavernProduct';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { Offer } from '../scenes/menuScene/menuEnums';
import { TavernData } from './TavernData';

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
        boughtOffers: [] as Offer[],
    } as TavernData;
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
