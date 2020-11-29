import { association } from '../../classes/Adjectives';
import { drinkCategory, TavernProduct } from '../../classes/TavernProduct';
import { getFittingRandom } from '../../helpingFunctions/getFittingRandom';
import { BasePrice } from './basePrice';
import { drinkExamples } from './drinks/drinks';
import { foodExamples } from './food/food';
import { NothingLeftOffer, Offer } from './menuEnums';
import { menuCategory } from './menuProduct';

export enum weServe {
    drinks = 'drinks',
    food = 'food',
    service = 'service',
}

const getUsedDrinkCategories = (offers: Offer[]) => {
    let usedDrinkCategories = [] as drinkCategory[];
    offers.forEach((offer) => {
        if (offer.product.isDrink()) {
            usedDrinkCategories.push(offer.product.category as drinkCategory);
        }
    });
    return offers.map((offer) => {
        return offer.product.category;
    });
};

export const offersWithOneReroll = (
    name: string,
    offers: Offer[],
    fits: association[],
    misfits: association[],
    isAbout: weServe,
    basePrice: BasePrice
) => {
    const usedDrinkCategories = getUsedDrinkCategories(offers);
    const category =
        usedDrinkCategories[
            offers.findIndex((offer) => {
                return offer.product.name === name;
            })
        ];
    const newOffers = offers.map((offer) => {
        if (offer.product.name !== name) {
            return offer;
        } else {
            let newOffer = getRandomDrinkOffer(
                category,
                fits,
                misfits,
                offeredNames(offers),
                isAbout
            );
            return newOffer;
        }
    });
    return newOffers;
};

export const getNewRandomDrinkOffer = (
    fits: association[],
    misfits: association[],
    category: menuCategory,
    oldOffers: Offer[],
    isAbout: weServe,
    basePrice?: BasePrice
) => {
    let newRandomOffer = getRandomDrinkOffer(
        category,
        fits,
        misfits,
        offeredNames(oldOffers),
        isAbout
    );
    if (newRandomOffer) {
        if (basePrice) {
        } else {
            newRandomOffer.price = -1;
        }
    }
    return newRandomOffer;
};

export const getDrinkOffers = (
    fits: association[],
    misfits: association[],
    offerCategories: drinkCategory[],
    isAbout: weServe
) => {
    let drinkOffers = [] as Offer[];
    offerCategories.forEach((category) => {
        const newOffer = getRandomDrinkOffer(
            category,
            fits,
            misfits,
            offeredNames(drinkOffers),
            isAbout
        );
        drinkOffers.push(newOffer);
    });
    return drinkOffers;
};

const offeredNames = (offers: Offer[]) => {
    return offers.map((offer) => {
        return offer.product.name;
    });
};
//drinks have a wider range, therefore social misfits are more important than landscape misfits
const getRandomDrinkOffer = (
    category: menuCategory,
    fits: association[],
    misfits: association[],
    excludedDrinkNames: string[],
    isAbout: weServe
): Offer => {
    //here
    let examples: TavernProduct[];
    if (isAbout === weServe.drinks) {
        examples = drinkExamples.find((example) => {
            return example.category === category;
        })!.examples;
    } else {
        examples = foodExamples.find((example) => {
            return example.category === category;
        })!.examples;
    }
    const drink = getFittingRandom(
        examples,
        fits,
        misfits,
        excludedDrinkNames
    ) as TavernProduct;
    //if drink is undefined, then there are no new drinks left
    if (!drink) {
        return NothingLeftOffer;
    }
    const copperPrice = drink.copperPrice;
    drink.resetCategory(category);
    return { product: drink, price: copperPrice };
};
