import { association } from "../Adjectives";
import { drinkCategory, TavernProduct } from "../TavernProduct";
const a = association;
const spiritEnum = drinkCategory.spirit;
export const spirits = [
  new TavernProduct(
    "Kain's Gin Of Fury",
    20,
    [a.city, a.mountain, a.haven, a.dragonborn, a.barbarian],
    spiritEnum
  ),
  new TavernProduct(
    "Ar'kenji's Shoshu of Wisdom",
    20,
    [a.city, a.desert, a.elf, a.human, a.adventurer],
    spiritEnum
  ),
  new TavernProduct(
    "Salvatoria's Rum of Adventure",
    20,
    [a.haven, a.city, a.criminal, a.cleric, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "Dura Ex's Tequila of Charm",
    20,
    [a.underdark, a.city, a.prostitute, a.criminal, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "Liechtenfels's Vodka of Conspiracy",
    20,
    [a.village, a.mountain, a.adventurer, a.halfling, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "Numentor's Cachaca of Dancing",
    20,
    [a.city, a.tropical, a.human, a.elf, a.wizard],
    spiritEnum
  ),
];
