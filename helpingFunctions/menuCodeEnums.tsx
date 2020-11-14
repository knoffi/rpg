import { drinkCategory, TavernProduct } from "../classes/TavernProduct";

export interface Offer {
  product: TavernProduct;
  price: number;
}

export const NothingLeftOffer={product: new TavernProduct("Nothing",0,[],drinkCategory.spirit), price:0}

export enum tavernScalePrice {
  cheapEasy = -4,
  cheapNormal = -3,
  cheapHard = -2,
  normalEasy = -1,
  normalNormal = 0,
  normalHard = 1,
  expensiveEasy = 2,
  expensiveNormal = 3,
  expensiveHard = 4
}
