import { AssetKey } from '../../classes/idea/AssetKey/AssetKey';
import { getKeyBound } from '../../classes/idea/AssetKey/getKeyBound';
import { IImpression } from './impressions/IImpression';

export function getFullKeys(impressionsOfTitle: IImpression[]) {
    const fullFirstKeys: AssetKey[] = [];
    const fullSecondKeys: AssetKey[] = [];
    const firstKeyCounting: Map<AssetKey, number> = new Map([]);
    const secondKeyCounting: Map<AssetKey, number> = new Map([]);
    impressionsOfTitle.forEach((impression) => {
        const firstKeys = impression.firstKeys;
        const secondKeys = impression.secondKeys;
        if (firstKeys) {
            {
                firstKeys.forEach((key) => {
                    const oldValue = firstKeyCounting.get(key) || 0;
                    const newValue = oldValue + 1;
                    if (newValue >= getKeyBound(key)) {
                        fullFirstKeys.push(key);
                    }
                    firstKeyCounting.set(key, newValue);
                });
            }
        }
        if (secondKeys) {
            secondKeys.forEach((key) => {
                const oldValue = secondKeyCounting.get(key) || 0;
                const newValue = oldValue + 1;
                if (newValue >= getKeyBound(key)) {
                    fullSecondKeys.push(key);
                }
                secondKeyCounting.set(key, newValue);
            });
        }
    });
    return { first: fullFirstKeys, second: fullSecondKeys };
}
