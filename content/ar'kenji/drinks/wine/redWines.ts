import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
import { drinkPrices } from '../../../../scenes/menuScene/priceSetting/drinkPriceSetters';
import { adjustPriceSetter } from '../../../../scenes/menuScene/priceSetting/priceSetters';
const a = association;
const RED_WINE_FACTOR = 1.2;
export const redWines: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Gourmonete',
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
        adjustPriceSetter(drinkPrices[Drinkable.wine], RED_WINE_FACTOR),
        Drinkable.wine
    ),
];
