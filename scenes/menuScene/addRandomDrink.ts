import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { MenuCategory, TavernProduct } from '../../classes/TavernProduct';
import { WeServe } from '../../editNavigator/WeServe';
import { getFittingRandom } from '../../helpingFunctions/getFittingRandom';
import { getPrefixExcluder } from '../questScene/impressions/getPrefixExcluder';
import { drinkChapters } from './drinks/drink';
import { drinkExamples } from './drinks/drinks';
import { foodChapters, foodExamples } from './food/food';
import { predecideDishes } from './menuChapters/getDrinksAndFood';
import { NothingLeftOffer, Offer } from './menuEnums';

export const offersWithOneReroll = (
    name: string,
    offers: Offer[],
    fits: StructuredTavernFits,
    isAbout: WeServe
) => {
    const category = offers.find((offer) => offer.product.name === name)!
        .product.category;
    const newOffer = getRandomDrinkOffer(
        category,
        fits,
        offeredNames(offers),
        isAbout
    );
    if (newOffer.product.name === NothingLeftOffer.product.name || !newOffer) {
        return undefined;
    } else {
        return offers.map((offer) =>
            offer.product.name === name ? newOffer : offer
        );
    }
};

export const getNewRandomDrinkOffer = (
    fits: StructuredTavernFits,
    category: MenuCategory,
    oldOffers: Offer[],
    isAbout: WeServe
) => {
    const newRandomOffer = getRandomDrinkOffer(
        category,
        fits,
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
    isExcludedByPrefix: (name: string) => boolean
) => {
    return foodExamples.filter((dish) => !isExcludedByPrefix(dish.name));
};
const getFilteredTavernProducts = (
    category: MenuCategory,
    excludedDrinkNames: string[],
    isAbout: WeServe,
    fitting: StructuredTavernFits
) => {
    const isExcludedByPrefix = getPrefixExcluder(excludedDrinkNames, isAbout);
    if (isAbout === WeServe.drinks) {
        const drinkIdeaIndex = drinkChapters.findIndex(
            (chapter) => chapter.category === category
        );
        if (drinkIdeaIndex >= 0) {
            const chosenDrink = predecideDishes(
                drinkChapters[drinkIdeaIndex].chapters,
                fitting,
                isExcludedByPrefix
            );
            return [chosenDrink];
        }
        return drinkExamples.find((example) => {
            return example.category === category;
        })!.examples;
    } else {
        const dishIdeaIndex = foodChapters.findIndex(
            (chapter) => chapter.category === category
        );
        if (dishIdeaIndex >= 0) {
            const chosenDish = predecideDishes(
                foodChapters[dishIdeaIndex].chapters,
                fitting,
                isExcludedByPrefix
            );
            return [chosenDish];
        } else {
            const result = filterFoodByPrefix(
                foodExamples.find((example) => {
                    return example.category === category;
                })!.examples,
                isExcludedByPrefix
            );
            return result;
        }
    }
};
//drinks have a wider range, therefore social misfits are more important than landscape misfits
const getRandomDrinkOffer = (
    category: MenuCategory,
    fits: StructuredTavernFits,
    excludedDrinkNames: string[],
    isAbout: WeServe
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
