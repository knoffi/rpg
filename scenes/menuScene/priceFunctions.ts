import { association } from '../../classes/association';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { BasePrice, standardBasePrice } from './basePrice';
import { Offer } from './Offer';
export const getAdjustedPrice = (
    offer: Offer,
    fitting: StructuredTavernFits,
    basePrice: BasePrice
) => {
    //TODO: Adjust this to Dish Ideas. Maybe even get rid of Offer class
    if (offer.product.isUserMade) {
        return offer.price;
    }
    const basePriceFactor = getPriceFactorFromBasePrice(
        basePrice,
        offer.product.associations
    );
    const marketFits = [fitting.class, fitting.race, fitting.land].filter(
        (fit) => fit
    ) as association[];
    const includedMarketFits = marketFits.filter((fit) =>
        offer.product.associations.includes(fit)
    );
    const priceLevel = 2 * includedMarketFits.length - marketFits.length;
    const tavernIncome = fitting.income || association.empty;
    const incomeLevel = incomePriceLevelMap.get(tavernIncome) || 0;
    const newPrice = Math.floor(
        (offer.product.copperPrice *
            basePriceFactor *
            (100 + priceLevel + incomeLevel)) /
            100.0
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
    productAssociations: association[]
) => {
    const defaultPriceFactor =
        ((basePrice[association.modest] + basePrice[association.wealthy]) *
            1.0) /
        (standardBasePrice[association.modest] +
            standardBasePrice[association.wealthy]);
    if (productAssociations.some((fit) => fit === association.rich)) {
        return (
            (basePrice[association.rich] * 1.0) /
            standardBasePrice[association.rich]
        );
    } else {
        if (productAssociations.some((fit) => fit === association.wealthy)) {
            return (
                (basePrice[association.wealthy] * 1.0) /
                standardBasePrice[association.wealthy]
            );
        } else {
            if (productAssociations.some((fit) => fit === association.modest)) {
                return (
                    (basePrice[association.modest] * 1.0) /
                    standardBasePrice[association.modest]
                );
            } else {
                if (
                    productAssociations.some((fit) => fit === association.poor)
                ) {
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
