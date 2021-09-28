import { association } from '../../../../../classes/association';
import { AssetKey } from '../../../../../classes/idea/AssetKey/AssetKey';
import { ImpressionIdea } from '../../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../../classes/idea/powerFitConcepts/powerFitConcepts';
import {
    groupWarriorActions,
    grownWarriorActions,
    warriorActions,
} from '../actions/warriorActions';

const a = association;

export const knightIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'A knight is ',
            powerFits: [a.knight, a.wealthy],
            incomeRange: [a.modest, a.wealthy],
            needsOne: [a.knight, a.soldier, a.bard],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A squire is ',
            powerFits: [a.knight, a.modest],
            incomeRange: [a.modest, a.wealthy],
            needsOne: [a.knight, a.soldier],
            worksForBrothel: true,
        },
        [...warriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A sturdy warrior is ',
            powerFits: [a.knight, a.barbarian, a.soldier, a.adventurer],
            incomeRange: [a.modest, a.wealthy],
            needsOne: [a.knight, a.soldier, a.barbarian, a.adventurer],
            worksForBrothel: true,
            worksForAssasines: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A grey-haired paladin is ',
            powerFits: [a.knight, a.wealthy, a.adventurer, a.cleric],
            incomeRange: [a.modest, a.poor, a.wealthy],
            needsOne: [a.knight, a.soldier, a.adventurer, a.cleric],
            worksForAssasines: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A charming cavalier is ',
            powerFits: [a.knight, a.wealthy, a.adventurer, a.bard],
            incomeRange: [a.modest, a.wealthy, a.rich],
            needsOne: [a.knight, a.soldier, a.adventurer, a.bard],
        },

        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A royal knight is ',
            powerFits: [a.knight, a.wealthy, a.city],
            incomeRange: [a.rich, a.wealthy],
            needsOne: [a.knight, a.soldier, a.city],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A well-known lord is ',
            powerFits: [a.knight, a.wealthy, a.rich, a.city],
            incomeRange: [a.wealthy, a.rich],
            needsOne: [a.knight, a.city],
            misfits: [a.drow],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'Two royal guards are ',
            powerFits: [a.knight, a.wealthy],
            incomeRange: [a.modest, a.wealthy],
            needsOne: [a.knight, a.city],
            key: AssetKey.INDIVIDUALS_warriorGroup,
            worksForBrothel: true,
        },
        [...groupWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A female paladin is ',
            powerFits: [a.knight, a.cleric, a.adventurer],
            incomeRange: [a.modest, a.wealthy],
            needsOne: [a.knight, a.cleric, a.adventurer, a.soldier],
            worksForAssasines: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A shield maid is ',
            powerFits: [a.knight, a.cleric, a.adventurer],
            incomeRange: [a.modest, a.wealthy],
            needsOne: [a.knight, a.cleric, a.adventurer],
            misfits: [a.desert, a.drow, a.elf, a.tiefling],
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A blond woman is ',
            powerFits: [a.knight, a.cleric],
            incomeRange: [a.modest, a.wealthy],
            needsOne: [a.knight, a.cleric, a.adventurer],
        },
        [...grownWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'Three knights are ',
            powerFits: [a.knight, a.wealthy],
            incomeRange: [a.modest, a.wealthy],
            needsOne: [a.knight, a.soldier, a.city],
            worksForBrothel: true,
            key: AssetKey.INDIVIDUALS_warriorGroup,
        },
        [...groupWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'A crusader is ',
            powerFits: [a.knight, a.cleric, a.adventurer],
            incomeRange: [a.rich, a.wealthy],
            needsOne: [a.knight, a.soldier, a.adventurer],
            landRange: [a.desert],
        },
        [...groupWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),
    new ImpressionIdea(
        {
            name: 'Four old knights are ',
            powerFits: [a.knight, a.cleric, a.wealthy],
            incomeRange: [a.rich, a.wealthy, a.modest],
            needsOne: [a.knight, a.soldier, a.city],
            worksForAssasines: true,
            key: AssetKey.INDIVIDUALS_warriorGroup,
        },
        [...groupWarriorActions],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.main
    ),

    // key max 2 : singleWarrior , key max 1: groupOfWarriors, key max 1: protectedByKnight ?
    // further ideas: lady/lord/child protected/accompanied by a knight/paladin
    // further ideas: bard who hans out with knights
];
