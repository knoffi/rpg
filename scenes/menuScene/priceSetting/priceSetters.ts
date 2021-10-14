import { association } from '../../../classes/association';
import { PriceSetter } from '../../../classes/idea/PriceSetter';
import { standardBasePrice } from '../basePrice';

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
            standardBasePrice[association.poor],
            foodToDrinkFactor
        ),
        [association.modest]: adjustPrice(
            standardBasePrice[association.modest],
            foodToDrinkFactor
        ),
        [association.wealthy]: adjustPrice(
            standardBasePrice[association.wealthy],
            foodToDrinkFactor
        ),
        [association.rich]: adjustPrice(
            standardBasePrice[association.rich],
            foodToDrinkFactor
        ),
    };
};
