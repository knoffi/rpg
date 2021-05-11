import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/DescriptionIdea';
const a = association;
export const standardCarbs: DescriptionAsset[] = [
    {
        name: ' & Mashed Potatoes',
<<<<<<< HEAD
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
        name: ' & Sweet Potatoes',
        landRange: [a.haven, a.tropical, a.desert],
        incomeRange: [a.modest, a.wealthy],
    },
    {
        name: ' & Potato Dumplings',
        landRange: [a.village, a.forest, a.city, a.mountain],
        misfits: [a.rich],
=======
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
>>>>>>> b56654fa94832ea8632d95518cf848dfa99ed6f8
    },
];
