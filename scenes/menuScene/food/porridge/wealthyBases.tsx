import { association } from '../../../../classes/association';

export const wealthyBases = [
    {
        base: 'White Oat',
        areas: [
            association.city,
            association.haven,
            association.forest,
            association.village,
        ],
    },
    { base: 'Night Oat', areas: [association.underdark] },
    {
        base: 'Copper Millet',
        areas: [association.desert, association.mountain],
    },
    { base: 'Moonshine Rice', areas: [association.tropical] },
];
