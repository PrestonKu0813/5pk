const RegularGame = require('./lib/regularGame.js');
const Transition = require('./lib/transition.js');
const DoubleGame = require('./lib/doubleGame.js');
const Pricing = require('./lib/pricing.js');
const Enum = require('./lib/enum.js');

let betAmount = 0;
let bettingOdds = 0;
let points = 0;
let totalPoints = 0;
let currentHands = [];

const regularGame = new RegularGame();
const doubleGame = new DoubleGame();

while (true) {
    let result;
    betAmount = Transition.wager();
    currentHands = regularGame.wager();
    currentHands = regularGame.switchCards(currentHands);

    bettingOdds = Pricing.prices(currentHands);
    points = betAmount * bettingOdds;

    if (Transition.regularGame(betAmount, bettingOdds)) {
        if (Transition.doubleGame()) {
            while (true) {
                result = doubleGame.doubleGame();
                if (result === Enum.doubleGame.WIN) {
                    console.log('you won!');
                    totalPoints += (2 * points);
                    break;
                } else if (result === Enum.doubleGameGame.DRAW) {
                    console.log('it\'s a draw... starting a new double game...');
                    continue;
                } else {
                    console.log('you lost...');
                    break;
                }
            }
        }
        else {
            totalPoints += points;
        }
    }

    if (Transition.newGame(totalPoints)) {
        betAmount = 0;
        bettingOdds = 0;
        points = 0;
        continue;
    }
    else {
        console.log(`you won a total of: ${totalPoints} points`);
        break;
    }
}
