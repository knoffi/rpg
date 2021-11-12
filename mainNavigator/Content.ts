import { WeServe } from '../editNavigator/WeServe';
import { MinimalTavernData } from './TavernData';

export type Content = Pick<
    MinimalTavernData,
    WeServe.drinks | WeServe.food | WeServe.impressions
>;
