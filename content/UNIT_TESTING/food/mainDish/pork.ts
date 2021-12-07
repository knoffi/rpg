import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
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
        PORK_FACTOR,
        Eatable.mainDish
    ),
];
