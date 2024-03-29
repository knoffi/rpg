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
                name: 'Emerald',
                needs: [a.rich],
                worksForAllCriminals: true,
                powerFits: [a.rich, a.elf],
            },
            {
                name: 'Diamond',
                needs: [a.rich],
                powerFits: [a.rich, a.gnome],
                worksForAllCriminals: true,
            },
            {
                name: 'Ruby',
                needsOne: [a.rich, a.tiefling, a.thief, a.prostitute],
                misfits: [a.poor],
                worksForAllCriminals: true,
                powerFits: [a.thief, a.rich, a.prostitute, a.tiefling],
            },
            {
                name: 'Ivory',
                needs: [a.wealthy],
                worksForBrothel: true,
                powerFits: [a.elf, a.wealthy],
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
            name: 'Battle scar ',
            key: AssetKey.BARTENDER_accessoires,
            needsOne: [a.knight, a.soldier, a.assasine, a.barbarian],
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [
            { name: 'on his left eye' },
            { name: 'on his right eye' },
            { name: 'on his right cheek' },
            { name: 'on his left cheek' },
            { name: 'on his neck' },
        ],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Smallpox scars on his face',
            key: AssetKey.BARTENDER_accessoires,
            needsOne: [a.poor, a.thief, a.prostitute],
            incomeRange: [a.poor, a.modest],
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [],
        Noticable.bartender
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
                worksForAllCriminals: true,
                powerFits: [a.barbarian, a.soldier, a.thief],
            },
            {
                name: 'left thumb',
                misfits: [a.haven],
                powerFits: [a.barbarian, a.soldier, a.knight],
            },
            {
                name: 'left arm',
                misfits: [a.haven],
                powerFits: [a.barbarian, a.soldier, a.knight],
            },
            {
                name: 'left eye',
                powerFits: [a.haven, a.soldier, a.thief, a.barbarian],
                needsOne: [a.haven, a.soldier, a.barbarian],
                worksForAllCriminals: true,
            },
            {
                name: 'right leg',
                powerFits: [a.haven, a.soldier, a.thief],
                needsOne: [a.haven, a.soldier],
                worksForAllCriminals: true,
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
                powerFits: [a.barbarian, a.soldier, a.thief],
            },
            {
                name: 'right thumb',
                powerFits: [a.barbarian, a.knight, a.soldier],
                misfits: [a.haven],
            },
            {
                name: 'right eye',
                powerFits: [a.haven, a.soldier, a.thief, a.barbarian],
                needsOne: [a.haven, a.soldier, a.barbarian],
                worksForAllCriminals: true,
            },
            {
                name: 'right arm',
                powerFits: [a.barbarian, a.knight, a.soldier, a.assasine],
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
                name: 'Black Spider',
                needs: [a.drow],
                worksForAllCriminals: true,
            },
            {
                name: 'Silver Spider',
                needs: [a.drow],
                incomeRange: [a.wealthy, a.rich],
                worksForAllCriminals: true,
            },
            {
                name: 'Green Spider',
                needs: [a.drow],
                misfits: [a.rich],
                worksForAllCriminals: true,
            },
            {
                name: 'Frog',
                needsOne: [a.druid, a.wizard],
                landRange: [a.forest, a.village, a.city],
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
    new ImpressionIdea(
        {
            name: 'A religious symbol tattooed on his neck',
            incomeRange: [a.poor, a.modest],
            needsOne: [a.cleric, a.thief, a.knight],
            key: AssetKey.BARTENDER_accessoires,
        },
        [],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'A religious amulet around his neck',
            powerFits: [a.knight, a.cleric],
            misfits: [a.poor],
            key: AssetKey.BARTENDER_accessoires,
        },
        [],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: ' on his head',
            worksForAllCriminals: true,
            key: AssetKey.BARTENDER_accessoires,
        },
        [
            {
                name: 'Turban',
                needsOne: [a.desert, a.haven, a.wizard, a.cleric, a.adventurer],
                landRange: [a.desert, a.haven],
                classRange: [a.wizard, a.cleric, a.adventurer],
            },
            { name: 'Tagelmust', needsOne: [a.desert] },
            { name: 'Tarbush hat', needsOne: [a.desert] },
            { name: 'Keffiyeh', needsOne: [a.desert] },
            {
                name: 'Steel helmet',
                needsOne: [a.knight, a.soldier, a.barbarian],
                misfits: [a.desert, a.tropical],
            },
            {
                name: 'Iron helmet',
                needsOne: [a.knight, a.soldier, a.barbarian],
                misfits: [a.desert, a.tropical],
            },
            {
                name: 'Pickelhaube',
                needsOne: [a.knight, a.soldier],
                misfits: [a.desert, a.tropical],
            },
            { name: 'Kippah', needs: [a.desert] },
            {
                name: 'Cylinder hat',
                needsOne: [a.wealthy, a.rich],
                misfits: [a.desert, a.tropical],
                powerFits: [a.wizard, a.rich],
            },
            {
                name: 'Bowler hat',
                needsOne: [a.wealthy, a.rich],
                misfits: [a.desert, a.tropical],
            },
            {
                name: 'Newsboy cap',
                needsOne: [a.modest, a.poor],
                misfits: [a.desert, a.tropical],
            },
            {
                name: 'Flat cap',
                needsOne: [a.modest, a.poor],
                misfits: [a.desert, a.tropical],
            },
            {
                name: 'Sailor cap',
                needs: [a.haven],
                misfits: [a.rich],
            },
            {
                name: 'Tricorn hat',
                needs: [a.haven],
                misfits: [a.rich],
            },
            {
                name: 'Bicorn hat',
                needs: [a.haven],
                misfits: [a.rich],
            },
            {
                name: "Fisherman's cap",
                needs: [a.haven],
                misfits: [a.rich, a.wealthy],
                powerFits: [a.haven, a.modest],
            },
            {
                name: "Dock worker's hat",
                needs: [a.haven],
                misfits: [a.rich, a.wealthy],
                powerFits: [a.haven, a.modest],
            },
            {
                name: 'Decorated tricorn hat',
                needs: [a.haven],
                incomeRange: [a.rich, a.wealthy],
            },
            {
                name: 'Decorated bicorn hat',
                needs: [a.haven],
                incomeRange: [a.rich, a.wealthy],
            },
            {
                name: 'Stylish bicorn hat',
                needs: [a.haven],
                incomeRange: [a.rich, a.wealthy],
            },
            {
                name: 'Stylish tricorn hat',
                needs: [a.haven],
                incomeRange: [a.rich, a.wealthy],
            },
            { name: 'Pineapple hat', needs: [a.tropical] },
            {
                name: 'Witch hat',
                needs: [a.wizard],
                misfits: [a.desert, a.tropical],
            },
            { name: 'Mushroom hat', needs: [a.underdark] },
            {
                name: 'Baroque wig',
                needs: [a.rich],
                misfits: [a.desert, a.tropical],
            },
        ],
        Noticable.bartender,
        undefined,
        true,
        defaultPowerFitConcepts.harmony
    ),
];
