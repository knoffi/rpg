import { Noticable } from '../../../classes/idea/Noticable';
import { averageCustomers } from './examples/averageCustomer/averageCustomer';
import { bartenderAccesories } from './examples/bartender/accesories';
import { bartenderActions } from './examples/bartender/actions';
import { bartenderPast } from './examples/bartender/backgroundStory';
import { bartenderCharisma } from './examples/bartender/charisma';
import { bartenderKnowledge } from './examples/bartender/knowledge';
import { bartenderOpinions } from './examples/bartender/opinion';
import { furnitures } from './examples/furniture/furniture';
import { individuals } from './genericIndividuals';
import { druidIndividuals } from './examples/individuals/druidIndividuals';
import { wizardIndividuals } from './examples/individuals/wizardIndividuals';
import { specialIndividuals } from './examples/individuals/specialIndividuals';
import { stuffedAnimals } from './examples/furniture/stuffedAnimals';
import { trapsIntriguingShockingFurniture } from './examples/furniture/trapsSecretIntriguingFurnite';

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
            ...bartenderActions,
            ...bartenderCharisma,
        ],
        category: Noticable.bartender,
    },
];
