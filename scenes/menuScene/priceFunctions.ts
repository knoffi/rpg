import { association } from '../../classes/association';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { BasePrice, standardBasePrice } from './basePrice';
import { Offer } from './Offer';
export const getAdjustedPrice = (
    offer: Offer,
    fitting: StructuredTavernFits,
    basePrice: BasePrice
) => {
    if (offer.isUserMade) {
        return offer.price;
    }
    const tavernIncome = fitting.income || association.empty;
    const basePriceFactor = getPriceFactorFromBasePrice(
        basePrice,
        tavernIncome
    );
    const incomeLevel = incomePriceLevelMap.get(tavernIncome) || 0;
    const newPrice = Math.floor(
        (offer.price * basePriceFactor * (100 + incomeLevel)) / 100.0
    );
    return newPrice;
};
export const getAdjustedPriceString = (
    offer: Offer,
    fitting: StructuredTavernFits,
    basePrice: BasePrice
) => {
    const calculatedPrice = getAdjustedPrice(offer, fitting, basePrice);
    const economicPrice = calculatedPrice > 0 ? calculatedPrice : 1;
    return economicPrice.toString() + ' ' + basePrice.currency;
};

const getPriceFactorFromBasePrice = (
    basePrice: BasePrice,
    tavernIncome: association
) => {
    const defaultPriceFactor =
        ((basePrice[association.modest] + basePrice[association.wealthy]) *
            1.0) /
        (standardBasePrice[association.modest] +
            standardBasePrice[association.wealthy]);
    if (tavernIncome === association.rich) {
        return (
            (basePrice[association.rich] * 1.0) /
            standardBasePrice[association.rich]
        );
    } else {
        if (tavernIncome === association.wealthy) {
            return (
                (basePrice[association.wealthy] * 1.0) /
                standardBasePrice[association.wealthy]
            );
        } else {
            if (tavernIncome === association.modest) {
                return (
                    (basePrice[association.modest] * 1.0) /
                    standardBasePrice[association.modest]
                );
            } else {
                if (tavernIncome === association.poor) {
                    return (
                        (basePrice[association.poor] * 1.0) /
                        standardBasePrice[association.poor]
                    );
                }
            }
        }
    }
    return defaultPriceFactor;
};

const incomePriceLevelMap = new Map([
    [association.poor, -2],
    [association.modest, -1],
    [association.wealthy, 1],
    [association.rich, 2],
    [association.empty, 0],
]);
