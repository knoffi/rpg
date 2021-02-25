import { Adjective } from '../classes/Adjectives';
import { association } from '../classes/association';
import { menuCategory } from '../classes/TavernProduct';
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
import {
    getNewRandomDrinkOffer,
    weServe,
} from '../scenes/menuScene/addRandomDrink';
import { BasePrice, standardBasePrice } from '../scenes/menuScene/basePrice';
import { drinkExamples } from '../scenes/menuScene/drinks/drinks';
import { foodExamples } from '../scenes/menuScene/food/food';
import { NothingLeftOffer, Offer } from '../scenes/menuScene/menuEnums';
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
    const chapters = isAbout === weServe.drinks ? drinkExamples : foodExamples;
    return chapters
        .map((chapter) => {
            return getExamplesForChapter(
                fits,
                misfits,
                chapter.category,
                isAbout
            );
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

const getExamplesForChapter = (
    fits: association[],
    misfits: association[],
    category: menuCategory,
    isAbout: weServe
) => {
    const maxNumberOfProducts = Math.floor(
        Math.random() * MAX_OFFER + (1 - NO_OFFER_PROBABILITY)
    );
    const emptyOffers = new Array<Offer>(maxNumberOfProducts).fill(
        NothingLeftOffer
    );
    const fillUp = (alreadyFilled: Offer[]) => {
        return getNewRandomDrinkOffer(
            fits,
            misfits,
            category,
            alreadyFilled,
            isAbout
        );
    };
    return fillMenuPart(emptyOffers, 0, fillUp);
};

const fillMenuPart = (
    menuPart: Offer[],
    fillStart = 0,
    getFillUp: (alreadyFilled: Offer[]) => Offer
): Offer[] => {
    if (fillStart >= menuPart.length) {
        return menuPart;
    }
    const alreadyFilled = menuPart.slice(0, fillStart);
    const newOffer = getFillUp(alreadyFilled);
    return fillMenuPart([...alreadyFilled, newOffer], fillStart + 1, getFillUp);
};
