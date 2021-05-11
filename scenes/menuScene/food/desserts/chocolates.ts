import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
export const chocolates = [
    new DishIdea(
        {
            mainIng: {
                name: 'Mousse au Chocolate',
                needsOne: [a.cleric, a.knight, a.wizard, a.drow],
                misfits: [a.barbarian, a.modest],
                landRange: [a.city],
                incomeRange: [a.rich],
                worksForBrothel: true,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Cherrys', needs: [a.wizard] },
                { name: ' Waffle', needs: [a.cleric] },
                { name: ' Torture Spores', needs: [a.drow] },
                { name: ' Goldenberrys', needs: [a.knight] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 4),
        foodCategory.dessert,
        // description ist optional
        'Some poor People dream their whole life of this exquisite Dessert, never being able to taste it. (The next Person you cross is more willing to forgive you)'
    ),
];
