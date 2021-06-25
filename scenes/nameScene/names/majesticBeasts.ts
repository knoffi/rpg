import { association } from '../../../classes/association';
import { NounIdea } from '../../../classes/NounIdea';
export const a = association;
// beasts that lords would choose on their banner
// NOTE: if you wanna combine them for humor effects (f.e. "The Whiny Dragon"), then "poor" should not be a misfit
export const majesticBeasts: NounIdea[] = [
    { name: 'Lion', needsOne: [a.knight, a.rich, a.wealthy] },
    {
        name: 'Gryphon',
        needsOne: [a.knight, a.rich, a.wealthy, a.adventurer, a.wizard],
    },
    {
        name: 'Swan',
        needsOne: [a.knight, a.rich, a.wealthy, a.adventurer, a.wizard],
        misfits: [a.barbarian, a.soldier],
    },
    {
        name: 'Sphinx',
        needsOne: [a.desert, a.adventurer, a.wizard],
        misfits: [a.barbarian, a.soldier],
    },
    {
        name: 'Beholder',
        needsOne: [a.underdark, a.adventurer, a.wizard],
    },
    {
        name: 'Eagle',
        needsOne: [a.elf, a.mountain],
    },
    {
        name: 'Kraken',
        needs: [a.haven],
        needsOne: [a.knight, a.rich, a.wealthy, a.adventurer],
    },
    {
        name: 'Whale',
        needs: [a.haven],
        needsOne: [a.knight, a.rich, a.wealthy],
    },
    {
        name: 'Leviathan',
        needs: [a.haven],
        needsOne: [a.knight, a.wealthy],
    },
    {
        name: 'Octopus',
        needs: [a.haven],
        needsOne: [a.wealthy, a.modest, a.bard],
    },
    { name: 'Tiger', needsOne: [a.tropical, a.city, a.barbarian] },
    {
        name: 'Pheasant',
        needsOne: [a.forest, a.wealthy, a.druid, a.bard],
        misfits: [a.underdark, a.tropical, a.desert, a.haven],
    },
    {
        name: 'Manticore',
        misfits: [a.underdark, a.village, a.forest],
    },
    {
        name: 'Hydra',
        misfits: [a.underdark, a.village, a.modest],
    },
    {
        name: 'Dragon',
    },
    {
        name: 'Falcon',
        misfits: [a.underdark, a.haven, a.modest, a.forest],
    },
    {
        name: 'Stallion',
        misfits: [a.underdark, a.haven],
    },
    {
        name: 'Bull',
        misfits: [a.underdark, a.haven],
    },
    {
        name: 'Unicorn',
        needsOne: [a.wizard, a.elf, a.adventurer],
    },
    {
        name: 'Centaur',
        needsOne: [a.wizard, a.adventurer, a.barbarian, a.bard],
        misfits: [a.underdark, a.haven],
    },
];
