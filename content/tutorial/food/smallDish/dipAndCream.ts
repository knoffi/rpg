import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { DishConcept } from '../../../../classes/idea/powerFitConcepts/DishConcept';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
const DIP_AND_CREAM_FACTOR = 0.9;
export const dipAndCream: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Traditional Hummus', needs: [a.desert] },
            firstSideDishes: [
                {
                    name: 'Cooked Chickpeas mashed with Sesame, Lemon Juice and Garlic, served with Pita Bread',
                    incomeRange: [a.poor, a.wealthy, a.modest],
                },
            ],
        } as DishConcept,
        DIP_AND_CREAM_FACTOR,
        Eatable.sideDish
    ),
];
