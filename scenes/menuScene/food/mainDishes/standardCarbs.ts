import { association } from '../../../../classes/association';
const a = association;
export const standardCarbs = [
    {
        name: ' & Mashed Potatoes',
        fitsTo: [a.village, a.mountain, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Pan Fried Potatoes',
        fitsTo: [a.city, a.haven, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Boiled Potatoes',
        fitsTo: [a.haven, a.village, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Deep Fried Potatoes',
        fitsTo: [a.city, a.underdark, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Sweet Potatoes',
        fitsTo: [
            a.city,
            a.haven,
            a.poor,
            a.tropical,
            a.desert,
            a.worker,
            a.sophisticated,
        ],
    },
    {
        name: ' & Potato Wedges',
        fitsTo: [a.city, a.underdark, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Potato Dumplings',
        fitsTo: [a.village, a.forest, a.poor, a.worker, a.sophisticated],
    },
];
