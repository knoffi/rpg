import { UserRating } from './UserRating';

export type Rating = { fitLevel: number; history: UserRating };
export const isBetter = (left: Rating, right: Rating): boolean => {
    if (left.history === right.history) {
        return left.fitLevel > right.fitLevel;
    } else {
        const rightIsUnfitting = right.fitLevel === 0;
        const leftIsAcceptable = left.fitLevel > 0;
        if (leftIsAcceptable) {
            if (rightIsUnfitting) {
                return true;
            } else {
                const userPrefersLeft = left.history > right.history;
                if (userPrefersLeft) {
                    return true;
                }
            }
        }
    }
    return false;
};
export const isEqual = (left: Rating, right: Rating): boolean => {
    if (left.fitLevel === 0 && right.fitLevel === 0) {
        return true;
    } else {
        return (
            left.history === right.history && left.fitLevel === right.fitLevel
        );
    }
};

export const getRating = (
    fitLevel: number,
    isUnwanted: boolean,
    isUnpleasant: boolean
): Rating => {
    const history: UserRating = isUnwanted
        ? UserRating.unwanted
        : isUnpleasant
        ? UserRating.unpleasant
        : UserRating.none;
    return { fitLevel, history };
};
