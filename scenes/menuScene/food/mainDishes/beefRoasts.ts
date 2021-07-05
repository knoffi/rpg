import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { foodPrices } from '../../priceSetting/foodPriceSetters';
import { adjustPriceSetter } from '../../priceSetting/priceSetters';
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
                    incomeRange: [a.poor, a.modest, a.wealthy],
                },
                firstSideDishes: [
                    {
                        name: ' in Red Wine Sauce',
                        incomeRange: [a.wealthy],
                    },
                    {
                        name: ' in Port Wine Sauce',
                        incomeRange: [a.wealthy],
                    },
                    {
                        name: ' in Pepper Sauce',
                        incomeRange: [a.modest, a.poor],
                    },
                    {
                        name: ' in Brown Sauce',
                        incomeRange: [a.modest, a.poor],
                    },
                ],
                secondSideDishes: standardGreens,
                thirdSideDishes: standardCarbs,
            },
            adjustPriceSetter(foodPrices.mainDish, ROAST_BEEF_FACTOR),
            Eatable.mainDish
        ),

        new DishIdea(
            {
                mainIng: {
                    name: 'Roast Lamb',
                    misfits: [a.rich],
                    landRange: [a.village, a.city, a.mountain],
                },
                firstSideDishes: [
                    {
                        name: ' in Red Wine Sauce',
                        incomeRange: [a.wealthy],
                    },
                    {
                        name: ' in Port Wine Sauce',
                        incomeRange: [a.wealthy],
                    },
                    {
                        name: ' in Pepper Sauce',
                        incomeRange: [a.modest, a.poor],
                    },
                    {
                        name: ' in Brown Sauce',
                        incomeRange: [a.modest, a.poor],
                    },
                ],
                secondSideDishes: standardGreens,
                thirdSideDishes: standardCarbs,
            },
            adjustPriceSetter(foodPrices.mainDish, ROAST_LAMB_FACTOR),
            Eatable.mainDish
        ),
    ];
