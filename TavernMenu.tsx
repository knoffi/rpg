import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { association } from "./Adjectives";
import { drinkExamples } from "./drinks";
import { getFittingRandom } from "./getFittingRandom";
import { drinkCategory, TavernProduct } from "./TavernProduct";

const drinkMenuCategories = [
  drinkCategory.lemonade,
  drinkCategory.beer,
  drinkCategory.beer,
  drinkCategory.beer,
  drinkCategory.wine,
  drinkCategory.wine,
  drinkCategory.spirit,
];

//TODO Refactor: Offer is included in TavernProduct, thus Offer is not needed

interface Offer {
  product: TavernProduct;
  price: number;
}

export const TavernMenuText = ({ navigation, route }: any) => {
  const { fits } = route.params;
  const { misfits } = route.params;
  const [offers, setOffers] = useState(getDrinkOffers(fits, misfits));

  const drinkMenu = offers.map((offer) => {
    return (
      <View key={offer.product.name + "view"}>
        <Text key={offer.product.name + "text"}>
          {offer.product.name}: {offer.price.toString()} copper.{"\n"}
        </Text>
        <Button
          title="REROLL"
          key={offer.product.name}
          onPress={() => {
            const newOffer = offersWithOneReroll(
              offer.product.name,
              offers,
              fits,
              misfits
            );
            setOffers(newOffer);
          }}
        ></Button>
      </View>
    );
  });

  return (
    <View>
      <Text>
        We serve the following drinks.{"\n"}
        {"\n"}{" "}
      </Text>
      {drinkMenu}
      <Button
        title="Tavern Name"
        onPress={() => {
          navigation.navigate("NameScene");
        }}
      ></Button>
    </View>
  );
};
//TODO: test whether offer and drinkMenuCategories have corresponding entries
const getDrinkOffers = (fits: association[], misfits: association[]) => {
  let drinkOffers = [] as Offer[];
  drinkMenuCategories.forEach((category) => {
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

const offersWithOneReroll = (
  name: string,
  offers: Offer[],
  fits: association[],
  misfits: association[]
) => {
  const category =
    drinkMenuCategories[
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

const offeredNames = (offers: Offer[]) => {
  return offers.map((offer) => {
    return offer.product.name;
  });
};
//drinks have a wider range, therefore social misfits are more important than landscape misfits
const getRandomDrinkOffer = (
  category: drinkCategory,
  fits: association[],
  misfits: association[],
  excludedDrinkNames: string[]
): Offer => {
  const examples = drinkExamples.find((example) => {
    return example.category === category;
  })!.examples;
  const drink = getFittingRandom(
    examples,
    fits,
    misfits,
    excludedDrinkNames
  ) as TavernProduct;
  const copperPrice = drink.getCopperPrice(
    getTavernScalePrice(drink, fits, misfits)
  );
  return { product: drink, price: copperPrice };
};

export enum tavernScalePrice {
  cheapEasy = -4,
  cheapNormal = -3,
  cheapHard = -2,
  normalEasy = -1,
  normalNormal = 0,
  normalHard = 1,
  expensiveEasy = 2,
  expensiveNormal = 3,
  expensiveHard = 4,
}

const getTavernScalePrice = (
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
  const numbersOfScalePrices = Object.values(tavernScalePrice).filter(
    (entry) => {
      return typeof entry === "number";
    }
  );
  return numbersOfScalePrices[overAllPriceClass - overAllFit];
};
