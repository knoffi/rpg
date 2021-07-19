import { association } from '../../../classes/association';
import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../classes/idea/Noticable';
const a = association;
export const weirdBarDecorations: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'A big glass jar on the bar contains a beholder eye',
            needsOne: [a.wizard, a.underdark],
            landRange: [a.city, a.underdark, a.haven],
            misfits: [a.poor, a.rich],
            classRange: [a.adventurer, a.wizard],
            worksForAssasines: true,
            powerFits: [a.wizard, a.underdark, a.adventurer],
            key: AssetKey.FURNITUE_barDeco,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
];
