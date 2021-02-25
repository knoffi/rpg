import { association, landAssociations } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
import { standardCarbs } from './standardCarbs';
import { standardGreens } from './standardGreens';
const a = association;

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
        adjustPriceSetter(foodPrices.mainDish, 1.7),
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
        adjustPriceSetter(foodPrices.mainDish, 1.7),
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
        adjustPriceSetter(foodPrices.mainDish, 1.7),
        foodCategory.mainDish
    ),
];
