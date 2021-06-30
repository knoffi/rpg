import { association, incomeAssociations } from '../../../classes/association';
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

export const specialTavernNames = [
    {
        association: association.barbarian,
        names: [
            'Bloody Axe',
            'Raging Minotaur',
            'Mead Fountain',
            'Savage Hunter',
            'Cowardly Wizard',
            'Resting Ogre',
            'Feasting Tribesman',
        ],
    },
    {
        association: association.adventurer,
        names: [
            'Lost Tome',
            "Traveller's Fortune",
            'Golden Mead Jar',
            'Resting Spell Scroll',
            'Anxious Philistine',
            'Whispering Sphinx',
            'Beholding Beholder',
            'Aliba Bar',
        ],
    },
    {
        association: association.bard,
        names: [
            'Dancing Rapier',
            'Whine-Loving Juggler',
            'Virgin Barmaid',
            'Virgin Bartender',
            'Wine Fountain',
            'Stuffy Priest',
            'Passionate Fiddler',
            'Silver Drum',
            'Laughing Backpipes',
        ],
    },
    {
        association: association.city,
        names: [
            'Warm-Hearted Chancellor',
            'Caroling Chimney',
            'Drink Manufacture',
            'Joyful Judge',
            'Incest Hillbilly',
            'Stony Side Walk',
            'Resting Crane',
        ],
    },
    {
        association: association.cleric,
        names: [
            'Blessed Virgin',
            'Candle Of Virtues',
            'Pillars of Wisdom',
            'Retarded Heathen',
            'Heaven On Earth',
            'Heavenly Pitcher',
            'Smiling Monk',
            'Bald-Headed Monk',
            'Joyful Priestess',
        ],
    },
    {
        association: association.thief,
        names: [
            'Tight Lips',
            'Resting Crowbar',
            'Smiling Dagger',
            'Liqueur Fountain',
            'Lousy Police Dog',
            'Silent Whisper',
            'Silent Lamb',
            'Sneaky Bartender',
            'Wines & Whispers',
        ],
    },
    {
        association: association.desert,
        names: [
            'Wondrous Lamp',
            'Empty Hourglass',
            'Purple Turban',
            'Resting Camel',
            'Thirsty Tourist',
            'Grinning Jakal',
            'Black Scorpion',
            'Mini Pyramid',
            'Slumbering Sphinx',
        ],
    },
    {
        association: association.soldier,
        names: [
            'Dancing Blade',
            'Resting Chain Shirt',
            'Roasted Boar',
            'Snot-Nosed Knight',
            'Drunk Archer',
            'Sleepy Spearman',
            'Lucky Vanguard',
            'Shots For Shooters',
            'Iron Beer Hall',
        ],
    },
    {
        association: association.drow,
        names: [
            'Venomous Spider',
            'Bare-Naked Male',
            'Submissive Male',
            'Jeweled Web',
            'Tortured High Elf',
            'Broken Wood Elf',
            'Silent Dagger',
            'Black-Hearted Mistress',
            'Relentless Queen',
        ],
    },
    {
        association: association.druid,
        names: [
            'Honey Falcon',
            'Busy Bee',
            'Well-Stuffed Pipe',
            'Fabulous Fungus',
            'Lost Townsmen',
            'Womb Of Nature',
            'Mead-Slurping Bear',
            'Tree Of Resting',
        ],
    },
    {
        association: association.dwarf,
        names: [
            'Resting Pickaxe',
            'Fortune Forge',
            'Malty Tankard',
            'Beer Fountain',
            'Faint-Hearted Elf',
            'Mead Cave',
            'Booze Tunnel',
            'Beard & Beers',
            'Beardy Barmaid ',
        ],
    },
    {
        association: association.elf,
        names: [
            'Nectar Fountain',
            'Ivory Harp',
            'Slumbering Fairy',
            'Mahagony Temple',
            'Stinky Dwarf',
            'Moonlight Castle',
            'Wines & Warmth',
            'Resting Bow',
            'Shining Night Star',
        ],
    },
    {
        association: association.assasine,
        names: [
            'Lurking Hunter',
            'Silent Lamb',
            'Baleful Dagger',
            'Insidious Laughter',
            'Sinister Judge',
            'Dark Alley',
            'Black Stallion',
        ],
    },
    {
        association: association.forest,
        names: [
            'Drunken Fox',
            'Resting Boar',
            'Dancing Woodpecker',
            'Ancient Oak',
            'Rabbit Hole',
            'Bear Cave',
            "Hog's Nest",
            'Vigilant Pinetree',
        ],
    },
    {
        association: association.gnome,
        names: [
            'Resting Gear',
            'Hall of Charades',
            'Bubbling Beer',
            'Tipsy Giant',
            'Place For Inventions',
            'Giggling Goblin',
            'Roaring Steam Engine',
            'Ticking Clock',
        ],
    },
    {
        association: association.halfling,
        names: [
            'Smiling Sun',
            'Smirking Pony',
            'Buttered Bread',
            'Whiny Ogre',
            'Hungry Hazelnut',
            'Resting Rainbow',
            'Dancing Straw Hat',
        ],
    },
    {
        association: association.haven,
        names: [
            'Hidden Booty',
            'Ale Fountain',
            'Friendly Flounder',
            'Dancing Lobster',
            'Resting Anchor',
            'Drowning Landlubber',
            'Savoring Shark',
            'Oily Oyster',
        ],
    },
    {
        association: association.human,
        names: [
            'Resting Hound',
            'Dancing Kitty',
            'Tiny Gnome',
            'Tiny Halfling',
            'Resting Carriage',
            'Vodka Fountain',
            'Wonder Bar',
            'Boosting Brewery',
            'Schnitzel Outpost',
        ],
    },
    {
        association: association.mountain,
        names: [
            'Eagle Nest',
            'Thirsty Miner',
            'Humming Cave',
            'Resting Climber',
            'Dizzy Seaman',
            'Drunken Ogre',
            'Ancient Stone Hag',
            'Cycling Cyclops',
        ],
    },
    {
        association: association.knight,
        names: [
            'Polished Plate Armor',
            'Majestic Stallion',
            'Honorful Mace',
            'Virtuous Hammer',
            'Heroic Vanguard',
            'Shields & Honors',
            'Ham For Heroes',
        ],
    },
    {
        association: association.poor,
        names: [
            'Half-Empty Plate',
            'Cheap Bartender',
            'Holey Sock',
            'Growling Stomach',
            'Forgetful Bailiff',
            'Cheesy Sock',
            'Resting Servant',
            'Itchy Pillow',
            'Wooden Coin',
        ],
    },
    {
        association: association.prostitute,
        names: [
            'Humping Cowgirl',
            'Sinful Rose',
            'Lustful Oyster',
            'Emptied Nuts',
            'Busy Succubus',
            'Glowing Prick',
            'Slippery Nipple',
            'Club 69',
            'Smirking Nurse',
            'Hot Firefighter',
            'Venus Flytrap',
            'Come Right Inn',
            'Licking Kitty',
            'Fox On The Run',
            'Pipe Cleaners',
            'Fluet Players',
            'Horn Blowers',
        ],
    },
    {
        association: association.rich,
        names: [
            'Voluptuous Feast',
            'Caviar Plate',
            'Champagne Fountain',
            'Red Carpet',
            'Cashmere Cat',
            'Lobster Palace',
            'Champagne & Caviar',
            'Golden Oyster',
            'Proud Lion',
            'Hall of Decadence',
            'Luxury Haven',
        ],
    },
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
