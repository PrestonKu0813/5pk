const Pricing = require('../lib/pricing');

describe('Royal Flush', () => {
    test('biggest royal flush', () => {
        expect(Pricing.prices([22, 23, 24, 25, 13])).toBe(500);
    });

});

describe('five numbers', () => {
    test('one joker', () => {
        expect(Pricing.prices([2, 2, 2, 2, 52])).toBe(250);
    });
    test('two jokers', () => {
        expect(Pricing.prices([2, 2, 2, 52, 53])).toBe(250);
    });
});

describe('Straight Flush', () => {
    test('one joker', () => {
        expect(Pricing.prices([0, 1, 2, 52, 4])).toBe(100);
    });
    test('two joker', () => {
        expect(Pricing.prices([0, 1, 53, 52, 4])).toBe(100);
    });
    test('straight flush without joker', () => {
        expect(Pricing.prices([1, 0, 4, 3, 2])).toBe(100);
    });
});

describe('Four of A Kind', () => {
    test('one joker', () => {
        expect(Pricing.prices([2, 15, 28, 52, 3])).toBe(40);
    });
    test('two jokers', () => {
        expect(Pricing.prices([2, 15, 52, 53, 3])).toBe(40);
    });
    test('no joker', () => {
        expect(Pricing.prices([2, 15, 28, 41, 3])).toBe(40);
    });
});

describe('Full House', () => {
    test('one joker', () => {
        expect(Pricing.prices([2, 15, 52, 3, 16])).toBe(10);
    });
    test('no joker -1', () => {
        expect(Pricing.prices([2, 15, 28, 3, 16])).toBe(10);
    });
    test('no joker -2', () => {
        expect(Pricing.prices([2, 15, 3, 16, 29])).toBe(10);
    });
});

describe('Flush', () => {
    test('one joker', () => {
        expect(Pricing.prices([0, 2, 6, 8, 52])).toBe(7);
    });
    test('two joker', () => {
        expect(Pricing.prices([0, 2, 6, 52, 53])).toBe(7);
    });
    test('no joker', () => {
        expect(Pricing.prices([0, 2, 6, 8, 10])).toBe(7);
    });
});

describe('Straight', () => {
    test('one joker', () => {
        expect(Pricing.prices([13, 14, 2, 52, 4])).toBe(5);
    });
    test('two jokers', () => {
        expect(Pricing.prices([53, 14, 2, 52, 4])).toBe(5);
    });
    test('no joker', () => {
        expect(Pricing.prices([1, 13, 4, 3, 2])).toBe(5);
    });
});

describe('Three of A Kind', () => {
    test('one joker', () => {
        expect(Pricing.prices([2, 15, 52, 0, 1])).toBe(3);
    });
    test('two joker', () => {
        expect(Pricing.prices([2, 53, 52, 0, 22])).toBe(3);
    });
    test('no joker', () => {
        expect(Pricing.prices([2, 15, 28, 0, 1])).toBe(3);
    });
});

describe('Two Pair', () => {
    test('no joker', () => {
        expect(Pricing.prices([2, 15, 0, 1, 14])).toBe(2);
    });
});

describe('Pair', () => {
    test('one joker', () => {
        expect(Pricing.prices([10, 52, 0, 1, 15])).toBe(1);
    });
    test('no joker without A', () => {
        expect(Pricing.prices([10, 10, 0, 1, 15])).toBe(1);
    });
    test('no joker with A', () => {
        expect(Pricing.prices([10, 0, 0, 1, 15])).toBe(1);
    });
});

describe('No Price', () => {
    test('one joker', () => {
        expect(Pricing.prices([52, 3, 0, 19, 2])).toBe(0);
    });
    test('no joker', () => {
        expect(Pricing.prices([16, 3, 0, 19, 2])).toBe(0);
    });
});
