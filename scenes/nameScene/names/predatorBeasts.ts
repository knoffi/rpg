import { association } from '../../../classes/association';
import { NounIdea } from '../../../classes/NounIdea';
const a = association;

const BEAR_LAND = [a.forest, a.village, a.city, a.mountain];
const BEAR_CLASSES = [a.druid, a.soldier, a.knight, a.barbarian, a.adventurer];
const BEAR_ANTI_RACES = [a.drow, a.tiefling];
const BEAR_INCOME = [a.modest, a.wealthy];
export const honorfulPredatorBeasts: NounIdea[] = [
    {
        name: 'Bear',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        misfits: BEAR_ANTI_RACES,
    },
    {
        name: 'Wolve',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        worksForThiefs: true,
        misfits: BEAR_ANTI_RACES,
    },
    {
        name: 'Jakal',
        landRange: [a.desert, a.city],
        misfits: [a.rich, a.drow],
        worksForThiefs: true,
        worksForAssasines: true,
    },

    {
        name: 'Falcon',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        worksForAssasines: true,
        misfits: BEAR_ANTI_RACES,
    },
    {
        name: 'Hound',
        landRange: BEAR_LAND,
        classRange: BEAR_CLASSES,
        incomeRange: BEAR_INCOME,
        misfits: BEAR_ANTI_RACES,
    },
    {
        name: 'Owl',
        needsOne: [a.cleric, a.wizard, a.druid],
        misfits: [a.haven, a.drow],
    },
    {
        name: 'Panther',
        landRange: [a.tropical, a.city],
        classRange: [a.soldier, a.barbarian, a.druid, a.bard],
        worksForAssasines: true,
        misfits: BEAR_ANTI_RACES,
    },
    {
        name: 'Fox',
        landRange: BEAR_LAND,
        classRange: [...BEAR_CLASSES, a.bard],
        incomeRange: BEAR_INCOME,
        misfits: [a.drow],
    },
    { name: 'Wyvern', misfits: [a.rich, a.haven] },
    { name: 'Drake', misfits: [a.rich, a.haven] },
];

export const criminalPredatorBeasts: NounIdea[] = [
    { name: 'Wyrm', misfits: [a.rich, a.haven] },
    { name: 'Lindworm', misfits: [a.rich, a.haven] },
    {
        name: 'Hyena',
        needsOne: [a.desert, a.thief],
        misfits: [a.rich, a.knight],
        worksForThiefs: true,
    },
    {
        name: 'Snake',
        classRange: [a.wizard, a.soldier, a.barbarian, a.bard],
        needsOne: [a.assasine, a.thief],
        misfits: [a.haven, a.underdark],
        worksForThiefs: true,
        worksForAssasines: true,
    },
    {
        name: 'Spider',
        needsOne: [a.assasine, a.drow, a.thief],
        worksForAssasines: true,
    },
    {
        name: 'Tarantula',
        needsOne: [a.assasine, a.drow, a.thief],
        worksForAssasines: true,
    },
    {
        name: 'Cobra',
        landRange: [a.city, a.desert, a.tropical],
        needsOne: [a.assasine, a.rich, a.wealthy],
        worksForAssasines: true,
    },
    {
        name: 'Basilisk',
        landRange: [a.city, a.desert, a.tropical],
        needsOne: [a.assasine, a.rich, a.wealthy],
        worksForAssasines: true,
    },
    {
        name: 'Scorpion',
        landRange: [a.city, a.desert, a.tropical, a.mountain],
        needsOne: [a.assasine, a.thief, a.tiefling],
        worksForAssasines: true,
        worksForThiefs: true,
    },
    {
        name: 'Vulture',
        landRange: [a.desert, a.tropical, a.city],
        classRange: [a.soldier, a.druid],
        misfits: [a.rich],
        needsOne: [a.assasine, a.thief],
        worksForAssasines: true,
        worksForThiefs: true,
    },
];
