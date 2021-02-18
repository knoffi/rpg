import { association } from '../../../../classes/Adjectives';
import { mainDishCookingBook } from '../../../../classes/mainDishCookingBook';
import {
    IngredientList,
    IngredientsFromIncome,
    IngredientStore,
} from '../../../../classes/mainDishIngredientTypes';

const a = association;
const workerMainIngredients: IngredientList = [
    {
        name: 'Roast Beef in Brown Sauce',
        areas: [a.city, a.desert, a.village, a.mountain],
    },
];
const workerSideIngredients: IngredientList = [
    {
        name: 'with Mashed Potatoes',
        areas: [a.city, a.desert, a.village, a.mountain],
    },
];
const mainDishFromIncome: IngredientsFromIncome = {
    poor: [],
    modest: workerMainIngredients,
    wealthy: [],
    rich: [],
};
const sideDishFromIncome: IngredientsFromIncome = {
    poor: [],
    modest: workerSideIngredients,
    wealthy: [],
    rich: [],
};
const ingredientStore: IngredientStore = {
    main: mainDishFromIncome,
    side: sideDishFromIncome,
};
const mainDishRecipes = new mainDishCookingBook(ingredientStore);
export const mainDishesFromRecipes = mainDishRecipes.getModestDishes();
