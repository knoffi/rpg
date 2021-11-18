import { Noticable } from '../classes/idea/Noticable';
import { Drinkable, Eatable, MenuCategory } from '../classes/TavernProduct';
import { TavernData } from '../mainNavigator/TavernData';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { WeServe } from './WeServe';

export type ContentLeftTest = Pick<TavernData, 'ideasLeft' | 'bannerData'>;

type TavernCheck =
    | {
          isAbout: WeServe.impressions;
          impressionIsLeft: (category: Noticable) => boolean;
      }
    | {
          isAbout: WeServe.drinks;
          drinkIsLeft: (category: Drinkable) => boolean;
      }
    | {
          isAbout: WeServe.food;
          foodIsLeft: (category: Eatable) => boolean;
      };

export const getAllNewBannerDataAndOffersLeft = (
    completeBanner: {
        drink: BannerData;
        food: BannerData;
        impression: BannerData;
    },
    impressionIsLeft: (category: Noticable) => boolean,
    foodIsLeft: (category: Eatable) => boolean,
    drinkIsLeft: (category: Drinkable) => boolean
): ContentLeftTest => {
    const drinkData = getNewBannerDataAndIdeasLeft(completeBanner.drink, {
        isAbout: WeServe.drinks,
        drinkIsLeft,
    });
    const foodData = getNewBannerDataAndIdeasLeft(completeBanner.food, {
        isAbout: WeServe.food,
        foodIsLeft,
    });
    const impressionData = getNewBannerDataAndIdeasLeft(
        completeBanner.impression,
        { isAbout: WeServe.impressions, impressionIsLeft }
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
    };
};
const getNewBannerDataAndIdeasLeft = (
    oldBannerData: BannerData,
    check: TavernCheck
) => {
    const fullIdeaCategories = getFullCategories(check);
    const ideaCategoriesLeft = getCategoryNotFullMap(
        fullIdeaCategories,
        check.isAbout
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
const getFullCategories = (check: TavernCheck) => {
    switch (check.isAbout) {
        case WeServe.food:
            return Object.values(Eatable).filter(
                (category) => !check.foodIsLeft(category)
            );
        case WeServe.drinks:
            return Object.values(Drinkable).filter(
                (category) => !check.drinkIsLeft(category)
            );

        default:
            return Object.values(Noticable).filter(
                (category) => !check.impressionIsLeft(category)
            );
    }
};
const getCategoryNotFullMap = (
    fullCategories: MenuCategory[] | Noticable[],
    isAbout: WeServe
) => {
    let categories;
    switch (isAbout) {
        case WeServe.drinks:
            categories = Drinkable;
            break;
        case WeServe.food:
            categories = Eatable;
            break;

        default:
            categories = Noticable;
            break;
    }
    return new Map(
        Object.values(categories).map((category) => [
            category,
            !(fullCategories as Noticable[]).includes(category),
        ])
    );
};
