import { Drinkable, TavernProduct } from '../../classes/TavernProduct';

export interface Offer {
    product: TavernProduct;
    price: number;
}

export const NothingLeftOffer = {
    product: new TavernProduct(
        'NothingABCDEFGWinnie_The_PuH_SUcKs',
        0,
        [],
        Drinkable.spirit
    ),
    price: 0,
};