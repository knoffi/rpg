import { WeServe } from '../../menuScene/addRandomDrink';

export const getPrefixExcluder = (names: string[], isAbout: WeServe) => {
    if (isAbout === WeServe.impressions) {
        return (newName: string) =>
            names.some((name) => name.includes(newName.slice(0, 6)));
    }
    //drinks and food should only depend on beginning. Otherwise, if we search for inclusion, then we could not have two Roast dishes with boiled potatoes as side dish. But that is not as redundant as   Bartender: "Unfriendly & stupid" and also "Lazy & stupid"...
    return (newName: string) =>
        names.some((name) => name.slice(0, 8) === newName.slice(0, 8));
};
