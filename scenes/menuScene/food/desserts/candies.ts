import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
export const candies = [
    new DishIdea(
        {
            mainIng: {
                name: 'Mochi',
                needsOne: [a.soldier, a.forest, a.tiefling, a.haven],
                misfits: [a.knight],
                fitsTo: [a.druid, a.modest],
                worksForBrothel: false,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Anko', needs: [a.tiefling] },
                { name: ' Strawberry', needs: [a.village] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        foodCategory.dessert,
        // description ist optional
        'The first Mochi fell down from the Moon, because a Rabbit up there was careless. (You gain Advantage on the next Jumping Check)'
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Mochi',
                needsOne: [a.soldier, a.forest, a.tiefling, a.haven],
                misfits: [a.knight],
                fitsTo: [a.druid, a.modest],
                worksForBrothel: false,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Anko', needs: [a.tiefling] },
                { name: ' Strawberry', needs: [a.village] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        foodCategory.dessert,
        // description ist optional
        'The first Mochi fell down from the Moon, because a Rabbit up there was careless. (You gain Advantage on the next Jumping Check)'
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Baklava',
                needsOne: [a.desert, a.city],
                misfits: [a.poor],
                incomeRange: [a.rich],
                fitsTo: [a.human, a.soldier, a.wizard],
                worksForBrothel: true,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [{ name: ' Pistachios', needs: [a.desert] }],
            secondSideDishes: [
                { name: ' Almonds', needs: [a.city] },
                { name: ' Strawberry', needs: [a.druid] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 4),
        foodCategory.dessert,
        // description ist optional
        'A special Treat, handmade from thin layers of puff pastry, fine nuts and palm sugar. (Ignore the next 5 Damage by Fire)'
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'S´mores',
                misfits: [a.haven, a.city],
                incomeRange: [a.poor],
                fitsTo: [
                    a.forest,
                    a.halfling,
                    a.mountain,
                    a.adventurer,
                    a.dwarf,
                ],
                worksForBrothel: false,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [{ name: ' Chocolate', needs: [a.forest] }],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        foodCategory.dessert,
        // description ist optional
        'A traditional Camping Dessert. Like a Sandwich, but more addictive. (During your Night Watch you gain Advantage on your Wisdom Check)'
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Jelly Droplets',
                misfits: [a.village, a.forest],
                incomeRange: [a.wealthy],
                fitsTo: [a.elf, a.gnome, a.bard, a.underdark],
                worksForBrothel: false,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Apple', needs: [a.elf] },
                { name: ' Plum', needs: [a.gnome] },
                { name: ' Mushroom', needs: [a.underdark] },
                { name: ' Raspberry', needs: [a.bard] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 2),
        foodCategory.dessert,
        // description ist optional
        'Strange little pearls. Squishy and juicy. How they are made is a secret...  (Ignore the next 5 Damagefrom Falling)'
    ),
];
