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
    assasine = 'assasine',
}
export const allAssociations = Object.values(association);
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

export const nonEuropeanEnvironment = [
    association.underdark,
    association.tropical,
    association.desert,
    association.haven,
];

export const europeanEnvironment = [
    association.village,
    association.city,
    association.mountain,
    association.forest,
];

export const upperClass = [
    association.knight,
    association.rich,
    association.wealthy,
];
export const lowerClass = [
    association.modest,
    association.poor,
    association.thief,
];
export const shadyGroup = [
    association.assasine,
    association.prostitute,
    association.thief,
    association.drow,
    association.tiefling,
];
export const criminalClass = [
    association.thief,
    association.assasine,
    association.thief,
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
