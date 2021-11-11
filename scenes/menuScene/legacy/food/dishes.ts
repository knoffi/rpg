import { association } from '../../../../classes/association';
import { Eatable, TavernProduct } from '../../../../classes/TavernProduct';
const a = association;
export const appetizers = [
    new TavernProduct(
        'Asparagus Creme Soup with Seasonal Spices',
        10,
        [],
        Eatable.sideDish
    ),
];

export const sideDishes = [
    new TavernProduct(
        'Arugula Salad with Cherry Tomatoes',
        10,
        [],
        Eatable.sideDish
    ),
];
export const desserts = [
    new TavernProduct('Crème Brûlée', 10, [], Eatable.sideDish),
];
