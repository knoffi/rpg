import React from "react";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import { Adjective, association } from "../classes/Adjectives";
import { Substantive, substantiveCategory } from "../classes/Substantive";
import { AssociationDialogBar } from "../components/AssociationDialogBar";
import { buttonEmphasis, ImportButton, RerollButton } from "../components/buttons/generalButtons";
import { TavernSign } from "../components/TavernSign";
import { adjectives, substantives } from "../examples/nouns";
import { specialTavernNames } from "../examples/specialTavernNames";
import {
  getFittingRandom,
  getRandomArrayEntry
} from "../helpingFunctions/getFittingRandom";
import { misfitMode } from "../helpingFunctions/misfitMode";
import { getMisfits } from "../helpingFunctions/misFitsHandlers";
import { nameSplitter } from "../helpingFunctions/nameSplitter";
import { nameSceneStyles } from "./nameSceneStyles";

const PROBABILITY_SPECIAL_NAME = 0.15;
const CHARACTER_MAX_ON_LINE = 15;
interface TextState {
  invalidSubstantives: substantiveCategory[],
  isSpecialName:boolean
}

interface NameProps {
  fitting:{fits : association[];
    misfits: association[];};
  updateFitting: (newFits:association[],newMisfits:association[])=>void;
  name: string;
  updateName:(name:string)=> void;
  undoFAB:JSX.Element;
  }
  
// Food Scene: Fehler bei Main Dish
export class NameScene extends React.Component<NameProps, TextState> {
  constructor(props: any) {
    super(props);
    this.state = {
      invalidSubstantives: [],
      isSpecialName:true
    };
  }

  public render() {
    return (
      <View style={nameSceneStyles.backgroundContainer}>
        <Text style={nameSceneStyles.title}>Name</Text>
        <View>
        <AssociationDialogBar fits={this.props.fitting.fits} switchFits={(newFits:association[])=>{this.updateFitsAndMisfits(newFits)}}/>
        </View>
        <View>
          <TavernSign nameText={nameSplitter(this.props.name,CHARACTER_MAX_ON_LINE)}></TavernSign>
          <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingHorizontal:0}}>
            {this.renderRerollButton()}
            <ImportButton onPress={()=>{}} mode={buttonEmphasis.high} title={"IMPORT"}/>
          </View>
        </View>
        {this.props.undoFAB}
      </View>
    );
  }

  noFitsActive() {
    let noFitsActive=true;
    this.props.fitting.fits.forEach(fit => {if(fit !== association.empty){noFitsActive=false}});
    return noFitsActive
  }

  renderRerollButton() {
    return (
      <RerollButton mode={buttonEmphasis.high} onPress={()=>this.rerollName()} title=" NAME"></RerollButton>
    );
  }

  rerollName(){
    const randomNumber = Math.random();
    if (randomNumber > PROBABILITY_SPECIAL_NAME || this.noFitsActive()) {
      const newAdjective = this.getAdjective()
      const newName = newAdjective.name + " " +  this.getSubstantiveName(newAdjective.badWords)
      this.props.updateName(newName)
      this.setState({isSpecialName: false})
    } else {
      this.props.updateName(  this.getSpecialNames());
      this.setState({isSpecialName: true})
    }
  }
  getSpecialNames() {
    const randomFit = getRandomArrayEntry(this.props.fitting.fits);
    const specialNames = specialTavernNames.filter((entry) => {
      return entry.association === randomFit;
    });
    if (specialNames.length === 0) {
      console.log(
        "specialNames ist leer! Das sollte abr nicht passieren! this.props.fitting.fits ist nämlich nicht leer!"
      );
    }
    if(!randomFit){return getRandomArrayEntry(specialTavernNames[0].names)}
    return getRandomArrayEntry(specialNames[0].names);
  }

  private getAdjective() {
    const prevAdjective = this.getNameParts().adjective
    return getFittingRandom(adjectives, this.props.fitting.fits, this.props.fitting.misfits, [
      prevAdjective,
    ]) as Adjective;
  }
  private getSubstantiveName(invalids: substantiveCategory[]) {
    const prevSubstantive=this.getNameParts().substantive
    let validSubstantives = [] as Substantive[];
    substantives.forEach((chapter) => {
      if (!invalids.includes(chapter.category)) {
        validSubstantives = validSubstantives.concat(chapter.substantives as Substantive[]);
      }
    });
    return getFittingRandom(
      validSubstantives,
      this.props.fitting.fits,
      this.props.fitting.misfits,
      [prevSubstantive]
    ).name;
  }

  private getNameParts() {
    const name = this.props.name;
    if(this.state.isSpecialName){
      return {substantive:"",adjective:""}
    }
    else{
    const breakIndex = name.indexOf(" ");
    const adjective = name.slice(0, breakIndex);
    const substantive = name.slice(breakIndex + 1);
    return { substantive: substantive, adjective: adjective };
    }
  }
  private updateFitsAndMisfits(newFits:association[]) {
    let newMisfits: association[];
    // Testen: Code wird in richtiger Reihenfolge ausgeführt, obwohl wir states setzen? Ja oder Nein?
    newMisfits = getMisfits(newFits, misfitMode.stricter);
    this.props.updateFitting(newFits,newMisfits)
  }
}
