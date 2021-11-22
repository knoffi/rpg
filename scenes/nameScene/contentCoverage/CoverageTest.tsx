import { association } from '../../../classes/association';
import { Demand } from '../../menuScene/offerList/actionInterfaces';

export type CoverageTest = Demand & {
    lowCover: { fits: association[]; cover: number };
};
