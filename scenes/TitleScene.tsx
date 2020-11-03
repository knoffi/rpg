import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider, Paragraph, TextInput, Title } from "react-native-paper";
import { SceneButton } from "../components/SceneButton";

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});



export const TitleScene = ({ navigation }: any) => {
  
  return (
    <View>
     <View ><Title>You All Meet In A Tavern</Title>
      <Paragraph>Sir Aiven's Lemonade ... 3 copper</Paragraph>
      <TextInput
        style={{ marginTop: 15 }}
        label="Outlined input"
        mode="outlined"
      /><Divider/><SceneButton sceneName={"TavernScene"} navigation={navigation} />
      </View>
      <View style={{marginTop:100}}>
      </View>
      </View>
  );
  }



  

