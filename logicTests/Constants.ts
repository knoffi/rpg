import { association } from '../classes/association';
import {
    ContentCreator,
    CreationRequest,
    MultiRerollRequest,
} from '../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { KeyChange, Keys } from '../classes/keyHandler/KeyHandlingTypes';
import {
    PatternChange,
    PatternHandler,
} from '../classes/patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Content } from '../mainNavigator/Content';
import { Offer } from '../scenes/menuScene/Offer';
import { Impression } from '../scenes/questScene/impressions/Impression';
import { Cloner, DeepReadonly } from './Cloner';
import { extendToContent } from './extendToContent';

type ImpressionRequest = CreationRequest & { isAbout: WeServe.impressions };
export class Constants {
    private static _foodRequest: DeepReadonly<CreationRequest> = {
        isAbout: WeServe.food,
        category: Eatable.mainDish,
        fullFirstKeys: [] as AssetKey[],
        fullSecondKeys: [] as AssetKey[],
        oldAssets: [] as Offer[],
    };
    public static foodRequest() {
        return Cloner.deepWritableCopy(Constants._foodRequest);
    }
    private static _drinkRequest: DeepReadonly<CreationRequest> = {
        isAbout: WeServe.drinks,
        category: Drinkable.wine,
        fullFirstKeys: [AssetKey.WINE_mead] as AssetKey[],
        fullSecondKeys: [] as AssetKey[],
        oldAssets: [] as Offer[],
    };
    public static drinkRequest() {
        return Cloner.deepWritableCopy(Constants._drinkRequest);
    }
    private static _impressionRequest: DeepReadonly<ImpressionRequest> = {
        isAbout: WeServe.impressions,
        category: Noticable.bartender,
        patterns: [Pattern.BARTENDER_UncleBen] as Pattern[],
        fullFirstKeys: [] as AssetKey[],
        fullSecondKeys: [] as AssetKey[],
        oldAssets: [] as Impression[],
    };
    public static impressionRequest() {
        return Cloner.deepWritableCopy(Constants._impressionRequest);
    }
    private static _oldImpression: Impression = {
        name: 'Is super duper kind',
        category: Noticable.bartender,
        keys: { main: [AssetKey.BARTENDER_charisma], addition: [] },
        patterns: [Pattern.BARTENDER_UncleBen],
        universe: FantasyKeys.unitTest,
    };
    private static _oldImpressions: Impression[] = [
        {
            name: 'Friendly',
            category: Noticable.bartender,
            keys: { main: [AssetKey.BARTENDER_charisma], addition: [] },
            patterns: [Pattern.BARTENDER_UncleBen],
            universe: FantasyKeys.unitTest,
        },
        {
            name: 'Very thin',
            category: Noticable.bartender,
            keys: { main: [AssetKey.BARTENDER_body], addition: [] },
            patterns: [Pattern.BARTENDER_Kleinfinger],
            universe: FantasyKeys.unitTest,
        },
        {
            name: 'Knows a secret',
            category: Noticable.bartender,
            keys: { main: [AssetKey.BARTENDER_knowledge], addition: [] },
            patterns: [Pattern.BARTENDER_Kleinfinger],
            universe: FantasyKeys.unitTest,
        },
    ];
    private static _rerollRequest: DeepReadonly<CreationRequest> = {
        ...Constants._impressionRequest,
        oldAssets: [Constants._oldImpression],
    };
    public static rerollRequest() {
        return Cloner.deepWritableCopy(Constants._rerollRequest);
    }
    private static _multiDeleteRequest: DeepReadonly<CreationRequest> = {
        ...Constants._impressionRequest,
        oldAssets: Constants._oldImpressions,
    };
    private static _multiDeleteTavern: DeepReadonly<Content> = extendToContent({
        [WeServe.impressions]: Constants._oldImpressions,
    });
    public static multiDelete() {
        const request = Constants._multiDeleteRequest;
        const oldTavern = Constants._multiDeleteTavern;
        const toDelete = oldTavern[WeServe.impressions]
            .map((impression) => impression.name)
            .filter((entry, index) => index > 0);
        const leftAfterDelete = [oldTavern[WeServe.impressions][0].name];
        const fullKeysLeft: Keys = {
            main: [AssetKey.BARTENDER_charisma],
            addition: [],
        };
        const patternsLeft: Pattern[] = [Pattern.BARTENDER_UncleBen];
        const methodlessObjects = Cloner.deepWritableCopy({
            request,
            toDelete,
            leftAfterDelete,
            fullKeysLeft,
            patternsLeft,
        });
        const keys = new KeyHandler(oldTavern);
        const pattern = new PatternHandler(oldTavern);
        return { ...methodlessObjects, keys, pattern };
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
    };
    private static _multiRerollDishes: Partial<Content> = {
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

    private static _multiRerollTavern: DeepReadonly<Content> = extendToContent(
        Constants._multiRerollDishes
    );
    private static _multiRerollRequest: DeepReadonly<
        Omit<MultiRerollRequest & { isAbout: WeServe.food }, 'keys' | 'pattern'>
    > = {
        isAbout: WeServe.food,
        category: Eatable.sideDish,
        oldAssets: Constants._multiRerollTavern[WeServe.food],
    };
    public static multiReroll() {
        const partialRequest = Constants._multiRerollRequest;
        const keys = new KeyHandler(Constants._multiRerollTavern);
        const pattern = new PatternHandler(Constants._multiRerollTavern);
        const unrerolledName = Constants._multiRerollTavern.food[0].name;
        const addedByReroll = 'Hummus';
        const containedFullMain = [
            AssetKey.SMALL_DISH_fingerfood,
            AssetKey.SMALL_DISH_soup,
        ];
        const containedPattern = [
            Pattern.BARTENDER_Kleinfinger,
            Pattern.BARTENDER_UncleBen,
        ];
        const toReroll = Constants._multiRerollTavern.food
            .map((dish) => dish.name)
            .filter((entry, index) => index > 0);
        const methodlessObjects = Cloner.deepWritableCopy({
            partialRequest,
            toReroll,
            unrerolledName,
            addedByReroll,
            containedFullMain,
            containedPattern,
        });
        return { ...methodlessObjects, keys, pattern };
    }
    private static _patterns = [Pattern.BARTENDER_Kleinfinger];
    public static patterns() {
        return Cloner.deepWritableCopy(Constants._patterns);
    }
    private static _patternAdd: DeepReadonly<PatternChange> = {
        isAbout: WeServe.impressions,
        newPatterns: Constants._patterns,
        type: 'Add',
    };
    public static patternAdd() {
        return Cloner.deepWritableCopy(Constants._patternAdd);
    }
    private static _patternDelete: DeepReadonly<PatternChange> = {
        isAbout: WeServe.impressions,
        oldPatterns: Constants._patterns,
        type: 'Delete',
    };
    public static patternDelete() {
        return Cloner.deepWritableCopy(Constants._patternDelete);
    }
    private static _keyChange = {
        main: [AssetKey.BARTENDER_knowledge],
        addition: [AssetKey.BARTENDER_opinion, AssetKey.BARTENDER_face],
    };
    private static _keyAdd: DeepReadonly<KeyChange> = {
        isAbout: WeServe.impressions,
        type: 'Add',
        newKeys: Constants._keyChange,
    };
    public static keyAdd() {
        return Cloner.deepWritableCopy(Constants._keyAdd);
    }
    private static _keyDelete: DeepReadonly<KeyChange> = {
        isAbout: WeServe.impressions,
        type: 'Delete',
        oldKeys: Constants._keyChange,
    };
    public static keyDelete() {
        return Cloner.deepWritableCopy(Constants._keyDelete);
    }

    private static _content: DeepReadonly<Content> = {
        food: [],
        drink: [
            {
                name: 'Red Wine',
                isAbout: WeServe.drinks,
                isUserMade: true,
                income: association.poor,
                category: Drinkable.wine,
                price: 10,
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
            },
            {
                name: 'Talks about power and responsibility',
                category: Noticable.bartender,
                universe: 'isUserMade',
                patterns: [Pattern.BARTENDER_UncleBen],
                keys: { main: [AssetKey.BARTENDER_actions], addition: [] },
            },
        ],
    };
    public static content() {
        return Cloner.deepWritableCopy(Constants._content);
    }
    private static universeForTests = {
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
        return new ContentCreator(Constants.universeForTests);
    }
}
