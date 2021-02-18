import { association } from '../../classes/Adjectives';
import { menuCategory, TavernProduct } from '../../classes/TavernProduct';
import { getFittingRandom } from '../../helpingFunctions/getFittingRandom';
import { drinkExamples } from './drinks/drinks';
import { foodExamples } from './food/food';
import { NothingLeftOffer, Offer } from './menuEnums';

const PREFIX_FILTER_INDEX = 8;
export enum weServe {
    drinks = 'drinks',
    food = 'food',
    service = 'service',
}

export const offersWithOneReroll = (
    name: string,
    offers: Offer[],
    fits: association[],
    misfits: association[],
    isAbout: weServe
) => {
    const category = offers.find((offer) => offer.product.name === name)!
        .product.category;
    const newOffers = offers.map((offer) => {
        if (offer.product.name !== name) {
            return offer;
        } else {
            return getRandomDrinkOffer(
                category,
                fits,
                misfits,
                offeredNames(offers),
                isAbout
            );
        }
    });
    return newOffers;
};

export const getNewRandomDrinkOffer = (
    fits: association[],
    misfits: association[],
    category: menuCategory,
    oldOffers: Offer[],
    isAbout: weServe
) => {
    const newRandomOffer = getRandomDrinkOffer(
        category,
        fits,
        misfits,
        offeredNames(oldOffers),
        isAbout
    );
    return newRandomOffer;
};

const offeredNames = (offers: Offer[]) => {
    return offers.map((offer) => {
        return offer.product.name;
    });
};
const filterFoodByPrefix = (
    foodExamples: TavernProduct[],
    excludedDrinkNames: string[]
) => {
    return foodExamples.filter((dish) => {
        const dishPrefixIsForbidden = excludedDrinkNames.some((name) => {
            return name.includes(dish.name.slice(0, PREFIX_FILTER_INDEX + 1))
                ? true
                : false;
        });
        return !dishPrefixIsForbidden;
    });
};
const getFilteredTavernProducts = (
    category: menuCategory,
    excludedDrinkNames: string[],
    isAbout: weServe
) => {
    if (isAbout === weServe.drinks) {
        return drinkExamples.find((example) => {
            return example.category === category;
        })!.examples;
    } else {
        const result = filterFoodByPrefix(
            foodExamples.find((example) => {
                return example.category === category;
            })!.examples,
            excludedDrinkNames
        );
        return result;
    }
};
//drinks have a wider range, therefore social misfits are more important than landscape misfits
const getRandomDrinkOffer = (
    category: menuCategory,
    fits: association[],
    misfits: association[],
    excludedDrinkNames: string[],
    isAbout: weServe
): Offer => {
    const examples = getFilteredTavernProducts(
        category,
        excludedDrinkNames,
        isAbout
    );
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
