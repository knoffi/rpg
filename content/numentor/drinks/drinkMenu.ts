import { IDrinkMenu } from '../../../classes/contentCreator/ContentCreator';
import { Drinkable } from '../../../classes/TavernProduct';
import { ales } from './beer/ales';
import { lagers } from './beer/lagers';
import { porters } from './beer/porter';
import { meads } from './wine/meads';
import { redWines } from './wine/redWines';

export const drinkMenu: IDrinkMenu[] = [
    { category: Drinkable.beer, drinks: [...ales, ...lagers, ...porters] },
    { category: Drinkable.wine, drinks: [...redWines, ...meads] },
];
