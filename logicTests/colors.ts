import { assert, expect } from 'chai';
import { buttonColors } from '../classes/buttonColor/ButtonColor';
import { CreationQuality } from '../classes/contentCreator/CreationQuality';

const isColor = (hexa: string) => {
    const startsWithHashtag = hexa.slice(0, 1) == '#';
    if (!startsWithHashtag) {
        return false;
    } else {
        const hexaNumber = hexa.slice(1);
        const withoutHexa = hexaNumber.replace(/[0-9]|[a-f]/g, '');
        const isInHexaRange = withoutHexa.length === 0;
        if (!isInHexaRange) {
            return false;
        } else {
            const correctLength = hexaNumber.length === 6;
            if (!correctLength) {
                return false;
            } else {
                return true;
            }
        }
    }
};

describe('button colors', () => {
    it('isColor testing', () => {
        expect(isColor('123456'), '<123456>').to.be.false;
        expect(isColor('#1234567'), '<#1234567>').to.be.false;
        expect(isColor('#12345z'), '<#12345z>').to.be.false;
        expect(isColor('12345z'), '<12345z>').to.be.false;
        expect(isColor('1234567'), '<1234567>').to.be.false;
        expect(isColor('#12345'), '<#12345>').to.be.false;
        expect(isColor('#123456'), '<#123456>').to.be.true;
    });
    it('active strings describes color', () => {
        const color = buttonColors.get('active');
        expect(isColor(color)).to.be.true;
    });
    it('inactive strings describes color', () => {
        const color = buttonColors.get('inactive');
        expect(isColor(color)).to.be.true;
    });
    it('quality strings describe color', () => {
        Object.values(CreationQuality).forEach((quality) => {
            const color = buttonColors.get(quality);
            const errorDescription = ' : <' + quality + '>';
            expect(isColor(color), errorDescription).to.be.true;
        });
    });
    it('error is thrown if invalid string', () => {
        const testForErrorThrow = () => {
            const notExistingColor = buttonColors.get(
                'TOTAL_nonsense' as CreationQuality
            );
        };
        assert.throws(testForErrorThrow, /color/i);
    });
});
