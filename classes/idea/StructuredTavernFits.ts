import {
    association,
    isClassAssociation,
    isIncomeAssociation,
    isLandAssociation,
    isRaceAssociation,
    isSpecialAssociation,
} from '../association';

export type StructuredTavernFits = {
    income?: association;
    land?: association;
    race?: association;
    class?: association;
    special?: association;
    powerFit?: association;
};

export const getStructuredFits = (
    fits: association[],
    powerFit?: association
) => {
    const income = fits.find((fit) => isIncomeAssociation(fit));
    const special = fits.find((fit) => isSpecialAssociation(fit));
    const land = fits.find((fit) => isLandAssociation(fit));
    const profession = fits.find((fit) => isClassAssociation(fit));
    const race = fits.find((fit) => isRaceAssociation(fit));
    const powerFitting = powerFit
        ? { powerFit: powerFit }
        : fits.length === 1
        ? { powerFit: fits[0] }
        : {};
    const structuredFits: StructuredTavernFits = {
        income: income,
        class: profession,
        race: race,
        land: land,
        special: special,
        ...powerFitting,
    };
    return structuredFits;
};
