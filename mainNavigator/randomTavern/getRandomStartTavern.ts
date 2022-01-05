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
import { getRandomArrayEntry } from '../../helpingFunctions/getRandomArrayEntry';
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
type ContentSum = {
    content: (Offer | Impression)[];
    keys: KeyHandler;
    patterns: PatternHandler;
};
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
            ? //NOTE: fail fast is prefered here
              getRandomArrayEntry(getAssociationsOfType(type))!
            : association.empty;
    });
    return fitsWithEmptyFits.filter((fit) => fit !== association.empty);
};

const getRandomPowerFit = (
    fitting: StructuredTavernFits
): association | undefined => {
    const fits = Object.values(fitting)
        .map((fit) => fit || association.empty)
        .filter((fit) => fit !== association.empty && fit);
    if (fits.length === 0) {
        return undefined;
    }
    return getRandomArrayEntry(fits);
};

const getRandomStructuredFits = (): StructuredTavernFits => {
    const fitting =
        Math.random() < CHANCE_FOR_ICONIC_FITTING
            ? //NOTE: fail fast is prefered here
              getRandomArrayEntry(iconicFittings)!
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
            randomFactor * standardBasePrice[association.rich]
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
    // evolves keyHandler from category, to category, from WeServe to WeServe, THUS keyHandler needs to be mutable
    const creator = new ContentCreator(universeMap);
    const keyHandler = new KeyHandler('noPreviousContent');
    const patternHandler = new PatternHandler('noContent');
    const drinks = Object.values(Drinkable).reduce(
        (contentSum, category) =>
            getContentForCategory(
                fits,
                {
                    isAbout: WeServe.drinks,
                    category,
                },
                creator,
                contentSum
            ),
        {
            content: [],
            keys: keyHandler,
            patterns: patternHandler,
        } as ContentSum
    ).content as Offer[];
    const food = Object.values(Eatable).reduce(
        (contentSum, category) =>
            getContentForCategory(
                fits,
                {
                    isAbout: WeServe.food,
                    category,
                },
                creator,
                contentSum
            ),
        {
            content: [],
            keys: keyHandler,
            patterns: patternHandler,
        } as ContentSum
    ).content as Offer[];
    const impressions = Object.values(Noticable).reduce(
        (contentSum, category) =>
            getContentForCategory(
                fits,
                {
                    isAbout: WeServe.impressions,
                    category,
                },
                creator,
                contentSum
            ),
        {
            content: [],
            keys: keyHandler,
            patterns: patternHandler,
        } as ContentSum
    ).content as Impression[];
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
    creator: ContentCreator,
    collection: ContentSum
): ContentSum => {
    const contentLength =
        demand.category === Noticable.bartender
            ? 8
            : Math.floor(Math.random() * MAX_IDEA + (1 - NO_IDEA_PROBABILITY));
    const newKeys = emptyKeys;
    const startAdd: Add = {
        ...demand,
        added: [],
        newKeys,
        newCreationAdded: false,
        newPatterns: [],
        impliedPatterns: [],
    };
    const startRequest = getCreationRequest(startAdd, [], []);
    const newContent = getContentArray(
        fits,
        contentLength,
        startRequest,
        collection.keys,
        collection.patterns,
        creator
    ).added;
    return { ...collection, content: [...collection.content, ...newContent] };
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
        updateHandlers(keys, patterns, add);
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
const updateHandlers = (
    keys: KeyHandler,
    patterns: PatternHandler,
    add: Add
) => {
    const handlerUpdate: KeyChange & PatternChange = {
        ...add,
        type: 'Add',
    };
    keys.update(handlerUpdate);
    patterns.update(handlerUpdate);
    patterns.multiUpdate(add.impliedPatterns);
};
