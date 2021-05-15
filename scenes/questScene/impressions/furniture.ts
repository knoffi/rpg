import { association } from '../../../classes/association';
import { ImpressionIdea, Noticable } from '../../../classes/ImpressionIdea';
const a = association;
export const furnitures: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Wooden Tables in Bad Shape',
            needs: [a.poor],
        },
        [{ name: '' }],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Sturdy Tables made from Oaken Wood',
            incomeRange: [a.modest],
        },
        [{ name: '' }],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Mahagony Tables, polished and clean',
            needs: [a.wealthy],
        },
        [{ name: '' }],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Marmor Tables with Silver Plates',
            needs: [a.rich],
        },
        [{ name: '' }],
        Noticable.furniture
    ),
];
