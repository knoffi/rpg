import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { drinkCategory, TavernProduct } from "../classes/TavernProduct";
import {
  getDrinkOffers,
  offersWithOneReroll,
} from "../helpingFunctions/menuCode";

export const drinkMenuCategories = [
  drinkCategory.lemonade,
  drinkCategory.beer,
  drinkCategory.beer,
  drinkCategory.beer,
  drinkCategory.wine,
  drinkCategory.wine,
  drinkCategory.spirit,
];

//TODO Refactor: Offer is included in TavernProduct, thus Offer is not needed

export interface Offer {
  product: TavernProduct;
  price: number;
}
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
const menuStyle = StyleSheet.create({
  menuRow: { flex: 1, justifyContent: "flex-start", flexDirection: "row" },
  sceneButton: { flex: 1, justifyContent: "center", width: 150 },
});

export const MenuScene = ({ navigation, route }: any) => {
  const { fits } = route.params;
  const { misfits } = route.params;
  const [offers, setOffers] = useState(getDrinkOffers(fits, misfits));
  const drinkMenu = offers.map((offer) => {
    return (
      <View key={offer.product.name + "view"} style={menuStyle.menuRow}>
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

        <Text key={offer.product.name + "text"}>
          {offer.product.name}: {offer.price.toString()} copper.{"\n"}
        </Text>
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
      <View style={menuStyle.sceneButton}>
        <Button
          title="Tavern Name"
          onPress={() => {
            navigation.navigate("NameScene");
          }}
        ></Button>
      </View>
    </View>
  );
};
//TODO: test whether offer and drinkMenuCategories have corresponding entries
