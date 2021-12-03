import {
    association,
    AssociationTypes,
    getAssociationsOfType,
} from '../../classes/association';
import {
    Add,
    ContentCreator,
    CreationRequest,
} from '../../classes/contentCreator/ContentCreator';
import { emptyKeys } from '../../classes/contentCreator/emptyKeys';
import { Noticable } from '../../classes/idea/Noticable';
import {
    getStructuredFits,
    StructuredTavernFits,
} from '../../classes/idea/StructuredTavernFits';
import { KeyHandler } from '../../classes/keyHandler/KeyHandler';
import { KeyChange } from '../../classes/keyHandler/KeyHandlingTypes';
import {
    PatternChange,
    PatternHandler,
} from '../../classes/patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../../classes/TavernProduct';
import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { BasePrice, standardBasePrice } from '../../scenes/menuScene/basePrice';
import { Offer } from '../../scenes/menuScene/Offer';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { getRandomName } from '../../scenes/nameScene/getRandomName';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import { Content } from '../Content';
import { getCreationRequest } from '../getCreationRequest';
import { getTavernHistoryInitializer } from '../mainNavigatorFunctions';
import { MinimalTavernData } from '../TavernData';
import { UniverseMap } from '../UniverseMap';
import { iconicFittings } from './iconicFittings';
const CHANCE_FOR_ICONIC_FITTING = 0.8;
const CHANCE_FOR_SPECIAL_FIT = 0.2;
const CHANCE_FOR_ORDINARY_FIT = 0.625;
const NO_IDEA_PROBABILITY = 0.1;
const MAX_IDEA = 3;
const MAX_PRICE_DERIVATION = 0.3;
export const getRandomStartTavern = (
    universeMap: UniverseMap
): MinimalTavernData => {
    const tavernData = getTavernHistoryInitializer(universeMap);
    const fitting = getRandomStructuredFits();
    const prices = getRandomBasePrice();
    const name = getRandomStartName(fitting);
    //TODO: use PatternHandler to get better content
    const content = getContent(fitting, universeMap);

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

const getRandomPowerFit = (
    fitting: StructuredTavernFits
): association | undefined => {
    if (fitting.class) {
        return fitting.class;
    } else {
        const fits = Object.values(fitting)
            .map((fit) => fit || association.empty)
            .filter((fit) => fit !== association.empty && fit);
        if (fits.length === 0) {
            return undefined;
        }
        return getRandomArrayEntry(fits);
    }
};

const getRandomStructuredFits = (): StructuredTavernFits => {
    const fitting =
        Math.random() < CHANCE_FOR_ICONIC_FITTING
            ? getRandomArrayEntry(iconicFittings)
            : getStructuredFits(getRandomFits());
    fitting.powerFit = getRandomPowerFit(fitting);
    return fitting;
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

const getContent = (
    fits: StructuredTavernFits,
    universeMap: UniverseMap
): Content => {
    const creator = new ContentCreator(universeMap);
    const drinks = Object.values(Drinkable)
        .map(
            (category) =>
                getContentForCategory(
                    fits,
                    {
                        isAbout: WeServe.drinks,
                        category,
                    },
                    creator
                ).added
        )
        .flat() as Offer[];
    const food = Object.values(Eatable)
        .map(
            (category) =>
                getContentForCategory(
                    fits,
                    { isAbout: WeServe.food, category },
                    creator
                ).added
        )
        .flat() as Offer[];
    const impressions = Object.values(Noticable)
        .map(
            (category) =>
                getContentForCategory(
                    fits,
                    {
                        isAbout: WeServe.impressions,
                        category,
                    },
                    creator
                ).added
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
    demand: Demand,
    creator: ContentCreator
): Add => {
    const contentLength =
        demand.category === Noticable.bartender
            ? 5
            : Math.floor(Math.random() * MAX_IDEA + (1 - NO_IDEA_PROBABILITY));
    const keyHandler = new KeyHandler('noPreviousContent');
    const patternHandler = new PatternHandler('noContent');
    const newKeys = emptyKeys;
    const startAdd: Add = {
        ...demand,
        added: [],
        newKeys,
        newCreationAdded: false,
        newPatterns: [],
    };
    const startRequest = getCreationRequest(startAdd, [], []);
    const content = getContentArray(
        fits,
        contentLength,
        startRequest,
        keyHandler,
        patternHandler,
        creator
    );
    return { ...content };
};

const getContentArray = (
    fits: StructuredTavernFits,
    length: number,
    request: CreationRequest,
    keys: KeyHandler,
    patterns: PatternHandler,
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
            const handlerUpdate: KeyChange & PatternChange = {
                ...add,
                type: 'Add',
            };
            keys.update(handlerUpdate);
            patterns.update(handlerUpdate);
        }
        const fullKeys = keys.getFullKeys(add.isAbout);
        const usedPatterns = patterns.getPatterns(add.isAbout);
        const newRequest = getCreationRequest(
            add,
            fullKeys.main,
            fullKeys.addition,
            usedPatterns
        );
        return getContentArray(
            fits,
            length,
            newRequest,
            keys,
            patterns,
            creator
        );
    }
};
