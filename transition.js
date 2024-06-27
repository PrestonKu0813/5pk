var readline = require('readline-sync');

class Transition {
    static wager() {
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

    static switchCards() {
        var idString = [];
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
        return ids;
    }

    static doubleGame() {
        var response;
        response = readline.question("do you want to enter double game (y/n): ")
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

    static doubleGameCheck() {
        var response;
        while (true) {
            response = readline.question("which cards do you want to choose: "); // 1-4
            if (response > 4 || response < 1 || !(Number.isInteger(Number(response)))) {
                console.log("format not correct")
                continue;
            } else {
                break;
            }
        }
        return Number(response);
    }

    static newGame(totalPoints) {
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

    static regularGame(betAmount, bettingOdds) {
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