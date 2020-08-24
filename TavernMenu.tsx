import React from "react";
import { Button, Text, View } from "react-native";
export const TavernMenuText = ({ navigation }: any) => {
  return (
    <View>
      <Text>In this tavern you get the following drink: Ale.</Text>
      <Button
        title="Tavern Name"
        onPress={() => {
          navigation.navigate("NameScene");
        }}
      ></Button>
    </View>
  );
};
