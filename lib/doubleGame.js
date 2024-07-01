const Dealer = require('./dealer.js');
const Transition = require('./transition.js');
const Enum = require('./enum.js');

class DoubleGame {

    constructor() {
        this.dealer = new Dealer();
    }
    /**
     * 莊家發牌 / 玩家選牌
     * deal cards / reveal dealer's card / player pick a card
     * @returns {Enum}
     */

    doubleGame() {
        let index;
        const revealArray = ['?', '?', '?', '?'];
        let dealerHands;

        this.dealer.shuffle();

        const cards = this.dealer.deal();
        for (let i = 0; i < cards.length; i++) {
            if (!(cards[i] === 52 || cards[i] === 53)) {
                dealerHands = cards[i];
                index = i;
                break;
            }
        }

        const temp = cards[0];
        cards[0] = cards[index];
        cards[index] = temp;

        console.log(`the dealer has ${this.dealer.convert([dealerHands])}`);
        console.log(['?', '?', '?', '?']);

        const response = Transition.doubleGameCheck();
        const playerHands = cards[response];

        revealArray[response - 1] = this.dealer.convert([playerHands])[0];
        console.log(revealArray);

        cards.splice(0, 1);
        console.log(this.dealer.convert(cards));

        const win = this.reveal(dealerHands, playerHands);

        return win;

    }

    /**
     * 判斷莊家還是玩家贏
     * determine whether the dealer or the player wins
     * @param {*} dealerHands
     * @param {*} playerHands
     * @returns {Enum}
     */
    reveal(dealerHands, playerHands) {
        const dealerNumber = dealerHands % 13;
        const playerNumber = playerHands % 13;

        if (playerHands === 52 || playerHands === 53) {
            return Enum.doubleGame.WIN;
        } if (playerNumber === dealerNumber) {
            return Enum.doubleGame.DRAW;
        } if (playerNumber > dealerNumber) {
            return Enum.doubleGame.WIN;
        }

        return Enum.doubleGame.LOSE;

    }

}
// const doubleGame = new DoubleGame();
// doubleGame.doubleGame();

module.exports = DoubleGame;
