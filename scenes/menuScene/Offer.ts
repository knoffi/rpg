import { Drinkable, Eatable, TavernProduct } from '../../classes/TavernProduct';
import { WeServe } from '../../editNavigator/WeServe';

export type Offer = {
    name: string;
    isUserMade: boolean;
    description?: string;
    price: number;
} & (
    | {
          isAbout: WeServe.food;

          category: Eatable;
      }
    | {
          isAbout: WeServe.drinks;

          category: Drinkable;
      }
);

export const NothingLeftOffer:Offer = {
    name:'NothingABCDEFGWinnie_The_PuH_SUcKs',
    category:Drinkable.spirit
    product: new TavernProduct(
        'NothingABCDEFGWinnie_The_PuH_SUcKs',
        0,
        [],
        Drinkable.spirit
    ),
    price: 0,
};
