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
                fitRange: [a.village, a.city, a.forest, a.sophisticated],
            },
            firstSideDishes: [
                {
                    name: ' in Redcurrant Sauce',
                    fitRange: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Port Wine Sauce',
                    fitRange: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Blackcurrant Sauce',
                    fitRange: [...landAssociations, a.worker, a.poor],
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
                fitRange: [a.village, a.city, a.forest, a.sophisticated],
            },
            firstSideDishes: [
                {
                    name: ' in Redcurrant Sauce',
                    fitRange: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Port Wine Sauce',
                    fitRange: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Cranberry Sauce',
                    fitRange: [...landAssociations, a.worker, a.poor],
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
                fitRange: [a.village, a.city, a.forest, a.sophisticated],
            },
            firstSideDishes: [
                {
                    name: ' with Roasted Grapes and Shallots',
                    fitRange: [a.village, a.city, a.forest, a.sophisticated],
                },
                {
                    name: ' in Wine Sauce with Lobster Mushroom',
                    fitRange: [a.village, a.city, a.forest, a.sophisticated],
                },
                {
                    name: ' with Cranberries, Potatoe Dumplings & Red Cabbage',
                    fitRange: [a.village, a.city, a.forest, a.sophisticated],
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
                fitRange: [
                    ...landAssociations,
                    a.poor,
                    a.worker,
                    a.sophisticated,
                ],
            },
            firstSideDishes: [
                {
                    name: ' in Lemon Sauce',
                    fitRange: [
                        a.city,
                        a.haven,
                        a.tropical,
                        a.sophisticated,
                        a.worker,
                    ],
                },
                {
                    name: ' in White Wine Sauce',
                    fitRange: [
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
                    fitRange: [...landAssociations, a.worker],
                },
                {
                    name: ' in Garlic Sauce',
                    fitRange: [...landAssociations, a.worker, a.poor],
                },
                {
                    name: ' in Pepper Sauce',
                    fitRange: [...landAssociations, a.worker, a.poor],
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
                fitRange: [a.city, a.poor, a.rich],
            },
            firstSideDishes: [
                {
                    name: ' in Garlic Sauce',
                    fitRange: [a.city, a.worker, a.poor],
                },
                {
                    name: ' in Pepper Sauce',
                    fitRange: [a.city, a.worker, a.poor],
                },
                {
                    name: ' with Blueberries, Beetroot Purée',
                    fitRange: [a.city, a.village, a.haven, a.rich],
                },
            ],
            secondSideDishes: [
                { name: ' with Potato Salad', fitRange: [a.city, a.poor] },
                {
                    name: ' with Potatoes and Salad',
                    fitRange: [a.city, a.poor],
                },
                {
                    name: ' and Duchess Potatoes',
                    fitRange: [a.city, a.village, a.haven, a.rich],
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, PIGEON_FACTOR),
        foodCategory.mainDish
    ),
];
