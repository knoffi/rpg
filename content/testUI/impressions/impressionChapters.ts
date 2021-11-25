import { Noticable } from '../../../classes/idea/Noticable';
import { averageCustomers } from './averageCustomer/averageCustomer';
import { patternTestBartender } from './bartender/testBartender';
import { specialIndividuals } from './individuals/specialPeople';
import { keyTestFurnitures } from './objects/testFurniture';

export const impressionChapters = [
    {
        ideas: [...keyTestFurnitures],
        category: Noticable.furniture,
    },
    {
        ideas: [...averageCustomers],
        category: Noticable.averageCustomer,
    },
    {
        ideas: [...specialIndividuals],
        category: Noticable.someCustomers,
    },
    {
        ideas: [...patternTestBartender],
        category: Noticable.bartender,
    },
];
