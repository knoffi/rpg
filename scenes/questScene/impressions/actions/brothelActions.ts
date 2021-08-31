import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
const a = association;
export const brothelActions: DescriptionAsset[] = [
    {
        name: 'flirting with a prostitute',
        needs: [a.prostitute],
    },
    {
        name: 'badly flirting with a prostitute',
        needs: [a.prostitute],
    },
    {
        name: 'getting slapped by a prostitute',
        needs: [a.prostitute],
    },
];
