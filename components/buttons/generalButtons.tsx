import { AntDesign, Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from "react";
import { Button } from "react-native-paper";

export enum buttonEmphasis{
    low="text",
    medium="outlined",
    high="contained"
}

interface buttonProps{
    onPress:()=>void,size?:number,color?:string,mode?:buttonEmphasis,disabled?:boolean,padding?:number, margin?:number,title?:string,width?:number
}

export const InfoButton=(props:buttonProps)=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled} style={{width:props.width}}><Feather name="info" size={props.size} color={props.color} mode={props.mode} padding={props.padding} margin={props.margin}/></Button>
}
export const RerollButton=(props:buttonProps)=>{
return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<FontAwesome name="random" size={props.size} color={props.color} mode={props.mode}  />}{props.title}</Button>
}
export const DeleteButton=(props:buttonProps)=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<AntDesign name="delete" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const AddButton=(props:buttonProps)=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<Ionicons name="md-add-circle-outline" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const ImportButton=(props:buttonProps)=>{
return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<Feather name="download" size={props.size} color={props.color} mode={props.mode}  />}{props.title}</Button>
}
export const DiceButton=(props:buttonProps)=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<FontAwesome5 name="dice" size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const ShopButton=(props:buttonProps)=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<AntDesign name="shoppingcart"  size={props.size} color={props.color} mode={props.mode}  />}</Button>
}
export const FeatherButton=(props:buttonProps)=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<FontAwesome5 name="feather-alt" size={props.size} color={props.color} mode={props.mode} />}</Button>}

export const PencilButton=(props:buttonProps)=>{
    return  <Button mode={props.mode} onPress={props.onPress} disabled={props.disabled}>{<FontAwesome5 name="pencil-alt" size={props.size} color={props.color} mode={props.mode} />}</Button>
}