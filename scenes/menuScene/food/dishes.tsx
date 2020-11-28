import { association } from '../../../classes/Adjectives';
import { foodCategory, TavernProduct } from '../../../classes/TavernProduct';
const a = association;
const mainDishEnum = foodCategory.mainDish;

export const mainDishes = [
    new TavernProduct(
        'Leftover Chicken Stew With Bread',
        8,
        [a.poor],
        mainDishEnum
    ),
    new TavernProduct(
        'Chateaubriand With Gold Plated Duchesse Potatoes',
        500,
        [a.rich],
        mainDishEnum
    ),
    new TavernProduct(
        'Wild Pheasant In Wine Sauce With Mushrooms',
        90,
        [a.sophisticated],
        mainDishEnum
    ),
    new TavernProduct(
        'Roast Chicken With Potatoes',
        30,
        [a.worker],
        mainDishEnum
    ),
];

export const breakfasts = [
    new TavernProduct(
        'Jam Toast And Baked Beans With Ham',
        10,
        [],
        foodCategory.breakfast
    ),
];

export const appetizers = [
    new TavernProduct(
        'Asparagus Creme Soup With Seasonal Spices',
        10,
        [],
        foodCategory.appetizer
    ),
];

export const sideDishes = [
    new TavernProduct(
        'Arugula Salad With Cherry Tomatoes',
        10,
        [],
        foodCategory.sideDish
    ),
];
export const desserts = [
    new TavernProduct('Crème Brûlée', 10, [], foodCategory.sideDish),
];
