import { AssetKey } from '../AssetKey/AssetKey';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { FitLevel } from './FitLevel';
import { getMinFitLevel } from './fitLevelComparing';

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

export const filterBestIdeas = <Type extends IFitLevelSortable>(
    ideas: Type[],
    tavernFits: StructuredTavernFits,
    isExcludedByName: (name: string) => boolean,
    mainIsExcludedByKey: (key: AssetKey) => boolean,
    actionIsExcludedByKey: (key: AssetKey) => boolean,
    mainFilter?: number,
    additionFilter?: number
) => {
    const fittingAssets = {
        [FitLevel.high]: [] as Type[],
        [FitLevel.mediumHigh]: [] as Type[],
        [FitLevel.medium]: [] as Type[],
        [FitLevel.mediumLow]: [] as Type[],
        [FitLevel.low]: [] as Type[],
        [FitLevel.veryLow]: [] as Type[],
        [FitLevel.extremelyLow]: [] as Type[],
    };
    let bestFitLevel = FitLevel.bad;

    ideas.forEach((idea) => {
        const fitLevel = idea.getFitLevelForTavern(
            tavernFits,
            isExcludedByName,
            mainFilter,
            additionFilter,
            mainIsExcludedByKey,
            actionIsExcludedByKey
        );
        if (
            fitLevel !== FitLevel.bad &&
            getMinFitLevel(fitLevel, bestFitLevel) === bestFitLevel
        ) {
            fittingAssets[fitLevel].push(idea);
            if (fitLevel !== bestFitLevel) {
                bestFitLevel = fitLevel;
            }
        }
    });
    if (bestFitLevel === FitLevel.bad) {
        return undefined;
    } else {
        return {
            ideas: fittingAssets[bestFitLevel] as Type[],
            level: bestFitLevel as FitLevel,
        };
    }
};
