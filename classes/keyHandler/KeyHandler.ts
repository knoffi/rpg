import { WeServe } from '../../editNavigator/WeServe';
import { Content } from '../../mainNavigator/Content';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { getKeyBound } from '../idea/AssetKey/getKeyBound';
import { Add, Delete, KeyChange, Keys, KeyTable } from './EMPTY_KEY_COUNT_ROW';
import { getKeysFromContent } from './getKeysFromContent';
export class ContentKeyHandler {
    private contentKeys: KeyTable;

    public constructor(content: Content | 'noPreviousContent') {
        this.contentKeys =
            content === 'noPreviousContent'
                ? getKeysFromContent()
                : getKeysFromContent(content);
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
        const test = this.contentKeys.impression.main.map((key) => {
            return { text: key.key.slice(0, 5), count: key.count };
        });
        const test2 = this.contentKeys.impression.addition.map((key) => {
            return { text: key.key.slice(0, 5), count: key.count };
        });
        console.log('main:' + JSON.stringify(test));
        console.log(JSON.stringify(test2));
    }
    public updateClone(change: KeyChange) {
        const newHandler = new ContentKeyHandler('noPreviousContent');
        newHandler.contentKeys = { ...this.contentKeys };
        newHandler.update(change);
        return newHandler;
    }
    public multiUpdateClone(changes: KeyChange[]) {
        const newHandler = new ContentKeyHandler('noPreviousContent');
        newHandler.contentKeys = { ...this.contentKeys };
        changes.forEach((change) => newHandler.update(change));
        return newHandler;
    }
    private handleAdd(added: Add) {
        console.log('updater added');
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
        const row = this.contentKeys[isAbout];
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
        const row = this.contentKeys[isAbout];
        const fullMainKeys = row.main
            .filter((item) => item.count >= getKeyBound(item.key))
            .map((keyCounting) => keyCounting.key);
        const fullAdditionKeys = row.addition
            .filter((item) => item.count >= getKeyBound(item.key))
            .map((keyCounting) => keyCounting.key);
        return { ['main']: fullMainKeys, ['addition']: fullAdditionKeys };
    }
    private propagateTable(
        newTable: KeyTable,
        isAbout: WeServe,
        newKeys: Keys
    ) {
        const row = newTable[isAbout];
        newKeys.main.forEach((key) => {
            const counter = row.main.find((entry) => entry.key === key);
            if (counter) {
                counter.count += 1;
                console.log('PROPA incremented!' + key.slice(0, 3));
            } else {
                row.main.push({ key, count: 1 });
                console.log('PROPA added!' + key.slice(0, 3));
            }
        });
        newKeys.addition.forEach((key) => {
            const counter = row.addition.find((entry) => entry.key === key);
            if (counter) {
                counter.count += 1;
            } else {
                row.addition.push({ key, count: 1 });
            }
        });
    }
}
