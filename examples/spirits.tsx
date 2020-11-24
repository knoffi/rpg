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
const brandyTemplate = (
  producerName: string,
  singleMaltPrice: number,
  fits: association[],
  ingredient: string
) => {
  return [
    new TavernProduct(
      producerName + "'s " + ingredient+ " XO ",
      singleMaltPrice,
      fits,
      spiritEnum
    ),
    new TavernProduct(
      producerName + "'s " + ingredient+ " V.S.O.P. ",
      reducedPrice(singleMaltPrice, 1),
      fits,
      spiritEnum
    ),
    new TavernProduct(
      producerName + "'s " + ingredient+ " V.S. ",
      reducedPrice(singleMaltPrice, 2),
      fits,
      spiritEnum
    ),
  ];
};

export const spirits = [
  new TavernProduct(
    "Kane's Gin Of Fury",
    25,
    [a.mountain, a.haven, a.barbarian,a.worker],
    spiritEnum
  ),
  new TavernProduct(
    "Ar'kenji's Shoshu of Wisdom",
    35,
    [a.desert, a.elf,a.cleric,a.sophisticated],
    spiritEnum
  ),
  new TavernProduct(
    "Salvatoria's Rum of Adventure",
    10,
    [a.haven, a.tropical, a.poor],
    spiritEnum
  ),
  new TavernProduct(
    "Dura Ex's Tequila of Charm",
    20,
    [a.underdark, a.prostitute, a.worker],
    spiritEnum
  ),
  new TavernProduct(
    "Lichtenfels's Vodka of Conspiracy",
    32,
    [a.village, a.mountain, a.sophisticated],
    spiritEnum
  ),
  new TavernProduct(
    "Numentor's Cachaca of Dancing",
    34,
    [a.tropical, a.wizard,a.sophisticated],
    spiritEnum
  )
].concat(
  scotchTemplate("Barclay", 22, [
    a.worker,
    a.city,
    a.dragonborn
  ]),
  scotchTemplate("MacMaster", 105, [
    a.rich,
    a.dwarf,
    a.gnome,
  ]),
  scotchTemplate("MacMulligan", 10, [
    a.poor,
    a.criminal,
    a.dragonborn
  ]),
  scotchTemplate("Rosetto", 29, [
    a.prostitute,
  ]),
  scotchTemplate("Belezebu", 29, [
    a.tiefling,
  ]),
  bourbonTemplate("Gregory", 11, [
    a.village,
    a.poor,
    a.barbarian,
  ]),
  bourbonTemplate("Old Kennedy", 29, [
    a.halfling,
    a.sophisticated,
    a.village,
  ]),
  bourbonTemplate("Mild Miller", 108, [
    a.nobel,
    a.rich,
    a.elf,
    a.human
  ]),
  bourbonTemplate("Zesstra", 30, [
    a.drow,
    a.underdark,
    a.sophisticated
  ]),
  brandyTemplate("Ezezel", 23, [a.tiefling,a.worker],"Fire Apple"),
  brandyTemplate("Azzeril", 7, [a.tiefling,a.poor],"Ash Plum"),
  brandyTemplate("Melzara", 40, [a.tiefling,a.sophisticated],"Hell Berry"),
  brandyTemplate("Abaddon", 90, [a.tiefling,a.rich],"Infernal Grape"),
);
