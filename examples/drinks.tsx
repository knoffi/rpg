import { drinkCategory, foodCategory, TavernProduct } from "../classes/TavernProduct";
import { beers } from "./beer";
import { lemonades } from "./lemonades";
import { appetizers, breakfasts, desserts, mainDishes, sideDishes } from "./mainDishes";
import { spirits } from "./spirits";
import { wines } from "./wines";

interface productExamples {
  category: drinkCategory|foodCategory;
  examples: TavernProduct[];
}

export let drinkExamples: productExamples[];
export let foodExamples: productExamples[];

drinkExamples = [
  { category: drinkCategory.beer, examples: beers },
  { category: drinkCategory.wine, examples: wines },
  { category: drinkCategory.spirit, examples: spirits },
  { category: drinkCategory.lemonade, examples: lemonades },
];

foodExamples = [
  { category:foodCategory.mainDish,examples: mainDishes},
  { category:foodCategory.dessert,examples: desserts},
  { category:foodCategory.sideDish,examples: sideDishes},
  { category:foodCategory.appetizer,examples: appetizers},
  { category:foodCategory.breakfast,examples: breakfasts}
]
