import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { foodPrices } from '../../../../scenes/menuScene/priceSetting/foodPriceSetters';
import { adjustPriceSetter } from '../../../../scenes/menuScene/priceSetting/priceSetters';
const STEAK_FACTOR = 1.2;
const a = association;
export const steaks = [
    new DishIdea(
        {
            mainIng: {
                name: 'Chauteaubriand Steak',
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' with Fried Potatoes',
                },
            ],
        },
        adjustPriceSetter(foodPrices[Eatable.mainDish], STEAK_FACTOR),
        Eatable.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Chauteaubriand Steak',
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' with Beans',
                },
            ],
        },
        adjustPriceSetter(foodPrices[Eatable.mainDish], STEAK_FACTOR),
        Eatable.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Chauteaubriand Steak',
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' with Mashed Potatoes',
                },
            ],
        },
        adjustPriceSetter(foodPrices[Eatable.mainDish], STEAK_FACTOR),
        Eatable.mainDish
    ),
];
