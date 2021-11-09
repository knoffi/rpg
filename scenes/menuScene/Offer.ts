import { association } from '../../classes/association';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import { Drinkable, Eatable } from '../../classes/TavernProduct';
import { WeServe } from '../../editNavigator/WeServe';

export type Offer = {
    name: string;
    isUserMade: boolean;
    description?: string;
    price: number;
    universe: FantasyKeys | 'isUserMade';
    income:
        | association.rich
        | association.poor
        | association.wealthy
        | association.modest
        | association.empty;
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
