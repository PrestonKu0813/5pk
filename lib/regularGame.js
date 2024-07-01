const Dealer = require('./dealer.js');
const Transition = require('./transition.js');

class RegularGame {

    constructor() {
        this.dealer = new Dealer();
    }

    /**
     * 呼叫發牌函式
     * call deal()
     * @returns {number[]} //回傳手牌 return hands
     */
    wager() {
        let currentHands = [];

        this.dealer.shuffle();
        currentHands = this.dealer.deal();
        console.log(this.dealer.convert(currentHands));

        return currentHands;
    }

    /**
     * 呼叫換牌函式
     * call switchCards()
     * @param {number[]} currentHands //原本的手牌 original hands
     * @returns {number[]} //換牌後的手牌 current hands
     */
    switchCards(currentHands) {
        const ids = Transition.switchCards();

        currentHands = this.dealer.switchCards(currentHands, ids);
        console.log(this.dealer.convert(currentHands));

        return currentHands;
    }

}

module.exports = RegularGame;
