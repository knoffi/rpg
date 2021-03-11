import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { association } from './association';
import { IngredientList, IngredientStore } from './mainDishSuperStructures';
import { foodCategory, TavernProduct } from './TavernProduct';
export class mainDishCookingBook {
    private ingredients: IngredientStore;

    constructor(ingredients: IngredientStore) {
        this.ingredients = ingredients;
    }

    public getModestDishes() {
        const greenIngredients = this.ingredients.greens.modest;
        const carbIngredients = this.ingredients.carbs.modest;
        const defaultSauces = [''];
        const modestMainDishes = this.ingredients.main.modest.flatMap(
            (mainIngredient) =>
                (mainIngredient.sauces || defaultSauces).flatMap((sauce) =>
                    mainIngredient.areas.flatMap((area) =>
                        this.getFittingSideDishNames(
                            area,
                            greenIngredients
                        ).flatMap((greenIngredientName) =>
                            this.getFittingSideDishNames(
                                area,
                                carbIngredients
                            ).map((carbIngredientName) =>
                                this.getModestDishFromData(
                                    mainIngredient.name,
                                    carbIngredientName,
                                    greenIngredientName,
                                    area,
                                    sauce
                                )
                            )
                        )
                    )
                )
        );
        return modestMainDishes.slice(0, 10090);
    }
    private getModestDishFromData(
        mainIngredient: string,
        carbIngredient: string,
        greenIngredient: string,
        area: association,
        sauce = ''
    ) {
        const name =
            mainIngredient +
            ' ' +
            sauce +
            (sauce === '' ? '' : ' ') +
            greenIngredient +
            ' and ' +
            carbIngredient;
        const realPrice =
            Math.floor(
                standardBasePrice.modest * 2 * (0.95 + Math.random() * 0.1)
            ) + 1;
        const newMainDish = new TavernProduct(
            name,
            realPrice,
            [association.modest, area],
            foodCategory.mainDish
        );
        return newMainDish;
    }

    private getFittingSideDishNames(
        dishArea: association,
        sideDishes: IngredientList
    ) {
        return sideDishes
            .filter((sideDish) =>
                sideDish.areas.some((area) => area === dishArea)
            )
            .map((sideDish) => sideDish.name);
    }
}
