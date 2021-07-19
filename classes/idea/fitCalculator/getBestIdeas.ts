import { FitLevel } from './FitLevel';

export const getBestIdeas = <Type>(ideaSorting: {
    high: Type[];
    medium: Type[];
    low: Type[];
}) => {
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
