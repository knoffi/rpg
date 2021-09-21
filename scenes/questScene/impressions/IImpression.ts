import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../../../classes/idea/Noticable';

export type IImpression = {
    name: string;
    category: Noticable;
    firstKeys?: AssetKey[];
    secondKeys?: AssetKey[];
    sex?: 'male' | 'female';
};

export const emptImpression: IImpression = {
    name: '',
    category: Noticable.bartender,
    firstKeys: [],
};
