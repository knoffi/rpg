import { landAssociations } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';
import { a } from '../porridge/porridge';

const STEW_PRICE_FACTOR = 0.7;
export const leftoverStew =
    //TODO: an mainIngredient sollte schon erkannt werden können, ob es ein Produkt der Familie im Essen gibt. Beschleunigt alles ein wenig und reicht normalerWeise (wenn nicht, wird es später auch nicht so schlimm sein)
    new DishIdea(
        {
            mainIng: {
                name: 'Leftover Stew',
                fitsTo: [...landAssociations, a.poor, a.worker],
            },
            firstSideDishes: [
                {
                    name: ' with Chicken Legs',
                    fitsTo: [...landAssociations, a.worker, a.poor],
                },
                {
                    name: ' with Beef Chunks',
                    fitsTo: [...landAssociations, a.worker, a.poor],
                },
                {
                    name: ' with Pork Chunks',
                    fitsTo: [a.city, a.village, a.tropical, a.worker, a.poor],
                },
                {
                    name: ' with Boar Chunks',
                    fitsTo: [a.forest, a.mountain, a.worker, a.poor],
                },
                {
                    name: ' with Chick Peas, Coriander',
                    fitsTo: [a.desert, a.worker, a.poor],
                },
                {
                    name: ' with Lamb Chunks',
                    fitsTo: [a.desert, a.mountain, a.worker],
                },
                {
                    name: ' with Beans, Onions',
                    fitsTo: [...landAssociations, a.worker],
                },
                { name: ' with Dried Squid', fitsTo: [a.haven, a.worker] },
                {
                    name: ' with Pumpkin Chunks',
                    fitsTo: [a.forest, a.village, a.worker],
                },
                { name: ' with Shrimps', fitsTo: [a.haven, a.worker] },
                { name: ' with Anchovies', fitsTo: [a.haven, a.poor] },
                {
                    name: ' with Smoked Salmon',
                    fitsTo: [a.haven, a.village, a.city, a.worker],
                },
                {
                    name: ' with Boar Feet',
                    fitsTo: [a.village, a.forest, a.mountain, a.poor],
                },
                {
                    name: ' with Pig Feet',
                    fitsTo: [a.village, a.city, a.forest, a.poor],
                },
                {
                    name: ' with Pickled Mole',
                    fitsTo: [a.underdark, a.worker],
                },
                { name: ' with Earth Worms', fitsTo: [a.underdark, a.poor] },
            ],
            secondSideDishes: [
                { name: ' and Bread', fitsTo: [a.city, a.village, a.poor] },
                {
                    name: ' and Potatoes',
                    fitsTo: [...landAssociations, a.worker],
                },
                { name: ' and Cabbage', fitsTo: [a.forest, a.poor] },
                {
                    name: ' and Rice',
                    fitsTo: [a.tropical, a.desert, a.haven, a.worker],
                },
                {
                    name: ' and Flat Bread',
                    fitsTo: [a.tropical, a.mountain, a.desert, a.poor],
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, STEW_PRICE_FACTOR),
        foodCategory.mainDish
    );
