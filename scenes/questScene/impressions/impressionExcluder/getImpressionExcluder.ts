import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';

export const getKeyExcluder =
    (fullKeys: AssetKey[]) => (key: AssetKey | undefined) => {
        if (!key) {
            return false;
        } else {
            const result = fullKeys.some((fullKey) => key === fullKey);
            return result;
        }
    };
