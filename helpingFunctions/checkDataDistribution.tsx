import {
    association,
    classAssociations,
    incomeAssociations,
    landAssociations,
    raceAssociations,
} from '../classes/association';
import {
    getStructuredFits,
    StructuredTavernFits,
} from '../classes/StructuredTavernFits';
import { nameIdeas } from '../scenes/nameScene/names/nameIdeas';
type associationNote = { name: association; occurence: number };
const countNamesForStructuredFits = (structuredFits: StructuredTavernFits) => {
    return nameIdeas
        .map((nameIdea) => nameIdea.countFittingChoices(structuredFits))
        .reduce((sum, cur) => sum + cur, 0);
};
export const checkDataDistribution = () => {
    let maxNames = 0;
    let maxCombo: association[] = [];
    let minNames = 10000000000;
    let minCombo: association[] = [];
    landAssociations.forEach((land) => {
        raceAssociations.forEach((race) => {
            incomeAssociations.forEach((income) => {
                classAssociations.forEach((stuff) => {
                    const count = countNamesForStructuredFits(
                        getStructuredFits([land, race, income, stuff])
                    );
                    if (count > maxNames) {
                        maxNames = count;
                        maxCombo = [land, race, income, stuff];
                    }
                    if (count < minNames) {
                        minNames = count;
                        minCombo = [land, race, income, stuff];
                    }
                });
            });
        });
    });
    console.log(
        'Min Names: ' + minNames.toString() + ' with ' + minCombo.toString()
    );
    console.log(
        'Max Names:' + maxNames.toString() + ' with ' + maxCombo.toString()
    );
};
