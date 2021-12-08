import { association } from '../../../../../classes/association';
import { DishIdea } from '../../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../../classes/TavernProduct';
import { poorBases, wealthyBases, workerBases } from './porridgeBases';
import {
    modestPorridgeToppings,
    poorPorridgeToppings,
    wealthyPorridgeToppings,
} from './porridgeToppings';
const a = association;
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
        PORRIDGE_FACTOR,
        Eatable.breakfast
    ),
];
