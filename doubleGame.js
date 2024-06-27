const Dealer = require('./dealer.js');
const Transition = require('./transition.js')
const ENUM_DOUBLE = require('./enum.js');

class DoubleGame {

    constructor() {
        this.dealer = new Dealer();
    }

    doubleGame() {
        var cards;
        var index;
        var revealArray = ["?", "?", "?", "?"];
        var temp;
        var dealerHands;
        var playerHands;
        var response;
        var win;

        this.dealer.shuffle();

        cards = this.dealer.deal();
        for (let i = 0; i < cards.length; i++) {
            if (!(cards[i] == 52 || cards[i] == 53)) {
                dealerHands = cards[i];
                index = i;
                break;
            }
        }

        temp = cards[0];
        cards[0] = cards[index];
        cards[index] = temp;

        console.log("the dealer has " + this.dealer.convert([dealerHands]));
        console.log(["?", "?", "?", "?"]);

        response = Transition.doubleGameCheck()
        playerHands = cards[response];

        revealArray[response - 1] = this.dealer.convert([playerHands])[0];
        console.log(revealArray);

        cards.splice(0, 1);
        console.log(this.dealer.convert(cards));

        return win = this.reveal(dealerHands, playerHands);

    }
    reveal(dealerHands, playerHands) {
        var dealerNumber = dealerHands % 13;
        var playerNumber = playerHands % 13;

        if (playerHands == 52 || playerHands == 53) {
            return ENUM_DOUBLE.WIN;
        } else if (playerNumber == dealerNumber) {
            return ENUM_DOUBLE.DRAW;
        } else if (playerNumber > dealerNumber) {
            return ENUM_DOUBLE.WIN;
        } else {
            return ENUM_DOUBLE.LOSE;
        }
    }
}
// const doubleGame = new DoubleGame();
// doubleGame.doubleGame();

module.exports = DoubleGame;