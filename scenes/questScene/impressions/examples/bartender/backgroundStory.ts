import { association } from '../../../../../classes/association';
import { AssetKey } from '../../../../../classes/idea/AssetKey/AssetKey';
import { ImpressionIdea } from '../../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../../classes/idea/powerFitConcepts/powerFitConcepts';

const a = association;
export const bartenderPast: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Was once ',
            worksForAllCriminals: true,
            key: AssetKey.BARTENDER_opinion,
        },
        [
            {
                name: 'a well-known captain',
                needs: [a.haven],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                name: 'a well-known sailor',
                needs: [a.haven],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                name: 'a fearsome pirate',
                needsOne: [a.haven],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            { name: 'a famous duelist', needsOne: [a.knight, a.soldier] },
            {
                name: 'a prostitute',
                needsOne: [a.prostitute, a.poor],
                worksForBrothel: true,
            },
            {
                name: 'a bandit leader',
                needsOne: [a.desert, a.forest, a.mountain],
                worksForBrothel: true,
                worksForThiefs: true,
                needs: [a.thief],
            },
            {
                name: 'a notorious thief',
                landRange: [a.city, a.desert, a.haven],
                needsOne: [a.thief, a.prostitute],
                worksForBrothel: true,
                worksForThiefs: true,
            },
            {
                name: 'a skilled smuggler',
                needsOne: [a.thief, a.desert, a.forest, a.mountain],
                worksForBrothel: true,
                worksForThiefs: true,
            },
            {
                name: 'a bounty hunter',
                needsOne: [a.adventurer, a.soldier, a.assasine, a.prostitute],
                worksForAssasines: true,
                worksForBrothel: true,
            },
            {
                name: 'a professional assasine',
                needsOne: [a.adventurer, a.soldier, a.assasine, a.prostitute],
                worksForAssasines: true,
                worksForBrothel: true,
            },
            {
                name: 'a devoted crusader',
                needsOne: [a.knight, a.soldier],
                misfits: [a.desert],
            },
            { name: 'a royal knight', needsOne: [a.knight] },
            {
                name: 'a commander of the royal army',
                needsOne: [a.knight, a.soldier],
            },
            {
                name: 'a soldier of the vanguard',
                needsOne: [a.soldier, a.knight],
            },
            { name: 'an abstinent monk', needsOne: [a.cleric] },
            { name: 'a well-known cleric', needsOne: [a.cleric] },
            {
                name: 'a vampire hunter',
                needsOne: [a.assasine, a.knight, a.cleric, a.adventurer],
            },
            {
                name: 'a ranger of this forest',
                needs: [a.forest],
                needsOne: [a.druid, a.adventurer],
            },
            {
                name: 'a ranger of these mountains',
                needs: [a.mountain],
                needsOne: [a.druid, a.adventurer],
            },
            {
                name: 'a member of the city council',
                needs: [a.city],
                misfits: [a.poor],
            },
            {
                name: 'an important politician',
                needs: [a.city],
                misfits: [a.poor],
            },
            { name: 'a gold miner', needsOne: [a.underdark, a.dwarf] },
            { name: 'a silver miner', needsOne: [a.underdark, a.dwarf] },
            { name: 'a copper miner', needsOne: [a.underdark, a.dwarf] },
            { name: 'a diamond miner', needsOne: [a.underdark, a.dwarf] },
            { name: 'a coal miner', needsOne: [a.underdark, a.dwarf] },
            {
                name: 'a tomb raider',
                needsOne: [a.desert, a.mountain, a.haven],
                needs: [a.thief],
            },
            {
                name: 'a tomb explorer',
                needsOne: [a.adventurer, a.bard, a.desert],
            },
            { name: 'a dungeon explorer', needsOne: [a.adventurer, a.bard] },
            { name: 'chief of the city guard', needs: [a.city] },
            {
                name: 'a slave trader',
                needsOne: [a.tropical, a.desert, a.thief, a.prostitute],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            { name: 'a caravan guide', needs: [a.desert] },
            {
                name: 'a well-known gladiator',
                needsOne: [a.barbarian, a.soldier, a.assasine, a.adventurer],
                worksForAssasines: true,
            },
            {
                name: 'a monster hunter',
                needsOne: [a.barbarian, a.soldier, a.assasine, a.adventurer],
                worksForAssasines: true,
            },
            {
                name: 'a teacher at a wizard school',
                needsOne: [a.wizard, a.adventurer],
                worksForAllCriminals: true,
            },
            {
                name: 'a well-known potion brewer',
                needsOne: [a.wizard, a.adventurer],
                worksForAllCriminals: true,
            },
            {
                name: 'a well-known bard',
                needsOne: [a.adventurer, a.bard],
                worksForBrothel: true,
            },
            {
                name: 'a well-known stage actor',
                needsOne: [a.adventurer, a.bard],
                worksForBrothel: true,
            },
            {
                name: 'a famous musician',
                needsOne: [a.adventurer, a.bard],
                worksForBrothel: true,
            },
            {
                name: 'a well-known adventurer',
                needsOne: [
                    a.adventurer,
                    a.wizard,
                    a.knight,
                    a.cleric,
                    a.druid,
                    a.soldier,
                ],
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
];
