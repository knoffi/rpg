import { association } from '../../../classes/association';
import { emptyDescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../classes/idea/Noticable';
const a = association;

export const stuffedAnimals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Stuffed owlbear in corner',
            landRange: [a.village, a.forest],
            misfits: [a.poor],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed dire wolf in corner',
            landRange: [a.village, a.forest],
            misfits: [a.poor],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed bloodhound in corner',
            landRange: [a.city, a.village],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed horse in corner',
            needs: [a.knight],
            misfits: [a.poor],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed troll in corner',
            needs: [a.adventurer, a.soldier],
            misfits: [a.poor],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed bulldog in corner',
            landRange: [a.city, a.village],
            worksForThiefs: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed lion in corner',
            landRange: [a.mountain, a.desert],
            misfits: [a.poor],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed hyena in corner',
            needs: [a.desert],
            misfits: [a.poor],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed manticore in corner',
            landRange: [a.haven, a.mountain, a.desert],
            misfits: [a.poor],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed shark in corner',
            needsOne: [a.haven, a.tropical],
            misfits: [a.poor],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Stuffed gorilla in corner',
            landRange: [a.tropical],
            misfits: [a.poor],
            worksForAssasines: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
];
