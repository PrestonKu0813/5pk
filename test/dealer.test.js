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
    test('other numbers', () => {
        expect(dealer.convert([9])).toStrictEqual(['\u266010']);
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
    test('card is in discard[]', () => {
        dealer.discard = [0];
        jest.spyOn(Math, 'random').mockReturnValueOnce(0);
        const switchHands = dealer.switchCards([3, 4, 5, 6, 7], [1]);
        expect(switchHands.includes(0)).toBe(false);
        dealer.discard = [];
    });
    test('cards different than original hands', () => {
        const originalHands = dealer.switchCards([0, 1, 2, 3, 4], [2, 4]);
        expect(originalHands.includes(1)).toBe(false);
        expect(originalHands.includes(3)).toBe(false);
    });
});

describe('shuffle()', () => {
    test('shuffle at the correct condition', () => {
        dealer.discard.length = 44;
        dealer.shuffle();
        expect(dealer.discard.length).toBe(0);
        dealer.discard = [];
    });
    test('doesn\'t shuffle', () => {
        dealer.discard.length = 43;
        dealer.shuffle();
        expect(dealer.discard.length).toBe(43);
        dealer.discard = [];
    });
});

// describe('description', () => {
//     test('description', () => {

//     });
// });
