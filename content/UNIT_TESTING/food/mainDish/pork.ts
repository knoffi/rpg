import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { foodPrices } from '../../../../scenes/menuScene/priceSetting/foodPriceSetters';
import { adjustPriceSetter } from '../../../../scenes/menuScene/priceSetting/priceSetters';
const PORK_FACTOR = 1.0;
const a = association;
export const steaks = [
    new DishIdea(
        {
            mainIng: {
                name: 'Roast Pork',
                incomeRange: [a.poor, a.modest],
            },
            firstSideDishes: [
                {
                    name: ' with Fried Potatoes',
                },
            ],
        },
        adjustPriceSetter(foodPrices[Eatable.mainDish], PORK_FACTOR),
        Eatable.mainDish
    ),
];
