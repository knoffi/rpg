import { association } from '../../../classes/association';
import { PriceSetter } from '../../../classes/idea/PriceSetter';
import { standardBasePrice } from '../basePrice';

const a = association;
const incomeRange = [a.poor, a.modest, a.wealthy, a.rich] as const;
type Income =
    | association.poor
    | association.modest
    | association.wealthy
    | association.rich;
export const adjustPrice = (price: number, factor = 1) => {
    const adjustedPrice = Math.floor(price * factor);
    return adjustedPrice > 0 ? adjustedPrice : 1;
};
export const adjustPriceSetter = (
    priceSetter: Readonly<PriceSetter>,
    factors?: number | Partial<PriceSetter>
): PriceSetter => {
    const newPrices = { ...priceSetter };
    incomeRange.forEach((income) => {
        const factor = extractFactor(income, factors);
        newPrices[income] = adjustPrice(priceSetter[income], factor);
    });
    return newPrices;
};

const extractFactor = (
    income: Income,
    factors?: number | Partial<PriceSetter>
): number | undefined => {
    return !factors || typeof factors === 'number' ? factors : factors[income];
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
