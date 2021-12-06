import { drinkPrices } from '../../../../scenes/menuScene/priceSetting/drinkPriceSetters';
import { adjustPriceSetter } from '../../../../scenes/menuScene/priceSetting/priceSetters';

export const getBeerPrice = (factor?: number) =>
    adjustPriceSetter(drinkPrices[Drinkable.beer], factor || 1);
