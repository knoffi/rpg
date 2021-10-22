import { ITavernAsset } from '../helpingFunctions/ITavernAsset';
import { association } from './association';

//more ideas: water, coffee, tea, juice, liqueur, cocktail
export enum Drinkable {
    lemonade = 'Lemonade',
    beer = 'Beer',
    wine = 'Wine',
    spirit = 'Spirit',
}
// so that a tavern does not only
export enum Eatable {
    breakfast = 'Breakfast',
    sideDish = 'Side Dishes & Starters',
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

export class TavernProduct implements ITavernAsset {
    public name!: string;
    //price in copper for easier translation into gold,silver, etc.
    public copperPrice!: number;
    public associations!: association[];
    public category!: MenuCategory;
    public isUserMade?: boolean;
    public description?: string;

    constructor(
        name: string,
        price: number,
        associations: association[],
        category: MenuCategory,
        description?: string,
        isUserMade?: boolean
    ) {
        this.name = name;
        this.copperPrice = price;
        this.associations = associations;
        this.category = category;
        this.description = description;
        this.isUserMade = isUserMade;
    }

    // public isDrink = () => {
    //     return Object.values(Drinkable).some((categoryName) => {
    //         return categoryName === this.category;
    //     });
    // };

    // public isFood = () => {
    //     return Object.values(Eatable).some((categoryName) => {
    //         return categoryName === this.category;
    //     });
    // };

    // public resetCategory = (category: MenuCategory) => {
    //     this.category = category;
    // };
}
