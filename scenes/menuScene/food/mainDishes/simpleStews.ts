import { landAssociations } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
import { a } from '../porridge/porridge';

export const leftoverStew =
    //TODO: an mainIngredient sollte schon erkannt werden können, ob es ein Produkt der Familie im Essen gibt. Beschleunigt alles ein wenig und reicht normalerWeise (wenn nicht, wird es später auch nicht so schlimm sein)
    new DishIdea(
        {
            mainIng: {
                name: 'Leftover Stew',
                fitRange: [...landAssociations, a.poor, a.worker],
            },
            firstSideDishes: [
                {
                    name: ' with Chicken Legs',
                    fitRange: [...landAssociations, a.worker, a.poor],
                },
                {
                    name: ' with Beef Chunks',
                    fitRange: [...landAssociations, a.worker, a.poor],
                },
                {
                    name: ' with Pork Chunks',
                    fitRange: [a.city, a.village, a.tropical, a.worker, a.poor],
                },
                {
                    name: ' with Boar Chunks',
                    fitRange: [a.forest, a.mountain, a.worker, a.poor],
                },
                {
                    name: ' with Chick Peas, Coriander',
                    fitRange: [a.desert, a.worker, a.poor],
                },
                {
                    name: ' with Lamb Chunks',
                    fitRange: [a.desert, a.mountain, a.worker],
                },
                {
                    name: ' with Beans, Onions',
                    fitRange: [...landAssociations, a.worker],
                },
                { name: ' with Dried Squid', fitRange: [a.haven, a.worker] },
                {
                    name: ' with Pumpkin Chunks',
                    fitRange: [a.forest, a.village, a.worker],
                },
                { name: ' with Shrimps', fitRange: [a.haven, a.worker] },
                { name: ' with Anchovies', fitRange: [a.haven, a.poor] },
                {
                    name: ' with Smoked Salmon',
                    fitRange: [a.haven, a.village, a.city, a.worker],
                },
                {
                    name: ' with Boar Feet',
                    fitRange: [a.village, a.forest, a.mountain, a.poor],
                },
                {
                    name: ' with Pig Feet',
                    fitRange: [a.village, a.city, a.forest, a.poor],
                },
                {
                    name: ' with Pickled Mole',
                    fitRange: [a.underdark, a.worker],
                },
                { name: ' with Earth Worms', fitRange: [a.underdark, a.poor] },
            ],
            secondSideDishes: [
                { name: ' and Bread', fitRange: [a.city, a.village, a.poor] },
                {
                    name: ' and Potatoes',
                    fitRange: [...landAssociations, a.worker],
                },
                { name: ' and Cabbage', fitRange: [a.forest, a.poor] },
                {
                    name: ' and Rice',
                    fitRange: [a.tropical, a.desert, a.haven, a.worker],
                },
                {
                    name: ' and Flat Bread',
                    fitRange: [a.tropical, a.mountain, a.desert, a.poor],
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, 0.6),
        foodCategory.mainDish
    );
