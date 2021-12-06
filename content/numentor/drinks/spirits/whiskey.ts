import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { PriceSetter } from '../../../../classes/idea/PriceSetter';
import { Drinkable } from '../../../../classes/TavernProduct';
import { drinkPrices } from '../../../../scenes/menuScene/priceSetting/drinkPriceSetters';
import { adjustPriceSetter } from '../../../../scenes/menuScene/priceSetting/priceSetters';
const a = association;
export const getSpiritPrice = (
    factors?: number | Partial<PriceSetter>
): PriceSetter => {
    return adjustPriceSetter(drinkPrices[Drinkable.spirit], factors);
};
export const scotch: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Mac Barclay', incomeRange: [a.modest] },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  - ' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
            secondSideDishes: [
                {
                    name: ' dry taste with a subtle oaken note',
                },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Jolly Walker, Grey Label', needs: [a.poor] },
            firstSideDishes: [
                {
                    name: 'Whisky, Blended Scotch  - fruity notes followed by bitterness',
                },
            ],
        },
        getSpiritPrice(1.3),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Jolly Walker, Red Label',
                incomeRange: [a.modest],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Blended Grain Scotch  - fuity notes with a peppery spicyness',
                },
            ],
        },
        getSpiritPrice({ [a.modest]: 1.1 }),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Jolly Walker, Blue Label',
                incomeRange: [a.modest],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Blended Malt Scotch  - fruity notes with a rich, creamy finish',
                },
            ],
        },
        getSpiritPrice({ [a.modest]: 1.2 }),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Jolly Walker, Silver Label',
                incomeRange: [a.wealthy],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Single Grain Scotch  - fruity notes with a firm, spicy finish',
                },
            ],
        },
        getSpiritPrice({ [a.modest]: 1.5 }),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Jolly Walker, Gold Label', needs: [a.rich] },
            firstSideDishes: [
                {
                    name: 'Whisky, Single Malt Scotch  - fruity notes with a mouth-coating maltyness',
                },
            ],
        },
        getSpiritPrice(0.8),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Storming Stallion' },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Mac Mulligan' },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Mac Master' },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Amber Grace' },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Smooth Millie' },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Freya Mitchel's" },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Blackwood Benson' },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Fiery Ferguson' },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Copper Noon' },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Rosetto's" },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Belezebu's" },
            firstSideDishes: [
                { name: 'Whisky, Single Malt Scotch  -' },
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Malt Scotch  -' },
                { name: 'Whisky, Blended Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
];
export const bourbon: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Gregory Gregson' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Old Kennedy' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Mild Miller's" },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Old Jefferson' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Copper Joe' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Oaky Jackson' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'John Beam' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Jeff Daniel's" },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Jeff Daniel's" },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Lumber Jason' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Amber Marie' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Luster Lacy' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Lavish Lucy' },
            firstSideDishes: [
                { name: 'Whiskey, Bonded Bourbon  -' },
                { name: 'Whiskey, Straight Bourbon  -' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
];
