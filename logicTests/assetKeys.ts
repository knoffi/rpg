import { expect } from 'chai';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { getKeyBound } from '../classes/idea/AssetKey/getKeyBound';

describe('Asset key functions', () => {
    it('key bounds', () => {
        const test = (key: AssetKey) => {
            const bound = getKeyBound(key);
            expect(bound, 'failed for ' + key).to.be.greaterThan(0);
            expect(bound % 1, 'failed for ' + key).to.equal(0);
        };
        const keys = Object.values(AssetKey);
        keys.forEach((key) => test(key));
    });
    it('no value duplicates', () => {
        const test = (key: AssetKey, allKeys: AssetKey[]) => {
            const keyIsDuplicate =
                allKeys.filter((entry) => entry === key).length > 1;
            expect(keyIsDuplicate, 'failed for ' + key).to.be.false;
        };
        const keys = Object.values(AssetKey);
        keys.forEach((key) => test(key, keys));
    });
});
