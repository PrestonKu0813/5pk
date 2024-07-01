const Dealer = require('../lib/dealer.js');

const dealer = new Dealer();

describe('convert()', () => {
    test('joker', () => {
        expect(dealer.convert([52])).toStrictEqual(['Joker']);
    });
    test('A', () => {
        expect(dealer.convert([0])).toStrictEqual(['\u2660A']);
    });
    test('J', () => {
        expect(dealer.convert([10])).toStrictEqual(['\u2660J']);
    });
    test('Q', () => {
        expect(dealer.convert([11])).toStrictEqual(['\u2660Q']);
    });
    test('K', () => {
        expect(dealer.convert([12])).toStrictEqual(['\u2660K']);
    });
    test('suites', () => {
        expect(dealer.convert([13])).toStrictEqual(['\u2665A']);
    });
});

describe('deal()', () => {
    test('deal five cards', () => {
        // jest.spyOn(dealer, 'deal').mockReturnValueOnce([1, 2, 3, 4, 5]);
        // jest.spyOn(Transition, 'doubleGameCheck').mockReturnValueOnce('n');
        expect(dealer.deal().length).toBe(5);
        // jest.clearAllMocks();
    });
    test('no duplicate', () => {
        const hands = new Set(dealer.deal()).size;
        expect(hands).toBe(5);
    });
    test('card is discarded', () => {
        for (let i = 0; i < 49; i++) {
            dealer.discard.push(i);
        }
        const resultArray = [49, 50, 51, 52, 53];
        const hands = dealer.deal();
        const result = hands.every((x) => resultArray.includes(x));
        expect(result).toBe(true);
        dealer.discard = [];
    });
});

describe('switchCards()', () => {
    test('cards different than original hands', () => {
        const originalHands = dealer.switchCards([0, 1, 2, 3, 4], [2, 4]);
        const newNum1 = originalHands[1];
        const newNum2 = originalHands[3];
        expect(!(originalHands.includes(newNum1) || originalHands.includes(newNum2))).toBe(true);
    });
});

// describe('description', () => {
//     test('description', () => {

//     });
// });
