const RegularGame = require('./regularGame.js');
const Transition = require('./transition.js');
const DoubleGame = require('./doubleGame.js');
const Pricing = require('./pricing.js')
const ENUM_DOUBLE = require('./enum.js')

var betAmount = 0;
var bettingOdds = 0;
var points = 0;
var totalPoints = 0;
var currentHands = [];

const regularGame = new RegularGame();
const doubleGame = new DoubleGame();

while (true) {
    var result;
    betAmount = Transition.wager();
    currentHands = regularGame.wager();
    currentHands = regularGame.switchCards(currentHands);

    bettingOdds = Pricing.prices(currentHands);
    points = betAmount * bettingOdds;

    if (Transition.regularGame(betAmount, bettingOdds)) {
        if (Transition.doubleGame()) {
            while (true) {
                result = doubleGame.doubleGame();
                if (result == ENUM_DOUBLE.WIN) {
                    console.log("you won!")
                    totalPoints += (2 * points);
                    break;
                } else if (result == ENUM_DOUBLE.DRAW) {
                    console.log("it's a draw... starting a new double game...")
                    continue;
                } else {
                    console.log("you lost...");
                    break;
                }
            }
        } else {
            totalPoints += points;
        }
    }

    if (Transition.newGame(totalPoints)) {
        betAmount = 0;
        bettingOdds = 0;
        points = 0;
        continue;
    } else {
        console.log("you won a total of: " + totalPoints + " points")
        break;
    }
}