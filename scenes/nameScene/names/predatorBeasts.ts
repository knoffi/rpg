import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/idea/DescriptionAsset';
const a = association;

const BEAR_LAND = [a.forest, a.village, a.city, a.mountain];
const BEAR_CLASSES = [a.druid, a.soldier, a.knight, a.barbarian, a.adventurer];
const BEAR_ANTI_RACES = [a.drow, a.tiefling];
const BEAR_INCOME = [a.modest, a.wealthy];
export const honorfulPredatorBeasts: DescriptionAsset[] = [
    {
        name: 'Bear',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        misfits: BEAR_ANTI_RACES,
        powerFits: [a.druid, a.village, a.forest, a.barbarian],
    },
    {
        name: 'Boar',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        misfits: BEAR_ANTI_RACES,
        powerFits: [a.druid, a.village, a.forest, a.barbarian],
    },
    {
        name: 'Ox',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        misfits: BEAR_ANTI_RACES,
        powerFits: [a.village, a.barbarian],
    },
    {
        name: 'Wolve',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        worksForThiefs: true,
        worksForAssasines: true,
        misfits: BEAR_ANTI_RACES,
        powerFits: [a.druid, a.forest, a.barbarian],
    },
    {
        name: 'Jakal',
        landRange: [a.desert, a.city],
        misfits: [a.rich, a.drow],
        worksForThiefs: true,
        worksForAssasines: true,
        powerFits: [a.druid, a.desert, a.soldier],
    },

    {
        name: 'Falcon',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        worksForAssasines: true,
        misfits: BEAR_ANTI_RACES,
        powerFits: [a.mountain, a.druid],
    },
    {
        name: 'Hound',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        misfits: BEAR_ANTI_RACES,
        powerFits: [a.village, a.knight],
    },
    {
        name: 'Owl',
        needsOne: [a.cleric, a.wizard, a.druid],
        misfits: [a.haven, a.drow],
        powerFits: [a.forest, a.druid, a.wizard, a.cleric],
    },
    {
        name: 'Panther',
        landRange: [a.tropical, a.city],
        classRange: [a.soldier, a.barbarian, a.druid, a.bard],
        worksForAssasines: true,
        misfits: BEAR_ANTI_RACES,
        powerFits: [a.tropical, a.druid],
    },
    {
        name: 'Fox',
        landRange: BEAR_LAND,
        classRange: [...BEAR_CLASSES, a.bard],
        incomeRange: BEAR_INCOME,
        misfits: [a.drow],
        powerFits: [a.forest, a.village, a.druid],
    },
    {
        name: 'Drake',
        misfits: [a.rich, a.haven],
        powerFits: [a.adventurer, a.mountain],
    },
];

export const criminalPredatorBeasts: DescriptionAsset[] = [
    {
        name: 'Eal',
        needs: [a.haven],
        misfits: [a.rich],
        worksForThiefs: true,
        powerFits: [a.haven],
    },
    {
        name: 'Hyena',
        needsOne: [a.desert, a.thief],
        misfits: [a.rich, a.knight],
        worksForThiefs: true,
        powerFits: [a.desert],
    },
    {
        name: 'Snake',
        classRange: [a.wizard, a.soldier, a.barbarian],
        needsOne: [a.assasine, a.thief],
        misfits: [a.haven, a.underdark],
        worksForThiefs: true,
        worksForAssasines: true,
        powerFits: [a.soldier, a.desert, a.tropical],
    },
    {
        name: 'Spider',
        needsOne: [a.assasine, a.drow, a.thief],
        worksForAssasines: true,
        powerFits: [a.desert, a.tropical],
    },
    {
        name: 'Tarantula',
        needsOne: [a.assasine, a.drow, a.thief],
        worksForAssasines: true,
        powerFits: [a.desert, a.tropical],
    },
    {
        name: 'Cobra',
        landRange: [a.city, a.desert, a.tropical],
        needsOne: [a.assasine, a.rich, a.wealthy],
        worksForAssasines: true,
        powerFits: [a.desert, a.tropical],
    },
    {
        name: 'Basilisk',
        landRange: [a.city, a.desert, a.tropical],
        needsOne: [a.assasine, a.rich, a.wealthy],
        worksForAssasines: true,
        powerFits: [a.desert, a.tropical, a.adventurer],
    },
    {
        name: 'Scorpion',
        landRange: [a.city, a.desert, a.tropical, a.mountain],
        needsOne: [a.assasine, a.thief, a.tiefling],
        worksForAssasines: true,
        worksForThiefs: true,
        powerFits: [a.desert, a.tropical],
    },
    {
        name: 'Vulture',
        landRange: [a.desert, a.tropical, a.city],
        classRange: [a.soldier, a.druid],
        misfits: [a.rich],
        needsOne: [a.assasine, a.thief],
        worksForAssasines: true,
        worksForThiefs: true,
        powerFits: [a.desert, a.tropical, a.soldier],
    },
];
