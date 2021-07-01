import { association, incomeAssociations } from '../../../classes/association';
import { NameIdea } from '../../../classes/idea/NameIdea';
import { StructuredTavernFits } from '../../../classes/idea/StructuredTavernFits';
import { getRandomArrayEntry } from '../../../helpingFunctions/getFittingRandom';

export const getSpecialTavernName = (fits: StructuredTavernFits) => {
    const fitList = Object.values(fits).filter(
        (fit) => fit && (fit as string) !== association.empty
    );
    const focusedFit = getRandomArrayEntry(
        fitList.length > 0 ? fitList : Object.values(incomeAssociations)
    );
    if (
        fitList.length === 0 ||
        !focusedFit ||
        (focusedFit as string) === association.empty
    ) {
        console.log(
            'Special tavern name was demanded, but calculated fit list was empty or full of undefined'
        );
    }
    const specialNames = specialTavernNames.find((entry) => {
        return entry.association === focusedFit;
    }) || { names: ['Nameless Tavern'] };
    if (specialNames.names[0] === 'Nameless Tavern') {
        console.log(
            'specialNames are undefined, but special Names were requested'
        );
    }
    return getRandomArrayEntry(specialNames.names);
};
const a = association;

const specialNames: NameIdea[] = [
    new NameIdea({
        name: 'Wrathful Axe',
        needs: [a.barbarian],
        powerFits: [a.barbarian],
    }),
    new NameIdea({
        name: 'Raging Minotaur',
        needs: [a.barbarian],
        powerFits: [a.barbarian],
    }),
    new NameIdea({
        name: 'Mead Fountain',
        needsOne: [a.barbarian, a.dwarf],
        powerFits: [a.barbarian, a.dwarf],
    }),
    new NameIdea({
        name: 'Savage Hunter',
        needs: [a.barbarian],
        powerFits: [a.barbarian],
    }),
    new NameIdea({
        name: 'Cowardly Wizard',
        needs: [a.barbarian],
        powerFits: [a.barbarian],
    }),
    new NameIdea({
        name: 'Grimm Berzerk',
        needs: [a.barbarian],
        powerFits: [a.barbarian],
    }),
    new NameIdea({
        name: 'Feasting Tribesman',
        needs: [a.barbarian],
        powerFits: [a.barbarian],
    }),
    new NameIdea({
        name: "Traveller's Fortune",
        needs: [a.adventurer],
        powerFits: [a.adventurer],
    }),
    new NameIdea({
        name: 'Beholding Beholder',
        needsOne: [a.adventurer, a.wizard, a.underdark],
        powerFits: [a.adventurer, a.wizard, a.underdark],
    }),
    new NameIdea({
        name: 'Aliba Bar',
        needsOne: [a.adventurer, a.desert],
        powerFits: [a.adventurer, a.desert],
    }),
    new NameIdea({
        name: 'Resting Cape',
        needs: [a.adventurer],
        powerFits: [a.adventurer],
    }),
    new NameIdea({
        name: 'Whispering Sphinx',
        needs: [a.adventurer, a.wizard],
        powerFits: [a.adventurer, a.wizard],
    }),
    new NameIdea({
        name: 'Gossiping Goblin',
        needs: [a.adventurer],
        powerFits: [a.adventurer],
    }),
    new NameIdea({
        name: 'Dancing Rapier',
        needs: [a.bard],
        powerFits: [a.bard],
    }),
    new NameIdea({
        name: 'Dancing Virgin',
        needs: [a.bard],
        powerFits: [a.bard],
    }),
    new NameIdea({
        name: 'Drunken Virgin',
        needsOne: [a.bard, a.prostitute],
        powerFits: [a.bard],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'House of Poets',
        needs: [a.bard],
        powerFits: [a.bard],
    }),
    new NameIdea({
        name: 'Joyful Juggler',
        needs: [a.bard],
        powerFits: [a.bard],
    }),
    new NameIdea({
        name: 'Fumbling Fiddler',
        needs: [a.bard],
        powerFits: [a.bard],
    }),
    new NameIdea({
        name: 'Lyre & Lyrics',
        needs: [a.bard],
        powerFits: [a.bard],
    }),
    new NameIdea({
        name: 'Laughing Backpipes',
        needs: [a.bard],
        powerFits: [a.bard],
    }),
    new NameIdea({
        name: 'Caroling Chimney',
        needs: [a.city],
        powerFits: [a.city],
    }),
    new NameIdea({
        name: 'Drink Manufacture',
        needs: [a.city],
        powerFits: [a.city],
    }),
    new NameIdea({
        name: 'Joyful Judge',
        needsOne: [a.city, a.wealthy],
        powerFits: [a.city, a.wealthy],
    }),
    new NameIdea({
        name: 'Incest Hillbilly',
        needs: [a.city],
        powerFits: [a.city],
    }),
    new NameIdea({
        name: 'Resting Crane',
        needsOne: [a.city, a.gnome],
        powerFits: [a.city, a.gnome],
    }),
    new NameIdea({
        name: 'Friends on Fridays',
        needsOne: [a.city],
        powerFits: [a.city],
    }),
    new NameIdea({
        name: 'Blessed Virgin',
        needsOne: [a.cleric],
        powerFits: [a.cleric],
    }),
    new NameIdea({
        name: 'Candles of Virtues',
        needsOne: [a.cleric],
        powerFits: [a.cleric],
    }),
    new NameIdea({
        name: 'Pillars of Wisdom',
        needsOne: [a.cleric],
        powerFits: [a.cleric],
    }),
    new NameIdea({
        name: 'Hopeless Heathen',
        needsOne: [a.cleric],
        powerFits: [a.cleric],
    }),
    new NameIdea({
        name: 'Heaven on Earth',
        needsOne: [a.cleric],
        powerFits: [a.cleric],
    }),
    new NameIdea({
        name: 'Smiling Monk',
        needsOne: [a.cleric],
        powerFits: [a.cleric],
    }),
    new NameIdea({
        name: 'Bald-Headed Monk',
        needsOne: [a.cleric],
        powerFits: [a.cleric],
    }),
    new NameIdea({
        name: 'Praising Priestess',
        needsOne: [a.cleric],
        powerFits: [a.cleric],
    }),
    new NameIdea({
        name: 'Lousy Dog',
        needsOne: [a.thief],
        powerFits: [a.thief],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Slumbering Rooster',
        needsOne: [a.thief],
        powerFits: [a.thief],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Wines & Whispers',
        needsOne: [a.thief],
        powerFits: [a.thief],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Resting Crowbar',
        needsOne: [a.thief],
        powerFits: [a.thief],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'One-eyed Warden',
        needsOne: [a.thief],
        powerFits: [a.thief],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Drunken Watchman',
        needsOne: [a.thief],
        powerFits: [a.thief],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Sips & Secrets',
        needsOne: [a.thief],
        powerFits: [a.thief],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Careful Kitty',
        needsOne: [a.thief],
        powerFits: [a.thief],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Crow Bar',
        needsOne: [a.thief],
        powerFits: [a.thief],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Wondrous Lamp',
        needsOne: [a.desert, a.adventurer],
        powerFits: [a.desert, a.adventurer],
    }),
    new NameIdea({
        name: 'Empty Hourglass',
        needsOne: [a.desert, a.wizard],
        powerFits: [a.desert, a.wizard],
    }),
    new NameIdea({
        name: 'Happy Hookah',
        needsOne: [a.desert, a.wizard],
        powerFits: [a.desert, a.wizard],
    }),
    new NameIdea({
        name: 'Purple Turban',
        needsOne: [a.desert],
        powerFits: [a.desert],
    }),
    new NameIdea({
        name: 'Dancing Cactus',
        needsOne: [a.desert],
        powerFits: [a.desert],
    }),
    new NameIdea({
        name: 'Resting Camel',
        needsOne: [a.desert, a.druid],
        powerFits: [a.desert, a.druid],
    }),
    new NameIdea({
        name: 'Thirsty Tourist',
        needsOne: [a.desert],
        powerFits: [a.desert],
    }),
    new NameIdea({
        name: 'Grinning Jakal',
        needsOne: [a.desert, a.thief],
        landRange: [a.desert],
        powerFits: [a.desert],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Black Scorpion',
        needsOne: [a.desert, a.assasine],
        powerFits: [a.desert],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Slumbering Sphinx',
        needsOne: [a.desert],
        powerFits: [a.desert],
    }),
    new NameIdea({
        name: 'Mini Pyramid',
        needsOne: [a.desert],
        powerFits: [a.desert],
    }),
    new NameIdea({
        name: 'Resting Chain Shirt',
        needsOne: [a.soldier, a.cleric, a.knight],
        powerFits: [a.soldier, a.cleric, a.knight],
    }),
    new NameIdea({
        name: 'Drunk Archer',
        needsOne: [a.soldier],
        powerFits: [a.soldier],
    }),
    new NameIdea({
        name: 'Sleepy Spearman',
        needsOne: [a.soldier],
        powerFits: [a.soldier],
    }),
    new NameIdea({
        name: 'Lucky Vanguard',
        needsOne: [a.soldier],
        powerFits: [a.soldier],
    }),
    new NameIdea({
        name: 'Shots For Shooters',
        needsOne: [a.soldier],
        powerFits: [a.soldier],
    }),
    new NameIdea({
        name: 'Singing Blade',
        needsOne: [a.soldier, a.bard],
        powerFits: [a.soldier, a.bard],
    }),
    new NameIdea({
        name: 'Beers & Bucklers',
        needsOne: [a.soldier],
        powerFits: [a.soldier],
    }),
    new NameIdea({
        name: 'Roasted Boar',
        needsOne: [a.soldier],
        powerFits: [a.soldier],
    }),
    new NameIdea({
        name: 'Snot-Nosed Knight',
        needsOne: [a.soldier],
        powerFits: [a.soldier],
    }),
    new NameIdea({
        name: 'Patient Hunter',
        needsOne: [a.drow, a.assasine],
        powerFits: [a.drow],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Black Widow',
        needsOne: [a.drow],
        powerFits: [a.drow],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Grey Widow',
        needsOne: [a.drow, a.poor],
        incomeRange: [a.poor],
        powerFits: [a.drow, a.poor],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Lurking Spider',
        needsOne: [a.drow, a.adventurer],
        powerFits: [a.drow],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Submissive Male',
        needsOne: [a.drow],
        powerFits: [a.drow],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Bare-Naked Male',
        needsOne: [a.drow],
        powerFits: [a.drow],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Tortured High Elf',
        needsOne: [a.drow],
        powerFits: [a.drow],
    }),
    new NameIdea({
        name: 'Broken Wood Elf',
        needsOne: [a.drow],
        powerFits: [a.drow],
    }),
    new NameIdea({
        name: 'Sinister Sister',
        needsOne: [a.drow],
        powerFits: [a.drow],
    }),
    new NameIdea({
        name: 'Black-Hearted Mistress',
        needsOne: [a.drow],
        powerFits: [a.drow],
    }),
    new NameIdea({
        name: 'Relentless Queen',
        needsOne: [a.drow],
        powerFits: [a.drow],
    }),
    new NameIdea({
        name: 'Liqueur Fountain',
        misfits: [a.desert],
        needsOne: [a.drow, a.tiefling],
        powerFits: [a.drow, a.tiefling],
    }),
    new NameIdea({
        name: 'Whiskey Web',
        needsOne: [a.drow],
        powerFits: [a.drow],
    }),
    new NameIdea({
        name: 'Three Daggers',
        needsOne: [a.drow, a.thief],
        powerFits: [a.drow],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Busy Bee',
        needsOne: [a.druid],
        powerFits: [a.druid],
    }),
    new NameIdea({
        name: 'Fabulous Fungus',
        needsOne: [a.druid],
        powerFits: [a.druid],
    }),
    new NameIdea({
        name: 'Womb of Nature',
        needsOne: [a.druid],
        powerFits: [a.druid],
    }),
    new NameIdea({
        name: 'Mead-Slupring Bear',
        needsOne: [a.druid],
        powerFits: [a.druid],
    }),
    new NameIdea({
        name: 'Tree Of Resting',
        needsOne: [a.druid, a.forest],
        powerFits: [a.druid, a.forest],
    }),
    new NameIdea({
        name: 'Dancing Deer',
        needsOne: [a.druid],
        powerFits: [a.druid],
    }),
    new NameIdea({
        name: 'Squinting Squirrel',
        needsOne: [a.druid, a.thief],
        powerFits: [a.druid],
        worksForThiefs: true,
    }),
    new NameIdea({
        name: 'Honey Falcon',
        needsOne: [a.druid],
        powerFits: [a.druid],
    }),
    new NameIdea({
        name: 'White Rabbit',
        needsOne: [a.druid],
        powerFits: [a.druid],
    }),
    new NameIdea({
        name: 'Well-Stuffed Pipe',
        needsOne: [a.druid],
        powerFits: [a.druid],
    }),
    new NameIdea({
        name: 'Pub Of Peacelovers',
        needsOne: [a.druid],
        powerFits: [a.druid],
    }),
    new NameIdea({
        name: 'Fortune Forge',
        needsOne: [a.dwarf, a.modest],
        powerFits: [a.druid, a.modest],
    }),
    new NameIdea({
        name: 'Mead Cave',
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: 'Beards & Beers',
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: 'Booze Tunnel',
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: 'Beardy Barmaid',
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: "Bardin's Bar",
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: "Baldor's Bar",
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: "Berin's Bar",
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: "Thulrig's Tavern",
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: "Ingard's Inn",
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: "Pulrig's Pub",
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: 'Joyful Jeweler',
        needsOne: [a.dwarf, a.wealthy],
        powerFits: [a.dwarf, a.wealthy],
    }),
    new NameIdea({
        name: 'Poofy Elf',
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: 'Marble Mountain',
        needsOne: [a.dwarf],
        powerFits: [a.dwarf],
    }),
    new NameIdea({
        name: 'Nectar Fountain',
        needsOne: [a.elf],
        powerFits: [a.elf],
    }),
    new NameIdea({
        name: 'Slumbering Fairy',
        needsOne: [a.elf],
        powerFits: [a.elf],
    }),
    new NameIdea({ name: 'Ivory Hall', needsOne: [a.elf], powerFits: [a.elf] }),
    new NameIdea({
        name: 'Mahagony Temple',
        needsOne: [a.elf],
        powerFits: [a.elf],
    }),
    new NameIdea({
        name: 'Stinky Dwarf',
        needsOne: [a.elf],
        powerFits: [a.elf],
    }),
    new NameIdea({
        name: 'Moonlight Slumber',
        needsOne: [a.elf],
        powerFits: [a.elf],
    }),
    new NameIdea({
        name: 'Wines & Wonders',
        needsOne: [a.elf, a.adventurer],
        powerFits: [a.elf, a.adventurer],
    }),
    new NameIdea({
        name: 'Resting Bow',
        needsOne: [a.elf],
        powerFits: [a.elf],
    }),
    new NameIdea({
        name: 'Twinkling Star',
        needsOne: [a.elf],
        powerFits: [a.elf],
    }),
    new NameIdea({
        name: 'Baleful Broadswoad',
        needsOne: [a.assasine],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Thirsty Executioner',
        needsOne: [a.assasine],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Grim Wolf',
        needsOne: [a.assasine],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Bounty Bar',
        needsOne: [a.assasine],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Beers & Bounties',
        needsOne: [a.assasine],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Waiting Gallow',
        needsOne: [a.assasine],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Last Judgement',
        needsOne: [a.assasine],
        worksForAssasines: true,
    }),
    new NameIdea({
        name: 'Drunken Woodpecker',
        needsOne: [a.forest],
        powerFits: [a.forest],
    }),
    new NameIdea({
        name: 'Ancient Oak',
        needsOne: [a.forest],
        powerFits: [a.forest],
    }),
    new NameIdea({
        name: 'Rabbit Hole',
        needsOne: [a.forest],
        powerFits: [a.forest],
    }),
    new NameIdea({
        name: 'Laughing Fox',
        needsOne: [a.forest],
        powerFits: [a.forest],
    }),
    new NameIdea({
        name: "Hog's Nest",
        needsOne: [a.forest],
        powerFits: [a.forest],
    }),
    new NameIdea({
        name: 'Pints & Pines',
        needsOne: [a.forest],
        powerFits: [a.forest],
    }),
    new NameIdea({
        name: 'Boasting Boar',
        needsOne: [a.forest],
        powerFits: [a.forest],
    }),
    new NameIdea({
        name: 'Bubbling Beer',
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: 'Tipsy Giant',
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: 'Resting Gear',
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: 'Giggling Gnome',
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: 'Ticking Clock',
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: 'Roaring Enginge',
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: 'Innvention',
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: "Mr. Pebblebaker's Pub",
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: "Mrs. Barrenboomer's Bar",
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: 'Hall of Charades',
        needsOne: [a.gnome],
        powerFits: [a.gnome],
    }),
    new NameIdea({
        name: 'Smiling Sun',
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: 'Smirking Pony',
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: 'Buttered Bread',
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: 'Humble Hazelnut',
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: 'Dancing Straw Hat',
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: 'Singing Salmon',
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: 'Friends & Family',
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: "Bronzebrand's Bar",
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: "Brumblebrand's Bar",
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: "Isenwood's Inn",
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: "Terrybawn's Tavern",
        needsOne: [a.halfling],
        powerFits: [a.halfling],
    }),
    new NameIdea({
        name: 'Hidden Booty',
        needsOne: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: 'Ale Fountain',
        needsOne: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: 'Friendly Flounder',
        needsOne: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: 'Dancing Lobster',
        needsOne: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: 'Resting Anchor',
        needsOne: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: 'Drowning Landlubber',
        needsOne: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: 'Oily Oyster',
        needsOne: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: 'Shabby Shark',
        needs: [a.haven],
        incomeRange: [a.poor],
        powerFits: [a.haven, a.poor],
    }),
    new NameIdea({
        name: 'Savoring Shark',
        needs: [a.haven],
        misfits: [a.poor],
        powerFits: [a.haven, a.poor],
    }),
    new NameIdea({
        name: 'Squirting Squid',
        needs: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: "Captain Barnabis' Bar",
        needs: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: "Perry Piper's Pub",
        needs: [a.haven],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: "Admiral Pensington's Pub",
        needs: [a.haven],
        misfits: [a.poor],
        powerFits: [a.haven],
    }),
    new NameIdea({
        name: 'Feasting Hound',
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: 'Schnitzel Outpost',
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({ name: 'Puzzles', needs: [a.human], powerFits: [a.human] }),
    new NameIdea({
        name: 'Rooftop Bar',
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: 'Full House Bar',
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: "Elizabeths's Tavern",
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: "Paul Paulsen's Pub",
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: 'Tipsy Tavern',
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: 'On The Rocks',
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: 'Bottoms Up!',
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: 'Through Thick and Gin',
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: "Inngrid's Inn",
        needs: [a.human],
        powerFits: [a.human],
    }),
    new NameIdea({
        name: 'Eagle Nest',
        needs: [a.mountain],
        powerFits: [a.mountain],
    }),
    new NameIdea({
        name: 'Busy Miner',
        needs: [a.mountain],
        powerFits: [a.mountain],
    }),
    new NameIdea({
        name: 'Thirsty Climber',
        needs: [a.mountain],
        powerFits: [a.mountain],
    }),
    new NameIdea({
        name: 'Dizzy Seaman',
        needs: [a.mountain],
        powerFits: [a.mountain],
    }),
    new NameIdea({
        name: 'Cycling Cyclops',
        needs: [a.mountain],
        powerFits: [a.mountain],
    }),
    new NameIdea({
        name: 'Stoned Stone Giant',
        needs: [a.mountain],
        powerFits: [a.mountain],
    }),
    new NameIdea({
        name: 'Beer Cave',
        needs: [a.mountain],
        powerFits: [a.mountain],
    }),
    new NameIdea({
        name: 'Majestic Stallion',
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: 'Virtuous Hammer',
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: 'Heroic Vanguard',
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: 'Shields & Honors',
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: 'Ham For Heroes',
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: 'Polished Long Sword',
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: 'Pints & Plates',
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: "Percival's Pub",
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: 'Victorious Valkyrie',
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: 'Brave Shieldmaiden',
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: "Sir Thundersmite's Tavern",
        needs: [a.knight],
        powerFits: [a.knight],
    }),
    new NameIdea({
        name: 'Humping Cowgirl',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Sinful Rose',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Lustful Oyster',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Busy Succubus',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Glowing Prick',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Slippery Nipple',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Nut Suckers',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Venus Flytrap',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Come Right Inn',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Club 69',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Fluet Players',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Horn Blowers',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Pipe Cleaners',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Fox On The Run',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Pipe Cleaners',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Licking Kitty',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Hot Firefighter',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Smirking Nurse',
        needs: [a.prostitute],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Half-Empty Plate',
        needs: [a.poor],
        powerFits: [a.poor],
    }),
    new NameIdea({ name: 'Holey Sock', needs: [a.poor], powerFits: [a.poor] }),
    new NameIdea({
        name: 'Growling Stomach',
        needs: [a.poor],
        powerFits: [a.poor],
    }),
    new NameIdea({ name: 'Cheesy Sock', needs: [a.poor], powerFits: [a.poor] }),
    new NameIdea({
        name: 'Itchy Pillow',
        needs: [a.poor],
        powerFits: [a.poor],
    }),
    new NameIdea({ name: 'Wooden Coin', needs: [a.poor], powerFits: [a.poor] }),
    new NameIdea({
        name: 'Cheapest Tavern',
        needs: [a.poor],
        powerFits: [a.poor],
    }),
    new NameIdea({ name: 'Grey Mouse', needs: [a.poor], powerFits: [a.poor] }),
    new NameIdea({
        name: 'Smirking Rat',
        needs: [a.poor],
        powerFits: [a.poor],
    }),
    new NameIdea({
        name: 'Hungry Widow',
        needs: [a.poor],
        powerFits: [a.poor],
        worksForBrothel: true,
    }),
    new NameIdea({
        name: 'Caviar Plate',
        needs: [a.rich],
        powerFits: [a.rich],
    }),
    new NameIdea({
        name: "Sir Welfare's Dining House",
        needs: [a.rich],
        powerFits: [a.rich],
    }),
    new NameIdea({ name: 'Red Carpet', needs: [a.rich], powerFits: [a.rich] }),
    new NameIdea({
        name: 'Cashmere Cat',
        needs: [a.rich],
        powerFits: [a.rich],
    }),
    new NameIdea({
        name: 'Lobster Palace',
        needs: [a.rich],
        powerFits: [a.rich],
    }),
    new NameIdea({
        name: 'Champagne & Caviar',
        needs: [a.rich],
        powerFits: [a.rich],
    }),
    new NameIdea({
        name: 'Golden Oyster',
        needs: [a.rich],
        powerFits: [a.rich],
    }),
    new NameIdea({ name: 'Proud Lion', needs: [a.rich], powerFits: [a.rich] }),
    new NameIdea({
        name: 'Hall Of Decadence',
        needs: [a.rich],
        powerFits: [a.rich],
    }),
    new NameIdea({
        name: 'Club Of Debauchery',
        needs: [a.rich],
        powerFits: [a.rich],
    }),
    new NameIdea({
        name: 'Luxury Haven',
        needs: [a.rich],
        powerFits: [a.rich],
    }),
    new NameIdea({
        name: 'Diamonds & Drinks',
        needs: [a.rich],
        powerFits: [a.rich],
    }),
];

export const specialTavernNames = [
    {
        association: association.wealthy,
        names: [
            'Parlament Of Pints',
            'Wine Castle',
            'Paisley Ascot',
            'Ruby Owl',
            "Philosopher's Beard",
            'Dreaming Philantropist',
            'Diligent Scholar',
            'Glimmering Candle',
            'Culture & Cognac',
        ],
    },
    {
        association: association.tiefling,
        names: [
            'Inner Flame',
            'Sarcastic Thinker',
            'Flickering Spark',
            'Malicious Smirker',
            'Horned Watchdog',
            'Macabre Dancer',
            'Devilish Fiddler',
            'Brandy Fountain',
        ],
    },
    {
        association: association.tropical,
        names: [
            'Dancing Coconut',
            'Chatty Parrat',
            'Chilling Monkey',
            'Giggling Cockatoo',
            'Rum Fountain',
            'Tequila Fountain',
            'Sweating Norseman',
            'Dancing Palm Tree',
        ],
    },
    {
        association: association.underdark,
        names: [
            'Dripping Stalagmite',
            'Dancing Mowl',
            'Resting Earthworm',
            'Sleepy Imp',
            'Dancing Dwarf Pit',
            'Tango Tunnel',
            'Underbar',
            'Darkest Beer Brewery',
        ],
    },
    {
        association: association.village,
        names: [
            'Laughing Sheep',
            'Wooden Anvil',
            'Golden Cow',
            'Dancing Farmer',
            'Wimpy City Dweller',
            'Sleeping Hound',
            'Resting Scythe',
            'Brass Plow',
        ],
    },
    {
        association: association.wizard,
        names: [
            'Books & Beverages',
            'Magical Mug',
            'Crystall Bell',
            'Tricking Hat',
            'Fiddling Robe',
            'Smirking Hat',
            'Shots & Scrolls',
            'Wine Fountain',
            'Illiterate Barbarian',
        ],
    },
    {
        association: association.modest,
        names: [
            'Fellow Craftsman',
            'Sweaty Blacksmith',
            'Resting Anvil',
            'Resting Hammer',
            'Silver Nail',
            'Whiskey Fountain',
            'Snot-Nosed Nobleman',
            'Smirking Tailor',
            'Drunken Cobbler',
        ],
    },
];
