import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';

const a = association;
const STEW_PRICE_FACTOR = { [a.modest]: 0.7 };
export const leftoverStew = new DishIdea(
    {
        mainIng: {
            name: 'Leftover Stew',
            incomeRange: [a.poor, a.modest],
            powerFits: [a.poor],
        },
        firstSideDishes: [
            {
                name: ' with Chicken Legs',
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
                needs: [a.desert],
            },
            {
                name: ' with Lamb Chunks',
                landRange: [a.desert, a.mountain],
                misfits: [a.poor],
            },
            {
                name: ' with Camel Chunks',
                needs: [a.desert],
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
                landRange: [a.underdark],
                incomeRange: [a.modest],
            },
            {
                name: ' with Lizard Chunks',
                landRange: [a.underdark],
                incomeRange: [a.wealthy],
            },
            {
                name: ' with Minced Earth Worms',
                landRange: [a.underdark],
                incomeRange: [a.poor],
            },
        ],
        secondSideDishes: [
            {
                name: ' and Bread Chunks',
                landRange: [a.city, a.village],
                needs: [a.poor],
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
                needs: [a.desert],
                incomeRange: [a.modest],
            },
            {
                name: ' and Coconut Rice',
                needs: [a.tropical],
                incomeRange: [a.modest],
            },
            {
                name: ' and Brown Rice',
                needsOne: [a.tropical, a.desert, a.haven],
                incomeRange: [a.modest],
            },
            {
                name: ' and Flat Bread',
                needsOne: [a.tropical, a.mountain, a.desert],
                incomeRange: [a.poor],
            },
        ],
    },
    STEW_PRICE_FACTOR,
    Eatable.mainDish
);
