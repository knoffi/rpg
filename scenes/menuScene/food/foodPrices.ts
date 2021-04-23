import { association } from '../../../classes/association';
import { PriceSetter } from '../../../classes/PriceSetter';
import { standardBasePrice } from '../basePrice';

const MAIN_DISH_FACTOR = 2.5;
const BREAKFAST_FACTOR = 1.5;

export const adjustPrice = (price: number, factor: number) => {
    const adjustedPrice = Math.floor(price * factor);
    return adjustedPrice > 0 ? adjustedPrice : 1;
};
export const adjustPriceSetter = (priceSetter: PriceSetter, factor: number) => {
    const adjustedPriceSetter = {
        [association.poor]: adjustPrice(priceSetter[association.poor], factor),
        [association.modest]: adjustPrice(
            priceSetter[association.modest],
            factor
        ),
        [association.wealthy]: adjustPrice(
            priceSetter[association.wealthy],
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
        [association.modest]: adjustPrice(
            standardBasePrice.modest,
            foodToDrinkFactor
        ),
        [association.wealthy]: adjustPrice(
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
    breakfast: getPriceByFactorFromBasePrice(BREAKFAST_FACTOR),
};
