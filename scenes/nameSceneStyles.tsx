import { StyleSheet } from "react-native";


export const nameSceneStyles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E8D7B4",
    zIndex:0,
    justifyContent:"space-evenly"
  },
  fitButtonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#fff",
  },
  pickersBar: {
    flex: 1,
    flexDirection: "row",
  },
  accordeonListTitle: {fontSize:30, fontWeight:"bold",textDecorationLine:"underline"},
  drinkName: {fontSize:20,fontWeight:"bold"},
  drinkPrice: {fontSize:15,fontStyle:"italic"},
});
