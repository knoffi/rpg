import { WeServe } from '../../editNavigator/WeServe';
import { IDishMenu, IDrinkMenu, ImpressionNote } from './ContentCreator';

export type FantasyBook = {
    [WeServe.impressions]: ImpressionNote[];
    [WeServe.drinks]: IDrinkMenu[];
    [WeServe.food]: IDishMenu[];
};
