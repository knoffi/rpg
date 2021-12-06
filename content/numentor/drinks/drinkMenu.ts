import { IDrinkMenu } from '../../../classes/contentCreator/ContentCreator';
import { Drinkable } from '../../../classes/TavernProduct';
import { ales } from './beer/ales';
import { lagers } from './beer/lagers';
import { porters } from './beer/porter';
import { bourbon, scotch } from './spirits/whiskey';
import { meads } from './wine/meads';
import { redWines } from './wine/redWines';

export const drinkMenu: IDrinkMenu[] = [
    { category: Drinkable.beer, ideas: [...ales, ...lagers, ...porters] },
    { category: Drinkable.wine, ideas: [...redWines, ...meads] },
    { category: Drinkable.spirit, ideas: [...scotch, ...bourbon] },
];
