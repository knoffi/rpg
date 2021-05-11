import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { bartenders } from '../scenes/questScene/impressions/bartender';
import { individuals } from '../scenes/questScene/impressions/genericIndividuals';
import { association } from './association';
import { getStructuredFits } from './StructuredTavernFits';

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
    association.wealthy,
    association.knight,
    association.elf,
    association.wizard,
];

const lowerClass = [
    association.poor,
    association.modest,
    association.soldier,
    association.barbarian,
];

const CHANCE_FOR_SPECIAL_TEXT = 0.34;
export class Impression {
    private fits: association[];
    private textHistory!: string[];
    constructor(fits: association[]) {
        this.fits = fits;
        this.textHistory = [];
    }
    public getText(criterium: aspect) {
        switch (criterium) {
            case aspect.averageCustomer:
                const averageCustomerText = this.getAverageCustomerText();
                this.addToDescriptionHistory(averageCustomerText);
                return averageCustomerText;
            case aspect.someCustomers:
                const intriguingText = this.getIntriguingText();
                this.addToDescriptionHistory(intriguingText);
                return intriguingText;
            case aspect.interior:
                const interiorText = this.getInteriorText();
                this.addToDescriptionHistory(interiorText);
                return interiorText;
            default:
                const bartenderText = this.getBartenderText();
                this.addToDescriptionHistory(bartenderText);
                return bartenderText;
        }
    }
    private addToDescriptionHistory(description: string) {
        if (this.textHistory.length >= 10) {
            const descriptionHistory = this.textHistory.map((value, index) => {
                return index < this.textHistory.length - 1
                    ? this.textHistory[index + 1]
                    : description;
            });
        } else {
            this.textHistory.push(description);
        }
    }
    private filterForPreviousDescriptions(descriptions: Description[]) {
        const onlyNewDescriptions = descriptions.filter(
            (description) =>
                !this.textHistory.some((text) =>
                    text.includes(description.name)
                )
        );
        return onlyNewDescriptions.length > 0
            ? onlyNewDescriptions
            : descriptions;
    }
    private getBartenderText() {
        const structuredFits = getStructuredFits(this.fits);
        //TODO: use a good prefixFilter method
        const bartender = getRandomArrayEntry(bartenders).createImpression(
            structuredFits,
            () => false
        );
        return bartender;
    }
    private getInteriorText() {
        const fittingFurnitures = this.filterDescriptions(furnitures);
        const fittingMoodSetters = this.filterDescriptions(moodSetting);
        const furniture = getRandomArrayEntry(fittingFurnitures);
        const moodSetter = getRandomArrayEntry(fittingMoodSetters);
        return furniture.name + ' & ' + moodSetter.name;
    }
    private getAverageCustomerText() {
        const suitableCustomers = this.filterDescriptions(averageCustomer);
        const customers = getRandomArrayEntry(suitableCustomers);
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
            const intriguing = getRandomArrayEntry(suitableIntriguings);
            return intriguing.name;
        }
        const structuredFits = getStructuredFits(this.fits);
        //TODO: use a good prefixFilter method
        const individual = getRandomArrayEntry(individuals).createImpression(
            structuredFits,
            () => false
        );
        return individual;
    }

    private filterDescriptions(descriptions: Description[]) {
        const notUnfittingDescriptions = this.filterNotUnfitting(descriptions);
        const fittingDescriptions = this.filterFitting(
            notUnfittingDescriptions
        );
        const fittingNewDescriptions = this.filterForPreviousDescriptions(
            fittingDescriptions
        );
        return fittingNewDescriptions;
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
    { association: a.assasine, name: 'Dangerous' },
    { association: a.assasine, name: 'Quiet' },
    { association: a.underdark, name: 'Quiet' },
    { association: a.thief, name: 'Shady' },
    { association: a.thief, name: 'Silent' },
    { association: a.prostitute, name: 'Frisky' },
    { association: a.desert, name: 'Exhausted' },
    { association: a.mountain, name: 'Exhausted' },
    { association: a.forest, name: 'Exhausted' },
    { association: a.desert, name: 'Sweaty' },
];

