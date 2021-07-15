import { FitLevel } from './FitLevel';
import { FitSorting } from './getSortedByFitLevel';

export const getBestIdeas = (ideaSorting: FitSorting) => {
    if (ideaSorting.high.length > 0) {
        return { ideas: ideaSorting.high, level: FitLevel.high };
    }
    if (ideaSorting.medium.length > 0) {
        return { ideas: ideaSorting.medium, level: FitLevel.medium };
    }
    if (ideaSorting.low.length > 0) {
        return { ideas: ideaSorting.low, level: FitLevel.low };
    }
    return undefined;
};
