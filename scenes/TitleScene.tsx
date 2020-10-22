import React, { useState } from "react";
import { View } from "react-native";
import { Divider, Paragraph, TextInput, Title } from "react-native-paper";
import { SceneButton } from "../components/SceneButton";

export const TitleScene = ({ navigation }: any) => {
  const [firstPickerOpen,setFirstPicker ] = useState(false);
  const [secondPickerOpen,setSecondPicker ] = useState(false);
  const [pickersOpen,setPickersOpen ] = useState(false);
  
  return (
    <View ><Title>You All Meet In A Tavern</Title>
      <Paragraph>Sir Aiven's Lemonade ... 2 copper</Paragraph>
      <TextInput
        style={{ marginTop: 15 }}
        label="Outlined input"
        mode="outlined"
      /><Divider/><SceneButton sceneName={"NameScene"} navigation={navigation} />
    </View>
  );




};
