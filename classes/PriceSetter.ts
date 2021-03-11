import { association } from './association';

export type PriceSetter = {
    [association.poor]: number;
    [association.modest]: number;
    [association.wealthy]: number;
    [association.rich]: number;
};
