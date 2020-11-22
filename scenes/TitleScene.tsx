import { SimpleLineIcons } from '@expo/vector-icons';
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button, Divider, FAB, Paragraph, TextInput, Title } from "react-native-paper";
import { EditFABGroup } from '../components/EditFABGoup';
import { SceneButton } from "../components/SceneButton";

const MyComponent = () => (
  <FAB
    style={styles.fab}
    small
    icon={props => <SimpleLineIcons name="action-redo" size={24} color="black" />}
    onPress={() => console.log('Pressed')}
  />
);

const RectangleTest = () =>{
  return <ImageBackground source={require("../assets/testRectangle590x210.png")} style={{ width: 330, height: 140, alignSelf: "center", flexDirection: "column", justifyContent: "center" }}>
    <View>
      <Text>Es war einmal</Text><Text>vor einer langen Zeit</Text><Text>in einer</Text><Text>weitentfernten Galaxie</Text>
    </View>
  </ImageBackground>
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    margin: 16,
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
    <View>
     <View style={{zIndex:0}}><Title>You All Meet In A Tavern</Title>
      <Paragraph>Sir Aiven's Lemonade ... 3 copper</Paragraph>
      <TextInput
        style={{ marginTop: 15 }}
        label="Outlined input"
        mode="outlined"
      />
      <Divider/>
      <TitleButtons/>
      <RectangleTest></RectangleTest>
      <SceneButton sceneName={"EDIT TAVERN"} navigation={navigation} />
      </View>
      <View style={{marginTop:100}}></View>
      <EditFABGroup/>
      </View>
  );
  }



  

