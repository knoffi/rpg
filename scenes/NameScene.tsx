import React from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { Adjective, association } from "../classes/Adjectives";
import { Substantive, substantiveCategory } from "../classes/Substantive";
import { AssociationDialogBar } from "../components/AssociationDialogBar";
import { TavernSign } from "../components/TavernSign";
import { adjectives, substantives } from "../examples/nouns";
import { specialTavernNames } from "../examples/specialTavernNames";
import {
  getFittingRandom,
  getRandomArrayEntry
} from "../helpingFunctions/getFittingRandom";
import { misfitMode } from "../helpingFunctions/misfitMode";
import { getMisfits } from "../helpingFunctions/misFitsHandlers";
import { nameSceneStyles } from "./nameSceneStyles";

const PROBABILITY_SPECIAL_NAME = 0.15;
interface TextState {
  adjective:string,
  invalidSubstantives: substantiveCategory[];
  substantive: string;
  previousPair: { previousAdj: string; previousSub: string };
}

interface NameProps {
  fitting:{fits : association[];
    misfits: association[];};
  onAssociationPick: (newFits:association[],newMisfits:association[])=>void;
  }
  

export class NameScene extends React.Component<NameProps, TextState> {
  constructor(props: any) {
    super(props);
    this.state = {
      adjective: "Nameless",
      invalidSubstantives: [],
      substantive: "Tavern",
      previousPair: { previousAdj: "", previousSub: "" },
    };
  }

  public render() {
    return (
      <View style={nameSceneStyles.backgroundContainer}>
        <AssociationDialogBar fits={this.props.fitting.fits} switchFits={(newFits:association[])=>{this.updateFitsAndMisfits(newFits)}}/>
        <View><TavernSign nameText={this.state.adjective + " " + this.state.substantive}></TavernSign></View>
        <View style={nameSceneStyles.fitButtonContainer}>
          {this.renderRerollButton()}
        </View>
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
      <Button
        mode={"contained"}
        onPress={() => {
          console.log("fits for reroll")
          console.log(this.props.fitting.fits)
          const randomNumber = Math.random();
          if (randomNumber > PROBABILITY_SPECIAL_NAME || this.noFitsActive()) {
            const newPreviousPair = {
              previousAdj: this.state.adjective,
              previousSub: this.state.substantive,
            };
            const invalids = this.rerollAdjectiveGetInvalids();
            this.rerollSubstantive(invalids);
            this.setState({ previousPair: newPreviousPair });
          } else {
            const specialName = this.getSpecialNames();
            this.setState({
              adjective: this.getPairFromSpecialNames(specialName).adjective,
            });
            this.setState({
              substantive: this.getPairFromSpecialNames(specialName)
                .substantive,
            });
          }
        }}
      >
        Reroll!
      </Button>
    );
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
  private rerollAdjectiveGetInvalids() {
    const newAdjective = this.getAdjective();
    this.setState({ adjective: newAdjective.name });
    this.setState({ invalidSubstantives: newAdjective.badWords });
    return newAdjective.badWords;
  }
  private rerollSubstantive(invalids: substantiveCategory[]) {
    this.setState({
      substantive: this.getSubstantiveName(invalids),
    });
  }
  private getAdjective() {
    return getFittingRandom(adjectives, this.props.fitting.fits, this.props.fitting.misfits, [
      this.state.adjective,
      this.state.previousPair.previousAdj,
    ]) as Adjective;
  }
  private getSubstantiveName(invalids: substantiveCategory[]) {
    let validSubstantives = [] as Substantive[];
    substantives.forEach((chapter) => {
      if (!invalids.includes(chapter.category)) {
        validSubstantives = validSubstantives.concat(chapter.substantives as Substantive[]);
      }
    });
    const result = getFittingRandom(
      validSubstantives,
      this.props.fitting.fits,
      this.props.fitting.misfits,
      [this.state.substantive, this.state.previousPair.previousSub]
    ) as Substantive;
    if (result.category === substantiveCategory.solid) {
    }
    return result.name;
  }

  private getPairFromSpecialNames(specialName: string) {
    const breakIndex = specialName.indexOf(" ");
    const adjective = specialName.slice(0, breakIndex);
    const substantive = specialName.slice(breakIndex + 1);
    return { substantive: substantive, adjective: adjective };
  }
  private updateFitsAndMisfits(newFits:association[]) {
    let newMisfits: association[];
    // Testen: Code wird in richtiger Reihenfolge ausgeführt, obwohl wir states setzen? Ja oder Nein?
    newMisfits = getMisfits(newFits, misfitMode.stricter);
    this.props.onAssociationPick(newFits,newMisfits)
  }
}
