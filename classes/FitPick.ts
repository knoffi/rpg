import { AssociationTypes } from './association';
import { StructuredTavernFits } from './idea/StructuredTavernFits';

export type FitPick =
    | Partial<Pick<StructuredTavernFits, AssociationTypes.class>>
    | Partial<Pick<StructuredTavernFits, AssociationTypes.income>>
    | Partial<Pick<StructuredTavernFits, AssociationTypes.land>>
    | Partial<Pick<StructuredTavernFits, AssociationTypes.race>>
    | Partial<Pick<StructuredTavernFits, AssociationTypes.special>>;
