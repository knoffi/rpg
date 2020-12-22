import { association } from '../../../classes/Adjectives';
import { foodCategory, TavernProduct } from '../../../classes/TavernProduct';
import { porridge } from './porridge';
const a = association;
const mainDishEnum = foodCategory.mainDish;

const fishAndChipsTemplate = (
    fishNames: string[],
    sidedishNames: string[],
    groupAssociation: association,
    price: number
) => {
    const dishVariants = [] as TavernProduct[];
    fishNames.forEach((fish) => {
        sidedishNames.forEach((sidedish) => {
            dishVariants.push(
                new TavernProduct(
                    'Fish & Chips (' + fish + ') with ' + sidedish,
                    Math.floor(price + ((Math.random() - 0.5) * price) / 3),
                    [a.haven, groupAssociation],
                    mainDishEnum
                )
            );
        });
    });
    return dishVariants;
};
export const mainDishes = [
    new TavernProduct(
        'Leftover Stew with Chicken and Bread',
        8,
        [a.poor, a.village],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Squid and Bread',
        8,
        [a.poor, a.village],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Fish and Bread',
        8,
        [a.poor, a.village],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Beans and Bread',
        5,
        [a.poor, a.city],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Cabbage and Bread',
        5,
        [a.poor, a.city],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Potatoes and Bread',
        5,
        [a.poor, a.city],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Peas and Bread',
        5,
        [a.poor, a.halfling],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Beef and Flatbread',
        8,
        [a.poor, a.desert],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Leftover Stew with Chickpea and Flatbread',
        5,
        [a.poor, a.desert],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Pig Feet and Bread',
        8,
        [a.poor, a.village],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Boar Feet and Bread',
        8,
        [a.poor, a.forest],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Earthworms and Bread',
        5,
        [a.poor, a.underdark],
        mainDishEnum
    ),
    new TavernProduct(
        'Leftover Stew with Mole and Bread',
        8,
        [a.poor, a.underdark],
        mainDishEnum
    ),
    new TavernProduct(
        'Chateaubriand with Gold Plated Duchesse Potatoes',
        500,
        [a.rich],
        mainDishEnum
    ),
    new TavernProduct(
        'Wild Pheasant in Wine Sauce with Mushrooms',
        90,
        [a.sophisticated],
        mainDishEnum
    ),
    new TavernProduct(
        'Roast Chicken with Potatoes',
        30,
        [a.worker],
        mainDishEnum
    ),
].concat(
    fishAndChipsTemplate(
        [
            'Plaice',
            'Pollock',
            'Haddock',
            'Whiting',
            'Bluewater Cod',
            'Deepwater Cod',
            'Blackwater Cod',
        ],
        ['Peas', 'Gherkins', 'Baked Beans', 'Onions'],
        association.worker,
        22
    ),
    fishAndChipsTemplate(
        ['Grey Makrele', 'Stink Cod', 'Dirt Cod', 'Sock Fish'],
        ['Peas', 'Gherkins', 'Baked Beans', 'Onions'],
        association.poor,
        10
    )
);

export const breakfasts = [
    new TavernProduct(
        'Jam Toast and Baked Beans with Ham',
        10,
        [],
        foodCategory.breakfast
    ),
    new TavernProduct(
        'Bread with jam and a boiled egg',
        3,
        [],
        foodCategory.breakfast
    ),
].concat(porridge);

export const appetizers = [
    new TavernProduct(
        'Asparagus Creme Soup with Seasonal Spices',
        10,
        [],
        foodCategory.appetizer
    ),
];

export const sideDishes = [
    new TavernProduct(
        'Arugula Salad with Cherry Tomatoes',
        10,
        [],
        foodCategory.sideDish
    ),
];
export const desserts = [
    new TavernProduct('Crème Brûlée', 10, [], foodCategory.sideDish),
];
