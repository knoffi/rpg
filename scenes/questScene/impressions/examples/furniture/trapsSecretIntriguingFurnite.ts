import { association } from '../../../../../classes/association';
import { AssetKey } from '../../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../../classes/idea/Noticable';

const a = association;
export const trapsIntriguingShockingFurniture = [
    new ImpressionIdea(
        {
            name: 'Exclusive VIP-lounge',
            needsOne: [a.wealthy, a.rich, a.thief, a.prostitute, a.assasine],
            worksForAllCriminals: true,
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Sealed trapdoor under a table',
            needsOne: [
                a.thief,
                a.adventurer,
                a.forest,
                a.city,
                a.haven,
                a.assasine,
            ],
            misfits: [a.rich, a.wealthy],
            worksForAllCriminals: true,
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A wanted poster with your face on it',
            needsOne: [a.knight, a.adventurer, a.assasine],
            misfits: [a.rich],
            worksForAssasines: true,
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'A painting of your face on wall',
            needsOne: [a.rich, a.wealthy, a.cleric, a.knight],
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Giant mirror on wall',
            needs: [a.rich, a.wealthy],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Two-way mirror on wall',
            needsOne: [a.modest, a.wealthy, a.thief, a.prostitute, a.assasine],
            worksForAllCriminals: true,
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'One wall was newly painted',
            needs: [a.poor],
            worksForAllCriminals: true,
            key: AssetKey.plotTwist,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
];
