import { association } from '../../../classes/association';
import { emptyDescriptionAsset } from '../../../classes/DescriptionAsset';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';
const a = association;
export const furnitures: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Wooden tables in bad shape',
            needs: [a.poor],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Sturdy tables made from oaken wood',
            incomeRange: [a.modest],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Mahagony tables, polished and clean',
            needs: [a.wealthy],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Marmor tables with silver plates',
            needs: [a.rich],
            worksForAllCriminals: true,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
];
