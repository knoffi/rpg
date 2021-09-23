import { AssetKey } from '../AssetKey/AssetKey';
import { Idea } from '../Idea';
import { StructuredTavernFits } from '../StructuredTavernFits';
import { WORST_FIT_LEVEL } from './getFitLevel';

export const filterBestIdeas = <Type extends Idea>(
    ideas: Type[],
    tavernFits: StructuredTavernFits,
    isExcludedByName: (name: string) => boolean,
    mainIsExcludedByKey: (key: AssetKey) => boolean,
    additionIsExcludedByKey: (key: AssetKey) => boolean,
    mainFilter?: number,
    additionFilter?: number
) => {
    let bestFittingAssets = [] as Type[];

    let bestFitLevelSoFar = WORST_FIT_LEVEL;

    ideas.forEach((idea) => {
        const fitLevel = idea.getFitLevelForTavern(
            tavernFits,
            isExcludedByName,
            mainFilter,
            additionFilter,
            mainIsExcludedByKey,
            additionIsExcludedByKey
        );
        const betterFitLevelFound = fitLevel > bestFitLevelSoFar;

        const sameFitLevelReached =
            fitLevel > WORST_FIT_LEVEL && fitLevel === bestFitLevelSoFar;

        if (betterFitLevelFound) {
            bestFitLevelSoFar = fitLevel;
            bestFittingAssets = [idea];
        } else {
            if (sameFitLevelReached) {
                bestFittingAssets.push(idea);
            }
        }
    });
    if (bestFitLevelSoFar === WORST_FIT_LEVEL) {
        return undefined;
    } else {
        if (bestFittingAssets.length === 0) {
            console.log(
                'NO ASSETS TO USE, ALTHOUGH SUFFICIENT FIT LEVEL IS POSSIBLE'
            );
        }
        return {
            ideas: bestFittingAssets,
            level: bestFitLevelSoFar,
        };
    }
};
