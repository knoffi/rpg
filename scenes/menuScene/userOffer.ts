import { association } from '../../classes/Adjectives';
import { menuCategory, TavernProduct } from '../../classes/TavernProduct';

export interface MinimalOfferData {
    name: string;
    priceText: string;
    description: string;
    category: menuCategory;
}

export const createMinimalOffer = (data: MinimalOfferData) => {
    return {
        product: new TavernProduct(
            data.name,
            parseInt(data.priceText),
            [] as association[],
            data.category,
            data.description,
            true
        ),
        price: parseInt(data.priceText),
    };
};
