import { SimpleLineIcons } from '@expo/vector-icons';
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Divider, FAB, Paragraph, TextInput, Title } from "react-native-paper";
import { SceneButton } from "../components/SceneButton";

const MyComponent = () => (
  <FAB
    style={styles.fab}
    small
    icon={props => <SimpleLineIcons name="action-redo" size={24} color="black" />}
    onPress={() => console.log('Pressed')}
  />
);

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
      <View><MyComponent/></View>

      
      </ScrollView>
  );
  }



  

