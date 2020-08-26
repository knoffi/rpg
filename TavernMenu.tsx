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
      //TODO Does this reroll work?
      <Text key={offer.product.name + "text"}>
        <Button
          title="REROLL"
          key={offer.product.name}
          onPress={() => {
            setOffers(
              offersWithOneReroll(offer.product.name, offers, fits, misfits)
            );
          }}
        ></Button>
        {offer.product.name}: {offer.price.toString()} copper.{"\n"}{" "}
      </Text>
    );
  });

  return (
    <View>
      <Text>
        <Text>
          We serve the following drinks. {"\n"} {"\n"}{" "}
        </Text>
        {drinkMenu}
      </Text>
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
  //TODO: test whether offer and drinkMenuCategories have corresponding entries
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
