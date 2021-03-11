import { association } from '../../../../classes/association';
const a = association;
export const standardCarbs = [
    {
        name: ' & Mashed Potatoes',
        fitRange: [a.village, a.mountain, a.poor, a.modest, a.wealthy],
    },
    {
        name: ' & Pan Fried Potatoes',
        fitRange: [a.city, a.haven, a.poor, a.modest, a.wealthy],
    },
    {
        name: ' & Boiled Potatoes',
        fitRange: [a.haven, a.village, a.poor, a.modest, a.wealthy],
    },
    {
        name: ' & Deep Fried Potatoes',
        fitRange: [a.city, a.underdark, a.poor, a.modest, a.wealthy],
    },
    {
        name: ' & Sweet Potatoes',
        fitRange: [
            a.city,
            a.haven,
            a.poor,
            a.tropical,
            a.desert,
            a.modest,
            a.wealthy,
        ],
    },
    {
        name: ' & Potato Wedges',
        fitRange: [a.city, a.underdark, a.poor, a.modest, a.wealthy],
    },
    {
        name: ' & Potato Dumplings',
        fitRange: [a.village, a.forest, a.poor, a.modest, a.wealthy],
    },
];
