import { association } from '../classes/association';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { Offer } from '../scenes/menuScene/menuEnums';
import { IImpression } from '../scenes/questScene/impressions/IImpression';
import { getAllNewBannerDataAndOffersLeft } from './getNewBannerDataAndIdeasLeft';

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
    ideas: { drinks: Offer[]; dishes: Offer[]; impressions: IImpression[] }
) => {
    const emptyBanner: BannerData = {
        isVisible: false,
        emptyCategories: [],
    };
    return getAllNewBannerDataAndOffersLeft(
        fitting,
        {
            drinks: ideas.drinks,
            dishes: ideas.dishes,
            impressions: ideas.impressions,
        },
        { drink: emptyBanner, food: emptyBanner, impression: emptyBanner }
    );
};
