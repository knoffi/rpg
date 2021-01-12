import { Adjective, association } from '../classes/Adjectives';
import { getProductsLeftAndBannerData } from '../editNavigator/editNavigatorFunctions';
import {
    getFittingRandom,
    getRandomArrayEntry,
} from '../helpingFunctions/getFittingRandom';
import {
    misfitMode,
    stricterMisfitMode,
} from '../helpingFunctions/misfitModes';
import { getMisfits } from '../helpingFunctions/misFitsHandlers';
import { BasePrice, standardBasePrice } from '../scenes/menuScene/basePrice';
import { drinkExamples } from '../scenes/menuScene/drinks/drinks';
import { foodExamples } from '../scenes/menuScene/food/food';
import { NothingLeftOffer, Offer } from '../scenes/menuScene/menuEnums';
import {
    getNewRandomDrinkOffer,
    weServe,
} from '../scenes/menuScene/menuFunctions';
import { adjectives, substantives } from '../scenes/nameScene/names/nouns';
import { getTavernHistoryInitializer } from './mainNavigatorFunctions';

const CHANCE_FOR_SPECIAL_FIT = 0.2;
const CHANCE_FOR_ORDINARY_FIT = 0.625;
const NO_OFFER_PROBABILITY = 0.1;
const MAX_OFFER = 4;
const MAX_PRICE_DERIVATION = 0.3;
export const getRandomStartTavern = () => {
    const tavernData = getTavernHistoryInitializer();

    const fits = getRandomFits();
    const misfits = getMisfits(fits, misfitMode.stricter);
    const basePrice = getRandomBasePrice();
    const drinks = getRandomOffers(fits, misfits, weServe.drinks);
    const dishes = getRandomOffers(fits, misfits, weServe.food);
    tavernData.name = getRandomName(fits, misfits);
    tavernData.fitting = {
        fits: fits,
        misfits: misfits,
    };
    tavernData.drinks = drinks;
    tavernData.dishes = dishes;
    const bannerData = getProductsLeftAndBannerData(
        {
            fits: fits,
            misfits: misfits,
        },
        drinks,
        dishes
    );
    tavernData.drinksLeft = bannerData.drinksLeft!;
    tavernData.dishesLeft = bannerData.dishesLeft!;
    tavernData.drinkBannerData = bannerData.drinkBannerData!;
    tavernData.foodBannerData = bannerData.foodBannerData!;
    tavernData.prices = basePrice;
    return tavernData;
};

const getRandomFits = () => {
    const associationGroups = stricterMisfitMode.associationGroups;
    const fitsWithEmptyFits = Object.values(associationGroups).map((group) => {
        const chanceToAddFit =
            group === stricterMisfitMode.associationGroups.special
                ? CHANCE_FOR_SPECIAL_FIT
                : CHANCE_FOR_ORDINARY_FIT;
        return Math.random() < chanceToAddFit
            ? getRandomArrayEntry(group)
            : association.empty;
    });
    return fitsWithEmptyFits.filter((fit) => fit !== association.empty);
};
const getRandomBasePrice = () => {
    const randomFactor = 1 + (2 * Math.random() - 1) * MAX_PRICE_DERIVATION;
    return {
        wealthy: Math.floor(randomFactor * standardBasePrice.wealthy),
        rich: Math.floor(randomFactor * standardBasePrice.rich),
        modest: Math.floor(randomFactor * standardBasePrice.modest),
        poor: Math.floor(randomFactor * standardBasePrice.poor),
        currency: 'copper',
    } as BasePrice;
};

const getRandomOffers = (
    fits: association[],
    misfits: association[],
    isAbout: weServe
) => {
    const exampleChapters =
        isAbout === weServe.drinks ? drinkExamples : foodExamples;
    return exampleChapters
        .map((chapter) => {
            const maxNumberOfDishes = Math.floor(
                Math.random() * MAX_OFFER + (1 - NO_OFFER_PROBABILITY)
            );
            const offers: Offer[] = new Array(maxNumberOfDishes).fill(
                NothingLeftOffer
            );
            offers.map((entry, index) => {
                const previousOffers = offers.filter(
                    (entry, checkIndex) => checkIndex < index
                );
                const newOffer = getNewRandomDrinkOffer(
                    fits,
                    misfits,
                    chapter.category,
                    previousOffers,
                    isAbout
                );
                offers[index] = newOffer;
            });
            return offers;
        })
        .flat();
};
const getRandomName = (fits: association[], misfits: association[]) => {
    const adjective = getFittingRandom(
        adjectives,
        fits,
        misfits,
        []
    ) as Adjective;
    const validSubstantiveChapters = substantives.filter(
        (chapter) => !adjective.badWords.includes(chapter.category)
    );
    const validSubstantives = validSubstantiveChapters.flatMap(
        (chapter) => chapter.substantives
    );
    const substantive = getFittingRandom(validSubstantives, fits, misfits, []);

    return adjective.name + ' ' + substantive.name;
};
