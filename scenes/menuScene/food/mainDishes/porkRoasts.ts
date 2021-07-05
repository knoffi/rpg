import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { foodPrices } from '../../priceSetting/foodPriceSetters';
import { adjustPriceSetter } from '../../priceSetting/priceSetters';
import { standardCarbs } from './standardCarbs';
import { standardGreens } from './standardGreens';

const a = association;
const ROAST_PORK_FACTOR = 1.3;
export const porkRoasts = [
    new DishIdea(
        {
            mainIng: {
                name: 'Roast Pork',
                misfits: [a.rich, a.tropical, a.desert],
            },
            firstSideDishes: [
                {
                    name: ' in Brown Sauce',
                    incomeRange: [a.modest, a.poor],
                },
                {
                    name: ' in Maple-Balsamic Sauce',
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' in Mustard Sauce',
                    incomeRange: [a.modest, a.poor],
                },
                {
                    name: ' in Beer Sauce',
                    incomeRange: [a.modest, a.poor],
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        adjustPriceSetter(foodPrices.mainDish, ROAST_PORK_FACTOR),
        Eatable.mainDish
    ),
];
