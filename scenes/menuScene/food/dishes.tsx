import { association } from '../../../classes/association';
import { foodCategory, TavernProduct } from '../../../classes/TavernProduct';
const a = association;
const mainDishEnum = foodCategory.mainDish;
export const appetizers = [
    new TavernProduct(
        'Asparagus Creme Soup with Seasonal Spices',
        10,
        [],
        foodCategory.appetizer
    ),
];

export const sideDishes = [
    new TavernProduct(
        'Arugula Salad with Cherry Tomatoes',
        10,
        [],
        foodCategory.sideDish
    ),
];
export const desserts = [
    new TavernProduct('Crème Brûlée', 10, [], foodCategory.sideDish),
];
