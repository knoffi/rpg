import {
    association,
    AssociationTypes,
    isClassAssociation,
    isIncomeAssociation,
    isLandAssociation,
    isRaceAssociation,
    isSpecialAssociation,
} from '../association';

export type StructuredTavernFits = {
    [AssociationTypes.income]?: association;
    [AssociationTypes.land]?: association;
    [AssociationTypes.race]?: association;
    [AssociationTypes.class]?: association;
    [AssociationTypes.special]?: association;
    powerFit?: association;
};
const myAssociation = association.empty;
const fitting: StructuredTavernFits = { class: association.empty };
export const getFitsFromStructure = (fitting: StructuredTavernFits) => {
    const fits = [
        fitting.class || association.empty,
        fitting.land || association.empty,
        fitting.race || association.empty,
        fitting.special || association.empty,
        fitting.income || association.empty,
    ];
    const nonEmptyFits = fits.filter(
        (fit) => fit !== association.empty
    ) as association[];
    return nonEmptyFits;
};

export const getFitFromStructure = (
    category: AssociationTypes,
    fits: StructuredTavernFits
) => {
    switch (category) {
        case AssociationTypes.class:
            return fits.class || association.empty;

        case AssociationTypes.race:
            return fits.race || association.empty;

        case AssociationTypes.income:
            return fits.income || association.empty;

        case AssociationTypes.special:
            return fits.special || association.empty;

        case AssociationTypes.land:
            return fits.land || association.empty;

        default:
            console.log('I am missing an association type here');
            break;
    }
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
