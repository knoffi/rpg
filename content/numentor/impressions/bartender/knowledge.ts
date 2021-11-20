import { association, landAssociations } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
const a = association;
export const bartenderKnowledge: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Heard a rumor about ',
            needsOne: [a.wealthy, a.rich, a.city, a.haven],
            powerFits: [
                a.prostitute,
                a.rich,
                a.wealthy,
                a.city,
                a.bard,
                a.adventurer,
            ],
            key: AssetKey.BARTENDER_knowledge,
        },
        [
            { name: 'the royal family sponsoring talented bards' },
            { name: 'the prince sleeping with his sister' },
            { name: 'the prince loving roasted dragon meat' },
            { name: 'the prince looking for a music teacher' },
            { name: "the prince's soft spot for muscled women" },
            { name: "the princess' soft spot for adventurers" },
            { name: 'the princess loving baby owlbears' },
            { name: 'the princess loving omlettes from eagle eggs' },
            { name: 'the princess looking for a fencing teacher' },
            { name: 'the prince being bad at fighting' },
            { name: 'the prince being bad at fighting' },
            { name: 'the king preparing for war' },
            { name: 'the city being heavily in debt' },
            { name: 'the king preparing for a crusade' },
            { name: 'the king looking for an affaire' },
            { name: 'the king getting a divorce' },
            { name: 'the queen organizing a festival' },
            { name: 'the queen being pregnant' },
            { name: 'the queen sleeping with a servants' },
            { name: 'the queen looking for an affaire' },
            { name: 'the cancellor increasing taxes for the poor' },
            { name: "the kingdoms's treasure being empty" },
            {
                name: "the city's defenses being in dire condition",
                landRange: [a.city],
            },
            {
                name: 'the royal fleet being in dire condition',
                landRange: [a.city],
            },
            { name: "the kingdom's army being in dire condition" },
        ],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Heard a rumor about a monster ',
            misfits: [a.prostitute, a.rich],
            powerFits: [
                a.bard,
                a.adventurer,
                a.cleric,
                a.knight,
                ...landAssociations,
            ],
            key: AssetKey.BARTENDER_knowledge,
        },
        [
            { name: 'in the sewers', landRange: [a.haven, a.city] },
            {
                name: 'in an abandoned village nearby',
                landRange: [a.village, a.forest],
            },
            { name: 'at the nearby lake', landRange: [a.village, a.forest] },
            {
                name: 'near the old graveyard',
                landRange: [a.haven, a.city, a.village],
            },
            {
                name: 'in a cave to the west',
                landRange: [
                    a.underdark,
                    a.desert,
                    a.mountain,
                    a.forest,
                    a.tropical,
                ],
            },
            {
                name: 'in a cave to the east',
                landRange: [
                    a.underdark,
                    a.desert,
                    a.mountain,
                    a.forest,
                    a.tropical,
                ],
            },
            { name: 'in the nearby swamps', landRange: [a.village, a.forest] },
            {
                name: 'appearing in the slums at night',
                landRange: [a.city, a.haven],
            },
            { name: 'appearing at the docks at night', landRange: [a.haven] },
            { name: 'in the local woods', landRange: [a.forest, a.village] },
            { name: 'in the nearby rain forest', landRange: [a.tropical] },
            {
                name: 'in a cave near the beach',
                landRange: [a.tropical, a.haven],
            },
            {
                name: 'in a cave near the cliffs',
                landRange: [a.haven, a.mountain],
            },
            {
                name: 'in a nearby lava pit',
                landRange: [a.underdark, a.mountain],
            },
        ],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Heard that bandits ambushed merchants on the ',
            landRange: [a.village, a.mountain, a.forest],
            misfits: [a.prostitute],
            powerFits: [
                a.bard,
                a.adventurer,
                a.forest,
                a.mountain,
                a.village,
                a.cleric,
                a.knight,
            ],
            key: AssetKey.BARTENDER_knowledge,
        },
        [
            { name: 'eastbound path' },
            { name: 'westbound path' },
            { name: 'northbound path' },
            { name: 'southbound path' },
        ],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Heard about one of your adventures',
            key: AssetKey.BARTENDER_knowledge,
        },
        [],
        Noticable.bartender
    ),
    new ImpressionIdea(
        {
            name: 'Tells you that ',
            key: AssetKey.BARTENDER_knowledge,
            keys: [AssetKey.plotTwist, AssetKey.BARTENDER_actions],
        },
        [
            {
                name: 'a strong looking person left a letter for you!',
                powerFits: [
                    a.adventurer,
                    a.barbarian,
                    a.knight,
                    a.soldier,
                    a.assasine,
                ],
                worksForAllCriminals: true,
            },
            {
                name: 'an old friend left a letter for you!',
                powerFits: [a.city, a.bard, a.adventurer, a.knight, a.haven],
                worksForAllCriminals: true,
            },
            {
                name: 'a distant family member left a letter for you!',
                powerFits: [a.city, a.adventurer, a.haven],
            },
            {
                name: 'an armored person left a letter for you!',
                powerFits: [a.adventurer, a.barbarian, a.knight, a.soldier],
                worksForAllCriminals: true,
            },
            {
                name: 'a very beardy person left a letter for you!',
                powerFits: [a.adventurer, a.dwarf, a.wizard, a.druid],
                worksForAllCriminals: true,
            },
            {
                name: 'a beautiful lady left a letter for you!',
                powerFits: [a.bard, a.city, a.knight, a.elf, a.knight],
                worksForAssasines: true,
            },
            {
                name: 'a horned person left a letter for you!',
                powerFits: [a.tiefling, a.thief],
                worksForAllCriminals: true,
            },
            {
                name: 'an well-dressed person left a letter for you!',
                powerFits: [
                    a.elf,
                    a.drow,
                    a.tiefling,
                    a.city,
                    a.wealthy,
                    a.rich,
                    a.haven,
                ],
                worksForAllCriminals: true,
            },
            {
                name: 'a mysterious person left a letter for you!',
                powerFits: [a.wizard, a.cleric, a.desert],
                worksForAllCriminals: true,
            },
            {
                name: 'a hooded person left a letter for you!',
                powerFits: [a.poor, a.thief, a.adventurer, a.cleric, a.village],
                worksForAllCriminals: true,
            },
            {
                name: 'a rich-looking person left a letter for you!',
                powerFits: [a.rich, a.city, a.wealthy, a.haven],
                worksForAllCriminals: true,
            },
            {
                name: 'a thankful person left a letter for you!',
                powerFits: [a.knight, a.bard, a.adventurer, a.city, a.cleric],
                worksForAllCriminals: true,
            },
            {
                name: 'some bandits were looking for you!',
                powerFits: [a.forest, a.mountain, a.thief],
                classRange: [a.barbarian, a.soldier],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                name: 'some bounty hunters were looking for you!',
                worksForBrothel: true,
                worksForAssasines: true,
            },
            {
                name: 'some adventurers were looking for you!',
                powerFits: [a.adventurer, a.bard],
                worksForAllCriminals: true,
            },
            {
                name: 'some creepy people were looking for you!',
                powerFits: [a.prostitute, a.thief, a.desert],
                worksForAllCriminals: true,
            },
            {
                name: 'some cult members were looking for you!',
                powerFits: [a.city, a.tiefling],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                needsOne: [a.thief, a.poor, a.prostitute, a.tiefling],
                name: 'some criminals were looking for you!',
                worksForBrothel: true,
                worksForThiefs: true,
            },
            {
                name: 'some hooded people were looking for you!',
                needsOne: [a.thief, a.poor, a.prostitute, a.city],
                worksForAllCriminals: true,
            },
            {
                name: 'a strong looking person left a letter for you!',
                powerFits: [
                    a.adventurer,
                    a.barbarian,
                    a.knight,
                    a.soldier,
                    a.assasine,
                ],
                worksForAllCriminals: true,
            },
            {
                name: 'an old friend left a letter for you!',
                powerFits: [a.city, a.bard, a.adventurer, a.knight, a.haven],
                worksForAllCriminals: true,
            },
            {
                name: 'a distant family member left a letter for you!',
                powerFits: [a.city, a.adventurer, a.haven],
            },
            {
                name: 'an armored person left a letter for you!',
                powerFits: [a.adventurer, a.barbarian, a.knight, a.soldier],
                worksForAllCriminals: true,
            },
            {
                name: 'a very beardy person left a letter for you!',
                powerFits: [a.adventurer, a.dwarf, a.wizard, a.druid],
                worksForAllCriminals: true,
            },
            {
                name: 'a beautiful lady left a letter for you!',
                powerFits: [a.bard, a.city, a.knight, a.elf, a.knight],
                worksForAssasines: true,
            },
            {
                name: 'a horned person left a letter for you!',
                powerFits: [a.tiefling, a.thief],
                worksForAllCriminals: true,
            },
            {
                name: 'an well-dressed person left a letter for you!',
                powerFits: [
                    a.elf,
                    a.drow,
                    a.tiefling,
                    a.city,
                    a.wealthy,
                    a.rich,
                    a.haven,
                ],
                worksForAllCriminals: true,
            },
            {
                name: 'a mysterious person left a letter for you!',
                powerFits: [a.wizard, a.cleric, a.desert],
                worksForAllCriminals: true,
            },
            {
                name: 'a hooded person left a letter for you!',
                powerFits: [a.poor, a.thief, a.adventurer, a.cleric, a.village],
                worksForAllCriminals: true,
            },
            {
                name: 'a rich-looking person left a letter for you!',
                powerFits: [a.rich, a.city, a.wealthy, a.haven],
                worksForAllCriminals: true,
            },
            {
                name: 'a thankful person left a letter for you!',
                powerFits: [a.knight, a.bard, a.adventurer, a.city, a.cleric],
                worksForAllCriminals: true,
            },
            {
                name: 'some bandits left a note for you!',
                powerFits: [a.forest, a.mountain, a.thief],
                classRange: [a.barbarian, a.soldier],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                name: 'some bounty hunters left a note for you!',
                worksForBrothel: true,
                worksForAssasines: true,
            },
            {
                name: 'some adventurers left a note for you!',
                powerFits: [a.adventurer, a.bard],
                worksForAllCriminals: true,
            },
            {
                name: 'some creepy people left a note for you!',
                powerFits: [a.prostitute, a.thief, a.desert],
                worksForAllCriminals: true,
            },
            {
                name: 'some cult members left a note for you!',
                powerFits: [a.city, a.tiefling],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                needsOne: [a.thief, a.poor, a.prostitute, a.tiefling],
                name: 'some criminals left a note for you!',
                worksForBrothel: true,
                worksForThiefs: true,
            },
            {
                name: 'some hooded people left a note for you!',
                needsOne: [a.thief, a.poor, a.prostitute, a.city],
                worksForAllCriminals: true,
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
    new ImpressionIdea(
        {
            name: 'Knows a person who wants to sell ',
            key: AssetKey.BARTENDER_knowledge,
        },
        [
            {
                name: 'a dragon egg',
                misfits: [a.poor, a.modest, a.cleric, a.knight],
                powerFits: [a.wizard, a.adventurer],
                worksForAllCriminals: true,
            },
            {
                name: 'a gryphon egg',
                misfits: [a.poor],
                powerFits: [a.wizard, a.adventurer],
                worksForAllCriminals: true,
            },
            {
                name: 'a cockatrice egg',
                misfits: [a.poor, a.modest, a.cleric, a.knight],
                powerFits: [a.wizard, a.adventurer],
                worksForAllCriminals: true,
            },
            {
                name: 'a sphynx egg',
                misfits: [a.poor, a.modest, a.cleric, a.knight],
                powerFits: [a.wizard, a.adventurer],
                worksForAllCriminals: true,
            },
            {
                name: 'his haunted castle',
                misfits: [a.poor, a.modest],
                powerFits: [a.knight, a.cleric, a.adventurer],
                worksForBrothel: true,
            },
            {
                name: 'his cursed, golden necklace',
                misfits: [a.wealthy, a.rich],
                powerFits: [a.desert, a.prostitute, a.tiefling],
                worksForBrothel: true,
                worksForAssasines: true,
            },
            {
                name: 'his cursed, but masterful sword',
                misfits: [a.wealthy],
                powerFits: [a.soldier, a.tiefling, a.drow, a.adventurer],
                worksForAssasines: true,
            },
            {
                name: 'his silver mine',
                misfits: [a.poor, a.modest],
                needsOne: [a.city, a.mountain, a.dwarf],
                powerFits: [a.rich, a.wealthy],
                worksForBrothel: true,
            },
            {
                name: 'his breathtaking, but haunted painting',
                needsOne: [a.rich, a.wealthy],
                misfits: [a.village],
                worksForThiefs: true,
            },
            {
                name: 'his old carriage',
                misfits: [a.rich, a.wealthy],
                powerFits: [a.poor, a.modest, a.village, a.city],
                worksForAssasines: true,
            },
            {
                name: 'his cursed ship',
                needs: [a.haven],
                worksForThiefs: true,
            },
            {
                name: 'his house in the woods',
                misfits: [a.rich, a.wealthy],
                needs: [a.forest],
                powerFits: [a.druid],
            },
            {
                name: 'his house in the city',
                misfits: [a.rich, a.wealthy],
                needs: [a.city],
                powerFits: [a.modest],
            },
            {
                name: 'his luxury mansion',
                needs: [a.city],
                needsOne: [a.wealthy, a.rich],
                worksForBrothel: true,
            },
            {
                name: 'his tower in the woods',
                misfits: [a.rich, a.wealthy],
                needs: [a.forest],
            },
            {
                name: 'her haunted castle',
                misfits: [a.poor, a.modest],
                powerFits: [a.knight, a.cleric, a.adventurer],
                worksForBrothel: true,
            },
            {
                name: 'her cursed, golden necklace',
                misfits: [a.wealthy, a.rich],
                powerFits: [a.desert, a.prostitute, a.tiefling],
                worksForBrothel: true,
                worksForAssasines: true,
            },
            {
                name: 'her cursed, but masterful sword',
                misfits: [a.wealthy],
                powerFits: [a.soldier, a.tiefling, a.drow, a.adventurer],
                worksForAssasines: true,
            },
            {
                name: 'her silver mine',
                misfits: [a.poor, a.modest],
                needsOne: [a.city, a.mountain, a.dwarf],
                powerFits: [a.rich, a.wealthy],
                worksForBrothel: true,
            },
            {
                name: 'her breathtaking, but haunted painting',
                needsOne: [a.rich, a.wealthy],
                misfits: [a.village],
                worksForThiefs: true,
            },
            {
                name: 'her old carriage',
                misfits: [a.rich, a.wealthy],
                powerFits: [a.poor, a.modest, a.village, a.city],
                worksForAssasines: true,
            },
            {
                name: 'her cursed ship',
                needs: [a.haven],
                worksForThiefs: true,
            },
            {
                name: 'her house in the woods',
                misfits: [a.rich, a.wealthy],
                needs: [a.forest],
                powerFits: [a.druid],
            },
            {
                name: 'her house in the city',
                misfits: [a.rich, a.wealthy],
                needs: [a.city],
                powerFits: [a.modest],
            },
            {
                name: 'her luxury mansion',
                needs: [a.city],
                needsOne: [a.wealthy, a.rich],
                worksForBrothel: true,
            },
            {
                name: 'her tower in the woods',
                misfits: [a.rich, a.wealthy],
                needs: [a.forest],
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
];
