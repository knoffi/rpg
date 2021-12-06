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
            mainIng: {
                name: 'Mac Barclay',
                incomeRange: [a.modest],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Grain Scotch  -' }],
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
            mainIng: {
                name: 'Jolly Walker, Grey Label',
                needs: [a.poor],
                misfits: [a.desert, a.tropical],
            },
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
                misfits: [a.desert, a.tropical],
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
                misfits: [a.desert, a.tropical],
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
                misfits: [a.desert, a.tropical],
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
            mainIng: {
                name: 'Jolly Walker, Gold Label',
                needs: [a.rich],
                misfits: [a.desert, a.tropical],
            },
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
            mainIng: {
                name: 'Storming Stallion',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' mouth-coating maltyness with notes of walnut' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Mac Mulligan', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whisky, Blended Scotch  -' }],
            secondSideDishes: [{ name: ' woody notes with a bitter finish' }],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Mac Master', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whisky, Single Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' creamy nuances mingling with notes of orange' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Amber Grace', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' strong oaken flavors with notes of honey' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Smooth Millie', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' a rich, creamy taste with notes of hazelnut' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Freya Mitchel's",
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Scotch  -' }],
            secondSideDishes: [
                { name: ' subtle notes of apples with a spicy finish' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Blackwood Benson',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Single Grain Scotch  -' }],
            secondSideDishes: [
                { name: ' mouth-coating oakyness with a smoky finish' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Fiery Ferguson',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' rich fruityness with a peppery finish' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Copper Noon', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whisky, Single Grain Scotch  -' }],
            secondSideDishes: [
                { name: ' dry, mouthful fruityness with a smoky finish' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Rosetto's", misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whisky, Blended Grain Scotch  -' }],
            secondSideDishes: [
                { name: ' youthful nuances of cream and peach' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Belezebu's", misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whisky, Single Grain Scotch  -' }],
            secondSideDishes: [{ name: ' dry maltyness with a spicy finish ' }],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
];
export const bourbon: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Gregory Gregson',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [{ name: ' dry smokyness with a malty finish' }],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Old Kennedy', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich, creamy flavor with a malty finish' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Mild Miller's", misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Single Batch  -' }],
            secondSideDishes: [
                { name: ' dignified maltyness paired with notes of caramel' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Old Jefferson', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich fruityness with a firm, grassy finish' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Copper Joe', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' strong, fruity flavors with a note of copper' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Oaky Jackson', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' harsh oakyness with a herbal finish ' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'John Beam', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' light notes of sweet corn and a mild spicyness' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: "Jeff Daniel's", misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' light nuttyness with notes of corn and maples' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Lumber Jason', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' woody bitterness with a spicy finish' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Amber Marie', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' youthful fruityness with notes of citrus' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Luster Lacy', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich fruityness with notes of lemon and orange' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: { name: 'Lavish Lucy', misfits: [a.desert, a.tropical] },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' mouth-coating spicyness with a soft, oaky finish' },
            ],
        },
        getSpiritPrice(),
        Drinkable.spirit
    ),
];
