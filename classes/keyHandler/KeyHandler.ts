import { WeServe } from '../../editNavigator/WeServe';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { getKeyBound } from '../idea/AssetKey/getKeyBound';

export class KeyHandler {
    private keys: KeyTable;
    public constructor() {
        this.keys = {
            [WeServe.drinks]: { main: [], addition: [] },
            [WeServe.food]: { main: [], addition: [] },
            [WeServe.impressions]: { main: [], addition: [] },
        };
    }
    public update(change: KeyChange) {
        switch (change.type) {
            case 'Add':
                this.handleAdd(change);
                break;
            case 'Delete':
                this.handleDelete(change);
                break;

            default:
                this.handleReroll(change);
                break;
        }
    }
    private handleAdd(added: Add) {}
    private handleDelete(deleted: Delete) {}
    private handleReroll(rerolled: Reroll) {}
    public getFullKeys(isAbout: WeServe) {
        const row = this.keys[isAbout];
        const fullMainKeys = row.main
            .filter((item) => item.count > getKeyBound(item.key))
            .map((keyCounting) => keyCounting.key);
        const fullAdditionKeys = row.addition
            .filter((item) => item.count > getKeyBound(item.key))
            .map((keyCounting) => keyCounting.key);
        return { fullMainKeys, fullAdditionKeys };
    }
}

type Add = {
    isAbout: WeServe;
    type: 'Add';
    newKeys: { main: AssetKey[]; addition: AssetKey[] };
};
type Delete = {
    isAbout: WeServe;
    type: 'Delete';
    oldKeys: { main: AssetKey[]; addition: AssetKey[] };
};
type Reroll = {
    isAbout: WeServe;
    type: 'Reroll';
    oldKeys: { main: AssetKey[]; addition: AssetKey[] };
    newKeys: { main: AssetKey[]; addition: AssetKey[] };
};

export type KeyChange = Add | Delete | Reroll;

export type KeyTable = {
    [WeServe.drinks]: KeyRow;
    [WeServe.food]: KeyRow;
    [WeServe.impressions]: KeyRow;
};
export type KeyRow = {
    main: KeyCount[];
    addition: KeyCount[];
};
type KeyCount = {
    key: AssetKey;
    count: number;
};
