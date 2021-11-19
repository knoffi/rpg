import { WeServe } from '../../editNavigator/WeServe';
import { Offer } from '../../scenes/menuScene/Offer';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { association, Income } from '../association';
import { FantasyKeys } from '../contentCreator/FantasKeys';
import { Drinkable, Eatable, MenuCategory } from '../TavernProduct';
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

type Pricing = { price: number; income: Income | association.empty };

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
        minimumFitLevel: number,
        universe: FantasyKeys
    ): Offer {
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
                tavernFits,
                universe
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
                universe,
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
        universe: FantasyKeys,
        priceFactor?: number
    ): Offer {
        const name = mainIngredient;
        const description =
            firstSideIngredient + secondSideIngredient + thirdSideIngredient;
        const pricing = this.getPricing(tavernFits.income, priceFactor);

        const demand = this.getDemand();
        return {
            name,
            description,
            isUserMade: false,
            ...pricing,
            ...demand,
            universe,
        };
    }
    private getDemand(): Demand & { isAbout: WeServe.drinks | WeServe.food } {
        return Object.values(Eatable).some(
            (category) => category === this.category
        )
            ? { isAbout: WeServe.food, category: this.category as Eatable }
            : { isAbout: WeServe.drinks, category: this.category as Drinkable };
    }

    private getPricing(income?: association, priceFactor = 1): Pricing {
        if (typeof this.averagePrice === 'number') {
            const price = this.getPriceFluctuation(
                priceFactor * this.averagePrice
            );
            return { price, income: association.empty };
        } else {
            if (income === association.poor) {
                const price = this.getPriceFluctuation(
                    priceFactor * this.averagePrice[income]
                );
                return { price, income };
            }
            if (income === association.modest) {
                const price = this.getPriceFluctuation(
                    priceFactor * this.averagePrice[income]
                );
                return { price, income };
            }
            if (income === association.wealthy) {
                const price = this.getPriceFluctuation(
                    priceFactor * this.averagePrice[income]
                );
                return { price, income };
            }
            if (income === association.rich) {
                const price = this.getPriceFluctuation(
                    priceFactor * this.averagePrice[income]
                );
                return { price, income };
            }
            const price = this.getPriceFluctuation(
                (priceFactor *
                    (this.averagePrice[association.modest] +
                        this.averagePrice[association.wealthy])) /
                    2
            );
            return { price, income: association.empty };
        }
    }
    private getPriceFluctuation(price: number) {
        const randomPrice = Math.floor(price * (0.95 + Math.random() * 0.1));
        return randomPrice > 0 ? randomPrice : 1;
    }
}
