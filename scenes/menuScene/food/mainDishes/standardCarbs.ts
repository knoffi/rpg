import { association } from '../../../../classes/association';
const a = association;
export const standardCarbs = [
    {
        name: ' & Mashed Potatoes',
        fitRange: [a.village, a.mountain, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Pan Fried Potatoes',
        fitRange: [a.city, a.haven, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Boiled Potatoes',
        fitRange: [a.haven, a.village, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Deep Fried Potatoes',
        fitRange: [a.city, a.underdark, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Sweet Potatoes',
        fitRange: [
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
        fitRange: [a.city, a.underdark, a.poor, a.worker, a.sophisticated],
    },
    {
        name: ' & Potato Dumplings',
        fitRange: [a.village, a.forest, a.poor, a.worker, a.sophisticated],
    },
];
