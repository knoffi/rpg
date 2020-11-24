import React, { useState } from "react"
import { View } from "react-native"
import { association } from "../classes/Adjectives"
import { AssociationPicker } from "./AssociationPicker"

export const AssociationPickerBar = (props:{fits:association[],switchFits:(newFits:association[])=>void}) => {
    const [pickersOpen,setPickersOpen ] = useState(false);
    return <View style={{flexDirection:"row"}}>
        <AssociationPicker isClickable = {!pickersOpen} pickAssociationList={landAssociations} startText={"LAND"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}} onPress={()=>{setPickersOpen(true)} } onDismissOrPick={()=>{setPickersOpen(false)}} color={colors.land}></AssociationPicker>
        <AssociationPicker isClickable = {!pickersOpen} pickAssociationList={incomeAssociations}  startText={"INCOME"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}} onPress={()=>{setPickersOpen(true)} } onDismissOrPick={()=>{setPickersOpen(false)}} color={colors.income}></AssociationPicker>
        <AssociationPicker isClickable = {!pickersOpen} pickAssociationList={classAssociations} startText={"CLASS"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}} onPress={()=>{setPickersOpen(true)} } onDismissOrPick={()=>{setPickersOpen(false)}} color={colors.class}></AssociationPicker>
        <AssociationPicker isClickable = {!pickersOpen} pickAssociationList={raceAssociations} startText={"RACE"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}} onPress={()=>{setPickersOpen(true)} } onDismissOrPick={()=>{setPickersOpen(false)}} color={colors.race}></AssociationPicker>
        <AssociationPicker isClickable = {!pickersOpen} pickAssociationList={specialAssociations} startText={"SPECIALS"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}} onPress={()=>{setPickersOpen(true)} } onDismissOrPick={()=>{setPickersOpen(false)}} color={colors.specials}></AssociationPicker>
    </View>
    }

const a=association;
const landAssociations=[a.city,a.forest,a.mountain,a.desert,a.haven,a.village,a.tropical,a.underdark]
const incomeAssociations=[a.worker,a.poor,a.sophisticated,a.rich]
const raceAssociations=[a.dwarf,a.drow,a.elf,a.human,a.gnome,a.halfling,a.tiefling]
const classAssociations=[a.adventurer,a.barbarian,a.bard,a.dragonborn,a.cleric,a.wizard,a.nobel,a.druid]
const specialAssociations=[a.criminal,a.prostitute,a.evil]

const getNewFits=(array:association[],newAssociation:association,oldAssociation:association)=>{
    const switchedOutArray= array.filter(element => {return element !== oldAssociation});
    switchedOutArray.push(newAssociation);
    return switchedOutArray;
}


const colors={land:"#117A65",income:"#B9770E",class:"#76448A",race:"#717D7E",specials:"#B03A2E"}