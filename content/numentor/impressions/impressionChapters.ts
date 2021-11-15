import { Noticable } from '../../../classes/idea/Noticable';
import { averageCustomers } from './averageCustomer/averageCustomer';
import { bartenderAccesories } from './bartender/accesories';
import { bartenderActions } from './bartender/actions';
import { bartenderPast } from './bartender/backgroundStory';
import { bartenderCharisma } from './bartender/charisma';
import { bartenderKnowledge } from './bartender/knowledge';
import { bartenderOpinions } from './bartender/opinion';
import { druidIndividuals } from './individuals/druids';
import { individuals } from './individuals/genericIndividuals';
import { specialIndividuals } from './individuals/specialPeople';
import { wizardIndividuals } from './individuals/wizards';
import { furnitures } from './objects/furniture';
import { stuffedAnimals } from './objects/stuffedAnimals';
import { trapsIntriguingShockingFurniture } from './objects/trapsSecretIntriguingFurnite';

export const impressionChapters = [
    {
        ideas: [
            ...furnitures,
            ...stuffedAnimals,
            ...trapsIntriguingShockingFurniture,
        ],
        category: Noticable.furniture,
    },
    {
        ideas: [...averageCustomers],
        category: Noticable.averageCustomer,
    },
    {
        ideas: [
            ...individuals,
            ...specialIndividuals,
            ...druidIndividuals,
            ...wizardIndividuals,
        ],
        category: Noticable.someCustomers,
    },
    {
        ideas: [
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
