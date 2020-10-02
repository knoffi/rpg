import React from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput, Title } from "react-native-paper";

export const TitleScene = ({ navigation }: any) => {
  return (
    <View>
      <Title>Lemonades</Title>
      <Paragraph>Sir Aiven's Lemonade ... 2 copper</Paragraph>
      <TextInput
        style={{ marginTop: 15 }}
        label="Outlined input"
        mode="outlined"
      />
      <Button
        style={{ marginTop: 15 }}
        mode="contained"
        icon=""
        accessibilityState={{}}
        onPress={() => {
          navigation.navigate("NameScene");
        }}
      >
        Click me
      </Button>
    </View>
  );
};
