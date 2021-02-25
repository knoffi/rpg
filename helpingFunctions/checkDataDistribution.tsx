import { association } from '../classes/association';
import { ITavernAsset } from './ITavernAsset';
type associationNote = { name: association; occurence: number };
export const checkDataDistribution = (
    data: ITavernAsset[],
    dataName: string
) => {
    const dataDistribution = [] as associationNote[];
    Object.values(association).filter((entry) => {
        if (typeof entry === 'string') {
            dataDistribution.push({ name: entry, occurence: 0 });
        }
    });
    data.forEach((entry) => {
        entry.associations.forEach((association) => {
            dataDistribution.forEach((note) => {
                if (note.name === association) {
                    note.occurence++;
                }
            });
        });
    });
    const minNote = dataDistribution.reduce((currMinNote, note) => {
        return note.occurence < currMinNote.occurence ? note : currMinNote;
    });
    const maxNote = dataDistribution.reduce((currMaxNote, note) => {
        return note.occurence > currMaxNote.occurence ? note : currMaxNote;
    });
    const average =
        dataDistribution
            .map((note) => note.occurence)
            .reduce((sum, occurence) => sum + occurence, 0) /
        dataDistribution.length;
    console.log('Data for ' + dataName);
    console.log('minimal');
    console.log(minNote);
    console.log('maximal');
    console.log(maxNote);
    console.log('average');
    console.log(average / dataDistribution.length);
};
