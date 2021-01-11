import { association } from '../../../../classes/Adjectives';

export const poorBases = [
    {
        base: 'Grey Oat',
        areas: [
            association.village,
            association.city,
            association.forest,
            association.haven,
        ],
    },
    {
        base: 'Millet',
        areas: [
            association.mountain,
            association.desert,
            association.underdark,
        ],
    },
    { base: 'Rice', areas: [association.tropical] },
];
