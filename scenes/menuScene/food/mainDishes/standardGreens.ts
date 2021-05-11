import { association } from '../../../../classes/association';

const a = association;
export const standardGreens = [
    {
        name: ' with Broccoli, Peas',
        fitsTo: [a.city, a.forest, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Cauliflower, Peas',
        fitsTo: [a.village, a.mountain, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Cabbage, Carrots',
        fitsTo: [a.village, a.forest, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Pickled Cabbage, Mustard',
        fitsTo: [a.village, a.mountain, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Mushrooms',
        fitsTo: [a.forest, a.underdark, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Red Beet',
        fitsTo: [a.mountain, a.underdark, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Onions, Apples',
        fitsTo: [a.forest, a.village, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Carrots, Peas',
        fitsTo: [a.village, a.city, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Brussel Sprouts',
        fitsTo: [a.village, a.city, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Cole Slaw',
        fitsTo: [a.city, a.haven, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' with Spinach',
        fitsTo: [a.haven, a.mountain, a.poor, a.worker, a.sophisticated],
    },
];
