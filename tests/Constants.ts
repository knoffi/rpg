import { DeepReadonly } from 'ts-essentials';
import { association } from '../classes/association';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { KeyChange, Keys } from '../classes/keyHandler/KeyHandlingTypes';
import { PatternChange } from '../classes/patternHandler/PatternHandler';
import { Drinkable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { DeeplyReadonlyContent } from '../mainNavigator/Content';

export class Constants {
    private static patterns: DeepReadonly<Pattern[]> = [
        Pattern.BARTENDER_Kleinfinger,
    ];
    public static patternAdd: DeepReadonly<PatternChange> = {
        isAbout: WeServe.impressions,
        newPatterns: Constants.patterns,
        type: 'Add',
    };
    public static patternDelete: DeepReadonly<PatternChange> = {
        isAbout: WeServe.impressions,
        oldPatterns: Constants.patterns,
        type: 'Delete',
    };
    private static keyChange: DeepReadonly<Keys> = {
        main: [AssetKey.BARTENDER_knowledge],
        addition: [AssetKey.BARTENDER_opinion, AssetKey.BARTENDER_face],
    };
    public static keyAdd: DeepReadonly<KeyChange> = {
        isAbout: WeServe.impressions,
        type: 'Add' as const,
        newKeys: Constants.keyChange,
    };
    public static keyDelete: DeepReadonly<KeyChange> = {
        isAbout: WeServe.impressions,
        type: 'Delete' as const,
        oldKeys: Constants.keyChange,
    };

    public static content: DeeplyReadonlyContent = {
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
}
