import { foodCategory } from "../../../classes/TavernProduct";
import { appetizers, breakfasts, desserts, mainDishes, sideDishes } from "./dishes";


export const foodExamples = [
    { category: foodCategory.mainDish, examples: mainDishes },
    { category: foodCategory.dessert, examples: desserts },
    { category: foodCategory.sideDish, examples: sideDishes },
    { category: foodCategory.appetizer, examples: appetizers },
    { category: foodCategory.breakfast, examples: breakfasts },
];