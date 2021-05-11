import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
const a = association;
export const Fruities = [
    new DishIdea(
        {
            mainIng: {
                name: 'Fruit Salad',
                needsOne: [a.elf, a.tropical],
                misfits: [a.dwarf],
                incomeRange: [a.wealthy],
                fitsTo: [a.druid],
                worksForBrothel: true,
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Pineapple', needs: [a.tropical] },
                { name: ' Strawberry', needs: [a.druid] },
                { name: ' Pomegranate', needs: [a.elf] },
            ],
            secondSideDishes: [
                { name: ' Mangostane', needs: [a.tropical] },
                { name: ' Gooseberry', needs: [a.druid] },
                { name: ' Pitaya', needs: [a.elf] },
            ],
            thirdSideDishes: [
                { name: ' Lychee', needs: [a.tropical] },
                { name: ' Golden Pear', needs: [a.druid] },
                { name: ' Physalis', needs: [a.elf] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        foodCategory.dessert,
        // description ist optional
        'This Dish is very healthy, you should eat it more often. (The next time you make a Constitution Save, you have Advantage)'
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Floral Salad',
                needsOne: [a.druid, a.village],
                misfits: [a.barbarian, a.dwarf],
                incomeRange: [a.knight, a.poor],
                fitsTo: [a.elf],
            },
            // first, second, third sideDishes sind optional
            firstSideDishes: [
                { name: ' Dandelion', needs: [a.village] },
                { name: ' Lavender', needs: [a.druid] },
                { name: ' Elderflower', needs: [a.elf] },
            ],
            secondSideDishes: [
                { name: ' Sunflower', needs: [a.village] },
                { name: ' Marigold', needs: [a.druid] },
                { name: ' Snapdragon', needs: [a.elf] },
            ],
            thirdSideDishes: [
                { name: ' Pansy', needs: [a.village] },
                { name: ' Hibiscus', needs: [a.druid] },
                { name: ' Dahlia', needs: [a.elf] },
            ],
        },
        adjustPriceSetter(foodPrices.desserts, 1),
        foodCategory.dessert,
        // description ist optional
        'A mix of freshly picked blossoms, dwarfs dislike it. (The next time you make a Charisma Save, you have Advantage)'
    ),
];
