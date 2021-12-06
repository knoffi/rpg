import { association } from '../../../../../classes/association';
import { DishIdea } from '../../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../../classes/TavernProduct';
import { foodPrices } from '../../../../../scenes/menuScene/priceSetting/foodPriceSetters';
import { adjustPriceSetter } from '../../../../../scenes/menuScene/priceSetting/priceSetters';
import { areaBreads } from './areaBreads';
import {
    nonRichBreakfastPlateToppings,
    richBreakfastPlateToppings,
} from './breakfastPlateToppings';
import { eggIncomeVariations } from './eggIncomeVariations';
const a = association;
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
        adjustPriceSetter(
            foodPrices[Eatable.breakfast],
            BREAKFAST_PLATE_FACTOR
        ),
        Eatable.breakfast
    ),
    new DishIdea(
        {
            mainIng: { name: 'Hummus Plate', needs: [a.desert] },
            firstSideDishes: [
                {
                    name: 'A big portion of Hummus, served with Pita Bread',
                    incomeRange: [a.poor],
                },
                {
                    name: 'Hummus made after a family recipe, served with Pita Bread fresh from the oven',
                    incomeRange: [a.modest],
                },
                { name: 'Delicate Hummus, ', incomeRange: [a.wealthy] },
                {
                    name: '100 delicate hummus variants, ',
                    incomeRange: [a.rich],
                },
            ],
            secondSideDishes: [
                {
                    name: 'served on a silver plate with exquisite Pita Bread',
                    incomeRange: [a.rich],
                },
                {
                    name: 'served on a golden plate with exquisite Pita Bread',
                    incomeRange: [a.rich],
                },
                {
                    name: 'garnished with Slices of Lamb, served with Pita Bread',
                    incomeRange: [a.wealthy],
                },
                {
                    name: 'garnished with Parsley & Cilantro, served with Pita Bread',
                    incomeRange: [a.wealthy],
                },
                {
                    name: 'garnished with Fried Liver, served with Pita Bread',
                    incomeRange: [a.wealthy],
                },
                {
                    name: 'garnished with Chicken Hearts, served with Pita Bread',
                    incomeRange: [a.wealthy],
                },
                {
                    name: 'garnished with Fried Egplant, served with Pita Bread',
                    incomeRange: [a.wealthy],
                },
                { name: '', incomeRange: [a.poor, a.modest] },
            ],
        },
        adjustPriceSetter(
            foodPrices[Eatable.breakfast],
            BREAKFAST_PLATE_FACTOR
        ),
        Eatable.breakfast
    ),
];
