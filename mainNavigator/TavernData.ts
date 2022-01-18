import { CreationQuality } from '../classes/contentCreator/CreationQuality';
import { Noticable } from '../classes/idea/Noticable';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { Offer } from '../scenes/menuScene/Offer';
import { Impression } from '../scenes/questScene/impressions/Impression';
import { UniverseMap } from './UniverseMap';
export type Describable = Drinkable | Eatable | Noticable;
export const getDescribables = (isAbout: WeServe | 'all') => {
    if (isAbout === 'all') {
        const allDescribables: Describable[] = [
            ...Object.values(Noticable),
            ...Object.values(Eatable),
            ...Object.values(Drinkable),
        ];
        return allDescribables;
    } else {
        const categories: Describable[] =
            isAbout === WeServe.impressions
                ? Object.values(Noticable)
                : isAbout === WeServe.food
                ? Object.values(Eatable)
                : Object.values(Drinkable);
        return categories;
    }
};
export type TavernData = {
    fitting: StructuredTavernFits;
    name: string;
    [WeServe.drinks]: Offer[];
    [WeServe.food]: Offer[];
    prices: BasePrice;
    ideasLeft: Record<WeServe, DescriptionCheck>;
    bannerData: Record<WeServe, BannerData>;
    boughtOffers: Offer[];
    [WeServe.impressions]: Impression[];
    universe: UniverseMap;
};
export type MinimalTavernData = Omit<TavernData, 'ideasLeft' | 'bannerData'>;
type DescriptionCheck = Map<Describable, CreationQuality>;
