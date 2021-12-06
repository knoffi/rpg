import { FantasyBook } from '../../classes/contentCreator/FantasyBook';
import { WeServe } from '../../editNavigator/WeServe';
import { drinkMenu } from './drinks/drinkMenu';
import { foodMenu } from './food/foodMenu';
import { impressionChapters } from './impressions/impressionChapters';

export const UNIT_TEST_CONTENT: FantasyBook = {
    [WeServe.impressions]: impressionChapters,
    [WeServe.drinks]: drinkMenu,
    [WeServe.food]: foodMenu,
};
