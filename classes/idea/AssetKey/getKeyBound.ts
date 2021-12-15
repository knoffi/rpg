import { AssetKey } from './AssetKey';

//TODO: write test to check whether every key has a bound
//TODO: use different key bounds for first keys and second keys
export const getKeyBound = (key: AssetKey) => {
    switch (key) {
        case AssetKey.plotTwist:
            return 1;

        case AssetKey.INDIVIDUALS_servant:
            return 1;

        case AssetKey.INDIVIDUALS_warriorGroup:
            return 1;

        case AssetKey.FURNITURE_creatureTrophies:
            return 1;

        case AssetKey.FURNITURE_barDeco:
            return 1;

        case AssetKey.FURNITURE_cutleryPlates:
            return 1;

        case AssetKey.FURNITURE_tables:
            return 1;

        case AssetKey.FURNITURE_drinkHolder:
            return 1;

        case AssetKey.AVERAGE_CUSTOMER_drinking:
            return 1;

        case AssetKey.AVERAGE_CUSTOMER_smoking:
            return 1;

        case AssetKey.AVERAGE_CUSTOMER_eating:
            return 1;

        case AssetKey.BARTENDER_accessoires:
            return 1;

        case AssetKey.BARTENDER_actions:
            return 1;

        case AssetKey.BARTENDER_appearace:
            return 1;

        case AssetKey.BARTENDER_body:
            return 1;

        case AssetKey.BARTENDER_charisma:
            return 1;

        case AssetKey.BARTENDER_face:
            return 1;

        case AssetKey.BARTENDER_faceDetails:
            return 1;

        case AssetKey.BARTENDER_knowledge:
            return 1;

        case AssetKey.BARTENDER_opinion:
            return 1;

        case AssetKey.AVERAGE_CUSTOMER_behavior:
            return 1;

        case AssetKey.WINE_mead:
            return 2;

        case AssetKey.WINE_red:
            return 1;

        case AssetKey.WINE_white:
            return 1;

        case AssetKey.SMALL_DISH_carbon:
            return 1;

        case AssetKey.SMALL_DISH_soup:
            return 1;

        case AssetKey.SMALL_DISH_salad:
            return 1;

        case AssetKey.SMALL_DISH_protein:
            return 1;

        case AssetKey.SMALL_DISH_fingerfood:
            return 1;

        default:
            console.log('key is missing');
            return 3.5;
    }
};
