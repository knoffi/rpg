import { Noticable } from '../classes/idea/Noticable';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { Offer } from '../scenes/menuScene/Offer';
import { IImpression } from '../scenes/questScene/impressions/IImpression';

export type TavernData = {
    fitting: StructuredTavernFits;
    name: string;
    drinks: Offer[];
    dishes: Offer[];
    prices: BasePrice;
    ideasLeft: {
        drink: Map<Drinkable, boolean>;
        food: Map<Eatable, boolean>;
        impression: Map<Noticable, boolean>;
    };
    bannerData: {
        [WeServe.drinks]: BannerData;
        [WeServe.food]: BannerData;
        [WeServe.impressions]: BannerData;
    };
    boughtOffers: Offer[];
    impressions: IImpression[];
};
export interface MinimalTavernData {
    fitting: StructuredTavernFits;
    name: string;
    drinks: Offer[];
    dishes: Offer[];
    prices: BasePrice;
    boughtOffers: Offer[];
    impressions: IImpression[];
}
