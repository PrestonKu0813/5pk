var readline = require('readline-sync');
const Dealer = require('./dealer.js');

class DoubleGame {

    constructor() {
        // this.dealer = new Dealer()
    }

    doubleGame() {
        var cards;
        var index;
        var temp;
        var dealerHands;
        var playerHands;
        var revealArray = ["?", "?", "?", "?"];
        var response;
        var win;

        const dealer = new Dealer();
        cards = dealer.deal('double');
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

        console.log("the dealer has " + dealer.convert([dealerHands]));
        console.log(revealArray);

        while (true) {
            response = readline.question("which cards do you want to choose: "); // 1-4
            if (response > 4 || response < 1 || !(Number.isInteger(Number(response)))) {
                console.log("format not correct")
                continue;
            } else {
                break;
            }
        }

        playerHands = cards[Number(response)];
        win = this.reveal(dealerHands, playerHands, Number(response));

        revealArray[Number(response) - 1] = dealer.convert([playerHands])[0];
        console.log(revealArray);

        cards.splice(0, 1);
        console.log(dealer.convert(cards));
        if (win) {
            console.log("you won!");
            return true;
        } else {
            console.log("you lost...");
            return false;
        }
    }
    reveal(dealerHands, playerHands) {
        var dealerNumber = dealerHands % 13;
        var playerNumber = playerHands % 13;

        if (playerHands == 52 || playerHands == 53) {
            return true;
        } else if (playerNumber > dealerNumber) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = DoubleGame;