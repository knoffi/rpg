import { StyleSheet } from "react-native";


export const nameSceneStyles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    justifyContent: "space-between",
    backgroundColor: "#E8D7B4",
    zIndex:0,
  },
  fitButtonContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#fff",
    width: "31%",
    height: 40,
  },
  pickersBar: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    zIndex: 1,
  },
});
