export enum association {
    empty = '',
    rich = 'vastly rich',
    poor = 'poor',
    modest = 'modest',
    knight = 'knight',
    thief = 'thief',
    adventurer = 'traveler',
    wizard = 'wizard',
    bard = 'bard',
    barbarian = 'wildling',
    cleric = 'cleric',
    druid = 'druid',
    prostitute = 'brothel',
    dwarf = 'dwarf',
    elf = 'elf',
    halfling = 'halfling',
    gnome = 'gnome',
    tiefling = 'tiefling',
    drow = 'drow',
    soldier = 'soldier',
    human = 'human',
    underdark = 'underdark',
    forest = 'forest',
    desert = 'desert',
    haven = 'haven',
    tropical = 'tropical',
    mountain = 'mountain',
    city = 'city',
    village = 'village',
    wealthy = 'wealthy',
    assasine = 'bounty hunter',
}
export enum AssociationTypes {
    land = 'land',
    class = 'class',
    race = 'race',
    income = 'income',
    special = 'special',
}

export const getAssociationsOfType = (type: AssociationTypes) => {
    switch (type) {
        case AssociationTypes.class:
            return classAssociations;
        case AssociationTypes.land:
            return landAssociations;
        case AssociationTypes.income:
            return incomeAssociations;
        case AssociationTypes.race:
            return raceAssociations;
        case AssociationTypes.special:
            return specialAssociations;

        default:
            console.log('Could not find associations of that type.');
            return specialAssociations;
    }
};
export const landAssociations = [
    association.city,
    association.village,
    association.mountain,
    association.forest,
    association.underdark,
    association.haven,
    association.desert,
    association.tropical,
];
export const classAssociations = [
    association.cleric,
    association.adventurer,
    association.barbarian,
    association.bard,
    association.soldier,
    association.druid,
    association.knight,
    association.wizard,
];
export const raceAssociations = [
    association.drow,
    association.dwarf,
    association.elf,
    association.gnome,
    association.halfling,
    association.human,
    association.tiefling,
];
export const incomeAssociations = [
    association.poor,
    association.modest,
    association.wealthy,
    association.rich,
];
export const specialAssociations = [
    association.prostitute,
    association.assasine,
    association.thief,
];
export const isLandAssociation = (association: association) => {
    return landAssociations.includes(association);
};
export const isIncomeAssociation = (association: association) => {
    return incomeAssociations.includes(association);
};
export const isClassAssociation = (association: association) => {
    return classAssociations.includes(association);
};
export const isRaceAssociation = (association: association) => {
    return raceAssociations.includes(association);
};
export const isSpecialAssociation = (association: association) => {
    return specialAssociations.includes(association);
};
export const landChosen = (fits: association[]) => {
    return fits.some((fit) => landAssociations.includes(fit));
};
export const incomeChosen = (fits: association[]) => {
    return fits.some((fit) => incomeAssociations.includes(fit));
};
export const specialsChosen = (fits: association[]) => {
    return fits.some((fit) => specialAssociations.includes(fit));
};
export const classChosen = (fits: association[]) => {
    return fits.some((fit) => classAssociations.includes(fit));
};
export const raceChosen = (fits: association[]) => {
    return fits.some((fit) => raceAssociations.includes(fit));
};

export const getCategoryOfAssociation = (fit?: association) => {
    if (!fit) {
        return undefined;
    } else {
        if (landAssociations.includes(fit)) {
            return AssociationTypes.land;
        }
        if (classAssociations.includes(fit)) {
            return AssociationTypes.class;
        }
        if (raceAssociations.includes(fit)) {
            return AssociationTypes.race;
        }
        if (incomeAssociations.includes(fit)) {
            return AssociationTypes.income;
        }
        return AssociationTypes.special;
    }
};
