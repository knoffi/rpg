import { AssetKey } from '../AssetKey/AssetKey';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { FitLevel } from './FitLevel';

interface IFitLevelSortable {
    getFitLevelForTavern: (
        tavernFits: StructuredTavernFits,
        isExcludedByName: (name: string) => boolean,
        mainFilter?: number,
        additionFilter?: number,
        mainIsExcludedByKey?: (key: AssetKey) => boolean,
        additionIsExcludedByKey?: (key: AssetKey) => boolean
    ) => FitLevel;
}

export const getSortedByFitLevel = <Type extends IFitLevelSortable>(
    ideas: Type[],
    tavernFits: StructuredTavernFits,
    isExcludedByName: (name: string) => boolean,
    mainIsExcludedByKey: (key: AssetKey) => boolean,
    actionIsExcludedByKey: (key: AssetKey) => boolean,
    mainFilter?: number,
    additionFilter?: number
) => {
    const highFits: Type[] = [];
    const mediumHighFits: Type[] = [];
    const mediumFits: Type[] = [];
    const mediumLowFits: Type[] = [];
    const lowFits: Type[] = [];
    const veryLowFits: Type[] = [];
    const extremelyLowFits: Type[] = [];
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
        if (fitLevel === FitLevel.mediumHigh) {
            mediumHighFits.push(idea);
        }
        if (fitLevel === FitLevel.medium) {
            mediumFits.push(idea);
        }
        if (fitLevel === FitLevel.mediumLow) {
            mediumLowFits.push(idea);
        }
        if (fitLevel === FitLevel.low) {
            lowFits.push(idea);
        }
        if (fitLevel === FitLevel.veryLow) {
            veryLowFits.push(idea);
        }
        if (fitLevel === FitLevel.extremelyLow) {
            extremelyLowFits.push(idea);
        }
    });
    return {
        high: highFits,
        mediumHigh: mediumHighFits,
        medium: mediumFits,
        mediumLow: mediumLowFits,
        low: lowFits,
        veryLow: veryLowFits,
        extremelyLow: extremelyLowFits,
    };
};
