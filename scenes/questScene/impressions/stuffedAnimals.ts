import { association } from '../../../classes/association';
import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../classes/idea/Noticable';
const a = association;

export const stuffedAnimals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'A stuffed owlbear head hangs on the wall',
            landRange: [a.village, a.forest],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            powerFits: [a.adventurer, a.barbarian, a.forest],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed dire wolf head hangs on the wall',
            landRange: [a.village, a.forest],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            powerFits: [a.barbarian, a.forest, a.village],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed bloodhound stands next to the bar',
            landRange: [a.city, a.village],
            misfits: [a.druid],
            worksForThiefs: true,
            powerFits: [a.modest, a.city, a.village],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed stallion in a corner',
            needs: [a.knight],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            powerFits: [a.knight],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed, squidlike head with purple color hangs from the wall',
            needsOne: [a.wizard, a.underdark],
            landRange: [a.city, a.underdark],
            classRange: [a.adventurer, a.wizard],
            worksForAssasines: true,
            powerFits: [a.wizard, a.underdark, a.adventurer],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed dwarf head hangs on the wall',
            needs: [a.drow],
            landRange: [a.city, a.underdark],
            worksForAssasines: true,
            powerFits: [a.drow, a.underdark],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed elf head hangs on the wall',
            needs: [a.drow],
            landRange: [a.city, a.underdark],
            worksForAssasines: true,
            powerFits: [a.drow, a.underdark],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed troll head hangs on the wall',
            needs: [a.adventurer, a.soldier],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            powerFits: [a.mountain, a.adventurer],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed bulldog stands next to the bar',
            landRange: [a.city, a.village],
            misfits: [a.druid],
            worksForThiefs: true,
            powerFits: [a.modest, a.city, a.village],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed lion head hangs on the wall',
            landRange: [a.mountain, a.desert],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            powerFits: [a.rich, a.mountain, a.desert],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed elephant head hangs on the wall',
            landRange: [a.haven, a.desert],
            needsOne: [a.desert, a.rich],
            worksForAssasines: true,
            powerFits: [a.rich, a.desert],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A giant rhino horn hangs from the ceiling',
            landRange: [a.desert, a.haven],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            powerFits: [a.rich, a.desert],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed tiger head hangs on the wall',
            landRange: [a.tropical],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            powerFits: [a.rich, a.tropical],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed hyena head hangs on the wall',
            needs: [a.desert],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            powerFits: [a.desert],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed manticore head hangs on the wall',
            landRange: [a.haven, a.mountain, a.desert],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            powerFits: [a.adventurer, a.mountain],
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed shark head hangs on the wall',
            needsOne: [a.haven, a.tropical],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A stuffed gorilla head hangs on the wall',
            landRange: [a.tropical],
            misfits: [a.druid, a.poor],
            worksForAssasines: true,
            key: AssetKey.FURNITUE_creatureTrophies,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
];
