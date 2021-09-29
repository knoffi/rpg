import {
    Drinkable,
    Eatable,
    MenuCategory,
} from '../../../classes/TavernProduct';
import { MinimalOfferData } from '../MinimalOfferData';

export interface IProductActions {
    onDelete: () => void;
    onReroll: () => void;
    onShop: () => void;
    onEdit: () => void;
    onInfo: () => void;
}

export type Demand =
    | { isAboutFood: true; category: Eatable }
    | { isAboutFood: false; category: Drinkable };
export interface IAddingActions {
    randomAdd: (demand: Demand) => void;
    import: (category: MenuCategory) => void;
    edit: (category: MenuCategory) => void;
}
export interface IOfferActions {
    deleteOffer: (name: string) => void;
    rerollOffer: (name: string) => void;
    shopOffer: (name: string) => void;
    editUserOffer: (startData: MinimalOfferData) => void;
}
