import { association } from '../../../classes/association';
import { PriceSetter } from '../../../classes/PriceSetter';
import { standardBasePrice } from '../basePrice';

const MAIN_DISH_FACTOR = 2.5;

export const adjustPrice = (price: number, factor: number) => {
    const adjustedPrice = Math.floor(price * factor);
    return adjustedPrice > 0 ? adjustedPrice : 1;
};
export const adjustPriceSetter = (priceSetter: PriceSetter, factor: number) => {
    const adjustedPriceSetter = {
        [association.poor]: adjustPrice(priceSetter[association.poor], factor),
        [association.worker]: adjustPrice(
            priceSetter[association.worker],
            factor
        ),
        [association.sophisticated]: adjustPrice(
            priceSetter[association.sophisticated],
            factor
        ),
        [association.rich]: adjustPrice(priceSetter[association.rich], factor),
    };
    return adjustedPriceSetter;
};

export const getPriceByFactorFromBasePrice = (foodToDrinkFactor: number) => {
    return {
        [association.poor]: adjustPrice(
            standardBasePrice.poor,
            foodToDrinkFactor
        ),
        [association.worker]: adjustPrice(
            standardBasePrice.modest,
            foodToDrinkFactor
        ),
        [association.sophisticated]: adjustPrice(
            standardBasePrice.wealthy,
            foodToDrinkFactor
        ),
        [association.rich]: adjustPrice(
            standardBasePrice.rich,
            foodToDrinkFactor
        ),
    };
};
export const foodPrices = {
    mainDish: getPriceByFactorFromBasePrice(MAIN_DISH_FACTOR),
};
