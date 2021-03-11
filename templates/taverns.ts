import { association } from '../classes/association';
import { BasePrice, standardBasePrice } from '../scenes/menuScene/basePrice';
import { Offer } from '../scenes/menuScene/menuEnums';

interface tavernMinData {
    key: string;
    name: string;
    fits: association[];
    drinks: Offer[];
    dishes: Offer[];
    basePrice: BasePrice;
    note: string;
}

export const taverns: tavernMinData[] = [
    {
        key: 'default',
        name: 'Nameless Tavern',
        fits: [],
        drinks: [],
        dishes: [],
        basePrice: standardBasePrice,
        note: 'An empty template.',
    },
    {
        key: 'barbar_worker',
        name: "Barbara's Barbaric Beer Bar",
        fits: [association.barbarian, association.modest],
        drinks: [],
        dishes: [],
        basePrice: standardBasePrice,
        note:
            "Barbara was a Barbarian chieftain. After losing an eye and three fingers while fighting a Tyrannosaurus Rex, she decided to settle down and open a tavern. Well known for its variety of strong beers, Barbara's bar gets visited by numerous ferocious fighters from far away. Some of them come to take part in the legendary bar fights in Barbara's tavern, and if they are unlucky, Barbara is attending too...",
    },
    {
        key: 'dwarf_rich',
        name: 'Molthorium Mine',
        fits: [
            association.dwarf,
            association.knight,
            association.rich,
            association.city,
        ],
        drinks: [],
        dishes: [],
        basePrice: standardBasePrice,
        note:
            'When an Elvish ambassador comes to the Dwarvish capital, he usually gets invited to the Molthorium Mine, a nobel Dwarvish tavern. This masterwork of stone cutters is a symbol of the rich Dwarvish culture and craftsmanship. Marble columns decorated with beautiful, handcrafted details, cups made of the purest silver and a Dwarvish beer which even the gods could not reject: Molthorium beer. It is malty like autumn, cosy like winter, vitalizing like summer and refreshing like spring. Not even the Elves can make a beer of this quality.',
    },
    {
        key: 'haven_criminal_poor',
        name: 'Drowning Rat',
        fits: [association.poor, association.thief, association.haven],
        drinks: [],
        dishes: [],
        basePrice: standardBasePrice,
        note:
            'The Drowning Rat is a tavern which landlubbers normally avoid. Rumors have it that this location is filled with smugglers, pirates and other untrustworthy sailors. However, between the bitter ale and the harsh rum you may also find ferocious captains who fear neither tides nor kraken. Their crew may sail you to any island you desire, IF you can provide enough gold.',
    },
    {
        key: 'brothel_city_rich',
        name: 'Foxy Gold Nymph',
        fits: [association.rich, association.prostitute, association.city],
        drinks: [],
        dishes: [],
        basePrice: standardBasePrice,
        note:
            'The Foxy Gold Nymph is a high class tavern in the capital city, full of beautiful servants wrapped in revealing garments. The prices are expensiv, but the quality of erotic services and exotic beverages is absolute world class. Soon, a chauvinistic prince will celebrate his bachelor party right here in these halls, and the guest list for this mix of orgy and banquette is extremely exclusive.',
    },
];
