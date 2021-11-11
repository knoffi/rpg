import {
    association,
    AssociationTypes,
    getAssociationsOfType,
} from '../classes/association';
import {
    Add,
    ContentCreator,
    CreationRequest,
} from '../classes/contentCreator/ContentCreator';
import { emptyKeys } from '../classes/contentCreator/emptyKeys';
import { Noticable } from '../classes/idea/Noticable';
import {
    getStructuredFits,
    StructuredTavernFits,
} from '../classes/idea/StructuredTavernFits';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { BasePrice, standardBasePrice } from '../scenes/menuScene/basePrice';
import { Offer } from '../scenes/menuScene/Offer';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { getRandomName } from '../scenes/nameScene/getRandomName';
import { Impression } from '../scenes/questScene/impressions/Impression';
import { getCreationRequest } from './getCreationRequest';
import { getTavernHistoryInitializer } from './mainNavigatorFunctions';
import { MinimalTavernData } from './TavernData';

const CHANCE_FOR_POWERFIT = 0.9;
const CHANCE_FOR_SPECIAL_FIT = 0.2;
const CHANCE_FOR_ORDINARY_FIT = 0.625;
const NO_IDEA_PROBABILITY = 0.1;
const MAX_IDEA = 3;
const MAX_PRICE_DERIVATION = 0.3;
export const getRandomStartTavern = (): MinimalTavernData => {
    const tavernData = getTavernHistoryInitializer();

    const fitting = getRandomStructuredFits();
    const prices = getRandomBasePrice();
    const name = getRandomStartName(fitting);
    const content = getContent(fitting);

    return { ...tavernData, name, prices, fitting, ...content };
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
        [association.wealthy]: Math.floor(
            randomFactor * standardBasePrice[association.wealthy]
        ),
        [association.rich]: Math.floor(
            randomFactor * standardBasePrice['vastly rich']
        ),
        [association.modest]: Math.floor(
            randomFactor * standardBasePrice[association.modest]
        ),
        [association.poor]: Math.floor(
            randomFactor * standardBasePrice[association.poor]
        ),
        currency: 'copper',
    } as BasePrice;
};

type Content = Pick<
    MinimalTavernData,
    WeServe.drinks | WeServe.food | WeServe.impressions
>;

const getContent = (fits: StructuredTavernFits): Content => {
    const drinks = Object.values(Drinkable)
        .map(
            (category) =>
                getContentForCategory(fits, {
                    isAbout: WeServe.drinks,
                    category,
                }).added
        )
        .flat() as Offer[];
    const food = Object.values(Eatable)
        .map(
            (category) =>
                getContentForCategory(fits, { isAbout: WeServe.food, category })
                    .added
        )
        .flat() as Offer[];
    const impressions = Object.values(Noticable)
        .map(
            (category) =>
                getContentForCategory(fits, {
                    isAbout: WeServe.impressions,
                    category,
                }).added
        )
        .flat() as Impression[];
    return {
        [WeServe.drinks]: drinks,
        [WeServe.food]: food,
        [WeServe.impressions]: impressions,
    };
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
const getContentForCategory = (
    fits: StructuredTavernFits,
    demand: Demand
): Add => {
    const contentLength =
        demand.category === Noticable.bartender
            ? 5
            : Math.floor(Math.random() * MAX_IDEA + (1 - NO_IDEA_PROBABILITY));
    //TODO: random tavern uses random FantasyKey for content creator
    const creator = new ContentCreator();
    const keyHandler = new KeyHandler();
    const newKeys = emptyKeys;
    const startAdd: Add = {
        ...demand,
        added: [],
        newKeys,
        newCreationAdded: false,
    };
    const startRequest = getCreationRequest(startAdd, [], []);
    const content = getContentArray(
        fits,
        contentLength,
        startRequest,
        keyHandler,
        creator
    );
    return { ...content };
};

const getContentArray = (
    fits: StructuredTavernFits,
    length: number,
    request: CreationRequest,
    keys: KeyHandler,
    creator: ContentCreator
): Add => {
    if (request.oldAssets.length + 1 >= length) {
        return creator.addRandomCreation(fits, request);
    } else {
        const add = creator.addRandomCreation(fits, request);
        if (!add.newCreationAdded) {
            return add;
        }
        if (add.isAbout === WeServe.impressions) {
            keys.update({ ...add, type: 'Add' });
        }
        const fullKeys = keys.getFullKeys(add.isAbout);
        const newRequst = getCreationRequest(
            add,
            fullKeys.main,
            fullKeys.addition
        );
        return getContentArray(fits, length, newRequst, keys, creator);
    }
};
