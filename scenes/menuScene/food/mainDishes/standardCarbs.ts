import { association } from '../../../../classes/association';
const a = association;
export const standardCarbs = [
    {
        name: ' & Mashed Potatoes',
        landRange: [a.village, a.mountain],
        misfits: [a.rich],
    },
    {
        name: ' & Pan Fried Potatoes',
        landRange: [a.city, a.haven],
        misfits: [a.rich],
    },
    {
        name: ' & Boiled Potatoes',
        landRange: [a.haven, a.village],
        misfits: [a.rich],
    },
    {
        name: ' & Deep Fried Potatoes',
        landRange: [a.city, a.underdark],
        misfits: [a.rich],
    },
    {
        name: ' & Sweet Potatoes',
        landRange: [a.city, a.haven, a.poor, a.tropical, a.desert],
        incomeRange: [a.modest, a.wealthy],
    },
    {
        name: ' & Potato Wedges',
        landRange: [a.city, a.underdark],
        misfits: [a.rich],
    },
    {
        name: ' & Potato Dumplings',
        landRange: [a.village, a.forest],
        misfits: [a.rich],
    },
];
