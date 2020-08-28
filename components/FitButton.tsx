import React, { useState } from "react";
import { Button } from "react-native";

const onButtonStyle = { backgroundColor: "green" };
const offButtonStyle = { backgroundColor: "green" };
interface buttonState {
  isUsed: boolean;
  style: { backgroundColor: "string" };
}
export const FitButton = (props: any) => {
  let [isUsed] = useState(false);
  return (
    <Button
      title={props.title}
      onPress={() => {
        isUsed = !isUsed;
        props.clickHandler();
      }}
      color={props.color}
    ></Button>
  );
};
