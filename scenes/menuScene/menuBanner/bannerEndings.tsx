import { weServe } from '../addRandomDrink';

const drinkBannerEndings = [
    'Cheers to that!',
    'What a lovely collection!',
    'Such vast supply!',
    'A stock to be proud of!',
    'Customers will have trouble deciding on a beverage!',
    'Every bartenders dream came true!',
    'Cheerio, my old chum!',
    'You know how to party!',
    'Nobody will leave your tavern thirsty!',
    'Wait a second, you even offer my favourite beverage. Could I make a reservation for next friday evening?',
];
const foodBannerEndings = [
    'Dig in!',
    'Bon appetite!',
    'Such a skillful cook!',
    'Such a gastronomic variety!',
    'A menu to be proud of!',
    'Customers will have trouble deciding on a dish!',
    'Every gourmets dream came true!',
    'Have a nice meal!',
    'You know how to throw a banquette!',
    'Nobody will leave your tavern hungry!',
    'Wait a second, you even offer my favourite dish. Could I make a reservation for next friday?',
];
const serviceBannerEndings = [
    'Wait a second, I could use one of those. Do you open on Saturdays?',
    'Interesting services. Do your customers need to make a reservation? I am asking for a friend of mine...',
];

export const bannerEndings = new Map([
    [weServe.drinks, drinkBannerEndings],
    [weServe.food, foodBannerEndings],
    [weServe.service, serviceBannerEndings],
]);
