import { association } from '../../../../../classes/association';
import { DishIdea } from '../../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../../classes/TavernProduct';
const a = association;
const SIMPLE_BREAKFAST_FACTOR = 0.8;
// changes may break content filler test for chapter (food menu)
export const mainBreads: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Sabich', needs: [a.desert] },
            firstSideDishes: [
                {
                    name: 'Pita Bread stuffed with Fried Eggplant, a Boiled Egg, a spicy Mango Dip & Sesame Sauce',
                    incomeRange: [a.wealthy, a.poor, a.modest],
                },
                {
                    name: 'Pita Bread stuffed with Fried Eggplant, a slice of Boiled Dragon Egg, a spicy Mango Dip & Sesame Sauce',
                    needs: [a.rich],
                },
                {
                    name: 'Pita Bread stuffed with Fried Eggplant, a slice of Boiled Sphinx Egg, a spicy Mango Dip & Sesame Sauce',
                    needs: [a.rich],
                },
                {
                    name: 'Pita Bread stuffed with Fried Eggplant, a slice of Boiled Roc Egg, a spicy Mango Dip & Sesame Sauce',
                    needs: [a.rich],
                },
            ],
        },
        SIMPLE_BREAKFAST_FACTOR,
        Eatable.breakfast
    ),
    new DishIdea(
        {
            mainIng: { name: 'Bread' },
        },
        SIMPLE_BREAKFAST_FACTOR,
        Eatable.breakfast
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Rye Bread with Butter and Marmelade',
                misfits: [a.desert, a.tropical],
            },
        },
        SIMPLE_BREAKFAST_FACTOR,
        Eatable.breakfast
    ),
];
