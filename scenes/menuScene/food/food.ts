import { DishIdea } from '../../../classes/DishIdea';
import { MainDishChapters } from '../../../classes/mainDishSuperStructures';
import { foodCategory } from '../../../classes/TavernProduct';
import { appetizers, breakfasts, desserts, sideDishes } from './dishes';
import { beefRoasts } from './mainDishes/beefRoasts';
import { chickenRoasts } from './mainDishes/chickenRoasts';
import { fishAndChips } from './mainDishes/fishAndChips';
import { porkRoasts } from './mainDishes/porkRoasts';
import { leftoverStew } from './mainDishes/simpleStews';
import { steaks } from './mainDishes/steaks';

export const foodExamples = [
    { category: foodCategory.dessert, examples: desserts },
    { category: foodCategory.sideDish, examples: sideDishes },
    { category: foodCategory.appetizer, examples: appetizers },
    { category: foodCategory.breakfast, examples: breakfasts },
];

const mainDishChapters: MainDishChapters = {
    pasta: { weight: 0, dishIdeas: [] as DishIdea[] },
    stew: { weight: 1, dishIdeas: [leftoverStew] },
    chickenRoast: { weight: 1, dishIdeas: [...chickenRoasts] },
    porkRoast: { weight: 1, dishIdeas: [...porkRoasts] },
    beefRoast: { weight: 1, dishIdeas: [...beefRoasts] },
    sausage: { weight: 0, dishIdeas: [] as DishIdea[] },
    steak: { weight: 1, dishIdeas: [...steaks] },
    fish: { weight: 1, dishIdeas: [fishAndChips] },
    vegetarian: { weight: 0, dishIdeas: [] as DishIdea[] },
};
export const foodChapters = [
    { category: foodCategory.mainDish, chapters: mainDishChapters },
];
