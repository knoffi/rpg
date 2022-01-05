import { ReduceTarget } from '../classes/contentCreator/ContentCreator';
import { Content } from '../mainNavigator/Content';
import { Demand } from '../scenes/menuScene/offerList/actionInterfaces';
import { WeServe } from './WeServe';

export const getReduceTarget = (
    tavern: Content,
    demand: Demand
): ReduceTarget => {
    switch (demand.isAbout) {
        case WeServe.drinks:
            return { ...demand, oldAssets: tavern[demand.isAbout] };
        case WeServe.food:
            return { ...demand, oldAssets: tavern[demand.isAbout] };

        default:
            return { ...demand, oldAssets: tavern[demand.isAbout] };
    }
};
