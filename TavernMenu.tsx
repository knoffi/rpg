import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { association } from "./Adjectives";
import { drinkExamples } from "./drinks";
import { getFittingRandom } from "./getFittingRandom";
import { drinkCategory, TavernProduct } from "./TavernProduct";

const drinkMenuCategories = [
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
  const copperPrice = drink.getCopperPrice(tavernScalePrice.normalNormal);
  return { product: drink, price: copperPrice };
};

export enum tavernScalePrice {
  cheapEasy = -5,
  cheapNormal = -4,
  cheapHard = -3,
  normalEasy = -1,
  normalNormal = 0,
  normalHard = 1,
  expensiveEasy = 3,
  expensiveNormal = 4,
  expensivehard = 5,
}
