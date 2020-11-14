import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HEAD_LINE_COLOR= "#080c45"
const HEAD_LINE_SIZE=25

export const Headline=(props:{headline:string})=>{
    return <View style={{flexDirection:"row", justifyContent:"flex-start",marginLeft:5,borderBottomColor:HEAD_LINE_COLOR,borderBottomWidth:StyleSheet.hairlineWidth,borderTopColor:HEAD_LINE_COLOR,borderTopWidth:StyleSheet.hairlineWidth}}>
        <Text style={{color:HEAD_LINE_COLOR,fontSize:HEAD_LINE_SIZE}}>{props.headline}</Text>
    </View>
}
//<Image source={require("../assets/half_midnightBlueBar.png")}></Image>