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
];
