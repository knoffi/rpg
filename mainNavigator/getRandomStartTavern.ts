import { association } from '../classes/association';
import { Noticable } from '../classes/idea/ImpressionIdea';
import { NameIdea } from '../classes/idea/NameIdea';
import {
    getStructuredFits,
    StructuredTavernFits,
} from '../classes/idea/StructuredTavernFits';
import { Drinkable, Eatable, MenuCategory } from '../classes/TavernProduct';
import { getProductsLeftAndBannerData } from '../editNavigator/editNavigatorFunctions';
import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { stricterMisfitMode } from '../helpingFunctions/misfitModes';
import {
    getNewRandomDrinkOffer,
    WeServe,
} from '../scenes/menuScene/addRandomDrink';
import { BasePrice, standardBasePrice } from '../scenes/menuScene/basePrice';
import { NothingLeftOffer, Offer } from '../scenes/menuScene/menuEnums';
import { nameIdeas } from '../scenes/nameScene/names/nameIdeas';
import { IImpression } from '../scenes/questScene/impressions/IImpression';
import {
    emptyImpression,
    getRandomImpression,
} from '../scenes/questScene/impressions/impressionChapters';
import { getTavernHistoryInitializer } from './mainNavigatorFunctions';

const CHANCE_FOR_SPECIAL_FIT = 0.2;
const CHANCE_FOR_ORDINARY_FIT = 0.625;
const NO_IDEA_PROBABILITY = 0.1;
const MAX_IDEA = 3;
const MAX_PRICE_DERIVATION = 0.3;
export const getRandomStartTavern = () => {
    const tavernData = getTavernHistoryInitializer();

    const fits = getStructuredFits(getRandomFits());
    const basePrice = getRandomBasePrice();
    const drinks = getRandomIdeas(fits, WeServe.drinks) as Offer[];
    const dishes = getRandomIdeas(fits, WeServe.food) as Offer[];
    const impressions = getRandomIdeas(
        fits,
        WeServe.impressions
    ) as IImpression[];
    tavernData.name = getRandomName(fits);
    tavernData.fitting = fits;
    tavernData.drinks = drinks;
    tavernData.dishes = dishes;
    tavernData.impressions = impressions;
    const { bannerData, ideasLeft } = getProductsLeftAndBannerData(fits, {
        drinks,
        dishes,
        impressions,
    });
    tavernData.bannerData = bannerData!;
    tavernData.ideasLeft = ideasLeft!;
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

const getRandomIdeas = (fits: StructuredTavernFits, isAbout: WeServe) => {
    const categories =
        isAbout === WeServe.drinks
            ? Drinkable
            : isAbout === WeServe.food
            ? Eatable
            : Noticable;
    return Object.values(categories)
        .map((category: MenuCategory | Noticable) => {
            return getExamplesForChapter(fits, category, isAbout);
        })
        .flat();
};
const getRandomName = (fits: StructuredTavernFits) => {
    const randomNumber = Math.random();
    const nonEmptyCategories = Object.values(fits).filter(
        (fit) => fit && (fit as string) !== association.empty
    );

    const possibleNames = nameIdeas.filter((nameIdea) =>
        nameIdea.fitsToTavern(fits, undefined, randomNumber)
    );
    const newNameIdea = getRandomArrayEntry(possibleNames) as NameIdea;
    if (!newNameIdea) {
        console.log(
            'no name idea fitted to tavern, thus newNameIdea was undefined'
        );
    }
    const newName = newNameIdea
        ? newNameIdea.getConcreteName(fits, () => false)
        : 'Nameless Tavern';
    return newName;
};

const getExamplesForChapter = (
    fits: StructuredTavernFits,
    category: MenuCategory | Noticable,
    isAbout: WeServe
) => {
    const maxNumberOfIdeas = Math.floor(
        Math.random() * MAX_IDEA + (1 - NO_IDEA_PROBABILITY)
    );
    const forImpressions = isAbout === WeServe.impressions;
    const emptyOffers = new Array<Offer | IImpression>(maxNumberOfIdeas).fill(
        forImpressions ? emptyImpression : NothingLeftOffer
    );
    const fillUp = (alreadyFilled: (Offer | IImpression)[]) => {
        //TODO: getRandomImpression and getNewRandomDrinkOffer should both only rely on a string[] of forbidden names or a function like nameIsRedundant:(name:string)=>boolean
        return forImpressions
            ? getRandomImpression(
                  fits,
                  category as Noticable,
                  (alreadyFilled as IImpression[]).map((impression) => {
                      if (!impression.name) {
                          console.log(
                              'wanted only impressions, got something else'
                          );
                      }
                      return (impression as IImpression).name;
                  })
              )
            : getNewRandomDrinkOffer(
                  fits,
                  category as MenuCategory,
                  alreadyFilled as Offer[],
                  isAbout
              );
    };
    const newAssets = fillIdeaPart(emptyOffers, 0, fillUp);
    return newAssets.filter((asset) =>
        (asset as Offer).product
            ? (asset as Offer).product.name !== NothingLeftOffer.product.name
            : (asset as IImpression).name !== emptyImpression.name
    );
};

const fillIdeaPart = (
    ideaPart: (Offer | IImpression)[],
    fillStart = 0,
    getFillUp: (alreadyFilled: (Offer | IImpression)[]) => Offer | IImpression
): (Offer | IImpression)[] => {
    if (fillStart >= ideaPart.length) {
        return ideaPart;
    }
    const alreadyFilled = ideaPart.slice(0, fillStart);
    const newIdea = getFillUp(alreadyFilled);
    const fullerIdeaPart = ideaPart.map((idea, index) =>
        index === fillStart ? newIdea : idea
    );
    return fillIdeaPart(fullerIdeaPart, fillStart + 1, getFillUp);
};
