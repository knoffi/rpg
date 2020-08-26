import { association } from "./Adjectives";
import { beers } from "./examples/beer";
import { spirits } from "./examples/spirits";
import { wines } from "./examples/wines";
import { drinkCategory, TavernProduct } from "./TavernProduct";

const a = association;

interface drinkExample {
  category: drinkCategory;
  examples: TavernProduct[];
}

export let drinkExamples: drinkExample[];

drinkExamples = [
  { category: drinkCategory.beer, examples: beers },
  { category: drinkCategory.wine, examples: wines },
  { category: drinkCategory.spirit, examples: spirits },
];
