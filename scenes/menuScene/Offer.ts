import { Drinkable, Eatable } from '../../classes/TavernProduct';
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
