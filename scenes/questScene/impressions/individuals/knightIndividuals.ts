import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
import { grownWarriorActions } from '../actions/warriorActions';

export const knightIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'A knight is ' },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
];
