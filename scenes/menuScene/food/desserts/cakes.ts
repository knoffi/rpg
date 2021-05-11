import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { IngredientsIdea } from '../../../../classes/ingredientIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
export const cake = [
    new DishIdea(
        {
            mainIng: {
                name: 'Cheesecake',
                needsOne: [a.village, a.worker],
                misfits: [a.barbarian],
                incomeRange: [a.sophisticated],
                fitsTo: [a.human, a.gnome, a.halfling],
                worksForBrothel: true,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [{ name: ' Strawberry', needs: [a.village] }],
            secondSideDishes: [{ name: ' Blueberry', needs: [a.forest] }],
            thirdSideDishes: [{ name: ' without Topping', needs: [a.village] }],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        foodCategory.dessert,
        // description ist optional
        'A juicy Piece, creamy and uplifting. (The next 1 in any Charisma Check is turned into a 10 instead)'
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Black Forest Gateau',
                needsOne: [a.forest, a.nobel],
                misfits: [a.barbarian],
                incomeRange: [a.sophisticated],
                fitsTo: [a.forest, a.gnome, a.halfling, a.mountain],
                worksForBrothel: true,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Cherry (without Alcohol)', needs: [a.cleric] },
            ],
            secondSideDishes: [
                { name: ' Cherry (with Alcohol)', needs: [a.mountain] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 2),
        foodCategory.dessert,
        // description ist optional
        'The Original! Sweet Cherrys and a lot of Cream. (The next 1 in any Wisdom Check is turned into a 10 instead)'
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Lemon Cake',
                needsOne: [a.tropical, a.bard],
                misfits: [a.underdark],
                landRange: [a.city],
                fitsTo: [a.druid, a.adventurer],
                worksForBrothel: true,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [{ name: ' Glazed', needs: [a.sophisticated] }],
            secondSideDishes: [
                { name: ' candied Lemons', needs: [a.tropical] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        foodCategory.dessert,
        // description ist optional
        'Sour, sweet and crumbly. When Life gives you Lemons... (The next 1 in any Intelligence Check is turned into a 10 instead)'
    ),
];
