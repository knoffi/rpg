import { association } from './Adjectives';

export enum substantiveCategory {
    animal = 'animal/monster',
    plant = 'plant',
    job = 'job',
    solid = 'solid object',
    person = 'person',
}
export class Substantive {
    name: string;
    public associations: association[];
    public category: substantiveCategory;
    //optional: Übergeordnete Gruppe, (z.B. Tier, Gegenstand, Beruf etc.)
    constructor(
        name: string,
        associations: association[],
        category: substantiveCategory
    ) {
        this.associations = associations;
        this.name = name;
        this.category = category;
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
    public getAssociationOverwrite(association: association) {
        return new Substantive(this.name, [association], this.category);
    }
}
