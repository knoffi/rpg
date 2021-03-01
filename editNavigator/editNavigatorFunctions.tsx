import { association } from '../classes/association';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { Offer } from '../scenes/menuScene/menuEnums';
import { getNewBannerDataAndOffersLeft } from './getNewBannerDataAndOffersLeft';

export const removeEmptyStrings = (
    newFits: association[],
    newMisfits: association[]
) => {
    const filteredFits = newFits.filter((entry) => {
        return entry !== association.empty;
    });
    return { fits: filteredFits, misfits: newMisfits };
};
export const getProductsLeftAndBannerData = (
    fitting: { fits: association[]; misfits: association[] },
    drinkOffers: Offer[],
    foodOffers: Offer[]
) => {
    const emptyTavernBannerData: BannerData = {
        isVisible: false,
        emptyCategories: [],
    };
    return getNewBannerDataAndOffersLeft(
        fitting,
        drinkOffers,
        foodOffers,
        emptyTavernBannerData,
        emptyTavernBannerData
    );
};
