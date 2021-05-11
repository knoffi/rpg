import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { IngredientsIdea } from '../../../../classes/ingredientIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
export const nutties = [
    new DishIdea(
        {
            mainIng: {
                name: 'Nut-Ensemble',
                fitsTo: [a.druid, a.barbarian, a.elf, a.dwarf, a.adventurer],
                worksForBrothel: true,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Pecan', needs: [a.druid] },
                { name: ' Nutmeg', needs: [a.barbarian] },
                { name: ' Almond', needs: [a.elf] },
                { name: ' Harness-Nut', needs: [a.dwarf] },
                { name: ' Hazelnut', needs: [a.adventurer] },
            ],
            secondSideDishes: [
                { name: ' Cedar', needs: [a.druid] },
                { name: ' Coconut', needs: [a.barbarian] },
                { name: ' Peanut', needs: [a.elf] },
                { name: ' Cashew', needs: [a.dwarf] },
                { name: ' Walnut', needs: [a.adventurer] },
            ],
            thirdSideDishes: [
                { name: ' Beechnut', needs: [a.druid] },
                { name: ' Corn', needs: [a.barbarian] },
                { name: ' Sesame', needs: [a.elf] },
                { name: ' Pine Nuts', needs: [a.dwarf] },
                { name: ' Pistachios', needs: [a.adventurer] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 2),
        foodCategory.dessert,
        // description ist optional
        'Durable and nutritious, these Nuts and Seeds make an excellent Snack. (You gain 5 temporary Hitpoints)'
    ),
];
