import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
const a = association;
const unproletarianGroups = [
    a.wizard,
    a.bard,
    a.cleric,
    a.rich,
    a.wealthy,
    a.adventurer,
    a.haven,
    a.underdark,
    a.mountain,
    a.forest,
    a.elf,
    a.drow,
    //because druides are anti-industry
    a.druid,
];
export const tools: DescriptionAsset[] = [
    {
        name: 'Hammer',
        landRange: [a.city, a.village],
        needsOne: [a.dwarf, a.barbarian, a.modest],
        misfits: unproletarianGroups,
        classRange: [a.barbarian, a.knight, a.cleric],
        worksForAssasines: true,
        powerFits: [a.cleric, a.modest, a.barbarian],
    },
    {
        name: 'Anvil',
        landRange: [a.city, a.village],
        needsOne: [a.dwarf, a.knight, a.modest],
        misfits: unproletarianGroups,
        classRange: [a.barbarian, a.knight, a.soldier],
        powerFits: [a.modest, a.city],
    },
    {
        name: 'Chisel',
        landRange: [a.city, a.village],
        incomeRange: [a.modest],
        misfits: unproletarianGroups,
        powerFits: [a.modest, a.city],
    },
    {
        name: 'Screwdriver',
        landRange: [a.city, a.village],
        incomeRange: [a.modest],
        misfits: unproletarianGroups,
        powerFits: [a.modest, a.city],
    },
    {
        name: 'Scissor',
        landRange: [a.city, a.village],
        incomeRange: [a.poor, a.modest],
        misfits: unproletarianGroups,
        powerFits: [a.modest, a.halfling],
    },
    {
        name: 'Shovel',
        landRange: [a.city, a.village, a.underdark, a.mountain],
        needsOne: [a.dwarf, a.gnome, a.modest],
        misfits: unproletarianGroups,
        powerFits: [a.modest, a.underdark],
    },
    {
        name: 'Pickaxe',
        landRange: [a.city, a.village, a.underdark, a.mountain],
        misfits: unproletarianGroups,
        powerFits: [a.gnome, a.modest, a.underdark, a.mountain, a.dwarf],
    },
    {
        name: 'Saw',
        landRange: [a.city, a.village, a.haven],
        needsOne: [a.halfling, a.modest],
        misfits: unproletarianGroups,
        classRange: [],
        powerFits: [a.modest, a.village, a.forest],
    },
    {
        name: 'Axe',
        landRange: [a.city, a.village],
        needsOne: [a.dwarf, a.barbarian, a.modest],
        misfits: unproletarianGroups,
        classRange: [a.barbarian, a.knight, a.soldier, a.assasine],
        worksForAssasines: true,
        powerFits: [a.modest, a.dwarf, a.barbarian, a.forest, a.village],
    },
];
