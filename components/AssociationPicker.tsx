import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Provider } from "react-native-paper";
import { association, getAssociation } from "../classes/Adjectives";
import { AssociationPick } from "./AssociationPick";

export const AssociationPicker = (props: {isClickable:boolean,pickAssociationList:association[],key:string,startText:string,onPick:(oldAssociation:association,newAssociation:association)=> void ,onPress:()=>void,onDismissOrPick:()=>void,color:string}) => {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState(props.startText);

  const openMenu = () => setVisible(true);

  const closeMenu = () => {setVisible(false)};
  const pickList = props.pickAssociationList.map((association: association) => {
    return (
      <AssociationPick
        setPick={() => {
          setText(association);
          props.onDismissOrPick();
          closeMenu();
          props.onPick(getAssociation(text),association);
        }}
        pick={association}
        key={association + props.key}
      />
    );
  });
  pickList.push(<AssociationPick
    setPick={() => {
      setText(props.startText);
      props.onDismissOrPick();
      closeMenu();
      props.onPick(getAssociation(text),association.empty);
    }}
    pick={"DELETE"}
    key={association.empty + props.key}
  />)

  return (
    <Provider>
      <View
        style={{
          paddingTop: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={()=>{closeMenu();props.onDismissOrPick()}}
          anchor={
            <Button
              onPress={()=>{if(props.isClickable){props.onPress();openMenu();}}}
              compact={true}
              mode="contained"
              key={props.key + "button"}
              color={props.color}
            >{text}
            </Button>
          }
        >
          {pickList}
        </Menu>
      </View>
    </Provider>
  );
};
