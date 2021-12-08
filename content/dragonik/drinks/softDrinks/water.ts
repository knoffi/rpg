import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
const WATER_FACTOR = 0.5;
export const water: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Water',
            },
            firstSideDishes: [
                {
                    name: 'A glass of water from the nearest well.',
                    landRange: [a.desert, a.city, a.haven],
                },
                {
                    name: 'A glass of water from the nearest river.',
                    landRange: [a.tropical, a.forest, a.village],
                },
            ],
        },
        WATER_FACTOR,
        Drinkable.lemonade
    ),
];
