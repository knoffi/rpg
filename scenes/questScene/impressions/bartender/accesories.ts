import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
const a = association;
export const bartenderAccesories: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: ' ring',
            key: AssetKey.BARTENDER_accessoires,
            powerFits: [a.modest, a.rich, a.wealthy],
            worksForAllCriminals: true,
        },
        [
            {
                name: 'Silver',
            },
            {
                name: 'Golden',
                worksForThiefs: true,
            },
            {
                name: 'Green',
                misfits: [a.rich],
            },
            {
                name: 'Blood red',
                worksForAllCriminals: true,
                needsOne: [a.thief, a.prostitute, a.assasine],
            },
            {
                name: 'Black',
                worksForAllCriminals: true,
                misfits: [a.rich],
            },
            {
                name: 'Iron',
                misfits: [a.rich, a.wealthy],
                worksForAssasines: true,
            },
            {
                name: 'Copper',
                incomeRange: [a.wealthy, a.modest],
            },
        ],
        Noticable.bartender,
        undefined,
        true
    ),
    new ImpressionIdea(
        {
            name: 'Misses his ',
            needsOne: [
                a.barbarian,
                a.soldier,
                a.adventurer,
                a.thief,
                a.assasine,
                a.knight,
                a.prostitute,
            ],
            worksForAllCriminals: true,
        },
        [
            {
                name: 'left leg',
                powerFits: [a.haven, a.soldier, a.thief],
                needsOne: [a.haven, a.soldier],
                worksForAllCriminals: true,
            },
            {
                name: 'left hand',
                worksForAllCriminals: true,
                powerFits: [a.haven, a.soldier, a.thief, a.desert],
                needsOne: [a.haven, a.soldier, a.desert],
            },
            {
                name: 'left ear',
                misfits: [a.haven],
            },
            {
                name: 'left thumb',
                misfits: [a.haven],
            },
            {
                name: 'left arm',
                misfits: [a.haven],
            },
            {
                name: 'left eye',
                powerFits: [a.haven, a.soldier, a.thief, a.barbarian],
                needsOne: [a.haven, a.soldier, a.barbarian],
            },
            {
                name: 'right leg',
                powerFits: [a.haven, a.soldier, a.thief],
                needsOne: [a.haven, a.soldier],
            },
            {
                name: 'right hand',
                worksForAllCriminals: true,
                powerFits: [a.haven, a.soldier, a.thief, a.desert],
                needsOne: [a.haven, a.soldier, a.desert],
            },
            {
                name: 'right ear',
                misfits: [a.haven],
            },
            {
                name: 'right thumb',
                misfits: [a.haven],
            },
            {
                name: 'right eye',
                powerFits: [a.haven, a.soldier, a.thief, a.barbarian],
                needsOne: [a.haven, a.soldier, a.barbarian],
            },
            {
                name: 'right arm',
                misfits: [a.haven],
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
];
