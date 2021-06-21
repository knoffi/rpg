import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
import { drinkPrices } from '../../priceSetting/drinkPriceSetters';
import { adjustPriceSetter } from '../../priceSetting/priceSetters';
const a = association;
const RED_WINE_FACTOR = 1.2;
const RED_WINE_PRICE_SETTER = adjustPriceSetter(
    drinkPrices.wine,
    RED_WINE_FACTOR
);
export const redWines: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Baiser Rouge',
                misfits: [a.tropical, a.desert, a.dwarf, a.thief],
            },
            firstSideDishes: [
                {
                    name: 'Red wine (dry)  -  aged 6 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich],
                    priceFactor: 1.8,
                },
                {
                    name: 'Red wine (dry)  -  aged 5 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich],
                    priceFactor: 1.6,
                },
                {
                    name: 'Red wine (dry)  -  aged 4 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich],
                    priceFactor: 1.4,
                },
                {
                    name: 'Red wine (dry)  -  aged 3 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich],
                    priceFactor: 1.2,
                },
                {
                    name: 'Red wine (dry)  -  aged 2 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich, a.wealthy],
                },
            ],
        },
        adjustPriceSetter(drinkPrices.wine, RED_WINE_FACTOR),
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
                    name: 'Red wine (sweet)  -  aged 1 year,  full-bodied, fruity note',
                    incomeRange: [a.wealthy],
                },
                {
                    name: 'Red wine (sweet)  -  aged 2 years,  full-bodied, fruity note',
                    incomeRange: [a.wealthy],
                    priceFactor: 1.1,
                },
                {
                    name: 'Red wine (sweet)  -  aged 3 years,  full-bodied, fruity note',
                    incomeRange: [a.wealthy],
                    priceFactor: 1.2,
                },
            ],
        },
        RED_WINE_PRICE_SETTER,
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
                    name: 'Red wine (semi-dry)  -  aged 1 year,  light-bodied, cherry note',
                    incomeRange: [a.modest],
                },
                {
                    name: 'Red wine (semi-dry)  -  aged 2 years,  light-bodied, cherry note',
                    incomeRange: [a.modest, a.wealthy],
                    priceFactor: 1.1,
                },
                {
                    name: 'Red wine (semi-dry)  -  aged 3 years,  light-bodied, cherry note',
                    incomeRange: [a.wealthy],
                    priceFactor: 1.2,
                },
            ],
        },
        RED_WINE_PRICE_SETTER,
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
                    name: 'Red wine (sweet)  -  rough fruityness',
                    incomeRange: [a.modest],
                },
            ],
        },
        RED_WINE_PRICE_SETTER,
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
                    name: 'Red wine (dry)  -  aged 1 year, fruity, light-bodied, notes of plum',
                    incomeRange: [a.modest, a.wealthy],
                },
                {
                    name: 'Red wine (dry)  -  aged 2 years, fruity, full-bodied, notes of plum',
                    incomeRange: [a.wealthy],
                    priceFactor: 1.1,
                },
                {
                    name: 'Red wine (dry)  -  aged 4 years, fruity, full-bodied, notes of plum',
                    incomeRange: [a.rich],
                    priceFactor: 1.1,
                },
            ],
        },
        RED_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
];