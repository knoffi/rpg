import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
export const cake = [
    new DishIdea(
        {
            mainIng: {
                name: 'Cheesecake',
                needsOne: [a.village, a.modest],
                misfits: [a.barbarian],
                incomeRange: [a.wealthy],
                fitsTo: [a.human, a.gnome, a.halfling],
                worksForBrothel: true,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [{ name: ' Strawberry', needs: [a.village] }],
            secondSideDishes: [{ name: ' Blueberry', needs: [a.forest] }],
            thirdSideDishes: [{ name: ' without Topping', needs: [a.village] }],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        Eatable.dessert,
        // description ist optional
        'A juicy Piece, creamy and uplifting. (The next 1 in any Charisma Check is turned into a 10 instead)'
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Black Forest Gateau',
                needsOne: [a.forest, a.knight],
                misfits: [a.barbarian],
                incomeRange: [a.wealthy],
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
        Eatable.dessert,
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
            firstSideDishes: [{ name: ' Glazed', needs: [a.wealthy] }],
            secondSideDishes: [
                { name: ' candied Lemons', needs: [a.tropical] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        Eatable.dessert,
        // description ist optional
        'Sour, sweet and crumbly. When Life gives you Lemons... (The next 1 in any Intelligence Check is turned into a 10 instead)'
    ),
];
