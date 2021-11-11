import { DescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';
import { a } from './generic';

export const warningMonsters: DescriptionAsset[] = [
    {
        name: 'warning you about the beholder living in this area',
        needs: [a.underdark],
    },
    {
        name: 'warning you about the drows living in this area',
        needs: [a.underdark],
    },
    {
        name: 'warning you about the werewolve living in this area',
        landRange: [a.forest, a.village, a.mountain],
    },
    {
        name: 'warning you about the giant spiders living in this area',
        landRange: [a.forest, a.underdark, a.tropical],
    },
    {
        name: 'warning you about the giants living in this area',
        landRange: [a.mountain],
    },
    {
        name: 'warning you about the trolls living in this area',
        landRange: [a.mountain, a.forest],
    },
    {
        name: 'warning you about the cockatrice living in this area',
        needsOne: [a.desert, a.tropical],
    },
    {
        name: 'warning you about the manticore living in this area',
        needsOne: [a.desert, a.mountain],
    },
    {
        name: 'warning you about the giant serpent living in this area',
        needsOne: [a.desert, a.tropical],
    },
    {
        name: 'warning you about the giant scorpions living in this area',
        needsOne: [a.desert, a.tropical],
    },
    {
        name: 'warning you about the naga living in this area',
        needsOne: [a.desert, a.tropical],
    },
    {
        name: 'warning you about the giant purpur worm living in this area',
        needsOne: [a.desert, a.mountain],
    },
    {
        name: 'warning you about the hag living in this area',
        misfits: [a.underdark, a.desert, a.tropical, a.city, a.haven],
    },
];
export const warningWeather: DescriptionAsset[] = [
    {
        name: 'warning you about a hurricane which is exspected soon',
        landRange: [a.forest, a.tropical],
    },
    {
        name: 'warning you about a massive rainfall which is exspected soon',
        landRange: [a.mountain, a.forest, a.village],
    },
    {
        name: 'warning you about a typhoon which is exspected soon',
        landRange: [a.desert, a.tropical],
    },
    {
        name: 'warning you about a sandstorm which is exspected soon',
        landRange: [a.desert],
    },
    {
        name: 'warning you about the unnatural fog which appears occasionally',
        misfits: [a.desert, a.tropical],
    },
    {
        name: 'warning you about a nearby vulcano which might errupt soon',
        needsOne: [a.mountain, a.tropical],
    },
    {
        name: 'warning you about an underground vulcano which might errupt soon',
        needs: [a.underdark],
    },
    {
        name: 'warning you about a recent earthquake which might happen again',
        landRange: [a.underdark],
    },
    {
        name: 'warning you about the quicksand in the nearby area',
        needs: [a.desert],
    },
    {
        name: 'warning you about the floods which are typical for this season',
        needs: [a.forest],
    },
    {
        name: 'warning you about the flood waves which are typical for this season',
        needs: [a.haven],
    },
    {
        name: 'warning you about the giant, ocean whirlpool which sometimes appears',
        needs: [a.haven],
    },
    {
        name: 'warning you that travelers often get lost in the local swamp',
        landRange: [a.forest, a.village],
    },
    {
        name: 'warning you that travelers often get lost in the eastern parts of the local woods',
        landRange: [a.forest, a.village],
    },
];

export const warningSociety: DescriptionAsset[] = [
    {
        name: 'warning you about a conspiracy in the royal court',
        landRange: [a.city],
    },
    {
        name: 'warning you about a criminal gang which controls the harbor at night',
        landRange: [a.haven],
    },
    {
        name: 'warning you about a big house where pirates and smugglers are gathering every Thursday',
        landRange: [a.haven],
    },
    {
        name: 'telling you a folk tale about a local sea monster',
        landRange: [a.haven],
    },
    {
        name: 'telling you a folk tale about the local lord being a vampire',
        landRange: [a.village],
    },
    {
        name: 'telling you a folk tale about alligators in the sewers',
        landRange: [a.city],
    },
    {
        name: 'warning you that the lords a preparing war',
        landRange: [a.village],
    },
    {
        name: 'warning you that many city guards are corrupt',
        landRange: [a.city, a.haven],
    },
    {
        name: 'warning you that many city guards are hostile to foreigners',
        landRange: [a.city, a.haven],
    },
    {
        name: 'telling you a rumor about a worker from a local brothel who has herpes',
        landRange: [a.city, a.haven, a.village],
    },
    {
        name: 'warning you that the local prostitutes are so experienced that most guests fall in love after a night',
        landRange: [a.city, a.haven],
    },
    {
        name: 'warning you that a thief guild is hiding in the sewers',
        landRange: [a.city],
    },
    {
        name: 'warning you about a secret cult which hides in these mountains',
        landRange: [a.mountain],
    },
    {
        name: 'telling you a folk tale about a local cave inhabited by a giant sorcerer',
        landRange: [a.mountain],
    },
    {
        name: 'warning you about a local gang of lizard people who raid merchants and travellers',
        landRange: [a.mountain],
    },
    {
        name: 'warning you that a group of cultists kidnaps children during the night',
        landRange: [a.city],
    },
    {
        name: 'warning you that drow raiders kidnap people and enslave them',
        landRange: [a.underdark],
    },
    {
        name: 'warning you about a poisonous mushrooms which kills anyone who touches it',
        landRange: [a.underdark],
    },
    {
        name: 'warning you about drinking from the local river without cleansing the water first',
        landRange: [a.underdark, a.mountain, a.forest, a.village],
    },
    {
        name: 'warning you about the tax-collecting sheriff and his harsh methods',
        landRange: [a.village],
    },
    {
        name: 'telling you a folk tale about a tiefling who haunts people in their dreams',
        landRange: [a.village],
    },
];
