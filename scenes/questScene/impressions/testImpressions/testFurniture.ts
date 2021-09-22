import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';

const a = association;
export const keyTestFurnitures: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Brown tables',
            key: AssetKey.FURNITURE_tables,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Black tables and clean plates',
            key: AssetKey.FURNITURE_tables,
            keys: [AssetKey.FURNITURE_tables, AssetKey.FURNITURE_cutleryPlates],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Green tables and clean plates',
            key: AssetKey.FURNITURE_tables,
            keys: [AssetKey.FURNITURE_cutleryPlates],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Beautiful Cutlery',
            key: AssetKey.FURNITURE_cutleryPlates,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Mysterious stone figure at bar',
            key: AssetKey.FURNITURE_barDeco,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Funny wood figure at bar',
            key: AssetKey.FURNITURE_barDeco,
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Expensive gold figure at bar',
            keys: [AssetKey.FURNITURE_barDeco],
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
    new ImpressionIdea(
        {
            name: 'Random stuff everywhere',
        },
        [emptyDescriptionAsset],
        Noticable.furniture
    ),
];
