import { association } from '../classes/Adjectives';
import { drinkCategory, TavernProduct } from '../classes/TavernProduct';

const a = association;
const beerEnum = drinkCategory.beer;

export const lemonades = [
    new TavernProduct(
        'Tropo Cola',
        10,
        [a.worker, a.tropical],
        drinkCategory.lemonade
    ),
    new TavernProduct('Six Down', 5, [a.city, a.poor], drinkCategory.lemonade),
    new TavernProduct(
        'Fruit Mine',
        11,
        [a.mountain, a.dwarf, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'The Lubricater',
        22,
        [a.prostitute, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'The Hard Maker',
        12,
        [a.prostitute, a.poor],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Applelino',
        8,
        [a.village, a.halfling, a.poor],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Tasty Shmasty',
        18,
        [a.gnome, a.underdark, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Orangino',
        22,
        [a.tropical, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Gooseberry Fizz',
        33,
        [a.sophisticated, a.city, a.elf],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Strawberry Fizz',
        19,
        [a.worker, a.forest, a.halfling],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Apple Fizz',
        19,
        [a.worker, a.human],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Tonic Molderoy',
        62,
        [a.tropical, a.rich],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Coconut Molderoy',
        62,
        [a.tropical, a.rich],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Orange Molderoy',
        60,
        [a.haven, a.rich],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Cola Molderoy',
        65,
        [a.city, a.rich],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Scurvy Fixxer',
        17,
        [a.haven, a.poor],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Fruity Wave',
        17,
        [a.haven, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Tsunami Cola',
        28,
        [a.haven, a.sophisticated],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Aiven's Apple Juice",
        18,
        [a.nobel, a.village, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Aiven's Orange Juice",
        19,
        [a.nobel, a.tropical, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Aiven's Testified Lemonade",
        25,
        [a.nobel, a.cleric, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Flint's Fuzzy Drink",
        18,
        [a.criminal, a.haven, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "McDagger's Tonic Water",
        5,
        [a.criminal, a.city, a.poor],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "McDagger's Bitter Lemon",
        6,
        [a.criminal, a.city, a.poor],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Sir Weatherstone's Bitter Lemon",
        65,
        [a.gnome, a.rich],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Sir Weatherstone's Tonic Water",
        59,
        [a.gnome, a.rich],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Sir Weatherstone's Fassbrause",
        89,
        [a.rich, a.village],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Pinecone Beverage',
        15,
        [a.forest, a.worker, a.druid],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Rowan Berry Soda',
        12,
        [a.druid, a.forest, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Black Berry Soda',
        32,
        [a.druid, a.forest, a.sophisticated],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Elder Berry Soda',
        35,
        [a.druid, a.desert, a.mountain, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Gentian Soda',
        18,
        [a.druid, a.mountain, a.village, a.worker],
        drinkCategory.lemonade
    ),

    new TavernProduct(
        'Date Juice',
        22,
        [a.druid, a.desert, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Fig Soda',
        3,
        [a.druid, a.desert, a.poor],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        'Cola Of Adventure',
        21,
        [a.adventurer, a.worker],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Harry's Bitter Lemon",
        32,
        [a.wizard, a.sophisticated],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Harry's Tonic Water",
        34,
        [a.wizard, a.sophisticated],
        drinkCategory.lemonade
    ),
    new TavernProduct(
        "Harry's Mola Cola",
        35,
        [a.wizard, a.sophisticated],
        drinkCategory.lemonade
    ),
];
