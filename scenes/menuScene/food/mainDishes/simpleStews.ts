import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/DishIdea';
import { foodCategory } from '../../../../classes/TavernProduct';
import { adjustPriceSetter, foodPrices } from '../foodPrices';

const STEW_PRICE_FACTOR = 0.7;
const a = association;
export const leftoverStew =
    //TODO: an mainIngredient sollte schon erkannt werden können, ob es ein Produkt der Familie im Essen gibt. Beschleunigt alles ein wenig und reicht normalerWeise (wenn nicht, wird es später auch nicht so schlimm sein)
    new DishIdea(
        {
            mainIng: {
                name: 'Leftover Stew',
<<<<<<< HEAD
                incomeRange: [a.poor, a.modest],
=======
                fitsTo: [...landAssociations, a.poor, a.worker],
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
            },
            firstSideDishes: [
                {
                    name: ' with Chicken Legs',
<<<<<<< HEAD
                },
                {
                    name: ' with Beef Chunks',
                },
                {
                    name: ' with Pork Chunks',
                    landRange: [a.city, a.village, a.tropical],
                },
                {
                    name: ' with Boar Chunks',
                    landRange: [a.forest, a.mountain],
                },
                {
                    name: ' with Chick Peas, Coriander',
                    landRange: [a.desert],
                },
                {
                    name: ' with Lamb Chunks',
                    landRange: [a.desert, a.mountain],
                    misfits: [a.poor],
                },
                {
                    name: ' with Camel Chunks',
                    landRange: [a.desert],
                    misfits: [a.poor],
                },
                {
                    name: ' with Beans, Onions',
                },
                {
                    name: ' with Dried Squid',
                    needs: [a.haven],
                    misfits: [a.poor],
                },
                {
                    name: ' with Pumpkin Chunks',
                    landRange: [a.forest, a.village],
                },
                {
                    name: ' with Shrimps',
                    needs: [a.haven],
                    incomeRange: [a.modest],
                },
                {
                    name: ' with Anchovies',
                    needs: [a.haven],
                    incomeRange: [a.poor],
                },
                {
                    name: ' with Smoked Salmon',
                    landRange: [a.haven, a.village, a.city, a.modest],
                },
                {
                    name: ' with Boar Feet',
                    landRange: [a.village, a.forest, a.mountain],
                    incomeRange: [a.poor],
                },
                {
                    name: ' with Pig Feet',
                    landRange: [a.village, a.city, a.forest],
                    incomeRange: [a.poor],
                },
                {
                    name: ' with Pickled Mole',
                    landRange: [a.underdark, a.modest],
                    incomeRange: [a.modest],
                },
                {
                    name: ' with Earth Worms',
                    landRange: [a.underdark],
                    incomeRange: [a.poor],
                },
            ],
            secondSideDishes: [
                {
                    name: ' and Bread',
                    landRange: [a.city, a.village],
                    incomeRange: [a.poor],
                },
                {
                    name: ' and Potatoes',
                    incomeRange: [a.modest],
                },
                {
                    name: ' and Cabbage',
                    landRange: [a.forest],
                    incomeRange: [a.poor],
                },
                {
                    name: ' and Turmeric Rice',
                    landRange: [a.desert, a.haven],
                    incomeRange: [a.modest],
                },
                {
                    name: ' and Coconut Rice',
                    landRange: [a.tropical],
                    incomeRange: [a.modest],
                },
                {
                    name: ' and Brown Rice',
                    landRange: [a.tropical, a.desert, a.haven],
                    incomeRange: [a.modest],
                },
                {
                    name: ' and Flat Bread',
                    landRange: [a.tropical, a.mountain, a.desert],
                    incomeRange: [a.poor],
=======
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
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
                },
            ],
        },
        adjustPriceSetter(foodPrices.mainDish, STEW_PRICE_FACTOR),
        foodCategory.mainDish
    );
