import {
    UserMadeDrink,
    UserMadeFood,
} from '../../../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../../../classes/contentCreator/FantasKeys';
import { Noticable } from '../../../classes/idea/Noticable';
import { Drinkable, Eatable } from '../../../classes/TavernProduct';
import { WeServe } from '../../../editNavigator/WeServe';

export interface IProductActions {
    onDelete: () => void;
    onReroll: () => void;
    onShop: () => void;
    onEdit: () => void;
    onInfo: () => void;
}

export type Demand =
    | { isAbout: WeServe.food; category: Eatable }
    | { isAbout: WeServe.drinks; category: Drinkable }
    | { isAbout: WeServe.impressions; category: Noticable };
//TODO: change to IListActions, IAccordeonActions, IItemActions ... adjust demand encapsulation of accordion list for offers ( and maybe also impressions? )
export interface IAddingActions {
    randomAdd: (demand: Demand) => void;
    import: (demand: Demand) => void;
    edit: (edit: Demand) => void;
}
export interface IOfferActions {
    deleteOffer: (
        name: string,
        deleted: Demand,
        key: FantasyKeys | 'isUserMade'
    ) => void;
    rerollOffer: (name: string, reroll: Demand) => void;
    shopOffer: (name: string) => void;
    editUserOffer: (startData: UserMadeDrink | UserMadeFood) => void;
}
