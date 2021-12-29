import { ReduceTarget } from '../classes/contentCreator/ContentCreator';
import { Content } from '../mainNavigator/Content';
import { WeServe } from './WeServe';

export const getReduceTarget = (
    tavern: Content,
    isAbout: WeServe
): ReduceTarget => {
    switch (isAbout) {
        case WeServe.drinks:
            return { isAbout, oldAssets: tavern[isAbout] };
        case WeServe.food:
            return { isAbout, oldAssets: tavern[isAbout] };

        default:
            return { isAbout, oldAssets: tavern[isAbout] };
    }
};
