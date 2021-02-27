import { association } from '../../../classes/association';
import { foodCategory, TavernProduct } from '../../../classes/TavernProduct';
import { breakfastPlates } from './breakfastPlates/breakfastPlates';
import { porridge } from './porridge/porridge';
const a = association;
const mainDishEnum = foodCategory.mainDish;

export const breakfasts = [
    new TavernProduct(
        'Jam Toast and Baked Beans with Ham',
        10,
        [],
        foodCategory.breakfast
    ),
    new TavernProduct(
        'Bread with jam and a boiled egg',
        3,
        [],
        foodCategory.breakfast
    ),
].concat(porridge, breakfastPlates);

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
