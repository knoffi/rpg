import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { WeServe } from '../../../menuScene/addRandomDrink';
import { getPrefixExcluder } from '../getPrefixExcluder';

const getKeyExcluder =
    (fullKeys: AssetKey[]) => (key: AssetKey | undefined) => {
        if (!key) {
            return false;
        } else {
            const result = fullKeys.some((fullKey) => key === fullKey);
            return result;
        }
    };

export const getImpressionExcluder = (
    oldNames: string[],
    fullFirstKeys: AssetKey[],
    fullSecondKeys: AssetKey[]
) => {
    const isExcludedByPrefix = getPrefixExcluder(oldNames, WeServe.impressions);
    const isExcludedByFirstKey = getKeyExcluder(fullFirstKeys);
    const isExcludedBySecondKey = getKeyExcluder(fullSecondKeys);
    const isExcluded = (
        name: string,
        keyData?: { describes: 'main' | 'addition'; key: AssetKey }
    ) => {
        const nameFails = isExcludedByPrefix(name);
        if (nameFails) {
            return true;
        } else {
            if (keyData) {
                const keyFails =
                    keyData.describes === 'main'
                        ? isExcludedByFirstKey(keyData.key)
                        : isExcludedBySecondKey(keyData.key);
                return keyFails;
            } else {
                return false;
            }
        }
    };
    return isExcluded;
};
