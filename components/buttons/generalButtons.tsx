import { AntDesign, Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from "react";
import { Button } from "react-native-paper";

export enum buttonEmphasis{
    low="text",
    medium="outlined",
    high="contained"
}

export const InfoButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis})=>{
    return  <Button mode={props.mode} onPress={props.onPress}>{<Feather name="info" size={props.size} color={props.color} mode={props.mode} />}</Button>
}
export const RerollButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis})=>{
    return  <Button mode={props.mode} onPress={props.onPress}>{<FontAwesome name="random" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const DeleteButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis})=>{
    return  <Button mode={props.mode} onPress={props.onPress}>{<AntDesign name="delete" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const AddButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis})=>{
    return  <Button mode={props.mode} onPress={props.onPress}>{<Ionicons name="md-add-circle-outline" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const ImportButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis})=>{
    return  <Button mode={props.mode} onPress={props.onPress}>{<Feather name="download" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const DiceButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis})=>{
    return  <Button mode={props.mode} onPress={props.onPress}>{<FontAwesome5 name="dice" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const ShopButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis})=>{
    return  <Button mode={props.mode} onPress={props.onPress}>{<AntDesign name="shoppingcart"  size={props.size} color={props.color} mode={props.mode}  />}</Button>
}