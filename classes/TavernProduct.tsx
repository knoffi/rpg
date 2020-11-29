import { ITavernAsset } from '../helpingFunctions/ITavernAsset';
import { association } from './Adjectives';

//more ideas: water, coffee, tea, juice, liqueur, cocktail
export enum drinkCategory {
    lemonade = 'Lemonade',
    beer = 'Beer',
    wine = 'Wine',
    spirit = 'Spirit',
}
// so that a tavern does not only
export enum foodCategory {
    breakfast = 'Breakfast',
    appetizer = 'Appetizer',
    sideDish = 'Side Dish',
    dessert = 'Dessert',
    mainDish = 'Main Dish',
}

export enum serviceCategory {
    room = 'Rooms',
    pension = 'Package Deal',
    entertainment = 'Entertainment',
    gambling = 'Gambling',
    prostitute = 'Adult Pleasures',
}

export type menuCategory = foodCategory | drinkCategory;

export class TavernProduct implements ITavernAsset {
    public name!: string;
    //price in copper for easier translation into gold,silver, etc.
    //TODO: make prices also for DSA and other famous Pen&Paper
    public copperPrice!: number;
    public associations!: association[];
    public category!: menuCategory;
    private description?: string;

    constructor(
        name: string,
        price: number,
        associations: association[],
        category: menuCategory,
        description?: string
    ) {
        this.name = name;
        this.copperPrice = price;
        this.associations = associations;
        this.category = category;
        if (description) {
            this.description = description;
        }
    }

    public getNumberOfHits(associationChecklist: association[]) {
        return associationChecklist.filter((association) => {
            return this.associations.includes(association);
        }).length;
    }

    public isFit(
        fits: association[],
        misfits: association[],
        fitsBound: number,
        misfitsBound: number
    ) {
        let countFits = 0;
        let countMisfits = 0;
        fits.forEach((association) => {
            if (this.associations.includes(association)) {
                countFits++;
            }
        });
        misfits.forEach((association) => {
            if (this.associations.includes(association)) {
                countMisfits++;
            }
        });
        return countFits >= fitsBound && countMisfits <= misfitsBound;
    }
    public getCopperPrice = (factor: any) => {
        return Math.round(this.copperPrice * (1 + factor / 10));
    };

    public getAssociationOverwrite(association: association) {
        return new TavernProduct(
            this.name,
            this.copperPrice,
            [association],
            this.category,
            this.description
        );
    }

    public isDrink = () => {
        let isDrink = false;
        Object.values(drinkCategory).forEach((categoryName) => {
            if (categoryName === this.category) {
                isDrink = true;
            }
        });
        return isDrink;
    };

    public isFood = () => {
        let isFood = false;
        Object.values(foodCategory).forEach((categoryName) => {
            if (categoryName === this.category) {
                isFood = true;
            }
        });
        return isFood;
    };

    public resetCategory = (category: menuCategory) => {
        this.category = category;
    };
}
