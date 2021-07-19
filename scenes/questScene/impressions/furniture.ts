import { association } from '../../../classes/association';
import { AssetKey } from '../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../classes/idea/Noticable';
const a = association;
export const furnitures: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Brown tables in bad shape',
            needs: [a.poor],
            worksForAllCriminals: true,
            powerFits: [a.poor],
            key: AssetKey.FURNITUE_tables,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Most of the tables are dirty, one is missing a leg',
            needs: [a.poor],
            worksForAllCriminals: true,
            powerFits: [a.poor],
            key: AssetKey.FURNITUE_tables,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Some of the tables have blade marks or holes',
            needs: [a.poor],
            worksForAllCriminals: true,
            powerFits: [a.poor],
            key: AssetKey.FURNITUE_tables,
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
            key: AssetKey.FURNITUE_tables,
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
            key: AssetKey.FURNITUE_tables,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Marmor tables with silken napkins on top',
            needs: [a.rich],
            worksForAllCriminals: true,
            powerFits: [a.rich],
            key: AssetKey.FURNITUE_tables,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Dark-brown, hand carved tables',
            incomeRange: [a.wealthy],
            worksForAllCriminals: true,
            powerFits: [a.wealthy],
            key: AssetKey.FURNITUE_tables,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Golden plates & copper cutlery',
            needs: [a.rich],
            worksForAllCriminals: true,
            powerFits: [a.rich],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Dishes are eaten from silver plates with inserted gems',
            needs: [a.rich],
            worksForAllCriminals: true,
            powerFits: [a.rich],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Dishes are eaten from polished silver plates',
            incomeRange: [a.rich, a.wealthy],
            worksForAllCriminals: true,
            powerFits: [a.rich],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Dishes are eaten from porcelain plates',
            needs: [a.wealthy],
            worksForAllCriminals: true,
            powerFits: [a.wealthy],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Food is eaten from ceramic plates',
            incomeRange: [a.modest, a.wealthy],
            worksForAllCriminals: true,
            powerFits: [a.wealthy],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Clay plates and wooden cutlery',
            incomeRange: [a.modest, a.poor],
            worksForAllCriminals: true,
            powerFits: [a.modest],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Ceramic plates & iron cutlery',
            incomeRange: [a.modest, a.wealthy],
            worksForAllCriminals: true,
            powerFits: [a.wealthy],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Ceramic plates & wooden cutlery',
            incomeRange: [a.modest],
            worksForAllCriminals: true,
            powerFits: [a.modest],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Silver plates & silver cutlery',
            needs: [a.rich],
            worksForAllCriminals: true,
            powerFits: [a.rich],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Every guest has to bring his own cutlery',
            incomeRange: [a.poor, a.modest],
            worksForAllCriminals: true,
            powerFits: [a.poor, a.modest],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Shiny, polished cutlery',
            incomeRange: [a.wealthy],
            worksForAllCriminals: true,
            powerFits: [a.wealthy],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Simple, wooden plates',
            incomeRange: [a.modest, a.poor],
            worksForAllCriminals: true,
            powerFits: [a.modest, a.poor],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Hard bread used as plates',
            incomeRange: [a.poor],
            worksForAllCriminals: true,
            powerFits: [a.poor],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Food is eaten from metal plates',
            incomeRange: [a.modest],
            worksForAllCriminals: true,
            powerFits: [a.modest],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Hand craved, wooden plates',
            incomeRange: [a.modest],
            worksForAllCriminals: true,
            powerFits: [a.modest],
            key: AssetKey.FURNITUE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Ornamented tables made from ivory',
            needs: [a.rich],
            worksForAllCriminals: true,
            powerFits: [a.rich],
            key: AssetKey.FURNITUE_tables,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Tiny mugs & tiny chairs',
            needsOne: [a.gnome, a.halfling],
            worksForAllCriminals: true,
            powerFits: [a.gnome, a.halfling],
            key: AssetKey.FURNITUE_drinkHolder,
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
