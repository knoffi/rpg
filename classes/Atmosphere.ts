import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { association } from './association';

export enum aspect {
    bartender = 'bartender',
    interior = 'interior',
    extras = 'atmosphere',
    averageCustomer = 'averageCustomers',
    someCustomers = 'someCustomers',
}

interface Description {
    association: association;
    name: string;
    unfitting?: association[];
    isPlural?: boolean;
}

const upperClass = [
    association.rich,
    association.sophisticated,
    association.nobel,
    association.elf,
    association.wizard,
];

const lowerClass = [
    association.poor,
    association.worker,
    association.dragonborn,
    association.barbarian,
];

const CHANCE_FOR_SPECIAL_TEXT = 0.1;
export class Impression {
    private fits: association[];
    constructor(fits: association[]) {
        this.fits = fits;
    }
    public getText(criterium: aspect) {
        switch (criterium) {
            case aspect.averageCustomer:
                return this.getAverageCustomerText();
            case aspect.someCustomers:
                return this.getIntriguingText();
            case aspect.interior:
                return this.getInteriorText();
            default:
                return this.getBartenderText();
        }
    }
    private getBartenderText() {
        const fittingApperances = this.filterDescriptions(bartenderAppearances);
        const fittingCharakter = this.filterDescriptions(bartenderCharacter);
        const appearance = getRandomArrayEntry(
            fittingApperances
        ) as Description;
        const emotion = getRandomArrayEntry(fittingCharakter) as Description;
        return appearance.name + ' & ' + emotion.name;
    }
    private getInteriorText() {
        const fittingFurnitures = this.filterDescriptions(furnitures);
        const fittingMoodSetters = this.filterDescriptions(moodSetting);
        const furniture = getRandomArrayEntry(fittingFurnitures) as Description;
        const moodSetter = getRandomArrayEntry(
            fittingMoodSetters
        ) as Description;
        return furniture.name + ' & ' + moodSetter.name;
    }
    private getAverageCustomerText() {
        const suitableCustomers = this.filterDescriptions(averageCustomer);
        const customers = getRandomArrayEntry(suitableCustomers) as Description;
        const otherCustomers = getRandomArrayEntry(
            suitableCustomers.filter(
                (customer) => customer.name !== customers.name
            )
        );
        return customers.name + ' & ' + otherCustomers.name;
    }
    private getIntriguingText() {
        if (Math.random() < CHANCE_FOR_SPECIAL_TEXT) {
            const suitableIntriguings = this.filterDescriptions(
                specialIntriguings
            );
            const intriguing = getRandomArrayEntry(
                suitableIntriguings
            ) as Description;
            return intriguing.name;
        }
        const suitableSingleDescriptions = this.filterDescriptions(somePeople);
        const suitableIndividuals = this.filterDescriptions(individuals);
        const customerDescription = getRandomArrayEntry(
            suitableSingleDescriptions
        ) as Description;
        const customer = getRandomArrayEntry(
            suitableIndividuals
        ) as Description;
        const verb = customer.isPlural ? ' are ' : ' is ';
        return customer.name + verb + customerDescription.name;
    }

    private filterDescriptions(descriptions: Description[]) {
        const notUnfittingWords = this.filterNotUnfitting(descriptions);
        const fittingWords = this.filterFitting(notUnfittingWords);
        return fittingWords;
    }
    private filterNotUnfitting(descriptions: Description[]) {
        return descriptions.filter(
            (description) =>
                !this.fits.some((fit) =>
                    (description.unfitting || []).includes(fit)
                )
        );
    }
    private filterFitting(notUnfittingWords: Description[]) {
        return notUnfittingWords.filter(
            (notUnfittingWord) =>
                notUnfittingWord.association === association.empty ||
                this.fits.includes(notUnfittingWord.association)
        );
    }
}

