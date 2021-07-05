import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { foodPrices } from '../../priceSetting/foodPriceSetters';
import { adjustPriceSetter } from '../../priceSetting/priceSetters';
import { areaBreads } from './areaBreads';
import {
    nonRichBreakfastPlateToppings,
    richBreakfastPlateToppings,
} from './breakfastPlateToppings';
import { eggIncomeVariations } from './eggIncomeVariations';

const BREAKFAST_PLATE_FACTOR = 1.7;
export const breakfastPlates = [
    new DishIdea(
        {
            mainIng: { name: 'Breakfast Plate' },
            firstSideDishes: [...eggIncomeVariations],
            secondSideDishes: [...areaBreads],
            thirdSideDishes: [
                ...nonRichBreakfastPlateToppings,
                ...richBreakfastPlateToppings,
            ],
        },
        adjustPriceSetter(foodPrices.breakfast, BREAKFAST_PLATE_FACTOR),
        Eatable.breakfast
    ),
];
