import { association } from '../../../classes/association';
import { NounIdea } from '../../../classes/NounIdea';

export const a = association;
export const preyNormalAnimals: NounIdea[] = [
    {
        name: 'Moose',
        incomeRange: [a.poor, a.modest],
        landRange: [a.mountain, a.forest, a.village],
    },
    {
        name: 'Beaver',
        worksForBrothel: true,
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest],
    },
    {
        name: 'Salmon',
        incomeRange: [a.wealthy, a.modest],
        landRange: [a.haven, a.village, a.city],
    },
    {
        name: 'Pony',
        incomeRange: [a.poor, a.modest],
        landRange: [a.village, a.city],
    },
    {
        name: 'Lamb',
        incomeRange: [a.poor, a.modest],
        landRange: [a.village, a.desert, a.mountain],
    },
    {
        name: 'Crow',
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village, a.city],
        worksForThiefs: true,
    },
    {
        name: 'Raven',
        worksForAssasines: true,
        worksForThiefs: true,
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village, a.city],
    },
    {
        name: 'Sheep',
        incomeRange: [a.poor, a.modest],
        landRange: [a.village, a.mountain],
    },
    {
        name: 'Monkey',
        incomeRange: [a.poor, a.modest],
        needsOne: [a.tropical, a.desert],
    },
    {
        name: 'Parrot',
        incomeRange: [a.poor, a.modest],
        needsOne: [a.tropical, a.haven],
    },
    {
        name: 'Anchovy',
        needs: [a.haven, a.poor],
    },
    {
        name: 'Shrimp',
        needs: [a.haven, a.modest],
    },
    {
        name: 'Lobster',
        needs: [a.haven],
        incomeRange: [a.wealthy, a.rich],
    },
    {
        name: 'Oyster',
        needs: [a.haven],
        incomeRange: [a.wealthy, a.rich],
    },
    {
        name: 'Mole',
        needs: [a.underdark, a.modest],
    },
];
