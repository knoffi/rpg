import { association } from "./Adjectives";
export class Substantive {
  associations: association[];
  name: string;
  //optional: Übergeordnete Gruppe, (z.B. Tier, Gegenstand, Beruf etc.)
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
