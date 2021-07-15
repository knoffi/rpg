import { association } from '../../../classes/association';
import { emptyDescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../classes/idea/Noticable';
const a = association;
export const furnitures: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Wooden tables in bad shape',
            needs: [a.poor],
            worksForAllCriminals: true,
            powerFits: [a.poor],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Sturdy tables made from oaken wood',
            incomeRange: [a.modest],
            worksForAllCriminals: true,
            powerFits: [a.modest],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Mahagony tables, polished and clean',
            incomeRange: [a.wealthy],
            worksForAllCriminals: true,
            powerFits: [a.wealthy],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Marmor tables with silver plates',
            needs: [a.rich],
            worksForAllCriminals: true,
            powerFits: [a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Marmor tables with golden plates',
            needs: [a.rich],
            worksForAllCriminals: true,
            powerFits: [a.rich],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Tiny mugs and tiny chairs',
            needsOne: [a.gnome, a.halfling],
            worksForAllCriminals: true,
            powerFits: [a.gnome, a.halfling],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Magical lights hover over each table',
            needsOne: [a.wizard],
            worksForAllCriminals: true,
            powerFits: [a.wizard],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
];
