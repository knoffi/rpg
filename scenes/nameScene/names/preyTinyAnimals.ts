import { association } from '../../../classes/association';
import { NounIdea } from '../../../classes/NounIdea';

export const a = association;
export const preyTinyAnimals: NounIdea[] = [
    { name: 'Mouse', worksForThiefs: true, incomeRange: [a.poor, a.modest] },
    { name: 'Rat', worksForThiefs: true, incomeRange: [a.poor, a.modest] },
    {
        name: 'Cockroach',
        worksForThiefs: true,
        incomeRange: [a.poor, a.modest],
    },
    {
        name: 'Squirrel',
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village],
    },
    {
        name: 'Butterfly',
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village],
    },
    {
        name: 'Rabbit',
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village],
    },
    {
        name: 'Earth Worm',
        needs: [a.underdark, a.poor],
    },
];
