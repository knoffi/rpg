import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { foodPrices } from '../../../../scenes/menuScene/priceSetting/foodPriceSetters';
import { adjustPriceSetter } from '../../../../scenes/menuScene/priceSetting/priceSetters';
const SIMPLE_CAKE_FACTOR = 0.9;
const a = association;
export const simpleCakes = [
    new DishIdea(
        {
            mainIng: {
                name: 'Apple Pie',
                incomeRange: [a.poor, a.modest],
                landRange: [a.city, a.village, a.forest],
            },
            firstSideDishes: [
                {
                    name: ' pie stuffed with red apples',
                },
                {
                    name: ' pie stuffed with green apples',
                },
            ],
        },
        adjustPriceSetter(foodPrices[Eatable.dessert], SIMPLE_CAKE_FACTOR),
        Eatable.dessert
    ),
];
