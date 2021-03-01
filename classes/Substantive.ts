import { ITavernAsset } from '../helpingFunctions/ITavernAsset';
import { association } from './association';

export enum substantiveCategory {
    animal = 'animal/monster',
    plant = 'plant',
    job = 'job',
    solid = 'solid object',
    person = 'person',
}

const WORD_NEEDS_THESE_EXTREMS = [
    association.criminal,
    association.evil,
    association.prostitute,
];
export class Substantive implements ITavernAsset {
    name: string;
    public associations: association[];
    public category: substantiveCategory;
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
        fits: association[],
        misfits: association[],
        minPros: number,
        maxCons: number
    ) {
        const proCount = this.associations.filter((association) => {
            return misfits.includes(association);
        }).length;
        const conCount = this.associations.filter((association) => {
            return fits.includes(association);
        }).length;

        return proCount >= minPros && conCount <= maxCons;
    }
    public getAssociationOverwrite(association: association) {
        return new Substantive(this.name, [association], this.category);
    }

    public getNecessarities() {
        return this.associations
            .slice()
            .filter((association) =>
                WORD_NEEDS_THESE_EXTREMS.includes(association)
            );
    }
}
