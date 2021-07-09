import { AssetKey } from './AssetKey';

//TODO: write test to chekc whether every key has a bound
const getKeyBound = (key: AssetKey) => {
    if (key === AssetKey.plotTwist) {
        return 1;
    }
    console.log('key is missing');
    return 1;
};
