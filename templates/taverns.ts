import { association } from '../classes/association';
import { Noticable } from '../classes/idea/Noticable';
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
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        note: "Barbara was a Barbarian chieftain. After losing an eye and three fingers while fighting a Tyrannosaurus Rex, she decided to settle down and open a tavern. Well known for its variety of strong beers, Barbara's bar gets visited by numerous ferocious fighters from far away. Some of them come to take part in the legendary bar fights in Barbara's tavern, and if they are unlucky, Barbara is attending too...",
        boughtOffers: [],
        impressions: [
            {
                name: 'Barbarian woman with red Hair',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Experienced warrior, many respect her',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Carries a giant axe on her back',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Wears clothes made of dire wolf fur',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Boots are made of a tyrannosaurus rex she once fought',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Lost one eye and three fingers during the fight',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Half-naked barbarians',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Heavily armored warriors',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Drinking beer and mead from horns',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Excessive drinking and loud laughing',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'A bard at the bar passed out',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'The guests surrounding the bard are laughing',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'Heavy wooden tables',
                patterns: [],
                category: Noticable.furniture,
            },
            {
                name: 'Marks of axe slashes on the wall',
                patterns: [],
                category: Noticable.furniture,
            },
            {
                name: 'Head of tyrannosaurus rex hangs from ceiling ',
                patterns: [],
                category: Noticable.furniture,
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
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        note: 'When an Elvish ambassador comes to the Dwarvish capital, he usually gets invited to the Molthorium Mine, a nobel Dwarvish tavern. This masterwork of stone cutters is a symbol of the rich Dwarvish culture and craftsmanship. Marble columns decorated with beautiful, handcrafted details, cups made of the purest silver and a Dwarvish beer which even the gods could not reject: Molthorium beer. It is malty like autumn, cosy like winter, joyful like summer and refreshing like spring. Only Dwarvish expertise can make a beer of such quality.',
        boughtOffers: [],
        impressions: [
            {
                name: 'Long silver beard',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Friendly dwarve',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Perfectionist when it comes to beer',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Wealthy clothes',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Mostly Dwarvish or Gnomish',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Drink beer from silver cups',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Mostly ordering beer from Molthorium brand',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'The royal masons discuss the defenses of the Dwarvish capital',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'A group of noble elves is lead to a VIP-Lounge',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'A band of bards plays pub music',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'Marble columns with handcrafted details',
                patterns: [],
                category: Noticable.furniture,
            },
            {
                name: 'Mahagony tables',
                patterns: [],
                category: Noticable.furniture,
            },
            {
                name: 'A giant portrait of the Dwarvish royal family on the wall',
                patterns: [],
                category: Noticable.furniture,
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
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        note: 'The Drowning Rat is a tavern which landlubbers normally avoid. Rumors have it that this location is filled with smugglers, pirates and other untrustworthy sailors. However, between the bitter ale and the harsh rum you may also find ferocious captains who fear neither tides nor kraken. Their crew may sail you to any island you desire, IF you can provide enough gold.',
        boughtOffers: [],
        impressions: [
            {
                name: 'Slim, old man with grey hair and eye-patch',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Gruff towards unkown costumers',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Snake tattoe on his neck',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Look a bit threatening',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Many wear sabers around their belt',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Silent, unfriendly atmosphere',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Turn silent when you walk by',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'A sailor spits on the ground',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'A captain drinks rum at the bar',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'Scruffy chairs',
                patterns: [],
                category: Noticable.furniture,
            },
            {
                name: 'Some tables have holes',
                patterns: [],
                category: Noticable.furniture,
            },
            {
                name: 'Smell of cheap rum and ale',
                patterns: [],
                category: Noticable.furniture,
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
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        note: 'The Foxy Gold Nymph is a high class tavern in the capital city, full of beautiful servants wrapped in revealing garments. The prices are expensiv, but the quality of erotic services and exotic beverages is absolute world class. Soon, a chauvinistic prince will celebrate his bachelor party right here in these halls, and the guest list for this mix of orgy and banquette is extremely exclusive.',
        boughtOffers: [],
        impressions: [
            {
                name: 'Half-naked half elve',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Witty and entertaining',
                patterns: [],
                category: Noticable.bartender,
            },
            {
                name: 'Slim and alluring',
                patterns: [],
                category: Noticable.bartender,
            },

            {
                name: 'Decadent meals with beautiful servants on their laps',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Drink expensive wines and eat exotic fruits',
                patterns: [],
                category: Noticable.averageCustomer,
            },
            {
                name: 'Careless, tipsy and lustful',
                patterns: [],
                category: Noticable.averageCustomer,
            },

            {
                name: 'A halfling eats grapes from the hand of a tiefling servant',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'A married gnome couple seduces a merchant',
                patterns: [],
                category: Noticable.someCustomers,
            },
            {
                name: 'A bishop comes out of the VIP-lounge',
                patterns: [],
                category: Noticable.someCustomers,
            },

            {
                name: 'Chairs padded with soft velvet',
                patterns: [],
                category: Noticable.furniture,
            },
            {
                name: 'Golden cups and silken napkins',
                patterns: [],
                category: Noticable.furniture,
            },
            {
                name: 'An elf sings on the stage',
                patterns: [],
                category: Noticable.furniture,
            },
        ],
    },
];
