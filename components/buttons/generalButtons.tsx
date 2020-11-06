import { AntDesign, Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from "react";
import { Button } from "react-native-paper";

export enum buttonEmphasis{
    low="text",
    medium="outlined",
    high="contained"
}

export const InfoButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis,disabled?:boolean})=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<Feather name="info" size={props.size} color={props.color} mode={props.mode} />}</Button>
}
export const RerollButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis,disabled?:boolean})=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<FontAwesome name="random" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const DeleteButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis,disabled?:boolean})=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<AntDesign name="delete" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const AddButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis,disabled?:boolean})=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<Ionicons name="md-add-circle-outline" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const ImportButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis,disabled?:boolean})=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<Feather name="download" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const DiceButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis,disabled?:boolean})=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<FontAwesome5 name="dice" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const ShopButton=(props:{onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis,disabled?:boolean})=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<AntDesign name="shoppingcart"  size={props.size} color={props.color} mode={props.mode}  />}</Button>
}