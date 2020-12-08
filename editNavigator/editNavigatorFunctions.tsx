import { association } from '../classes/Adjectives';
import { drinkCategory, foodCategory } from '../classes/TavernProduct';
import { NothingLeftOffer, Offer } from '../scenes/menuScene/menuEnums';
import {
    getNewRandomDrinkOffer,
    weServe,
} from '../scenes/menuScene/menuFunctions';
import { menuCategory } from '../scenes/menuScene/menuProduct';
import { BannerData } from '../scenes/menuScene/MenuScene';

export const removeEmptyStrings = (
    newFits: association[],
    newMisfits: association[]
) => {
    const filteredFits = newFits.filter((entry) => {
        return entry !== association.empty;
    });
    return { fits: filteredFits, misfits: newMisfits };
};
export const getStartMenuMaps = () => {
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
export const getProductsLeftAndBannerData = (
    fitting: { fits: association[]; misfits: association[] },
    drinkOffers: Offer[],
    foodOffers: Offer[]
) => {
    const emptyDrinkCategories = [] as drinkCategory[];
    let drinkBannerVisible = false;
    const isDrinkLeftMap = new Map([]) as Map<drinkCategory, boolean>;
    const emptyFoodCategories = [] as foodCategory[];
    let foodBannerVisible = false;
    const isFoodLeftMap = new Map([]) as Map<foodCategory, boolean>;
    Object.values(foodCategory).forEach((foodCategory) => {
        const testFoodOffer = getNewRandomDrinkOffer(
            fitting.fits,
            fitting.misfits,
            foodCategory,
            foodOffers,
            weServe.food
        );
        if (
            testFoodOffer === undefined ||
            testFoodOffer.product.name === NothingLeftOffer.product.name
        ) {
            isFoodLeftMap.set(foodCategory, false);
            foodBannerVisible = true;
            emptyFoodCategories.push(foodCategory);
        } else {
            isFoodLeftMap.set(foodCategory, true);
        }
    });
    Object.values(drinkCategory).forEach((drinkCategory) => {
        const testDrinkOffer = getNewRandomDrinkOffer(
            fitting.fits,
            fitting.misfits,
            drinkCategory,
            drinkOffers,
            weServe.drinks
        );
        if (
            testDrinkOffer === undefined ||
            testDrinkOffer.product.name === NothingLeftOffer.product.name
        ) {
            isDrinkLeftMap.set(drinkCategory, false);
            drinkBannerVisible = true;
            emptyDrinkCategories.push(drinkCategory);
        } else {
            isDrinkLeftMap.set(drinkCategory, true);
        }
    });
    return {
        drinkBannerData: {
            emptyCategories: emptyDrinkCategories,
            isVisible: drinkBannerVisible,
        } as BannerData,
        foodBannerData: {
            emptyCategories: emptyFoodCategories,
            isVisible: foodBannerVisible,
        } as BannerData,
        isDrinkLeftMap: isDrinkLeftMap,
        isFoodLeftMap: isFoodLeftMap,
    };
};
