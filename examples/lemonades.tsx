import { association } from "../classes/Adjectives";
import { drinkCategory, TavernProduct } from "../classes/TavernProduct";

const a = association;
const beerEnum = drinkCategory.beer;

export const lemonades = [
  new TavernProduct(
    "Tropo Cola",
    10,
    [a.city, a.tropical],
    drinkCategory.lemonade
  ),
  new TavernProduct("Six Down", 5, [a.city, a.poor], drinkCategory.lemonade),
  new TavernProduct(
    "Fruit Mine",
    11,
    [a.mountain, a.underdark, a.dwarf],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "The Lubricater",
    26,
    [a.prostitute],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "The Hard Maker",
    22,
    [a.prostitute],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Applelino",
    12,
    [a.village, a.halfling],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Tasty Shmasty",
    14,
    [a.gnome, a.underdark],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Orangino",
    22,
    [a.tropical, a.worker],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Gooseberry Fizz",
    23,
    [a.sophisticated, a.city, a.elf],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Strawberry Fizz",
    19,
    [a.worker, a.forest, a.halfling],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Apple Fizz",
    19,
    [a.worker, a.village, a.halfling],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Tonic Molderoy",
    62,
    [a.tropical, a.rich],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Orange Molderoy",
    60,
    [a.tropical, a.rich],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Cola Molderoy",
    65,
    [a.city, a.rich],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Scurvy Fixxer",
    17,
    [a.haven, a.tropical],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Fruity Wave",
    17,
    [a.haven, a.tropical],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Tsunami Cola",
    28,
    [a.haven, a.city, a.sophisticated],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Aivens Apple Juice",
    18,
    [a.nobel, a.village],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Aivens Orange Juice",
    19,
    [a.nobel, a.tropical],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Aivens Testified Lemonade",
    25,
    [a.nobel, a.cleric],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Flint's Fuzzy Drink",
    12,
    [a.criminal, a.haven],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "McDagger's Tonic Water",
    14,
    [a.criminal, a.city],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "McDagger's Bitter Lemon",
    15,
    [a.criminal, a.city],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Sir Weatherstone's Bitter Lemon",
    65,
    [a.gnome, a.rich],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Sir Weatherstone's Tonic Water",
    59,
    [a.gnome, a.rich],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Sir Weatherstone's Fassbrause",
    89,
    [a.rich, a.village],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Pinecone Beverage",
    89,
    [a.druid, a.forest, a.village],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Rowan Berry Soda",
    12,
    [a.druid, a.forest, a.village],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Black Berry Soda",
    12,
    [a.druid, a.forest, a.village],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Elder Berry Soda",
    17,
    [a.druid, a.desert, a.mountain, a.village],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Gentian Soda",
    18,
    [a.druid, a.mountain, a.village],
    drinkCategory.lemonade
  ),

  new TavernProduct(
    "Date Juice",
    22,
    [a.druid, a.desert],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Fig Soda",
    21,
    [a.druid, a.desert],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Cola Of Adventure",
    21,
    [a.adventurer],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Harry's Bitter Lemon",
    22,
    [a.wizard],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Harry's Tonic Water",
    24,
    [a.wizard],
    drinkCategory.lemonade
  ),
  new TavernProduct(
    "Harry's Mola Cola",
    23,
    [a.wizard],
    drinkCategory.lemonade
  ),
];
