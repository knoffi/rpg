import { association } from '../classes/Adjectives';
import {
    drinkCategory,
    foodCategory,
    menuCategory,
} from '../classes/TavernProduct';
import { TavernData } from '../mainNavigator/TavernData';
import {
    getNewRandomDrinkOffer,
    weServe,
} from '../scenes/menuScene/addRandomDrink';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { NothingLeftOffer, Offer } from '../scenes/menuScene/menuEnums';

export const getNewBannerDataAndOffersLeft = (
    newFitting: { fits: association[]; misfits: association[] },
    newDrinks: Offer[],
    newDishes: Offer[],
    oldDrinkBannerData: BannerData,
    oldFoodBannerData: BannerData
) => {
    const fullOfferDrinkCategories = getFullOfferCategories(
        newFitting,
        newDrinks,
        weServe.drinks
    );
    const fullOfferFoodCategories = getFullOfferCategories(
        newFitting,
        newDishes,
        weServe.food
    );
    const drinkCategoriesLeft = getCategoryNotFullMap(
        fullOfferDrinkCategories,
        weServe.drinks
    );
    const foodCategoriesLeft = getCategoryNotFullMap(
        fullOfferFoodCategories,
        weServe.food
    );

    const newDrinkBannerVisible = getBannerVisibility(
        fullOfferDrinkCategories,
        oldDrinkBannerData
    );
    const newFoodBannerVisible = getBannerVisibility(
        fullOfferFoodCategories,
        oldFoodBannerData
    );

    return {
        drinkBannerData: {
            isVisible: newDrinkBannerVisible,
            emptyCategories: fullOfferDrinkCategories,
        } as BannerData,
        foodBannerData: {
            isVisible: newFoodBannerVisible,
            emptyCategories: fullOfferFoodCategories,
        } as BannerData,
        drinksLeft: drinkCategoriesLeft,
        dishesLeft: foodCategoriesLeft,
    } as Partial<TavernData>;
};
const getBannerVisibility = (
    newFullOfferCategories: menuCategory[],
    oldBannerData: BannerData
) => {
    const newFullOfferCategoryExists =
        newFullOfferCategories.filter(
            (category) => !oldBannerData.emptyCategories.includes(category)
        ).length > 0;
    if (newFullOfferCategoryExists) {
        return true;
    }
    const noCategoryHasFullOffer = newFullOfferCategories.length === 0;
    if (noCategoryHasFullOffer) {
        return false;
    }
    return oldBannerData.isVisible;
};
const getFullOfferCategories = (
    fitting: { fits: association[]; misfits: association[] },
    newOffers: Offer[],
    isAbout: weServe
) => {
    const categories =
        isAbout === weServe.drinks ? drinkCategory : foodCategory;
    const result = (Object.values(categories) as menuCategory[]).filter(
        (category) => {
            return (
                getNewRandomDrinkOffer(
                    fitting.fits,
                    fitting.misfits,
                    category,
                    newOffers,
                    isAbout
                ).product.name === NothingLeftOffer.product.name
            );
        }
    );
    return result;
};
const getCategoryNotFullMap = (
    fullOfferCategories: menuCategory[],
    isAbout: weServe
) => {
    const categories =
        isAbout === weServe.drinks ? drinkCategory : foodCategory;
    return new Map(
        Object.values(categories).map((category) => [
            category,
            !fullOfferCategories.includes(category),
        ])
    );
};