const a = association;
/* */
const bartenderAppearances = [
    { association: a.empty, name: 'Beardy' },
    { association: a.empty, name: 'Bold' },
    { association: a.empty, name: 'Thin' },
    { association: a.empty, name: 'Fat' },
    { association: a.empty, name: 'Big' },
    { association: a.empty, name: 'Strong' },
    { association: a.empty, name: 'Tired' },
    { association: a.empty, name: 'Small' },
    { association: a.empty, name: 'Handsome' },
    { association: a.empty, name: 'Muscled' },
    { association: a.empty, name: 'Weakly' },
    { association: a.empty, name: 'Sickly', unfitting: upperClass },
    { association: a.empty, name: 'Old' },
    { association: a.empty, name: 'Beautiful' },
    { association: a.empty, name: 'Ugly', unfitting: upperClass },
    { association: a.empty, name: 'Sturdy' },
    { association: a.empty, name: 'Cute' },
    { association: a.prostitute, name: 'Half-Naked' },
    { association: a.dwarf, name: 'Beardy' },
    { association: a.elf, name: 'Silver Hair' },
    { association: a.gnome, name: 'Tiny' },
    { association: a.halfling, name: 'Smiling' },
    { association: a.empty, name: 'Grey-Haired' },
    { association: a.barbarian, name: 'Scared' },
    { association: a.criminal, name: 'Bruises' },
    { association: a.adventurer, name: 'One-Eyed' },
    { association: a.haven, name: 'One-Eyed' },
    { association: a.dragonborn, name: 'One-Eared' },
    { association: a.haven, name: 'One-Legged' },
    { association: a.haven, name: 'Mustache' },
    { association: a.nobel, name: 'One-Armed' },
    { association: a.cleric, name: 'Golden Hair' },
    { association: a.tropical, name: 'Extremly Cheerfull' },
    { association: a.tropical, name: 'Monkey Pet' },
    { association: a.desert, name: 'Turban' },
    { association: a.desert, name: 'Black Talisman' },
    { association: a.desert, name: 'Sweaty' },
    { association: a.mountain, name: 'Thick Beard' },
    { association: a.mountain, name: 'Old-Fashioned' },
    { association: a.village, name: 'Old-Fashioned' },
    { association: a.rich, name: 'Dapper', unfitting: lowerClass },
    { association: a.rich, name: 'Fancy', unfitting: lowerClass },
    { association: a.sophisticated, name: 'Elegant', unfitting: lowerClass },
    { association: a.elf, name: 'Elegant', unfitting: lowerClass },
    {
        association: a.sophisticated,
        name: 'Well-Dressed',
        unfitting: lowerClass,
    },
    { association: a.wizard, name: 'Well-Dressed', unfitting: lowerClass },
];
const bartenderCharacter = [
    { association: a.empty, name: 'Grumbling' },
    { association: a.empty, name: 'Warm-Hearted' },
    { association: a.empty, name: 'Unfriendly', unfitting: upperClass },
    { association: a.empty, name: 'Generous' },
    { association: a.empty, name: 'Honest' },
    { association: a.empty, name: 'Busy' },
    { association: a.empty, name: 'In Love' },
    { association: a.empty, name: 'Dreaming' },
    { association: a.empty, name: 'Lazy', unfitting: upperClass },
    { association: a.empty, name: 'Nostalgic' },

    { association: a.empty, name: 'Dumb' },
    { association: a.poor, name: 'Weak Minded' },
    { association: a.worker, name: 'Vulgar', unfitting: upperClass },
    { association: a.empty, name: 'Vulgar', unfitting: upperClass },

    { association: a.poor, name: 'Depressed', unfitting: upperClass },
    { association: a.rich, name: 'Gold Tooth' },
    { association: a.rich, name: 'Sophisticated', unfitting: lowerClass },
    { association: a.rich, name: 'Lofty', unfitting: lowerClass },
    { association: a.sophisticated, name: 'Organized' },
    { association: a.empty, name: 'Organized' },
    { association: a.worker, name: 'Hard-Working' },
    { association: a.nobel, name: 'Nobel', unfitting: lowerClass },
    { association: a.nobel, name: 'Brave' },
    { association: a.cleric, name: 'Enlightened' },
    { association: a.cleric, name: 'Kind' },
    { association: a.criminal, name: 'Shady' },
    { association: a.criminal, name: 'Dangerous' },
    { association: a.criminal, name: 'Parrot Pet' },
    { association: a.haven, name: 'Die-Hard' },
    { association: a.haven, name: 'Grimly' },
    { association: a.haven, name: 'Eye-Patch' },
    { association: a.city, name: 'Greedy' },
    { association: a.city, name: 'Chaotic' },
    { association: a.village, name: 'Kind' },
    { association: a.village, name: 'Tipsy' },
    { association: a.village, name: 'Mistrusting' },
    { association: a.tropical, name: 'Coconut Bra' },
    { association: a.mountain, name: 'Crude Humor' },
    { association: a.mountain, name: 'Clumsy' },
    { association: a.underdark, name: 'Mistrusting' },
    { association: a.underdark, name: 'Closed-Mouthed' },
    { association: a.underdark, name: 'Macabre' },
    { association: a.cleric, name: 'Wise' },
    { association: a.cleric, name: 'Forgiving' },
    { association: a.wizard, name: 'Wise' },
    { association: a.wizard, name: 'Daydreaming' },
    { association: a.wizard, name: 'Deep-Minded' },
    { association: a.barbarian, name: 'Ferocious' },
    { association: a.barbarian, name: 'Fierce' },
    { association: a.dragonborn, name: 'Fierce' },
    { association: a.dragonborn, name: 'Crude Humor' },
    { association: a.adventurer, name: 'Story-Loving' },
];

