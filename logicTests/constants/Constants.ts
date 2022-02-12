import { association } from '../../classes/association';
import {
    AddCheck,
    ContentCreator,
    CreationRequest,
    MultiRerollRequest,
} from '../../classes/contentCreator/ContentCreator';
import { CreationQuality } from '../../classes/contentCreator/CreationQuality';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import { AssetKey } from '../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../classes/idea/DishIdea';
import { ImpressionIdea } from '../../classes/idea/ImpressionIdea';
import { Noticable } from '../../classes/idea/Noticable';
import { Pattern } from '../../classes/idea/Patterns/Pattern';
import { defaultPowerFitConcepts } from '../../classes/idea/powerFitConcepts/powerFitConcepts';
import { PriceSetter } from '../../classes/idea/PriceSetter';
import { StructuredTavernFits } from '../../classes/idea/StructuredTavernFits';
import { KeyHandler } from '../../classes/keyHandler/KeyHandler';
import { Keys } from '../../classes/keyHandler/KeyHandlingTypes';
import { PatternHandler } from '../../classes/patternHandler/PatternHandler';
import { MenuPricing } from '../../classes/price/incomeRange';
import { Drinkable, Eatable } from '../../classes/TavernProduct';
import { WeServe } from '../../editNavigator/WeServe';
import { Content } from '../../mainNavigator/Content';
import { Offer } from '../../scenes/menuScene/Offer';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import { extendToContent } from './extendToContent';

type ImpressionRequest = CreationRequest & { isAbout: WeServe.impressions };
export class Constants {
    public static foodRequest() {
        const foodRequest: CreationRequest = {
            isAbout: WeServe.food,
            category: Eatable.mainDish,
            keys: new KeyHandler('noPreviousContent'),
            oldAssets: [] as Offer[],
            pattern: new PatternHandler('noContent'),
            unpleasant: [],
            unwanted: [],
        };
        return foodRequest;
    }

    public static drinkRequest() {
        const request: CreationRequest = {
            isAbout: WeServe.drinks,
            category: Drinkable.wine,
            //TODO: create KeyHandler factory (keys -> KeyHandler)for test constants
            keys: new KeyHandler('noPreviousContent').multiUpdateClone([
                {
                    type: 'Add',
                    isAbout: WeServe.drinks,
                    newKeys: { main: [AssetKey.WINE_mead], addition: [] },
                },
            ]),
            oldAssets: [] as Offer[],
            pattern: new PatternHandler('noContent'),
            unpleasant: [],
            unwanted: [],
        };
        return request;
    }
    public static impressionRequest() {
        const request: ImpressionRequest = {
            isAbout: WeServe.impressions,
            category: Noticable.bartender,
            pattern: new PatternHandler('noContent').multiUpdateClone([
                {
                    type: 'Add',
                    isAbout: WeServe.impressions,
                    newPatterns: [Pattern.BARTENDER_UncleBen],
                },
            ]),
            keys: new KeyHandler('noPreviousContent'),
            oldAssets: [] as Impression[],
            unpleasant: [],
            unwanted: [],
        };
        return request;
    }
    public static qualityLeft(): Record<
        CreationQuality,
        { fits: StructuredTavernFits; check: AddCheck }
    > {
        const average: AddCheck = {
            isAbout: WeServe.drinks,
            category: Drinkable.beer,
            added: [],
            keys: new KeyHandler('noPreviousContent').multiUpdateClone([
                {
                    type: 'Add',
                    isAbout: WeServe.drinks,
                    newKeys: { main: [AssetKey.BEER_ale], addition: [] },
                },
            ]),
            pattern: new PatternHandler('noContent'),
        };
        const barely = average;
        const best: AddCheck = {
            ...average,
            keys: new KeyHandler('noPreviousContent'),
        };
        const good = best;
        const none = best;
        return {
            [CreationQuality.NONE]: {
                fits: { land: association.desert },
                check: none,
            },
            [CreationQuality.AVERAGE]: {
                fits: { powerFit: association.adventurer },
                check: average,
            },
            [CreationQuality.GOOD]: {
                fits: { powerFit: association.underdark },
                check: good,
            },
            [CreationQuality.HIGH]: {
                fits: { powerFit: association.adventurer },
                check: best,
            },
            [CreationQuality.BARELY]: {
                fits: { powerFit: association.underdark },
                check: barely,
            },
        };
    }
    private static _oldImpressions: Impression[] = [
        {
            name: 'Friendly',
            category: Noticable.bartender,
            keys: { main: [AssetKey.BARTENDER_charisma], addition: [] },
            patterns: [Pattern.BARTENDER_UncleBen],
            universe: FantasyKeys.unitTest,
            impliedPatterns: [],
            isAbout: WeServe.impressions,
        },
        {
            name: 'Very thin',
            category: Noticable.bartender,
            keys: { main: [AssetKey.BARTENDER_body], addition: [] },
            patterns: [Pattern.BARTENDER_Kleinfinger],
            universe: FantasyKeys.unitTest,
            impliedPatterns: [],
            isAbout: WeServe.impressions,
        },
        {
            name: 'Knows a secret',
            category: Noticable.bartender,
            keys: { main: [AssetKey.BARTENDER_knowledge], addition: [] },
            patterns: [Pattern.BARTENDER_Kleinfinger],
            universe: FantasyKeys.unitTest,
            impliedPatterns: [],
            isAbout: WeServe.impressions,
        },
    ];
    public static multiDelete() {
        const request: CreationRequest = {
            ...Constants.impressionRequest(),
            oldAssets: Constants._oldImpressions,
        };
        const oldTavern = extendToContent({
            [WeServe.impressions]: Constants._oldImpressions,
        });
        const toDelete = oldTavern[WeServe.impressions]
            .map((impression) => impression.name)
            .filter((entry, index) => index > 0);
        const leftAfterDelete = [oldTavern[WeServe.impressions][0].name];
        const fullKeysLeft: Keys = {
            main: [AssetKey.BARTENDER_charisma],
            addition: [],
        };
        const patternsLeft: Pattern[] = [Pattern.BARTENDER_UncleBen];
        const keys = new KeyHandler(oldTavern);
        const pattern = new PatternHandler(oldTavern);
        return {
            request,
            toDelete,
            leftAfterDelete,
            fullKeysLeft,
            patternsLeft,
            keys,
            pattern,
        };
    }
    private static _sideDishStandard: Omit<
        Offer & { isAbout: WeServe.food },
        'name' | 'keys' | 'patterns'
    > = {
        isAbout: WeServe.food,
        category: Eatable.sideDish,
        price: 1,
        universe: FantasyKeys.unitTest,
        income: association.empty,
        description: '',
        isUserMade: false,
        impliedPatterns: [],
    };

