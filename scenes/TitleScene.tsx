import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Divider, Paragraph, TextInput, Title } from "react-native-paper";
import { SceneButton } from "../components/SceneButton";
const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const TitleButtons=(props:any)=>{return <View><Button>Tavern Editor</Button>
  <Button>Tavern Collection</Button>
  <Button>Tavern Assets</Button>
  <Button>Acknowledgements</Button></View>}


export const TitleScene = ({ navigation }: any) => {
  
  return (
    <ScrollView>
     <View ><Title>You All Meet In A Tavern</Title>
      <Paragraph>Sir Aiven's Lemonade ... 3 copper</Paragraph>
      <TextInput
        style={{ marginTop: 15 }}
        label="Outlined input"
        mode="outlined"
      />
      <Divider/>
      <TitleButtons/>
      <SceneButton sceneName={"TavernScene"} navigation={navigation} />
      </View>
      <View style={{marginTop:100}}>
      </View>
      </ScrollView>
  );
  }



  

