import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
const a = association;
export const warriors: DescriptionAsset[] = [
    {
        name: 'Warrior',
        needsOne: [a.knight, a.barbarian, a.dwarf, a.adventurer, a.soldier],
    },
    {
        name: 'Barbarian',
        needsOne: [a.barbarian, a.dwarf, a.adventurer],
        powerFits: [a.mountain, a.forest],
    },
    {
        name: 'Chieftain',
        needsOne: [a.barbarian, a.dwarf, a.adventurer],
        powerFits: [a.mountain, a.forest],
    },
    {
        name: 'Fighter',
        needsOne: [a.knight, a.barbarian, a.dwarf, a.adventurer, a.soldier],
    },
    {
        name: 'Vanguard',
        needsOne: [a.knight, a.barbarian, a.dwarf, a.adventurer, a.soldier],
    },
    { name: 'Soldier', needsOne: [a.knight, a.soldier] },
    {
        name: 'Mercenary',
        needsOne: [a.soldier, a.assasine],
        worksForAssasines: true,
    },
    {
        name: 'Spearman',
        needsOne: [a.knight, a.soldier],
        powerFits: [a.human, a.drow],
    },
    {
        name: 'Phalanx',
        needsOne: [a.adventurer, a.soldier],
        powerFits: [a.human, a.drow],
    },
    {
        name: 'Axeman',
        needsOne: [a.barbarian, a.dwarf, a.soldier],
        powerFits: [a.mountain],
    },
    {
        name: 'Archer',
        needsOne: [a.elf, a.soldier],
        powerFits: [a.elf, a.drow],
    },
    {
        name: 'Shield Maid',
        needsOne: [a.knight, a.bard, a.adventurer, a.soldier],
        misfits: [a.desert],
    },
    {
        name: 'Maceman',
        needsOne: [a.knight, a.cleric, a.soldier],
        powerFits: [a.human, a.dwarf],
        misfits: [a.desert],
    },
    {
        name: 'Vindicator',
        needsOne: [a.knight, a.cleric, a.assasine],
        worksForAssasines: true,
    },
    {
        name: 'Paladin',
        needsOne: [a.knight, a.cleric, a.adventurer],
        misfits: [a.desert],
    },
    {
        name: 'Zealot',
        needsOne: [a.knight, a.cleric, a.barbarian, a.adventurer],
    },
    { name: 'Knight', needsOne: [a.knight] },
    { name: 'Crusader', needsOne: [a.knight, a.soldier, a.cleric] },
    {
        name: 'Squire',
        needsOne: [a.knight],
        misfits: [a.desert],
        powerFits: [a.human],
    },
    { name: 'Watchman', needsOne: [a.soldier, a.cleric], powerFits: [a.city] },
    {
        name: 'Gladiator',
        needsOne: [a.assasine, a.barbarian, a.adventurer],
        worksForAssasines: true,
    },
    {
        name: 'Hunter',
        needsOne: [a.druid, a.barbarian, a.assasine],
        powerFits: [a.drow, a.forest],
        worksForAssasines: true,
    },
    {
        name: 'Executioner',
        needsOne: [a.soldier, a.assasine],
        powerFits: [a.city],
        worksForAssasines: true,
    },
    {
        name: 'City Watch',
        needs: [a.city],
        needsOne: [a.soldier],
        classRange: [a.soldier],
    },
    { name: 'Duelist', needsOne: [a.bard, a.knight], powerFits: [a.human] },
    { name: 'Navy Soldier', needs: [a.haven], needsOne: [a.soldier, a.knight] },
];