const averageCustomer = [
    { association: a.empty, name: 'Joyful' },
    { association: a.empty, name: 'Cheerful' },
    { association: a.tropical, name: 'Cheerful' },
    { association: a.empty, name: 'Having Fun' },
    { association: a.empty, name: 'Celebrating' },
    { association: a.empty, name: 'Lively' },
    { association: a.empty, name: 'Frisky' },
    { association: a.empty, name: 'Drunk', unfitting: upperClass },
    { association: a.empty, name: 'Tipsy' },
    { association: a.empty, name: 'Pretty Drunk', unfitting: upperClass },
    { association: a.cleric, name: 'Occult' },
    { association: a.evil, name: 'Dangerous' },
    { association: a.evil, name: 'Quiet' },
    { association: a.underdark, name: 'Quiet' },
    { association: a.criminal, name: 'Shady' },
    { association: a.criminal, name: 'Silent' },
    { association: a.prostitute, name: 'Frisky' },
    { association: a.desert, name: 'Exhausted' },
    { association: a.mountain, name: 'Exhausted' },
    { association: a.forest, name: 'Exhausted' },
    { association: a.desert, name: 'Sweaty' },
];

const somePeople = [
    { association: a.criminal, name: 'Whispering' },
    { association: a.barbarian, name: 'Fighting' },
    { association: a.barbarian, name: 'Bragging' },
    { association: a.bard, name: 'Bragging' },
    { association: a.adventurer, name: 'Bragging' },
    { association: a.dragonborn, name: 'Bragging' },
    { association: a.dwarf, name: 'Totally Drunk' },
    { association: a.halfling, name: 'Totally Drunk' },
    { association: a.empty, name: 'Dancing' },
    { association: a.prostitute, name: 'Dancing' },
    { association: a.bard, name: 'Dancing' },
    { association: a.elf, name: 'Dancing' },
    { association: a.empty, name: 'Flirting' },
    { association: a.prostitute, name: 'Flirting' },
    { association: a.empty, name: 'Posing' },
    { association: a.prostitute, name: 'Posing' },
    { association: a.bard, name: 'Posing' },
    { association: a.empty, name: 'Story Telling' },
    { association: a.bard, name: 'Story Telling' },
    { association: a.wizard, name: 'Story Telling' },
    { association: a.adventurer, name: 'Story Telling' },
    { association: a.empty, name: 'Grumbling' },
    { association: a.empty, name: 'Smoking' },
    { association: a.empty, name: 'Betting' },
    { association: a.criminal, name: 'Grumbling' },
    { association: a.criminal, name: 'Smoking' },
    { association: a.criminal, name: 'Betting' },
    { association: a.wizard, name: 'Reading' },
    { association: a.cleric, name: 'Reading' },
    { association: a.empty, name: 'Writing' },
    { association: a.empty, name: 'Singing' },
    { association: a.bard, name: 'Singing' },
    { association: a.druid, name: 'Smoking a Pipe' },
    { association: a.forest, name: 'Smoking a Pipe' },
    { association: a.empty, name: 'Smoking a Pipe' },
    { association: a.desert, name: 'Smoking a Shisa' },
    { association: a.empty, name: 'Disgusted', unfitting: upperClass },
    { association: a.empty, name: 'Searching' },
    { association: a.empty, name: 'Spying' },
    { association: a.evil, name: 'Spying' },
    { association: a.empty, name: 'Spying' },
    { association: a.drow, name: 'Spying' },
    { association: a.barbarian, name: 'Shouting' },
    { association: a.poor, name: 'Babbling' },
    { association: a.empty, name: 'Babbling', unfitting: upperClass },
    { association: a.halfling, name: 'Stumbling' },
    { association: a.halfling, name: 'Unconscious' },
    { association: a.poor, name: 'Unconscious' },
    { association: a.poor, name: 'Stumbling' },
    { association: a.dwarf, name: 'Slurring' },
    { association: a.poor, name: 'Slurring' },
    { association: a.worker, name: 'Slurring' },
    { association: a.desert, name: 'Bargaining', unfitting: [a.rich] },
    { association: a.gnome, name: 'Bargaining', unfitting: [a.rich] },
];

