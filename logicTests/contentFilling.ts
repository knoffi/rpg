import { expect } from 'chai';
import { association } from '../classes/association';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { Drinkable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { ContentFiller } from './../classes/contentFiller/ContentFiller';
import { Constants } from './constants/Constants';

describe('Content Filler', () => {
    it('constructor', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
    });
    it('random page is filled', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
        const page = filler.randomPage(
            {},
            { isAbout: WeServe.drinks, category: Drinkable.beer },
            new KeyHandler('noPreviousContent'),
            new PatternHandler('noContent')
        );
        expect(page).to.have.property('category').to.equal(Drinkable.beer);
        expect(page).to.have.property('isAbout').to.equal(WeServe.drinks);
        expect(page).to.have.property('content').to.have.length.greaterThan(0);
        expect(page).to.have.property('newKeys');
        expect(page).to.have.property('newPattern');
    });
    it('random page fills best fits first', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
        const page = filler.randomPage(
            { powerFit: association.haven },
            { isAbout: WeServe.drinks, category: Drinkable.spirit },
            new KeyHandler('noPreviousContent'),
            new PatternHandler('noContent')
        );
        expect(page.content).to.have.length.greaterThan(0);
        const first = page.content[0];
        expect(first.name).to.eql('Don Salvador Rum');
        if (page.content.length > 2) {
            const second = page.content[1];
            expect(second.name).to.eql('Raging Whiskey');
        }
        if (page.content.length > 3) {
            const second = page.content[2];
            expect(second.name).to.eql('Holy Rum');
        }
    });
});
