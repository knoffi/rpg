import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { Adjective, association } from "../classes/Adjectives";
import { Substantive, substantiveCategory } from "../classes/Substantive";
import { FitButton } from "../components/FitButton";
import { NameText } from "../components/NameText";
import { adjectives, substantives } from "../examples/nouns";
import { specialTavernNames } from "../examples/specialTavernNames";
import {
  buttonStatus,
  buttonStyle,
  getStatuses,
  toggleButtonStatusBG,
} from "../helpingFunctions/buttonStatusCode";
import {
  getFittingRandom,
  getRandomArrayEntry,
} from "../helpingFunctions/getFittingRandom";
import { misfitMode } from "../helpingFunctions/misfitMode";
import { getMisfits } from "../helpingFunctions/misFitsHandlers";

interface TextState {
  fits: association[];
  misfits: association[];
  misfitMode: misfitMode;
  adjective: string;
  invalidSubstantives: substantiveCategory[];
  substantive: string;
  buttonStatuses: buttonStatus[];
  previousPair: { previousAdj: string; previousSub: string };
}

export class NameScene extends React.Component<{}, TextState> {
  constructor(props: any) {
    super(props);
    this.state = {
      fits: [],
      misfits: [],
      misfitMode: misfitMode.income,
      adjective: "Golden",
      invalidSubstantives: [],
      substantive: "Bear",
      buttonStatuses: getStatuses(),
      previousPair: { previousAdj: "", previousSub: "" },
    };
  }

  public render() {
    //checkDataDistribution(adjectives, "adjective");
    //checkDataDistribution(solidObjects, "solid Objects");
    //checkDataDistribution(animals, "animals&monsters");
    //checkDataDistribution(jobs, "jobs");
    const fitButtonNames = Object.values(association);
    let fitButtonViews = [] as any[];
    fitButtonNames.forEach((name) => {
      const index = fitButtonNames.indexOf(name);
      if ((1 + index) % 3 == 0) {
        fitButtonViews.push(
          <View style={nameSceneStyles.fitButtonContainer} key={name + "View"}>
            {this.renderFitButton(fitButtonNames[index - 2])}
            {this.renderFitButton(fitButtonNames[index - 1])}
            {this.renderFitButton(fitButtonNames[index])}
          </View>
        );
      }
    });
    const selectionModes = Object.values(misfitMode);
    let selectionModeButtons = selectionModes.map((modeName) => {
      return this.renderMistfitModeButton(modeName);
    });
    return (
      <View style={nameSceneStyles.backgroundContainer}>
        {fitButtonViews}
        <View>
          {this.renderTavernText(this.state.adjective, this.state.substantive)}
          {this.renderRerollButton()}
        </View>
        <View style={nameSceneStyles.fitButtonContainer}>
          <SceneButton
            fits={this.state.fits}
            misfits={this.state.misfits}
          ></SceneButton>
          {selectionModeButtons}
          {this.renderTavernText(this.state.adjective, this.state.substantive)}
          {this.renderRerollButton()}
        </View>
        <View>
          <SceneButton
            fits={this.state.fits}
            misfits={this.state.misfits}
          ></SceneButton>
        </View>
      </View>
    );
  }

  renderMistfitModeButton(modeName: misfitMode) {
    return (
      <Button
        title={modeName}
        onPress={() => {
          this.setState({ misfitMode: modeName });
          console.log(modeName);
        }}
        key={modeName + "Mode"}
      ></Button>
    );
  }

