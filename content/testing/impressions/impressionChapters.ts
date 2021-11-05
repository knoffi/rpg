import { Noticable } from '../../../classes/idea/Noticable';
import { averageCustomers } from './averageCustomer/averageCustomer';
import { patternTestBartender } from './bartender/testBartender';
import { specialIndividuals } from './individuals/specialPeople';
import { keyTestFurnitures } from './objects/testFurniture';

export const impressionChapters = [
    {
        impressions: [...keyTestFurnitures],
        category: Noticable.furniture,
    },
    {
        impressions: [...averageCustomers],
        category: Noticable.averageCustomer,
    },
    {
        impressions: [...specialIndividuals],
        category: Noticable.someCustomers,
    },
    {
        impressions: [...patternTestBartender],
        category: Noticable.bartender,
    },
];
