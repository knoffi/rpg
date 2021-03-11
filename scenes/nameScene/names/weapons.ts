import { association } from '../../../classes/association';
import { NounIdea } from '../../../classes/NounIdea';
const a = association;

export const weapons: NounIdea[] = [
    { name: 'Saber', needs: [a.haven] },
    {
        name: 'Arrow',
        needsOne: [a.evil, a.drow, a.criminal, a.dragonborn, a.elf],
        misfits: [a.haven],
    },
    {
        name: 'Dagger',
        needsOne: [a.evil, a.drow, a.criminal, a.wizard],
        worksForAssasines: true,
        worksForThiefs: true,
    },
    {
        name: 'Claymore',
        classRange: [a.barbarian, a.nobel, a.dragonborn],
        misfits: [a.desert, a.haven, a.tropical, a.elf, a.drow],
    },
    {
        name: 'Trident',
        needs: [a.haven],
        classRange: [a.nobel, a.dragonborn, a.cleric],
    },
    {
        name: 'Scimitar',
        needs: [a.desert],
        classRange: [a.dragonborn, a.bard, a.druid],
        misfits: [a.rich, a.dwarf],
        worksForThiefs: true,
        worksForAssasines: true,
    },
    {
        name: 'Lance',
        needs: [a.nobel, a.cleric],
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
        classRange: [a.bard, a.druid, a.dragonborn],
        misfits: [a.dwarf],
        worksForAssasines: true,
        worksForThiefs: true,
    },
    {
        name: 'Longbow',
        classRange: [a.dragonborn, a.nobel],
        misfits: [a.rich, a.haven, a.dwarf, a.halfling, a.gnome],
        worksForAssasines: true,
    },
    {
        name: 'Crossbow',
        classRange: [a.nobel, a.nobel],
        misfits: [a.rich, a.haven, a.elf, a.drow],
        worksForAssasines: true,
    },
    {
        name: 'Mace',
        classRange: [a.cleric, a.nobel],
        misfits: [a.haven, a.rich],
    },
    {
        name: 'Greataxe',
        needsOne: [a.barbarian, a.nobel],
        misfits: [a.rich, a.haven, a.elf, a.drow],
    },
    {
        name: 'Warhammer',
        misfits: [a.haven, a.elf, a.drow],
        classRange: [a.nobel, a.dragonborn, a.cleric, a.barbarian],
    },
    {
        name: 'Longsword',
        misfits: [a.haven, a.desert, a.tropical, a.dwarf],
        classRange: [a.nobel, a.dragonborn, a.barbarian],
    },
    {
        name: 'Flail',
        misfits: [a.haven, a.desert, a.tropical, a.elf, a.drow],
        needsOne: [a.nobel, a.cleric],
    },
    {
        name: 'Shortsword',
        misfits: [a.haven, a.rich, a.dwarf],
        classRange: [a.dragonborn, a.bard],
        worksForThiefs: true,
        worksForAssasines: true,
    },
    {
        name: 'Halberd',
        misfits: [a.haven, a.elf, a.halfling, a.gnome, a.drow],
        classRange: [a.nobel, a.dragonborn, a.barbarian],
    },
    {
        name: 'Harpune',
        needs: [a.haven],
        classRange: [a.nobel, a.dragonborn, a.bard, a.barbarian],
        worksForAssasines: true,
    },
];
