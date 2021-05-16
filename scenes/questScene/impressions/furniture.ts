import { association } from '../../../classes/association';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';
const a = association;
export const furnitures: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Wooden tables in bad shape',
            needs: [a.poor],
        },
        [{ name: '' }],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Sturdy tables made from oaken wood',
            incomeRange: [a.modest],
        },
        [{ name: '' }],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Mahagony tables, polished and clean',
            needs: [a.wealthy],
        },
        [{ name: '' }],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Marmor tables with silver plates',
            needs: [a.rich],
        },
        [{ name: '' }],
        Noticable.furniture
    ),
];
