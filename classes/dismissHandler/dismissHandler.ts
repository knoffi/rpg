import { WeServe } from '../../editNavigator/WeServe';
import { Dismiss } from './Dismiss';
type DismissTable = Record<WeServe, Dismiss>;
const MEMORY_UNWANTED = 4;
const MEMORY_UNPLEASANT = 4;
export class DismissHandler {
    private table: DismissTable;
    constructor() {
        this.table = {
            [WeServe.drinks]: DismissHandler.getEmptyDismiss(),
            [WeServe.food]: DismissHandler.getEmptyDismiss(),
            [WeServe.impressions]: DismissHandler.getEmptyDismiss(),
        };
    }
    private cloneTable() {
        const newTable = {
            [WeServe.drinks]: DismissHandler.getEmptyDismiss(),
            [WeServe.food]: DismissHandler.getEmptyDismiss(),
            [WeServe.impressions]: DismissHandler.getEmptyDismiss(),
        };
        Object.values(WeServe).forEach((isAbout) => {
            newTable[isAbout] = { ...this.table[isAbout] };
        });
        return newTable;
    }
    //TODO: needs testing, whether previous element gets changed
    public updatedClone(isAbout: WeServe, dismiss: Dismiss) {
        const clone = new DismissHandler();
        clone.table = { ...this.cloneTable() };
        clone.add(isAbout, dismiss);
        return clone;
    }
    //TODO: needs testing, whether previous element gets changed
    public clone() {
        const clone = new DismissHandler();
        clone.table = { ...this.cloneTable() };
        return clone;
    }
    public add(isAbout: WeServe, dismiss: Dismiss) {
        const newUnwanted: string[] = [
            ...dismiss.unwanted,
            ...this.table[isAbout].unwanted,
        ];
        newUnwanted.length = Math.min(MEMORY_UNWANTED, newUnwanted.length);
        const newUnpleasant: string[] = [
            ...dismiss.unpleasant,
            ...this.table[isAbout].unpleasant,
        ];
        newUnpleasant.length = Math.min(
            MEMORY_UNPLEASANT,
            newUnpleasant.length
        );
        this.table[isAbout] = {
            unwanted: newUnwanted,
            unpleasant: newUnpleasant,
        };
    }
    public getUnwanted(isAbout: WeServe) {
        return this.table[isAbout].unwanted;
    }
    public getUnpleasant(isAbout: WeServe) {
        return this.table[isAbout].unpleasant;
    }
    private static getEmptyDismiss(): Dismiss {
        return { unwanted: [], unpleasant: [] };
    }
}
