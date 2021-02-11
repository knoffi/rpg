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

const BINDING_EXTREME_INCOME_ASSOCIATIONS = [
    association.prostitute,
    association.rich,
    association.poor,
];

export class TavernProduct implements ITavernAsset {
    public name!: string;
    //price in copper for easier translation into gold,silver, etc.
    //TODO: make prices also for DSA and other famous Pen&Paper
    public copperPrice!: number;
    public associations!: association[];
    public category!: menuCategory;
    public isUserMade?: boolean;
    public description?: string;

    constructor(
        name: string,
        price: number,
        associations: association[],
        category: menuCategory,
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
        const proCount = this.associations.filter((association) => {
            return misfits.includes(association);
        }).length;
        const conCount = this.associations.filter((association) => {
            return fits.includes(association);
        }).length;

        return proCount >= fitsBound && conCount <= misfitsBound;
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
        return Object.values(drinkCategory).some((categoryName) => {
            return categoryName === this.category;
        });
    };

    public isFood = () => {
        return Object.values(foodCategory).some((categoryName) => {
            return categoryName === this.category;
        });
    };

    public resetCategory = (category: menuCategory) => {
        this.category = category;
    };

    public getNecessarities() {
        return this.associations
            .slice()
            .filter((association) =>
                BINDING_EXTREME_INCOME_ASSOCIATIONS.includes(association)
            );
    }
}
