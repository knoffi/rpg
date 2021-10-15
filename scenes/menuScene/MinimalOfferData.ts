import { association } from '../../classes/association';
import { MenuCategory, TavernProduct } from '../../classes/TavernProduct';

export interface MinimalOfferData {
    name: string;
    priceText: string;
    description: string;
    category: MenuCategory;
    isUserMade: boolean;
}

export const getOfferFromMinimalData = (data: MinimalOfferData) => {
    return {
        product: new TavernProduct(
            data.name,
            parseInt(data.priceText),
            [] as association[],
            data.category,
            data.description,
            data.isUserMade
        ),
        price: parseInt(data.priceText),
    };
};
