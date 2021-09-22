import { AssetKey } from '../AssetKey/AssetKey';
import { Idea } from '../Idea';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { FitLevel } from './FitLevel';
import { getMinFitLevel } from './fitLevelComparing';

export const filterBestIdeas = <Type extends Idea>(
    ideas: Type[],
    tavernFits: StructuredTavernFits,
    isExcludedByName: (name: string) => boolean,
    mainIsExcludedByKey: (key: AssetKey) => boolean,
    additionIsExcludedByKey: (key: AssetKey) => boolean,
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
            additionIsExcludedByKey
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
