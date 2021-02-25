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
import { leftoverStew } from './simpleStews';

export const foodExamples = [
    { category: foodCategory.mainDish, examples: mainDishes },
    { category: foodCategory.dessert, examples: desserts },
    { category: foodCategory.sideDish, examples: sideDishes },
    { category: foodCategory.appetizer, examples: appetizers },
    { category: foodCategory.breakfast, examples: breakfasts },
];

const mainDishChapters: MainDishChapters = {
    pasta: { weight: 0, dishIdeas: [] as DishIdea[] },
    chickenRoast: { weight: 0, dishIdeas: [] as DishIdea[] },
    porkRoast: { weight: 0, dishIdeas: [] as DishIdea[] },
    beefRoast: { weight: 0, dishIdeas: [] as DishIdea[] },
    sausage: { weight: 0, dishIdeas: [] as DishIdea[] },
    steak: { weight: 0, dishIdeas: [] as DishIdea[] },
    stew: { weight: 1, dishIdeas: [leftoverStew] },
    fish: { weight: 0, dishIdeas: [] as DishIdea[] },
    vegetarian: { weight: 0, dishIdeas: [] as DishIdea[] },
};
export const foodChapters = [
    { category: foodCategory.mainDish, chapters: mainDishChapters },
];
