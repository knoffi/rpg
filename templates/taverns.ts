import { association } from '../classes/association';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { WeServe } from '../editNavigator/WeServe';
import { MinimalTavernData } from '../mainNavigator/TavernData';
import { standardBasePrice } from '../scenes/menuScene/basePrice';

type tavernMinData = MinimalTavernData & {
    key: string;
    note: string;
};

export const taverns: tavernMinData[] = [
    {
        key: 'barbar_worker',
        name: "Barbara's Barbaric Beer Bar",
        fitting: {
            land: association.forest,
            class: association.barbarian,
            income: association.modest,
            powerFit: association.barbarian,
        },
        [WeServe.drinks]: [],
        [WeServe.food]: [],
        prices: standardBasePrice,
        note: "Barbara was a Barbarian chieftain. After losing an eye and three fingers while fighting a Tyrannosaurus Rex, she decided to settle down and open a tavern. Well known for its variety of strong beers, Barbara's bar gets visited by numerous ferocious fighters from far away. Some of them come to take part in the legendary bar fights in Barbara's tavern, and if they are unlucky, Barbara is attending too...",
        boughtOffers: [],
        [WeServe.impressions]: [
            {
                name: 'Barbarian woman with red Hair',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_appearace], addition: [] },
            },
            {
                name: 'Experienced warrior, many respect her',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_knowledge], addition: [] },
            },
            {
                name: 'Carries a giant axe on her back',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_accessoires], addition: [] },
            },
            {
                name: 'Wears clothes made of dire wolf fur',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_accessoires], addition: [] },
            },
            {
                name: 'Boots are made of a tyrannosaurus rex she once fought',
                patterns: [],
                category: Noticable.bartender,
                keys: {
                    main: [
                        AssetKey.BARTENDER_accessoires,
                        AssetKey.BARTENDER_knowledge,
                    ],
                    addition: [],
                },
            },
            {
                name: 'Lost one eye and three fingers during the fight',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_accessoires], addition: [] },
            },
            {
                name: 'Half-naked barbarians',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [AssetKey.AVERAGE_CUSTOMER_behavior],
                    addition: [],
                },
            },
            {
                name: 'Heavily armored warriors',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [AssetKey.AVERAGE_CUSTOMER_behavior],
                    addition: [],
                },
            },
            {
                name: 'Drinking beer and mead from horns',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [AssetKey.AVERAGE_CUSTOMER_drinking],
                    addition: [],
                },
            },
            {
                name: 'Excessive drinking and loud laughing',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [AssetKey.AVERAGE_CUSTOMER_behavior],
                    addition: [],
                },
            },
            {
                name: 'A bard at the bar passed out',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },
            {
                name: 'The guests surrounding the bard are laughing',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },
            {
                name: 'Heavy wooden tables',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [AssetKey.FURNITURE_tables], addition: [] },
            },
            {
                name: 'Marks of axe slashes on the wall',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [], addition: [] },
            },
            {
                name: 'Head of tyrannosaurus rex hangs from ceiling ',
                patterns: [],
                category: Noticable.furniture,
                keys: {
                    main: [AssetKey.FURNITURE_creatureTrophies],
                    addition: [],
                },
            },
        ],
    },
    {
        key: 'dwarf_rich',
        name: 'Molthorium Mine',
        fitting: {
            land: association.mountain,
            race: association.dwarf,
            income: association.rich,
            class: association.knight,
            powerFit: association.dwarf,
        },
        [WeServe.drinks]: [],
        [WeServe.food]: [],
        prices: standardBasePrice,
        note: 'When an Elvish ambassador comes to the Dwarvish capital, he usually gets invited to the Molthorium Mine, a nobel Dwarvish tavern. This masterwork of stone cutters is a symbol of the rich Dwarvish culture and craftsmanship. Marble columns decorated with beautiful, handcrafted details, cups made of the purest silver and a Dwarvish beer which even the gods could not reject: Molthorium beer. It is malty like autumn, cosy like winter, joyful like summer and refreshing like spring. Only Dwarvish expertise can make a beer of such quality.',
        boughtOffers: [],
        [WeServe.impressions]: [
            {
                name: 'Long silver beard',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_faceDetails], addition: [] },
            },
            {
                name: 'Friendly dwarve',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_charisma], addition: [] },
            },
            {
                name: 'Perfectionist when it comes to beer',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_knowledge], addition: [] },
            },
            {
                name: 'Wealthy clothes',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: { main: [AssetKey.BARTENDER_appearace], addition: [] },
            },
            {
                name: 'Mostly Dwarvish or Gnomish',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: { main: [], addition: [] },
            },
            {
                name: 'Drink beer from silver cups',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [
                        AssetKey.AVERAGE_CUSTOMER_drinking,
                        AssetKey.FURNITURE_drinkHolder,
                    ],
                    addition: [],
                },
            },
            {
                name: 'Mostly ordering beer from Molthorium brand',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [AssetKey.AVERAGE_CUSTOMER_drinking],
                    addition: [],
                },
            },
            {
                name: 'The royal masons discuss the defenses of the Dwarvish capital',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },
            {
                name: 'A group of noble elves is lead to a VIP-Lounge',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },
            {
                name: 'A band of bards plays pub music',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },
            {
                name: 'Marble columns with handcrafted details',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [], addition: [] },
            },
            {
                name: 'Mahagony tables',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [AssetKey.FURNITURE_tables], addition: [] },
            },
            {
                name: 'A giant portrait of the Dwarvish royal family on the wall',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [AssetKey.FURNITURE_barDeco], addition: [] },
            },
        ],
    },
    {
        key: 'haven_criminal_poor',
        name: 'Drowning Rat',
        fitting: {
            land: association.haven,
            special: association.thief,
            income: association.poor,
            powerFit: association.haven,
        },
        [WeServe.drinks]: [],
        [WeServe.food]: [],
        prices: standardBasePrice,
        note: 'The Drowning Rat is a tavern which landlubbers normally avoid. Rumors have it that this location is filled with smugglers, pirates and other untrustworthy sailors. However, between the bitter ale and the harsh rum you may also find ferocious captains who fear neither tides nor kraken. Their crew may sail you to any island you desire, IF you can provide enough gold.',
        boughtOffers: [],
        [WeServe.impressions]: [
            {
                name: 'Slim, old man with grey hair and eye-patch',
                patterns: [],
                category: Noticable.bartender,
                keys: {
                    main: [
                        AssetKey.BARTENDER_accessoires,
                        AssetKey.BARTENDER_body,
                    ],
                    addition: [],
                },
            },
            {
                name: 'Gruff towards unkown costumers',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_opinion], addition: [] },
            },
            {
                name: 'Snake tattoe on his neck',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_accessoires], addition: [] },
            },
            {
                name: 'Seem quite threatening',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [AssetKey.AVERAGE_CUSTOMER_behavior],
                    addition: [],
                },
            },
            {
                name: 'Many wear sabers around their belt',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: { main: [], addition: [] },
            },
            {
                name: 'Silent, unfriendly atmosphere',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: { main: [], addition: [] },
            },
            {
                name: 'Turn silent when you walk by',
                patterns: [],
                category: Noticable.someCustomers,
                keys: {
                    main: [AssetKey.AVERAGE_CUSTOMER_behavior],
                    addition: [],
                },
            },
            {
                name: 'A sailor spits on the ground',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },
            {
                name: 'A captain drinks rum at the bar',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },
            {
                name: 'Scruffy chairs',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [AssetKey.FURNITURE_tables], addition: [] },
            },
            {
                name: 'Some tables have holes',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [AssetKey.FURNITURE_tables], addition: [] },
            },
            {
                name: 'Smell of cheap rum and ale',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [], addition: [] },
            },
        ],
    },
    {
        key: 'brothel_city_rich',
        name: 'Foxy Gold Nymph',
        fitting: {
            land: association.city,
            special: association.prostitute,
            income: association.rich,
            powerFit: association.rich,
        },
        [WeServe.drinks]: [],
        [WeServe.food]: [],
        prices: standardBasePrice,
        note: 'The Foxy Gold Nymph is a high class tavern in the capital city, full of beautiful servants wrapped in revealing garments. The prices are expensiv, but the quality of erotic services and exotic beverages is absolute world class. Soon, a chauvinistic prince will celebrate his bachelor party right here in these halls, and the guest list for this mix of orgy and banquette is extremely exclusive.',
        boughtOffers: [],
        [WeServe.impressions]: [
            {
                name: 'Half-naked half elve',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_appearace], addition: [] },
            },
            {
                name: 'Witty and entertaining',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_charisma], addition: [] },
            },
            {
                name: 'Slim and alluring',
                patterns: [],
                category: Noticable.bartender,
                keys: { main: [AssetKey.BARTENDER_body], addition: [] },
            },

            {
                name: 'Decadent meals with beautiful servants on their laps',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [AssetKey.AVERAGE_CUSTOMER_eating],
                    addition: [],
                },
            },
            {
                name: 'Drink expensive wines and eat exotic fruits',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [
                        AssetKey.AVERAGE_CUSTOMER_drinking,
                        AssetKey.AVERAGE_CUSTOMER_eating,
                    ],
                    addition: [],
                },
            },
            {
                name: 'Careless, tipsy and lustful',
                patterns: [],
                category: Noticable.averageCustomer,
                keys: {
                    main: [AssetKey.AVERAGE_CUSTOMER_behavior],
                    addition: [],
                },
            },

            {
                name: 'A halfling eats grapes from the hand of a tiefling servant',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },
            {
                name: 'A married gnome couple seduces a merchant',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },
            {
                name: 'A bishop comes out of the VIP-lounge',
                patterns: [],
                category: Noticable.someCustomers,
                keys: { main: [], addition: [] },
            },

            {
                name: 'Chairs padded with soft velvet',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [AssetKey.FURNITURE_tables], addition: [] },
            },
            {
                name: 'Golden cups and silken napkins',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [AssetKey.FURNITURE_drinkHolder], addition: [] },
            },
            {
                name: 'An elf sings on the stage',
                patterns: [],
                category: Noticable.furniture,
                keys: { main: [], addition: [] },
            },
        ],
    },
];
