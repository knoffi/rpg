import { splitMarker } from '../../scenes/menuScene/offerList/nameSplitter/splitMarker';
import { association } from '../association';
import { MenuCategory, TavernProduct } from '../TavernProduct';
import {
    DescriptionAsset,
    forCriminalsOverwrittenAsset,
} from './DescriptionAsset';
import { MINIMAL_PASS_FIT_LEVEL } from './fitCalculator/getFitLevel';
import { Idea } from './Idea';
import { DishConcept } from './powerFitConcepts/DishConcept';
import { defaultPowerFitConcepts } from './powerFitConcepts/powerFitConcepts';
import { PriceSetter } from './PriceSetter';
import { StructuredTavernFits } from './StructuredTavernFits';

const EMPTY_SIDE_DISH: DescriptionAsset = { name: '' };

export class DishIdea extends Idea {
    private averagePrice: number | PriceSetter;
    private category: MenuCategory;

    constructor(
        ingredients: DishConcept,
        averagePrice: number | PriceSetter,
        category: MenuCategory
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

        super(
            mainEnabledForCriminals,
            defaultPowerFitConcepts.menu,
            sideDishesEnabledForCriminals,
            undefined
        ),
            true;
        this.averagePrice = averagePrice;
        this.category = category;
    }

    public fitsToMenu(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix: (name: string) => boolean
    ) {
        return this.fitsToTavern(
            tavernFits,
            isExcludedByPrefix,
            undefined,
            undefined,
            undefined,
            undefined,
            MINIMAL_PASS_FIT_LEVEL
        );
    }

    public getConcreteDish(
        tavernFits: StructuredTavernFits,
        minimumFitLevel: number
    ) {
        const fittingSideDishMenu = this.additions!.map((sideDishes) => {
            const result =
                sideDishes[0].name === EMPTY_SIDE_DISH.name
                    ? EMPTY_SIDE_DISH
                    : this.getFittingAssetPart(
                          tavernFits,
                          sideDishes,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          minimumFitLevel
                      );
            return result;
        });
        const sideDishSlotHasNoFitting = fittingSideDishMenu.some(
            (sideDishes) => !sideDishes
        );
        if (sideDishSlotHasNoFitting) {
            console.log(
                this.main.name +
                    ': getConcreteDish was called, but no fitting sideDish available. Moreover, side dishes for that slot have been provided!'
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
            const priceFactor = fittingSideDishMenu[0]
                ? fittingSideDishMenu[0].priceFactor
                : undefined;
            return this.createDishFromNames(
                this.main.name,
                sideDishNames[0],
                sideDishNames[1],
                sideDishNames[2],
                tavernFits,
                priceFactor
            );
        }
    }
    private createDishFromNames(
        mainIngredient: string,
        firstSideIngredient: string,
        secondSideIngredient: string,
        thirdSideIngredient: string,
        tavernFits: StructuredTavernFits,
        priceFactor?: number
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
        const price = this.getPriceFromFits(tavernFits.income, priceFactor);
        const newDish = new TavernProduct(
            name,
            price,
            filteredTavernFits,
            this.category
        );
        return newDish;
    }

    private getPriceFromFits(income?: association, priceFactor = 1) {
        if (typeof this.averagePrice === 'number') {
            return this.getPriceFluctuation(priceFactor * this.averagePrice);
        } else {
            if (income === association.poor) {
                return this.getPriceFluctuation(
                    priceFactor * this.averagePrice[income]
                );
            }
            if (income === association.modest) {
                return this.getPriceFluctuation(
                    priceFactor * this.averagePrice[income]
                );
            }
            if (income === association.wealthy) {
                return this.getPriceFluctuation(
                    priceFactor * this.averagePrice[income]
                );
            }
            if (income === association.rich) {
                return this.getPriceFluctuation(
                    priceFactor * this.averagePrice[income]
                );
            }
            return this.getPriceFluctuation(
                (priceFactor *
                    (this.averagePrice.modest + this.averagePrice.wealthy)) /
                    2
            );
        }
    }
    private getPriceFluctuation(price: number) {
        const randomPrice = Math.floor(price * (0.95 + Math.random() * 0.1));
        return randomPrice > 0 ? randomPrice : 1;
    }
}
