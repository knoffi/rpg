import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { association } from './Adjectives';
import { IngredientList, IngredientStore } from './mainDishIngredientTypes';
import { foodCategory, TavernProduct } from './TavernProduct';
export class mainDishCookingBook {
    private ingredients: IngredientStore;

    constructor(ingredients: IngredientStore) {
        this.ingredients = ingredients;
    }

    public getModestDishes() {
        const sideIngredients = this.ingredients.side.modest;
        const modestMainDishes = this.ingredients.main.modest.flatMap(
            (mainIngredient) =>
                mainIngredient.areas.flatMap((area) =>
                    this.getFittingSideDishNames(
                        area,
                        sideIngredients
                    ).map((sideIngredientName) =>
                        this.getModestDishFromData(
                            mainIngredient.name,
                            sideIngredientName,
                            area
                        )
                    )
                )
        );
        return modestMainDishes;
    }
    private getModestDishFromData(
        mainIngredient: string,
        sideIngredients: string,
        area: association
    ) {
        const name = mainIngredient + sideIngredients;
        const realPrice =
            Math.floor(
                standardBasePrice.modest * 2 * (0.95 + Math.random() * 0.1)
            ) + 1;
        const newMainDish = new TavernProduct(
            name,
            realPrice,
            [association.worker, area],
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
