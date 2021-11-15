import { WeServe } from '../../editNavigator/WeServe';
import { Content } from '../../mainNavigator/Content';
import { Offer } from '../../scenes/menuScene/Offer';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import { Pattern } from '../idea/Patterns/Pattern';
type KeyToPattern<Type> = { [Property in keyof Type]: Pattern[] };
export type PatternTable = KeyToPattern<Content>;

export class PatternHandler {
    private patterns: PatternTable;

    constructor(content: Content | 'noContent') {
        const newPatterns: PatternTable = {
            drink: [],
            food: [],
            impression: [],
        };
        if (content !== 'noContent') {
            Object.values(WeServe).forEach((isAbout) => {
                const assets: (Offer | Impression)[] = content[isAbout];
                const patterns = assets.flatMap(
                    (asset) => asset.patterns || []
                );
                newPatterns[isAbout] = patterns;
            });
        }
        this.patterns = newPatterns;
    }

    public getPatterns(isAbout: WeServe) {
        return this.patterns[isAbout];
    }

    public updateClone(update: PatternChange) {
        const newHandler = new PatternHandler('noContent');
        newHandler.update(update);
        return newHandler;
    }
    public multiUpdateClone(updates: PatternChange[]) {
        const newHandler = new PatternHandler('noContent');
        updates.forEach((update) => newHandler.update(update));
        return newHandler;
    }

    public update(update: PatternChange) {
        switch (update.type) {
            case 'Add':
                this.addPattern(update);
                break;

            default:
                this.removePattern(update);
                break;
        }
    }
    private removePattern(update: Delete) {
        const targetRow = this.patterns[update.isAbout];
        update.oldPatterns.forEach((pattern) => {
            const patternAppears = targetRow.findIndex(
                (entry) => entry === pattern
            );
            if (patternAppears < 0) {
                console.log(
                    '___COULD NOT FIND PATTERN TO REMOVE: ' + pattern + '___'
                );
            } else {
                targetRow.splice(patternAppears, 1);
            }
        });
    }
    private addPattern(update: Add) {
        const targetRow = this.patterns[update.isAbout];
        const newRow = targetRow.concat(update.newPatterns);
        this.patterns[update.isAbout] = newRow;
    }
}

export type PatternChange = Add | Delete;
type Add = { isAbout: WeServe; type: 'Add'; newPatterns: Pattern[] };
type Delete = { isAbout: WeServe; type: 'Delete'; oldPatterns: Pattern[] };