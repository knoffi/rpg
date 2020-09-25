import { association } from "../classes/Adjectives";
import { drinkCategory, TavernProduct } from "../classes/TavernProduct";
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
  new TavernProduct(
    "Ibsinixi's Apple Cider ",
    27,
    [a.halfling, a.forest, a.village, a.worker],
    wineEnum
  ),
  new TavernProduct(
    "Ibsinixi's Pear Cider ",
    27,
    [a.halfling, a.forest, a.village, a.worker],
    wineEnum
  ),
  new TavernProduct(
    "Ibsinixi's Berry Cider ",
    27,
    [a.halfling, a.forest, a.village, a.worker],
    wineEnum
  ),
  new TavernProduct(
    "Ibsinixi's Ginger Cider ",
    27,
    [a.halfling, a.tropical, a.city, a.worker],
    wineEnum
  ),
  new TavernProduct(
    "Ibsinixi's Mango Cider ",
    27,
    [a.halfling, a.tropical, a.haven],
    wineEnum
  ),
  new TavernProduct(
    "Ibsinixi's Peach Cider ",
    27,
    [a.halfling, a.city, a.tropical, a.worker],
    wineEnum
  ),
  new TavernProduct(
    "Ibsinixi's Lemon Cider ",
    27,
    [a.halfling, a.tropical, a.village, a.worker],
    wineEnum
  ),
  new TavernProduct(
    "Baron Fletchers's Red Wine",
    27,
    [a.halfling, a.forest, a.village, a.worker],
    wineEnum
  ),
  new TavernProduct(
    "Baron Fletchers's White Wine ",
    27,
    [a.halfling, a.forest, a.village, a.worker],
    wineEnum
  ),
  new TavernProduct(
    "5 Year Old Baiser Rouge",
    45,
    [a.cleric, a.elf, a.city, a.rich],
    wineEnum
  ),
  new TavernProduct(
    "15 Year Old Baiser Rouge",
    56,
    [a.cleric, a.elf, a.city, a.rich],
    wineEnum
  ),
  new TavernProduct(
    "25 Year Old Baiser Rouge",
    70,
    [a.cleric, a.elf, a.city, a.rich],
    wineEnum
  ),
  new TavernProduct(
    "50 Year Old Baiser Rouge",
    120,
    [a.cleric, a.elf, a.city, a.rich],
    wineEnum
  ),
  new TavernProduct(
    "Ibsinixi's Rhubarb Cider ",
    27,
    [a.halfling, a.forest, a.village, a.worker, a.cleric],
    wineEnum
  ),
  new TavernProduct(
    "4 Year Old Franzlbeisser",
    25,
    [a.human, a.village, a.worker, a.mountain, a.adventurer],
    wineEnum
  ),
  new TavernProduct(
    "11 Year Old Franzlbeisser",
    32,
    [a.human, a.village, a.worker, a.mountain, a.adventurer],
    wineEnum
  ),
  new TavernProduct(
    "20 Year Old Franzlbeisser",
    45,
    [a.human, a.village, a.worker, a.mountain, a.adventurer],
    wineEnum
  ),
  new TavernProduct(
    "6 Year Old Luiselbacher",
    26,
    [a.cleric, a.nobel, a.halfling],
    wineEnum
  ),
  new TavernProduct(
    "10 Year Old Luiselbacher",
    31,
    [a.cleric, a.nobel, a.halfling],
    wineEnum
  ),
  new TavernProduct(
    "20 Year Old Luiselbacher",
    45,
    [a.cleric, a.nobel, a.halfling],
    wineEnum
  ),
  new TavernProduct(
    "6 Year Old Cavalosso",
    35,
    [a.elf, a.city, a.sophisticated, a.bard],
    wineEnum
  ),
  new TavernProduct(
    "12 Year Old Cavalosso",
    46,
    [a.elf, a.city, a.sophisticated, a.bard],
    wineEnum
  ),
  new TavernProduct(
    "18 Year Old Cavalosso",
    51,
    [a.elf, a.city, a.sophisticated, a.bard],
    wineEnum
  ),
  new TavernProduct(
    "1 Year Old Cavaebleu",
    7,
    [a.poor, a.prostitute, a.criminal, a.city],
    wineEnum
  ),
  new TavernProduct(
    "2 Year Old Cavaebleu",
    9,
    [a.poor, a.prostitute, a.criminal, a.city],
    wineEnum
  ),
  new TavernProduct(
    "4 Year Old Cavaebleu",
    11,
    [a.poor, a.prostitute, a.criminal, a.city],
    wineEnum
  ),
  new TavernProduct(
    "6 Year Old Pugnavini",
    21,
    [a.criminal, a.prostitute, a.haven, a.city],
    wineEnum
  ),
  new TavernProduct(
    "10 Year Old Pugnavini",
    35,
    [a.criminal, a.prostitute, a.haven, a.city],
    wineEnum
  ),
  new TavernProduct(
    "12 Year Old Pugnavini",
    40,
    [a.criminal, a.prostitute, a.haven, a.city],
    wineEnum
  ),
  new TavernProduct(
    "6 Year Old Volkerbacher",
    18,
    [a.village, a.worker, a.mountain, a.cleric],
    wineEnum
  ),
  new TavernProduct(
    "10 Year Old Volkerbacher",
    21,
    [a.village, a.worker, a.mountain, a.cleric],
    wineEnum
  ),
  new TavernProduct(
    "12 Year Old Volkerbacher",
    23,
    [a.village, a.worker, a.mountain, a.cleric],
    wineEnum
  ),
  new TavernProduct(
    "4 Year Old Paoneaux",
    20,
    [a.city, a.sophisticated, a.prostitute],
    wineEnum
  ),
  new TavernProduct(
    "7 Year Old Paoneaux",
    32,
    [a.city, a.sophisticated, a.prostitute],
    wineEnum
  ),
  new TavernProduct(
    "12 Year Old Paoneaux",
    40,
    [a.city, a.sophisticated, a.prostitute],
    wineEnum
  ),
  new TavernProduct(
    "Grizzly Mead",
    26,
    [a.forest, a.mountain, a.barbarian],
    wineEnum
  ),
  new TavernProduct(
    "Blackberry Mead",
    25,
    [a.forest, a.village, a.mountain, a.barbarian],
    wineEnum
  ),
  new TavernProduct(
    "Currant Mead",
    23,
    [a.forest, a.village, a.mountain],
    wineEnum
  ),
  new TavernProduct(
    "Elderberry Mead",
    24,
    [a.forest, a.village, a.mountain],
    wineEnum
  ),
  new TavernProduct("Ginger Mead", 27, [a.city, a.sophisticated], wineEnum),
  new TavernProduct(
    "White Owl Mead",
    32,
    [a.wizard, a.city, a.human, a.druid],
    wineEnum
  ),
  new TavernProduct(
    "Kraken Mead",
    28,
    [a.haven, a.city, a.adventurer, a.human],
    wineEnum
  ),
  new TavernProduct(
    "Flounder Mead",
    22,
    [a.haven, a.village, a.criminal, a.halfling],
    wineEnum
  ),
  new TavernProduct(
    "Gentian Mead",
    25,
    [a.village, a.mountain, a.forest, a.dwarf, a.gnome],
    wineEnum
  ),
  new TavernProduct(
    "Blueberry Mead",
    25,
    [a.village, a.mountain, a.forest, a.dwarf, a.gnome],
    wineEnum
  ),
  new TavernProduct(
    "Black Mead",
    26,
    [a.underdark, a.tiefling, a.drow],
    wineEnum
  ),
  new TavernProduct(
    "Sir Aiven's Mead",
    26,
    [a.cleric, a.nobel, a.city],
    wineEnum
  ),
  new TavernProduct("Rose Mead", 50, [a.rich, a.elf], wineEnum),
  new TavernProduct(
    "Granite Mead",
    19,
    [a.dwarf, a.barbarian, a.worker, a.dragonborn],
    wineEnum
  ),
  new TavernProduct(
    "Marble Mead",
    56,
    [a.dwarf, a.nobel, a.rich, a.mountain, a.underdark],
    wineEnum
  ),
  new TavernProduct(
    "Quartz Mead",
    29,
    [a.dwarf, a.mountain, a.sophisticated, a.underdark],
    wineEnum
  ),
  new TavernProduct(
    "Coal Mead",
    10,
    [a.dwarf, a.poor, a.criminal, a.underdark, a.underdark, a.mountain],
    wineEnum
  ),
];
