import { association } from './association';

export type PriceSetter = {
    [association.poor]: number;
    [association.worker]: number;
    [association.sophisticated]: number;
    [association.rich]: number;
};
