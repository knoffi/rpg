import React, { useState } from "react";
import { View } from "react-native";
import { Button, Dialog, Divider, Paragraph, Portal, TextInput, Title } from "react-native-paper";
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
  }




  const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);
  
    const showDialog = () => setVisible(true);
  
    const hideDialog = () => setVisible(false);
  
    return (
      <View style={{flexDirection:"row"}}>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      <View>
      <Button onPress={showDialog}>Show Dialog</Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
    </View>
    );
  };
  

