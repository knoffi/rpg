import * as React from "react";
import { View } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";
import { association, getAssociation } from "../classes/Adjectives";

export const AssociationDialog = (props: {pickAssociationList:association[],startText:string,onPick:(oldAssociation:association,newAssociation:association)=> void ,color:string}) => {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState(props.startText);

  const openDialog = () => setVisible(true);

  const closeDialog = () => {setVisible(false)};
  const pickList = props.pickAssociationList.map((association: association) => {
    return (
    <Dialog.Actions key={association + props.startText}>
      <AssociationButton
        setPick={() => {
          setText(association);
          closeDialog();
          props.onPick(getAssociation(text),association);
        }}
        pick={association}
      />
      </Dialog.Actions>
    );
  });
  pickList.push(<Dialog.Actions key={"delete" + props.startText}><AssociationButton
    setPick={() => {
      setText(props.startText);
      closeDialog();
      props.onPick(getAssociation(text),association.empty);
    }}
    pick={"DELETE"}
  /></Dialog.Actions>)

  return (
    <View
        style={{
          paddingTop: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
     <Button
              onPress={()=>{openDialog()}}
              compact={true}
              mode="contained"
              color={props.color}
            >{props.startText}
            </Button>
    <Portal>
      <Dialog visible={visible} onDismiss={closeDialog}>
        <Dialog.Title>{props.startText}</Dialog.Title>
        {getDialogInput(pickList,props.startText)}
      </Dialog>
    </Portal>
  </View>
  );
};

const getDialogInput= (dialogActions:any[],dialogName:string)=>{
  let dialogInput=[] as any[];
  const length = dialogActions.length;
  let count=0;
  while(count<length-2){
  dialogInput.push(<View style={{flexDirection:"row",justifyContent:"space-evenly"}} key={count.toString() + dialogName}>{dialogActions[count]}{dialogActions[count+1]}</View>)
  count=count+2
  }
  if(length % 2 === 0){dialogInput.push(<View style={{flexDirection:"row",justifyContent:"space-evenly"}} key={count.toString() + dialogName}>{dialogActions[count]}{dialogActions[count+1]}</View>)} else {dialogInput.push(<View style={{flexDirection:"row",justifyContent:"space-evenly"}} key={count.toString() + dialogName}>{dialogActions[count]}</View>)}
  return dialogInput
}

const AssociationButton = (props:any) => {
  return (
    <Button
      onPress={() => {
        props.setPick();
        props
      }}>{props.pick}</Button>
    
  );
};