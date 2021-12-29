import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const lagers: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Gold Brew',
                landRange: [a.city],
                incomeRange: [a.wealthy, a.rich],
                raceRange: [a.dwarf, a.human, a.gnome, a.halfling],
                key: AssetKey.BEER_lager,
            },
            firstSideDishes: [
                {
                    name: 'Golden color, heavenly taste, made after Dwarvish recipe',
                },
            ],
        },
        1.2,
        // 1.2 means that this beer is a little bit more expensive, if you compare it to other beers from a rich/wealthy tavern! (1.0 = normal)
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Crappy Beer',
                needs: [a.poor],
                misfits: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'It is very bitter, but it is a cheap way to get drunk!',
                },
            ],
        },
        0.5,
        // 0.5 means that this beer is very cheap, if you compare it to other beers from a poor tavern!  (1.0 = normal)
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Blacksmith Beer',
                needs: [a.modest],
                misfits: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'Very refreshing after a busy day full of hard work!',
                },
            ],
        },
        1.0,
        // 1.0 means that this beer has a normal price for a modest tavern
        Drinkable.beer
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Black Forest Beer',
                needs: [a.modest],
                misfits: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'Made by immigrants from the mystical Black Forest! ',
                },
            ],
        },
        1,
        // leaving out the number is like using 1.0 as comparison number: Therefore, Blacksmith Beer and Black Forest Beer have the same prices
        Drinkable.beer
    ),
];
