import { association } from '../../../../classes/association';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';

const a = association;
export const bartenderPast: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'Was once ' },
        [
            { name: 'a well-known captain' },
            { name: 'a well-known sailor' },
            { name: 'a sword fighter' },
            { name: 'a prostitute' },
            { name: 'a bandit leader' },
            { name: 'a notorious thief' },
            { name: 'a wanted smuggler' },
            { name: 'a bounty hunter' },
            { name: 'a fierce crusader' },
            { name: 'a professional assasine' },
            { name: 'a royal knight' },
            { name: "a commander of the king's army" },
            { name: 'a soldier of the vanguard' },
            { name: 'an abstinent monk' },
            { name: 'a well-known cleric' },
            { name: 'a vampire hunter' },
            { name: 'a ranger of this forest' },
            { name: 'a ranger of these mountains' },
            { name: 'a member of the city council' },
            { name: 'an important politician' },
            { name: 'a gold miner' },
            { name: 'a silver miner' },
            { name: 'a copper miner' },
            { name: 'a diamond miner' },
            { name: 'a coal miner' },
            { name: 'a tomb raider' },
            { name: 'a tomb explorer' },
            { name: 'a dungeon explorer' },
            { name: 'chief of the city guard' },
            { name: 'a slave trader' },
            { name: 'a caravan guide' },
            { name: 'a well-known gladiator' },
            { name: 'a monster hunter' },
            { name: 'a teacher at a wizard school' },
            { name: 'a well-known potion brewer' },
            { name: 'a well-known bard' },
            { name: 'a well-known stage actor' },
            { name: 'a well-known adventurer' },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
];
