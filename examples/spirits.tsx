import { association } from "../classes/Adjectives";
import { drinkCategory, TavernProduct } from "../classes/TavernProduct";
const a = association;
const spiritEnum = drinkCategory.spirit;

//TODO is the reduction of price justified? For example: Are Single Grains always more expensive than Blended Malt?
const reducedPrice = (bestProductPrice: number, lowerOption: number) => {
  return Math.floor(bestProductPrice * (1 - lowerOption * 0.05));
};
const scotchTemplate = (
  producerName: string,
  singleMaltPrice: number,
  fits: association[]
) => {
  return [
    new TavernProduct(
      producerName + "'s Single Malt Scotch Whiskey",
      singleMaltPrice,
      fits,
      spiritEnum
    ),
    new TavernProduct(
      producerName + "'s Single Grain Scotch Whiskey",
      reducedPrice(singleMaltPrice, 1),
      fits,
      spiritEnum
    ),
    new TavernProduct(
      producerName + "'s Blended Malt Scotch Whiskey",
      reducedPrice(singleMaltPrice, 2),
      fits,
      spiritEnum
    ),
    new TavernProduct(
      producerName + "'s Blended Grain Scotch Whiskey",
      reducedPrice(singleMaltPrice, 3),
      fits,
      spiritEnum
    ),
    new TavernProduct(
      producerName + "'s Blended Scotch Whiskey",
      reducedPrice(singleMaltPrice, 4),
      fits,
      spiritEnum
    ),
  ];
};
const bourbonTemplate = (
  producerName: string,
  singleMaltPrice: number,
  fits: association[]
) => {
  return [
    new TavernProduct(
      producerName + "'s Bonded Bourbon Whiskey",
      singleMaltPrice,
      fits,
      spiritEnum
    ),
    new TavernProduct(
      producerName + "'s Straight Bourbon Whiskey",
      reducedPrice(singleMaltPrice, 1),
      fits,
      spiritEnum
    ),
    new TavernProduct(
      producerName + "'s Bourbon Whiskey",
      reducedPrice(singleMaltPrice, 2),
      fits,
      spiritEnum
    ),
    new TavernProduct(
      producerName + "'s White Whiskey",
      reducedPrice(singleMaltPrice, 6),
      fits,
      spiritEnum
    ),
  ];
};

export const spirits = [
  new TavernProduct(
    "Kane's Gin Of Fury",
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
    [a.haven, a.tropical, a.city, a.criminal, a.cleric, a.human],
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
  new TavernProduct(
    "Barclay's Single Malt Scotch Whiskey",
    30,
    [a.halfling, a.sophisticated, a.city, a.mountain, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "Barclay's Single Grain Scotch Whiskey",
    25,
    [a.halfling, a.sophisticated, a.city, a.mountain, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "Barclay's Blended Malt Scotch Whiskey",
    20,
    [a.halfling, a.sophisticated, a.city, a.mountain, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "Barclay's Blended Grain Scotch Whiskey",
    19,
    [a.halfling, a.sophisticated, a.city, a.mountain, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "Barclay's Blended Scotch Whiskey",
    17,
    [a.halfling, a.sophisticated, a.city, a.mountain, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "MacMaster's Single Malt Scotch Whiskey",
    105,
    [a.nobel, a.rich, a.city, a.mountain, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "MacMaster's Single Grain Scotch Whiskey",
    100,
    [a.nobel, a.rich, a.city, a.mountain, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "MacMaster's Blended Malt Scotch Whiskey",
    90,
    [a.nobel, a.rich, a.city, a.mountain, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "MacMaster's Blended Grain Scotch Whiskey",
    85,
    [a.nobel, a.rich, a.city, a.mountain, a.human],
    spiritEnum
  ),
  new TavernProduct(
    "MacMaster's Blended Scotch Whiskey",
    75,
    [a.nobel, a.rich, a.city, a.mountain, a.human],
    spiritEnum
  ),
].concat(
  scotchTemplate("Barclay", 30, [
    a.halfling,
    a.sophisticated,
    a.village,
    a.mountain,
  ]),
  scotchTemplate("MacMaster", 105, [
    a.nobel,
    a.rich,
    a.city,
    a.haven,
    a.dwarf,
    a.gnome,
  ]),
  scotchTemplate("MacMulligan", 15, [
    a.village,
    a.city,
    a.poor,
    a.prostitute,
    a.criminal,
    a.barbarian,
  ]),
  bourbonTemplate("Gregory", 16, [
    a.village,
    a.city,
    a.poor,
    a.prostitute,
    a.criminal,
    a.barbarian,
  ]),
  bourbonTemplate("Old Kennedy", 29, [
    a.halfling,
    a.sophisticated,
    a.village,
    a.mountain,
  ]),
  bourbonTemplate("Mild Miller", 108, [
    a.nobel,
    a.rich,
    a.city,
    a.haven,
    a.dwarf,
    a.gnome,
  ])
);
