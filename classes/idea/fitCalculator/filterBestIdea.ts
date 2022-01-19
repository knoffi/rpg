import { Idea } from '../Idea';
import { WORST_FIT_LEVEL } from './getFitLevel';
import { LevelRequest } from './LevelRequest';
import { getRating, isBetter, isEqual, Rating } from './Rating';
import { UserRating } from './UserRating';
export const filterBestIdeas = <Type extends Idea>(
    request: LevelRequest<Type>
) => {
    let bestFittingAssets: Type[] = [];

    let bestRatingSoFar: Rating = {
        fitLevel: WORST_FIT_LEVEL,
        history: UserRating.unwanted,
    };

    request.ideas.forEach((idea) => {
        const fitLevel = idea.getFitLevelForTavern(request);
        const isUnpleasant = request.isUnpleasant(idea.main.name);
        const isUnwanted = request.isUnwanted(idea.main.name);
        const rating = getRating(fitLevel, isUnwanted, isUnpleasant);
        const betterRatingFound = isBetter(rating, bestRatingSoFar);

        const sameRatingReached = isEqual(rating, bestRatingSoFar);

        if (betterRatingFound) {
            bestRatingSoFar = rating;
            bestFittingAssets = [idea];
        } else {
            if (sameRatingReached && fitLevel > WORST_FIT_LEVEL) {
                bestFittingAssets.push(idea);
            }
        }
    });
    if (bestRatingSoFar.fitLevel === WORST_FIT_LEVEL) {
        return undefined;
    } else {
        if (bestFittingAssets.length === 0) {
            console.log(
                'NO ASSETS TO USE, ALTHOUGH SUFFICIENT FIT LEVEL IS POSSIBLE'
            );
        }
        return {
            ideas: bestFittingAssets,
            rating: bestRatingSoFar,
        };
    }
};
