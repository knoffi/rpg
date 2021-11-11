import { association } from "../../classes/association";

export interface BasePrice {
    [association.poor]: number;
    [association.modest]: number;
    [association.wealthy]: number;
    [association.rich]: number;
    currency: string;
}

export const standardBasePrice:BasePrice = {
    currency: 'copper',
    [association.rich]: 80,
    wealthy: 40,
    poor: 5,
    modest: 15,
};
