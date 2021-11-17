import { WeServe } from '../../editNavigator/WeServe';
import { Content } from '../../mainNavigator/Content';
import { AssetKey } from '../idea/AssetKey/AssetKey';

export const EMPTY_KEY_COUNT_ROW = { main: [], addition: [] };
export type Add = {
    isAbout: WeServe;
    type: 'Add';
    newKeys: { main: AssetKey[]; addition: AssetKey[] };
};
export type Delete = {
    isAbout: WeServe;
    type: 'Delete';
    oldKeys: { main: AssetKey[]; addition: AssetKey[] };
};

export type KeyChange = Add | Delete;
type ContentToKeyRow<Type> = {
    [property in keyof Type]: KeyRow;
};

export type KeyTable = ContentToKeyRow<Content>;
export type KeyRow = {
    ['main']: KeyCount[];
    ['addition']: KeyCount[];
};
export type Keys = { ['main']: AssetKey[]; ['addition']: AssetKey[] };
type KeyCount = {
    key: AssetKey;
    count: number;
};
