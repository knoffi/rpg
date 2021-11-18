import { FantasyBook } from '../../classes/contentCreator/FantasyBook';
import { WeServe } from '../../editNavigator/WeServe';
import { drinkMenu } from './drinks/drinkMenu';
import { foodMenu } from './food/foodMenu';
import { impressionChapters } from './impressions/impressionChapters';

export const ar_kenji: FantasyBook = {
    [WeServe.impressions]: impressionChapters,
    [WeServe.drinks]: drinkMenu,
    [WeServe.food]: foodMenu,
};
