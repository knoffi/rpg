import { WeServe } from '../../../editNavigator/WeServe';
const IMPRESSION_TEST_RANGE = 6;
const NAME_TEST_RANGE = 5;
const OFFER_TEST_RANGE = 8;
export const getPrefixExcluder = (
    names: string[],
    isAbout: WeServe | 'names'
) => {
    if (isAbout === WeServe.impressions) {
        // impression's additions are filtered if a fraction of them is contained in an old impression -  to avoid addition duplicates
        return (newName: string) => {
            return (
                newName.length > 0 &&
                names.some((name) =>
                    name.includes(newName.slice(0, IMPRESSION_TEST_RANGE))
                )
            );
        };
    }
    if (isAbout === 'names') {
        return (newName: string) =>
            names.some(
                (name) =>
                    name.slice(0, NAME_TEST_RANGE) ===
                    newName.slice(0, NAME_TEST_RANGE)
            );
    }

    //drinks and food should only depend on beginning. Otherwise, if we search for inclusion, then we could not have two Roast dishes with boiled potatoes as side dish. But that is not as redundant as   Bartender: "Unfriendly & stupid" and also "Lazy & stupid"...
    return (newName: string) =>
        names.some((name) => {
            const textRange = Math.min(newName.length, OFFER_TEST_RANGE);
            return name.slice(0, textRange) === newName.slice(0, textRange);
        });
};
