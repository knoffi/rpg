import { mainDishCookingBook } from '../../../../classes/mainDishCookingBook';
import {
    IngredientsFromIncome,
    IngredientStore,
} from '../../../../classes/mainDishSuperStructures';
import {
    workerCarbIngredients,
    workerGreenIngredients,
    workerMainIngredients,
} from './moderateRoasts';

const mainDishFromIncome: IngredientsFromIncome = {
    poor: [],
    modest: workerMainIngredients,
    wealthy: [],
    rich: [],
};
const carbDishFromIncome: IngredientsFromIncome = {
    poor: [],
    modest: workerCarbIngredients,
    wealthy: [],
    rich: [],
};
const greenDishFromIncome: IngredientsFromIncome = {
    poor: [],
    modest: workerGreenIngredients,
    wealthy: [],
    rich: [],
};
const ingredientStore: IngredientStore = {
    main: mainDishFromIncome,
    carbs: carbDishFromIncome,
    greens: greenDishFromIncome,
};
const mainDishRecipes = new mainDishCookingBook(ingredientStore);
export const mainDishesFromRecipes = mainDishRecipes.getModestDishes();
