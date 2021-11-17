import { WeServe } from '../../editNavigator/WeServe';
import { Content } from '../../mainNavigator/Content';
import { Offer } from '../../scenes/menuScene/Offer';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import { emptyKeys } from '../contentCreator/emptyKeys';
import { getKeyBound } from '../idea/AssetKey/getKeyBound';
import { Keys, KeyTable } from './EMPTY_KEY_COUNT_ROW';

export const getKeysFromContent = (content?: Content) => {
    const EMPTY_KEY_COUNT_ROW = { main: [], addition: [] };
    const newTable: KeyTable = {
        [WeServe.drinks]: { ...EMPTY_KEY_COUNT_ROW },
        [WeServe.food]: { ...EMPTY_KEY_COUNT_ROW },
        [WeServe.impressions]: { ...EMPTY_KEY_COUNT_ROW },
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
                        // console.log('PROPABOBA incremented!' + key.slice(0, 3));
                    } else {
                        row['main'].push({ key, count: 1 });
                        // console.log('PROPABOBA added!' + key.slice(0, 3));
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
        const logTable = newTable[WeServe.impressions].main.map((entry) => {
            return { count: entry.count, name: entry.key.slice(0, 3) };
        });
        console.log(JSON.stringify(logTable));

        return { ...newTable };
    }
};
export const getFullKeys = (content: Content, isAbout: WeServe): Keys => {
    const table = getKeysFromContent(content);
    const row = table[isAbout];
    const fullMainKeys = row.main
        .filter((item) => item.count >= getKeyBound(item.key))
        .map((keyCounting) => keyCounting.key);
    const fullAdditionKeys = row.addition
        .filter((item) => item.count >= getKeyBound(item.key))
        .map((keyCounting) => keyCounting.key);
    return { ['main']: fullMainKeys, ['addition']: fullAdditionKeys };
};
