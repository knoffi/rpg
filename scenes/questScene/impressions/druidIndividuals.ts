import { association } from '../../../classes/association';
import {
    ImpressionIdea,
    Noticable,
} from '../../../classes/idea/ImpressionIdea';
import {
    druidGuests,
    nymphClass,
    partyHermit,
} from './actions/druidicalActions';
import {
    busyScholarClass,
    leisureUpperClass,
    lively,
    machoClass,
    servantActions,
} from './actions/genericActions';
import { warningMonsters, warningWeather } from './actions/warningActions';
const a = association;
export const druidIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'A forest nymph is ',
            landRange: [a.forest],
            needsOne: [a.druid, a.forest],
            powerFits: [a.druid, a.forest],
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [...servantActions, ...nymphClass],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A satyr is ',
            landRange: [a.forest],
            needsOne: [a.druid, a.forest],
            powerFits: [a.druid, a.forest],
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [...servantActions, ...nymphClass],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking bear is ',
            landRange: [a.village, a.forest],
            needs: [a.druid],
            powerFits: [a.druid, a.forest],
            worksForAllCriminals: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking deer is ',
            landRange: [a.village, a.forest],
            needs: [a.druid],
            powerFits: [a.druid, a.forest],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A living, giant fungus is ',
            landRange: [a.underdark, a.forest],
            needsOne: [a.druid, a.underdark],
            powerFits: [a.druid, a.forest, a.underdark],
            worksForAllCriminals: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A living, giant daisy is ',
            landRange: [a.village, a.forest],
            needs: [a.druid],
            powerFits: [a.druid, a.forest],
        },
        [...servantActions, ...leisureUpperClass],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A living, young pine tree is ',
            landRange: [a.village, a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.mountain],
            worksForAllCriminals: true,
        },
        [...servantActions, ...leisureUpperClass],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A living cactus is ',
            needs: [a.desert, a.druid],
            powerFits: [a.druid, a.desert],
            worksForAllCriminals: true,
        },
        [...servantActions, ...leisureUpperClass],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking eagle is ',
            landRange: [a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.mountain],
            worksForAllCriminals: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking goat is ',
            landRange: [a.village, a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.mountain, a.village],
        },
        [...servantActions, ...lively],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking monkey is ',
            landRange: [a.desert, a.tropical],
            needsOne: [a.druid, a.tropical, a.desert],
            powerFits: [a.druid, a.desert, a.tropical],
            worksForAllCriminals: true,
        },
        [...servantActions, ...lively],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking lion is ',
            landRange: [a.desert],
            needs: [a.druid],
            powerFits: [a.druid, a.desert],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking camel is ',
            needs: [a.desert, a.druid],
            powerFits: [a.druid, a.desert],
            worksForAllCriminals: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking, giant mole is ',
            landRange: [a.underdark],
            needs: [a.druid],
            powerFits: [a.druid, a.underdark],
            worksForAllCriminals: true,
        },
        [...servantActions, ...lively],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A talking, big lizard is ',
            landRange: [a.underdark],
            needs: [a.druid],
            powerFits: [a.druid, a.underdark],
            worksForAllCriminals: true,
        },
        [...servantActions, ...lively],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of squirrels is ',
            landRange: [a.forest],
            needs: [a.druid],
            powerFits: [a.druid, a.forest],
            worksForAllCriminals: true,
        },
        [...servantActions, ...lively],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of green-skinned people is ',
            landRange: [a.forest, a.mountain],
            needsOne: [a.druid, a.elf],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of grey-skinned people is ',
            landRange: [a.desert, a.underdark],
            needsOne: [a.druid, a.elf],
            powerFits: [a.druid, a.desert, a.underdark],
            worksForAllCriminals: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of outsiders from the local wilds is ',
            needsOne: [a.druid, a.barbarian],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of nymphs is ',
            needsOne: [a.druid, a.barbarian],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        nymphClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A muscled woman wearing bear fur is ',
            landRange: [a.forest, a.mountain],
            needsOne: [a.druid, a.barbarian],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [
            ...machoClass,
            { name: 'looking for a fight' },
            { name: 'telling a crude joke' },
            { name: 'drinking excessively' },
            { name: 'challenging you for a drink contest' },
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A muscled man wearing bear fur is ',
            landRange: [a.forest, a.mountain],
            needsOne: [a.druid, a.barbarian],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [
            ...machoClass,
            { name: 'looking for a fight' },
            { name: 'telling a crude joke' },
            { name: 'drinking excessively' },
            { name: 'challenging you for a drink contest' },
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A hermit dressed in a brown robe is ',
            landRange: [a.forest, a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [
            ...partyHermit,
            ...servantActions,
            ...warningWeather,
            ...warningMonsters,
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A hermit dressed in a white robe is ',
            landRange: [a.desert],
            needs: [a.druid],
            powerFits: [a.druid, a.desert],
            worksForAllCriminals: true,
        },
        [
            ...partyHermit,
            ...servantActions,
            ...warningWeather,
            ...warningMonsters,
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A hermit dressed in a grey robe is ',
            landRange: [a.underdark],
            needs: [a.druid],
            powerFits: [a.druid, a.underdark],
            worksForAllCriminals: true,
        },
        [
            ...partyHermit,
            ...servantActions,
            ...warningWeather,
            ...warningMonsters,
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A hermit dressed in a white robe is ',
            landRange: [a.desert],
            needs: [a.druid],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [
            ...partyHermit,
            ...servantActions,
            ...warningWeather,
            ...warningMonsters,
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A woman covered in ivy leaves is ',
            landRange: [a.forest, a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [...servantActions, ...nymphClass],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A man covered in ivy leaves is ',
            landRange: [a.forest, a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [...servantActions, ...nymphClass],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A red-haired woman in green clothes is ',
            landRange: [a.forest, a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [...busyScholarClass, ...nymphClass],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A red-haired man in green clothes is ',
            landRange: [a.forest, a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [...busyScholarClass, ...nymphClass],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An old lady with a mushroom hat is ',
            landRange: [a.forest, a.mountain, a.village, a.underdark],
            needs: [a.druid],
            powerFits: [a.druid, a.forest, a.mountain, a.village],
            worksForAllCriminals: true,
        },
        [
            ...partyHermit,
            ...servantActions,
            ...warningWeather,
            ...warningMonsters,
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An old lady with a pineapple hat is ',
            landRange: [a.tropical],
            needs: [a.druid],
            powerFits: [a.druid, a.tropical],
            worksForAllCriminals: true,
        },
        [
            ...partyHermit,
            ...servantActions,
            ...warningWeather,
            ...warningMonsters,
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An old lady with a cactus hat is ',
            landRange: [a.desert],
            needs: [a.druid],
            powerFits: [a.druid, a.desert],
            worksForAllCriminals: true,
        },
        [
            ...partyHermit,
            ...servantActions,
            ...warningWeather,
            ...warningMonsters,
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky gnome is ',
            landRange: [a.underdark],
            needs: [a.druid],
            powerFits: [a.druid, a.underdark],
            worksForAllCriminals: true,
        },
        druidGuests,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky drow is ',
            landRange: [a.underdark],
            needs: [a.druid],
            powerFits: [a.druid, a.underdark],
            worksForAllCriminals: true,
        },
        druidGuests,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky elf is ',
            landRange: [a.forest],
            needs: [a.druid],
            powerFits: [a.druid, a.forest],
            worksForAllCriminals: true,
        },
        druidGuests,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky dwarf is ',
            landRange: [a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.mountain],
            worksForAllCriminals: true,
        },
        druidGuests,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky halfling is ',
            landRange: [a.village],
            needs: [a.druid],
            powerFits: [a.druid, a.village],
            worksForAllCriminals: true,
        },
        druidGuests,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky human is ',
            landRange: [a.tropical],
            needs: [a.druid],
            powerFits: [a.druid, a.tropical],
            worksForAllCriminals: true,
        },
        druidGuests,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky tiefling is ',
            landRange: [a.desert],
            needs: [a.druid],
            powerFits: [a.druid, a.desert],
            worksForAllCriminals: true,
        },
        druidGuests,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A frisky human is ',
            landRange: [a.haven],
            needs: [a.druid],
            powerFits: [a.druid, a.human],
            worksForAllCriminals: true,
        },
        druidGuests,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'The local ranger is ',
            needs: [a.druid],
            powerFits: [
                a.druid,
                a.desert,
                a.mountain,
                a.forest,
                a.underdark,
                a.tropical,
            ],
            worksForAllCriminals: true,
        },
        [...partyHermit, ...warningWeather, ...warningMonsters],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'The local druid is ',
            needs: [a.druid],
            powerFits: [
                a.druid,
                a.desert,
                a.mountain,
                a.forest,
                a.underdark,
                a.tropical,
            ],
            worksForAllCriminals: true,
        },
        [...partyHermit, ...partyHermit, ...warningWeather, ...warningMonsters],
        Noticable.someCustomers
    ),
];
