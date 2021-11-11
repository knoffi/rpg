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
            default:
                this.handleDelete(change);
                break;
        }
    }
    public print() {
        const test = this.keys.impression.main.map((key) => {
            return { text: key.key.slice(0, 5), count: key.count };
        });
        const test2 = this.keys.impression.addition.map((key) => {
            return { text: key.key.slice(0, 5), count: key.count };
        });
        console.log('main:' + JSON.stringify(test));
        console.log(JSON.stringify(test2));
    }
    public updateClone(change: KeyChange) {
        const newHandler = new KeyHandler();
        newHandler.keys = this.keys;
        newHandler.update(change);
        return newHandler;
    }
    public multiUpdateClone(changes: KeyChange[]) {
        const newHandler = new KeyHandler();
        newHandler.keys = this.keys;
        changes.forEach((change) => newHandler.update(change));
        return newHandler;
    }
    private handleAdd(added: Add) {
        added.newKeys.addition.forEach((key) => {
            this.addKeyCount(key, 1, added.isAbout, 'addition');
        });
        added.newKeys.main.forEach((key) => {
            this.addKeyCount(key, 1, added.isAbout, 'main');
        });
    }
    private addKeyCount(
        newKey: AssetKey,
        addToCounter: 1 | -1,
        isAbout: WeServe,
        refersTo: 'main' | 'addition'
    ) {
        const row = this.keys[isAbout];
        const entryForKey = row[refersTo].find((entry) => entry.key === newKey);
        if (entryForKey) {
            entryForKey.count += addToCounter;
        } else {
            if (addToCounter > 0) {
                row[refersTo].push({ count: addToCounter, key: newKey });
            }
        }
    }
    private handleDelete(deleted: Delete) {
        deleted.oldKeys.addition.forEach((key) => {
            this.addKeyCount(key, -1, deleted.isAbout, 'addition');
        });
        deleted.oldKeys.main.forEach((key) => {
            this.addKeyCount(key, -1, deleted.isAbout, 'main');
        });
    }
    public getFullKeys(isAbout: WeServe): Keys {
        const row = this.keys[isAbout];
        const fullMainKeys = row.main
            .filter((item) => item.count >= getKeyBound(item.key))
            .map((keyCounting) => keyCounting.key);
        const fullAdditionKeys = row.addition
            .filter((item) => item.count >= getKeyBound(item.key))
            .map((keyCounting) => keyCounting.key);
        return { ['main']: fullMainKeys, ['addition']: fullAdditionKeys };
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

export type KeyChange = Add | Delete;

export type KeyTable = {
    [WeServe.drinks]: KeyRow;
    [WeServe.food]: KeyRow;
    [WeServe.impressions]: KeyRow;
};
export type KeyRow = {
    ['main']: KeyCount[];
    ['addition']: KeyCount[];
};
export type Keys = { ['main']: AssetKey[]; ['addition']: AssetKey[] };
type KeyCount = {
    key: AssetKey;
    count: number;
};
