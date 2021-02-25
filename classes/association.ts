export enum association {
    empty = '',
    rich = 'vastly rich',
    poor = 'poor',
    worker = 'modest',
    nobel = 'knight',
    criminal = 'thief',
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
    dragonborn = 'soldier',
    human = 'human',
    underdark = 'underdark',
    forest = 'forest',
    desert = 'desert',
    haven = 'haven',
    tropical = 'tropical',
    mountain = 'mountain',
    city = 'city',
    village = 'village',
    sophisticated = 'wealthy',
    evil = 'assasine',
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
export const incomeAssociations = [
    association.poor,
    association.worker,
    association.sophisticated,
    association.rich,
];
export const specialAssociations = [
    association.prostitute,
    association.evil,
    association.criminal,
];
export const isLandAssociation = (association: association) => {
    return landAssociations.includes(association);
};
export const isIncomeAssociation = (association: association) => {
    return incomeAssociations.includes(association);
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
