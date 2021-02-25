import { association } from '../../../../classes/association';
import { allAreas } from './allAreas';

const a = association;
export const areaBreads = [
    { bread: 'Bread Rolls', areas: allAreas },
    {
        bread: 'Whole-Grain Bread',
        areas: [a.village, a.forest, a.mountain, a.underdark],
    },
    {
        bread: 'Multigrain Bread',
        areas: [a.village, a.forest, a.mountain, a.haven, a.city],
    },
    {
        bread: 'Millet Pancakes',
        areas: [a.village, a.forest, a.mountain],
    },
    {
        bread: 'Pancakes',
        areas: [a.village, a.haven, a.city],
    },
    {
        bread: 'Flatbread',
        areas: [a.desert, a.tropical, a.mountain, a.haven, a.village],
    },
    { bread: 'Baguette', areas: [a.city, a.village] },
    { bread: 'White Bread', areas: [a.city, a.haven, a.tropical] },
    {
        bread: 'Pita Bread',
        areas: [a.desert, a.mountain, a.haven, a.tropical],
    },
    {
        bread: 'Sourdough',
        areas: [a.desert, a.mountain, a.haven, a.tropical],
    },
];
