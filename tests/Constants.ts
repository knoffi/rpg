import { DeepReadonly } from 'ts-essentials';
import { association } from '../classes/association';
import { ContentCreator } from '../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Offer } from '../scenes/menuScene/Offer';
import { Impression } from '../scenes/questScene/impressions/Impression';

export class Constants {
    public static foodRequest = {
        isAbout: WeServe.food,
        category: Eatable.mainDish,
        fullFirstKeys: [] as AssetKey[],
        fullSecondKeys: [] as AssetKey[],
        oldAssets: [] as Offer[],
    } as const;
    public static drinkRequest = {
        isAbout: WeServe.drinks,
        category: Drinkable.wine,
        fullFirstKeys: [AssetKey.WINE_mead] as AssetKey[],
        fullSecondKeys: [] as AssetKey[],
        oldAssets: [] as Offer[],
    } as const;
    public static impressionRequest = {
        isAbout: WeServe.impressions,
        category: Noticable.bartender,
        patterns: [Pattern.BARTENDER_UncleBen] as Pattern[],
        fullFirstKeys: [] as AssetKey[],
        fullSecondKeys: [] as AssetKey[],
        oldAssets: [] as Impression[],
    } as const;
    private static patterns = [Pattern.BARTENDER_Kleinfinger] as const;
    public static patternAdd = {
        isAbout: WeServe.impressions,
        newPatterns: Constants.patterns,
        type: 'Add',
    } as const;
    public static patternDelete = {
        isAbout: WeServe.impressions,
        oldPatterns: Constants.patterns,
        type: 'Delete',
    } as const;
    private static keyChange = {
        main: [AssetKey.BARTENDER_knowledge],
        addition: [AssetKey.BARTENDER_opinion, AssetKey.BARTENDER_face],
    } as const;
    public static keyAdd = {
        isAbout: WeServe.impressions,
        type: 'Add' as const,
        newKeys: Constants.keyChange,
    } as const;
    public static keyDelete = {
        isAbout: WeServe.impressions,
        type: 'Delete' as const,
        oldKeys: Constants.keyChange,
    } as const;

    public static content = {
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
    } as const;
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
    } as const;
    public static creator: DeepReadonly<ContentCreator> = new ContentCreator(
        Constants.universeForTests
    );
}
