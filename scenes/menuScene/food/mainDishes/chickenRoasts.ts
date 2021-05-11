import { association } from '../../../../classes/association';
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
<<<<<<< HEAD
                landRange: [a.village, a.city, a.forest],
                incomeRange: [a.wealthy],
=======
                fitsTo: [a.village, a.city, a.forest, a.sophisticated],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
            },
            firstSideDishes: [
                {
                    name: ' in Redcurrant Sauce',
<<<<<<< HEAD
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' in Port Wine Sauce',
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' in Blackcurrant Sauce',
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' in Cranberry Sauce',
                    incomeRange: [a.modest, a.poor],
=======
                    fitsTo: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Port Wine Sauce',
                    fitsTo: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Blackcurrant Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
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
<<<<<<< HEAD
                landRange: [a.village, a.city, a.forest],
                misfits: [a.rich],
=======
                fitsTo: [a.village, a.city, a.forest, a.sophisticated],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
            },
            firstSideDishes: [
                {
                    name: ' in Redcurrant Sauce',
<<<<<<< HEAD
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' in Port Wine Sauce',
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' in Cranberry Sauce',
                    incomeRange: [a.modest, a.poor],
=======
                    fitsTo: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Port Wine Sauce',
                    fitsTo: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Cranberry Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
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
<<<<<<< HEAD
                landRange: [a.village, a.city, a.forest],
                incomeRange: [a.wealthy],
=======
                fitsTo: [a.village, a.city, a.forest, a.sophisticated],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
            },
            firstSideDishes: [
                {
                    name: ' with Roasted Grapes and Shallots',
<<<<<<< HEAD
                },
                {
                    name: ' in Wine Sauce with Lobster Mushroom',
                },
                {
                    name: ' with Cranberries, Potatoe Dumplings & Red Cabbage',
=======
                    fitsTo: [a.village, a.city, a.forest, a.sophisticated],
                },
                {
                    name: ' in Wine Sauce with Lobster Mushroom',
                    fitsTo: [a.village, a.city, a.forest, a.sophisticated],
                },
                {
                    name: ' with Cranberries, Potatoe Dumplings & Red Cabbage',
                    fitsTo: [a.village, a.city, a.forest, a.sophisticated],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, PHEASANT_FACTOR),
        foodCategory.mainDish
    ),

    new DishIdea(
        {
            mainIng: {
                name: 'Roast Chicken',
<<<<<<< HEAD
                misfits: [a.rich],
=======
                fitsTo: [
                    ...landAssociations,
                    a.poor,
                    a.worker,
                    a.sophisticated,
                ],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
            },
            firstSideDishes: [
                {
                    name: ' in Lemon Sauce',
<<<<<<< HEAD
                    landRange: [a.city, a.haven, a.tropical],
                    incomeRange: [a.wealthy, a.modest],
                },
                {
                    name: ' in White Wine Sauce',
                    landRange: [
=======
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
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
                        a.city,
                        a.haven,
                        a.mountain,
                        a.underdark,
                        a.village,
                        a.forest,
                    ],
                    incomeRange: [a.wealthy, a.modest],
                },
                {
                    name: ' in Honey-Mustard Sauce',
<<<<<<< HEAD
                    incomeRange: [a.modest],
                },
                {
                    name: ' in Garlic Sauce',
                    incomeRange: [a.modest, a.poor],
                },
                {
                    name: ' in Pepper Sauce',
                    incomeRange: [a.modest, a.poor],
=======
                    fitsTo: [...landAssociations, a.worker],
                },
                {
                    name: ' in Garlic Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
                },
                {
                    name: ' in Pepper Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
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
<<<<<<< HEAD
                incomeRange: [a.poor, a.rich],
                landRange: [a.city, a.village],
=======
                fitsTo: [a.city, a.poor, a.rich],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
            },
            firstSideDishes: [
                {
                    name: ' in Garlic Sauce',
<<<<<<< HEAD
                    incomeRange: [a.modest, a.poor],
                },
                {
                    name: ' in Pepper Sauce',
                    incomeRange: [a.modest, a.poor],
                },
                {
                    name: ' with Blueberries, Beetroot Purée',
                    incomeRange: [a.village, a.haven, a.rich],
                },
            ],
            secondSideDishes: [
                { name: ' with Potato Salad', incomeRange: [a.poor] },
                {
                    name: ' with Potatoes and Salad',
                    incomeRange: [a.poor],
                },
                {
                    name: ' and Duchess Potatoes',
                    incomeRange: [a.rich],
=======
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
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, PIGEON_FACTOR),
        foodCategory.mainDish
    ),
];
