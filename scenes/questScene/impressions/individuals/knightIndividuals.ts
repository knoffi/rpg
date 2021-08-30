import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
import {
    groupWarriorActions,
    grownWarriorActions,
    warriorActions,
} from '../actions/warriorActions';

export const knightIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'A knight is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A squire is ' },
        [...warriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A sturdy warrior is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A grey-haired paladin is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A royal knight is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A well-known lord is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A royal knight is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A two royal guards are is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A female paladin is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A shield maid warrior is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A blond woman is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'Three knights are ' },
        [...groupWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'Four old knights are ' },
        [...groupWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),

    // key max 2 : singleWarrior , key max 1: groupOfWarriors, key max 1: protectedByKnight ?
    // further ideas: lady/lord/child protected/accompanied by a knight/paladin
    // further ideas: bard who hans out with knights
];
