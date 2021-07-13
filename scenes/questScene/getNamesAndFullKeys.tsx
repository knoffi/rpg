import { AssetKey } from '../../classes/idea/AssetKey/AssetKey';
import { getKeyBound } from '../../classes/idea/AssetKey/getKeyBound';
import { IImpression } from './impressions/IImpression';

export function getFullKeys(impressionsOfTitle: IImpression[]) {
    const fullFirstKeys: AssetKey[] = [];
    const fullSecondKeys: AssetKey[] = [];
    const firstKeyCounting: Map<AssetKey, number> = new Map([]);
    const secondKeyCounting: Map<AssetKey, number> = new Map([]);
    impressionsOfTitle.forEach((impression) => {
        const firstKey = impression.firstKey;
        const secondKey = impression.secondKey;
        if (firstKey) {
            const oldValue = firstKeyCounting.get(firstKey) || 0;
            const newValue = oldValue + 1;
            if (newValue >= getKeyBound(firstKey)) {
                fullFirstKeys.push(firstKey);
            }
            firstKeyCounting.set(firstKey, newValue);
        }
        if (secondKey) {
            const oldValue = secondKeyCounting.get(secondKey) || 0;
            const newValue = oldValue + 1;
            if (newValue >= getKeyBound(secondKey)) {
                fullSecondKeys.push(secondKey);
            }
            secondKeyCounting.set(secondKey, newValue);
        }
    });
    return { first: fullFirstKeys, second: fullSecondKeys };
}
