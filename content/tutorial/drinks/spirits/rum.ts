import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const rum: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Don Salvador Rum',
                needsOne: [a.haven, a.tropical],
                incomeRange: [a.poor, a.modest],
            },
            firstSideDishes: [
                {
                    name: 'Named after a legendary pirate who died during a revolution!',
                },
            ],
        },
        1,
        Drinkable.spirit
    ),
];