  renderRerollButton() {
    return (
      <FitButton
        title={"Reroll"}
        clickHandler={() => {
          const randomNumber = Math.random();
          if (randomNumber < 0.9 || this.state.fits.length === 0) {
            const newPreviousPair = {
              previousAdj: this.state.adjective,
              previousSub: this.state.substantive,
            };
            const invalids = this.rerollAdjectiveGetInvalids();
            this.rerollSubstantive(invalids);
            this.setState({ previousPair: newPreviousPair });
          } else {
            const specialName = this.getSpecialNames(this.state.fits);
            this.setState({
              adjective: this.getPairFromSpecialNames(specialName).adjective,
            });
            this.setState({
              substantive: this.getPairFromSpecialNames(specialName)
                .substantive,
            });
          }
        }}
        color="#a26832"
      />
    );
  }
  getSpecialNames(fits: association[]) {
    if (fits.length === 0) {
      return this.getAdjective().name.concat(
        " ".concat(this.getSubstantiveName([]))
      );
    }
    const randomFit = getRandomArrayEntry(this.state.fits);
    const specialNames = specialTavernNames.filter((entry) => {
      return entry.association === randomFit;
    });
    if (specialNames.length === 0) {
      console.log(
        "specialNames ist leer! Das sollte abr nicht passieren! this.sate.fits ist nämlich nicht leer!"
      );
    }
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
    console.log("here comes the fits");
    console.log(this.state.fits);
    return getFittingRandom(adjectives, this.state.fits, this.state.misfits, [
      this.state.adjective,
      this.state.previousPair.previousAdj,
    ]) as Adjective;
  }
  private getSubstantiveName(invalids: substantiveCategory[]) {
    let validSubstantives = [] as Substantive[];
    substantives.forEach((chapter) => {
      if (!invalids.includes(chapter.category)) {
        validSubstantives = validSubstantives.concat(chapter.substantives);
      }
    });
    const result = getFittingRandom(
      validSubstantives,
      this.state.fits,
      this.state.misfits,
      [this.state.substantive, this.state.previousPair.previousSub]
    ) as Substantive;
    if (result.category === substantiveCategory.solid) {
    }
    return result.name;
  }
  private renderFitButton(fitName: association) {
    let index = this.findFitButtonIndex(fitName);

    return (
      <View style={nameSceneStyles.button} key={fitName + "view"}>
        <FitButton
          title={fitName}
          key={fitName}
          clickHandler={() => {
            this.updateFits(fitName);
          }}
          color={this.state.buttonStatuses[index].background}
        />
      </View>
    );
  }
  private getPairFromSpecialNames(specialName: string) {
    const breakIndex = specialName.indexOf(" ");
    const adjective = specialName.slice(0, breakIndex);
    const substantive = specialName.slice(breakIndex + 1);
    return { substantive: substantive, adjective: adjective };
  }
  private updateFits(fitName: string) {
    const newStatuses = this.state.buttonStatuses.map((entry) => {
      if (entry.name != fitName) {
        return entry;
      } else {
        toggleButtonStatusBG(entry);
        return entry;
      }
    });

    this.setState({ buttonStatuses: newStatuses });

    let newFits: association[];
    newFits = [];
    this.state.buttonStatuses.forEach((entry) => {
      if (entry.background === buttonStyle.used) {
        console.log("-");
        console.log(entry.name);
        console.log("-");
        newFits.push(entry.name);
      }
    });
    console.log("hi");
    console.log(newFits);
    this.setState({ fits: newFits });
    let newMisfits: association[];
    newMisfits = getMisfits(newFits, this.state.misfitMode);
    this.setState({ misfits: newMisfits });
    console.log(newMisfits);
    console.log("misfits von poor bei income mode");
    console.log(getMisfits([association.poor], misfitMode.income));
  }

  private renderTavernText(adjName: string, subName: string) {
    return <NameText adj={adjName} sub={subName} />;
  }

  private findFitButtonIndex(fitName: string) {
    let index = 0;
    let count = 0;
    Object.values(association).forEach((entry) => {
      if (entry === fitName) {
        index = count;
      }
      count++;
    });
    return index;
  }
}

const nameSceneStyles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    justifyContent: "space-between",
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
});
const SceneButton = (props: any) => {
  const navigation = useNavigation();
  return (
    <Button
      title="Tavern Menu"
      onPress={() => {
        navigation.navigate("MenuScene", {
          fits: props.fits,
          misfits: props.misfits,
        });
      }}
    ></Button>
  );
};
