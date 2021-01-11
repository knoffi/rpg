import { association } from '../classes/Adjectives';

//export typeITavernAsset = Adjective | Substantive | TavernProduct;
export interface ITavernAsset {
    name: string;
    associations: association[];
    getAssociationOverwrite: (association: association) => ITavernAsset;
}
