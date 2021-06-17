import { association } from '../../../classes/association';
import { NounIdea } from '../../../classes/NounIdea';
const a = association;

export const weapons: NounIdea[] = [
    { name: 'Saber', needs: [a.haven] },
    {
        name: 'Arrow',
        needsOne: [a.assasine, a.drow, a.thief, a.soldier, a.elf],
        misfits: [a.haven],
    },
    {
        name: 'Dagger',
        needsOne: [a.assasine, a.drow, a.thief, a.wizard],
        worksForAssasines: true,
        worksForThiefs: true,
    },
    {
        name: 'Claymore',
        classRange: [a.barbarian, a.knight, a.soldier],
        misfits: [a.desert, a.haven, a.tropical, a.elf, a.drow],
    },
    {
        name: 'Trident',
        needs: [a.haven],
        classRange: [a.knight, a.soldier, a.cleric],
    },
    {
        name: 'Scimitar',
        needs: [a.desert],
        classRange: [a.soldier, a.bard, a.druid],
        misfits: [a.rich, a.dwarf],
        worksForThiefs: true,
        worksForAssasines: true,
    },
    {
        name: 'Lance',
        needs: [a.knight, a.cleric],
        misfits: [
            a.desert,
            a.tropical,
            a.rich,
            a.haven,
            a.dwarf,
            a.gnome,
            a.halfling,
        ],
    },
    {
        name: 'Chakram',
        needs: [a.desert],
        classRange: [a.bard, a.druid, a.soldier],
        misfits: [a.dwarf],
        worksForAssasines: true,
        worksForThiefs: true,
    },
    {
        name: 'Longbow',
        classRange: [a.soldier, a.knight],
        misfits: [a.rich, a.haven, a.dwarf, a.halfling, a.gnome],
        worksForAssasines: true,
    },
    {
        name: 'Shield',
        classRange: [a.soldier, a.knight],
    },
    {
        name: 'Crossbow',
        classRange: [a.knight, a.knight],
        misfits: [a.rich, a.haven, a.elf, a.drow],
        worksForAssasines: true,
    },
    {
        name: 'Mace',
        classRange: [a.cleric, a.knight],
        misfits: [a.haven, a.rich],
    },
    {
        name: 'Greataxe',
        needsOne: [a.barbarian, a.knight],
        misfits: [a.rich, a.haven, a.elf, a.drow],
    },
    {
        name: 'Warhammer',
        misfits: [a.haven, a.elf, a.drow],
        classRange: [a.knight, a.soldier, a.cleric, a.barbarian],
    },
    {
        name: 'Longsword',
        misfits: [a.haven, a.desert, a.tropical, a.dwarf],
        classRange: [a.knight, a.soldier, a.barbarian],
    },
    {
        name: 'Flail',
        misfits: [a.haven, a.desert, a.tropical, a.elf, a.drow],
        needsOne: [a.knight, a.cleric],
    },
    {
        name: 'Shortsword',
        misfits: [a.haven, a.rich, a.dwarf],
        classRange: [a.soldier, a.bard],
        worksForThiefs: true,
        worksForAssasines: true,
    },
    {
        name: 'Halberd',
        misfits: [a.haven, a.elf, a.halfling, a.gnome, a.drow, a.desert],
        classRange: [a.knight, a.soldier, a.barbarian],
    },
    {
        name: 'Harpune',
        needs: [a.haven],
        classRange: [a.knight, a.soldier, a.bard, a.barbarian],
        worksForAssasines: true,
    },
];
