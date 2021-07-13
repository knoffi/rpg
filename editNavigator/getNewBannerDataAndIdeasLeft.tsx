import { Noticable } from '../classes/idea/Noticable';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Drinkable, Eatable, MenuCategory } from '../classes/TavernProduct';
import { TavernData } from '../mainNavigator/TavernData';
import {
    getNewRandomDrinkOffer,
    WeServe,
} from '../scenes/menuScene/addRandomDrink';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { NothingLeftOffer, Offer } from '../scenes/menuScene/menuEnums';
import { emptyImpression } from '../scenes/questScene/impressions/emptyImpression';
import { IImpression } from '../scenes/questScene/impressions/IImpression';
import { getRandomImpression } from '../scenes/questScene/impressions/impressionChapters';
export const getNewBannerDataAndIdeasLeft = (
    newFitting: StructuredTavernFits,
    newIdeas: Offer[] | IImpression[],
    oldBannerData: BannerData,
    isAbout: WeServe
) => {
    const fullIdeaCategories = getFullOfferCategories(
        newFitting,
        newIdeas,
        isAbout
    );
    const ideaCategoriesLeft = getCategoryNotFullMap(
        fullIdeaCategories,
        isAbout
    );
    const newBannerVisibility = getBannerVisibility(
        fullIdeaCategories,
        oldBannerData
    );
    const newBanner: BannerData = {
        emptyCategories: fullIdeaCategories,
        isVisible: newBannerVisibility,
    };
    return { ideasLeft: ideaCategoriesLeft, banner: newBanner };
};
export const getAllNewBannerDataAndOffersLeft = (
    newFitting: StructuredTavernFits,
    newIdeas: { drinks: Offer[]; dishes: Offer[]; impressions: IImpression[] },
    completeBanner: {
        drink: BannerData;
        food: BannerData;
        impression: BannerData;
    }
) => {
    const drinkData = getNewBannerDataAndIdeasLeft(
        newFitting,
        newIdeas.drinks,
        completeBanner.drink,
        WeServe.drinks
    );
    const foodData = getNewBannerDataAndIdeasLeft(
        newFitting,
        newIdeas.dishes,
        completeBanner.food,
        WeServe.food
    );
    const impressionData = getNewBannerDataAndIdeasLeft(
        newFitting,
        newIdeas.impressions,
        completeBanner.impression,
        WeServe.impressions
    );

    return {
        ideasLeft: {
            drink: drinkData.ideasLeft,
            food: foodData.ideasLeft,
            impression: impressionData.ideasLeft,
        },
        bannerData: {
            drink: drinkData.banner,
            food: foodData.banner,
            impression: impressionData.banner,
        },
    } as Partial<TavernData>;
};
const getBannerVisibility = (
    newFullOfferCategories: (MenuCategory | Noticable)[],
    oldBannerData: BannerData
) => {
    const newFullOfferCategoryExists = newFullOfferCategories.some(
        (category) => !oldBannerData.emptyCategories.includes(category)
    );
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
    fitting: StructuredTavernFits,
    newAssets: Offer[] | IImpression[],
    isAbout: WeServe
) => {
    if (isAbout === WeServe.impressions) {
        const alreadyUsedNames = (newAssets as IImpression[]).map(
            (asset) => asset.name
        );

        return Object.values(Noticable).filter(
            (category) =>
                getRandomImpression(fitting, category, alreadyUsedNames, [], [])
                    .name === emptyImpression.name
        );
    }
    const categories = isAbout === WeServe.drinks ? Drinkable : Eatable;
    const result = (Object.values(categories) as MenuCategory[]).filter(
        (category) => {
            return (
                getNewRandomDrinkOffer(
                    fitting,
                    category,
                    newAssets as Offer[],
                    isAbout
                ).product.name === NothingLeftOffer.product.name
            );
        }
    );
    return result;
};
const getCategoryNotFullMap = (
    fullCategories: MenuCategory[] | Noticable[],
    isAbout: WeServe
) => {
    if (isAbout === WeServe.impressions) {
        return new Map(
            Object.values(Noticable).map((category) => [
                category,
                !(fullCategories as Noticable[]).includes(category),
            ])
        );
    }
    const categories = isAbout === WeServe.drinks ? Drinkable : Eatable;
    return new Map(
        Object.values(categories).map((category) => [
            category,
            !(fullCategories as MenuCategory[]).includes(category),
        ])
    );
};
