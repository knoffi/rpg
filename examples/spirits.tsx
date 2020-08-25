import { association } from "../Adjectives";
import { drink, TavernProduct } from "../TavernProduct";
const a = association;
export const spirits = [
  new TavernProduct(
    "Kain's Gin Of Fury",
    20,
    [a.city, a.mountain, a.haven, a.dragonborn, a.barbarian],
    drink.spirit
  ),
  new TavernProduct(
    "Ar'kenji's Shoshu of Wisdom",
    20,
    [a.city, a.desert, a.elf, a.human, a.adventurer],
    drink.spirit
  ),
  new TavernProduct(
    "Salvatoria's Rum of Adventure",
    20,
    [a.haven, a.city, a.criminal, a.cleric, a.human],
    drink.spirit
  ),
  new TavernProduct(
    "Dura Ex's Tequila of Charm",
    20,
    [a.underdark, a.city, a.prostitute, a.criminal, a.human],
    drink.spirit
  ),
  new TavernProduct(
    "Liechtenfels's Vodka of Conspiracy",
    20,
    [a.village, a.mountain, a.adventurer, a.halfling, a.human],
    drink.spirit
  ),
  new TavernProduct(
    "Numentor's Cachaca of Dancing",
    20,
    [a.city, a.tropical, a.human, a.elf, a.wizard],
    drink.spirit
  ),
];
