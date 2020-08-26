import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { association, getMisfitsOf } from "./Adjectives";
import {
  buttonStatus,
  buttonStyle,
  getStatuses,
  toggleButtonStatusBG,
} from "./buttonStatusCode";
import { adjectives, substantives } from "./examples/nouns";
import { FitButton } from "./FitButton";
import { getFittingRandom } from "./getFittingRandom";
import { TavernText } from "./TavernText";

interface TextState {
  fits: association[];
  misfits: association[];
  adjective: string;
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
      substantive: "Bear",
      buttonStatuses: getStatuses(),
      previousPair: { previousAdj: "", previousSub: "" },
    };
  }

  public render() {
    const fitButtons = Object.values(association).map((associationName) => {
      return this.renderFitButton(associationName);
    });
    return (
      <View>
        <View style={textRerollStyle.container}>
          {fitButtons}
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
          this.rerollAdjective();
          this.rerollSubstantive();
          this.setState({ previousPair: newPreviousPair });
        }}
        color="#a26832"
      />
    );
  }
  private rerollAdjective() {
    this.setState({ adjective: this.getAdjectiveName() });
  }
  private rerollSubstantive() {
    this.setState({ substantive: this.getSubstantiveName() });
  }
  private getAdjectiveName() {
    return getFittingRandom(adjectives, this.state.fits, this.state.misfits, [
      this.state.adjective,
      this.state.previousPair.previousAdj,
    ]).name;
  }
  private getSubstantiveName() {
    return getFittingRandom(substantives, this.state.fits, this.state.misfits, [
      this.state.substantive,
      this.state.previousPair.previousSub,
    ]).name;
  }
  private renderFitButton(fitName: association) {
    let index = this.findFitButtonIndex(fitName);

    return (
      <FitButton
        title={fitName}
        key={fitName}
        clickHandler={() => {
          this.updateFits(fitName);
        }}
        color={this.state.buttonStatuses[index].background}
      />
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
    return <TavernText adj={adjName} sub={subName} />;
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

const fitButtonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
const textRerollStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
const SceneButton = (props: any) => {
  const navigation = useNavigation();
  console.log({
    fits: props.fits,
    misfits: props.misfits,
  });
  return (
    <Button
      title="Tavern Menu"
      onPress={() => {
        navigation.navigate("TavernMenu", {
          fits: props.fits,
          misfits: props.misfits,
        });
      }}
    ></Button>
  );
};
