import { association } from '../classes/association';
import { Noticable } from '../classes/ImpressionIdea';
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
            fits: [association.barbarian, association.modest],
            misfits: [],
        },
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        note: "Barbara was a Barbarian chieftain. After losing an eye and three fingers while fighting a Tyrannosaurus Rex, she decided to settle down and open a tavern. Well known for its variety of strong beers, Barbara's bar gets visited by numerous ferocious fighters from far away. Some of them come to take part in the legendary bar fights in Barbara's tavern, and if they are unlucky, Barbara is attending too...",
        boughtOffers: [],
        impressions: [
            {
                name: 'Barbarian woman with red Hair',
                category: Noticable.bartender,
            },
            {
                name: 'Experienced warrior, many respect her',
                category: Noticable.bartender,
            },
            {
                name: 'Carries a giant axe on her back',
                category: Noticable.bartender,
            },
            {
                name: 'Wears clothes made of dire wolf fur',
                category: Noticable.bartender,
            },
            {
                name: 'Boots are made of a tyrannosaurus rex she once fought',
                category: Noticable.bartender,
            },
            {
                name: 'Lost one eye and three fingers during the fight',
                category: Noticable.bartender,
            },
            {
                name: 'Half-naked barbarians',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Heavily armored warriors',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Drinking beer and mead from horns',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Excessive drinking and loud laughing',
                category: Noticable.averageCustomer,
            },
            {
                name: 'A bard at the bar passed out',
                category: Noticable.someCustomers,
            },
            {
                name: 'The guests surrounding the bard are laughing',
                category: Noticable.someCustomers,
            },
            { name: 'Heavy wooden tables', category: Noticable.furniture },
            {
                name: 'Marks of axe slashes on the wall',
                category: Noticable.furniture,
            },
            {
                name: 'Head of tyrannosaurus rex hangs from ceiling ',
                category: Noticable.furniture,
            },
        ],
    },
    {
        key: 'dwarf_rich',
        name: 'Molthorium Mine',
        fitting: {
            fits: [
                association.dwarf,
                association.knight,
                association.rich,
                association.city,
            ],
            misfits: [],
        },
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        note: 'When an Elvish ambassador comes to the Dwarvish capital, he usually gets invited to the Molthorium Mine, a nobel Dwarvish tavern. This masterwork of stone cutters is a symbol of the rich Dwarvish culture and craftsmanship. Marble columns decorated with beautiful, handcrafted details, cups made of the purest silver and a Dwarvish beer which even the gods could not reject: Molthorium beer. It is malty like autumn, cosy like winter, joyful like summer and refreshing like spring. Only Dwarvish expertise can make a beer of such quality.',
        boughtOffers: [],
        impressions: [
            { name: 'Long silver beard', category: Noticable.bartender },
            { name: 'Friendly dwarve', category: Noticable.bartender },
            {
                name: 'Perfectionist when it comes to beer',
                category: Noticable.bartender,
            },
            { name: 'Wealthy clothes', category: Noticable.averageCustomer },
            {
                name: 'Mostly Dwarvish or Gnomish',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Drink beer from silver cups',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Mostly ordering beer from Molthorium brand',
                category: Noticable.averageCustomer,
            },
            {
                name: 'The royal masons discuss the defenses of the Dwarvish capital',
                category: Noticable.someCustomers,
            },
            {
                name: 'A group of noble elves is lead to a VIP-Lounge',
                category: Noticable.someCustomers,
            },
            {
                name: 'A band of bards plays pub music',
                category: Noticable.someCustomers,
            },
            {
                name: 'Marble columns with handcrafted details',
                category: Noticable.furniture,
            },
            { name: 'Mahagony tables', category: Noticable.furniture },
            {
                name: 'A giant portrait of the Dwarvish royal family on the wall',
                category: Noticable.furniture,
            },
        ],
    },
    {
        key: 'haven_criminal_poor',
        name: 'Drowning Rat',
        fitting: {
            fits: [association.poor, association.thief, association.haven],
            misfits: [],
        },
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        note: 'The Drowning Rat is a tavern which landlubbers normally avoid. Rumors have it that this location is filled with smugglers, pirates and other untrustworthy sailors. However, between the bitter ale and the harsh rum you may also find ferocious captains who fear neither tides nor kraken. Their crew may sail you to any island you desire, IF you can provide enough gold.',
        boughtOffers: [],
        impressions: [
            {
                name: 'Slim, old man with grey hair and eye-patch',
                category: Noticable.bartender,
            },
            {
                name: 'Gruff towards unkown costumers',
                category: Noticable.bartender,
            },
            { name: 'Snake tattoe on his neck', category: Noticable.bartender },
            {
                name: 'Look a bit threatening',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Many wear sabers around their belt',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Silent, unfriendly atmosphere',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Turn silent when you walk by',
                category: Noticable.someCustomers,
            },
            {
                name: 'A sailor spits on the ground',
                category: Noticable.someCustomers,
            },
            {
                name: 'A captain drinks rum at the bar',
                category: Noticable.someCustomers,
            },
            { name: 'Scruffy chairs', category: Noticable.furniture },
            { name: 'Some tables have holes', category: Noticable.furniture },
            {
                name: 'Smell of cheap rum and ale',
                category: Noticable.furniture,
            },
        ],
    },
    {
        key: 'brothel_city_rich',
        name: 'Foxy Gold Nymph',
        fitting: {
            fits: [association.rich, association.prostitute, association.city],
            misfits: [],
        },
        drinks: [],
        dishes: [],
        prices: standardBasePrice,
        note: 'The Foxy Gold Nymph is a high class tavern in the capital city, full of beautiful servants wrapped in revealing garments. The prices are expensiv, but the quality of erotic services and exotic beverages is absolute world class. Soon, a chauvinistic prince will celebrate his bachelor party right here in these halls, and the guest list for this mix of orgy and banquette is extremely exclusive.',
        boughtOffers: [],
        impressions: [
            { name: 'Half-naked half elve', category: Noticable.bartender },
            { name: 'Witty and entertaining', category: Noticable.bartender },
            { name: 'Slim and alluring', category: Noticable.bartender },

            {
                name: 'Decadent meals with beautiful servants on their laps',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Drink expensive wines and eat exotic fruits',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Careless, tipsy and lustful',
                category: Noticable.averageCustomer,
            },

            {
                name: 'A halfling eats grapes from the hand of a tiefling servant',
                category: Noticable.someCustomers,
            },
            {
                name: 'A male and a female Gnome seduce a merchant',
                category: Noticable.someCustomers,
            },
            {
                name: 'A bishop comes out of the VIP-lounge',
                category: Noticable.someCustomers,
            },

            {
                name: 'Chairs padded with soft velvet',
                category: Noticable.furniture,
            },
            {
                name: 'Golden cups and silken Napkins',
                category: Noticable.furniture,
            },
            {
                name: 'An elf sings on the stage',
                category: Noticable.furniture,
            },
        ],
    },
];
