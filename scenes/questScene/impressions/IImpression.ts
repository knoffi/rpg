import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../../../classes/idea/Noticable';
import { Pattern } from '../../../classes/idea/Patterns/Pattern';

export type IImpression = {
    name: string;
    category: Noticable;
    firstKeys?: AssetKey[];
    secondKeys?: AssetKey[];
    sex?: 'male' | 'female';
    patterns: Pattern[];
};

export const emptImpression: IImpression = {
    name: '',
    category: Noticable.bartender,
    firstKeys: [],
    patterns: [],
};
