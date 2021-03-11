import { association } from '../../../../classes/association';
import { foodCategory, TavernProduct } from '../../../../classes/TavernProduct';
import { priceVariation } from '../priceVariation';
import { areaBreads } from './areaBreads';
import { areaRichToppingMap } from './areaRichToppingMap';
import { areaWorkerToppingMap } from './areaWorkerToppingMap';
import { incomeEggTypeMap } from './incomeEggTypeMap';

const a = association;

export const breakfastPlatesTemplate = (
    areaBreads: { bread: string; areas: association[] }[],
    income: association,
    areaToppingMap: Map<association, string[]>,
    price: number
) => {
    const breakfastPlates = [] as TavernProduct[];
    const garnishPhrase =
        income === association.poor || income === association.modest
            ? ' with '
            : ' served with ';
    areaBreads.forEach((bread) => {
        bread.areas.forEach((area) => {
            const toppings = areaToppingMap.get(area)!;
            const eggs = incomeEggTypeMap.get(income)!;
            toppings.forEach((topping) => {
                eggs.forEach((egg) => {
                    const productName =
                        'Breakfast Plate: ' +
                        egg +
                        garnishPhrase +
                        bread.bread +
                        ', ' +
                        topping;
                    breakfastPlates.push(
                        new TavernProduct(
                            productName,
                            priceVariation(price),
                            [area, income],
                            foodCategory.breakfast
                        )
                    );
                });
            });
        });
    });
    return breakfastPlates;
};

const workerBreakfastPlates = breakfastPlatesTemplate(
    areaBreads,
    a.modest,
    areaWorkerToppingMap,
    25
);
const poorBreakfastPlates = breakfastPlatesTemplate(
    areaBreads,
    a.poor,
    areaWorkerToppingMap,
    10
);
const wealthyBreakfastPlates = breakfastPlatesTemplate(
    areaBreads,
    a.wealthy,
    areaWorkerToppingMap,
    50
);
const richBreakfastPlates = breakfastPlatesTemplate(
    areaBreads,
    a.rich,
    areaRichToppingMap,
    110
);
export const breakfastPlates = workerBreakfastPlates.concat(
    poorBreakfastPlates,
    wealthyBreakfastPlates,
    richBreakfastPlates
);
