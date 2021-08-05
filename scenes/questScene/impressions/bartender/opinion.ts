import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { defaultPowerFitConcepts } from '../../../../classes/idea/powerFitConcepts/powerFitConcepts';
export const bartenderOpinions: ImpressionIdea[] = [
    new ImpressionIdea(
        { name: 'Dislikes ' },
        [
            {
                name: 'male guests',
            },
            {
                name: 'female guests',
            },
            {
                name: 'dwarves',
            },
            {
                name: 'elves',
            },
            {
                name: 'barbarians',
            },
            {
                name: 'humans',
            },
            {
                name: 'magic',
            },
            {
                name: 'tieflings',
            },
            {
                name: 'gnomes',
            },
            {
                name: 'drows',
            },
            {
                name: 'halflings',
            },
            {
                name: 'hunters',
            },
            {
                name: 'unpolite guests',
            },
            {
                name: 'poor-looking guests',
            },
            {
                name: 'fancy-dressed guests',
            },
            {
                name: 'decadent guests',
            },
            {
                name: 'guests without manners',
            },
            {
                name: 'weak-looking guests',
            },
            {
                name: 'beardy guests',
            },
            {
                name: 'rich-looking guests',
            },
            {
                name: 'foreigners',
            },
            {
                name: 'adventurers',
            },
        ],
        Noticable.bartender,
        undefined,
        undefined,
        defaultPowerFitConcepts.harmony
    ),
];
