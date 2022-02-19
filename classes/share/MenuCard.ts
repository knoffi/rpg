import { WeServe } from '../../editNavigator/WeServe';
import { MinimalTavernData } from '../../mainNavigator/TavernData';
import { MenuCategory } from '../TavernProduct';
export type OfferEssence = {
    name: string;
    price: number;
    category: MenuCategory;
};
export type MenuCard = Pick<MinimalTavernData, 'name' | 'prices'> &
    Record<WeServe.drinks | WeServe.food, OfferEssence[]>;
