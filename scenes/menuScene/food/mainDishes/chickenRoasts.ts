import { association, landAssociations } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
import { standardCarbs } from './standardCarbs';
import { standardGreens } from './standardGreens';
const a = association;

const GOOSE_FACTOR = 1.7;
const TURKEY_FACTOR = 1.6;
const PHEASANT_FACTOR = 2;
const CHICKEN_FACTOR = 1.3;
const PIGEON_FACTOR = 1.0;
export const chickenRoasts = [
    new DishIdea(
        {
            mainIng: {
                name: 'Roast Goose',
                fitsTo: [a.village, a.city, a.forest, a.sophisticated],
            },
            firstSideDishes: [
                {
                    name: ' in Redcurrant Sauce',
                    fitsTo: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Port Wine Sauce',
                    fitsTo: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Blackcurrant Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        adjustPriceSetter(foodPrices.mainDish, GOOSE_FACTOR),
        foodCategory.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Roast Turkey',
                fitsTo: [a.village, a.city, a.forest, a.sophisticated],
            },
            firstSideDishes: [
                {
                    name: ' in Redcurrant Sauce',
                    fitsTo: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Port Wine Sauce',
                    fitsTo: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Cranberry Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        adjustPriceSetter(foodPrices.mainDish, TURKEY_FACTOR),
        foodCategory.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Wild Pheasant',
                fitsTo: [a.village, a.city, a.forest, a.sophisticated],
            },
            firstSideDishes: [
                {
                    name: ' with Roasted Grapes and Shallots',
                    fitsTo: [a.village, a.city, a.forest, a.sophisticated],
                },
                {
                    name: ' in Wine Sauce with Lobster Mushroom',
                    fitsTo: [a.village, a.city, a.forest, a.sophisticated],
                },
                {
                    name: ' with Cranberries, Potatoe Dumplings & Red Cabbage',
                    fitsTo: [a.village, a.city, a.forest, a.sophisticated],
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        adjustPriceSetter(foodPrices.mainDish, PHEASANT_FACTOR),
        foodCategory.mainDish
    ),

    new DishIdea(
        {
            mainIng: {
                name: 'Roast Chicken',
                fitsTo: [
                    ...landAssociations,
                    a.poor,
                    a.worker,
                    a.sophisticated,
                ],
            },
            firstSideDishes: [
                {
                    name: ' in Lemon Sauce',
                    fitsTo: [
                        a.city,
                        a.haven,
                        a.tropical,
                        a.sophisticated,
                        a.worker,
                    ],
                },
                {
                    name: ' in White Wine Sauce',
                    fitsTo: [
                        a.city,
                        a.haven,
                        a.mountain,
                        a.underdark,
                        a.village,
                        a.forest,
                        a.sophisticated,
                        a.worker,
                    ],
                },
                {
                    name: ' in Honey-Mustard Sauce',
                    fitsTo: [...landAssociations, a.worker],
                },
                {
                    name: ' in Garlic Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
                },
                {
                    name: ' in Pepper Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        adjustPriceSetter(foodPrices.mainDish, CHICKEN_FACTOR),
        foodCategory.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Roast Pigeon',
                fitsTo: [a.city, a.poor, a.rich],
            },
            firstSideDishes: [
                {
                    name: ' in Garlic Sauce',
                    fitsTo: [a.city, a.worker, a.poor],
                },
                {
                    name: ' in Pepper Sauce',
                    fitsTo: [a.city, a.worker, a.poor],
                },
                {
                    name: ' with Blueberries, Beetroot Purée',
                    fitsTo: [a.city, a.village, a.haven, a.rich],
                },
            ],
            secondSideDishes: [
                { name: ' with Potato Salad', fitsTo: [a.city, a.poor] },
                {
                    name: ' with Potatoes and Salad',
                    fitsTo: [a.city, a.poor],
                },
                {
                    name: ' and Duchess Potatoes',
                    fitsTo: [a.city, a.village, a.haven, a.rich],
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, PIGEON_FACTOR),
        foodCategory.mainDish
    ),
];
