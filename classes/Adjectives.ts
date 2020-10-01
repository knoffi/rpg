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
