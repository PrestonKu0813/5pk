const Dealer = require('./dealer.js');
const Transition = require('./transition.js');

class RegularGame {

    constructor() {
        this.dealer = new Dealer();
    }

    wager() {
        var currentHands = [];

        this.dealer.shuffle();
        currentHands = this.dealer.deal();
        console.log(this.dealer.convert(currentHands));
        return currentHands;
    }

    switchCards(currentHands) {
        var ids = Transition.switchCards();

        currentHands = this.dealer.switch(currentHands, ids);
        console.log(this.dealer.convert(currentHands));

        return currentHands;
    }
}

module.exports = RegularGame;