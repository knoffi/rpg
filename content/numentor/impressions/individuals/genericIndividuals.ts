import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
import { partyHermit } from './actions/druidicalActions';
import {
    busyScholarClass,
    busyUpperClass,
    caritasWork,
    childrenClass,
    general,
    leisureUpperClass,
    lively,
    machoClass,
    servantActions,
    spying,
    teenagerClass,
} from './actions/generic';
const sophisticatedGroup = [
    association.elf,
    association.wizard,
    association.knight,
    association.rich,
    association.wealthy,
];
const a = association;

export const individuals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            incomeRange: [a.rich],
            name: 'A prince is ',
            worksForBrothel: true,
            powerFits: [a.rich, a.knight],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'An admiral is ',
            worksForBrothel: true,
            needs: [a.haven],
            powerFits: [a.haven, a.rich],
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
            powerFits: [a.haven, a.wealthy],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich],
            name: 'A princess is ',
            powerFits: [a.rich, a.bard],
            sex: 'female',
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A rich merchant is ',
            worksForBrothel: true,
            powerFits: [a.city, a.rich],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A merchant with a gold tooth is ',
            worksForBrothel: true,
            powerFits: [a.desert, a.city, a.wealthy],
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
            powerFits: [a.rich, a.knight],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            misfits: [a.drow],
            name: 'A well-known duchess is ',
            worksForBrothel: true,
            powerFits: [a.rich, a.knight],
            sex: 'female',
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            landRange: [a.haven, a.city],
            name: 'A guild master is ',
            worksForBrothel: true,
            misfits: [a.drow],
            powerFits: [a.wealthy, a.city],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A guild mistress is ',
            worksForBrothel: true,
            raceRange: [a.drow, a.elf, a.human],
            powerFits: [a.wealthy, a.city],
            sex: 'female',
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
            powerFits: [a.wealthy],
            landRange: [a.city, a.village],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A doctor is ',
            worksForBrothel: true,
            powerFits: [a.wealthy, a.city],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            landRange: [a.city, a.village],
            name: 'A baroness is ',
            powerFits: [a.wealthy],
            sex: 'female',
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich],
            name: 'A foreign prince is ',
            worksForBrothel: true,
            powerFits: [a.haven, a.rich, a.desert, a.city],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich],
            name: 'A foreign princess is ',
            powerFits: [a.haven, a.rich, a.desert, a.city],
            sex: 'female',
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier],
            incomeRange: [a.modest, a.wealthy],
            name: 'A mercenary is ',
            worksForBrothel: true,
            worksForAssasines: true,
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier],
            incomeRange: [a.modest, a.poor],
            name: 'An old-looking mercenary is ',
            worksForBrothel: true,
            worksForAssasines: true,
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier],
            incomeRange: [a.poor],
            name: 'A one-legged mercenary is ',
            worksForBrothel: true,
            worksForAssasines: true,
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier],
            incomeRange: [a.modest, a.wealthy],
            name: 'Some mercenaries are ',
            worksForBrothel: true,
            worksForAssasines: true,
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier],
            incomeRange: [a.modest, a.poor],
            name: 'A grey-haired soldier is ',
            worksForBrothel: true,
            misfits: [a.haven],
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier],
            incomeRange: [a.poor],
            name: 'A one-armed soldier is ',
            worksForBrothel: true,
            misfits: [a.haven],
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier],
            incomeRange: [a.modest],
            name: 'A soldier is ',
            misfits: [a.haven],
            worksForBrothel: true,
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier],
            incomeRange: [a.modest],
            name: 'Some soldiers are ',
            worksForBrothel: true,
            misfits: [a.haven],
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier, a.haven],
            incomeRange: [a.modest, a.poor],
            name: 'A grey-haired marine is ',
            worksForBrothel: true,
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier, a.haven],
            incomeRange: [a.modest],
            name: 'A marine is ',
            worksForBrothel: true,
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.soldier, a.haven],
            incomeRange: [a.modest],
            name: 'Some marines are ',
            worksForBrothel: true,
            powerFits: [a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [],
            name: 'A deserter is ',
            worksForBrothel: true,
            powerFits: [a.forest, a.mountain],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [],
            name: 'Some deserters are ',
            worksForBrothel: true,
            powerFits: [a.forest, a.mountain],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            name: 'An archer is ',
            worksForBrothel: true,
            worksForAssasines: true,
            misfits: [a.wealthy, a.rich, a.dwarf],
            powerFits: [a.adventurer, a.soldier, a.elf],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            name: 'Some archers are ',
            worksForBrothel: true,
            worksForAssasines: true,
            misfits: [a.wealthy, a.rich, a.dwarf],
            powerFits: [a.adventurer, a.soldier, a.elf],
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
            incomeRange: [a.poor, a.modest],
            powerFits: [a.dwarf, a.soldier],
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
            incomeRange: [a.poor, a.modest],
            powerFits: [a.dwarf, a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A musician is ',
            worksForBrothel: true,
            powerFits: [a.wealthy, a.modest, a.bard],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Some musicians are ',
            worksForBrothel: true,
            powerFits: [a.wealthy, a.modest, a.bard],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'Some orchestra members are ',
            worksForBrothel: true,
            powerFits: [a.wealthy, a.modest, a.bard],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.adventurer, a.bard],
            name: 'A bard is ',
            worksForBrothel: true,
            worksForAssasines: true,
            powerFits: [a.bard],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            misfits: sophisticatedGroup,
            name: 'A blacksmith is ',
            worksForBrothel: true,
            powerFits: [a.modest, a.city, a.village],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            misfits: sophisticatedGroup,
            name: 'A cobbler is ',
            worksForBrothel: true,
            powerFits: [a.modest, a.city, a.village],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A goldsmith is ',
            misfits: [a.elf, a.druid],
            worksForBrothel: true,
            powerFits: [a.city, a.wealthy, a.dwarf],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A silk tailor is ',
            misfits: [a.dwarf, a.druid],
            worksForBrothel: true,
            powerFits: [a.desert, a.city, a.elf, a.rich, a.wealthy],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A velvet weaver is ',
            misfits: [a.dwarf, a.druid],
            worksForBrothel: true,
            powerFits: [a.desert, a.city, a.elf, a.rich, a.wealthy],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A sculptor is ',
            misfits: [a.druid],
            worksForBrothel: true,
            powerFits: [a.city, a.wealthy, a.elf],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A jeweler is ',
            worksForBrothel: true,
            misfits: [a.druid],
            powerFits: [a.city, a.wealthy, a.dwarf],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A chancellor is ',
            misfits: [a.druid],
            landRange: [a.haven, a.city],
            worksForBrothel: true,
            powerFits: [a.wealthy, a.city],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'The viceroy is ',
            landRange: [a.haven, a.city],
            worksForBrothel: true,
            powerFits: [a.rich, a.city],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy, a.modest],
            name: 'A stone mason is ',
            misfits: [a.elf, a.drow, a.tiefling, a.druid],
            worksForBrothel: true,
            powerFits: [a.dwarf, a.city, a.modest, a.wealthy],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.knight, a.cleric],
            name: 'A high priest is ',
            incomeRange: [a.rich],
            powerFits: [a.cleric, a.rich],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A judge is ',
            landRange: [a.city, a.haven],
            powerFits: [a.wealthy, a.city],
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
            powerFits: [a.wealthy, a.cleric],
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
            powerFits: [a.barbarian, a.adventurer, a.soldier, a.bard],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.cleric, a.knight],
            name: 'A cleric is ',
            worksForAssasines: true,
            powerFits: [a.cleric, a.city, a.village, a.adventurer],
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.cleric, a.knight],
            name: 'A priest is ',
            incomeRange: [a.modest, a.wealthy],
            powerFits: [a.cleric, a.village, a.city],
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.cleric, a.knight],
            name: 'A priestess is ',
            sex: 'female',
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { classRange: [a.cleric, a.knight], name: 'A monk is ' },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { classRange: [a.cleric, a.knight], name: 'A nun is ', sex: 'female' },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A priest is ', needs: [a.poor], powerFits: [a.poor] },
        caritasWork,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A priestess is ',
            needs: [a.poor],
            powerFits: [a.poor],
            sex: 'female',
        },
        caritasWork,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A monk is ', needs: [a.poor], powerFits: [a.poor] },
        caritasWork,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A nun is ',
            needs: [a.poor],
            powerFits: [a.poor],
            sex: 'female',
        },
        caritasWork,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.poor, a.modest],
            landRange: [a.mountain, a.underdark],
            name: 'A miner is ',
            worksForBrothel: true,
            powerFits: [a.dwarf, a.mountain, a.underdark],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            landRange: [a.mountain],
            incomeRange: [a.poor, a.modest],
            name: 'Two miners are ',
            worksForBrothel: true,
            powerFits: [a.dwarf, a.mountain, a.underdark],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            landRange: [a.haven, a.city],
            incomeRange: [a.poor, a.modest],
            name: 'Two city guards are ',
            worksForBrothel: true,
            powerFits: [a.city],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A child of the tavern owner',
            incomeRange: [a.poor, a.modest],
            powerFits: [a.village],
        },
        childrenClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A young man is ',
            incomeRange: [a.poor, a.modest],
            powerFits: [a.village],
            worksForBrothel: true,
        },
        teenagerClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A young girl is ',
            incomeRange: [a.poor, a.modest],
            powerFits: [a.village],
            worksForBrothel: true,
            sex: 'female',
        },
        teenagerClass,
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
            powerFits: [a.haven, a.thief, a.bard],
            sex: 'female',
        },
        [...lively, ...general, ...servantActions],
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
            powerFits: [a.city, a.thief, a.bard],
            sex: 'female',
        },
        [...lively, ...general],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A cavalier is ',
            incomeRange: [a.wealthy, a.rich],
            classRange: [a.adventurer, a.bard],
            worksForBrothel: true,
            powerFits: [a.city, a.knight, a.wealthy, a.bard],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A pretty waitress is ',
            worksForAllCriminals: true,
            key: AssetKey.INDIVIDUALS_servant,
        },
        servantActions,
        Noticable.someCustomers,
        undefined,
        false,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'A pregnant waitress is ',
            worksForAllCriminals: true,
            key: AssetKey.INDIVIDUALS_servant,
        },
        servantActions,
        Noticable.someCustomers,
        undefined,
        false,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'A handsome waiter is ',
            worksForAllCriminals: true,
            key: AssetKey.INDIVIDUALS_servant,
        },
        servantActions,
        Noticable.someCustomers,
        undefined,
        false,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            needs: [a.poor],
            needsOne: [a.city, a.haven],
            name: 'A lumpy busker is ',
            worksForBrothel: true,
            powerFits: [a.poor, a.bard],
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
            powerFits: [a.barbarian, a.adventurer],
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
            powerFits: [a.cleric, a.knight, a.adventurer],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.cleric, a.knight, a.adventurer],
            name: 'A paladin is ',
            worksForBrothel: true,
            worksForAssasines: true,
            powerFits: [a.cleric, a.knight, a.adventurer],
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
            powerFits: [a.soldier, a.adventurer],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.adventurer, a.soldier],
            name: 'A bounty hunter is ',
            worksForBrothel: true,
            worksForAssasines: true,
            powerFits: [a.adventurer, a.assasine, a.soldier],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.village, a.forest, a.mountain],
            name: 'A farmer is ',
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
            powerFits: [a.village, a.modest, a.poor],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.village, a.city],
            name: 'A potter is ',
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
            powerFits: [a.village, a.modest, a.desert, a.city],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.city, a.village],
            name: 'A carpenter is ',
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
            powerFits: [a.city, a.haven, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.city, a.village, a.haven],
            name: 'Some guards are ',
            worksForBrothel: true,
            powerFits: [a.modest, a.soldier, a.city],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            landRange: [a.city],
            name: 'A group of royal guards is ',
            worksForBrothel: true,
            powerFits: [a.wealthy, a.rich, a.soldier, a.city],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.tropical],
            landRange: [a.haven, a.tropical],
            classRange: [a.adventurer, a.barbarian, a.bard],
            name: 'Some pirates are ',
            worksForAllCriminals: true,
            powerFits: [a.tropical, a.haven, a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.tropical],
            name: 'Some sailors are ',
            worksForBrothel: true,
            worksForThiefs: true,
            incomeRange: [a.poor, a.modest],
            powerFits: [a.tropical, a.haven, a.modest, a.poor],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.tropical],
            name: 'Some smugglers are ',
            worksForBrothel: true,
            worksForThiefs: true,
            powerFits: [a.tropical, a.haven, a.modest, a.poor],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.tropical],
            name: 'Some seamen are ',
            worksForBrothel: true,
            worksForThiefs: true,
            incomeRange: [a.poor, a.modest],
            powerFits: [a.tropical, a.haven, a.modest, a.poor],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.tropical],
            name: 'A sailor is ',
            worksForBrothel: true,
            worksForThiefs: true,
            incomeRange: [a.poor, a.modest],
            powerFits: [a.tropical, a.haven, a.modest, a.poor],
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
            powerFits: [a.haven, a.modest, a.wealthy],
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
            powerFits: [a.haven, a.modest, a.wealthy],
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
            powerFits: [a.haven, a.modest, a.poor],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.tropical],
            name: 'A captain is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
            powerFits: [a.haven, a.modest, a.poor, a.wealthy, a.tropical],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.tropical],
            name: 'A pirate captain is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
            powerFits: [a.haven, a.modest, a.poor, a.wealthy, a.tropical],
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
            powerFits: [a.mountain, a.desert, a.forest, a.druid, a.adventurer],
        },
        partyHermit,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.thief],
            name: 'A thief is ',
            worksForBrothel: true,
            worksForThiefs: true,
            powerFits: [a.thief, a.city, a.forest, a.mountain],
        },
        [...lively, ...spying],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.thief, a.prostitute],
            landRange: [a.city, a.forest, a.mountain, a.desert],
            name: 'A bandit is ',
            worksForBrothel: true,
            worksForThiefs: true,
            powerFits: [a.thief, a.city, a.forest, a.mountain, a.desert],
        },
        [...lively, ...spying],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A con artist is ',
            worksForBrothel: true,
            worksForThiefs: true,
            key: AssetKey.plotTwist,
        },
        [...lively, ...spying],
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'A secret spy is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
            key: AssetKey.plotTwist,
        },
        spying,
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'A secret agent is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
            key: AssetKey.plotTwist,
        },
        spying,
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
    new ImpressionIdea(
        {
            name: 'A Doppelgaenger is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
            key: AssetKey.plotTwist,
        },
        machoClass,
        Noticable.someCustomers,
        undefined,
        undefined,
        defaultPowerFitConcepts.nothing
    ),
];
