import { association } from '../../classes/Adjectives';
import { BasePrice, standardBasePrice } from './basePrice';
import { Offer } from './menuEnums';

export enum tavernScalePrice {
    cheapEasy = -4,
    cheapNormal = -3,
    cheapHard = -2,
    normalEasy = -1,
    normalNormal = 0,
    normalHard = 1,
    expensiveEasy = 2,
    expensiveNormal = 3,
    expensiveHard = 4,
}

export const getAdjustedPriceString = (
    offer: Offer,
    fits: association[],
    misfits: association[],
    basePrice: BasePrice
) => {
    if (offer.product.isUserMade) {
        return offer.price.toString() + ' ' + basePrice.currency;
    }
    const basePriceFactor = getPriceFactorFromBasePrice(
        basePrice,
        offer.product.associations
    );
    const fitLevel = offer.product.associations.filter((association) =>
        fits.includes(association)
    ).length;
    const misfitLevel = offer.product.associations.filter((association) =>
        misfits.includes(association)
    ).length;
    const tavernIncome = fits.reduce(
        (income, association) =>
            incomePriceLevelMap.get(association) ? association : income,
        association.empty
    );
    const incomeLevel = incomePriceLevelMap.get(tavernIncome)
        ? incomePriceLevelMap.get(tavernIncome)
        : 0;
    const newPrice = Math.floor(
        (offer.product.copperPrice *
            basePriceFactor *
            (100 - fitLevel + misfitLevel + incomeLevel!)) /
            100.0
    );
    const priceNumberString = newPrice > 0 ? newPrice.toString() : '1';
    return priceNumberString + ' ' + basePrice.currency;
};

const getPriceFactorFromBasePrice = (
    basePrice: BasePrice,
    productAssociations: association[]
) => {
    const defaultPriceFactor =
        ((basePrice.modest + basePrice.wealthy) * 1.0) /
        (standardBasePrice.modest + standardBasePrice.wealthy);
    productAssociations.forEach((fit) => {
        if (fit === association.rich) {
            return (basePrice.rich * 1.0) / standardBasePrice.rich;
        } else {
            if (fit === association.sophisticated) {
                return (basePrice.wealthy * 1.0) / standardBasePrice.wealthy;
            } else {
                if (fit === association.worker) {
                    return (basePrice.modest * 1.0) / standardBasePrice.modest;
                } else {
                    if (fit === association.poor) {
                        return (basePrice.poor * 1.0) / standardBasePrice.poor;
                    }
                }
            }
        }
    });
    return defaultPriceFactor;
};

const incomePriceLevelMap = new Map([
    [association.poor, -2],
    [association.worker, -1],
    [association.sophisticated, 1],
    [association.rich, 2],
]);
