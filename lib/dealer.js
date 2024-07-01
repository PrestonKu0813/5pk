// 顯示 [ '♠', '♥', '♦', '♣', 'Joker' ]
const suitsArray = ['\u2660', '\u2665', '\u2666', '\u2663'];


class Dealer {

    constructor() {
        this.discard = [];
    }

    /**
     * 將數字轉換成文字的牌
     * convert numbers into readable string
     * @param {number[]} arr
     * @returns {string[]} // 轉換成文字的牌 string cards
     */
    convert(arr) {
        const convertedArray = [];
        let suits;
        let number;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 52) {
                convertedArray[i] = 'Joker';
            }
            else {
                suits = Math.floor(arr[i] / 13); // 0, 1, 2, 3
                number = Math.floor(arr[i] % 13) + 1; // 1-13
                if (number === 1) {
                    number = 'A';
                }
                else if (number === 11) {
                    number = 'J';
                }
                else if (number === 12) {
                    number = 'Q';
                }
                else if (number === 13) {
                    number = 'K';
                }
                convertedArray[i] = suitsArray[suits] + (number);
            }
        }

        return convertedArray;
    }

    /**
     * 發牌
     * deal cards
     * @returns {number[]} //發出的五張牌 the dealt cards
     */
    deal() {
        let newCard;
        let counter = 0;
        const currentHands = [];

        while (counter < 5) {
            newCard = Math.floor(((Math.random() * 54))); // 0-53
            if (currentHands.includes(newCard) || this.discard.includes(newCard)) {
                continue;
            }
            else {
                currentHands.push(newCard);
                counter++;
            }
        }

        return currentHands;
    }

    /**
     * 換牌
     * switch cards
     * @param {number[]} currentHands //原本的手牌 original hands
     * @param {number[]} ids //換得牌的 index switching indices
     * @returns {number[]} 換過的手牌 switched hands
     */

    switchCards(currentHands, ids) {
        let newCard;
        let counter = 0;

        while (counter < ids.length) {
            newCard = Math.floor(((Math.random() * 54))); // 0-53

            if (currentHands.includes(newCard) || this.discard.includes(newCard)) {
                continue;
            }
            else {
                this.discard.push(currentHands[ids[counter] - 1]);
                currentHands[ids[counter] - 1] = newCard;
                counter++;
            }
        }

        return currentHands;
    }

    /**
     * 當牌庫少於1/5 --> 洗牌
     * when the deck has less than 1/5 of cards --> shuffle
     */
    shuffle() {
        if (this.discard.length > 43) {
            this.discard = [];
        }
    }

}

module.exports = Dealer;
