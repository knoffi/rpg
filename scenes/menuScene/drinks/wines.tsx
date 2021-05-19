import { association } from '../../../classes/association';
import { Drinkable, TavernProduct } from '../../../classes/TavernProduct';
const a = association;
const wineEnum = Drinkable.wine;
export const wines = [
    new TavernProduct(
        "Zoltan's Red Wine of Fairytales",
        20,
        [a.bard, a.modest],
        wineEnum
    ),
    new TavernProduct(
        "Zoltan's White Wine of Romance",
        20,
        [a.bard, a.modest],
        wineEnum
    ),
    new TavernProduct(
        "Zoltan's Federweisser of Music",
        17,
        [a.bard, a.modest],
        wineEnum
    ),
    new TavernProduct(
        "Miro's Sake of Philosophy",
        35,
        [a.wealthy, a.wizard],
        wineEnum
    ),
    new TavernProduct(
        "Zoltan's Champagne of Charade",
        40,
        [a.wealthy, a.bard],
        wineEnum
    ),
    new TavernProduct(
        "Marigold's Apple Cider ",
        17,
        [a.modest, a.village],
        wineEnum
    ),
    new TavernProduct(
        "Marigold's Pear Cider ",
        17,
        [a.modest, a.village],
        wineEnum
    ),
    new TavernProduct(
        "Marigold's Berry Cider ",
        17,
        [a.modest, a.forest],
        wineEnum
    ),
    new TavernProduct(
        "Marigold's Ginger Cider ",
        17,
        [a.city, a.modest],
        wineEnum
    ),
    new TavernProduct(
        "Marigold's Mango Cider ",
        17,
        [a.halfling, a.tropical, a.modest],
        wineEnum
    ),
    new TavernProduct(
        "Marigold's Peach Cider ",
        17,
        [a.halfling, a.tropical, a.modest],
        wineEnum
    ),
    new TavernProduct(
        "Marigold's Lemon Cider ",
        17,
        [a.halfling, a.tropical, a.modest],
        wineEnum
    ),
    new TavernProduct(
        "Baron Fletchers's Red Wine",
        17,
        [a.human, a.modest, a.modest],
        wineEnum
    ),
    new TavernProduct(
        "Baron Fletchers's White Wine ",
        17,
        [a.human, a.modest],
        wineEnum
    ),
    new TavernProduct(
        '10 Year Old Baiser Rouge',
        55,
        [a.cleric, a.rich],
        wineEnum
    ),
    new TavernProduct(
        '15 Year Old Baiser Rouge',
        76,
        [a.cleric, a.rich],
        wineEnum
    ),
    new TavernProduct(
        '20 Year Old Baiser Rouge',
        90,
        [a.cleric, a.rich],
        wineEnum
    ),
    new TavernProduct(
        '30 Year Old Baiser Rouge',
        130,
        [a.cleric, a.rich],
        wineEnum
    ),
    new TavernProduct(
        "Marigold's Rhubarb Cider ",
        17,
        [a.forest, a.modest],
        wineEnum
    ),
    new TavernProduct(
        '4 Year Old Franzlbeisser',
        18,
        [a.modest, a.adventurer],
        wineEnum
    ),
    new TavernProduct(
        '5 Year Old Franzlbeisser',
        22,
        [a.modest, a.adventurer],
        wineEnum
    ),
    new TavernProduct(
        '10 Year Old Franzlbeisser',
        38,
        [a.wealthy, a.adventurer],
        wineEnum
    ),
    new TavernProduct(
        '8 Year Old Luiselbacher',
        30,
        [a.modest, a.village],
        wineEnum
    ),
    new TavernProduct(
        '9 Year Old Luiselbacher',
        35,
        [a.modest, a.village],
        wineEnum
    ),
    new TavernProduct(
        '10 Year Old Luiselbacher',
        40,
        [a.wealthy, a.village],
        wineEnum
    ),
    new TavernProduct('4 Year Old Cavalosso', 18, [a.modest], wineEnum),
    new TavernProduct('5 Year Old Cavalosso', 22, [a.wealthy], wineEnum),
    new TavernProduct('6 Year Old Cavalosso', 29, [a.wealthy], wineEnum),
    new TavernProduct('1 Year Old Cavaebleu', 7, [a.poor], wineEnum),
    new TavernProduct('2 Year Old Cavaebleu', 9, [a.poor], wineEnum),
    new TavernProduct('3 Year Old Cavaebleu', 11, [a.poor], wineEnum),
    new TavernProduct(
        '4 Year Old Pugnavini',
        21,
        [a.thief, a.modest],
        wineEnum
    ),
    new TavernProduct(
        '8 Year Old Pugnavini',
        40,
        [a.thief, a.wealthy],
        wineEnum
    ),
    new TavernProduct('20 Year Old Pugnavini', 90, [a.thief, a.rich], wineEnum),
    new TavernProduct('4 Year Old Volkerbacher', 18, [a.modest], wineEnum),
    new TavernProduct('5 Year Old Volkerbacher', 21, [a.modest], wineEnum),
    new TavernProduct('6 Year Old Volkerbacher', 25, [a.modest], wineEnum),
    new TavernProduct(
        '4 Year Old Paoneaux',
        20,
        [a.modest, a.prostitute],
        wineEnum
    ),
    new TavernProduct(
        '7 Year Old Paoneaux',
        32,
        [a.wealthy, a.prostitute],
        wineEnum
    ),
    new TavernProduct(
        '1 Year Old Paoneaux',
        8,
        [a.poor, a.prostitute],
        wineEnum
    ),
    new TavernProduct(
        '15 Year Old Paoneaux',
        90,
        [a.rich, a.prostitute],
        wineEnum
    ),
    new TavernProduct(
        'Grizzly Mead',
        26,
        [a.forest, a.barbarian, a.modest],
        wineEnum
    ),
    new TavernProduct(
        'Blackberry Mead',
        25,
        [a.forest, a.village, a.modest],
        wineEnum
    ),
    new TavernProduct(
        'Currant Mead',
        23,
        [a.forest, a.village, a.modest],
        wineEnum
    ),
    new TavernProduct(
        'Elderberry Mead',
        24,
        [a.forest, a.village, a.modest],
        wineEnum
    ),
    new TavernProduct(
        'Goldberry Mead',
        24,
        [a.forest, a.village, a.rich],
        wineEnum
    ),
    new TavernProduct('Ginger Mead', 27, [a.city, a.wealthy], wineEnum),
    new TavernProduct('White Owl Mead', 32, [a.wizard, a.wealthy], wineEnum),
    new TavernProduct('Grey Owl Mead', 32, [a.wizard, a.modest], wineEnum),
    new TavernProduct('Mighty Kraken Mead', 38, [a.haven, a.wealthy], wineEnum),
    new TavernProduct('Flounder Mead', 22, [a.modest, a.haven], wineEnum),
    new TavernProduct('Gentian Mead', 22, [a.mountain, a.modest], wineEnum),
    new TavernProduct('Blueberry Mead', 20, [a.mountain, a.modest], wineEnum),
    new TavernProduct('Hellfire Mead', 21, [a.tiefling, a.modest], wineEnum),
    new TavernProduct('Spitfire Mead', 8, [a.tiefling, a.poor], wineEnum),
    new TavernProduct('Hellberry Mead', 32, [a.tiefling, a.wealthy], wineEnum),
    new TavernProduct('Blood Diamand Mead', 87, [a.tiefling, a.rich], wineEnum),
    new TavernProduct("Sir Aiven's Mead", 36, [a.knight, a.wealthy], wineEnum),
    new TavernProduct('Golden Rose Mead', 70, [a.rich, a.elf], wineEnum),
    new TavernProduct(
        'Granite Mead',
        19,
        [a.dwarf, a.mountain, a.modest],
        wineEnum
    ),
    new TavernProduct('Marble Mead', 76, [a.dwarf, a.knight, a.rich], wineEnum),
    new TavernProduct(
        'Quartz Mead',
        29,
        [a.dwarf, a.mountain, a.wealthy],
        wineEnum
    ),
    new TavernProduct('Coal Mead', 10, [a.dwarf, a.poor, a.mountain], wineEnum),
];