    public static multiReroll() {
        const foodMenu = {
            [WeServe.food]: [
                {
                    ...Constants._sideDishStandard,
                    name: 'Soup',
                    keys: { main: [AssetKey.SMALL_DISH_soup], addition: [] },
                    patterns: [Pattern.BARTENDER_UncleBen],
                },
                {
                    ...Constants._sideDishStandard,
                    name: 'Bread',
                    keys: { main: [AssetKey.SMALL_DISH_carbon], addition: [] },
                    patterns: [Pattern.BARTENDER_UncleBen],
                },
                {
                    ...Constants._sideDishStandard,
                    name: 'Salad',
                    keys: { main: [AssetKey.SMALL_DISH_salad], addition: [] },
                    patterns: [Pattern.BARTENDER_UncleBen],
                },
            ],
        };
        const tavern: Content = extendToContent(foodMenu);
        const keys = new KeyHandler(tavern);
        const pattern = new PatternHandler(tavern);
        const unrerolledName = tavern.food[0].name;
        const request: MultiRerollRequest = {
            isAbout: WeServe.food,
            category: Eatable.sideDish,
            oldAssets: tavern[WeServe.food],
            keys,
            pattern,
        };
        const addedByReroll = 'Hummus';
        const containedFullMain = [
            AssetKey.SMALL_DISH_fingerfood,
            AssetKey.SMALL_DISH_soup,
        ];
        const containedPattern = [
            Pattern.BARTENDER_Kleinfinger,
            Pattern.BARTENDER_UncleBen,
        ];
        const toReroll = tavern.food
            .map((dish) => dish.name)
            .filter((entry, index) => index > 0);
        return {
            request,
            toReroll,
            unrerolledName,
            addedByReroll,
            containedFullMain,
            containedPattern,
            keys,
            pattern,
        };
    }
    public static patterns() {
        return [Pattern.BARTENDER_Kleinfinger];
    }
    public static patternAdd() {
        const patternAdd = {
            isAbout: WeServe.impressions,
            newPatterns: [Pattern.BARTENDER_Kleinfinger],
            type: 'Add' as const,
        };
        return patternAdd;
    }
    public static patternDelete() {
        const patternDelete = {
            isAbout: WeServe.impressions,
            oldPatterns: [Pattern.BARTENDER_Kleinfinger],
            type: 'Delete' as const,
        };
        return patternDelete;
    }
    public static keyAdd() {
        const newKeys = {
            main: [AssetKey.BARTENDER_knowledge],
            addition: [AssetKey.BARTENDER_opinion, AssetKey.BARTENDER_face],
        };
        const keyAdd = {
            isAbout: WeServe.impressions,
            type: 'Add' as const,
            newKeys,
        };
        return keyAdd;
    }
    public static keyDelete() {
        const oldKeys = {
            main: [AssetKey.BARTENDER_knowledge],
            addition: [AssetKey.BARTENDER_opinion, AssetKey.BARTENDER_face],
        };
        const keyDelete = {
            isAbout: WeServe.impressions,
            type: 'Delete' as const,
            oldKeys: oldKeys,
        };
        return keyDelete;
    }
    public static forImpliedPatternsByKey() {
        const isAbout = WeServe.drinks;
        const newKeys: Keys = { main: [AssetKey.WINE_red], addition: [] };
        const drink = new DishIdea(
            {
                mainIng: {
                    name: 'Sun Red Wine',
                    key: newKeys.main[0],
                },
            },
            'default',
            Drinkable.wine
        );
        const newPatterns = [Pattern.IMPRESSIONS_redWine];
        const keysBeforeAdd = new KeyHandler('noPreviousContent');
        const patternsBeforeAdd = new PatternHandler('noContent');
        const addRequest: CreationRequest = {
            isAbout,
            category: Drinkable.wine,
            oldAssets: [],
            keys: keysBeforeAdd,
            pattern: patternsBeforeAdd,
            unpleasant: [],
            unwanted: [],
        };
        const keysAfterAdd = keysBeforeAdd.multiUpdateClone([
            { type: 'Add', isAbout: WeServe.drinks, newKeys },
        ]);
        const patternsAfterAdd = patternsBeforeAdd.multiUpdateClone([
            {
                type: 'Add',
                isAbout: WeServe.impressions,
                newPatterns,
            },
        ]);
        const patternIsAbout = WeServe.impressions;
        const rerollRequest = (drinksAfterAdd: Offer[]): MultiRerollRequest => {
            return {
                isAbout,
                category: Drinkable.wine,
                oldAssets: drinksAfterAdd,
                keys: keysAfterAdd,
                pattern: patternsAfterAdd,
            };
        };

        return {
            drink,
            newPatterns,
            addRequest,
            keysAfterAdd,
            patternsAfterAdd,
            rerollRequest,
            patternIsAbout,
        };
    }
    public static addWithUnwanted() {
        const request: CreationRequest = {
            isAbout: WeServe.impressions,
            category: Noticable.someCustomers,
            keys: new KeyHandler('noPreviousContent'),
            pattern: new PatternHandler('noContent'),
            oldAssets: [],
            unwanted: ['A', 'B'],
            unpleasant: [],
        };
        const fits = {};
        const expectedCreation = 'C';
        return { request, fits, expectedCreation };
    }
    public static addUnpleasantGreaterUnwanted() {
        const request: CreationRequest = {
            isAbout: WeServe.impressions,
            category: Noticable.someCustomers,
            keys: new KeyHandler('noPreviousContent'),
            pattern: new PatternHandler('noContent'),
            oldAssets: [],
            unwanted: ['A', 'B'],
            unpleasant: ['C'],
        };
        const fits = {};
        const expectedCreation = 'C';
        return { request, fits, expectedCreation };
    }
    public static addWithUnpleasant() {
        const request: CreationRequest = {
            isAbout: WeServe.impressions,
            category: Noticable.someCustomers,
            keys: new KeyHandler('noPreviousContent'),
            pattern: new PatternHandler('noContent'),
            oldAssets: [],
            unwanted: [],
            unpleasant: ['A', 'B'],
        };
        const fits = {};
        const expectedCreation = 'C';
        return { request, fits, expectedCreation };
    }
    public static forImpliedPatternsByKeys() {
        const drink = new DishIdea(
            {
                mainIng: {
                    name: 'Silver White Wine',
                    keys: [AssetKey.WINE_white],
                },
            },
            'default',
            Drinkable.wine
        );
        const patternsToAdd = [Pattern.IMPRESSIONS_whiteWine];
        return { drink, patternsToAdd };
    }

