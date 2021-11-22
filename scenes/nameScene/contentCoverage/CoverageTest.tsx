import { association } from '../../../classes/association';
import { Describable } from '../../../mainNavigator/TavernData';

export type CoverageTest = {
    category: Describable;
    fewestPowerfits: { fits: association[]; value: number };
    fewestRegularFits: { fits: association[]; value: number };
};
