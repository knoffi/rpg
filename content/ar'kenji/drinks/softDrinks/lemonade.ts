import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
import { drinkPrices } from '../../../../scenes/menuScene/priceSetting/drinkPriceSetters';
import { adjustPriceSetter } from '../../../../scenes/menuScene/priceSetting/priceSetters';
const a = association;
export const lemonades: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Bitter Lemon',
                misfits: [a.underdark, a.rich, a.desert, a.mountain],
            },
            firstSideDishes: [
                {
                    name: 'Sweet, bitter, made from lemonades',
                },
            ],
        },
        adjustPriceSetter(drinkPrices.softDrink, 1.1),
        Drinkable.lemonade
    ),
];
