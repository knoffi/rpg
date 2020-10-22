import { association } from "../classes/Adjectives";

export enum misfitMode {
  income = "Income",
  strict = "Strict",
  stricter = "Stricter",
}
const strictMisfitMode = {
  key: misfitMode.strict,
  associationGroups: {
    wealth: [association.poor, association.rich],

    education: [association.worker, association.sophisticated],
    honor: [association.dragonborn, association.nobel, association.criminal],
    virtues: [association.criminal, association.cleric],
    honesty: [association.nobel, association.criminal],
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
      association.worker,
      association.sophisticated,
    ],
  },
};
export const stricterMisfitMode = {
  key: misfitMode.stricter,
  associationGroups: {
    income: [
      association.poor,
      association.rich,
      association.worker,
      association.sophisticated,
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
      association.nobel,
      association.cleric,
      association.druid,
      association.wizard,
      association.adventurer,
      association.dragonborn,
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
      association.criminal,
      association.evil
    ]
  },
};
export const misfitModeList = [
  incomeMisfitMode,
  strictMisfitMode,
  stricterMisfitMode,
];
