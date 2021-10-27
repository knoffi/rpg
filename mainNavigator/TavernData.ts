import { Noticable } from '../classes/idea/Noticable';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { Offer } from '../scenes/menuScene/Offer';
import { IImpression } from '../scenes/questScene/impressions/IImpression';
export type Describable = Drinkable | Eatable | Noticable;
export type TavernData = {
    fitting: StructuredTavernFits;
    name: string;
    [WeServe.drinks]: Offer[];
    [WeServe.food]: Offer[];
    prices: BasePrice;
    ideasLeft: {
        [WeServe.drinks]: Map<Describable, boolean>;
        [WeServe.food]: Map<Describable, boolean>;
        [WeServe.impressions]: Map<Describable, boolean>;
    };
    bannerData: {
        [WeServe.drinks]: BannerData;
        [WeServe.food]: BannerData;
        [WeServe.impressions]: BannerData;
    };
    boughtOffers: Offer[];
    [WeServe.impressions]: IImpression[];
};
export type MinimalTavernData = Omit<TavernData, 'ideasLeft' | 'bannerData'>;
