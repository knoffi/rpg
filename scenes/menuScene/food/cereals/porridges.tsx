import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
import { poorBases, wealthyBases, workerBases } from './porridgeBases';
import {
    modestPorridgeToppings,
    poorPorridgeToppings,
    wealthyPorridgeToppings,
} from './porridgeToppings';
export const a = association;
const PORRIDGE_FACTOR = 1;

export const porridges = [
    new DishIdea(
        {
            mainIng: { name: 'Porridge' },
            firstSideDishes: [...workerBases, ...poorBases, ...wealthyBases],
            secondSideDishes: [
                ...modestPorridgeToppings,
                ...poorPorridgeToppings,
                ...wealthyPorridgeToppings,
            ],
        },
        adjustPriceSetter(foodPrices.breakfast, PORRIDGE_FACTOR),
        foodCategory.breakfast
    ),
];
