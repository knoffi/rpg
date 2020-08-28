import { association } from "../classes/Adjectives";
import { drinkCategory, TavernProduct } from "../classes/TavernProduct";

const a = association;
const beerEnum = drinkCategory.beer;

export const lemonades = [
  new TavernProduct(
    "Tropo Cola",
    10,
    [association.city, association.tropical],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Six Down",
    5,
    [association.city, association.poor],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Fruit Mine",
    11,
    [association.mountain, association.underdark, association.dwarf],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "The Lubricater",
    26,
    [association.prostitute],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "The Hard Maker",
    22,
    [association.prostitute],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Applelino",
    12,
    [association.village, association.halfling],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Tasty Shmasty",
    14,
    [association.gnome, association.underdark],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Orangino",
    22,
    [association.tropical, association.worker],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Gooseberry Fizz",
    20,
    [association.sophisticated, association.city, association.elf],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Fruity Molderoy",
    40,
    [association.sophisticated, association.city],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Scurvy Killer",
    17,
    [association.haven, association.tropical],
    drinkCategory.lemonade
  ),
];