    public static content() {
        const resultingPatterns = {
            [WeServe.drinks]: [],
            [WeServe.food]: [],
            [WeServe.impressions]: [
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_UncleBen,
                Pattern.IMPRESSIONS_redWine,
            ],
        };
        const drinksAndImpressions: Omit<Content, 'food'> = {
            drink: [
                {
                    name: 'Red Wine',
                    isAbout: WeServe.drinks,
                    isUserMade: true,
                    income: association.poor,
                    category: Drinkable.wine,
                    price: 10,
                    impliedPatterns: [
                        {
                            isAbout: WeServe.impressions,
                            type: 'Add',
                            newPatterns: [Pattern.IMPRESSIONS_redWine],
                        },
                    ],
                    description: '',
                    patterns: [],
                    keys: {
                        main: [],
                        addition: [AssetKey.WINE_red],
                    },
                    universe: 'isUserMade',
                },
            ],
            impression: [
                {
                    name: 'Uncle Ben',
                    category: Noticable.bartender,
                    universe: 'isUserMade',
                    patterns: [Pattern.BARTENDER_UncleBen],
                    keys: { main: [AssetKey.BARTENDER_charisma], addition: [] },
                    impliedPatterns: [],
                    isAbout: WeServe.impressions,
                },
                {
                    name: 'Talks about power and responsibility',
                    category: Noticable.bartender,
                    universe: 'isUserMade',
                    patterns: [Pattern.BARTENDER_UncleBen],
                    keys: { main: [AssetKey.BARTENDER_actions], addition: [] },
                    impliedPatterns: [],
                    isAbout: WeServe.impressions,
                },
            ],
        };
        const content = extendToContent(drinksAndImpressions);
        return {
            content,
            resultingPatterns,
        };
    }
    public static universe = {
        [Eatable.mainDish]: FantasyKeys.unitTest,
        [Eatable.sideDish]: FantasyKeys.unitTest,
        [Eatable.dessert]: FantasyKeys.unitTest,
        [Eatable.breakfast]: FantasyKeys.unitTest,
        [Drinkable.beer]: FantasyKeys.unitTest,
        [Drinkable.lemonade]: FantasyKeys.unitTest,
        [Drinkable.spirit]: FantasyKeys.unitTest,
        [Drinkable.wine]: FantasyKeys.unitTest,
        [Noticable.bartender]: FantasyKeys.unitTest,
        [Noticable.averageCustomer]: FantasyKeys.unitTest,
        [Noticable.someCustomers]: FantasyKeys.unitTest,
        [Noticable.furniture]: FantasyKeys.unitTest,
    };
    public static creator() {
        return new ContentCreator(Constants.universe);
    }

