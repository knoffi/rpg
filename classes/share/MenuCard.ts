import { WeServe } from '../../editNavigator/WeServe';
import { MinimalTavernData } from '../../mainNavigator/TavernData';

export type MenuCard = Pick<
    MinimalTavernData,
    'name' | WeServe.drinks | WeServe.food | 'prices'
>;
