var readline = require('readline-sync');

class Transition {
    wager() {
        var betAmount;
        betAmount = readline.question("place your bet: ");

        if (!(Number.isInteger(Number(betAmount)))) {
            console.log("押注必須是整數");
        } else if (betAmount < 100) {
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
            return true;
        } else if (response == "n") {
            return false;
        } else {
            console.log("format not correct");
            this.doubleGame();
        }
    }

    newGame(totalPoints) {
        var response;

        console.log("you currently have: " + totalPoints + " points")
        response = readline.question("do you want to start a new game (y/n): ")
        if (response == "y") {
            console.log("starting a new game");
            return true;
        } else if (response == "n") {
            console.log("calculating points...");
            return false;
        } else {
            console.log("format not correct");
            this.newGame()
        }
    }

    regularGame(betAmount, bettingOdds) {
        var points = betAmount * bettingOdds;

        if (bettingOdds == 0) {
            console.log("you didn't win...");
            return false;
        } else {
            console.log('you have won a x' + bettingOdds + ' rate');
            console.log("your now have " + points + " points");
            return true;;
        }
    }
}

module.exports = Transition;