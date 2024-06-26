// 顯示 [ '♠', '♥', '♦', '♣', 'Joker' ]
const suitsArray = ['\u2660', '\u2665', '\u2666', '\u2663'];
var discardReg = [];
var discardDouble = [];

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
    deal(type) { //有沒有更好的寫法?
        var newCard;
        var counter = 0;
        var currentHands = []

        while (counter < 5) {
            newCard = Math.floor(((Math.random() * 54))); //0-53
            const discard = type == 'reg' ? discardReg : discardDouble;

            if (currentHands.includes(newCard) || discard.includes(newCard)) {
                continue;
            } else {
                currentHands.push(newCard);
                counter++;
            }

            // if (type == 'reg') {
            //     if (currentHands.includes(newCard) || discardReg.includes(newCard)) {
            //         continue;
            //     } else {
            //         currentHands.push(newCard);
            //         counter++;
            //     }
            // } else if (type == 'double') {
            //     if (currentHands.includes(newCard) || discardDouble.includes(newCard)) {
            //         continue;
            //     } else {
            //         currentHands.push(newCard);
            //         counter++;
            //     }
            // }
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

        while (counter < id.length) {
            newCard = Math.floor(((Math.random() * 54))); //0-53

            if (currentHands.includes(newCard) || discardReg.includes(newCard)) {
                continue;
            } else {
                discardReg.push(currentHands[id[counter] - 1]);
                currentHands[id[counter] - 1] = newCard;
                counter++;
            }
        }
        return currentHands;
    }

    shuffle(type) {
        switch (type) {
            case 'reg':
                if (discardReg.length > 44) {
                    console.log('shuffling regular deck')
                    discardReg = [];
                }
                break;
            case 'double':
                if (discardDouble.length > 44) {
                    console.log('shuffling double game deck')
                    discardDouble = [];
                }
                break;
            default:
                console.log("can't find the value")
                break;
        }
    }
}

module.exports = Dealer;