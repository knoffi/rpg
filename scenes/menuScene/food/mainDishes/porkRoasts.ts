import { association, landAssociations } from '../../../../classes/association';
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
            },
            firstSideDishes: [
                {
                    name: ' in Brown Sauce',
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
                },
            ],
            secondSideDishes: standardGreens,
            thirdSideDishes: standardCarbs,
        },
        adjustPriceSetter(foodPrices.mainDish, ROAST_PORK_FACTOR),
        foodCategory.mainDish
    ),
];
