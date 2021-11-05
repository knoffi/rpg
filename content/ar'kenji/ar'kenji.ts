import { FantasyBook } from '../../classes/contentCreator/FantasyBook';
import { drinkMenu } from './drinks/drinkMenu';
import { foodMenu } from './food/foodMenu';
import { impressionChapters } from './impressions/impressionChapters';

export const ar_kenji: FantasyBook = {
    notes: impressionChapters,
    drinks: drinkMenu,
    dishes: foodMenu,
};
