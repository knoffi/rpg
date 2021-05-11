import { association } from '../classes/association';
import { NameIdea } from '../classes/NameIdea';
import { getStructuredFits } from '../classes/StructuredTavernFits';
import { menuCategory } from '../classes/TavernProduct';
import { getProductsLeftAndBannerData } from '../editNavigator/editNavigatorFunctions';
import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
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
import { nameIdeas } from '../scenes/nameScene/names/nameIdeas';
import { getSpecialTavernName } from '../scenes/nameScene/names/specialTavernNames';
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
    tavernData.name = getRandomName(fits);
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
    //TODO: add random bartender, average guest, some guests, furniture
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
/*{
        const randomNumber = Math.random();
        const structuredFits = getStructuredFits(fits);
        if (randomNumber > PROBABILITY_SPECIAL_NAME || this.noFitsActive()) {
            const possibleNames = nameIdeas.filter((nameIdea) =>
                nameIdea.fitsToTavern(structuredFits)
            );
            const newNameIdea = getRandomArrayEntry(possibleNames) as NameIdea;
            const newName = newNameIdea
                ? newNameIdea.getConcreteName(structuredFits)
                : 'Nameless Tavern';
            this.props.onDataChange({ name: newName });
            this.setState({ isSpecialName: false });
        } else {
            const specialName = this.getSpecialNames();
            this.props.onDataChange({ name: specialName });
            this.setState({ isSpecialName: true });
        }
    } */
const getRandomName = (fits: association[]) => {
    const randomNumber = Math.random();
    const structuredFits = getStructuredFits(fits);
    if (randomNumber > 0.4 || fits.length === 0) {
        const possibleNames = nameIdeas.filter((nameIdea) =>
            nameIdea.fitsToTavern(structuredFits)
        );
        const newNameIdea = getRandomArrayEntry(possibleNames) as NameIdea;
        if (!newNameIdea) {
            console.log(
                'no name idea fitted to tavern, thus newNameIdea was undefined'
            );
        }
        const newName = newNameIdea
            ? newNameIdea.getConcreteName(structuredFits)
            : 'Nameless Tavern';
        return newName;
    } else {
        return getSpecialTavernName(fits);
    }
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
