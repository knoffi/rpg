import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
import { standardCarbs } from './standardCarbs';
import { standardGreens } from './standardGreens';

const a = association;
const ROAST_PORK_FACTOR = 1.3;
export const porkRoasts = [
    new DishIdea(
        {
            mainIng: {
                name: 'Roast Pork',
<<<<<<< HEAD
                misfits: [a.rich, a.tropical, a.desert],
=======
                fitsTo: [
                    a.village,
                    a.city,
                    a.forest,
                    a.mountain,
                    a.haven,
                    a.underdark,
                    a.poor,
                    a.worker,
                    a.sophisticated,
                ],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
            },
            firstSideDishes: [
                {
                    name: ' in Brown Sauce',
<<<<<<< HEAD
                    incomeRange: [a.modest, a.poor],
                },
                {
                    name: ' in Maple-Balsamic Sauce',
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' in Mustard Sauce',
                    incomeRange: [a.modest, a.poor],
                },
                {
                    name: ' in Beer Sauce',
                    incomeRange: [a.modest, a.poor],
=======
                    fitsTo: [...landAssociations, a.worker, a.poor],
                },
                {
                    name: ' in Maple-Balsamic Sauce',
                    fitsTo: [...landAssociations, a.sophisticated],
                },
                {
                    name: ' in Mustard Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
                },
                {
                    name: ' in Beer Sauce',
                    fitsTo: [...landAssociations, a.worker, a.poor],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        adjustPriceSetter(foodPrices.mainDish, ROAST_PORK_FACTOR),
        foodCategory.mainDish
    ),
];
