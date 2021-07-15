import { FitLevel } from './FitLevel';

export const getMaxFitLevel = (firstLevel: FitLevel, secondLevel: FitLevel) => {
    if (firstLevel < secondLevel) {
        return secondLevel;
    } else {
        return firstLevel;
    }
};
export const getMinFitLevel = (firstLevel: FitLevel, secondLevel: FitLevel) => {
    if (firstLevel > secondLevel) {
        return secondLevel;
    } else {
        return firstLevel;
    }
};