const individuals = [
    { association: a.rich, name: 'A Prince', unfitting: lowerClass },
    { association: a.rich, name: 'A Princess', unfitting: lowerClass },
    { association: a.rich, name: 'A rich Merchant', unfitting: lowerClass },
    {
        association: a.rich,
        name: 'A Merchant with a Gold tooth',
        unfitting: lowerClass,
    },
    { association: a.rich, name: 'A well-known Lord', unfitting: lowerClass },
    {
        association: a.sophisticated,
        name: 'A Guild Master',
        unfitting: lowerClass,
    },
    { association: a.sophisticated, name: 'A Baron', unfitting: lowerClass },
    { association: a.sophisticated, name: 'A Baroness', unfitting: lowerClass },
    { association: a.rich, name: 'A Foreign Prince', unfitting: lowerClass },
    { association: a.rich, name: 'A Foreign Princess', unfitting: lowerClass },
    { association: a.empty, name: 'A Soldier', unfitting: upperClass },
    { association: a.human, name: 'A Soldier', unfitting: upperClass },
    { association: a.dragonborn, name: 'A Soldier', unfitting: upperClass },
    { association: a.empty, name: 'Some Soldiers', isPlural: true },
    { association: a.human, name: 'Some Soldiers', isPlural: true },
    { association: a.adventurer, name: 'Some Soldiers', isPlural: true },
    { association: a.empty, name: 'An Archer', unfitting: upperClass },
    { association: a.human, name: 'An Archer', unfitting: upperClass },
    { association: a.dragonborn, name: 'An Archer', unfitting: upperClass },
    { association: a.empty, name: 'Some Archers', isPlural: true },
    { association: a.human, name: 'Some Archers', isPlural: true },
    { association: a.adventurer, name: 'Some Archers', isPlural: true },
    { association: a.empty, name: 'A Soldier', unfitting: upperClass },
    { association: a.human, name: 'A Soldier', unfitting: upperClass },
    { association: a.dragonborn, name: 'A Soldier', unfitting: upperClass },
    { association: a.empty, name: 'Some Soldiers', isPlural: true },
    { association: a.human, name: 'Some Soldiers', isPlural: true },
    { association: a.adventurer, name: 'Some Soldiers', isPlural: true },
    { association: a.empty, name: 'A Musician' },
    { association: a.elf, name: 'A Musician' },
    { association: a.bard, name: 'A Musician' },
    { association: a.village, name: 'A Musician' },
    { association: a.city, name: 'A Musician' },
    { association: a.empty, name: 'Some Musicians', isPlural: true },
    { association: a.elf, name: 'Some Musicians', isPlural: true },
    { association: a.halfling, name: 'Some Musicians', isPlural: true },
    { association: a.city, name: 'Some Musicians', isPlural: true },
    { association: a.village, name: 'Some Musicians', isPlural: true },
    { association: a.empty, name: 'A Bard' },
    { association: a.human, name: 'A Bard' },
    { association: a.elf, name: 'A Bard' },
    { association: a.bard, name: 'A Bard' },
    { association: a.adventurer, name: 'A Bard' },
    { association: a.empty, name: 'A Blacksmith', unfitting: upperClass },
    { association: a.city, name: 'A Blacksmith', unfitting: upperClass },
    { association: a.dwarf, name: 'A Blacksmith', unfitting: upperClass },
    { association: a.village, name: 'A Blacksmith', unfitting: upperClass },
    { association: a.mountain, name: 'A Blacksmith', unfitting: upperClass },
    { association: a.empty, name: 'A Cobbler', unfitting: upperClass },
    { association: a.city, name: 'A Cobbler', unfitting: upperClass },
    { association: a.village, name: 'A Cobbler', unfitting: upperClass },
    { association: a.halfling, name: 'A Cobbler', unfitting: upperClass },
    { association: a.empty, name: 'A Goldsmith', unfitting: lowerClass },
    { association: a.dwarf, name: 'A Goldsmith', unfitting: lowerClass },
    { association: a.mountain, name: 'A Goldsmith', unfitting: lowerClass },
    { association: a.rich, name: 'A Goldsmith', unfitting: lowerClass },
    { association: a.empty, name: 'A Silk Tailor', unfitting: lowerClass },
    { association: a.elf, name: 'A Silk Tailor', unfitting: lowerClass },
    { association: a.city, name: 'A Silk Tailor', unfitting: lowerClass },
    { association: a.rich, name: 'A Silk Tailor', unfitting: lowerClass },
    {
        association: a.sophisticated,
        name: 'A Silk Tailor',
        unfitting: lowerClass,
    },
    { association: a.empty, name: 'A Velvet Weaver', unfitting: lowerClass },
    { association: a.elf, name: 'A Velvet Weaver', unfitting: lowerClass },
    { association: a.city, name: 'A Velvet Weaver', unfitting: lowerClass },
    { association: a.rich, name: 'A Velvet Weaver', unfitting: lowerClass },
    {
        association: a.sophisticated,
        name: 'A Velvet Weaver',
        unfitting: lowerClass,
    },
    { association: a.empty, name: 'A Sculptor', unfitting: lowerClass },
    { association: a.dwarf, name: 'A Sculptor', unfitting: lowerClass },
    { association: a.gnome, name: 'A Sculptor', unfitting: lowerClass },
    { association: a.rich, name: 'A Sculptor', unfitting: lowerClass },
    { association: a.sophisticated, name: 'A Sculptor', unfitting: lowerClass },
    { association: a.gnome, name: 'A Sculptor', unfitting: lowerClass },
    { association: a.empty, name: 'A Stone Mason', unfitting: lowerClass },
    { association: a.dwarf, name: 'A Stone Mason', unfitting: lowerClass },
    {
        association: a.sophisticated,
        name: 'A Stone Mason',
        unfitting: lowerClass,
    },
    { association: a.underdark, name: 'A Stone Mason', unfitting: lowerClass },
    { association: a.city, name: 'A Stone Mason', unfitting: lowerClass },
    { association: a.mountain, name: 'A Stone Mason', unfitting: lowerClass },
    { association: a.human, name: 'A Stone Mason', unfitting: lowerClass },
    { association: a.empty, name: 'A Jeweler', unfitting: lowerClass },
    { association: a.elf, name: 'A Jeweler', unfitting: lowerClass },
    { association: a.gnome, name: 'A Jeweler', unfitting: lowerClass },
    { association: a.rich, name: 'A Jeweler', unfitting: lowerClass },
    { association: a.sophisticated, name: 'A Jeweler', unfitting: lowerClass },
    { association: a.mountain, name: 'A Jeweler', unfitting: lowerClass },
    { association: a.city, name: 'A Jeweler', unfitting: lowerClass },
    { association: a.empty, name: 'A Chancellor', unfitting: lowerClass },
    { association: a.human, name: 'A Chancellor', unfitting: lowerClass },
    { association: a.city, name: 'A Chancellor', unfitting: lowerClass },
    { association: a.rich, name: 'A Chancellor', unfitting: lowerClass },
    {
        association: a.sophisticated,
        name: 'A Chancellor',
        unfitting: lowerClass,
    },
    { association: a.empty, name: 'A High Priest', unfitting: lowerClass },
    { association: a.cleric, name: 'A High Priest', unfitting: lowerClass },
    { association: a.city, name: 'A High Priest', unfitting: lowerClass },
    { association: a.haven, name: 'A High Priest', unfitting: lowerClass },
    { association: a.elf, name: 'A High Priest', unfitting: lowerClass },
    { association: a.human, name: 'A High Priest', unfitting: lowerClass },
    { association: a.cleric, name: 'A High Priest', unfitting: lowerClass },
    { association: a.rich, name: 'A High Priest', unfitting: lowerClass },
    {
        association: a.sophisticated,
        name: 'A High Priest',
        unfitting: lowerClass,
    },
    { association: a.empty, name: 'A Judge', unfitting: lowerClass },
    { association: a.city, name: 'A Judge', unfitting: lowerClass },
    { association: a.human, name: 'A Judge', unfitting: lowerClass },
    { association: a.sophisticated, name: 'A Judge', unfitting: lowerClass },
    { association: a.empty, name: 'A Bishop', unfitting: lowerClass },
    { association: a.sophisticated, name: 'A Bishop', unfitting: lowerClass },
    { association: a.cleric, name: 'A Bishop', unfitting: lowerClass },
    { association: a.city, name: 'A Bishop', unfitting: lowerClass },
    { association: a.empty, name: 'A Gladiator' },
    { association: a.desert, name: 'A Gladiator' },
    { association: a.human, name: 'A Gladiator' },
    { association: a.city, name: 'A Gladiator' },
    { association: a.empty, name: 'A Cleric' },
    { association: a.city, name: 'A Cleric' },
    { association: a.village, name: 'A Cleric' },
    { association: a.cleric, name: 'A Cleric' },
    { association: a.cleric, name: 'A Monk', unfitting: upperClass },
    { association: a.village, name: 'A Monk', unfitting: upperClass },
    { association: a.city, name: 'A Monk', unfitting: upperClass },
    { association: a.mountain, name: 'A Miner', unfitting: upperClass },
    { association: a.dwarf, name: 'A Miner', unfitting: upperClass },
    { association: a.underdark, name: 'A Miner', unfitting: upperClass },
    { association: a.dwarf, name: 'Two Miners', isPlural: true },
    { association: a.mountain, name: 'Two Miners', isPlural: true },
    { association: a.underdark, name: 'Two Miners', isPlural: true },
    { association: a.city, name: 'Two City Guards', isPlural: true },
    { association: a.haven, name: 'Two City Guards', isPlural: true },
    { association: a.empty, name: 'A Boy' },
    { association: a.village, name: 'A Boy' },
    { association: a.city, name: 'A Boy' },
    { association: a.empty, name: 'A Girl' },
    { association: a.village, name: 'A Girl' },
    { association: a.city, name: 'A Girl' },
    { association: a.forest, name: 'Hermit', unfitting: upperClass },
    { association: a.desert, name: 'Hermit', unfitting: upperClass },
    { association: a.druid, name: 'Hermit', unfitting: upperClass },
    { association: a.mountain, name: 'Hermit', unfitting: upperClass },
    { association: a.empty, name: 'A Wench' },
    { association: a.prostitute, name: 'A Wench', unfitting: upperClass },
    { association: a.village, name: 'A Wench', unfitting: upperClass },
    { association: a.city, name: 'A Wench', unfitting: upperClass },
    { association: a.haven, name: 'A Wench', unfitting: upperClass },
    { association: a.empty, name: 'A Cavalier' },
    { association: a.city, name: 'A Cavalier' },
    { association: a.nobel, name: 'A Cavalier' },
    { association: a.bard, name: 'A Cavalier' },
    { association: a.prostitute, name: 'A Harlot' },
    { association: a.haven, name: 'A Harlot' },
    { association: a.empty, name: 'A Pretty Waitress' },
    { association: a.prostitute, name: 'A Pretty Waitress' },
    { association: a.village, name: 'A Pretty Waitress' },
    { association: a.empty, name: 'A Handsome Waiter' },
    { association: a.prostitute, name: 'A Handsome Waiter' },
    { association: a.underdark, name: 'A Handsome Waiter' },
    { association: a.desert, name: 'A Handsome Waiter' },
    { association: a.empty, name: 'A Lumpy Busker', unfitting: upperClass },
    { association: a.city, name: 'A Lumpy Busker', unfitting: upperClass },
    { association: a.village, name: 'A Lumpy Busker', unfitting: upperClass },
    { association: a.empty, name: 'A Wizard' },
    { association: a.wizard, name: 'A Wizard' },
    { association: a.gnome, name: 'A Wizard' },
    { association: a.adventurer, name: 'A Wizard' },
    { association: a.wizard, name: 'An Illusionist' },
    { association: a.wizard, name: 'A Scribe' },
    { association: a.wizard, name: 'A Scholar' },
    { association: a.worker, name: 'A Scholar' },
    { association: a.wizard, name: 'An Archaeologist' },
    { association: a.mountain, name: 'An Archaeologist' },
    { association: a.desert, name: 'An Archaeologist' },
    { association: a.adventurer, name: 'An Archaeologist' },
    { association: a.city, name: 'An Illusionist' },
    { association: a.gnome, name: 'An Illusionist' },
    { association: a.empty, name: 'A Barbarian', unfitting: upperClass },
    { association: a.barbarian, name: 'A Barbarian', unfitting: upperClass },
    { association: a.adventurer, name: 'A Barbarian', unfitting: upperClass },
    { association: a.mountain, name: 'A Barbarian', unfitting: upperClass },
    { association: a.forest, name: 'A Barbarian' },
    { association: a.empty, name: 'A Knight' },
    { association: a.nobel, name: 'A Knight' },
    { association: a.city, name: 'A Knight' },
    { association: a.village, name: 'A Knight' },
    { association: a.elf, name: 'A Knight' },
    { association: a.desert, name: 'A Knight' },
    { association: a.adventurer, name: 'A Knight' },
    { association: a.empty, name: 'A Priestess' },
    { association: a.cleric, name: 'A Priestess' },
    { association: a.city, name: 'A Priestess' },
    { association: a.village, name: 'A Priestess' },
    { association: a.dragonborn, name: 'A Warrior' },
    { association: a.desert, name: 'A Warrior' },
    { association: a.dwarf, name: 'A Warrior' },
    { association: a.adventurer, name: 'A Warrior' },
    { association: a.criminal, name: 'A Thief' },
    { association: a.evil, name: 'A Thief' },
    { association: a.empty, name: 'A Thief' },
    { association: a.city, name: 'A Thief' },
    { association: a.haven, name: 'A Thief' },
    { association: a.empty, name: 'A Spy' },
    { association: a.city, name: 'A Spy' },
    { association: a.haven, name: 'A Spy' },
    { association: a.empty, name: 'A Druid', unfitting: upperClass },
    { association: a.forest, name: 'A Druid', unfitting: upperClass },
    { association: a.tropical, name: 'A Druid', unfitting: upperClass },
    { association: a.desert, name: 'A Druid', unfitting: upperClass },
    { association: a.mountain, name: 'A Druid', unfitting: upperClass },
    { association: a.adventurer, name: 'A Bounty Hunter' },
    { association: a.city, name: 'A Bounty Hunter' },
    { association: a.village, name: 'A Farmer', unfitting: upperClass },
    { association: a.village, name: 'A Potter', unfitting: upperClass },
    { association: a.city, name: 'A Potter', unfitting: upperClass },
    { association: a.worker, name: 'A Potter', unfitting: upperClass },
    { association: a.worker, name: 'A Carpenter', unfitting: upperClass },
    { association: a.city, name: 'A Carpenter', unfitting: upperClass },
    { association: a.village, name: 'A Carpenter', unfitting: upperClass },
    { association: a.haven, name: 'A Bounty Hunter' },
    {
        association: a.city,
        name: 'Some Guards',
        isPlural: true,
        unfitting: upperClass,
    },
    {
        association: a.village,
        name: 'Some Guards',
        isPlural: true,
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'Some Guards',
        isPlural: true,
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'Some Pirates',
        isPlural: true,
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'Some Pirates',
        isPlural: true,
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'Some Pirates',
        isPlural: true,
        unfitting: upperClass,
    },
    {
        association: a.criminal,
        name: 'Some Pirates',
        isPlural: true,
        unfitting: upperClass,
    },
    {
        association: a.criminal,
        name: 'Some Pirates',
        isPlural: true,
        unfitting: upperClass,
    },
    {
        association: a.criminal,
        name: 'Some Pirates',
        isPlural: true,
        unfitting: upperClass,
    },
    { association: a.haven, name: 'A Sailor', unfitting: upperClass },
    { association: a.haven, name: 'A Sailor', unfitting: upperClass },
    { association: a.prostitute, name: 'A Sailor', unfitting: upperClass },
    {
        association: a.haven,
        name: 'Some Sailors',
        unfitting: upperClass,
        isPlural: true,
    },
    {
        association: a.prostitute,
        name: 'Some Sailors',
        unfitting: upperClass,
        isPlural: true,
    },
    {
        association: a.haven,
        name: 'Some Sailors',
        unfitting: upperClass,
        isPlural: true,
    },
    { association: a.haven, name: 'A Captain' },
    { association: a.haven, name: 'A Captain' },
    { association: a.haven, name: 'A Captain' },
    {
        association: a.haven,
        name: 'Some Seamen',
        unfitting: upperClass,
        isPlural: true,
    },
    {
        association: a.prostitute,
        name: 'Some Seamen',
        unfitting: upperClass,
        isPlural: true,
    },
    { association: a.haven, name: 'A Navigator' },
    { association: a.haven, name: 'A Navigator' },
    { association: a.haven, name: 'A Navigator' },
    { association: a.haven, name: 'A Shipwright' },
    { association: a.haven, name: 'A Shipwright' },
    { association: a.haven, name: 'A Shipwright' },
    {
        association: a.haven,
        name: 'A Lighthouse Keeper',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'A Lighthouse Keeper',
        unfitting: upperClass,
    },
    { association: a.forest, name: 'A Shapeshifter' },
];

