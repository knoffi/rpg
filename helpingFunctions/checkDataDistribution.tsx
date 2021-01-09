import { association } from '../classes/Adjectives';
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
    let minNote = dataDistribution[0];
    let maxNote = dataDistribution[0];
    let average = 0;
    dataDistribution.forEach((note) => {
        if (note.occurence < minNote.occurence) {
            minNote = note;
        }
        if (note.occurence > maxNote.occurence) {
            maxNote = note;
        }
        average += note.occurence;
    });
    console.log('Data for ' + dataName);
    console.log('minimal');
    console.log(minNote);
    console.log('maximal');
    console.log(maxNote);
    console.log('average');
    console.log(average / dataDistribution.length);
};
