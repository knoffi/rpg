import { association } from '../classes/association';

export enum misfitMode {
    income = 'Income',
    stricter = 'Stricter',
    dwarvesHateElves = 'dwarves hate elves',
}
const strictMisfitMode = {
    key: misfitMode.dwarvesHateElves,
    associationGroups: {
        wealth: [association.poor, association.rich],

        education: [association.modest, association.wealthy],
        honor: [association.soldier, association.knight, association.thief],
        virtues: [association.thief, association.cleric],
        honesty: [association.knight, association.thief],
        prudeness: [association.cleric, association.prostitute],
        dwarvElf: [association.dwarf, association.elf],
        drowElf: [association.drow, association.elf],
        drowDwarf: [association.drow, association.dwarf],
        drowGnome: [association.drow, association.gnome],
        underdarkTropical: [association.underdark, association.tropical],
        cityVillage: [association.village, association.city],
        forestDesert: [association.forest, association.desert],
        havenUnderdark: [association.haven, association.underdark],
        havenDesert: [association.desert, association.desert],
        intellect: [association.wizard, association.barbarian],
    },
};
const incomeMisfitMode = {
    key: misfitMode.income,
    associationGroups: {
        income: [
            association.poor,
            association.rich,
            association.modest,
            association.wealthy,
        ],
    },
};
export const stricterMisfitMode = {
    key: misfitMode.stricter,
    associationGroups: {
        income: [
            association.poor,
            association.rich,
            association.modest,
            association.wealthy,
        ],
        land: [
            association.tropical,
            association.underdark,
            association.mountain,
            association.forest,
            association.city,
            association.village,
            association.desert,
            association.haven,
        ],
        class: [
            association.barbarian,
            association.bard,
            association.knight,
            association.cleric,
            association.druid,
            association.wizard,
            association.adventurer,
            association.soldier,
        ],
        race: [
            association.drow,
            association.dwarf,
            association.elf,
            association.gnome,
            association.halfling,
            association.human,
            association.tiefling,
        ],
        special: [
            association.prostitute,
            association.thief,
            association.assasine,
        ],
    },
};
export const misfitModeList = [
    incomeMisfitMode,
    strictMisfitMode,
    stricterMisfitMode,
];
