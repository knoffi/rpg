import { association, landAssociations } from '../../../classes/association';
import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { ImpressionIdea } from '../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../classes/idea/Noticable';
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
                name: 'in an abandoned tower nearby',
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
];
