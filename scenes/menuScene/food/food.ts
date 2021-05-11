import { DishIdea } from '../../../classes/DishIdea';
import { Eatable } from '../../../classes/TavernProduct';
import {
    BreakfastChapters,
    MainDishChapters,
} from '../menuChapters/FoodChapters';
import { breakfastPlates } from './breakfastPlates/breakfastPlates';
import { porridges } from './cereals/porridges';
import { DessertChapters } from './desserts/DessertChapters';
import { appetizers, desserts, sideDishes } from './dishes';
import { beefRoasts } from './mainDishes/beefRoasts';
import { chickenRoasts } from './mainDishes/chickenRoasts';
import { fishAndChips } from './mainDishes/fishAndChips';
import { porkRoasts } from './mainDishes/porkRoasts';
import { leftoverStew } from './mainDishes/simpleStews';
import { steaks } from './mainDishes/steaks';

export const foodExamples = [
    { category: Eatable.dessert, examples: desserts },
    { category: Eatable.sideDish, examples: sideDishes },
    { category: Eatable.appetizer, examples: appetizers },
];

const mainDishChapters: MainDishChapters = {
    pasta: { weight: 0, ideas: [] as DishIdea[] },
    stew: { weight: 1, ideas: [leftoverStew] },
    chickenRoast: { weight: 1, ideas: [...chickenRoasts] },
    porkRoast: { weight: 1, ideas: [...porkRoasts] },
    beefRoast: { weight: 1, ideas: [...beefRoasts] },
    sausage: { weight: 0, ideas: [] as DishIdea[] },
    steak: { weight: 1, ideas: [...steaks] },
    fish: { weight: 1, ideas: [fishAndChips] },
    vegetarian: { weight: 0, ideas: [] as DishIdea[] },
};
const breakfastChapters: BreakfastChapters = {
    cereals: { weight: 1, ideas: [...porridges] },
    mainSweet: { weight: 0, ideas: [] as DishIdea[] },
    mainEgg: { weight: 0, ideas: [] as DishIdea[] },
    mainBread: { weight: 0, ideas: [] as DishIdea[] },
    fullPlate: { weight: 1, ideas: breakfastPlates },
    panCakes: { weight: 0, ideas: [] as DishIdea[] },
};

const dessertChapters: DessertChapters = {
    cake: { weight: 0, dishIdeas: [] as DishIdea[] },
    chocolate: { weight: 0, dishIdeas: [] as DishIdea[] },
    candy: { weight: 0, dishIdeas: [] as DishIdea[] },
    iceCream: { weight: 0, dishIdeas: [] as DishIdea[] },
    fruity: { weight: 0, dishIdeas: [] as DishIdea[] },
    nutty: { weight: 0, dishIdeas: [] as DishIdea[] },
    pastries: { weight: 0, dishIdeas: [] as DishIdea[] },
    pudding: { weight: 0, dishIdeas: [] as DishIdea[] },
};
export const foodChapters = [
    { category: Eatable.mainDish, chapters: mainDishChapters },
    { category: Eatable.breakfast, chapters: breakfastChapters },
    { category: Eatable.dessert, chapters: dessertChapters },
];
