import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { Button, List } from 'react-native-paper';
import { association } from '../../classes/association';
import { NameIdea } from '../../classes/idea/NameIdea';
import {
    getFitsFromStructure,
    StructuredTavernFits,
} from '../../classes/idea/StructuredTavernFits';
import {
    buttonEmphasis,
    PencilButton,
    RerollButton,
} from '../../components/buttons/generalButtons';
import { checkDataDistribution } from '../../helpingFunctions/checkDataDistribution';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { TavernData } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { AssociationDialogBar } from './associationBar/AssociationDialogBar';
import { nameIdeas } from './names/nameIdeas';
import { getSpecialTavernName } from './names/specialTavernNames';
import { nameSceneStyles } from './nameSceneStyles';
import { NameSetDialog } from './NameSetDialog';
import { TavernSign } from './TavernSign';

const PROBABILITY_SPECIAL_NAME = 0.15;
const MAX_NAME_MEMORY = 2;
type TextState = {
    nameSetDialogOpen: boolean;
    dialogText: string;
    oldNameParts: string[];
};

type NameProps = {
    fitting: StructuredTavernFits;
    name: string;
    onDataChange: (newData: Partial<TavernData>) => void;
    getImpliedChanges: (
        newFitting: StructuredTavernFits
    ) => Partial<TavernData>;
};

const SECTION_FLEX = 0.2;
export class NameScene extends React.Component<NameProps, TextState> {
    private userActivelySetPowerfit: boolean;
    constructor(props: any) {
        super(props);
        this.state = {
            nameSetDialogOpen: false,
            dialogText: '',
            oldNameParts: [],
        };
        this.userActivelySetPowerfit = false;
    }

    public render() {
        return (
            <View style={nameSceneStyles.backgroundView}>
                <List.Section
                    style={{ flex: SECTION_FLEX }}
                    title="NAME"
                    titleStyle={globalStyles.title}
                >
                    <List.Item title=""></List.Item>
                </List.Section>
                <View style={nameSceneStyles.associationView}>
                    <View>
                        <AssociationDialogBar
                            setPowerFit={this.setPowerFitByName.bind(this)}
                            fits={this.props.fitting}
                            switchFits={(
                                newFits: Partial<StructuredTavernFits>
                            ) => {
                                this.updateFits(newFits);
                            }}
                        />
                    </View>
                    <View style={nameSceneStyles.signView}>
                        <NameSetDialog
                            tavernName={this.props.name}
                            setTavernName={(name: string) => {
                                this.props.onDataChange({ name: name });
                            }}
                            open={this.state.nameSetDialogOpen}
                            startText={this.state.dialogText}
                            setStartText={(text: string) => {
                                this.setState({ dialogText: text });
                            }}
                            onDismiss={() => {
                                this.setState({ nameSetDialogOpen: false });
                            }}
                        />
                        <TavernSign nameText={this.props.name}></TavernSign>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                paddingHorizontal: 0,
                            }}
                        >
                            {this.renderRerollButton()}
                            <PencilButton
                                onPress={() => {
                                    this.setState({ nameSetDialogOpen: true });
                                }}
                                mode={buttonEmphasis.high}
                                title={'EDIT'}
                            />
                        </View>
                        {this.getFittingNamesSign()}
                    </View>
                </View>
            </View>
        );
    }
    private setPowerFitByName(name: string) {
        const newPowerFit = Object.values(association).find(
            (fit) => (fit as string) === name
        );
        if (newPowerFit) {
            const newFits: StructuredTavernFits = {
                ...this.props.fitting,
            };
            if (name === this.props.fitting.powerFit) {
                this.userActivelySetPowerfit = false;
                newFits.powerFit = undefined;
            } else {
                this.userActivelySetPowerfit = true;
                newFits.powerFit = newPowerFit;
            }
            this.props.onDataChange({ fitting: newFits });
        }
    }
    private renderRerollButton() {
        return (
            <RerollButton
                mode={buttonEmphasis.high}
                onPress={() => this.rerollName()}
                title=" NAME"
            ></RerollButton>
        );
    }

    private rerollName() {
        console.log(JSON.stringify(this.state.oldNameParts));
        const randomNumber = Math.random();
        if (randomNumber > PROBABILITY_SPECIAL_NAME) {
            const possibleNames = nameIdeas.filter((nameIdea) =>
                nameIdea.fitsToTavern(this.props.fitting)
            );
            const newNameIdea = getRandomArrayEntry(possibleNames) as NameIdea;
            if (!newNameIdea) {
                console.log(
                    'There was not fitting name idea which I could have chosen'
                );
            }
            const newName = newNameIdea
                ? newNameIdea.getConcreteName(
                      this.props.fitting,
                      this.state.oldNameParts
                  )
                : 'Nameless Tavern';
            this.updateByNewName(newName);
        } else {
            const specialName = this.getSpecialNames();
            this.props.onDataChange({ name: specialName });
        }
    }

    private getSpecialNames() {
        return getSpecialTavernName(this.props.fitting);
    }

    private updateByNewName(newName: string) {
        this.props.onDataChange({ name: newName });
        const incomingNameParts = newName.split(' ');
        const newOldNameParts = [
            ...this.state.oldNameParts,
            ...incomingNameParts,
        ].filter(
            (part, index) =>
                this.state.oldNameParts.length <= MAX_NAME_MEMORY ||
                index >= incomingNameParts.length
        );
        this.setState({ oldNameParts: newOldNameParts });
    }

    private updateFits(newFit: Partial<StructuredTavernFits>) {
        const newFitting: StructuredTavernFits = {
            ...this.props.fitting,
            ...newFit,
        };
        const updatedFits = getFitsFromStructure(newFitting);
        const oldPowerFit = this.props.fitting.powerFit;
        if (oldPowerFit && !updatedFits.includes(oldPowerFit)) {
            newFitting.powerFit = undefined;
            this.userActivelySetPowerfit = false;
        }
        if (!this.userActivelySetPowerfit) {
            if (updatedFits.length === 1) {
                newFitting.powerFit = updatedFits[0];
            } else {
                newFitting.powerFit = undefined;
            }
        }
        this.props.onDataChange({
            fitting: newFitting,
            ...this.props.getImpliedChanges(newFitting),
        });
    }

    private getFittingNamesSign() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Button
                    onPress={() => {
                        checkDataDistribution();
                    }}
                >
                    {this.totalNumberOfPossibleNames()}
                </Button>
            </View>
        );
    }
    private totalNumberOfPossibleNames() {
        return nameIdeas
            .map((nameIdea) => nameIdea.countFittingChoices(this.props.fitting))
            .reduce((sum, cur) => sum + cur, 0);
    }
}