const specialIntriguings = [
    { association: a.empty, name: 'Sealed Trapdoor under a Table' },
    { association: a.empty, name: 'A Painting of your Face on Wall' },
    { association: a.empty, name: 'A Wanted Poster with your Face on it' },
    { association: a.evil, name: 'A Wanted Poster with your Face on it' },
    { association: a.criminal, name: 'A Wanted Poster with your Face on it' },
    { association: a.haven, name: 'Babbling Parrot on Bar Counter' },
    { association: a.tropical, name: 'Babbling Parrot on Bar Counter' },
    { association: a.empty, name: 'Sealed Trapdoor under a table' },
    { association: a.forest, name: 'Stuffed Owlbear in Corner' },
    { association: a.forest, name: 'Stuffed Dire Wolf in Corner' },
    { association: a.village, name: 'Stuffed Bloodhound in Corner' },
    { association: a.village, name: 'Stuffed Horse in Corner' },
    { association: a.village, name: 'Stuffed Troll in Corner' },
    { association: a.village, name: 'Stuffed Bulldog in Corner' },
    { association: a.desert, name: 'Stuffed Lion in Corner' },
    { association: a.desert, name: 'Stuffed Hyena in Corner' },
    { association: a.mountain, name: 'Stuffed Manticore in Corner' },
    { association: a.mountain, name: 'Stuffed Lion in Corner' },
    { association: a.haven, name: 'Stuffed Shark in Corner' },
    { association: a.haven, name: 'Stuffed Manticore in Corner' },
    { association: a.tropical, name: 'Stuffed Shark in Corner' },
    { association: a.tropical, name: 'Stuffed Gorilla in Corner' },
    { association: a.empty, name: 'Two-Way Mirror on Wall' },
    { association: a.empty, name: 'Giant Mirror on Wall' },
    { association: a.empty, name: 'Exclusive VIP-Lounge' },
    { association: a.empty, name: 'One Wall was newly painted' },
    { association: a.empty, name: 'A guest seems to recognize YOU!' },
    { association: a.empty, name: 'Some guests look nervous' },
    { association: a.city, name: 'Police monitors guests' },
    { association: a.haven, name: 'Guards monitor guests' },
    { association: a.village, name: 'Guards monitor guests' },
    { association: a.empty, name: 'Guards in front of VIP-Lounge' },
    { association: a.city, name: 'Genie accompanies a Guest' },
    { association: a.desert, name: 'Genie accompanies a Guest' },
    {
        association: a.haven,
        name: 'Two Seamen have an argument',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'Ship Crew gets totally drunk',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'Some Pirates have an argument',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'A Captain searching for his Crew',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'A Crew Searching for its Captain',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'A Captain is hiring',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'A Woman with a Map Tattoo',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'A Female Pirate scares Crew away',
        unfitting: upperClass,
    },
];
// hard coded descriptions are better because furniture can have diverse attributes: Silver Plates are okay, but Silver Tables may seem strange... Mahagony Walls seem okay, but a Mahagony carpet is just wrong...
const furnitures = [
    {
        association: a.empty,
        name: 'Crackling Fireplace',
    },
    {
        association: a.poor,
        name: 'Some Tables have Holes',
        unfitting: upperClass,
    },
    {
        association: a.poor,
        name: 'Some Plates look Dirty',
        unfitting: upperClass,
    },
    { association: a.poor, name: 'Wooden Plates', unfitting: upperClass },
    { association: a.poor, name: 'Wooden Forks', unfitting: upperClass },
    { association: a.poor, name: 'Wooden Spoons', unfitting: upperClass },
    { association: a.poor, name: 'Dirty Carpet', unfitting: upperClass },
    { association: a.poor, name: 'Toilet is Outside', unfitting: upperClass },
    { association: a.poor, name: 'Cheap Carpet', unfitting: upperClass },
    { association: a.poor, name: 'Small Tables', unfitting: upperClass },
    {
        association: a.poor,
        name: 'Lots of different Chairs',
        unfitting: upperClass,
    },
    { association: a.poor, name: 'Barrel as Table', unfitting: upperClass },
    { association: a.poor, name: 'Barrel as Chair', unfitting: upperClass },
    { association: a.poor, name: 'Uncomfortable Chair', unfitting: upperClass },
    { association: a.poor, name: 'Squeaky Floorboard', unfitting: upperClass },
    { association: a.poor, name: 'Squeaky Door', unfitting: upperClass },
    { association: a.poor, name: 'Cracked Wall', unfitting: upperClass },
    { association: a.poor, name: 'Cracked Table', unfitting: upperClass },
    {
        association: a.poor,
        name: 'Knife Cuts on Tables',
        unfitting: upperClass,
    },
    { association: a.poor, name: 'Dirty Windows', unfitting: upperClass },
    { association: a.poor, name: 'Cracked Window', unfitting: upperClass },
    {
        association: a.poor,
        name: 'Glass of Pickled Eggs',
        unfitting: upperClass,
    },
    { association: a.worker, name: 'Sturdy Tables', unfitting: upperClass },
    { association: a.worker, name: 'Tin Plates', unfitting: upperClass },
    { association: a.worker, name: 'Tin Plates', unfitting: upperClass },
    { association: a.worker, name: 'Tin Forks', unfitting: upperClass },
    { association: a.worker, name: 'Tin Spoons', unfitting: upperClass },
    { association: a.worker, name: 'Blue Carpet', unfitting: upperClass },
    { association: a.worker, name: 'Green Carpet', unfitting: upperClass },
    { association: a.worker, name: 'Oaken Tables', unfitting: upperClass },
    { association: a.worker, name: 'Oaken Chairs', unfitting: upperClass },
    { association: a.worker, name: 'Maple Tables', unfitting: upperClass },
    { association: a.worker, name: 'Maple Chairs', unfitting: upperClass },
    { association: a.worker, name: 'Cedar Tables', unfitting: upperClass },
    { association: a.worker, name: 'Cedar Chairs', unfitting: upperClass },
    { association: a.worker, name: 'Heavy Chairs', unfitting: upperClass },
    {
        association: a.worker,
        name: 'Squeaky Floorboard',
        unfitting: upperClass,
    },
    { association: a.worker, name: 'Squeaky Door', unfitting: upperClass },
    { association: a.worker, name: 'Stone Ground', unfitting: upperClass },
    { association: a.worker, name: 'Bear Fur as Rug', unfitting: upperClass },
    { association: a.worker, name: 'Wolf Fur as Rug', unfitting: upperClass },
    { association: a.worker, name: 'Fogged Windows', unfitting: upperClass },
    {
        association: a.worker,
        name: 'Smoked Ham On Walls',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Smoked Fishes On Walls',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Deer Trophy on Wall',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Wolf Trophy on Wall',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Bear Trophy on Wall',
        unfitting: upperClass,
    },
];

