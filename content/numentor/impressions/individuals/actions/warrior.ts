import { association } from '../../../../../classes/association';
import { DescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';
import { brothelActions } from './brothel';
import { feasting, lively } from './generic';

const a = association;

export const grownWarriorActions: DescriptionAsset[] = [
    { name: 'telling stories about a past siege' },
    {
        name: 'telling stories about a battle in the mountains',
        misfits: [a.mountain],
    },
    {
        name: 'telling stories about a war in the highlands',
        misfits: [a.village],
    },
    {
        name: 'telling stories about a battle in the desert',
        misfits: [a.desert],
    },
    {
        name: 'telling stories about a crusade in the desert',
        misfits: [a.desert, a.drow],
    },
    {
        name: 'telling stories about a war on a far-away continent',
        needsOne: [a.haven, a.city],
    },
    {
        name: 'telling stories about the war against the drow',
        misfits: [a.drow],
        needsOne: [a.elf, a.dwarf],
    },
    {
        name: 'telling stories about the war against the dwarves',
        needs: [a.drow],
    },
    {
        name: 'telling stories about the war against the elves',
        needs: [a.drow],
    },
    { name: 'making a toast to a fallen squire' },
    { name: 'making a toast to a fallen comrade', worksForAssasines: true },
    { name: 'making a toast to the royal family', needs: [a.cleric, a.knight] },
    {
        name: 'making a toast to the gods of justice',
        misfits: [a.drow],
        needs: [a.cleric, a.knight],
        worksForAssasines: true,
    },
    {
        name: 'making a toast to the gods of honor',
        misfits: [a.drow],
        classRange: [a.knight, a.cleric, a.adventurer],
    },
    {
        name: 'making a toast to the gods of war',
        needs: [a.barbarian, a.soldier],
        classRange: [a.knight, a.cleric, a.adventurer],
    },
    {
        name: 'making a toast to an evil goddess',
        needsOne: [a.drow, a.tiefling],
        worksForAssasines: true,
    },
    { name: 'making a toast to a fallen stallion', needs: [a.knight] },
    { name: 'exchanging war stories with others' },
    { name: 'exchanging heroic stories with others' },
    {
        name: 'having a drink contest with a squire',
        misfits: [a.desert, a.drow],
        needs: [a.knight],
    },
    {
        name: 'yelling at a drunken squire',
        misfits: [a.desert, a.drow],
        needs: [a.knight],
    },
    {
        name: 'showing off a big scar from a past battle',
        needsOne: [a.barbarian, a.soldier, a.adventurer],
        worksForBrothel: true,
        worksForAssasines: true,
    },
    {
        name: 'showing off a big scar from a fierce beast',
        needsOne: [a.barbarian, a.adventurer, a.bard],
        worksForBrothel: true,
        worksForAssasines: true,
    },
    { name: 'resting from a previous battle', worksForAssasines: true },
    ...brothelActions,
    ...feasting,
];

export const warriorActions: DescriptionAsset[] = [
    { name: 'making a toast to a fallen comrade', worksForAssasines: true },
    { name: 'polishing a big claymore', misfits: [a.desert, a.drow] },
    { name: 'polishing a shining armor' },
    { name: 'polishing a golden armor', misfits: [a.modest, a.poor] },
    { name: 'transporting secret battle plans', misfits: [a.poor] },
    {
        name: 'showing his muscles in front of a woman',
        misfits: [a.drow],
        worksForBrothel: true,
    },
    {
        name: 'finishing a drink and then burping really loud',
        misfits: [a.wealthy, a.rich],
        worksForBrothel: true,
        worksForAssasines: true,
    },
    ...brothelActions,
    ...lively,
];

export const groupWarriorActions: DescriptionAsset[] = [
    { name: 'exchanging stories about a past siege' },
    {
        name: 'exchanging stories about a battle in the mountains',
        misfits: [a.mountain],
    },
    {
        name: 'exchanging stories about a war in the highlands',
        misfits: [a.village],
    },
    {
        name: 'exchanging stories about a crusade in the desert',
        misfits: [a.desert, a.drow],
    },
    {
        name: 'exchanging stories about a war on a faraway continent',
        needs: [a.haven],
    },
    {
        name: 'exchanging stories about the war against the drow',
        misfits: [a.drow],
    },
    {
        name: 'exchanging stories about the war against the dwarves',
        needs: [a.drow],
    },
    {
        name: 'exchanging stories about the war against the elves',
        needs: [a.drow],
    },
    {
        name: 'making a toast to a fallen comrade',
        worksForAssasines: true,
    },
    { name: 'making a toast to the royal family', needs: [a.knight] },
    {
        name: 'making a toast to the gods of justice',
        misfits: [a.drow],
        classRange: [a.knight, a.cleric, a.adventurer],
        worksForAssasines: true,
    },
    {
        name: 'making a toast to the gods of honor',
        misfits: [a.drow],
        classRange: [a.knight, a.cleric, a.adventurer],
    },
    {
        name: 'making a toast to an evil goddess',
        needsOne: [a.drow, a.tiefling],
    },
    {
        name: 'making a toast to the gods of war',
        needsOne: [a.barbarian, a.soldier],
    },
    { name: 'discussing which horse is best', needs: [a.knight] },
    {
        name: 'having a drink contest',
        misfits: [a.desert],
        worksForBrothel: true,
        worksForAssasines: true,
    },
    { name: 'discussing which sword is best', worksForBrothel: true },
    { name: 'discussing which armor is best', misfits: [a.drow, a.barbarian] },
    {
        name: 'discussing who knows the better blacksmith',
        worksForAssasines: true,
    },
    {
        name: 'discussing who slayed the bigger beasts',
        worksForBrothel: true,
        worksForAssasines: true,
    },
    ...brothelActions,
    ...lively,
];
