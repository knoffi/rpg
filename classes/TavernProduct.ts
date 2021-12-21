//more ideas: water, coffee, tea, juice, liqueur, cocktail
export enum Drinkable {
    lemonade = 'Lemonade',
    beer = 'Beer',
    wine = 'Wine',
    spirit = 'Spirit',
}
export enum Eatable {
    breakfast = 'Breakfast',
    sideDish = 'Small Dish',
    dessert = 'Dessert',
    mainDish = 'Main Dish',
}

export enum Services {
    room = 'Rooms',
    pension = 'Package Deal',
    entertainment = 'Entertainment',
    gambling = 'Gambling',
    prostitute = 'Adult Pleasures',
}

export type MenuCategory = Eatable | Drinkable;
