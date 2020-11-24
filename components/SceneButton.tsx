import React from "react";
import { Button } from "react-native-paper";

export const SceneButton = (props: any) => {
  return (
    <Button
      style={{ marginTop: 15 }}
      mode="contained"
      onPress={() => {
        props.navigation.navigate(props.sceneName);
      }}
    >
      Generate a Tavern
    </Button>
  );
};
