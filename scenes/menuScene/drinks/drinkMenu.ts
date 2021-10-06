import { IDrinkMenu } from '../../../classes/contentCreator/ContentCreator';
import { Drinkable } from '../../../classes/TavernProduct';
import { ales } from './beers/ales';
import { lagers } from './beers/lagers';
import { porters } from './beers/porter';
import { redWines } from './wines/redWines';

export const drinkMenu: IDrinkMenu[] = [
    { category: Drinkable.beer, drinks: [...ales, ...lagers, ...porters] },
    { category: Drinkable.wine, drinks: [...redWines] },
];
