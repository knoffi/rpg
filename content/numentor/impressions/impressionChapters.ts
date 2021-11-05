import { Noticable } from '../../../classes/idea/Noticable';
import { averageCustomers } from './averageCustomer/averageCustomer';
import { bartenderAccesories } from './bartender/accesories';
import { bartenderActions } from './bartender/actions';
import { bartenderPast } from './bartender/backgroundStory';
import { bartenderCharisma } from './bartender/charisma';
import { bartenderKnowledge } from './bartender/knowledge';
import { bartenderOpinions } from './bartender/opinion';
import { furnitures } from './objects/furniture';
import { stuffedAnimals } from './objects/stuffedAnimals';
import { trapsIntriguingShockingFurniture } from './objects/trapsSecretIntriguingFurnite';
import { druidIndividuals } from './individuals/druids';
import { specialIndividuals } from './individuals/specialPeople';
import { wizardIndividuals } from './individuals/wizards';
import { individuals } from './individuals/genericIndividuals';

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
