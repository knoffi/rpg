import { association } from '../../../classes/association';
import { Drinkable, TavernProduct } from '../../../classes/TavernProduct';

const a = association;
const beerEnum = Drinkable.beer;

export const beers = [
    // // new TavernProduct('Black-Bearded Brew', 5, [a.haven, a.poor], beerEnum),
    // new TavernProduct(
    //     "Flint's Dark Lager",
    //     4,
    //     [a.haven, a.thief, a.poor],
    //     beerEnum
    // ),
    // // new TavernProduct("Blacksmith's Black Beer", 16, [a.modest], beerEnum),
    // //new TavernProduct('Ale For Sale', 1, [a.poor], beerEnum),
    // new TavernProduct(
    //     "Leprechaun's Delighted Lager",
    //     38,
    //     [a.wealthy],
    //     beerEnum
    // ),
    // new TavernProduct("Aiven's Golden Malt", 58, [a.rich], beerEnum),
    // // new TavernProduct(
    // //     "Stoertebecker's Last Wish",
    // //     16,
    // //     [a.haven, a.modest, a.thief],
    // //     beerEnum
    // // ),
    // // new TavernProduct("The Kraken's Ale", 14, [a.haven, a.modest], beerEnum),
    // // new TavernProduct("Stanley's Last", 2, [a.poor, a.city], beerEnum),
    // new TavernProduct('Diamond Molderoy', 150, [a.rich, a.elf], beerEnum),
    // new TavernProduct('Platinum Molderoy', 100, [a.rich, a.human], beerEnum),
    // new TavernProduct('Golden Molderoy', 75, [a.rich, a.human], beerEnum),
    // new TavernProduct('Silver Molderoy', 60, [a.halfling, a.rich], beerEnum),
    // new TavernProduct('Copper Molderoy', 38, [a.halfling, a.wealthy], beerEnum),
    // new TavernProduct(
    //     "Sir Weatherstone's Loveliest",
    //     80,
    //     [a.rich, a.dwarf],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     "Sir Weatherstone's Best",
    //     80,
    //     [a.rich, a.gnome],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     "Sir Weatherstone's Finest",
    //     105,
    //     [a.rich, a.dwarf],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     "Sir Weatherstone's Highest",
    //     125,
    //     [a.rich, a.gnome],
    //     beerEnum
    // ),
    // new TavernProduct('The Whacky Moist', 9, [a.poor, a.halfling], beerEnum),
    new TavernProduct('Cinnamon Beer', 38, [a.wizard, a.wealthy], beerEnum),
    new TavernProduct(
        "Hurly Dursley's Lager",
        9,
        [a.halfling, a.modest],
        beerEnum
    ),
    new TavernProduct('Kimchi Beer', 40, [a.wizard, a.wealthy], beerEnum),
    // new TavernProduct(
    //     "Baselbruck's Storm Ale",
    //     19,
    //     [a.halfling, a.haven, a.modest],
    //     beerEnum
    // ),
    new TavernProduct(
        "Baselbruck's Beany Brew",
        24,
        [a.village, a.halfling, a.modest],
        beerEnum
    ),
    // new TavernProduct(
    //     "Baselbruck's Lager",
    //     25,
    //     [a.modest, a.halfling, a.city],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     "Baselbruck's Export",
    //     26,
    //     [a.modest, a.tropical],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     "Baselbruck's Black Beer",
    //     29,
    //     [a.underdark, a.modest],
    //     beerEnum
    // ),
    new TavernProduct(
        'Wollys Wheat Beer',
        12,
        [a.village, a.halfling, a.modest],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Divine Malt",
        33,
        [a.wealthy, a.cleric, a.city],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Virtuous Malt",
        29,
        [a.wealthy, a.village, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Righteous Malt",
        32,
        [a.wealthy, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Peaceful Malt",
        26,
        [a.forest, a.wealthy, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Rejoicing Malt",
        30,
        [a.haven, a.wealthy, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Merciful Malt",
        24,
        [a.tropical, a.wealthy, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Honest Malt",
        28,
        [a.wealthy, a.gnome, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Honorable Malt",
        29,
        [a.wealthy, a.knight],
        beerEnum
    ),
    new TavernProduct(
        'Jurassic Marshmallow',
        34,
        [a.gnome, a.city, a.wealthy],
        beerEnum
    ),
    new TavernProduct(
        "Oscar's Sip of Honor",
        28,
        [a.soldier, a.knight, a.wealthy],
        beerEnum
    ),
    // new TavernProduct(
    //     "Oscar's Sip of Glory",
    //     29,
    //     [a.soldier, a.wealthy],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     "Oscar's Sip of Joy",
    //     32,
    //     [a.wealthy, a.prostitute],
    //     beerEnum
    // ),
    new TavernProduct(
        "Oscar's Sip of Bravery",
        20,
        [a.modest, a.adventurer],
        beerEnum
    ),
    new TavernProduct(
        'Sixth Sense Sip',
        24,
        [a.modest, a.drow, a.assasine],
        beerEnum
    ),
    new TavernProduct(
        'Blindspot Beer',
        35,
        [a.wealthy, a.drow, a.assasine],
        beerEnum
    ),
    // new TavernProduct(
    //     'Ambush Ale',
    //     18,
    //     [a.modest, a.drow, a.assasine],
    //     beerEnum
    // ),
    new TavernProduct(
        "Anxa's Silent Brew",
        35,
        [a.drow, a.assasine, a.wealthy],
        beerEnum
    ),
    new TavernProduct(
        "Anxa's Deadly Brew",
        32,
        [a.drow, a.assasine, a.wealthy],
        beerEnum
    ),
    // new TavernProduct(
    //     "Spidermother's Midnight Ale",
    //     85,
    //     [a.drow, a.rich],
    //     beerEnum
    // ),
    new TavernProduct(
        "Spidermother's Royal Lager",
        82,
        [a.drow, a.rich],
        beerEnum
    ),
    // new TavernProduct(
    //     "Spidermother's Rich Porter",
    //     80,
    //     [a.drow, a.rich],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     "Spidermother's Imperial Stout",
    //     89,
    //     [a.drow, a.rich],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     'Molthorium Lager',
    //     100,
    //     [a.dwarf, a.rich, a.city],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     'Molthorium Bock Beer',
    //     100,
    //     [a.dwarf, a.rich, a.city],
    //     beerEnum
    // ),
    // new TavernProduct(
    //     'Molthorium Umber Ale',
    //     90,
    //     [a.dwarf, a.rich, a.underdark],
    //     beerEnum
    // ),
    // This should be a Desperado-like "mix beer" with an accidic and fruity flavor
    new TavernProduct(
        'Cerveza of the South',
        5,
        [a.poor, a.adventurer, a.haven],
        beerEnum
    ),
];
