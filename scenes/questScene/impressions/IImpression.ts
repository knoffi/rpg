import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../../../classes/idea/Noticable';

export type IImpression = {
    name: string;
    category: Noticable;
    firstKey?: AssetKey;
    secondKey?: AssetKey;
};
