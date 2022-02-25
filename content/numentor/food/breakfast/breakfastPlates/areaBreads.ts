import { association } from '../../../../../classes/association';
import { DescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';

const a = association;
export const areaBreads: DescriptionAsset[] = [
    {
        name: 'Pancakes',
        landRange: [a.village, a.haven, a.city],
    },
    {
        name: 'Millet Pancakes',
        landRange: [a.village, a.forest, a.mountain],
    },
    { name: 'Bread Rolls', misfits: [a.tropical, a.desert] },
    {
        name: 'Whole-Grain Bread',
        landRange: [a.village, a.forest, a.mountain, a.underdark],
    },
    {
        name: 'Multigrain Bread',
        landRange: [a.village, a.forest, a.mountain, a.haven, a.city],
    },
    {
        name: 'Banana Bread',
        needs: [a.tropical],
    },
    {
        name: 'Pineapple Bread',
        needs: [a.tropical],
    },
    {
        name: 'Corn Bread',
        needs: [a.tropical],
    },
    {
        name: 'Flatbread',
        landRange: [a.desert, a.mountain, a.haven, a.village],
    },
    { name: 'Baguette', landRange: [a.city, a.village] },
    { name: 'White Bread', landRange: [a.city, a.haven] },
    {
        name: 'Pita Bread',
        landRange: [a.desert, a.mountain, a.haven],
    },
    {
        name: 'Sourdough Bread',
        landRange: [a.desert, a.mountain, a.haven],
    },
];
