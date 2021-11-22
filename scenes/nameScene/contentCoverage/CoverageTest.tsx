import { association } from '../../../classes/association';
import { Describable } from '../../../mainNavigator/TavernData';

export type CoverageTest = {
    category: Describable;
    lowestResult: { fits: association[]; value: number };
};
