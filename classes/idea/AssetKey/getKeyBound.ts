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
    if (key === AssetKey.FURNITURE_creatureTrophies) {
        return 1;
    }
    if (key === AssetKey.FURNITURE_barDeco) {
        return 2;
    }
    if (key === AssetKey.FURNITURE_cutleryPlates) {
        return 1;
    }
    if (key === AssetKey.FURNITURE_tables) {
        return 1;
    }
    if (key === AssetKey.FURNITURE_drinkHolder) {
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
    if (key === AssetKey.BARTENDER_accessoires) {
        return 1;
    }
    if (key === AssetKey.BARTENDER_actions) {
        return 1;
    }
    if (key === AssetKey.BARTENDER_appearace) {
        return 1;
    }
    if (key === AssetKey.BARTENDER_body) {
        return 1;
    }
    if (key === AssetKey.BARTENDER_charisma) {
        return 1;
    }
    if (key === AssetKey.BARTENDER_face) {
        return 1;
    }
    if (key === AssetKey.BARTENDER_faceDetails) {
        return 1;
    }
    if (key === AssetKey.BARTENDER_knowledge) {
        return 1;
    }
    if (key === AssetKey.BARTENDER_opinion) {
        return 1;
    }

    if (key === AssetKey.AVERAGE_CUSTOMER_behavior) {
        return 1;
    }

    console.log('key is missing');
    return 3.5;
};
