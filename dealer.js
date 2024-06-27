// 顯示 [ '♠', '♥', '♦', '♣', 'Joker' ]
const suitsArray = ['\u2660', '\u2665', '\u2666', '\u2663'];
var discard = [];

class Dealer {
    convert(arr) {
        var convertedArray = []
        var suits;
        var number;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 52) {
                convertedArray[i] = "Joker"
            } else {
                suits = Math.floor(arr[i] / 13); //0, 1, 2, 3
                number = Math.floor(arr[i] % 13) + 1 // 1-13
                if (number == 1) {
                    number = 'A'
                } else if (number == 11) {
                    number = 'J'
                } else if (number == 12) {
                    number = 'Q'
                } else if (number == 13) {
                    number = 'K'
                }
                convertedArray[i] = suitsArray[suits] + (number)
            }
        }
        return convertedArray
    }
    deal() {
        var newCard;
        var counter = 0;
        var currentHands = []

        while (counter < 5) {
            newCard = Math.floor(((Math.random() * 54))); //0-53
            if (currentHands.includes(newCard) || discard.includes(newCard)) {
                continue;
            } else {
                currentHands.push(newCard);
                counter++;
            }
        }
        return currentHands;
    }

    /**
     * 
     * @param {number[]} currentHands 
     * @param {number[]} ids 
     */

    switch(currentHands, ids) {
        var newCard;
        var counter = 0;

        while (counter < ids.length) {
            newCard = Math.floor(((Math.random() * 54))); //0-53

            if (currentHands.includes(newCard) || discard.includes(newCard)) {
                continue;
            } else {
                discard.push(currentHands[ids[counter] - 1]);
                currentHands[ids[counter] - 1] = newCard;
                counter++;
            }
        }
        return currentHands;
    }

    shuffle() {
        if (discard.length > 43) {
            discard = [];
        }
    }
}

module.exports = Dealer;