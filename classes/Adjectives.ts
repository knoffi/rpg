import { ITavernAsset } from '../helpingFunctions/ITavernAsset';
import { substantiveCategory } from './Substantive';

export enum association {
    empty = '',
    rich = 'vastly rich',
    poor = 'poor',
    worker = 'modest',
    nobel = 'knight',
    criminal = 'thief',
    adventurer = 'traveler',
    wizard = 'wizard',
    bard = 'bard',
    barbarian = 'wildling',
    cleric = 'cleric',
    druid = 'druid',
    prostitute = 'brothel',
    dwarf = 'dwarf',
    elf = 'elf',
    halfling = 'halfling',
    gnome = 'gnome',
    tiefling = 'tiefling',
    drow = 'drow',
    dragonborn = 'soldier',
    human = 'human',
    underdark = 'underdark',
    forest = 'forest',
    desert = 'desert',
    haven = 'haven',
    tropical = 'tropical',
    mountain = 'mountain',
    city = 'city',
    village = 'village',
    sophisticated = 'wealthy',
    evil = 'assasine', //smugglers, evil, murderer ?
}

const BINDING_SPECIAL_ASSOCIATIONS = [
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
                BINDING_SPECIAL_ASSOCIATIONS.includes(association)
            );
    }

    public getAssociationOverwrite(association: association) {
        return new Adjective(this.name, [association], this.badWords);
    }
}
