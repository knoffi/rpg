import { association } from '../../../../../classes/association';
import { DishIdea } from '../../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../../classes/TavernProduct';
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
        BREAKFAST_PLATE_FACTOR,
        Eatable.breakfast
    ),
    new DishIdea(
        {
            mainIng: { name: 'Hummus Plate', needs: [a.desert] },
            firstSideDishes: [
                {
                    name: 'A big portion of Hummus, served with Pita Bread',
                    needs: [a.poor],
                },
                {
                    name: 'Hummus made after a family recipe, served with Pita Bread fresh from the oven',
                    needs: [a.modest],
                },
                { name: 'Delicate Hummus, ', incomeRange: [a.wealthy] },
                {
                    name: '100 delicate hummus variants, ',
                    needs: [a.rich],
                },
            ],
            secondSideDishes: [
                {
                    name: 'served on a silver plate with exquisite Pita Bread',
                    needs: [a.rich],
                },
                {
                    name: 'served on a golden plate with exquisite Pita Bread',
                    needs: [a.rich],
                    priceFactor: 1.2,
                },
                {
                    name: 'garnished with Slices of Lamb, served with Pita Bread',
                    incomeRange: [a.wealthy],
                },
                {
                    name: 'garnished with Parsley & Cilantro, served with Pita Bread',
                    incomeRange: [a.wealthy],
                    priceFactor: 0.8,
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
                    priceFactor: 0.9,
                },
                { name: '', needsOne: [a.poor, a.modest] },
            ],
        },
        BREAKFAST_PLATE_FACTOR,
        Eatable.breakfast
    ),
];
