import { drinkCategory, TavernProduct } from "../classes/TavernProduct";


export const drinkMenuCategories = [
  drinkCategory.lemonade,
  drinkCategory.beer,
  drinkCategory.beer,
  drinkCategory.beer,
  drinkCategory.wine,
  drinkCategory.wine,
  drinkCategory.spirit,
];
//TODO Refactor: Offer is included in TavernProduct, thus Offer is not needed

export interface Offer {
  product: TavernProduct;
  price: number;
}
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
