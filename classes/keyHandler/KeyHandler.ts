import { WeServe } from '../../editNavigator/WeServe';
import { AssetKey } from '../idea/AssetKey/AssetKey';

export class KeyHandler {
    private keys: KeyTable;
    public constructor() {
        this.keys = {
            [WeServe.drinks]: { first: [], second: [] },
            [WeServe.food]: { first: [], second: [] },
            [WeServe.impressions]: { first: [], second: [] },
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
}

type Add = {
    type: 'Add';
    newKeys: KeyRow;
};
type Delete = { type: 'Delete'; oldKeys: KeyRow };
type Reroll = { type: 'Reroll'; oldKeys: KeyRow; newKeys: KeyRow };

export type KeyChange = Add | Delete | Reroll;

export type KeyTable = {
    [WeServe.drinks]: KeyRow;
    [WeServe.food]: KeyRow;
    [WeServe.impressions]: KeyRow;
};
export type KeyRow = {
    first: AssetKey[];
    second: AssetKey[];
};