    public static priceTable() {
        const priceSetter: PriceSetter = {
            [association.poor]: 1,
            [association.modest]: 10,
            [association.wealthy]: 100,
            [association.rich]: 1000,
        };
        const priceTable: MenuPricing = {
            [Drinkable.beer]: priceSetter,
            [Drinkable.wine]: priceSetter,
            [Drinkable.spirit]: priceSetter,
            [Drinkable.lemonade]: priceSetter,
            [Eatable.mainDish]: priceSetter,
            [Eatable.sideDish]: priceSetter,
            [Eatable.dessert]: priceSetter,
            [Eatable.breakfast]: priceSetter,
        };
        return priceTable;
    }
    public static powerFitModeImpression() {
        const impression = new ImpressionIdea(
            { name: 'She is ' },
            [
                { name: 'a soldier', powerFits: [association.soldier] },
                { name: 'a sailor', needs: [association.haven] },
                { name: 'a bard', needsOne: [association.bard] },
            ],
            Noticable.bartender,
            undefined,
            undefined,
            defaultPowerFitConcepts.harmony
        );
        const powerfitSoldierText = 'She is a soldier' as const;
        const needsHavenText = 'She is a sailor' as const;
        const needsOneBardText = 'She is a bard' as const;
        return {
            impression,
            powerfitSoldierText,
            needsHavenText,
            needsOneBardText,
        };
    }
}
