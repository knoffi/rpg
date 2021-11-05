import { Noticable } from '../../../classes/idea/Noticable';
import { averageCustomers } from './averageCustomer/averageCustomer';
import { hats } from './bartender/hats';
import { specialIndividuals } from './individuals/specialPeople';
import { furnitures } from './objects/furniture';

export const impressionChapters = [
    {
        impressions: [...furnitures],
        category: Noticable.furniture,
    },
    {
        impressions: averageCustomers,
        category: Noticable.averageCustomer,
    },
    {
        impressions: [...specialIndividuals],
        category: Noticable.someCustomers,
    },
    {
        impressions: [...hats],
        category: Noticable.bartender,
    },
];
