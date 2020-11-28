import { association } from '../../../classes/Adjectives';
import { drinkCategory, TavernProduct } from '../../../classes/TavernProduct';

const a = association;
const beerEnum = drinkCategory.beer;

export const beers = [
    new TavernProduct('Black-Bearded Brew', 5, [a.haven, a.poor], beerEnum),
    new TavernProduct(
        "Flint's Dark Lager",
        4,
        [a.haven, a.criminal, a.poor],
        beerEnum
    ),
    new TavernProduct("Blacksmith's Black Beer", 16, [a.worker], beerEnum),
    new TavernProduct('Ale For Sale', 1, [a.poor], beerEnum),
    new TavernProduct("Wesley's Wizards Whiz", 8, [a.poor], beerEnum),
    new TavernProduct(
        "Leprechaun's Delighted Lager",
        38,
        [a.sophisticated],
        beerEnum
    ),
    new TavernProduct("Aiven's Golden Malt", 58, [a.rich], beerEnum),
    new TavernProduct(
        "Stoertebecker's Last Wish",
        16,
        [a.haven, a.worker, a.criminal],
        beerEnum
    ),
    new TavernProduct("The Kraken's Ale", 14, [a.haven, a.worker], beerEnum),
    new TavernProduct("Stanley's Last", 2, [a.poor, a.city], beerEnum),
    new TavernProduct('Diamond Molderoy', 150, [a.rich, a.elf], beerEnum),
    new TavernProduct('Platinum Molderoy', 100, [a.rich, a.human], beerEnum),
    new TavernProduct('Golden Molderoy', 75, [a.rich, a.human], beerEnum),
    new TavernProduct('Silver Molderoy', 60, [a.halfling, a.rich], beerEnum),
    new TavernProduct(
        'Copper Molderoy',
        38,
        [a.halfling, a.sophisticated],
        beerEnum
    ),
    new TavernProduct(
        "Sir Weatherstone's Loveliest",
        80,
        [a.rich, a.dwarf],
        beerEnum
    ),
    new TavernProduct(
        "Sir Weatherstone's Best",
        80,
        [a.rich, a.gnome],
        beerEnum
    ),
    new TavernProduct(
        "Sir Weatherstone's Finest",
        105,
        [a.rich, a.dwarf],
        beerEnum
    ),
    new TavernProduct(
        "Sir Weatherstone's Highest",
        125,
        [a.rich, a.gnome],
        beerEnum
    ),
    new TavernProduct('The Whacky Moist', 12, [a.poor, a.halfling], beerEnum),
    new TavernProduct(
        'Cinnamon Beer',
        38,
        [a.wizard, a.sophisticated],
        beerEnum
    ),
    new TavernProduct(
        "Hurly Dursley's Lager",
        9,
        [a.halfling, a.worker],
        beerEnum
    ),
    new TavernProduct('Kimchi Beer', 40, [a.wizard, a.sophisticated], beerEnum),
    new TavernProduct(
        "Baselbruck's Storm Ale",
        19,
        [a.halfling, a.haven, a.worker],
        beerEnum
    ),
    new TavernProduct(
        "Baselbruck's Beany Brew",
        14,
        [a.village, a.halfling, a.worker],
        beerEnum
    ),
    new TavernProduct(
        "Baselbruck's Lager",
        15,
        [a.worker, a.halfling, a.city],
        beerEnum
    ),
    new TavernProduct(
        "Baselbruck's Export",
        16,
        [a.worker, a.tropical],
        beerEnum
    ),
    new TavernProduct(
        "Baselbruck's Black Beer",
        9,
        [a.underdark, a.worker],
        beerEnum
    ),
    new TavernProduct(
        'Wollys Wheat Beer',
        12,
        [a.village, a.halfling, a.worker],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Divine Malt",
        33,
        [a.sophisticated, a.cleric, a.city],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Virtuous Malt",
        29,
        [a.sophisticated, a.village, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Righteous Malt",
        32,
        [a.sophisticated, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Peaceful Malt",
        26,
        [a.forest, a.sophisticated, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Rejoicing Malt",
        30,
        [a.haven, a.sophisticated, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Merciful Malt",
        24,
        [a.tropical, a.sophisticated, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Honest Malt",
        28,
        [a.sophisticated, a.gnome, a.cleric],
        beerEnum
    ),
    new TavernProduct(
        "Aiven's Honorable Malt",
        29,
        [a.sophisticated, a.nobel],
        beerEnum
    ),
    new TavernProduct(
        'Jurassic Marshmallow',
        34,
        [a.gnome, a.city, a.sophisticated],
        beerEnum
    ),
    new TavernProduct(
        "Oscar's Sip of Honor",
        28,
        [a.dragonborn, a.nobel, a.sophisticated],
        beerEnum
    ),
    new TavernProduct(
        "Oscar's Sip of Glory",
        29,
        [a.dragonborn, a.sophisticated],
        beerEnum
    ),
    new TavernProduct(
        "Oscar's Sip of Joy",
        32,
        [a.sophisticated, a.prostitute],
        beerEnum
    ),
    new TavernProduct(
        "Oscar's Sip of Bravery",
        20,
        [a.worker, a.adventurer],
        beerEnum
    ),
    new TavernProduct(
        'Sixth Sense Sip',
        24,
        [a.worker, a.drow, a.evil],
        beerEnum
    ),
    new TavernProduct(
        'Blindspot Beer',
        35,
        [a.sophisticated, a.drow, a.evil],
        beerEnum
    ),
    new TavernProduct('Ambush Ale', 18, [a.worker, a.drow, a.evil], beerEnum),
    new TavernProduct(
        "Anxa's Silent Brew",
        35,
        [a.drow, a.evil, a.sophisticated],
        beerEnum
    ),
    new TavernProduct(
        "Anxa's Deadly Brew",
        32,
        [a.drow, a.evil, a.sophisticated],
        beerEnum
    ),
    new TavernProduct(
        "Spidermother's Midnight Ale",
        85,
        [a.drow, a.rich],
        beerEnum
    ),
    new TavernProduct(
        "Spidermother's Royal Lager",
        82,
        [a.drow, a.rich],
        beerEnum
    ),
    new TavernProduct(
        "Spidermother's Rich Porter",
        80,
        [a.drow, a.rich],
        beerEnum
    ),
    new TavernProduct(
        "Spidermother's Imperial Stout",
        89,
        [a.drow, a.rich],
        beerEnum
    ),
    new TavernProduct(
        'Molthorium Lager',
        100,
        [a.dwarf, a.rich, a.city],
        beerEnum
    ),
    new TavernProduct(
        'Molthorium Bock Beer',
        100,
        [a.dwarf, a.rich, a.city],
        beerEnum
    ),
    new TavernProduct(
        'Molthorium Umber Ale',
        90,
        [a.dwarf, a.rich, a.underdark],
        beerEnum
    ),
];
