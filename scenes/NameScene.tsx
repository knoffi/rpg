import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { Adjective, association, getMisfitsOf } from "../classes/Adjectives";
import { Substantive, substantiveCategory } from "../classes/Substantive";
import { FitButton } from "../components/FitButton";
import { NameText } from "../components/NameText";
import { animals } from "../examples/animals";
import { jobs } from "../examples/jobs";
import { adjectives, substantives } from "../examples/nouns";
import { solidObjects } from "../examples/solidObjects";
import {
  buttonStatus,
  buttonStyle,
  getStatuses,
  toggleButtonStatusBG,
} from "../helpingFunctions/buttonStatusCode";
import { checkDataDistribution } from "../helpingFunctions/checkDataDistribution";
import { getFittingRandom } from "../helpingFunctions/getFittingRandom";

interface TextState {
  fits: association[];
  misfits: association[];
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
      adjective: "Golden",
      invalidSubstantives: [],
      substantive: "Bear",
      buttonStatuses: getStatuses(),
      previousPair: { previousAdj: "", previousSub: "" },
    };
  }

  public render() {
    checkDataDistribution(adjectives, "adjective");
    checkDataDistribution(solidObjects, "solid Objects");
    checkDataDistribution(animals, "animals&monsters");
    checkDataDistribution(jobs, "jobs");
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
    return (
      <View style={nameSceneStyles.backgroundContainer}>
        {fitButtonViews}
        <View>
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

  renderRerollButton() {
    return (
      <FitButton
        title={"Reroll"}
        clickHandler={() => {
          const newPreviousPair = {
            previousAdj: this.state.adjective,
            previousSub: this.state.substantive,
          };
          const invalids = this.rerollAdjectiveGetInvalids();
          this.rerollSubstantive(invalids);
          this.setState({ previousPair: newPreviousPair });
        }}
        color="#a26832"
      />
    );
  }
  private rerollAdjectiveGetInvalids() {
    const newAdjective = this.getAdjective();
    this.setState({ adjective: newAdjective.name });
    this.setState({ invalidSubstantives: newAdjective.badWords });
    console.log(newAdjective.badWords);
    return newAdjective.badWords;
  }
  private rerollSubstantive(invalids: substantiveCategory[]) {
    this.setState({
      substantive: this.getSubstantiveName(invalids),
    });
  }
  private getAdjective() {
    return getFittingRandom(adjectives, this.state.fits, this.state.misfits, [
      this.state.adjective,
      this.state.previousPair.previousAdj,
    ]) as Adjective;
  }
  private getSubstantiveName(invalids: substantiveCategory[]) {
    console.log(invalids);
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
        newFits.push(entry.name);
      }
    });
    this.setState({ fits: newFits });
    let newMisfits: association[];
    newMisfits = [];
    newFits.forEach((entry) => {
      getMisfitsOf(entry).forEach((misfit) => {
        newMisfits.push(misfit);
      });
    });
    this.setState({ misfits: newMisfits });
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
