import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
const a = association;
export const hats: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Wears ',
            keys: [
                AssetKey.BARTENDER_accessoires,
                AssetKey.BARTENDER_appearace,
            ],
        },
        [
            {
                name: 'an expensive, fancy hat',
                incomeRange: [a.wealthy, a.rich],
                powerFits: [a.bard, a.rich],
            },
            {
                name: 'a cheap hat with holes',
                needs: [a.poor],
                // this needs a.poor, so a.poor is AUTOMATICALLY a power fit !
                //You can still define other power fits, but a.poor will also be a power fit.
            },
            {
                name: "a typical worker's hat",
                misfits: [a.rich, a.wealthy],
                classRange: [],
                // using   classRange:[]  makes this only available if NO adventurer class was chosen
            },
            {
                name: 'a typical pimp hat',
                needs: [a.prostitute],
                worksForBrothel: true,
            },
            {
                name: 'a pure-steel helmet',
                needsOne: [a.knight, a.soldier, a.adventurer],
                misfits: [a.desert, a.tropical],
                worksForAssasines: true,
            },
            {
                name: 'an eye-patch',
                classRange: [a.adventurer, a.soldier, a.barbarian],
                powerFits: [a.haven],
                worksForAllCriminals: true,
            },
        ],
        Noticable.bartender
    ),
];
