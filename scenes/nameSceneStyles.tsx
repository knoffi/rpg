import { StyleSheet } from "react-native";


export const nameSceneStyles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E8D7B4",
    zIndex:0,
    justifyContent:"flex-start"
  },
  button: {
    backgroundColor: "#fff",
  },
  pickersBar: {
    flex: 1,
    flexDirection: "row",
  },
  accordeonListTitle: {fontSize:30, fontWeight:"bold",textDecorationLine:"underline"},
  drinkName: {fontSize:20,fontWeight:"bold",paddingRight:0,marginRight:0},
  drinkPrice: {fontSize:15,fontStyle:"italic"},
  title: {justifyContent:"center",fontSize:55,fontFamily:"primitive",color:"#a0936c"},
});
