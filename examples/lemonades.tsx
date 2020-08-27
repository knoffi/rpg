import { association } from "../Adjectives";
import { drinkCategory, TavernProduct } from "../TavernProduct";

const a = association;
const beerEnum = drinkCategory.beer;

export const lemonades = [
  new TavernProduct(
    "Limbo Cola",
    10,
    [association.city, association.tropical],
    drinkCategory.lemonade
  ),
];
