import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { association } from './Adjectives';

enum criteria {
    bartender = 'bartender',
    furniture = 'furniture',
    sound = 'atmosphere',
    customers = 'customers',
}

interface Description {
    association: association;
    name: string;
}

export class Impression {
    private fits: association[];
    constructor(fits: association[]) {
        this.fits = fits;
    }
    getImpressionText(criterium: criteria) {
        switch (criterium) {
            default:
                return this.getBartenderText();
        }
    }
    getBartenderText() {
        const fittingApperances = this.filterDescriptions(bartenderAppearances);
        const fittingCharakter = this.filterDescriptions(bartenderCharacter);
        const appearance = getRandomArrayEntry(
            fittingApperances
        ) as Description;
        const emotion = getRandomArrayEntry(fittingCharakter) as Description;
        return appearance.name + ' & ' + emotion.name;
    }

    filterDescriptions(descriptions: Description[]) {
        return descriptions.filter(
            (description) =>
                description.association === association.empty ||
                this.fits.includes(description.association)
        );
    }
}

const a = association;
const c = criteria;
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
    { association: a.empty, name: 'Sickly' },
    { association: a.empty, name: 'Old' },
    { association: a.empty, name: 'Beautiful' },
    { association: a.empty, name: 'Ugly' },
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
    { association: a.nobel, name: 'One-Armed' },
    { association: a.cleric, name: 'Golden Hair' },
    { association: a.tropical, name: 'Extremly Cheerfull' },
    { association: a.tropical, name: 'Monkey Pet' },
    { association: a.desert, name: 'Turban' },
    { association: a.desert, name: 'Black Talisman' },
    { association: a.desert, name: 'Sweaty' },
    { association: a.mountain, name: 'Thick Beard' },
];
const bartenderCharacter = [
    { association: a.empty, name: 'Grumbling' },
    { association: a.empty, name: 'Warm-Hearted' },
    { association: a.empty, name: 'Unfriendly' },
    { association: a.empty, name: 'Generous' },
    { association: a.empty, name: 'Honest' },
    { association: a.empty, name: 'Busy' },
    { association: a.empty, name: 'In Love' },
    { association: a.empty, name: 'Dreaming' },
    { association: a.empty, name: 'Lazy' },
    { association: a.poor, name: 'Depressed' },
    { association: a.rich, name: 'Gold Tooth' },
    { association: a.rich, name: 'Sophisticated' },
    { association: a.rich, name: 'Lofty' },
    { association: a.sophisticated, name: 'Organized' },
    { association: a.worker, name: 'Hard-Working' },
    { association: a.nobel, name: 'Nobel' },
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

const atmospherePeopleLookLike = [
    { association: a.empty, name: 'Joyful' },
    { association: a.empty, name: 'Grumbling' },
    { association: a.empty, name: 'Celebrating' },
    { association: a.empty, name: 'Fighting' },
    { association: a.empty, name: 'Lively' },
    { association: a.empty, name: 'Frisky' },
    { association: a.empty, name: 'Drunk' },
    { association: a.empty, name: 'Tipsy' },
    { association: a.empty, name: 'Pretty Drunk' },
    { association: a.empty, name: 'Totally Drunk' },
    { association: a.empty, name: 'Gambling' },
    { association: a.empty, name: 'Betting' },
    { association: a.empty, name: 'Dancing' },
    { association: a.empty, name: 'Flirting' },
    { association: a.empty, name: 'Posing' },
    { association: a.empty, name: 'Story Telling' },
    { association: a.empty, name: 'Exhausted' },
    { association: a.empty, name: 'Sweaty' },
];

const atmosphereDescriptions = [];
const furnitureDescriptions = [];
const customersDescriptions = [];
