import React from "react";
import { Text } from "react-native";
export const TavernText = (props: any) => {
  return (
    <Text>
      Welcome to my tavern: The {props.adj} {props.sub}!
    </Text>
  );
};
