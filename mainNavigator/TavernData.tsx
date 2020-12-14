import { association } from '../classes/Adjectives';
import { drinkCategory, foodCategory } from '../classes/TavernProduct';
import { BasePrice } from '../scenes/menuScene/basePrice';
import { BannerData } from '../scenes/menuScene/menuBanner/MenuBanner';
import { Offer } from '../scenes/menuScene/menuEnums';

export type TavernData = {
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
};
