import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { Offer } from '../scenes/menuScene/menuEnums';
import { IImpression } from '../scenes/questScene/impressions/IImpression';
import { getAllNewBannerDataAndOffersLeft } from './getNewBannerDataAndIdeasLeft';

export const getProductsLeftAndBannerData = (
    fitting: StructuredTavernFits,
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
