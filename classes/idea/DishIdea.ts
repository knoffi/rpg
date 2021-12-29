import { WeServe } from '../../editNavigator/WeServe';
import { Offer } from '../../scenes/menuScene/Offer';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { association, Income } from '../association';
import { FantasyKeys } from '../contentCreator/FantasKeys';
import { PatternChange } from '../patternHandler/PatternHandler';
import { incomeRange } from '../price/incomeRange';
import { Prices } from '../price/Price';
import { Drinkable, Eatable, MenuCategory } from '../TavernProduct';
import { AssetKey } from './AssetKey/AssetKey';
import {
    DescriptionAsset,
    forCriminalsOverwrittenAsset,
} from './DescriptionAsset';
import { Idea } from './Idea';
import { Pattern } from './Patterns/Pattern';
import { defaultPatternConcepts } from './powerFitConcepts/defaultPatternConcepts';
import { DishConcept } from './powerFitConcepts/DishConcept';
import { defaultPowerFitConcepts } from './powerFitConcepts/powerFitConcepts';
import { PriceSetter } from './PriceSetter';
import { StructuredTavernFits } from './StructuredTavernFits';

const EMPTY_SIDE_DISH: DescriptionAsset = { name: '' };

type Pricing = { price: number; income: Income | association.empty };
export class DishIdea extends Idea {
    private category: MenuCategory;
    private priceFactor: number | Partial<PriceSetter>;

    constructor(
        ingredients: DishConcept,
        priceFactor: number | Partial<PriceSetter> | 'default',
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
            undefined,
            defaultPatternConcepts.menu
        ),
            true;
        this.category = category;
        this.priceFactor = priceFactor === 'default' ? 1 : priceFactor;
    }
    private getBestFittingSideDish(
        sideDishes: DescriptionAsset[],
        tavernFits: StructuredTavernFits,
        minimumFitLevel: number,
        additionExcludedByKey: (key: AssetKey) => boolean,
        patterns: Pattern[]
    ): DescriptionAsset | undefined {
        const bestResult =
            sideDishes[0].name === EMPTY_SIDE_DISH.name
                ? EMPTY_SIDE_DISH
                : this.getFittingAssetPart(
                      tavernFits,
                      sideDishes,
                      undefined,
                      true,
                      undefined,
                      additionExcludedByKey,
                      minimumFitLevel,
                      patterns,
                      false
                  );
        if (bestResult) {
            return bestResult;
        } else {
            const patternlessResult = this.getFittingAssetPart(
                tavernFits,
                sideDishes,
                undefined,
                true,
                undefined,
                additionExcludedByKey,
                minimumFitLevel,
                patterns,
                false
            );
            if (patternlessResult) {
                return patternlessResult;
            } else {
                const powerlessResult = this.getFittingAssetPart(
                    tavernFits,
                    sideDishes,
                    undefined,
                    false,
                    undefined,
                    additionExcludedByKey,
                    minimumFitLevel,
                    patterns,
                    true
                );
                if (powerlessResult) {
                    return powerlessResult;
                } else {
                    const patternlessPowerlessResult = this.getFittingAssetPart(
                        tavernFits,
                        sideDishes,
                        undefined,
                        false,
                        undefined,
                        additionExcludedByKey,
                        minimumFitLevel,
                        patterns,
                        false
                    );
                    return patternlessPowerlessResult;
                }
            }
        }
    }

    public getConcreteDish(
        tavernFits: StructuredTavernFits,
        minimumFitLevel: number,
        universe: FantasyKeys,
        additionExcludedByKey: (key: AssetKey) => boolean,
        patterns: Pattern[]
    ): Offer {
        const sideDishChoosing = this.additions!.map((sideDishes) => {
            const result = this.getBestFittingSideDish(
                sideDishes,
                tavernFits,
                minimumFitLevel,
                additionExcludedByKey,
                patterns
            );
            return result;
        });
        const sideDishSlotEmpty = sideDishChoosing.some(
            (sideDishes) => !sideDishes
        );
        if (sideDishSlotEmpty) {
            console.log(
                this.main.name +
                    ': getConcreteDish was called ( fit level' +
                    minimumFitLevel +
                    '), but no fitting sideDish available. Moreover, side dishes for that slot have been provided!'
            );
            return this.createDishFromNames(
                this.main.name,
                '',
                '',
                '',
                tavernFits,
                this.getImpliedPatterns([]),
                universe
            );
        } else {
            const sideDishes = sideDishChoosing as DescriptionAsset[];
            const sideDishNames = sideDishes.map((sideDish) => sideDish!.name);
            const impliedPatterns = this.getImpliedPatterns(
                sideDishes as DescriptionAsset[]
            );
            const priceFactor = sideDishes[0]
                ? sideDishes[0].priceFactor
                : undefined;
            return this.createDishFromNames(
                this.main.name,
                sideDishNames[0],
                sideDishNames[1],
                sideDishNames[2],
                tavernFits,
                impliedPatterns,
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
        impliedPatterns: PatternChange[],
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
            keys: { main: DishIdea.getKeyList(this.main), addition: [] },
            patterns: this.main.patterns || [],
            impliedPatterns,
        };
    }
    private getDemand(): Demand & { isAbout: WeServe.drinks | WeServe.food } {
        return Object.values(Eatable).some(
            (category) => category === this.category
        )
            ? { isAbout: WeServe.food, category: this.category as Eatable }
            : { isAbout: WeServe.drinks, category: this.category as Drinkable };
    }

    private getPricing(incomeFit?: association, priceFactor = 1): Pricing {
        const income = incomeRange.find((entry) => incomeFit === entry);
        const incomeToPrice = new Prices('standard').getIncomeTable(
            this.category,
            this.priceFactor
        );
        if (income) {
            const averagePrice = incomeToPrice[income];
            const price = this.getPriceFluctuation(priceFactor * averagePrice);
            return { price, income };
        } else {
            const averagePrice =
                (incomeToPrice[association.modest] +
                    incomeToPrice[association.wealthy]) /
                2;
            const price = this.getPriceFluctuation(priceFactor * averagePrice);
            return { price, income: association.empty };
        }
    }
    private getPriceFluctuation(price: number) {
        const convexityFactor = Math.random();
        const fluctuation =
            convexityFactor * DishIdea.highestPriceFluctuation +
            (1 - convexityFactor) * DishIdea.lowestPriceFluctuation;
        const randomPrice = Math.floor(price * fluctuation);
        return randomPrice > 0 ? randomPrice : 1;
    }
    private static lowestPriceFluctuation = 0.95;
    private static highestPriceFluctuation = 1.05;
    public static lowestPriceByFluctuation(expectedPrice: number): number {
        return Math.max(
            1,
            Math.floor(this.lowestPriceFluctuation * expectedPrice)
        );
    }
    public static highestPriceByFluctuation(expectedPrice: number): number {
        return Math.floor(this.highestPriceFluctuation * expectedPrice) + 1;
    }
}
