import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';

const a = association;
export const adventurers: DescriptionAsset[] = [
    {
        name: 'Druid',
    },
    {
        name: 'Sorcerer',
    },
    {
        name: 'Sorceress',
    },
    {
        name: 'Wizard',
    },
    {
        name: 'Warlock',
    },
    {
        name: 'Ranger',
    },
    {
        name: 'Desert Ranger',
    },
    {
        name: 'Jungle Ranger',
    },
    {
        name: 'Paladin',
    },
    {
        name: 'Knight',
    },
    {
        name: 'Cleric',
    },
    {
        name: 'Warrior',
    },
    {
        name: 'Fighter',
    },
    {
        name: 'Monk',
    },
    {
        name: 'Rogue',
    },
    {
        name: 'Bard',
    },
    {
        name: 'Swashbuckler',
    },
    {
        name: 'Sailor',
    },
    {
        name: 'Pirate',
    },
    {
        name: 'Traveller',
    },
    {
        name: 'Adventurer',
    },
    {
        name: 'Swashbuckler',
        needs: [a.haven],
        needsOne: [a.bard, a.thief, a.adventurer],
        worksForThiefs: true,
    },
    {
        name: 'Sailor',
        needs: [a.haven],
        worksForThiefs: true,
    },
    {
        name: 'Smuggler',
        needs: [a.haven, a.thief],
        worksForThiefs: true,
    },
    {
        name: 'Pirate',
        needs: [a.haven, a.thief],
        worksForThiefs: true,
    },
    {
        name: 'Marauder',
        needs: [a.haven, a.thief],
        worksForThiefs: true,
    },
    {
        name: 'Marauder',
        needs: [a.barbarian],
        worksForThiefs: true,
    },
    {
        name: 'Buccaneer',
        needs: [a.haven, a.thief],
        worksForThiefs: true,
    },
    {
        name: 'Corsair',
        needs: [a.haven, a.thief],
        worksForThiefs: true,
    },
    {
        name: 'Privateer',
        needs: [a.haven, a.thief],
        worksForThiefs: true,
    },
    {
        name: 'Sea Wolf',
        needs: [a.haven, a.thief],
        worksForThiefs: true,
    },
    {
        name: 'Fencer',
        needsOne: [a.bard, a.adventurer],
        powerFits: [a.elf, a.haven],
    },
    {
        name: 'Fencer',
        needs: [a.thief, a.haven],
    },
    {
        name: 'Strangler',
        needsOne: [a.thief],
        worksForThiefs: true,
        misfits: [a.haven],
    },
    {
        name: 'Assasine',
        needsOne: [a.thief],
        worksForThiefs: true,
        misfits: [a.haven],
    },
    {
        name: 'Rogue',
        needsOne: [a.thief, a.adventurer],
        worksForThiefs: true,
        misfits: [a.haven],
    },
    {
        name: 'Trickster',
        needsOne: [a.thief, a.bard],
        worksForThiefs: true,
        misfits: [a.haven],
    },
    {
        name: 'Scout',
        needsOne: [a.barbarian, a.thief, a.elf],
        worksForThiefs: true,
        powerFits: [a.mountain, a.forest],
        misfits: [a.haven],
    },
];
