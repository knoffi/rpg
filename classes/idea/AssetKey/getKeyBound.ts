import { AssetKey } from './AssetKey';

//TODO: write test to check whether every key has a bound
//TODO: use different key bounds for first keys and second keys
export const getKeyBound = (key: AssetKey) => {
    if (key === AssetKey.plotTwist) {
        return 1;
    }
    if (key === AssetKey.servant) {
        return 1;
    }
    if (key === AssetKey.creatureTrophies) {
        return 1;
    }
    if (key === AssetKey.barDeco) {
        return 2;
    }
    if (key === AssetKey.cutleryPlates) {
        return 1;
    }
    if (key === AssetKey.tables) {
        return 1;
    }
    if (key === AssetKey.drinkHolder) {
        return 1;
    }
    console.log('key is missing');
    return 3.5;
};
