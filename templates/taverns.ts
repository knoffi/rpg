import { association } from '../classes/association';
import { Noticable } from '../classes/ImpressionIdea';
import { MinimalTavernData } from '../mainNavigator/TavernData';
import { standardBasePrice } from '../scenes/menuScene/basePrice';

type tavernMinData = MinimalTavernData & {
    key: string;
    note: string;
}; /*{
    key: string;
    name: string;
    fitting:{fits: association[];
    drinks: Offer[];
    dishes: Offer[];
    prices: BasePrice;
    note: string;
}*/

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
        note:
            "Barbara was a Barbarian chieftain. After losing an eye and three fingers while fighting a Tyrannosaurus Rex, she decided to settle down and open a tavern. Well known for its variety of strong beers, Barbara's bar gets visited by numerous ferocious fighters from far away. Some of them come to take part in the legendary bar fights in Barbara's tavern, and if they are unlucky, Barbara is attending too...",
        boughtOffers: [],
        impressions: [
            {
                name: 'Barbarian Woman with Red Hair',
                category: Noticable.bartender,
            },
            {
                name: 'Experienced Warrior, many respect her',
                category: Noticable.bartender,
            },
            {
                name: 'Carries a Giant Axe on her Back',
                category: Noticable.bartender,
            },
            {
                name: 'Wears Clothes made of Dire Wolf Fur',
                category: Noticable.bartender,
            },
            {
                name: 'Boots are made of a Tyrannosaurus Rex she once fought',
                category: Noticable.bartender,
            },
            {
                name: 'Lost One Eye and Three Fingers during the fight',
                category: Noticable.bartender,
            },
            {
                name: 'Half-Naked Barbarians',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Heavily Armored Warriors',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Drinking Beer and Mead from Horns',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Excessive Drinking and Loud Laughing',
                category: Noticable.averageCustomer,
            },
            {
                name: 'A Bard at the Bar passes out',
                category: Noticable.someCustomers,
            },
            {
                name: 'The Guests surrounding him laugh',
                category: Noticable.someCustomers,
            },
            { name: 'Heavy Wooden Tables', category: Noticable.furniture },
            {
                name: 'Marks of Axe Slashes on the Wall',
                category: Noticable.furniture,
            },
            {
                name: 'Head of Tyrannosaurus Rex hangs from Ceiling ',
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
        note:
            'When an Elvish ambassador comes to the Dwarvish capital, he usually gets invited to the Molthorium Mine, a nobel Dwarvish tavern. This masterwork of stone cutters is a symbol of the rich Dwarvish culture and craftsmanship. Marble columns decorated with beautiful, handcrafted details, cups made of the purest silver and a Dwarvish beer which even the gods could not reject: Molthorium beer. It is malty like autumn, cosy like winter, vitalizing like summer and refreshing like spring. Not even the Elves can make a beer of this quality.',
        boughtOffers: [],
        impressions: [
            { name: 'Long Silver Beard', category: Noticable.bartender },
            { name: 'Friendly Dwarve', category: Noticable.bartender },
            {
                name: 'Perfectionist when it comes to Beer',
                category: Noticable.bartender,
            },
            { name: 'Wealthy Clothes', category: Noticable.averageCustomer },
            {
                name: 'Mostly Dwarvish or Gnomish',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Drink Beer from Silver Cups',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Mostly ordering Beer from Molthorium Brand',
                category: Noticable.averageCustomer,
            },
            {
                name:
                    'The Royal Masons discuss the Defenses of the Dwarvish Capital',
                category: Noticable.someCustomers,
            },
            {
                name: 'A group of Noble Elves is lead to a VIP-Lounge',
                category: Noticable.someCustomers,
            },
            {
                name: 'A Band of Bards plays Pub Music',
                category: Noticable.someCustomers,
            },
            {
                name: 'Marble Columns with Handcrafted Details',
                category: Noticable.furniture,
            },
            { name: 'Mahagony Tables', category: Noticable.furniture },
            {
                name:
                    'A Giant Portrait of the Dwarvish Royal Family on the Wall',
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
        note:
            'The Drowning Rat is a tavern which landlubbers normally avoid. Rumors have it that this location is filled with smugglers, pirates and other untrustworthy sailors. However, between the bitter ale and the harsh rum you may also find ferocious captains who fear neither tides nor kraken. Their crew may sail you to any island you desire, IF you can provide enough gold.',
        boughtOffers: [],
        impressions: [
            {
                name: 'Slim, old Man with Grey Hair and Eye-Patch',
                category: Noticable.bartender,
            },
            {
                name: 'Gruff towards Unkown Costumers',
                category: Noticable.bartender,
            },
            { name: 'Snake Tattoe on his Neck', category: Noticable.bartender },
            {
                name: 'Look a bit Threatening',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Many wear Sabers around their Belt',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Silent, Unfriendly Atmosphere',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Turn Silent when You Walk by',
                category: Noticable.someCustomers,
            },
            {
                name: 'A Sailor Spits on the Ground',
                category: Noticable.someCustomers,
            },
            {
                name: 'A Captain drinks Rum at the Bar',
                category: Noticable.someCustomers,
            },
            { name: 'Scruffy Chairs', category: Noticable.furniture },
            { name: 'Some Tables have Holes', category: Noticable.furniture },
            {
                name: 'Smell of Cheap Rum and Ale',
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
        note:
            'The Foxy Gold Nymph is a high class tavern in the capital city, full of beautiful servants wrapped in revealing garments. The prices are expensiv, but the quality of erotic services and exotic beverages is absolute world class. Soon, a chauvinistic prince will celebrate his bachelor party right here in these halls, and the guest list for this mix of orgy and banquette is extremely exclusive.',
        boughtOffers: [],
        impressions: [
            { name: 'Half-Naked Half Elve', category: Noticable.bartender },
            { name: 'Witty and Entertaining', category: Noticable.bartender },
            { name: 'Slim and Alluring', category: Noticable.bartender },

            {
                name: 'Decadent Meals with Beautiful Servants on their Laps',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Drink Expensive Wines and eat Exotic Fruits',
                category: Noticable.averageCustomer,
            },
            {
                name: 'Careless, Tipsy and Lustful',
                category: Noticable.averageCustomer,
            },

            {
                name:
                    'A Halfling eats Grapes from the Hand of A Tiefling Servant',
                category: Noticable.someCustomers,
            },
            {
                name: 'A Male and a Female Gnome Seduce a Merchant',
                category: Noticable.someCustomers,
            },
            {
                name: 'A Bishop comes out of the VIP-Lounge',
                category: Noticable.someCustomers,
            },

            {
                name: 'Chairs Padded with Soft Velvet',
                category: Noticable.furniture,
            },
            {
                name: 'Golden Cups and Silken Napkins',
                category: Noticable.furniture,
            },
            {
                name: 'An Elve sings on the Stage',
                category: Noticable.furniture,
            },
        ],
    },
];
