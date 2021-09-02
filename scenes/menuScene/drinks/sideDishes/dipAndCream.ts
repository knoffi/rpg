import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { DishConcept } from '../../../../classes/idea/powerFitConcepts/DishConcept';
import { Eatable } from '../../../../classes/TavernProduct';
import { foodPrices } from '../../priceSetting/foodPriceSetters';
import { adjustPriceSetter } from '../../priceSetting/priceSetters';
const a = association;
const DIP_AND_CREAM_FACTOR = 0.9;
export const dipAndCream: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Hummus wit Pita', needs: [a.desert] },
            firstSideDishes: [
                {
                    name: 'Cooked & mashed Chickpeas mixed with Sesame, Lemon Juice & Garlic, served with Pita Bread',
                    incomeRange: [a.poor, a.wealthy, a.modest, a.rich],
                },
            ],
        } as DishConcept,
        adjustPriceSetter(foodPrices.sideDish, DIP_AND_CREAM_FACTOR),
        Eatable.sideDish
    ),
];
