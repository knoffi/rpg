import { CreationQuality } from '../contentCreator/CreationQuality';

const DEFAULT_COLOR = '#6200ee';

class ButtonColor {
    private inactive = '#808080';
    private strong = DEFAULT_COLOR;
    private good: string;
    private average: string;
    private weak: string;
    constructor() {
        this.good = ButtonColor.getColor(CreationQuality.GOOD);
        this.average = ButtonColor.getColor(CreationQuality.AVERAGE);
        this.weak = ButtonColor.getColor(CreationQuality.BARELY);
    }
    public get(status: 'inactive' | 'active' | CreationQuality) {
        if (status === 'inactive') {
            return this.inactive;
        } else {
            if (status === 'active') {
                return this.strong;
            } else {
                switch (status) {
                    case CreationQuality.HIGH:
                        return this.strong;
                    case CreationQuality.GOOD:
                        return this.good;
                    case CreationQuality.AVERAGE:
                        return this.average;
                    case CreationQuality.BARELY:
                        return this.weak;
                    case CreationQuality.NONE:
                        return this.inactive;

                    default:
                        throw new Error('ButtonColorNotFound');
                }
            }
        }
    }
    static getColor(quality: CreationQuality): string {
        let divider: number;
        const defaultColor = DEFAULT_COLOR;
        if (quality === CreationQuality.NONE) {
            return 'grey';
        }
        if (quality === CreationQuality.HIGH) {
            return defaultColor;
        }
        switch (quality) {
            case CreationQuality.GOOD:
                divider = 4;
                break;
            case CreationQuality.AVERAGE:
                divider = 3;
                break;
            case CreationQuality.BARELY:
                divider = 2;
                break;

            default:
                divider = 1;
                break;
        }
        const red = parseInt(defaultColor.slice(1, 3), 16);
        const faintRed = Math.round(((255 - red) * 1) / divider + red);
        const green = parseInt(defaultColor.slice(3, 5), 16);
        const faintGreen = Math.round(((255 - green) * 1) / divider + green);
        const blue = parseInt(defaultColor.slice(5, 7), 16);
        const faintBlue = Math.round(((255 - blue) * 1) / divider + blue);
        const faintRedColor =
            faintRed.toString(16) + (faintRed === 0 ? '0' : '');
        const faintGreenColor =
            faintGreen.toString(16) + (faintGreen === 0 ? '0' : '');
        const faintBlueColor =
            faintBlue.toString(16) + (faintBlue === 0 ? '0' : '');
        return '#' + faintRedColor + faintGreenColor + faintBlueColor;
    }
}
export const buttonColors = new ButtonColor();
