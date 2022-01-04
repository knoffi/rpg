import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
const RED_WINE_FACTOR = 1.2;
export const redWines: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Gourmonete',
                misfits: [a.tropical, a.desert, a.dwarf, a.thief],
                key: AssetKey.WINE_red,
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
        RED_WINE_FACTOR,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Ruby Wine',
                misfits: [a.tropical, a.desert, a.dwarf, a.thief],
                key: AssetKey.WINE_red,
            },
            firstSideDishes: [
                {
                    name: 'Red wine (dry)  -  aged 6 years in oak barrels, smoky note, spicy finish',
                    incomeRange: [a.rich],
                },
            ],
        },
        RED_WINE_FACTOR,
        Drinkable.wine
    ),
];
