var readline = require('readline-sync');
const Dealer = require('./dealer.js');

class DoubleGame {
    doubleGame() {
        var cards;
        var index;
        var dealerHands;
        var playerHands;
        var response;

        const dealer = new Dealer();
        cards = dealer.deal();
        for (let i = 0; i < cards.length; i++) {
            if (!(cards[i] == 52 || cards[i] == 53)) {
                dealerHands = cards[i];
                index = i;
                break;
            }
        }

        console.log("the dealer has " + dealer.convert([dealerHands]));
        response = readline.question("which cards do you want to choose: "); // 
        playerHands = cards[Number(response)];
        console.log("you got " + dealer.convert([playerHands]));
        this.pricing(dealerHands, playerHands);
    }
    pricing(dealerHands, playerHands) {
        if (playerHands == 52 || playerHands == 53) {

        }
    }

}

module.exports = DoubleGame;