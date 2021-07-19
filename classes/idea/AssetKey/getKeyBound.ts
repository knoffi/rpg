import { AssetKey } from './AssetKey';

//TODO: write test to check whether every key has a bound
//TODO: use different key bounds for first keys and second keys
export const getKeyBound = (key: AssetKey) => {
    if (key === AssetKey.plotTwist) {
        return 1;
    }
    if (key === AssetKey.INDIVIDUALS_servant) {
        return 1;
    }
    if (key === AssetKey.FURNITUE_creatureTrophies) {
        return 1;
    }
    if (key === AssetKey.FURNITUE_barDeco) {
        return 2;
    }
    if (key === AssetKey.FURNITUE_cutleryPlates) {
        return 1;
    }
    if (key === AssetKey.FURNITUE_tables) {
        return 1;
    }
    if (key === AssetKey.FURNITUE_drinkHolder) {
        return 1;
    }
    if (key === AssetKey.AVERAGE_CUSTOMER_drinking) {
        return 1;
    }
    if (key === AssetKey.AVERAGE_CUSTOMER_smoking) {
        return 1;
    }
    if (key === AssetKey.AVERAGE_CUSTOMER_eating) {
        return 1;
    }

    if (key === AssetKey.AVERAGE_CUSTOMER_behavior) {
        return 1;
    }

    console.log('key is missing');
    return 3.5;
};
