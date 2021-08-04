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
            key: AssetKey.BARTENDER_accessoires,
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
    new ImpressionIdea(
        {
            name: ' on his shoulder',
            worksForAllCriminals: true,
            key: AssetKey.BARTENDER_accessoires,
        },
        [
            {
                name: 'Monkey',
                needsOne: [a.desert, a.tropical, a.thief, a.haven],
                misfits: [a.underdark],
                worksForAllCriminals: true,
            },
            {
                name: 'Rat',
                needsOne: [a.poor, a.thief, a.underdark],
                worksForAllCriminals: true,
            },
            {
                name: 'Owl',
                needsOne: [a.wizard, a.adventurer, a.druid],
                misfits: [a.underdark, a.haven, a.tropical],
                worksForAllCriminals: true,
            },
            {
                name: 'Kitty',
                needsOne: [a.poor, a.modest, a.village, a.prostitute],
                worksForAllCriminals: true,
            },
            {
                name: 'Parrot',
                needsOne: [a.desert, a.tropical, a.haven],
                worksForAllCriminals: true,
            },
            {
                name: 'Pixie',
                needsOne: [a.druid, a.wizard, a.forest, a.adventurer],
                landRange: [a.village, a.forest, a.city, a.mountain],
                worksForAllCriminals: true,
            },
            {
                name: 'Humming-bird',
                needsOne: [a.druid, a.tropical, a.bard, a.adventurer],
                landRange: [a.tropical, a.desert, a.haven, a.city],
                worksForAllCriminals: true,
            },
            {
                name: 'Seagull',
                needs: [a.haven],
                worksForAllCriminals: true,
            },
            {
                name: 'Sparrow',
                needsOne: [a.druid, a.village, a.forest, a.adventurer, a.thief],
                landRange: [a.village, a.forest, a.city, a.mountain],
                worksForAllCriminals: true,
            },
            {
                name: 'Raven',
                needsOne: [a.druid, a.wizard, a.forest, a.adventurer, a.thief],
                landRange: [a.village, a.forest, a.city, a.mountain],
                worksForAllCriminals: true,
            },
            {
                name: 'Woodpecker',
                needsOne: [a.druid, a.forest, a.adventurer],
                landRange: [a.village, a.forest, a.city],
                worksForAllCriminals: true,
            },
            {
                name: 'Bat',
                needsOne: [a.thief, a.underdark],
                landRange: [a.city, a.village, a.underdark],
                worksForAllCriminals: true,
            },
            {
                name: 'Squirrel',
                needsOne: [a.druid, a.village, a.forest],
                landRange: [a.village, a.forest, a.city, a.mountain],
                worksForAllCriminals: true,
            },
            {
                name: 'Lizard',
                needsOne: [
                    a.desert,
                    a.tropical,
                    a.thief,
                    a.underdark,
                    a.mountain,
                ],
                landRange: [a.desert, a.tropical, a.underdark, a.mountain],
                worksForAllCriminals: true,
            },
            {
                name: 'A Hamster named Boo',
                needsOne: [a.adventurer, a.barbarian],
                worksForAllCriminals: true,
            },
        ],
        Noticable.bartender,
        undefined,
        true,
        defaultPowerFitConcepts.harmony
    ),
];
