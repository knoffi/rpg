import { association } from '../classes/association';

export interface ITavernAsset {
    name: string;
    associations: association[];
    getAssociationOverwrite: (association: association) => ITavernAsset;
    getNecessarities: () => association[];
}
