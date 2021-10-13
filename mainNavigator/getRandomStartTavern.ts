import {
    association,
    AssociationTypes,
    getAssociationsOfType,
} from '../classes/association';
import { Noticable } from '../classes/idea/Noticable';
import {
    getStructuredFits,
    StructuredTavernFits,
} from '../classes/idea/StructuredTavernFits';
import { Drinkable, Eatable, MenuCategory } from '../classes/TavernProduct';
import { getProductsLeftAndBannerData } from '../editNavigator/editNavigatorFunctions';
import { WeServe } from '../editNavigator/WeServe';
import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { getNewRandomDrinkOffer } from '../scenes/menuScene/addRandomDrink';
import { BasePrice, standardBasePrice } from '../scenes/menuScene/basePrice';
import { NothingLeftOffer, Offer } from '../scenes/menuScene/Offer';
import { getRandomName } from '../scenes/nameScene/getRandomName';
import { emptyImpression } from '../scenes/questScene/impressions/emptyImpression';
import { getRandomImpression } from '../scenes/questScene/impressions/getRandomImpression';
import { IImpression } from '../scenes/questScene/impressions/IImpression';
import { getTavernHistoryInitializer } from './mainNavigatorFunctions';

const CHANCE_FOR_POWERFIT = 0.9;
const CHANCE_FOR_SPECIAL_FIT = 0.2;
const CHANCE_FOR_ORDINARY_FIT = 0.625;
const NO_IDEA_PROBABILITY = 0.1;
const MAX_IDEA = 3;
const MAX_PRICE_DERIVATION = 0.3;
export const getRandomStartTavern = () => {
    const tavernData = getTavernHistoryInitializer();

    const fits = getRandomStructuredFits();
    const basePrice = getRandomBasePrice();
    const drinks = getRandomIdeas(fits, WeServe.drinks) as Offer[];
    const dishes = getRandomIdeas(fits, WeServe.food) as Offer[];
    const impressions = getRandomIdeas(
        fits,
        WeServe.impressions
    ) as IImpression[];
    tavernData.name = getRandomStartName(fits);
    tavernData.fitting = fits;
    tavernData[WeServe.drinks] = drinks;
    tavernData[WeServe.food] = dishes;
    tavernData[WeServe.impressions] = impressions;
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
    const fitsWithEmptyFits = Object.values(AssociationTypes).map((type) => {
        const chanceToAddFit =
            type === AssociationTypes.special
                ? CHANCE_FOR_SPECIAL_FIT
                : CHANCE_FOR_ORDINARY_FIT;
        return Math.random() < chanceToAddFit
            ? getRandomArrayEntry(getAssociationsOfType(type))
            : association.empty;
    });
    return fitsWithEmptyFits.filter((fit) => fit !== association.empty);
};

const getRandomStructuredFits = () => {
    const fits = getRandomFits();
    const structuredFits = getStructuredFits(fits);
    if (Math.random() < CHANCE_FOR_POWERFIT && fits.length > 0) {
        const powerFit = getRandomArrayEntry(fits);
        structuredFits.powerFit = powerFit;
    }
    return structuredFits;
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
const getRandomStartName = (fits: StructuredTavernFits) => {
    const probabilityForNameFilter = Math.random();
    const newName = getRandomName(
        fits,
        [],
        probabilityForNameFilter,
        probabilityForNameFilter
    );
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
        console.log('random tavern ignores keys for impression');
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
                  }),
                  [],
                  []
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
