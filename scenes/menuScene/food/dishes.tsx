import { association } from '../../../classes/association';
import { foodCategory, TavernProduct } from '../../../classes/TavernProduct';
import { breakfastPlates } from './breakfastPlates/breakfastPlates';
import { porridge } from './porridge/porridge';
import { priceVariation } from './priceVariation';
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
                    priceVariation(price),
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
].concat(porridge, breakfastPlates);

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
