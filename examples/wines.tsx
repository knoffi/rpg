import { association } from "../Adjectives";
import { drinkCategory, TavernProduct } from "../TavernProduct";
const a = association;
const wineEnum = drinkCategory.wine;
export const wines = [
  new TavernProduct(
    "Zoltan's Red Wine of Fairytales",
    25,
    [a.city, a.mountain, a.bard, a.adventurer, a.dwarf, a.human, a.gnome],
    wineEnum
  ),
  new TavernProduct(
    "Zoltan's White Wine of Romance",
    25,
    [a.city, a.mountain, a.forest, a.bard, a.dwarf, a.human, a.elf],
    wineEnum
  ),
  new TavernProduct(
    "Zoltan's Federweisser of Music",
    20,
    [a.city, a.mountain, a.village, a.bard, a.elf, a.human, a.gnome],
    wineEnum
  ),
  new TavernProduct(
    "Miro's Sake of Philosophy",
    25,
    [
      a.city,
      a.mountain,
      a.sophisticated,
      a.haven,
      a.bard,
      a.gnome,
      a.human,
      a.tiefling,
      a.wizard,
    ],
    wineEnum
  ),
  new TavernProduct(
    "Zoltan's Champagne of Charade",
    40,
    [a.city, a.nobel, a.rich, a.bard, a.elf, a.human, a.halfling],
    wineEnum
  ),
];
