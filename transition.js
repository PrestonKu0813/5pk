var readline = require('readline-sync');

class Transition {
    wager() {
        var betAmount;
        betAmount = readline.question("place your bet: ");

        if (betAmount < 100) {
            console.log("最低押分需大於100");
            this.wager();
        } else if (betAmount > 2000) {
            console.log("最高押分需小於2000");
            this.wager();
        } else {
            return betAmount;
        }
    }

    doubleGame() {
        var response;
        response = readline.question("do you want to enter doubleGame (y/n): ")
        if (response == "y") {
            console.log("entering...");
        } else if (response == "n") {
            this.newGame();
        } else {
            console.log("format not correct");
            this.doubleGame();
        }
    }
    newGame() {
        var response;
        response = readline.question("do you want to start a new game (y/n): ")
        if (response == "y") {
            console.log("starting a new game");
        } else if (response == "n") {
            console.log("calculating points");
        } else {
            console.log("format not correct");
            this.newGame()
        }
    }
    transition(betAmount, bettingOdds) {
        var points = betAmount * bettingOdds;

        if (bettingOdds == 0) {
            console.log("you didn't win...");
            this.newGame();
        } else {
            console.log('you have won a x' + bettingOdds + ' rate');
            console.log("your now have " + points + " points");
            this.doubleGame();
        }
    }
}

module.exports = Transition;