import { association } from '../../../../classes/association';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
const a = association;
const raidingBandits = [
    a.barbarian,
    a.soldier,
    a.forest,
    a.mountain,
    a.underdark,
    a.knight,
];
const pirates = [a.haven, a.tropical];
export const thiefIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'A group of thieves',
            misfits: [...raidingBandits, ...pirates],
            needs: [a.thief],
        },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),

    new ImpressionIdea(
        { name: 'A thief', misfits: [...raidingBandits, ...pirates] },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A drug dealer', misfits: [...raidingBandits, ...pirates] },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A hooded person' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A man with a scar on his face' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A woman with a scar on her face' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A man with a clan tattoo', misfits: [...pirates] },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A woman with a clan tattoo', misfits: [...pirates] },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A man with a scar on his face' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A woman with a scar on her face' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A one-handed man' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A  one-handed woman' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A squinting man' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        { name: 'A  squinting woman' },
        [emptyDescriptionAsset],
        Noticable.someCustomers
    ),
    // is sharpening a dagger (single person)
    // is polishing a dagger (single person)
    // is secretly counting the gold inside a purse
    // is secretly watching you
    // is turning around immediatly after you entered the tavern
    // is turning away immediatly after you entered the tavern
    // is warning you that someone is following you
    // is playing card games / darts
    // is secretly planning a "break-in" (misfits: a.wealthy, a.rich)
    // is hitting a prostitute
    // is arguing with his/her/a small monkey which sits on the table
    // is getting his prison shakles removed by another guest (misfits: a.wealthy, a.rich)
    // is getting a gang tattoo from another guest (misfits: a.wealthy, a.rich)
    // is buying a mysterious potion from another guest
    // is threatening another guest
    // is celebrating a friend who got released from prison
    // is celebrating a friend who escaped from prison
    // is celebrating a successful break-in
    // is celebrating a successful break-out

    // is sharpening an axe/a sword (single person)
    // is polishing an axe/a sword (single person)
    // is secretly (?) counting the gold inside a purse
    // is secretly watching you
    // is turning around immediatly after you entered the tavern
    // is turning away immediatly after you entered the tavern
    // is warning you that someone is following you
    // is playing crude drinking games
    // is secretly planning a raid (misfits: a.wealthy, a.rich)
    // is hitting a prostitute
    // is patting a wolve which lies next to the table (barbarian)
    // is getting his prison shakles removed by another guest (misfits: a.wealthy, a.rich)
    // is getting a gang tattoo from another guest (misfits: a.wealthy, a.rich)
    // is buying a mysterious potion from another guest
    // is threatening another guest
    // is celebrating a friend who got released from prison
    // is celebrating a friend who escaped from prison
    // is celebrating a successful raid
    // is celebrating a successful break-out

    // is talking with a parrot about a lost treasure map
    // is talking with a parrot about a mythical treasure
    // is talking with a parrot about a mythical sea folk
    // is talking with a parrot about a drowned, ancient civilizations
    // is talking with a parrot about a sea monster
    // is talking with a parrot about a coming storm
    // is looking for new crew members
    // is ordering a new bottle of rum (pattern rum on the menu)

    // is talking with a lizard about a lost drow temple (needs a.underdark)
    // is talking with a lizard about a lost elven temple (needs a.underdark)
    // is talking with a lizard about a lost naga temple (needs a.desert)
    // is talking with a lizard about the lost  temple of a snake goddess (needs a.desert)
    // is talking with a lizard about the lost  temple of a jakal god (needs a.desert)
    // is talking with a lizard about a lost desert temple (needs a.desert)
    // is smoking a hookah
    // is talking with a lizard about a mythical treasure
    // is talking with a lizard about a mythical sea folk
    // is talking with a lizard about a drowned civilizations
    // is talking with a lizard about a sea monster
    // is talking with a lizard about a coming storm
];
