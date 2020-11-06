import { drinkCategory, TavernProduct } from "../classes/TavernProduct";
import { beers } from "./beer";
import { lemonades } from "./lemonades";
import { spirits } from "./spirits";
import { wines } from "./wines";

interface drinkExample {
  category: drinkCategory;
  examples: TavernProduct[];
}

export let drinkExamples: drinkExample[];

drinkExamples = [
  { category: drinkCategory.beer, examples: [beers[0],beers[10]] },
  { category: drinkCategory.wine, examples: wines },
  { category: drinkCategory.spirit, examples: spirits },
  { category: drinkCategory.lemonade, examples: lemonades },
];
