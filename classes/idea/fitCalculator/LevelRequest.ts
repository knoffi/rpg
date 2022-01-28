import { AssetKey } from '../AssetKey/AssetKey';
import { Idea } from '../Idea';
import { Pattern } from '../Patterns/Pattern';
import { StructuredTavernFits } from '../StructuredTavernFits';

export type LevelRequest<Type extends Idea> = {
    ideas: Type[];
    tavernFits: StructuredTavernFits;
    isExcludedByName: (name: string) => boolean;
    mainIsExcludedByKey: (key: AssetKey) => boolean;
    additionIsExcludedByKey: (key: AssetKey) => boolean;
    patterns: Pattern[];
    isUnwanted: (name: string) => boolean;
    isUnpleasant: (name: string) => boolean;
    mainFilter?: number;
    additionFilter?: number;
};
