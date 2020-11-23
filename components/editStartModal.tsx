import * as React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Button, Modal, Portal, Provider } from 'react-native-paper';
import { InfoButton } from './buttons/generalButtons';


export const EditStartModal = () => {
  const [visible, setVisible] = React.useState(true);
  const [onButtonView, setOnButtonView] = React.useState(true)
  const [onTavernListView, setOnTavernListView] = React.useState(false)
  const [onTavernInfoView, setOnTavernInfoView] = React.useState(false)
  const [tavernInfoText, setTavernInfoText] = React.useState("")

  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, zIndex:3};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          {onButtonView? <Button style={{margin:16, padding:16}} mode="contained" onPress={()=>{setVisible(false)}}>Build New Tavern</Button> : undefined}
          {onButtonView?<Button style={{margin:16, padding:16}} mode="contained" onPress={()=>{setVisible(false)}}>Build Random Tavern</Button> : undefined}
          {onButtonView?<Button style={{margin:16, padding:16}} mode="contained" onPress={()=>{setOnButtonView(false);setOnTavernListView(true)}}>Use Previous Tavern</Button> : undefined}
          {onButtonView?<Button style={{margin:16, padding:16}} mode="contained" onPress={()=>{setOnButtonView(false);setOnTavernListView(true)}}>Use Tavern Template</Button> : undefined}
          {onTavernListView?<TavernsFlatList onTavernInfoClick={(note:string)=>{setOnTavernListView(false);setOnTavernInfoView(true);setTavernInfoText(note)}}></TavernsFlatList>:undefined}
          {onTavernInfoView?<TavernInfo note={tavernInfoText} onBackButton={()=>{setOnTavernInfoView(false);setOnTavernListView(true)}}></TavernInfo>:undefined}
        </Modal>
      </Portal>
    </Provider>
  );
};

const TavernInfo=(props:{note:string, onBackButton:()=>void})=>{
  return <View><Text>{props.note}</Text>
  <View style={{flexDirection:"row", justifyContent:"space-evenly"}}><Button mode="contained" onPress={props.onBackButton}>BACK TO LIST</Button><Button mode="contained" onPress={props.onBackButton}>USE THIS TEMPLATE</Button></View></View>
}


const TavernsFlatList=(props:{onTavernInfoClick:(note:string)=>void})=>{
return (
  <SafeAreaView>
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <View style={{flexDirection:"row",marginVertical:16}}>
          <InfoButton onPress={()=>props.onTavernInfoClick(item.note)}></InfoButton>
          <Button><Text style={{fontWeight:"bold",fontSize:15}}>{item.name.toUpperCase()}</Text></Button>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
);
}

const DATA = [
  { id:"1",
    name:"Barbara's Barbaric Beer Bar",
    note:"Barbara was a Barbarian chieftain. After losing an eye and three fingers during a battle in a collosseum, she decided to build this tavern. Well known for its variety of strong beers, Barbara's bar gets visited by numerous ferocious fighters from far away. Some of them come to take part in the legendary bar fights in Barbara's tavern, and if they are unlucky, Barbara is attending too..."
  },
  { id:"2",
    name:"The Molthorium Hammer",
    note:"When an Elvish ambassador comes to the Dwarvish capital, he usually gets invited to the Molthorium Hammer. This masterwork of stone cutters is a symbol of the rich Dwarvish culture and craftsmanship. Marble columns decorated with beautiful, handcrafted details, cups made of the purest silver and a Dwarvish beer which even the gods could not reject: Molthorium beer. It is malty like autumn, cosy like winter, vitalizing like summer and refreshing like spring. Not even the Elves can make a beer of this quality."
  },
  { id:"3",
    name:"The Drowning Rat",
    note:"The Drowning Rat is a tavern which landlubbers normally avoid. Rumors have it that this location is filled with smugglers, pirates and other untrustworty sailors. However, between the bitter ale and the harsh rum you may also find ferocious captains who fear neither tides nor kraken. Their crew may sail you to any island you desire, IF you can provide enough gold."
  },
  { id:"4",
    name:"The Foxy Gold Nymph",
    note:"The Foxy Gold Nymph is a high class tavern in the capital city, full of beautiful ladies wrapped in revealing dresses. The prices are expensiv, but the quality of erotic services exotic beverages is absolute world class. Soon, a chauvinistic prince will celebrate his Bachelor party right here in these halls, and the guest list for this mix of orgy and banquette is extremely exclusive."
  }
];
