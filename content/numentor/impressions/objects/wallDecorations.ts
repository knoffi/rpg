import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
const a = association;

export const wallDecorations: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Collection of steering wheels on a wall',
            key: AssetKey.FURNITURE_wallOrCeiling,
            needs: [a.haven],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Collection of ship flags on a wall',
            key: AssetKey.FURNITURE_wallOrCeiling,
            needs: [a.haven],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Collection of old sabors on a wall',
            key: AssetKey.FURNITURE_wallOrCeiling,
            needs: [a.haven],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Collection of naval maps on a wall',
            key: AssetKey.FURNITURE_wallOrCeiling,
            needs: [a.haven],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'The figurehead of an old ship hangs on a wall',
            key: AssetKey.FURNITURE_wallOrCeiling,
            needs: [a.haven],
            misfits: [a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'The figurehead of a famous ship hangs on a wall',
            key: AssetKey.FURNITURE_wallOrCeiling,
            needs: [a.haven],
            powerFits: [a.haven, a.adventurer, a.bard],
            incomeRange: [a.wealthy, a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),

    new ImpressionIdea(
        {
            name: 'The sail of an old ship on the ceiling',
            key: AssetKey.FURNITURE_wallOrCeiling,
            needs: [a.haven],
            misfits: [a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'The sail of a famous ship on the ceiling',
            key: AssetKey.FURNITURE_wallOrCeiling,
            needs: [a.haven],
            powerFits: [a.haven, a.adventurer, a.bard],
            incomeRange: [a.wealthy, a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Ropes with various boating knots decorate the ceiling',
            key: AssetKey.FURNITURE_wallOrCeiling,
            needs: [a.haven],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
];
