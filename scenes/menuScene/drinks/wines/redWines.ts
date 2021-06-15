import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;

export const redWines: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Baiser Rouge',
                misfits: [a.tropical, a.desert, a.dwarf, a.thief],
            },
            firstSideDishes: [
                {
                    name: 'Red wine  -  dry, aged 4 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich],
                    price: 90,
                },
                {
                    name: 'Red wine  -  dry, aged 3 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich],
                    price: 75,
                },
                {
                    name: 'Red wine  -  dry, aged 6 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich],
                    price: 120,
                },
                {
                    name: 'Red wine  -  dry, aged 5 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich],
                    price: 105,
                },
                {
                    name: 'Red wine  -  dry, aged 2 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich, a.wealthy],
                    price: 60,
                },
            ],
        },
        0,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Luiselbacher',
                misfits: [a.tropical, a.desert, a.dwarf, a.thief],
            },
            firstSideDishes: [
                {
                    name: 'Red wine  -  sweet, aged 1 year,  full-bodied, fruity note',
                    incomeRange: [a.wealthy],
                    price: 28,
                },
                {
                    name: 'Red wine  -  sweet, aged 2 years,  full-bodied, fruity note',
                    incomeRange: [a.wealthy],
                    price: 39,
                },
                {
                    name: 'Red wine  -  sweet, aged 3 years,  full-bodied, fruity note',
                    incomeRange: [a.wealthy],
                    price: 50,
                },
            ],
        },
        0,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Cavalosso',
                misfits: [a.tropical, a.desert, a.dwarf, a.thief],
            },
            firstSideDishes: [
                {
                    name: 'Red wine  -  semi dry, aged 1 year,  light-bodied, cherry-note',
                    incomeRange: [a.modest],
                    price: 18,
                },
                {
                    name: 'Red wine  -  semi dry, aged 2 years,  light-bodied, cherry-note',
                    incomeRange: [a.modest, a.wealthy],
                    price: 27,
                },
                {
                    name: 'Red wine  -  semi dry, aged 3 years,  light-bodied, cherry-note',
                    incomeRange: [a.wealthy],
                    price: 38,
                },
            ],
        },
        0,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Cavaebleu',
                misfits: [a.tropical, a.desert, a.dwarf],
            },
            firstSideDishes: [
                {
                    name: 'Red wine  -  sweet, rough fruityness',
                    incomeRange: [a.modest],
                    price: 8,
                },
            ],
        },
        0,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Pugnavini',
                misfits: [a.tropical, a.desert, a.dwarf],
            },
            firstSideDishes: [
                {
                    name: 'Red wine  -  dry, aged 1 year, fruity, light-bodied, notes of plum',
                    incomeRange: [a.modest, a.wealthy],
                    price: 30,
                },
                {
                    name: 'Red wine  -  dry, aged 3 years, fruity, full-bodied, notes of plum',
                    incomeRange: [a.wealthy],
                    price: 60,
                },
                {
                    name: 'Red wine  -  dry, aged 4 years, fruity, full-bodied, notes of plum',
                    incomeRange: [a.rich],
                    price: 90,
                },
            ],
        },
        0,
        Drinkable.wine
    ),
];
