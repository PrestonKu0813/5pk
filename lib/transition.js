var readline = require('readline-sync');


class Transition {
    /**
     * 取得押注分 + 是否在範圍內
     * take in betting amount and determine if it's in range
     * @returns {number} //押注分 betting amount
     */
    static wager() {
        var betAmount;
        betAmount = readline.question("place your bet: ");
        betAmount = Number(betAmount);

        if (!(Number.isInteger(betAmount))) {
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

    /**
     * 取得換牌的indices 
     * take in thw switch cards indices
     * @returns {number[]} //indices
     */
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

    /**
     * 判斷玩家是否要進入雙倍遊戲
     * determine if the player is entering the double game
     * @returns {boolean}
     */
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
    /**
     * 確認雙倍遊戲玩家選的卡是否府合格式
     * check if format of the double game picking card index is correct
     * @returns {number} //index
     */
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

    /**
     * 確認玩家是否要進入新的一局
     * determine if the player is entering a new game
     * @param {number} totalPoints 
     * @returns {boolean}
     */
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

    /**
     * 判斷玩家是否中獎
     * determine if the player wins the regular game
     * @param {number} betAmount 
     * @param {number} bettingOdds 
     * @returns {boolean}
     */
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