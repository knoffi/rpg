import { association } from "./Adjectives";
import { beers } from "./examples/beer";
import { spirits } from "./examples/spirits";
import { wines } from "./examples/wines";
import { drink, TavernProduct } from "./TavernProduct";

const a = association;

interface drinkExample {
  category: drink;
  examples: TavernProduct[];
}

export let drinkExamples: drinkExample[];

drinkExamples = [
  { category: drink.beer, examples: beers },
  { category: drink.wine, examples: wines },
  { category: drink.spirit, examples: spirits },
];
