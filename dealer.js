// 顯示 [ '♠', '♥', '♦', '♣', 'Joker' ]
const suitsArray = [
    '\u2660', '\u2665', '\u2666', '\u2663'];

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
                number = Math.floor(arr[i] % 13)// 0-12

                convertedArray[i] = suitsArray[suits] + (number + 1)
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

            if (currentHands.includes(newCard)) {
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
     * @param {number[]} id 
     */

    switch(currentHands, id) {
        var newCard;
        var counter = 0;
        var discard = [];

        while (counter < id.length) {
            newCard = Math.floor(((Math.random() * 54))); //0-53

            if (currentHands.includes(newCard) || discard.includes(newCard)) {
                continue;
            } else {
                discard.push(currentHands[id[counter] - 1]);
                currentHands[id[counter] - 1] = newCard;
                counter++;
            }
        }
        return currentHands;
    }
}

module.exports = Dealer;