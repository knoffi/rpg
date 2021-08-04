import { Noticable } from '../idea/Noticable';

const maleToFemale: { male: string; female: string }[] = [
    { male: 'his', female: 'her' },
    { male: 'him', female: 'her' },
    { male: 'he', female: 'she' },
    { male: 'His', female: 'Her' },
    { male: 'Him', female: 'Her' },
    { male: 'He', female: 'She' },
    { male: 'Turban', female: 'Face veil' },
    { male: 'Tagelmust', female: 'Face veil' },
    { male: 'Tarbush hat', female: 'Face veil' },
    { male: 'Keffiyeh', female: 'Niqab veil' },
];

const translateMaleToFemale = (maleText: string) => {
    const words = maleText.split(' ');
    words.forEach((word, index) => {
        maleToFemale.forEach((pronoun) => {
            if (word === pronoun.male) {
                words[index] = pronoun.female;
            }
        });
    });
    const femaleText = words.reduce((text, word) => text + ' ' + word, '');
    return femaleText;
};

export class ImpressionDisplay {
    private text: string;
    private sex: string;
    private category: Noticable;
    constructor(text: string, category: Noticable, sex?: 'male' | 'female') {
        this.text = text;
        this.sex = sex || 'male';
        this.category = category;
    }
    public setSex(sex: 'male' | 'female') {
        if (this.category === Noticable.bartender) {
            this.sex = sex;
        } else {
            throw new Error('Only bartender can change sex');
        }
    }
    public getText() {
        return this.sex === 'male'
            ? this.text
            : translateMaleToFemale(this.text);
    }
}