const moodSetting = [
    { association: a.empty, name: 'Smell of Beer' },
    { association: a.worker, name: 'Smell of Cheese', unfitting: upperClass },
    { association: a.worker, name: 'Smell of Beer', unfitting: upperClass },
    { association: a.worker, name: 'Smell of Wood', unfitting: upperClass },
    { association: a.worker, name: 'Smell of Mead', unfitting: upperClass },
    { association: a.poor, name: 'Smell of Old Pork', unfitting: upperClass },
    { association: a.poor, name: 'Smell of Old Pork', unfitting: upperClass },
    { association: a.poor, name: 'Smell of Old Beef', unfitting: upperClass },
    { association: a.poor, name: 'Smell of Fish', unfitting: upperClass },
    { association: a.poor, name: 'Smell of Foul Eggs', unfitting: upperClass },
    {
        association: a.poor,
        name: 'Fluet music',
        unfitting: upperClass,
    },
    {
        association: a.poor,
        name: 'Laughter',
        unfitting: upperClass,
    },
    {
        association: a.poor,
        name: 'Applause',
        unfitting: upperClass,
    },
    {
        association: a.poor,
        name: 'Singing',
        unfitting: upperClass,
    },
    {
        association: a.poor,
        name: 'Bagpipe music',
        unfitting: upperClass,
    },
    {
        association: a.poor,
        name: 'Guitar music',
        unfitting: upperClass,
    },
    {
        association: a.poor,
        name: 'Lute music',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Fluet music',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Laughter',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Applause',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Singing',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Bagpipe music',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Guitar music',
        unfitting: upperClass,
    },
    {
        association: a.worker,
        name: 'Lute music',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'Shanty Singing',
        unfitting: upperClass,
    },
];
