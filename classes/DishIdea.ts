import { association } from './association';
import { IngredientsIdea } from './mainDishSuperStructures';
import { PriceSetter } from './PriceSetter';
import { menuCategory, TavernProduct } from './TavernProduct';
export class DishIdea {
    private ingredients: IngredientsIdea;
    private averagePrice: number | PriceSetter;
    private category: menuCategory;

    constructor(
        ingredients: IngredientsIdea,
        averagePrice: number | PriceSetter,
        category: menuCategory
    ) {
        this.ingredients = ingredients;
        this.averagePrice = averagePrice;
        this.category = category;
    }

    private ingredientCollectionFitsToTavern(
        tavernFits: association[],
        isExcludedByPrefix: (name: string) => boolean,
        ingredients?: { name: string; fitRange: association[] }[]
    ) {
        if (!ingredients || ingredients.length === 0) {
            return true;
        } else {
            return ingredients.some((ingredient) =>
                this.ingredientFitsToTavern(
                    tavernFits,
                    ingredient,
                    isExcludedByPrefix
                )
            );
        }
    }

    private ingredientFitsToTavern(
        tavernFits: association[],
        ingredient: { name: string; fitRange: association[] },
        isExcludedByPrefix: (name: string) => boolean
    ) {
        return (
            tavernFits.filter(
                (fit) =>
                    !ingredient.fitRange.includes(fit) &&
                    fit !== association.empty
            ).length === 0 && !isExcludedByPrefix(ingredient.name)
        );
    }

    public satisfiesTavernFits(
        tavernFits: association[],
        isExcludedByPrefix: (name: string) => boolean
    ) {
        const mainIngredientFits = this.ingredientFitsToTavern(
            tavernFits,
            this.ingredients.mainIng,
            isExcludedByPrefix
        );
        const firstSideIngredientFits = this.ingredientCollectionFitsToTavern(
            tavernFits,
            isExcludedByPrefix,
            this.ingredients.firstSideDishes
        );
        const secondSideIngredientFits = this.ingredientCollectionFitsToTavern(
            tavernFits,
            isExcludedByPrefix,
            this.ingredients.secondSideDishes
        );
        const thirdSideIngredientFits = this.ingredientCollectionFitsToTavern(
            tavernFits,
            isExcludedByPrefix,
            this.ingredients.thirdSideDishes
        );

        return (
            mainIngredientFits &&
            firstSideIngredientFits &&
            secondSideIngredientFits &&
            thirdSideIngredientFits
        );
    }

    private getFilteredSideIngredientNames(
        tavernFits: association[],
        isExcludedByPrefix: (name: string) => boolean,
        ingredients?: { name: string; fitRange: association[] }[]
    ) {
        // can be improved with flatMap(stuff => [stuff.name] or [ ] ) ?
        if (!ingredients) {
            return [''];
        } else {
            const filteredIngredients = ingredients.filter((ingredient) =>
                this.ingredientFitsToTavern(
                    tavernFits,
                    ingredient,
                    isExcludedByPrefix
                )
            );
            return filteredIngredients.map((ingredient) => ingredient.name);
        }
    }

    public getMainIngredientName() {
        return this.ingredients.mainIng.name;
    }

    public getDishesForTavern(
        tavernFits: association[],
        isExcludedByPrefix: (name: string) => boolean
    ) {
        const firstSides = this.getFilteredSideIngredientNames(
            tavernFits,
            isExcludedByPrefix,
            this.ingredients.firstSideDishes
        );
        const secondSides = this.getFilteredSideIngredientNames(
            tavernFits,
            isExcludedByPrefix,
            this.ingredients.secondSideDishes
        );
        const thirdSides = this.getFilteredSideIngredientNames(
            tavernFits,
            isExcludedByPrefix,
            this.ingredients.thirdSideDishes
        );
        return firstSides.flatMap((firstSide) =>
            secondSides.flatMap((secondSide) =>
                thirdSides.map((thirdSide) =>
                    this.getDishFromNames(
                        this.ingredients.mainIng.name,
                        firstSide,
                        secondSide,
                        thirdSide,
                        tavernFits
                    )
                )
            )
        );
    }
    private getDishFromNames(
        mainIngredient: string,
        firstSideIngredient: string,
        secondSideIngredient: string,
        thirdSideIngredient: string,
        tavernFits: association[]
    ) {
        const name =
            mainIngredient +
            firstSideIngredient +
            secondSideIngredient +
            thirdSideIngredient;
        //only works as long as fits of tavern equal fits of build tavern product
        const price = this.getPriceFromFits(tavernFits);
        const newMainDish = new TavernProduct(
            name,
            price,
            tavernFits,
            this.category
        );
        return newMainDish;
    }

    private getPriceFromFits(fits: association[]) {
        if (typeof this.averagePrice === 'number') {
            return this.getPriceFluctuation(this.averagePrice);
        } else {
            const income = fits.find((fit) =>
                Object.keys(this.averagePrice).includes(fit)
            );
            console.log(income);
            if (income === association.poor) {
                return this.getPriceFluctuation(this.averagePrice[income]);
            }
            if (income === association.worker) {
                return this.getPriceFluctuation(this.averagePrice[income]);
            }
            if (income === association.sophisticated) {
                return this.getPriceFluctuation(this.averagePrice[income]);
            }
            if (income === association.rich) {
                return this.getPriceFluctuation(this.averagePrice[income]);
            }
            return (
                Math.floor(
                    this.averagePrice.modest + this.averagePrice.wealthy
                ) / 2
            );
        }
    }
    private getPriceFluctuation(price: number) {
        const randomPrice = Math.floor(price * (0.95 + Math.random() * 0.1));
        return randomPrice > 0 ? randomPrice : 1;
    }
}
