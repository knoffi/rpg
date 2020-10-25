import React from "react";
import { Button, Image, ImageBackground, Text, View } from "react-native";


export const TavernSign = (props: { nameText: string}) => {
  const [familyIndex, setFamilyIndex] = React.useState(0);
  const [colorIndex, setColorIndex] = React.useState(0);

  const fontFamilies = ["EnglishGothic", "Breitkopf", "primitive", "strassburg", 'chomsky', 'canterbury', 'deutschGothic', 'deutschZier', 'fiddum', 'metalMacabre', 'pau', 'rapscallion'];
  const fontSizes = [30, 42, 30, 66, 34, 38, 36, 34, 38, 26, 36, 46];
  const fontColors = ["gold", "goldenrod", "navajowhite", "firebrick", "silver", "gainsboro"];

  return <View>
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      <Button title={"Family Forward"} onPress={() => { setFamilyIndex((familyIndex + 1) % fontFamilies.length); }}>
      </Button>
      <Button title={"Family Back"} onPress={() => { setFamilyIndex((fontFamilies.length + familyIndex - 1) % fontFamilies.length); }}>
      </Button>
    </View>
    <ImageBackground source={require("../assets/tavernSign.png")} style={{ width: 330, height: 140, alignSelf: "center", flexDirection: "column", justifyContent: "center" }}>
      <View style={{ alignSelf: "center", flexDirection: "column", justifyContent: "space-evenly" }}>
        <Text style={{ alignContent: "center", textAlign: "center", fontSize: fontSizes[familyIndex] / 2, color: fontColors[colorIndex], fontFamily: fontFamilies[familyIndex] }}>
          The
    </Text>
        <Text style={{ textAlign: "center", fontSize: fontSizes[familyIndex], color: fontColors[colorIndex], fontFamily: fontFamilies[familyIndex] }}>
          {props.nameText}
        </Text>
      </View></ImageBackground>
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      <Button title={"Color Forward"} onPress={() => { setColorIndex((colorIndex + 1) % fontColors.length); }}>
      </Button>
      <Button title={"Color Back"} onPress={() => { setColorIndex((fontColors.length + colorIndex - 1) % fontColors.length); }}><Image source={require("../assets/splash.png")} style={{}}></Image>
      </Button>
    </View>
  </View>;
};

