import { association } from '../classes/association';
import { drinkCategory, foodCategory } from '../classes/TavernProduct';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { Offer } from '../scenes/menuScene/menuEnums';
import { ITavernDescription } from '../scenes/questScene/impressions/ITavernDescription';

export type TavernData = {
    //TODO: misfits are depreciated
    fitting: { fits: association[]; misfits: association[] };
    name: string;
    drinks: Offer[];
    dishes: Offer[];
    prices: BasePrice;
    drinksLeft: Map<drinkCategory, boolean>;
    dishesLeft: Map<foodCategory, boolean>;
    drinkBannerData: BannerData;
    foodBannerData: BannerData;
    boughtOffers: Offer[];
    impressions: ITavernDescription[];
};

export interface MinimalTavernData {
    //TODO: misfits are depreciated
    fitting: { fits: association[]; misfits: association[] };
    name: string;
    drinks: Offer[];
    dishes: Offer[];
    prices: BasePrice;
    boughtOffers: Offer[];
    impressions: ITavernDescription[];
}
