import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const STEAK_FACTOR = 1.2;
const a = association;
export const steaks = [
    new DishIdea(
        {
            mainIng: {
                name: 'Chateaubriand Steak',
<<<<<<< HEAD
                needs: [a.rich],
=======
                fitsTo: [...landAssociations, a.rich],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
            },
            firstSideDishes: [
                {
                    name: ' with Gold Plated Duchesse Potatoes',
<<<<<<< HEAD
=======
                    // maybe fitsTo should be an optional parameter. If it is undefined, then this will be seen as [...landAssociations, ...incomeAssociations] when it comes to fitting and filtering
                    fitsTo: [...landAssociations, a.rich],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, STEAK_FACTOR),
        foodCategory.mainDish
    ),
];
