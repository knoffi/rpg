import { Noticable } from '../../../classes/idea/Noticable';
import { averageCustomers } from './averageCustomer/averageCustomer';
import { hats } from './bartender/hats';
import { specialIndividuals } from './individuals/specialPeople';
import { furnitures } from './objects/furniture';

export const impressionChapters = [
    {
        ideas: [...furnitures],
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
        ideas: [...hats],
        category: Noticable.bartender,
    },
];
