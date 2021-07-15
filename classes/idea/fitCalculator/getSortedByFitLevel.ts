import { AssetKey } from '../AssetKey/AssetKey';
import { ImpressionIdea } from '../ImpressionIdea';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { FitLevel } from './FitLevel';

export type FitSorting = {
    high: ImpressionIdea[];
    medium: ImpressionIdea[];
    low: ImpressionIdea[];
};

export const getSortedByFitLevel = (
    ideas: ImpressionIdea[],
    tavernFits: StructuredTavernFits,
    isExcludedByName: (name: string) => boolean,
    mainIsExcludedByKey: (key: AssetKey) => boolean,
    actionIsExcludedByKey: (key: AssetKey) => boolean,
    mainFilter?: number,
    additionFilter?: number
): FitSorting => {
    const highFits: ImpressionIdea[] = [];
    const mediumFits: ImpressionIdea[] = [];
    const lowFits: ImpressionIdea[] = [];
    ideas.forEach((idea) => {
        const fitLevel = idea.getFitLevelForTavern(
            tavernFits,
            isExcludedByName,
            mainFilter,
            additionFilter,
            mainIsExcludedByKey,
            actionIsExcludedByKey
        );
        if (fitLevel === FitLevel.high) {
            highFits.push(idea);
        }
        if (fitLevel === FitLevel.medium) {
            mediumFits.push(idea);
        }
        if (fitLevel === FitLevel.low) {
            lowFits.push(idea);
        }
    });
    return { high: highFits, medium: mediumFits, low: lowFits };
};
