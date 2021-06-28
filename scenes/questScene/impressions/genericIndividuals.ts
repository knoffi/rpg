import { association, sophisticatedGroup } from '../../../classes/association';
import { ImpressionIdea, Noticable } from '../../../classes/idea/ImpressionIdea';
import {
    busyScholarClass,
    busyUpperClass,
    childrenClass,
    general,
    leisureUpperClass,
    lively,
    machoClass,
    servantActions,
    spying,
} from './genericActions';

const a = association;

export const individuals: ImpressionIdea[] = [
    new ImpressionIdea(
        { incomeRange: [a.rich], name: 'A prince is ', worksForBrothel: true },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'An admiral is ',
            worksForBrothel: true,
            needs: [a.haven],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A vice admiral is ',
            worksForBrothel: true,
            needs: [a.haven],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { incomeRange: [a.rich], name: 'A princess is ' },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A rich merchant is ',
            worksForBrothel: true,
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A merchant with a gold tooth is ',
            worksForBrothel: true,
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            misfits: [a.drow],
            name: 'A well-known lord is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A guild master is ',
            worksForBrothel: true,
            misfits: [a.drow],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A guild mistress is ',
            worksForBrothel: true,
            needsOne: [a.drow, a.elf],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A baron is ',
            worksForBrothel: true,
            misfits: [a.drow],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A doctor is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { incomeRange: [a.wealthy], name: 'A baroness is ' },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich],
            name: 'A foreign prince is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { incomeRange: [a.rich], name: 'A foreign princess is ' },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            name: 'A soldier is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            name: 'Some soldiers are ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            misfits: [a.dwarf],
            name: 'An archer is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            misfits: [a.dwarf],
            name: 'Some archers are ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            needs: [a.dwarf],
            name: 'An axe-thrower is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            needs: [a.dwarf],
            name: 'Some axe-throwers are ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A musician is ', worksForBrothel: true },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Some musicians are ', worksForBrothel: true },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Some orchestra members are ', worksForBrothel: true },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.adventurer, a.bard],
            name: 'A bard is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            misfits: sophisticatedGroup,
            name: 'A blacksmith is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            misfits: sophisticatedGroup,
            name: 'A cobbler is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A goldsmith is ',
            misfits: [a.elf],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A silk tailor is ',
            misfits: [a.dwarf],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A velvet weaver is ',
            misfits: [a.dwarf],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A sculptor is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A jeweler is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A chancellor is ',
            needsOne: [a.haven, a.city],
            worksForBrothel: true,
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy, a.modest],
            name: 'A stone mason is ',
            misfits: [a.elf, a.drow, a.tiefling],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.knight, a.cleric],
            name: 'A high priest is ',
            incomeRange: [a.rich],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A judge is ',
            landRange: [a.city, a.haven],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A bishop is ',
            classRange: [a.cleric, a.knight],
            landRange: [a.city, a.haven],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.barbarian, a.bard, a.adventurer, a.soldier],
            name: 'A gladiator is ',
            landRange: [a.city, a.haven],
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.cleric, a.knight],
            name: 'A cleric is ',
            worksForAssasines: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { classRange: [a.cleric, a.knight], name: 'A priest is ' },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { classRange: [a.cleric, a.knight], name: 'A priestess is ' },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { classRange: [a.cleric, a.knight], name: 'A monk is ' },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { landRange: [a.mountain], name: 'A miner is ', worksForBrothel: true },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            landRange: [a.mountain],
            name: 'Two miners are ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            landRange: [a.haven, a.city],
            name: 'Two city guards are ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A boy is ' },
        childrenClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A girl is ' },
        childrenClass,
        Noticable.someCustomers
    ),
    //TODO: wench and harlot should not hire a prostitute, they should behave like prostitutes
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.prostitute],
            name: 'A wench is ',
            landRange: [a.city, a.village, a.haven],
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        [...lively, ...general],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.prostitute],
            name: 'A harlot is ',
            landRange: [a.city, a.village, a.haven],
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        [...lively, ...general],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A cavalier is ',
            incomeRange: [a.wealthy, a.rich],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A pretty waitress is ',
            worksForAllCriminals: true,
        },
        servantActions,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A handsome waiter is ',
            worksForAllCriminals: true,
        },
        servantActions,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.poor],
            needsOne: [a.city, a.haven],
            name: 'A lumpy busker is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.adventurer],
            name: 'A wizard is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.adventurer],
            name: 'A sorcerer is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.adventurer],
            name: 'A warlock is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.adventurer],
            name: 'An illusionist is ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.cleric],
            name: 'A scribe is ',
            worksForBrothel: true,
            incomeRange: [a.modest, a.wealthy],
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.cleric],
            name: 'A scholar is ',
            worksForBrothel: true,
            incomeRange: [a.modest, a.wealthy],
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.bard, a.adventurer],
            name: 'An archaeologist is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.barbarian, a.adventurer],
            name: 'A barbarian is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.cleric, a.knight, a.adventurer],
            name: 'A knight is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            name: 'A warrior is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.adventurer, a.assasine],
            name: 'A bounty hunter is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.village],
            name: 'A farmer is ',
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.village, a.city],
            name: 'A potter is ',
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven, a.city],
            name: 'A carpenter is ',
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            landRange: [a.city, a.village, a.haven],
            name: 'Some guards are ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Some pirates are ',
            worksForAllCriminals: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Some sailors are ',
            worksForBrothel: true,
            worksForThiefs: true,
            incomeRange: [a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Some smugglers are ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Some seamen are ',
            worksForBrothel: true,
            worksForThiefs: true,
            incomeRange: [a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'A sailors is ',
            worksForBrothel: true,
            worksForThiefs: true,
            incomeRange: [a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'A shipwright is ',
            worksForBrothel: true,
            worksForThiefs: true,
            incomeRange: [a.wealthy, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'A navigator is ',
            worksForBrothel: true,
            worksForThiefs: true,
            incomeRange: [a.modest, a.wealthy],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'A lighthouse keeper is ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'A captain is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.druid, a.forest, a.mountain, a.village],
            name: 'A druid is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        [
            ...general,
            { name: 'smoking dried herbs' },
            { name: 'nursing a young bird' },
            { name: 'drinking his own brew', misfits: [a.desert, a.tropical] },
            { name: 'selling dried mushrooms' },
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.thief],
            name: 'A thief is ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [...lively, ...spying],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A con artist is ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [...lively, ...spying],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A secret spy is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        spying,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A secret agent is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        spying,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.forest],
            name: 'A shapeshifter is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
];
