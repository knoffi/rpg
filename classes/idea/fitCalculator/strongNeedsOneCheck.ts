import {
    association,
    isClassAssociation,
    isIncomeAssociation,
    isLandAssociation,
    isRaceAssociation,
    isSpecialAssociation,
} from '../../association';
import { StructuredTavernFits } from '../StructuredTavernFits';

export const strongNeedsOneCheck = (
    tavernFits: association[],
    structuredFits: StructuredTavernFits,
    strongNeedsOne?: association[]
) => {
    if (!strongNeedsOne) {
        return true;
    }
    const needsOneCondition = strongNeedsOne.some((need) =>
        tavernFits.includes(need)
    );
    const impliedRangeCondition = strongNeedsOne.every((need) => {
        if (isRaceAssociation(need) && structuredFits.race) {
            return structuredFits.race === need;
        }
        if (isClassAssociation(need) && structuredFits.class) {
            return structuredFits.class === need;
        }
        if (isIncomeAssociation(need) && structuredFits.income) {
            return structuredFits.income === need;
        }
        if (isLandAssociation(need) && structuredFits.land) {
            return structuredFits.land === need;
        }
        if (isSpecialAssociation(need) && structuredFits.special) {
            return structuredFits.special === need;
        }
        return true;
    });
    return needsOneCondition && impliedRangeCondition;
};
