const Dealer = require('../lib/dealer.js');

const dealer = new Dealer();

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(dealer.convert([52])).toBe(['Joker']);
    });
});