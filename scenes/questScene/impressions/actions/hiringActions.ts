import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
const a = association;
export const magicalQuests: DescriptionAsset[] = [
    {
        name: 'hiring adventurers to find a rare plant from a dangerous dungeons',
    },
    {
        name: 'hiring adventurers to find a rare mushroom from a deep caves',
    },
    {
        name: 'hiring adventurers to find the tongue of a beast from the local deep woods',
        landRange: [a.village, a.forest, a.city],
    },
    {
        name: 'looking for adventurers to find a pearl of an oyster from deep underwater',
        landRange: [a.haven],
    },
];
export const historyQuests: DescriptionAsset[] = [];
