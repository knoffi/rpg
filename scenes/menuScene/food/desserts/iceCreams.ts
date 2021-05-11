import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
export const icecream = [
    new DishIdea(
        {
            mainIng: {
                name: 'My Icecream',
                needsOne: [a.cleric, a.knight],
                needs: [a.adventurer, a.barbarian],
                misfits: [a.barbarian],
                landRange: [a.city],
                incomeRange: [a.wealthy],
                fitsTo: [a.druid],
                worksForBrothel: true,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Anko', needs: [a.wizard] },
                { name: ' Strawberry', needs: [a.druid] },
            ],
            secondSideDishes: [
                { name: ' Anko', needs: [a.wizard] },
                { name: ' Strawberry', needs: [a.druid] },
            ],
            thirdSideDishes: [
                { name: ' Anko', needs: [a.wizard] },
                { name: ' Strawberry', needs: [a.druid] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        foodCategory.dessert,
        // description ist optional
        'This is so awesome, you gonna like it.!'
    ),
];
