import { splitMarker } from '../scenes/menuScene/offerList/nameSplitter/splitMarker';
import { association } from './association';
import {
    DescriptionAsset,
    forCriminalsOverwrittenAsset,
} from './DescriptionAsset';
import { Idea } from './Idea';
import { IngredientsIdea } from './IngredientsIdea';
import { PriceSetter } from './PriceSetter';
import { StructuredTavernFits } from './StructuredTavernFits';
import { MenuCategory, TavernProduct } from './TavernProduct';

const EMPTY_SIDE_DISH: DescriptionAsset = { name: '' };

export class DishIdea extends Idea {
    private averagePrice: number | PriceSetter;
    private category: MenuCategory;
    private description?: string;

    constructor(
        ingredients: IngredientsIdea,
        averagePrice: number | PriceSetter,
        category: MenuCategory,
        description?: string
    ) {
        const additionalSideDishes = [
            ingredients.firstSideDishes || [EMPTY_SIDE_DISH],
            ingredients.secondSideDishes || [EMPTY_SIDE_DISH],
            ingredients.thirdSideDishes || [EMPTY_SIDE_DISH],
        ];
        const sideDishesEnabledForCriminals = additionalSideDishes.map(
            (sideDishes) =>
                sideDishes.map((sideDish) =>
                    forCriminalsOverwrittenAsset(sideDish)
                )
        );

        const mainEnabledForCriminals = forCriminalsOverwrittenAsset(
            ingredients.mainIng
        );

        super(mainEnabledForCriminals, sideDishesEnabledForCriminals);
        this.averagePrice = averagePrice;
        this.category = category;
        this.description = description;
        if (description) {
            this.description = description;
        }
    }

    public fitsToMenu(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix: (name: string) => boolean
    ) {
        return this.fitsToTavern(tavernFits, isExcludedByPrefix);
    }

    public getConcreteDish(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix: (name: string) => boolean
    ) {
        const fittingSideDishMenu = this.additions!.map((sideDishes) => {
            const result =
                sideDishes[0].name === EMPTY_SIDE_DISH.name
                    ? EMPTY_SIDE_DISH
                    : this.getFittingAssetPart(tavernFits, sideDishes);
            return result;
        });
        const sideDishSlotHasNoFitting = fittingSideDishMenu.some(
            (sideDishes) => !sideDishes
        );
        if (sideDishSlotHasNoFitting) {
            console.log(
                this.main.name +
                    'getConcreteDish was called, but no fitting sideDish available. Moreover, side dishes for that slot have been provided!'
            );
            return this.createDishFromNames(
                this.main.name,
                '',
                '',
                '',
                tavernFits
            );
        } else {
            const sideDishNames = fittingSideDishMenu.map(
                (sideDish) => sideDish!.name
            );
            return this.createDishFromNames(
                this.main.name,
                sideDishNames[0],
                sideDishNames[1],
                sideDishNames[2],
                tavernFits
            );
        }
    }
    private createDishFromNames(
        mainIngredient: string,
        firstSideIngredient: string,
        secondSideIngredient: string,
        thirdSideIngredient: string,
        tavernFits: StructuredTavernFits
    ) {
        const name =
            mainIngredient +
            splitMarker +
            firstSideIngredient +
            secondSideIngredient +
            thirdSideIngredient;
        //only works as long as fits of tavern equal fits of build tavern product
        const filteredTavernFits = Object.values(tavernFits).filter(
            (fit) => fit
        ) as association[];
        const price = this.getPriceFromFits(tavernFits.income);
        const newMainDish = new TavernProduct(
            name,
            price,
            filteredTavernFits,
            this.category
        );
        return newMainDish;
    }

    private getPriceFromFits(income?: association) {
        if (typeof this.averagePrice === 'number') {
            return this.getPriceFluctuation(this.averagePrice);
        } else {
            if (income === association.poor) {
                return this.getPriceFluctuation(this.averagePrice[income]);
            }
            if (income === association.modest) {
                return this.getPriceFluctuation(this.averagePrice[income]);
            }
            if (income === association.wealthy) {
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
