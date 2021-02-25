import { DishIdea } from '../../../classes/DishIdea';
import { MainDishChapters } from '../../../classes/mainDishSuperStructures';
import { foodCategory } from '../../../classes/TavernProduct';
import {
    appetizers,
    breakfasts,
    desserts,
    mainDishes,
    sideDishes,
} from './dishes';
import { beefRoasts } from './mainDishes/beefRoasts';
import { chickenRoasts } from './mainDishes/chickenRoasts';
import { porkRoasts } from './mainDishes/porkRoasts';
import { leftoverStew } from './mainDishes/simpleStews';

export const foodExamples = [
    { category: foodCategory.mainDish, examples: mainDishes },
    { category: foodCategory.dessert, examples: desserts },
    { category: foodCategory.sideDish, examples: sideDishes },
    { category: foodCategory.appetizer, examples: appetizers },
    { category: foodCategory.breakfast, examples: breakfasts },
];

const mainDishChapters: MainDishChapters = {
    pasta: { weight: 0, dishIdeas: [] as DishIdea[] },
    stew: { weight: 1, dishIdeas: [leftoverStew] },
    chickenRoast: { weight: 1, dishIdeas: chickenRoasts as DishIdea[] },
    porkRoast: { weight: 1, dishIdeas: porkRoasts as DishIdea[] },
    beefRoast: { weight: 1, dishIdeas: beefRoasts as DishIdea[] },
    sausage: { weight: 0, dishIdeas: [] as DishIdea[] },
    steak: { weight: 0, dishIdeas: [] as DishIdea[] },
    fish: { weight: 0, dishIdeas: [] as DishIdea[] },
    vegetarian: { weight: 0, dishIdeas: [] as DishIdea[] },
};
export const foodChapters = [
    { category: foodCategory.mainDish, chapters: mainDishChapters },
];
