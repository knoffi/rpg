import { association } from '../../classes/association';
import { BasePrice, standardBasePrice } from './basePrice';
import { Offer } from './menuEnums';
export const getAdjustedPrice = (
    offer: Offer,
    fits: association[],
    misfits: association[],
    basePrice: BasePrice
) => {
    if (offer.product.isUserMade) {
        return offer.price;
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
    return newPrice;
};
export const getAdjustedPriceString = (
    offer: Offer,
    fits: association[],
    misfits: association[],
    basePrice: BasePrice
) => {
    const calculatedPrice = getAdjustedPrice(offer, fits, misfits, basePrice);
    const economicPrice = calculatedPrice > 0 ? calculatedPrice : 1;
    return economicPrice.toString() + ' ' + basePrice.currency;
};

const getPriceFactorFromBasePrice = (
    basePrice: BasePrice,
    productAssociations: association[]
) => {
    const defaultPriceFactor =
        ((basePrice.modest + basePrice.wealthy) * 1.0) /
        (standardBasePrice.modest + standardBasePrice.wealthy);
    if (productAssociations.some((fit) => fit === association.rich)) {
        return (basePrice.rich * 1.0) / standardBasePrice.rich;
    } else {
        if (productAssociations.some((fit) => fit === association.wealthy)) {
            return (basePrice.wealthy * 1.0) / standardBasePrice.wealthy;
        } else {
            if (productAssociations.some((fit) => fit === association.modest)) {
                return (basePrice.modest * 1.0) / standardBasePrice.modest;
            } else {
                if (
                    productAssociations.some((fit) => fit === association.poor)
                ) {
                    return (basePrice.poor * 1.0) / standardBasePrice.poor;
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
]);
