import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
export const pudding = [
    new DishIdea(
        {
            mainIng: {
                name: 'Milk Pudding',
                worksForAssasines: true,
                worksForBrothel: true,
                worksForThiefs: true,
            },
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        Eatable.dessert
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'My Pudding',
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
        Eatable.dessert,
        // description ist optional
        'This is so awesome, you gonna like it.!'
    ),
];
