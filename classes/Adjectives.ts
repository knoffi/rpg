import { substantiveCategory } from "./Substantive";

export enum association {
  rich = "rich",
  poor = "poor",
  worker = "artisan",
  nobel = "knight",
  criminal = "criminal",
  adventurer = "traveler",
  wizard = "wizard",
  bard = "bard",
  barbarian = "barbarian",
  cleric = "cleric",
  druid = "druid",
  prostitute = "brothel",
  dwarf = "dwarf",
  elf = "elf",
  halfling = "halfling",
  gnome = "gnome",
  tiefling = "tiefling",
  drow = "drow",
  dragonborn = "soldier",
  human = "human",
  underdark = "underdark",
  forest = "forest",
  desert = "desert",
  haven = "haven",
  tropical = "tropical",
  mountain = "mountain",
  city = "city",
  village = "village",
  sophisticated = "academic",
  evil = "evil",
}
const associationGroups = {
  income: [
    association.poor,
    association.rich,
    association.worker,
    association.sophisticated,
  ],
  environment: [
    association.tropical,
    association.underdark,
    association.mountain,
    association.forest,
    association.city,
    association.village,
    association.desert,
    association.haven,
  ],
  customer: [
    association.barbarian,
    association.bard,
    association.nobel,
    association.cleric,
    association.criminal,
    association.druid,
    association.prostitute,
    association.wizard,
    association.evil,
    association.adventurer,
    association.dragonborn,
  ],
  fantasyRace: [
    association.drow,
    association.dwarf,
    association.elf,
    association.gnome,
    association.halfling,
    association.human,
    association.tiefling,
  ],
};
export const getMisfits = (fits: association[]) => {
  let misfits: association[];
  misfits = [];
  let popListFits = fits.copyWithin(0, 0);
  while (popListFits.length > 0) {
    let popFit = popListFits[0];
    let groupOfPopFit: association[];
    groupOfPopFit = [];
    Object.values(associationGroups).forEach((list) => {
      if (list.includes(popFit)) {
        groupOfPopFit = list;
      }
    });
    groupOfPopFit.forEach((element) => {
      if (!fits.includes(element)) {
        misfits.push(element);
      }
    });
    popListFits = popListFits.filter((fit) => {
      return !groupOfPopFit.includes(fit);
    });
  }
  return misfits;
};

export const getMisfitsOf = (fit: association) => {
  let misfits: association[];
  misfits = [];
  if (fit === "poor") {
    misfits.push(association.rich);
  }
  if (fit === "rich") {
    misfits.push(association.poor);
  }
  return misfits;
};
export class Adjective {
  public name: string;
  public badWords: substantiveCategory[];
  associations: association[];
  constructor(
    name: string,
    associations: association[],
    badWords: substantiveCategory[]
  ) {
    this.associations = associations;
    this.name = name;
    this.badWords = badWords;
  }
  public isFit(
    pros: string[],
    misfits: string[],
    minPros: number,
    maxCons: number
  ) {
    let proCount = 0;
    let conCount = 0;
    this.associations.forEach((association) => {
      if (misfits.includes(association)) {
        conCount++;
      }
      if (pros.includes(association)) {
        proCount++;
      }
    });

    if (proCount >= minPros && conCount <= maxCons) {
      return true;
    }
    return false;
  }

  public isPossibleNoun(category: substantiveCategory) {
    return !this.badWords.includes(category);
  }
}
