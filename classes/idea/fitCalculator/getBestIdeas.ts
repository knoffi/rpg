import { FitLevel } from './FitLevel';

export const getBestIdeas = <Type>(ideaSorting: {
    high: Type[];
    mediumHigh: Type[];
    mediumLow: Type[];
    medium: Type[];
    low: Type[];
    veryLow: Type[];
    extremelyLow: Type[];
}) => {
    if (ideaSorting.high.length > 0) {
        return { ideas: ideaSorting.high, level: FitLevel.high };
    }
    if (ideaSorting.mediumHigh.length > 0) {
        return { ideas: ideaSorting.mediumHigh, level: FitLevel.mediumHigh };
    }
    if (ideaSorting.medium.length > 0) {
        return { ideas: ideaSorting.medium, level: FitLevel.medium };
    }
    if (ideaSorting.mediumLow.length > 0) {
        return { ideas: ideaSorting.mediumLow, level: FitLevel.mediumLow };
    }
    if (ideaSorting.low.length > 0) {
        return { ideas: ideaSorting.low, level: FitLevel.low };
    }
    if (ideaSorting.veryLow.length > 0) {
        return { ideas: ideaSorting.veryLow, level: FitLevel.veryLow };
    }
    if (ideaSorting.extremelyLow.length > 0) {
        return {
            ideas: ideaSorting.extremelyLow,
            level: FitLevel.extremelyLow,
        };
    }
    return undefined;
};
