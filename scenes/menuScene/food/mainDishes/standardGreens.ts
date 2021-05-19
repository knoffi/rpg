import { association } from '../../../../classes/association';

const a = association;
export const standardGreens = [
    {
        name: ' with Broccoli, Peas',
        landRange: [a.city, a.forest],
        misfits: [a.rich],
    },
    {
        name: ' with Pumpkin Chunks, Shallots',
        landRange: [a.city, a.forest],
        misfits: [a.rich],
    },
    {
        name: ' with Cauliflower, Peas',
        landRange: [a.village, a.mountain],
        misfits: [a.rich],
    },
    {
        name: ' with Cabbage, Carrots',
        landRange: [a.village, a.forest],
        misfits: [a.rich],
    },
    {
        name: ' with Pickled Cabbage, Mustard Sauce',
        landRange: [a.village, a.mountain],
        misfits: [a.rich],
    },
    {
        name: ' with Mushrooms',
        landRange: [a.forest, a.underdark],
        misfits: [a.rich],
    },
    {
        name: ' with Red Beet',
        landRange: [a.mountain, a.underdark],
        misfits: [a.rich],
    },
    {
        name: ' with Onions, Apples',
        landRange: [a.forest, a.village],
        misfits: [a.rich],
    },
    {
        name: ' with Carrots, Peas',
        landRange: [a.village, a.city],
        misfits: [a.rich],
    },
    {
        name: ' with Brussel Sprouts',
        landRange: [a.village, a.city],
        misfits: [a.rich],
    },
    {
        name: ' with Cole Slaw',
        landRange: [a.city, a.haven],
        misfits: [a.rich],
    },
    {
        name: ' with Spinach',
        landRange: [a.haven, a.mountain],
        misfits: [a.rich],
    },
    {
        name: ' with Bell Pepper, Coriander',
        needs: [a.desert],
        misfits: [a.rich],
    },
    {
        name: ' with Eggplant, Garlic',
        needs: [a.desert],
        misfits: [a.rich],
    },
    {
        name: ' with Bell Pepper, Lemongrass',
        needs: [a.tropical],
        misfits: [a.rich],
    },
    {
        name: ' with Pineapple Chunks, Peanuts',
        needs: [a.tropical],
        misfits: [a.rich],
    },
];