// NOTE: This does not need to become an ImpressionIdea[], so that specialDescriptionChance can be used like in special names. ALSO, some of this could/should be furniture...
const specialIntriguings = [
    { association: a.empty, name: 'Sealed Trapdoor under a Table' },
    { association: a.empty, name: 'A Painting of your Face on Wall' },
    { association: a.empty, name: 'A Wanted Poster with your Face on it' },
    { association: a.empty, name: 'Three Bounty Hunters are Searching' },
    { association: a.assasine, name: 'A Wanted Poster with your Face on it' },
    { association: a.thief, name: 'A Wanted Poster with your Face on it' },
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
    { association: a.rich, name: 'Exclusive VIP-Lounge' },
    { association: a.prostitute, name: 'Exclusive VIP-Lounge' },
    { association: a.empty, name: 'One Wall was newly painted' },
    { association: a.empty, name: 'A guest seems to recognize YOU!' },
    { association: a.empty, name: 'A guest is pointing towards your table!' },
    { association: a.empty, name: 'Some guests look nervous' },
    { association: a.city, name: 'Police monitors guests' },
    { association: a.haven, name: 'Guards monitor guests' },
    { association: a.village, name: 'Guards monitor guests' },
    { association: a.empty, name: 'Guards in front of VIP-Lounge' },
    { association: a.city, name: 'Genie accompanies a Guest' },
    { association: a.desert, name: 'Genie accompanies a Guest' },
    {
        association: a.empty,
        name: 'A Rich-Looking Person is Crying at the Bar',
    },
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
        name: 'A Female Pirate scares other Pirates away',
        unfitting: upperClass,
    },
    {
        association: a.empty,
        name: 'A Rebel Group is hiring',
        unfitting: upperClass,
    },
    {
        association: a.rich,
        name: 'Some very rich People play Poker',
        unfitting: upperClass,
    },
    {
        association: a.thief,
        name: 'A Street Gang is hiring',
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
    { association: a.modest, name: 'Sturdy Tables', unfitting: upperClass },
    { association: a.modest, name: 'Tin Plates', unfitting: upperClass },
    { association: a.modest, name: 'Tin Plates', unfitting: upperClass },
    { association: a.modest, name: 'Tin Forks', unfitting: upperClass },
    { association: a.modest, name: 'Tin Spoons', unfitting: upperClass },
    { association: a.modest, name: 'Blue Carpet', unfitting: upperClass },
    { association: a.modest, name: 'Green Carpet', unfitting: upperClass },
    { association: a.modest, name: 'Oaken Tables', unfitting: upperClass },
    { association: a.modest, name: 'Oaken Chairs', unfitting: upperClass },
    { association: a.modest, name: 'Maple Tables', unfitting: upperClass },
    { association: a.modest, name: 'Maple Chairs', unfitting: upperClass },
    { association: a.modest, name: 'Cedar Tables', unfitting: upperClass },
    { association: a.modest, name: 'Cedar Chairs', unfitting: upperClass },
    { association: a.modest, name: 'Heavy Chairs', unfitting: upperClass },
    {
        association: a.modest,
        name: 'Squeaky Floorboard',
        unfitting: upperClass,
    },
    { association: a.modest, name: 'Squeaky Door', unfitting: upperClass },
    { association: a.modest, name: 'Stone Ground', unfitting: upperClass },
    { association: a.modest, name: 'Bear Fur as Rug', unfitting: upperClass },
    { association: a.modest, name: 'Wolf Fur as Rug', unfitting: upperClass },
    { association: a.modest, name: 'Fogged Windows', unfitting: upperClass },
    {
        association: a.modest,
        name: 'Smoked Ham On Walls',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Smoked Fishes On Walls',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Deer Trophy on Wall',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Wolf Trophy on Wall',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Bear Trophy on Wall',
        unfitting: upperClass,
    },
];

const moodSetting = [
    { association: a.empty, name: 'Smell of Beer' },
    { association: a.modest, name: 'Smell of Cheese', unfitting: upperClass },
    { association: a.modest, name: 'Smell of Beer', unfitting: upperClass },
    { association: a.modest, name: 'Smell of Wood', unfitting: upperClass },
    { association: a.modest, name: 'Smell of Mead', unfitting: upperClass },
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
        association: a.modest,
        name: 'Fluet music',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Laughter',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Applause',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Singing',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Bagpipe music',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Guitar music',
        unfitting: upperClass,
    },
    {
        association: a.modest,
        name: 'Lute music',
        unfitting: upperClass,
    },
    {
        association: a.haven,
        name: 'Shanty Singing',
        unfitting: upperClass,
    },
];
