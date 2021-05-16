import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/DescriptionIdea';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';

const a = association;
const emptyAddition: DescriptionAsset[] = [{ name: '' }];
export const specialIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'Three bounty hunters are searching' },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Babbling parrot on bar counter',
            landRange: [a.haven, a.tropical],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A guest seems to recognize YOU!' },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A guest is pointing towards your table!' },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An old man is story-telling',
            classRange: [a.adventurer, a.bard, a.wizard, a.druid],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Three bounty hunters are searching' },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Some guests notice you and suddenly look nervous' },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Police monitors guests' },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Guards monitor guests' },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Guards in front of VIP-lounge',
            needsOne: [a.assasine, a.thief, a.prostitute, a.rich],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Genie accompanies a guest',
            needsOne: [a.adventurer, a.desert, a.haven, a.city],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A rich-looking person is crying at the bar',
            needsOne: [a.poor, a.rich, a.adventurer, a.knight, a.city, a.haven],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A old man is crying at the bar',
            needsOne: [a.poor, a.village],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A young lady is crying at a table',
            misfits: [a.rich, a.wealthy],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A rich-looking person is crying at the bar',
            needsOne: [a.poor, a.rich, a.adventurer, a.knight, a.city, a.haven],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Two seamen are having an argument', needs: [a.haven] },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A ship crew gets totally drunk', needs: [a.haven] },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Some pirates have an argument',
            needs: [a.haven],
            needsOne: [a.prostitute, a.thief, a.poor],
            misfits: [a.wealthy, a.rich],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A captain searching for his crew', needs: [a.haven] },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A crew searching for its captain', needs: [a.haven] },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A captain is hiring', needs: [a.haven] },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A woman with a tattoo which looks like a map',
            needs: [a.haven],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A female pirate scares away other pirates', needs: [a.haven] },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A rebel group is hiring', incomeRange: [a.poor, a.modest] },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of bandits is hiring',
            incomeRange: [a.poor, a.modest],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A a street gang is hiring',
            incomeRange: [a.poor],
            needsOne: [a.prostitute, a.assasine, a.thief],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of high lords is playing poker',
            incomeRange: [a.rich],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of merchants is playing poker',
            incomeRange: [a.wealthy],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of merchants is playing poker',
            incomeRange: [a.rich, a.wealthy],
        },
        emptyAddition,
        Noticable.someCustomers
    ),
];
const specialIntriguings = [
    { association: a.empty, name: 'Sealed trapdoor under a table' },
    { association: a.empty, name: 'A painting of your face on wall' },
    { association: a.empty, name: 'A wanted poster with your face on it' },
    { association: a.assasine, name: 'A wanted poster with your face on it' },
    { association: a.thief, name: 'A wanted poster with your face on it' },
    { association: a.empty, name: 'Sealed trapdoor under a table' },
    { association: a.forest, name: 'Stuffed owlbear in corner' },
    { association: a.forest, name: 'Stuffed dire Wolf in corner' },
    { association: a.village, name: 'Stuffed bloodhound in corner' },
    { association: a.village, name: 'Stuffed horse in corner' },
    { association: a.village, name: 'Stuffed troll in corner' },
    { association: a.village, name: 'Stuffed bulldog in corner' },
    { association: a.desert, name: 'Stuffed lion in corner' },
    { association: a.desert, name: 'Stuffed hyena in corner' },
    { association: a.mountain, name: 'Stuffed manticore in corner' },
    { association: a.mountain, name: 'Stuffed lion in corner' },
    { association: a.haven, name: 'Stuffed shark in corner' },
    { association: a.haven, name: 'Stuffed manticore in corner' },
    { association: a.tropical, name: 'Stuffed shark in corner' },
    { association: a.tropical, name: 'Stuffed gorilla in corner' },
    { association: a.empty, name: 'Two-way mirror on wall' },
    { association: a.empty, name: 'Giant mirror on wall' },
    { association: a.empty, name: 'Exclusive VIP-lounge' },
    { association: a.rich, name: 'Exclusive VIP-lounge' },
    { association: a.prostitute, name: 'Exclusive VIP-lounge' },
    { association: a.empty, name: 'Onewall was newly painted' },
];
