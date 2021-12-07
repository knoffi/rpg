import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const STEAK_FACTOR = 1.2;
const a = association;
export const steaks = [
    new DishIdea(
        {
            mainIng: {
                name: 'Chauteaubriand Steak',
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' with Fried Potatoes',
                },
            ],
        },
        STEAK_FACTOR,
        Eatable.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Chauteaubriand Steak',
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' with Beans',
                },
            ],
        },
        STEAK_FACTOR,
        Eatable.mainDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Chauteaubriand Steak',
                incomeRange: [a.rich],
            },
            firstSideDishes: [
                {
                    name: ' with Mashed Potatoes',
                },
            ],
        },
        STEAK_FACTOR,
        Eatable.mainDish
    ),
];
