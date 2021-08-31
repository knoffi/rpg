import { association } from '../../../../classes/association';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
import {
    groupWarriorActions,
    grownWarriorActions,
    warriorActions,
} from '../actions/warriorActions';

const a = association;

export const knightIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'A knight is ', powerFits: [a.knight, a.wealthy] },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A squire is ', powerFits: [a.knight, a.modest] },
        [...warriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        {
            name: 'A sturdy warrior is ',
            powerFits: [a.knight, a.barbarian, a.soldier, a.adventurer],
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        {
            name: 'A grey-haired paladin is ',
            powerFits: [a.knight, a.wealthy, a.adventurer],
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        {
            name: 'A charming cavalier is ',
            powerFits: [a.knight, a.wealthy, a.adventurer],
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        {
            name: 'A royal knight is ',
            powerFits: [a.knight, a.wealthy, a.city],
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        {
            name: 'A well-known lord is ',
            powerFits: [a.knight, a.wealthy, a.rich, a.city],
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'Two royal guards are ', powerFits: [a.knight, a.wealthy] },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        {
            name: 'A female paladin is ',
            powerFits: [a.knight, a.cleric, a.adventurer],
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        {
            name: 'A shield maid is ',
            powerFits: [a.knight, a.cleric, a.adventurer],
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'A blond woman is ', powerFits: [a.knight, a.cleric] },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        { name: 'Three knights are ', powerFits: [a.knight, a.wealthy] },
        [...groupWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        {
            name: 'A crusader is ',
            powerFits: [a.knight, a.cleric, a.adventurer],
        },
        [...groupWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nameWithAdditions
    ),
    new ImpressionIdea(
        {
            name: 'Four old knights are ',
            powerFits: [a.knight, a.cleric, a.wealthy],
        },
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
