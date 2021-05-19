import { MenuCategory } from '../../../classes/TavernProduct';
import { MinimalOfferData } from '../userOffer';

export interface productActions {
    onDelete: () => void;
    onReroll: () => void;
    onShop: () => void;
    onEdit: () => void;
    onInfo: () => void;
}
export interface addingActions {
    randomAdd: (category: MenuCategory) => void;
    import: (category: MenuCategory) => void;
    edit: (category: MenuCategory) => void;
}
export interface offerActions {
    deleteOffer: (name: string) => void;
    rerollOffer: (name: string) => void;
    shopOffer: (name: string) => void;
    editUserOffer: (startData: MinimalOfferData) => void;
}
