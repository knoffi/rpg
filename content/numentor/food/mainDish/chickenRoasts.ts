import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
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
                landRange: [a.village, a.city, a.forest],
                incomeRange: [a.wealthy],
            },
            firstSideDishes: [
                {
                    name: ' in Redcurrant Sauce',
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
                },
            ],

            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        GOOSE_FACTOR,
        Eatable.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Roast Turkey',
                landRange: [a.village, a.city, a.forest],
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' in Redcurrant Sauce',
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' in Port Wine Sauce',
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' in Cranberry Sauce',
                    incomeRange: [a.modest, a.poor],
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        TURKEY_FACTOR,
        Eatable.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Wild Pheasant',
                landRange: [a.village, a.city, a.forest],
                incomeRange: [a.wealthy],
            },
            firstSideDishes: [
                {
                    name: ' with Roasted Grapes and Shallots',
                },
                {
                    name: ' in Wine Sauce with Lobster Mushroom',
                },
                {
                    name: ' with Cranberries, Potatoe Dumplings & Red Cabbage',
                },
            ],
        },
        PHEASANT_FACTOR,
        Eatable.mainDish
    ),

    new DishIdea(
        {
            mainIng: {
                name: 'Roast Chicken',
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' in Lemon Sauce',
                    landRange: [a.city, a.haven, a.tropical],
                    incomeRange: [a.wealthy, a.modest],
                },
                {
                    name: ' in Sweet Sour Sauce',
                    needs: [a.tropical],
                    incomeRange: [a.wealthy, a.modest],
                },
                {
                    name: ' in White Wine Sauce',
                    misfits: [a.tropical],
                    incomeRange: [a.wealthy, a.modest],
                },
                {
                    name: ' in Honey-Mustard Sauce',
                    incomeRange: [a.modest],
                },
                {
                    name: ' in Garlic Sauce',
                    incomeRange: [a.modest, a.poor],
                },
                {
                    name: ' in Pepper Sauce',
                    incomeRange: [a.modest, a.poor],
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        CHICKEN_FACTOR,
        Eatable.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Roast Pigeon',
                incomeRange: [a.poor, a.rich],
                landRange: [a.city, a.village],
            },
            firstSideDishes: [
                {
                    name: ' in Garlic Sauce',
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
                },
            ],
        },
        PIGEON_FACTOR,
        Eatable.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Roast Diatryma',
                incomeRange: [a.wealthy, a.modest],
                landRange: [a.underdark],
            },
            firstSideDishes: [
                {
                    name: ' in Garlic Sauce',
                    incomeRange: [a.modest],
                },
                {
                    name: ' in Pepper Sauce',
                    incomeRange: [a.modest],
                },
                {
                    name: ' in Mushroom Sauce',
                    incomeRange: [a.village, a.haven, a.rich],
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        PIGEON_FACTOR,
        Eatable.mainDish
    ),
];
