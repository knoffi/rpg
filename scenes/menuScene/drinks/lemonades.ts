import { association } from '../../../classes/association';
import { Drinkable, TavernProduct } from '../../../classes/TavernProduct';

const a = association;
const beerEnum = Drinkable.beer;

export const lemonades = [
    new TavernProduct(
        'Tropo Cola',
        10,
        [a.modest, a.tropical],
        Drinkable.lemonade
    ),
    new TavernProduct('Six Down', 5, [a.city, a.poor], Drinkable.lemonade),
    new TavernProduct(
        'Fruit Mine',
        11,
        [a.mountain, a.dwarf, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'The Lubricater',
        22,
        [a.prostitute, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'The Hard Maker',
        12,
        [a.prostitute, a.poor],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Applelino',
        8,
        [a.village, a.halfling, a.poor],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Tasty Shmasty',
        18,
        [a.gnome, a.underdark, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Orangino',
        22,
        [a.tropical, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Gooseberry Fizz',
        33,
        [a.wealthy, a.city, a.elf],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Strawberry Fizz',
        19,
        [a.modest, a.forest, a.halfling],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Apple Fizz',
        19,
        [a.modest, a.human],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Tonic Molderoy',
        62,
        [a.tropical, a.rich],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Coconut Molderoy',
        62,
        [a.tropical, a.rich],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Orange Molderoy',
        60,
        [a.haven, a.rich],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Cola Molderoy',
        65,
        [a.city, a.rich],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Scurvy Fixxer',
        17,
        [a.haven, a.poor],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Fruity Wave',
        17,
        [a.haven, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Tsunami Cola',
        28,
        [a.haven, a.wealthy],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Aiven's Apple Juice",
        18,
        [a.knight, a.village, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Aiven's Orange Juice",
        19,
        [a.knight, a.tropical, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Aiven's Testified Lemonade",
        25,
        [a.knight, a.cleric, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Flint's Fuzzy Drink",
        18,
        [a.thief, a.haven, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "McDagger's Tonic Water",
        5,
        [a.thief, a.city, a.poor],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "McDagger's Bitter Lemon",
        6,
        [a.thief, a.city, a.poor],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Sir Weatherstone's Bitter Lemon",
        65,
        [a.gnome, a.rich],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Sir Weatherstone's Tonic Water",
        59,
        [a.gnome, a.rich],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Sir Weatherstone's Fassbrause",
        89,
        [a.rich, a.village],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Pinecone Beverage',
        15,
        [a.forest, a.modest, a.druid],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Rowan Berry Soda',
        12,
        [a.druid, a.forest, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Black Berry Soda',
        32,
        [a.druid, a.forest, a.wealthy],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Elder Berry Soda',
        35,
        [a.druid, a.desert, a.mountain, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Gentian Soda',
        18,
        [a.druid, a.mountain, a.village, a.modest],
        Drinkable.lemonade
    ),

    new TavernProduct(
        'Date Juice',
        22,
        [a.druid, a.desert, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Fig Soda',
        3,
        [a.druid, a.desert, a.poor],
        Drinkable.lemonade
    ),
    new TavernProduct(
        'Cola Of Adventure',
        21,
        [a.adventurer, a.modest],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Harry's Bitter Lemon",
        32,
        [a.wizard, a.wealthy],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Harry's Tonic Water",
        34,
        [a.wizard, a.wealthy],
        Drinkable.lemonade
    ),
    new TavernProduct(
        "Harry's Mola Cola",
        35,
        [a.wizard, a.wealthy],
        Drinkable.lemonade
    ),
];
