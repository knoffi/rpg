import { drinkCategory, TavernProduct } from '../../classes/TavernProduct';

export interface Offer {
    product: TavernProduct;
    price: number;
}

export const NothingLeftOffer = {
    product: new TavernProduct('Nothing', 0, [], drinkCategory.spirit),
    price: 0,
};
