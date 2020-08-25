import React from "react";
import { Button, Text, View } from "react-native";
import { drinkExamples } from "./drinks";
import { getFittingRandom } from "./getFittingRandom";
import { TavernProduct } from "./TavernProduct";
export const TavernMenuText = ({ navigation }: any) => {
  const beerExamples = drinkExamples.find((example) => {
    return example.category === "beer";
  })!.examples;
  const drink = getFittingRandom(beerExamples, [], [], 0, 1) as TavernProduct;
  const price = drink.getCopperPrice(tavernScalePrice.normalNormal).toString();
  return (
    <View>
      <Text>
        We serve the following drinks {drink.name} for {price} copper.
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
