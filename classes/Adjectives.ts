import { substantiveCategory } from "./Substantive";

export enum association {
  empty = "",
  rich = "rich",
  poor = "poor",
  worker = "artisan",
  nobel = "knight",
  criminal = "thief",
  adventurer = "traveler",
  wizard = "wizard",
  bard = "bard",
  barbarian = "wildling",
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
  evil = "assasine" //smugglers, evil, murderer ?
}

export const getAssociation=(name:string)=>{
  const possibleName = Object.values(association).find(associationName =>{return associationName===name});
  return possibleName ? possibleName: association.empty;
}
export class Adjective {
  public name: string;
  public badWords: substantiveCategory[];
  public associations: association[];
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

  public getAssociationOverwrite(association: association) {
    return new Adjective(this.name, [association], this.badWords);
  }
}
