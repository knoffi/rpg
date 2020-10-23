import React from "react"
import { View } from "react-native"
import { Divider } from "react-native-paper"
import { association } from "../classes/Adjectives"
import { AssociationDialog } from "./AssociationDialog"

export const AssociationDialogBar = (props:{fits:association[],switchFits:(newFits:association[])=>void}) => {
    return <View><View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
        <AssociationDialog pickAssociationList={landAssociations} startText={"LAND"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}}  color={colors.land}></AssociationDialog>
        <AssociationDialog pickAssociationList={incomeAssociations}  startText={"INCOME"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}}  color={colors.income}></AssociationDialog>
        <AssociationDialog pickAssociationList={classAssociations} startText={"CLASS"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}}  color={colors.class}></AssociationDialog>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
        <AssociationDialog pickAssociationList={raceAssociations} startText={"RACE"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}}  color={colors.race}></AssociationDialog>
        <AssociationDialog pickAssociationList={specialAssociations} startText={"SPECIALS"} onPick={(oldAssociation:association,newAssociation:association)=>{props.switchFits( getNewFits(props.fits,newAssociation,oldAssociation))}}  color={colors.specials}></AssociationDialog>
    </View>
    <Divider />
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