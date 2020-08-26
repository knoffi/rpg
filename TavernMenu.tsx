import React from "react";
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

interface Offer {
  product: TavernProduct;
  price: number;
}

export const TavernMenuText = ({ navigation, route }: any) => {
  const { fits } = route.params;
  const { misfits } = route.params;

  const drinkMenu = getDrinkOffers(fits, misfits).map((offer) => {
    <Text>
      {offer.product.name}: {offer.price.toString()} copper.
    </Text>;
  });

  return (
    <View>
      <Text>We serve the following drinks.</Text>

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

const getDrinkOffers = (fits: association[], misfits: association[]) => {
  let drinkOffers = [] as Offer[];
  drinkMenuCategories.forEach((category) => {
    const namesOnMenu = drinkOffers.map((offer) => {
      return offer.product.name;
    });
    const newOffer = getRandomDrinkOffer(category, fits, misfits, namesOnMenu);
    drinkOffers.push(newOffer);
  });
  return drinkOffers;
};

const getRandomDrinkOffer = (
  category: drinkCategory,
  fits: association[],
  misfits: association[],
  excludedDrinkNames: string[]
): Offer => {
  const examples = drinkExamples.find((example) => {
    return example.category === category;
  })!.examples;
  //drinks have a wider range, therefore social misfits are more important than landscape misfits
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
