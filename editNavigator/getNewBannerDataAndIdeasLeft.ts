import { CreationQuality } from '../classes/contentCreator/creationQuality';
import { Noticable } from '../classes/idea/Noticable';
import { Drinkable, Eatable, MenuCategory } from '../classes/TavernProduct';
import { TavernData } from '../mainNavigator/TavernData';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { WeServe } from './WeServe';

export type ContentLeftTest = Pick<TavernData, 'ideasLeft' | 'bannerData'>;

type QualityCheck = {
    isAbout: WeServe;
    testContentLeft: (demand: Demand) => CreationQuality;
};

export const getAllNewBannerDataAndOffersLeft = (
    completeBanner: {
        drink: BannerData;
        food: BannerData;
        impression: BannerData;
    },
    testContentLeft: (demand: Demand) => CreationQuality
): ContentLeftTest => {
    const drinkData = getNewBannerDataAndIdeasLeft(completeBanner.drink, {
        isAbout: WeServe.drinks,
        testContentLeft,
    });
    const foodData = getNewBannerDataAndIdeasLeft(completeBanner.food, {
        isAbout: WeServe.food,
        testContentLeft,
    });
    const impressionData = getNewBannerDataAndIdeasLeft(
        completeBanner.impression,
        { isAbout: WeServe.impressions, testContentLeft }
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
    check: QualityCheck
) => {
    const qualityTest = getQualityTest(check);

    const newBannerVisibility = getBannerVisibility(
        qualityTest.empty,
        oldBannerData
    );
    const newBanner: BannerData = {
        emptyCategories: qualityTest.empty,
        isVisible: newBannerVisibility,
    };
    return { ideasLeft: qualityTest.contentLeft, banner: newBanner };
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
const getQualityTest = (check: QualityCheck) => {
    switch (check.isAbout) {
        case WeServe.food:
            const foodMap = new Map<Eatable, CreationQuality>();
            Object.values(Eatable).forEach((category) => {
                const qualityLeft = check.testContentLeft({
                    isAbout: WeServe.food,
                    category: category,
                });
                foodMap.set(category, qualityLeft);
            });
            const emptyFood = Object.values(Eatable).filter(
                (category) => foodMap.get(category) === CreationQuality.NONE
            );
            return { contentLeft: foodMap, empty: emptyFood };
        case WeServe.drinks:
            const drinkMap = new Map<Drinkable, CreationQuality>();
            Object.values(Drinkable).forEach((category) => {
                const qualityLeft = check.testContentLeft({
                    isAbout: WeServe.drinks,
                    category: category,
                });
                drinkMap.set(category, qualityLeft);
            });
            const emptyDrinks = Object.values(Drinkable).filter(
                (category) => drinkMap.get(category) === CreationQuality.NONE
            );
            return { contentLeft: drinkMap, empty: emptyDrinks };
        default:
            const impressionMap = new Map<Noticable, CreationQuality>();
            Object.values(Noticable).forEach((category) => {
                const qualityLeft = check.testContentLeft({
                    isAbout: WeServe.impressions,
                    category: category,
                });
                impressionMap.set(category, qualityLeft);
            });
            const emptyImpressions = Object.values(Noticable).filter(
                (category) =>
                    impressionMap.get(category) === CreationQuality.NONE
            );
            return { contentLeft: impressionMap, empty: emptyImpressions };
    }
};
