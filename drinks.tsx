import { beers } from "./examples/beer";
import { lemonades } from "./examples/lemonades";
import { spirits } from "./examples/spirits";
import { wines } from "./examples/wines";
import { drinkCategory, TavernProduct } from "./TavernProduct";

interface drinkExample {
  category: drinkCategory;
  examples: TavernProduct[];
}

export let drinkExamples: drinkExample[];

drinkExamples = [
  { category: drinkCategory.beer, examples: beers },
  { category: drinkCategory.wine, examples: wines },
  { category: drinkCategory.spirit, examples: spirits },
  { category: drinkCategory.lemonade, examples: lemonades },
];
