import { association } from '../../../classes/Adjectives';
import { foodCategory, TavernProduct } from '../../../classes/TavernProduct';
const a = association;

export const porridgeTemplate = (
    areaBases: { base: string; areas: association[] }[],
    income: association,
    areaToppingMap: Map<association, string[]>,
    price: number
) => {
    const porridgeVariants = [] as TavernProduct[];
    let garnishPhrase = ' garnished with ';
    areaBases.forEach((areaBase) => {
        if (income === association.poor || income === association.worker) {
            garnishPhrase = ' with ';
        }
        areaBase.areas.forEach((area) => {
            let toppings = areaToppingMap.get(area);
            if (!toppings) {
                toppings = [];
            }
            toppings.forEach((topping) => {
                let productName = 'Porridge (' + areaBase.base + ')';
                productName = productName + garnishPhrase + topping;
                porridgeVariants.push(
                    new TavernProduct(
                        productName,
                        Math.floor(price + ((Math.random() - 0.5) * price) / 3),
                        [area, income],
                        foodCategory.breakfast
                    )
                );
            });
        });
    });
    return porridgeVariants;
};

const workerPorridge = porridgeTemplate(
    [
        { base: 'Brown Oat', areas: [a.village] },
        { base: 'Oat', areas: [a.city, a.haven] },
        { base: 'Wild Oat', areas: [a.forest] },
        { base: 'Buckwheat', areas: [a.village] },
        { base: 'Millet', areas: [a.desert, a.mountain] },
        { base: 'Maize', areas: [a.tropical] },
        { base: 'Rice', areas: [a.tropical] },
        { base: 'Dark Oat', areas: [a.underdark] },
    ],
    a.worker,
    new Map([
        [
            a.village,
            [
                'Apple',
                'Plum',
                'Walnuts',
                'Raisins',
                'Pears',
                'Cherries',
                'Strawberries',
            ],
        ],
        [
            a.city,
            [
                'Applesauce',
                'Plum',
                'Walnuts',
                'Raisins',
                'Pear Marmalade',
                'Pickled Cherries',
            ],
        ],
        [a.forest, ['Honey', 'Raspberries', 'Blackberries', 'Apple']],
        [
            a.mountain,
            [
                'Honey',
                'Raspberries',
                'Blackberries',
                'Elderberries',
                'Goat Cheese',
                'Mushrooms',
            ],
        ],
        [
            a.haven,
            [
                'Pickled Cherries',
                'Banana',
                'Pickled Herring',
                'Rum Raisins',
                'Sugar',
            ],
        ],
        [a.desert, ['Honey', 'Goat Cheese', 'dates', 'Cinnamon & Sugar']],
        [a.tropical, ['Banana', 'Peach', 'Papaya', 'Mango', 'Pineapple']],
        [a.underdark, ['Midnightberries', 'Earth Apple', 'Mule Bacon']],
    ]),
    12
);
const wealthyPorridge = porridgeTemplate(
    [
        { base: 'White Oat', areas: [a.city, a.haven, a.forest, a.village] },
        { base: 'Night Oat', areas: [a.underdark] },
        { base: 'Copper Millet', areas: [a.desert, a.mountain] },
        { base: 'Moonshine Rice', areas: [a.tropical] },
    ],
    a.sophisticated,
    new Map([
        [
            a.village,
            [
                'Cinnamon & Apples',
                'Raspberry & Peanuts',
                'Chocolate & Hazelnuts',
                'Bacon & Mushrooms',
                'White Chocolate & Walnuts',
                'Strawberries & Cream',
            ],
        ],
        [
            a.city,
            [
                'Cinnamon & Apples',
                'Raspberry & Peanuts',
                'Chocolate & Hazelnuts',
                'Bacon & Mushrooms',
                'White Chocolate & Walnuts',
                'Strawberries & Cream',
            ],
        ],
        [
            a.forest,
            [
                'Cinnamon & Apples',
                'Raspberry & Peanuts',
                'Chocolate & Hazelnuts',
                'Bacon & Mushrooms',
                'White Chocolate & Walnuts',
                'Strawberries & Cream',
            ],
        ],
        [
            a.haven,
            [
                'Cinnamon & Apples',
                'Raspberry & Peanuts',
                'Chocolate & Hazelnuts',
                'Bacon & Mushrooms',
                'White Chocolate & Walnuts',
                'Strawberries & Cream',
            ],
        ],
        [a.underdark, ['Caramelized Mule Filet']],
        [
            a.desert,
            [
                'Cinnamon & Dates',
                'Goat Cheese & Honey',
                'Chocolate & Hazelnuts',
                'Lamb Chops & Goat Cheese',
            ],
        ],
        [
            a.mountain,
            [
                'Cinnamon & Dates',
                'Goat Cheese & Honey',
                'Chocolate & Hazelnuts',
                'Lamb Chops & Goat Cheese',
            ],
        ],
        [
            a.tropical,
            [
                'Peaches & Maracuja',
                'Dragon Fruit & Oranges',
                'Durian Fruit & Coconut',
                'Caramelized Shrimps',
            ],
        ],
        [
            a.underdark,
            [
                'Cinnamon & Dates',
                'Goat Cheese & Honey',
                'Chocolate & Hazelnuts',
                'Lamb Chops & Goat Cheese',
            ],
        ],
    ]),
    25
);

const poorPorrodge = porridgeTemplate(
    [
        { base: 'Grey Oat', areas: [a.village, a.city, a.forest, a.haven] },
        { base: 'Millet', areas: [a.mountain, a.desert, a.underdark] },
        { base: 'Rice', areas: [a.tropical] },
    ],
    a.poor,
    new Map([
        [a.village, ['Half an Apple', 'a dash of Applesauce', 'fried Rat']],
        [a.city, ['Half a Pear', 'a dash of Plum Jam', 'fried Dove']],
        [a.forest, ['Half an Apple', 'a dash of Honey', 'fried Mouse']],
        [a.haven, ['Rum', 'two Sardines', 'two Anchovies']],
        [a.tropical, ['Rum', 'one Shrimp', 'half an Orange']],
        [a.mountain, ['Salt & Pepper', 'a Slice of Goat Cheese', 'two Dates']],
        [a.desert, ['Salt', 'a Slice of Goat Cheese', 'two Dates']],
        [a.underdark, ['Salt', 'Brandy', 'fried Rat']],
    ]),
    4
);

export const porridge = workerPorridge.concat(wealthyPorridge, poorPorrodge);
