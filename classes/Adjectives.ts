import { ITavernAsset } from '../helpingFunctions/ITavernAsset';
import { association } from './association';
import { substantiveCategory } from './Substantive';

const WORD_NEEDS_THESE_EXTREMS = [
    association.criminal,
    association.evil,
    association.prostitute,
];

export const getAssociation = (name: string) => {
    const possibleName = Object.values(association).find((associationName) => {
        return associationName === name;
    });
    return possibleName ? possibleName : association.empty;
};
export class Adjective implements ITavernAsset {
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
        fits: association[],
        misfits: association[],
        minPros: number,
        maxCons: number
    ) {
        const proCount = this.associations.filter((association) => {
            return fits.includes(association);
        }).length;
        const conCount = this.associations.filter((association) => {
            return misfits.includes(association);
        }).length;

        return proCount >= minPros && conCount <= maxCons;
    }

    public isPossibleNoun(category: substantiveCategory) {
        return !this.badWords.includes(category);
    }

    public getNecessarities() {
        return this.associations
            .slice()
            .filter((association) =>
                WORD_NEEDS_THESE_EXTREMS.includes(association)
            );
    }

    public getAssociationOverwrite(association: association) {
        return new Adjective(this.name, [association], this.badWords);
    }
}
