import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/DescriptionAsset';
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
];
export const tools: DescriptionAsset[] = [
    {
        name: 'Hammer',
        landRange: [a.city, a.village],
        needsOne: [a.dwarf, a.barbarian, a.modest],
        misfits: unproletarianGroups,
        classRange: [a.barbarian, a.knight, a.cleric],
        worksForAssasines: true,
    },
    {
        name: 'Anvil',
        landRange: [a.city, a.village],
        needsOne: [a.dwarf, a.knight, a.modest],
        misfits: unproletarianGroups,
        classRange: [a.barbarian, a.knight, a.soldier],
    },
    {
        name: 'Chisel',
        landRange: [a.city, a.village],
        needsOne: [a.dwarf, a.modest],
        misfits: unproletarianGroups,
        classRange: [],
    },
    {
        name: 'Screwdriver',
        landRange: [a.city, a.village],
        needsOne: [a.dwarf, a.modest],
        misfits: unproletarianGroups,
        classRange: [],
    },
    {
        name: 'Scissor',
        landRange: [a.city, a.village],
        needsOne: [a.halfling, a.modest],
        misfits: unproletarianGroups,
        classRange: [],
    },
    {
        name: 'Shovel',
        landRange: [a.city, a.village, a.underdark, a.mountain],
        needsOne: [a.dwarf, a.gnome, a.modest],
        misfits: unproletarianGroups,
        classRange: [],
    },
    {
        name: 'Pickaxe',
        landRange: [a.city, a.village, a.underdark, a.mountain],
        needsOne: [a.dwarf, a.modest],
        misfits: unproletarianGroups,
        classRange: [],
    },
    {
        name: 'Saw',
        landRange: [a.city, a.village, a.haven],
        needsOne: [a.halfling, a.modest],
        misfits: unproletarianGroups,
        classRange: [],
    },
    {
        name: 'Axe',
        landRange: [a.city, a.village],
        needsOne: [a.dwarf, a.barbarian, a.modest],
        misfits: unproletarianGroups,
        classRange: [a.barbarian, a.knight, a.soldier],
        worksForAssasines: true,
    },
];
