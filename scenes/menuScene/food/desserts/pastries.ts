import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { IngredientsIdea } from '../../../../classes/ingredientIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
export const pastries = [
    new DishIdea(
        {
            mainIng: {
                name: 'Cartwheel Cookie',
                needsOne: [a.forest, a.gnome],
                misfits: [a.knight],
                landRange: [a.city],
                incomeRange: [a.poor],
                fitsTo: [a.halfling],
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Chocolate', needs: [a.city] },
                { name: ' Peanut', needs: [a.tropical] },
                { name: ' Hazelnut', needs: [a.forest] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        foodCategory.dessert,
        // description ist optional
        'A humongous Cookie. Remembers Giants of their Grandmother. (Even fills the Gloomiest with a Spark of Happiness)'
    ),
];
