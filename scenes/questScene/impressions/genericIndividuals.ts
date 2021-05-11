import { association, sophisticatedGroup } from '../../../classes/association';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';
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
        { incomeRange: [a.rich], name: 'A Prince is ', worksForBrothel: true },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { incomeRange: [a.rich], name: 'A Princess is ' },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A rich Merchant is ',
            worksForBrothel: true,
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A Merchant with a Gold tooth is ',
            worksForBrothel: true,
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A well-known Lord is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A Guild Master is ',
            worksForBrothel: true,
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A Baron is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A Doctor is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { incomeRange: [a.wealthy], name: 'A Baroness is ' },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich],
            name: 'A Foreign Prince is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { incomeRange: [a.rich], name: 'A Foreign Princess is ' },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            name: 'A Soldier is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            name: 'Some Soldiers are ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            misfits: [a.dwarf],
            name: 'An Archer is ',
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
            name: 'Some Archers are ',
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
            name: 'An Axe-Thrower is ',
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
            name: 'Some Axe-Throwers are ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A Musician is ', worksForBrothel: true },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Some Musicians are ', worksForBrothel: true },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'Some Orchestra Members are ', worksForBrothel: true },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.adventurer, a.bard],
            name: 'A Bard is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            misfits: sophisticatedGroup,
            name: 'A Blacksmith is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            misfits: sophisticatedGroup,
            name: 'A Cobbler is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A Goldsmith is ',
            misfits: [a.elf],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A Silk Tailor is ',
            misfits: [a.dwarf],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A Velvet Weaver is ',
            misfits: [a.dwarf],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A Sculptor is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A Jeweler is ',
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.rich, a.wealthy],
            name: 'A Chancellor is ',
            needsOne: [a.haven, a.city],
            worksForBrothel: true,
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy, a.modest],
            name: 'A Stone Mason is ',
            misfits: [a.elf, a.drow, a.tiefling],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.knight, a.cleric],
            name: 'A High Priest is ',
            incomeRange: [a.rich],
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A Judge is ',
            landRange: [a.city, a.haven],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            incomeRange: [a.wealthy],
            name: 'A Bishop is ',
            classRange: [a.cleric, a.knight],
            landRange: [a.city, a.haven],
        },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.barbarian, a.bard, a.adventurer, a.soldier],
            name: 'A Gladiator is ',
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
            name: 'A Cleric is ',
            worksForAssasines: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { classRange: [a.cleric, a.knight], name: 'A Priest is ' },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { classRange: [a.cleric, a.knight], name: 'A Priestess is ' },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { classRange: [a.cleric, a.knight], name: 'A Monk is ' },
        busyUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { landRange: [a.mountain], name: 'A Miner is ', worksForBrothel: true },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            landRange: [a.mountain],
            name: 'Two Miners are ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            landRange: [a.haven, a.city],
            name: 'Two City Guards are ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A Boy is ' },
        childrenClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A Girl is ' },
        childrenClass,
        Noticable.someCustomers
    ),
    //TODO: wench and harlot should not hire a prostitute, they should behave like prostitutes
    new ImpressionIdea(
        {
            needsOne: [a.haven, a.prostitute],
            name: 'A Wench is ',
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
            name: 'A Harlot is ',
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
            name: 'A Cavalier is ',
            incomeRange: [a.wealthy, a.rich],
            worksForBrothel: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A Pretty Waitress is ',
            worksForBrothel: true,
            worksForAssasines: true,
            worksForThiefs: true,
        },
        servantActions,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A Handsome Waiter is ',
            worksForBrothel: true,
            worksForAssasines: true,
            worksForThiefs: true,
        },
        servantActions,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.poor],
            needsOne: [a.city, a.haven],
            name: 'A Lumpy Busker is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.adventurer],
            name: 'A Wizard is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.adventurer],
            name: 'A Sorcerer is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.adventurer],
            name: 'A Warlock is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.adventurer],
            name: 'An Illusionist is ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.cleric],
            name: 'A Scribe is ',
            worksForBrothel: true,
            incomeRange: [a.modest, a.wealthy],
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.cleric],
            name: 'A Scholar is ',
            worksForBrothel: true,
            incomeRange: [a.modest, a.wealthy],
        },
        busyScholarClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.wizard, a.bard, a.adventurer],
            name: 'An Archaeologist is ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needsOne: [a.barbarian, a.adventurer],
            name: 'A Barbarian is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.cleric, a.knight, a.adventurer],
            name: 'A Knight is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        leisureUpperClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.soldier, a.adventurer],
            name: 'A Warrior is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            classRange: [a.adventurer, a.assasine],
            name: 'A Bounty Hunter is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.village],
            name: 'A Farmer is ',
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.village, a.city],
            name: 'A Potter is ',
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven, a.city],
            name: 'A Carpenter is ',
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            landRange: [a.city, a.village, a.haven],
            name: 'Some Guards are ',
            worksForBrothel: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Some Pirates are ',
            worksForBrothel: true,
            worksForAssasines: true,
            worksForThiefs: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Some Sailors are ',
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
            name: 'Some Smugglers are ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'Some Seamen are ',
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
            name: 'A Sailors is ',
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
            name: 'A Shipwright is ',
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
            name: 'A Navigator is ',
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
            name: 'A Lighthouse Keeper is ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.haven],
            name: 'A Captain is ',
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
            name: 'A Druid is ',
            worksForBrothel: true,
            worksForAssasines: true,
        },
        [
            ...general,
            { name: 'Smoking some Dried Herbs' },
            { name: 'Nursing a Young Bird' },
            { name: 'Drinking his own Brew', misfits: [a.desert, a.tropical] },
            { name: 'Selling some Dried Mushrooms' },
        ],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            needs: [a.thief],
            name: 'A Thief is ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [...lively, ...spying],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A Con Artist is ',
            worksForBrothel: true,
            worksForThiefs: true,
        },
        [...lively, ...spying],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A Secret Spy is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        spying,
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An Secret Agent is ',
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
            name: 'A Shapeshifter is ',
            worksForBrothel: true,
            worksForThiefs: true,
            worksForAssasines: true,
        },
        machoClass,
        Noticable.someCustomers
    ),
];
