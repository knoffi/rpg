import { association } from '../classes/Adjectives';

export interface ITavernAsset {
    name: string;
    associations: association[];
    getAssociationOverwrite: (association: association) => ITavernAsset;
    getNecessarities: () => association[];
}
