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

export const adjustOfferPrice = (
    offer: Offer,
    fits: association[],
    misfits: association[],
    basePrice: BasePrice
) => {
    let basePriceFactor: number;
    let tavernPriceCount = 0;
    let passedIncomeFit = false;
    fits.forEach((fit) => {
        if (offer.product.associations.includes(fit)) {
            tavernPriceCount--;
        }
        if (!passedIncomeFit) {
            if (fit === association.rich) {
                tavernPriceCount += 2;
                passedIncomeFit = true;
            } else {
                if (fit === association.sophisticated) {
                    tavernPriceCount += 1;
                    passedIncomeFit = true;
                } else {
                    if (fit === association.worker) {
                        tavernPriceCount -= 1;
                        passedIncomeFit = true;
                    } else {
                        if (fit === association.poor) {
                            tavernPriceCount -= 2;
                            passedIncomeFit = true;
                        }
                    }
                }
            }
        }
    });
    misfits.forEach((fit) => {
        if (offer.product.associations.includes(fit)) {
            tavernPriceCount++;
        }
    });
    passedIncomeFit = false;
    offer.product.associations.forEach((productFit) => {
        if (!passedIncomeFit) {
            if (productFit === association.rich) {
                basePriceFactor =
                    (basePrice.rich * 1.0) / standardBasePrice.rich;
                passedIncomeFit = true;
            } else {
                if (productFit === association.sophisticated) {
                    basePriceFactor =
                        (basePrice.wealthy * 1.0) / standardBasePrice.wealthy;
                    passedIncomeFit = true;
                } else {
                    if (productFit === association.worker) {
                        basePriceFactor =
                            (basePrice.modest * 1.0) / standardBasePrice.modest;
                        passedIncomeFit = true;
                    } else {
                        if (productFit === association.poor) {
                            basePriceFactor =
                                (basePrice.poor * 1.0) / standardBasePrice.poor;
                            passedIncomeFit = true;
                        }
                    }
                }
            }
        }
    });

    if (!passedIncomeFit) {
        basePriceFactor =
            ((basePrice.modest + basePrice.wealthy) * 1.0) /
            (standardBasePrice.modest + standardBasePrice.wealthy);
    }
    const newPrice = Math.floor(
        offer.product.copperPrice *
            basePriceFactor! *
            (1.0 + tavernPriceCount / 20.0)
    );
    offer.price = newPrice > 0 ? newPrice : 1;
};
