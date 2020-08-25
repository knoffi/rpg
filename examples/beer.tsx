import { association } from "../Adjectives";
import { drink, TavernProduct } from "../TavernProduct";
const a = association;

export const beers = [
  new TavernProduct(
    "Black-Bearded Brew",
    5,
    [a.criminal, a.human, a.haven, a.poor],
    drink.beer
  ),
  new TavernProduct(
    "Flint's Dark Lager",
    7,
    [a.criminal, a.human, a.haven, a.poor],
    drink.beer
  ),
  new TavernProduct(
    "Stoertebeckers Last Wish",
    10,
    [a.criminal, a.human, a.haven, a.worker],
    drink.beer
  ),
  new TavernProduct(
    "The Krakens Ale",
    14,
    [a.adventurer, a.human, a.haven, a.poor],
    drink.beer
  ),
  new TavernProduct(
    "Stanley's Last",
    2,
    [a.criminal, a.human, a.city, a.poor],
    drink.beer
  ),
  new TavernProduct(
    "Diamond Molderoy",
    150,
    [a.elf, a.human, a.dwarf, a.gnome, a.rich, a.nobel],
    drink.beer
  ),
  new TavernProduct(
    "Platinum Molderoy",
    100,
    [a.elf, a.human, a.dwarf, a.gnome, a.rich, a.nobel],
    drink.beer
  ),
  new TavernProduct(
    "Golden Molderoy",
    75,
    [a.elf, a.human, a.dwarf, a.gnome, a.rich, a.nobel],
    drink.beer
  ),
  new TavernProduct(
    "Silver Molderoy",
    50,
    [a.elf, a.human, a.dwarf, a.gnome, a.rich],
    drink.beer
  ),
  new TavernProduct(
    "Copper Molderoy",
    25,
    [a.elf, a.human, a.dwarf, a.gnome, a.rich],
    drink.beer
  ),
  new TavernProduct(
    "Sir Weatherstone's Loveliest",
    80,
    [a.halfling, a.nobel, a.rich],
    drink.beer
  ),
  new TavernProduct(
    "Sir Weatherstone's Best",
    80,
    [a.halfling, a.nobel, a.rich],
    drink.beer
  ),
  new TavernProduct(
    "Sir Weatherstone's Finest",
    105,
    [a.halfling, a.nobel, a.rich],
    drink.beer
  ),
  new TavernProduct(
    "Sir Weatherstone's Highest",
    125,
    [a.halfling, a.nobel, a.rich],
    drink.beer
  ),
  new TavernProduct(
    "The Whacky Moist",
    12,
    [a.halfling, a.human, a.city],
    drink.beer
  ),
  new TavernProduct(
    "Cinnamon Beer",
    18,
    [a.wizard, a.rich, a.city],
    drink.beer
  ),
  new TavernProduct(
    "Hurly Dursley",
    9,
    [a.halfling, a.gnome, a.village],
    drink.beer
  ),
  new TavernProduct(
    "Kimchi Beer",
    12,
    [a.wizard, a.sophisticated, a.city],
    drink.beer
  ),
  new TavernProduct(
    "Baselbruck's Storm Ale",
    11,
    [a.city, a.halfling, a.haven],
    drink.beer
  ),
  new TavernProduct(
    "Baselbruck's Beany Brew",
    10,
    [a.village, a.halfling, a.worker],
    drink.beer
  ),
  new TavernProduct(
    "Baselbruck's Lager",
    9,
    [a.adventurer, a.halfling, a.city],
    drink.beer
  ),
  new TavernProduct(
    "Baselbruck's Export",
    9,
    [a.adventurer, a.halfling, a.desert, a.tropical],
    drink.beer
  ),
  new TavernProduct(
    "Baselbruck's Black Beer",
    9,
    [a.adventurer, a.halfling, a.underdark, a.evil],
    drink.beer
  ),
  new TavernProduct(
    "Wollys Wheat Beer",
    11,
    [a.village, a.halfling, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Aiven's Divine Malt",
    13,
    [a.city, a.elf, a.cleric],
    drink.beer
  ),
  new TavernProduct(
    "Aiven's Virtuous Malt",
    10,
    [a.village, a.human, a.cleric],
    drink.beer
  ),
  new TavernProduct(
    "Aiven's Righteous Malt",
    12,
    [a.mountain, a.dwarf, a.cleric],
    drink.beer
  ),
  new TavernProduct(
    "Aiven's Peaceful Malt",
    9,
    [a.forest, a.elf, a.cleric],
    drink.beer
  ),
  new TavernProduct(
    "Aiven's Rejoicing Malt",
    11,
    [a.haven, a.human, a.cleric],
    drink.beer
  ),
  new TavernProduct(
    "Aiven's Merciful Malt",
    10,
    [a.tropical, a.human, a.cleric],
    drink.beer
  ),
  new TavernProduct(
    "Aiven's Honest Malt",
    13,
    [a.underdark, a.gnome, a.cleric],
    drink.beer
  ),
  new TavernProduct(
    "Aiven's Honorable Malt",
    25,
    [a.human, a.gnome, a.cleric, a.rich, a.nobel],
    drink.beer
  ),
  new TavernProduct(
    "Jurassical Marshmallow",
    14,
    [a.gnome, a.city, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Oscar's Sip of Honor",
    18,
    [a.dragonborn, a.human, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Oscar's Sip of Glory",
    19,
    [a.dragonborn, a.human, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Oscar's Sip of Joy",
    20,
    [a.dragonborn, a.human, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Oscar's Sip of Bravery",
    20,
    [a.dragonborn, a.human, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Sixth Sense Sip",
    24,
    [a.underdark, a.drow, a.evil, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Blindspot Beer",
    26,
    [a.underdark, a.drow, a.evil, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Ambush Ale",
    28,
    [a.underdark, a.drow, a.evil, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Anxa's Silent Brew",
    15,
    [a.underdark, a.drow, a.evil, a.adventurer],
    drink.beer
  ),
  new TavernProduct(
    "Spidermother's Black Ale",
    85,
    [a.underdark, a.drow, a.adventurer, a.rich, a.nobel],
    drink.beer
  ),
];
