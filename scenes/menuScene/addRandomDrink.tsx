import { association } from '../../classes/association';
import { predecideDishes } from '../../classes/mainDishSuperStructures';
import { menuCategory, TavernProduct } from '../../classes/TavernProduct';
import { getFittingRandom } from '../../helpingFunctions/getFittingRandom';
import { drinkExamples } from './drinks/drinks';
import { foodChapters, foodExamples } from './food/food';
import { NothingLeftOffer, Offer } from './menuEnums';

const PREFIX_FILTER_INDEX = 8;
export enum weServe {
    drinks = 'drinks',
    food = 'food',
    service = 'service',
}

const getCloneForRerender = (offer: Offer) => {
    const offerIsVirgin = !offer.product.name.endsWith(' ');
    const newName = offerIsVirgin
        ? offer.product.name + ' '
        : offer.product.name.slice(0, offer.product.name.length - 1);
    return {
        price: offer.price,
        product: new TavernProduct(
            newName,
            offer.product.copperPrice,
            offer.product.associations,
            offer.product.category
        ),
    };
};

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
            const rerolledOffer = getRandomDrinkOffer(
                category,
                fits,
                misfits,
                offeredNames(offers),
                isAbout
            );
            const oldOffer = offer;
            if (rerolledOffer.product.name === NothingLeftOffer.product.name) {
                return getCloneForRerender(oldOffer);
            } else {
                return rerolledOffer;
            }
        }
    });
    return [...newOffers];
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
const isExcludedByPrefix = (dishName: string, excludedDrinkNames: string[]) => {
    return excludedDrinkNames.some((name) => {
        return name.includes(dishName.slice(0, PREFIX_FILTER_INDEX + 1));
    });
};
const filterFoodByPrefix = (
    foodExamples: TavernProduct[],
    excludedDrinkNames: string[]
) => {
    return foodExamples.filter(
        (dish) => !isExcludedByPrefix(dish.name, excludedDrinkNames)
    );
};
const getFilteredTavernProducts = (
    category: menuCategory,
    excludedDrinkNames: string[],
    isAbout: weServe,
    tavernFits: association[]
) => {
    if (isAbout === weServe.drinks) {
        return drinkExamples.find((example) => {
            return example.category === category;
        })!.examples;
    } else {
        const dishIdeaIndex = foodChapters.findIndex(
            (chapter) => chapter.category === category
        );
        if (dishIdeaIndex >= 0) {
            const chosenMainDish = predecideDishes(
                foodChapters[dishIdeaIndex].chapters,
                tavernFits,
                (name: string) => isExcludedByPrefix(name, excludedDrinkNames)
            );
            return [chosenMainDish];
        } else {
            const result = filterFoodByPrefix(
                foodExamples.find((example) => {
                    return example.category === category;
                })!.examples,
                excludedDrinkNames
            );
            return result;
        }
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
        isAbout,
        fits
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
