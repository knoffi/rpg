import React from "react";
import { StyleSheet, View } from "react-native";
import { association, getMisfitsOf } from "./Adjectives";
import { adjectives, substantives } from "./descriptions";
import { FitButton } from "./FitButton";
import { TavernText } from "./TavernText";

export default App;

enum buttonStyle {
  used = "#54cf3c",
  notUsed = "#f24545",
}

const toggleButtonStatusBG = (buttonStatus: {
  name: string;
  background: buttonStyle;
}) => {
  if (buttonStatus.background === buttonStyle.used) {
    buttonStatus.background = buttonStyle.notUsed;
  } else {
    buttonStatus.background = buttonStyle.used;
  }
};

interface buttonStatus {
  name: association;
  background: buttonStyle;
}
interface TextState {
  fits: association[];
  misfits: association[];
  adjective: string;
  substantive: string;
  buttonStatuses: buttonStatus[];
  previousPair: { previousAdj: string; previousSub: string };
}
const getStatuses = () => {
  return Object.values(association).map((entry) => {
    return { name: entry, background: buttonStyle.notUsed };
  });
};
export class App extends React.Component<{}, TextState> {
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
    console.log(this.state.buttonStatuses.length);
  }

  public render() {
    const fitButtons = Object.values(association).map((associationName) => {
      return this.renderFitButton(associationName);
    });
    return (
      <View>
        <View style={fitButtonStyle.container}>{fitButtons}</View>
        <View style={textRerollStyle.container}>
          {this.renderTavernText(this.state.adjective, this.state.substantive)}
          {this.renderRerollButton()}
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
    let test = adjectives[Math.floor(Math.random() * adjectives.length)];
    while (
      !test.isFit(this.state.fits, this.state.misfits, 0, 0) ||
      test.name === this.state.previousPair.previousAdj ||
      test.name === this.state.adjective
    ) {
      test = adjectives[Math.floor(Math.random() * adjectives.length)];
    }
    return test.name;
  }
  private getSubstantiveName() {
    let test = substantives[Math.floor(Math.random() * substantives.length)];
    while (
      !test.isFit(this.state.fits, this.state.misfits, 0, 0) ||
      test.name === this.state.previousPair.previousSub ||
      test.name === this.state.substantive
    ) {
      test = substantives[Math.floor(Math.random() * substantives.length)];
    }
    return test.name;
  }
  private renderFitButton(fitName: association) {
    let index = this.findFitButtonIndex(fitName);

    return (
      <FitButton
        title={fitName}
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
    Promise.all(newStatuses).then(() => {
      this.setState({ buttonStatuses: newStatuses });
    });
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
