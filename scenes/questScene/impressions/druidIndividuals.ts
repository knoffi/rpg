import { association } from '../../../classes/association';
import {
    ImpressionIdea,
    Noticable,
} from '../../../classes/idea/ImpressionIdea';
import {
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
    // some squirrels, a group of wildlings/einsiedler, a group of green-skinned people is , a wild woman in a bear rug, a muscled man with a club as a weapon, a wildling, some forest/desert/mountain folks/people, an elf/gnome/halfling/human, a wild looking human, a woman covered in "efeu", a satyr , a group of mushroom people, a family of smurfs (?), a hunter, a group of hunters, a ranger of this area
];
