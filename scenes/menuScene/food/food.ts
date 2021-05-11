import { DishIdea } from '../../../classes/DishIdea';
import {
    BreakfastChapters,
    DessertChapters,
    MainDishChapters,
} from '../../../classes/FoodChapters';
import { foodCategory } from '../../../classes/TavernProduct';
import { breakfastPlates } from './breakfastPlates/breakfastPlates';
import { porridges } from './cereals/porridges';
import { pudding } from './desserts/puddings';
import { appetizers, desserts, sideDishes } from './dishes';
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
const breakfastChapters: BreakfastChapters = {
    cereals: { weight: 1, dishIdeas: [...porridges] },
    mainSweet: { weight: 0, dishIdeas: [] as DishIdea[] },
    mainEgg: { weight: 0, dishIdeas: [] as DishIdea[] },
    mainBread: { weight: 0, dishIdeas: [] as DishIdea[] },
    fullPlate: { weight: 1, dishIdeas: breakfastPlates },
    panCakes: { weight: 0, dishIdeas: [] as DishIdea[] },
};

const dessertChapters: DessertChapters = {
    cake: { weight: 0, dishIdeas: [] as DishIdea[] },
    chocolate: { weight: 0, dishIdeas: [] as DishIdea[] },
    candy: { weight: 0, dishIdeas: [] as DishIdea[] },
    iceCream: { weight: 0, dishIdeas: [] as DishIdea[] },
    fruity: { weight: 0, dishIdeas: [] as DishIdea[] },
    nutty: { weight: 0, dishIdeas: [] as DishIdea[] },
    pastries: { weight: 0, dishIdeas: [] as DishIdea[] },
    pudding: { weight: 1, dishIdeas: pudding },
};

export const foodChapters = [
    { category: foodCategory.mainDish, chapters: mainDishChapters },
    { category: foodCategory.breakfast, chapters: breakfastChapters },
    { category: foodCategory.dessert, chapters: dessertChapters },
];
