var readline = require('readline-sync');
const Dealer = require('./dealer.js');
const Pricing = require('./pricing.js');
const Transition = require('./transition.js');
const DoubleGame = require('./doubleGame.js');

let betAmount = 0;
var bettingOdds = 0;
var points = 0;
var totalPoints = 0;
let currentHands = [];

function wager() {
    const dealer = new Dealer();
    const transition = new Transition();

    betAmount = transition.wager();

    currentHands = dealer.deal('reg');
    console.log(dealer.convert(currentHands));
}

function switchCards() {
    var idString;
    var ids = [];



    while (true) {
        idString = readline.question("which cards do you want to switch (input in the format of 1,2,5 with no spaces): ");
        ids = idString.split(",").map((x) => Number(x));

        const inRange = (id) => (id > 5 || id < 1 || !(Number.isInteger(id)));
        if (ids.some(inRange)) {
            console.log("format not correct")
            continue;
        }
        break;
    }

    const dealer = new Dealer();
    currentHands = dealer.switch(currentHands, ids);
    console.log(dealer.convert(currentHands));

    const pricing = new Pricing();
    bettingOdds = pricing.prices(currentHands);
    points = betAmount * bettingOdds;
}

while (true) {
    const dealer = new Dealer();
    dealer.shuffle('reg');
    dealer.shuffle('double')

    wager();
    switchCards();

    const transition = new Transition();
    if (transition.regularGame(betAmount, bettingOdds)) {
        if (transition.doubleGame()) {

            const doubleGame = new DoubleGame();
            if (doubleGame.doubleGame()) {
                totalPoints += (2 * points);
            }
        } else {
            totalPoints += points;
        }
    }

    if (transition.newGame(totalPoints)) {
        betAmount = 0;
        bettingOdds = 0;
        points = 0;
        continue;
    } else {
        console.log("you won a total of: " + totalPoints)
        break;
    }
}