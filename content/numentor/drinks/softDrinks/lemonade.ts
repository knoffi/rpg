import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';

export const lemonades: DishIdea[] = [
    new DishIdea({ mainIng: { name: 'Water' } }, 0.1, Drinkable.lemonade),
];
