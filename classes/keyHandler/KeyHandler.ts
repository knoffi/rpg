import { WeServe } from '../../editNavigator/WeServe';
import { Content } from '../../mainNavigator/Content';
import { Offer } from '../../scenes/menuScene/Offer';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import { emptyKeys } from '../contentCreator/emptyKeys';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { getKeyBound } from '../idea/AssetKey/getKeyBound';
import { Add, Delete, KeyChange, Keys, KeyTable } from './KeyHandlingTypes';
export class KeyHandler {
    private table: KeyTable;

    public constructor(content: Content | 'noPreviousContent') {
        this.table =
            content === 'noPreviousContent'
                ? KeyHandler.getKeysFromContent()
                : KeyHandler.getKeysFromContent(content);
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
        const test = this.table.impression.main.map((key) => {
            return { text: key.key.slice(0, 5), count: key.count };
        });
        const test2 = this.table.impression.addition.map((key) => {
            return { text: key.key.slice(0, 5), count: key.count };
        });
        console.log('main:' + JSON.stringify(test));
    }
    public updateClone(change: KeyChange) {
        const newHandler = new KeyHandler('noPreviousContent');
        newHandler.table = { ...this.table };
        newHandler.update(change);
        return newHandler;
    }
    public multiUpdateClone(changes: KeyChange[]) {
        const newHandler = new KeyHandler('noPreviousContent');
        newHandler.table = { ...this.table };
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
        const row = this.table[isAbout];
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
        const row = this.table[isAbout];
        const fullMainKeys = row.main
            .filter((item) => item.count >= getKeyBound(item.key))
            .map((keyCounting) => keyCounting.key);
        const fullAdditionKeys = row.addition
            .filter((item) => item.count >= getKeyBound(item.key))
            .map((keyCounting) => keyCounting.key);
        return { ['main']: fullMainKeys, ['addition']: fullAdditionKeys };
    }

    private static getKeysFromContent(content?: Content) {
        const startRow = { main: [], addition: [] };
        const newTable: KeyTable = {
            [WeServe.drinks]: { ...startRow },
            [WeServe.food]: { ...startRow },
            [WeServe.impressions]: { ...startRow },
        };
        if (!content) {
            return { ...newTable };
        } else {
            Object.values(WeServe).forEach((isAbout) => {
                const assets: (Offer | Impression)[] = content[isAbout];
                assets.forEach((asset) => {
                    const row = newTable[isAbout];
                    const newKeys = asset.keys || emptyKeys;
                    newKeys['main'].forEach((key) => {
                        const counter = row['main'].find(
                            (entry) => entry.key === key
                        );
                        if (counter) {
                            counter.count += 1;
                        } else {
                            row['main'].push({ key, count: 1 });
                        }
                    });
                    newKeys['addition'].forEach((key) => {
                        const counter = row['addition'].find(
                            (entry) => entry.key === key
                        );
                        if (counter) {
                            counter.count += 1;
                        } else {
                            row['addition'].push({ key, count: 1 });
                        }
                    });
                });
            });

            return { ...newTable };
        }
    }
}
