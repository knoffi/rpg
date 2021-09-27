import { MenuCategory } from '../../../classes/TavernProduct';
import { MinimalOfferData } from '../MinimalOfferData';

export interface IProductActions {
    onDelete: () => void;
    onReroll: () => void;
    onShop: () => void;
    onEdit: () => void;
    onInfo: () => void;
}
export interface IAddingActions {
    randomAdd: (category: MenuCategory) => void;
    import: (category: MenuCategory) => void;
    edit: (category: MenuCategory) => void;
}
export interface IOfferActions {
    deleteOffer: (name: string) => void;
    rerollOffer: (name: string) => void;
    shopOffer: (name: string) => void;
    editUserOffer: (startData: MinimalOfferData) => void;
}
