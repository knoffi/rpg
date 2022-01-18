import { Idea } from '../Idea';
import { WORST_FIT_LEVEL } from './getFitLevel';
import { LevelRequest } from './LevelRequest';
export const filterBestIdeas = <Type extends Idea>(
    request: LevelRequest<Type>
) => {
    let bestFittingAssets = [] as Type[];

    let bestFitLevelSoFar = WORST_FIT_LEVEL;

    request.ideas.forEach((idea) => {
        const fitLevel = idea.getFitLevelForTavern(request);
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
