import { association, landAssociations } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
import { standardCarbs } from './standardCarbs';
import { standardGreens } from './standardGreens';
const a = association;

const ROAST_BEEF_FACTOR = 1.5;
const ROAST_LAMB_FACTOR = 1.6;
export const beefRoasts =
    //TODO: an mainIngredient sollte schon erkannt werden können, ob es ein Produkt der Familie im Essen gibt. Beschleunigt alles ein wenig und reicht normalerWeise (wenn nicht, wird es später auch nicht so schlimm sein)
    [
        new DishIdea(
            {
                mainIng: {
                    name: 'Roast Beef',
                    fitRange: [
                        ...landAssociations,
                        a.poor,
                        a.modest,
                        a.wealthy,
                    ],
                },
                firstSideDishes: [
                    {
                        name: ' in Red Wine Sauce',
                        fitRange: [...landAssociations, a.wealthy],
                    },
                    {
                        name: ' in Port Wine Sauce',
                        fitRange: [...landAssociations, a.wealthy],
                    },
                    {
                        name: ' in Pepper Sauce',
                        fitRange: [...landAssociations, a.modest, a.poor],
                    },
                    {
                        name: ' in Brown Sauce',
                        fitRange: [...landAssociations, a.modest, a.poor],
                    },
                ],
                secondSideDishes: standardGreens,
                thirdSideDishes: standardCarbs,
            },
            adjustPriceSetter(foodPrices.mainDish, ROAST_BEEF_FACTOR),
            foodCategory.mainDish
        ),

        new DishIdea(
            {
                mainIng: {
                    name: 'Roast Lamb',
                    fitRange: [
                        a.village,
                        a.city,
                        a.mountain,
                        a.poor,
                        a.modest,
                        a.wealthy,
                    ],
                },
                firstSideDishes: [
                    {
                        name: ' in Red Wine Sauce',
                        fitRange: [...landAssociations, a.wealthy],
                    },
                    {
                        name: ' in Port Wine Sauce',
                        fitRange: [...landAssociations, a.wealthy],
                    },
                    {
                        name: ' in Pepper Sauce',
                        fitRange: [...landAssociations, a.modest, a.poor],
                    },
                    {
                        name: ' in Brown Sauce',
                        fitRange: [...landAssociations, a.modest, a.poor],
                    },
                ],
                secondSideDishes: standardGreens,
                thirdSideDishes: standardCarbs,
            },
            adjustPriceSetter(foodPrices.mainDish, ROAST_LAMB_FACTOR),
            foodCategory.mainDish
        ),
    ];
