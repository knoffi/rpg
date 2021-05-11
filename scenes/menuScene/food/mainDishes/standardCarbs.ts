import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/DescriptionIdea';
const a = association;
export const standardCarbs: DescriptionAsset[] = [
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
        name: ' & Sweet Potatoes',
        landRange: [a.haven, a.tropical, a.desert],
        incomeRange: [a.modest, a.wealthy],
    },
    {
        name: ' & Potato Dumplings',
        landRange: [a.village, a.forest, a.city, a.mountain],
        misfits: [a.rich],
    },
];
