export enum association {
  rich = "rich",
  poor = "poor",
  worker = "artisan",
  nobel = "noble",
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
  dragonborn = "dragon",
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
  associations: association[];
  name: string;
  constructor(name: string, associations: association[]) {
    this.associations = associations;
    this.name = name;
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
}
