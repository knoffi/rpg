import { association } from "../classes/Adjectives";
import { drinkCategory, foodCategory, TavernProduct } from "../classes/TavernProduct";
import { drinkExamples } from "../examples/drinks";
import { getFittingRandom } from "./getFittingRandom";
import {
  Offer,
  tavernScalePrice
} from "./menuCodeEnums";

export const getTavernScalePrice = (
  drink: TavernProduct,
  fits: association[],
  misfits: association[]
) => {
  const fitsHit = drink.getNumberOfHits(fits);
  const misfitsHit = drink.getNumberOfHits(misfits);
  let overAllFit: number;
  // [-1,1] -> [-1.49 , 1.49] -> [-0.99 , 1.99] -> {-1,0,1}
  if (fitsHit + misfitsHit === 0) {
    overAllFit = 0;
  } else {
    overAllFit = Math.floor(
      (((fitsHit - misfitsHit) / (fitsHit + misfitsHit)) * 2.9) / 2 + 0.5
    );
  }
  let overAllPriceClass: number;
  //TODO make the conditions easier when in future poor && rich is impossible
  if (
    (fits.includes(association.poor) && fits.includes(association.rich)) ||
    fits.includes(association.worker) ||
    (!fits.includes(association.poor) &&
      !fits.includes(association.rich) &&
      !fits.includes(association.worker))
  ) {
    overAllPriceClass = 4;
  } else {
    if (fits.includes(association.rich)) {
      overAllPriceClass = 7;
    } else {
      overAllPriceClass = 1;
    }
  }
  const valuesOfScalePrices = Object.values(tavernScalePrice).filter(
    (entry) => {
      return typeof entry === "number";
    }
  );
  return valuesOfScalePrices[overAllPriceClass - overAllFit];
};

const getUsedDrinkCategories=(offers:Offer[])=>{
  let usedDrinkCategories=[] as drinkCategory[]
  offers.forEach(offer =>{if(offer.product.isDrink()){usedDrinkCategories.push(offer.product.productCategory as drinkCategory)}})
  return usedDrinkCategories
}

export const offersWithOneReroll = (
  name: string,
  offers: Offer[],
  fits: association[],
  misfits: association[],
) => {

  const usedDrinkCategories= getUsedDrinkCategories(offers)
  const category =
    usedDrinkCategories[
      offers.findIndex((offer) => {
        return offer.product.name === name;
      })
    ];
  const newOffers = offers.map((offer) => {
    if (offer.product.name !== name) {
      return offer;
    } else {
      return getRandomDrinkOffer(category, fits, misfits, offeredNames(offers));
    }
  });
  return newOffers;
};

export const getNewRandomDrinkOffer = (fits: association[], misfits: association[],category:drinkCategory|foodCategory, oldOffers:Offer[])=>{
  return getRandomDrinkOffer(
    category,
    fits,
    misfits,
    offeredNames(oldOffers)
  );
}

export const getDrinkOffers = (fits: association[], misfits: association[], offerCategories:drinkCategory[]) => {
  let drinkOffers = [] as Offer[];
  offerCategories.forEach((category) => {
    const newOffer = getRandomDrinkOffer(
      category,
      fits,
      misfits,
      offeredNames(drinkOffers)
    );
    drinkOffers.push(newOffer);
  });
  return drinkOffers;
};

const offeredNames = (offers: Offer[]) => {
  return offers.map((offer) => {
    return offer.product.name;
  });
};
//drinks have a wider range, therefore social misfits are more important than landscape misfits
const getRandomDrinkOffer = (
  category: drinkCategory|foodCategory,
  fits: association[],
  misfits: association[],
  excludedDrinkNames: string[]
): Offer => {
  const examples = drinkExamples.find((example) => {return example.category === category;})!.examples;
  const drink = getFittingRandom(
    examples,
    fits,
    misfits,
    excludedDrinkNames
  ) as TavernProduct;
  const copperPrice = drink.getCopperPrice(
    getTavernScalePrice(drink, fits, misfits)
  );
  drink.resetCategory(category);
  return { product: drink, price: copperPrice };
};
