import { association } from '../../../classes/association';
import {
    ImpressionIdea,
    Noticable,
} from '../../../classes/idea/ImpressionIdea';
import {
    busyScholarClass,
    leisureUpperClass,
    lively,
    machoClass,
    servantActions,
} from './genericActions';
const a = association;
export const druidIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'A forest nymph is ',
            landRange: [a.village, a.forest],
            needsOne: [a.druid, a.forest],
            powerFits: [a.druid, a.forest],
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [...servantActions, ...lively],
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
            name: 'A hermit wearinng a brown robe is ',
            landRange: [a.forest, a.mountain],
            needs: [a.druid],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [
            ...lively,
            { name: 'inviting you to smoke a pipe with him' },
            { name: 'nursing a young bird' },
            { name: 'selling potions and medice' },
            { name: 'mumbling about a hidden treasure' },
            { name: 'seeking help' },
            { name: 'giving you an ancient map' },
            { name: 'dancing with some animals' },
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A hermit wearinng a white robe is ',
            landRange: [a.desert],
            needs: [a.druid],
            powerFits: [a.druid, a.desert],
            worksForAllCriminals: true,
        },
        [
            ...lively,
            { name: 'inviting you to smoke a pipe with him' },
            { name: 'nursing a young bird' },
            { name: 'selling potions and medice' },
            { name: 'mumbling about a hidden treasure' },
            { name: 'seeking help' },
            { name: 'giving you an ancient map' },
            { name: 'dancing with some animals' },
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A hermit wearinng a grey robe is ',
            landRange: [a.underdark],
            needs: [a.druid],
            powerFits: [a.druid, a.underdark],
            worksForAllCriminals: true,
        },
        [
            ...lively,
            { name: 'inviting you to smoke a pipe with him' },
            { name: 'nursing a young bat' },
            { name: 'selling potions and medice' },
            { name: 'mumbling about a hidden treasure' },
            { name: 'seeking help' },
            { name: 'giving you an ancient map' },
            { name: 'dancing with some animals' },
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A hermit wearinng a white robe is ',
            landRange: [a.desert],
            needs: [a.druid],
            powerFits: [a.druid, a.forest, a.mountain],
            worksForAllCriminals: true,
        },
        [
            ...lively,
            { name: 'inviting you to smoke a pipe with him' },
            { name: 'nursing a young bird' },
            { name: 'selling potions and medice' },
            { name: 'mumbling about a hidden treasure' },
            { name: 'seeking help' },
            { name: 'giving you an ancient map' },
            { name: 'dancing with some wild animals' },
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
        [
            ...lively,
            ...servantActions,
            { name: 'seducing naive customers' },
            { name: 'asking you for a dance' },
            { name: 'playing a wooden flute' },
            { name: 'searching for heroes to stop the local poachers' },
        ],
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
        [
            ...lively,
            ...servantActions,
            { name: 'seducing naive customers' },
            { name: 'asking you for a dance' },
            { name: 'playing a wooden flute' },
            { name: 'searching for heroes to stop the local poachers' },
        ],
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
        [
            ...busyScholarClass,
            { name: 'seducing naive customers' },
            { name: 'asking you for a dance' },
            { name: 'searching for heroes to stop the local poachers' },
        ],
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
        [
            ...busyScholarClass,
            { name: 'seducing naive customers' },
            { name: 'asking you for a dance' },
            { name: 'playing a wooden flute' },
            { name: 'searching for heroes to stop the local poachers' },
        ],
        Noticable.someCustomers
    ),

    // a group of wildlings, some forest/desert/mountain folks/people, an elf/gnome/halfling/human, a satyr , a group of mushroom people, a family of smurfs (?), a hunter, a group of hunters, a ranger of this area, an Old man/woman wearing a mushroom hat is, a beardy old man, a huntress in brown clothes, a wood elf, a man with a wooden staff, a red-haired sorceress in a green dress ... intersections with wizard and barbarian
];
