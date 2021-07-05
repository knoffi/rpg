import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/idea/DescriptionAsset';

export const a = association;
export const preyTinyAnimals: DescriptionAsset[] = [
    {
        name: 'Mouse',
        worksForThiefs: true,
        incomeRange: [a.poor, a.modest],
        powerFits: [a.halfling, a.village, a.poor],
    },
    {
        name: 'Rat',
        worksForThiefs: true,
        incomeRange: [a.poor],
        powerFits: [a.poor, a.city, a.haven],
    },
    {
        name: 'Cockroach',
        worksForThiefs: true,
        incomeRange: [a.poor],
        powerFits: [a.poor, a.city],
    },
    {
        name: 'Squirrel',
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village],
        powerFits: [a.village, a.forest, a.druid, a.halfling],
    },
    {
        name: 'Butterfly',
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village],
        powerFits: [a.elf, a.druid, a.forest],
    },
    {
        name: 'Rabbit',
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village],
        powerFits: [a.forest, a.druid, a.halfling],
    },
    {
        name: 'Earth Worm',
        landRange: [a.underdark, a.village, a.forest],
        incomeRange: [a.poor],
        powerFits: [a.underdark, a.poor],
    },
];
