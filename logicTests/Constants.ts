import { association } from '../classes/association';
import {
    ContentCreator,
    CreationRequest,
} from '../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { KeyChange } from '../classes/keyHandler/KeyHandlingTypes';
import { PatternChange } from '../classes/patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Content } from '../mainNavigator/Content';
import { Offer } from '../scenes/menuScene/Offer';
import { Impression } from '../scenes/questScene/impressions/Impression';
import { Cloner, DeepReadonly } from './Cloner';

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
    private static _rerollRequest: DeepReadonly<CreationRequest> = {
        ...Constants._impressionRequest,
        oldAssets: [Constants._oldImpression],
    };
    public static rerollRequest() {
        return Cloner.deepWritableCopy(Constants._rerollRequest);
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
