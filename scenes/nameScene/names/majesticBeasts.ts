import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/idea/DescriptionAsset';
export const a = association;
// beasts that lords would choose on their banner
// NOTE: if you wanna combine them for humor effects (f.e. "The Whiny Dragon"), then "poor" should not be a misfit
export const majesticBeasts: DescriptionAsset[] = [
    {
        name: 'Lion',
        needsOne: [a.knight, a.rich, a.wealthy],
        powerFits: [
            a.barbarian,
            a.knight,
            a.rich,
            a.wealthy,
            a.desert,
            a.druid,
        ],
    },
    {
        name: 'Gryphon',
        needsOne: [a.knight, a.rich, a.wealthy, a.adventurer, a.wizard],
        powerFits: [a.wizard, a.adventurer, a.rich, a.mountain, a.human],
    },
    {
        name: 'Swan',
        needsOne: [a.knight, a.rich, a.wealthy, a.adventurer, a.wizard],
        misfits: [a.barbarian, a.soldier],
        powerFits: [a.elf, a.knight],
    },
    {
        name: 'Sphinx',
        needsOne: [a.desert, a.adventurer, a.wizard],
        misfits: [a.barbarian, a.soldier],
        powerFits: [a.desert, a.wizard, a.tiefling, a.wizard],
    },
    {
        name: 'Beholder',
        needsOne: [a.underdark, a.adventurer, a.wizard],
        powerFits: [a.underdark, a.adventurer, a.wizard],
    },
    {
        name: 'Eagle',
        needsOne: [a.elf, a.mountain],
        powerFits: [a.elf, a.wizard, a.wealthy, a.knight, a.druid],
    },
    {
        name: 'Kraken',
        needs: [a.haven],
        powerFits: [a.rich, a.haven],
        worksForAssasines: true,
    },
    {
        name: 'Whale',
        needs: [a.haven],
        powerFits: [a.haven, a.wealthy],
    },
    {
        name: 'Leviathan',
        needs: [a.haven],
        powerFits: [a.haven],
        worksForAssasines: true,
    },
    {
        name: 'Octopus',
        needs: [a.haven],
        powerFits: [a.haven],
    },
    {
        name: 'Tiger',
        needsOne: [a.tropical, a.city, a.barbarian],
        powerFits: [a.tropical, a.druid],
    },
    {
        name: 'Pheasant',
        needsOne: [a.forest, a.wealthy, a.druid, a.bard],
        misfits: [a.underdark, a.tropical, a.desert, a.haven],
        powerFits: [a.bard, a.forest, a.wealthy, a.druid],
    },
    {
        name: 'Manticore',
        misfits: [a.underdark, a.village, a.forest],
        powerFits: [a.adventurer, a.mountain, a.wizard],
        worksForAssasines: true,
    },
    {
        name: 'Hydra',
        misfits: [a.underdark, a.village, a.modest],
        powerFits: [a.bard, a.adventurer],
        worksForAssasines: true,
    },
    {
        name: 'Dragon',
        powerFits: [a.rich, a.wizard, a.adventurer, a.bard],
        worksForAssasines: true,
    },
    {
        name: 'Falcon',
        misfits: [a.underdark, a.haven, a.modest, a.forest],
        powerFits: [a.soldier, a.druid],
    },
    {
        name: 'Stallion',
        misfits: [a.underdark, a.haven],
        powerFits: [a.knight, a.wealthy, a.druid],
    },
    {
        name: 'Bull',
        misfits: [a.underdark, a.haven],
        powerFits: [a.druid, a.tiefling, a.barbarian],
    },
    {
        name: 'Unicorn',
        needsOne: [a.wizard, a.elf, a.adventurer],
        powerFits: [a.elf, a.wizard, a.adventurer],
    },
    {
        name: 'Centaur',
        needsOne: [a.wizard, a.adventurer, a.barbarian, a.bard],
        misfits: [a.underdark, a.haven],
        powerFits: [a.wizard, a.adventurer, a.barbarian],
    },
];
