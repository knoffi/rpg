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
                name: 'Chateaubriand Steak',
                needs: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' with Gold Plated Duchesse Potatoes',
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, STEAK_FACTOR),
        Eatable.mainDish
    ),
];
