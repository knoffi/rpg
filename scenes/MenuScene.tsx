import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { beers } from "../examples/beer";
import { lemonades } from "../examples/lemonades";
import { spirits } from "../examples/spirits";
import { wines } from "../examples/wines";
import { checkDataDistribution } from "../helpingFunctions/checkDataDistribution";
import {
  getDrinkOffers,
  offersWithOneReroll
} from "../helpingFunctions/menuCode";

const menuStyle = StyleSheet.create({
  menuRow: { justifyContent: "flex-start", flexDirection: "row" },
  sceneButton: { justifyContent: "center"},
});

export const MenuScene = ({ navigation, route }: any) => {
  checkDataDistribution(spirits, "spirits");
  checkDataDistribution(beers, "beer");
  checkDataDistribution(wines, "wine");
  checkDataDistribution(lemonades, "lemonade");
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
