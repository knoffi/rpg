import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { brothelActions } from './brothelActions';
import { lively } from './genericActions';

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
    { name: 'making a toast to a fallen comrade' },
    { name: 'making a toast to the royal family' },
    { name: 'making a toast to the gods of justice', misfits: [a.drow] },
    { name: 'making a toast to the gods of honor', misfits: [a.drow] },
    { name: 'making a toast to an evil goddess', needs: [a.drow] },
    { name: 'making a toast to a fallen stallion' },
    { name: 'exchanging war stories with others' },
    { name: 'exchanging heroic stories with others' },
    {
        name: 'having a drink contest with a squire',
        misfits: [a.desert, a.drow],
    },
    { name: 'yelling at a drunken squire', misfits: [a.desert, a.drow] },
    { name: 'resting from a previous battle' },
    ...brothelActions,
    ...lively,
];

export const warriorActions: DescriptionAsset[] = [
    { name: 'making a toast to a fallen comrade' },
    { name: 'polishing a big claymore', misfits: [a.desert, a.drow] },
    { name: 'polishing a shining armor' },
    { name: 'polishing a golden armor' },
    { name: 'transporting secret battle plans' },
    { name: 'showing his muscles in front of a woman', misfits: [a.drow] },
    { name: 'finishing a drink and then burping really loud' },
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
    { name: 'making a toast to a fallen comrade' },
    { name: 'making a toast to the royal family' },
    { name: 'making a toast to the gods of justice', misfits: [a.drow] },
    { name: 'making a toast to the gods of honor', misfits: [a.drow] },
    { name: 'making a toast to an evil goddess', needs: [a.drow] },
    { name: 'discussing which horse is best' },
    { name: 'having a drink contest', misfits: [a.desert] },
    { name: 'discussing which sword is best' },
    { name: 'discussing which armor is best', misfits: [a.drow] },
    { name: 'discussing who knows the better blacksmith' },
    { name: 'discussing who has slayed more monsters' },
    ...brothelActions,
    ...lively,
];
