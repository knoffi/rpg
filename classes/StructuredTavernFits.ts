import {
    association,
    isClassAssociation,
    isIncomeAssociation,
    isLandAssociation,
    isRaceAssociation,
    isSpecialAssociation,
} from './association';

export type StructuredTavernFits = {
    income?: association;
    land?: association;
    race?: association;
    class?: association;
    special?: association;
};

export const getStructuredFits = (fits: association[]) => {
    const income = fits.find((fit) => isIncomeAssociation(fit));
    const special = fits.find((fit) => isSpecialAssociation(fit));
    const land = fits.find((fit) => isLandAssociation(fit));
    const profession = fits.find((fit) => isClassAssociation(fit));
    const race = fits.find((fit) => isRaceAssociation(fit));
    const structuredFits: StructuredTavernFits = {
        income: income,
        class: profession,
        race: race,
        land: land,
        special: special,
    };
    return structuredFits;
};
