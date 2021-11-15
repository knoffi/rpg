import { IDrinkMenu } from '../../../classes/contentCreator/ContentCreator';
import { Drinkable } from '../../../classes/TavernProduct';
import { lagers } from './beer/lagers';
import { lemonades } from './softDrinks/lemonade';
import { water } from './softDrinks/water';
import { rum } from './spirits/rum';
import { redWines } from './wine/redWines';

export const drinkMenu: IDrinkMenu[] = [
    { category: Drinkable.beer, ideas: [...lagers] },
    { category: Drinkable.wine, ideas: [...redWines] },
    { category: Drinkable.spirit, ideas: [...rum] },
    { category: Drinkable.lemonade, ideas: [...lemonades, ...water] },
];
