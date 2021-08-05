import { Noticable } from '../../../classes/idea/Noticable';
import { averageCustomers } from './averageCustomer';
import { bartenderAccesories } from './bartender/accesories';
import { bartenderPast } from './bartender/backgroundStory';
import { bartenderKnowledge } from './bartender/knowledge';
import { bartenderOpinions } from './bartender/opinion';
import { furnitures } from './furniture';
import { individuals } from './genericIndividuals';
import { druidIndividuals } from './individuals/druidIndividuals';
import { wizardIndividuals } from './individuals/wizardIndividuals';
import { specialIndividuals } from './specialIndividuals';
import { stuffedAnimals } from './stuffedAnimals';
import { trapsIntriguingShockingFurniture } from './trapsSecretIntriguingFurnite';

export const impressionChapters = [
    {
        impressions: [
            ...furnitures,
            ...stuffedAnimals,
            ...trapsIntriguingShockingFurniture,
        ],
        category: Noticable.furniture,
    },
    {
        impressions: averageCustomers,
        category: Noticable.averageCustomer,
    },
    {
        impressions: [
            ...individuals,
            ...specialIndividuals,
            ...druidIndividuals,
            ...wizardIndividuals,
        ],
        category: Noticable.someCustomers,
    },
    {
        impressions: [
            ...bartenderKnowledge,
            ...bartenderAccesories,
            ...bartenderPast,
            ...bartenderOpinions,
        ],
        category: Noticable.bartender,
    },
];
