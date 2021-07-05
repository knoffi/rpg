import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/idea/DescriptionAsset';

export const a = association;
export const preyNormalAnimals: DescriptionAsset[] = [
    {
        name: 'Moose',
        incomeRange: [a.poor, a.modest],
        landRange: [a.mountain, a.forest, a.village],
        powerFits: [a.druid, a.forest, a.mountain],
    },
    {
        name: 'Weasel',
        landRange: [a.forest, a.village, a.city],
        powerFits: [a.druid, a.forest, a.village, a.halfling],
    },
    {
        name: 'Chicken',
        landRange: [a.village, a.city],
        powerFits: [a.village, a.halfling],
    },
    {
        name: 'Beaver',
        worksForBrothel: true,
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest],
        powerFits: [a.druid, a.forest, a.halfling],
    },
    {
        name: 'Salmon',
        incomeRange: [a.wealthy, a.modest],
        landRange: [a.haven, a.village, a.city],
        powerFits: [a.druid, a.forest, a.haven],
    },
    {
        name: 'Pony',
        incomeRange: [a.poor, a.modest],
        landRange: [a.village, a.city],
        powerFits: [a.village, a.halfling],
    },
    {
        name: 'Lamb',
        incomeRange: [a.poor, a.modest],
        landRange: [a.village, a.desert, a.mountain],
        powerFits: [a.druid, a.village, a.mountain],
    },
    {
        name: 'Crow',
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village, a.city],
        worksForThiefs: true,
        powerFits: [a.village, a.forest, a.druid],
    },
    {
        name: 'Raven',
        worksForAssasines: true,
        worksForThiefs: true,
        incomeRange: [a.poor, a.modest],
        landRange: [a.forest, a.village, a.city],
        powerFits: [a.village, a.forest, a.wizard],
    },
    {
        name: 'Sheep',
        incomeRange: [a.poor, a.modest],
        landRange: [a.village, a.mountain],
        powerFits: [a.village, a.mountain, a.halfling],
    },
    {
        name: 'Swine',
        incomeRange: [a.poor, a.modest],
        landRange: [a.village, a.city],
        misfits: [a.elf, a.drow, a.tiefling],
        worksForBrothel: true,
        powerFits: [a.village, a.human, a.halfling],
    },
    {
        name: 'Cat',
        incomeRange: [a.poor, a.modest],
        landRange: [a.village, a.city],
        worksForThiefs: true,
        powerFits: [a.village, a.halfling],
    },
    {
        name: 'Goat',
        incomeRange: [a.poor, a.modest],
        landRange: [a.village, a.mountain],
        powerFits: [a.village, a.mountain, a.halfling],
    },
    {
        name: 'Monkey',
        incomeRange: [a.poor, a.modest],
        needsOne: [a.tropical, a.desert],
        powerFits: [a.druid, a.tropical, a.desert],
    },
    {
        name: 'Parrot',
        incomeRange: [a.poor, a.modest],
        needsOne: [a.tropical, a.haven],
        powerFits: [a.druid, a.tropical, a.haven],
    },
    {
        name: 'Gecko',
        incomeRange: [a.poor, a.modest],
        needsOne: [a.tropical, a.desert],
        powerFits: [a.druid, a.tropical, a.desert],
    },
    {
        name: 'Anchovy',
        needs: [a.haven],
        incomeRange: [a.poor],
        powerFits: [a.haven, a.human],
    },
    {
        name: 'Shrimp',
        needs: [a.haven],
        powerFits: [a.haven, a.halfling],
    },
    {
        name: 'Lobster',
        needs: [a.haven],
        incomeRange: [a.wealthy, a.rich],
        powerFits: [a.haven, a.wealthy],
    },
    {
        name: 'Oyster',
        needs: [a.haven],
        incomeRange: [a.wealthy, a.rich],
        powerFits: [a.haven, a.wealthy, a.rich],
    },
    {
        name: 'Mole',
        needs: [a.underdark, a.modest],
        powerFits: [a.underdark, a.gnome],
    },
    {
        name: 'Camel',
        needs: [a.desert],
        misfits: [a.rich],
        powerFits: [a.desert, a.modest, a.druid],
    },
    {
        name: 'Dromedary',
        needs: [a.desert],
        misfits: [a.rich],
        powerFits: [a.desert, a.modest, a.druid],
    },
    {
        name: 'Gecko',
        needs: [a.desert],
        misfits: [a.rich, a.wealthy],
        powerFits: [a.desert, a.poor, a.druid],
    },
];
