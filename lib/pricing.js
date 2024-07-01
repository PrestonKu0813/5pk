let suits = [];
let numbers = [];
let hashTable = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [], 13: [] };

class Pricing {

    /**
     * 判斷是否是同花
     * @returns {boolean}
     */
    static sameKind() {
        let size;
        size = new Set(suits).size;
        if (suits.includes(4)) { // 有鬼牌
            size--;
        }

        return size === 1;
    }

    static hasNumber() {
        let counter = 0;

        Object.entries(hashTable).forEach(([, value]) => {
            if (value.length > 0) {
                counter++;
            }
        });

        return counter;
    }

    /**
     * 計算重複最多次的數字重複的次數
     * @returns {number}
     */
    static maxRepeat() {
        let max = 0;

        Object.entries(hashTable).forEach(([key, value]) => {
            if (!(Number(key) === 13)) {
                if (value > max) {
                    max = value.length;
                }
            }
        });

        return max;
    }

    /**
     *
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @returns {number} 計算有幾個數字相同
     */
    static isIncluded(arr1, arr2) {
        const filteredArray = arr1.filter(value => arr2.includes(value)); // intersection

        return Object.keys(filteredArray).length;
    }

    /**
     * 判斷排組是否是順子
     * @returns {boolean}
     */
    static isFlush() {
        let counter = 0; // 計算共有幾張鬼牌
        const temp = numbers;
        temp.sort((a, b) => a - b);

        if (suits.includes(4)) {
            counter = hashTable[13].length;
            temp.length -= counter;
        }

        for (let i = 0; i < temp.length - 1; i++) {
            if (!(temp[i] + 1 === temp[i + 1])) {
                if (counter > 0) {
                    counter--;
                    temp.splice((i + 1), 0, temp[i] + 1);
                    continue;
                }

                return false;
            }
        }

        return true;
    }

    /**
     * 判斷是否有J以上的對子
     * @param {boolean} joker
     * @returns
     */
    static isJUp(joker) {
        let index = 0;

        if (joker) {
            const result = Object.entries(hashTable).some(([key, value]) => ((Number(key) >= 10 && Number(key) <= 12) || (Number(key) === 0)) && value > 0);

            return result;
        }

        Object.entries(hashTable).forEach(([key, value]) => {
            if (value.length === 2) {
                index = Number(key);
            }
        });

        if ((index >= 10 && index <= 12) || index === 0) {
            return true;
        }

        return false;
    }


    /**
     * 判斷中獎牌型
     * @param {number[]} currentHands
     * @returns
     */
    static prices(currentHands) {
        let bettingOdds = 0;
        let number;
        let jokerNum = 0;

        for (let i = 0; i < currentHands.length; i++) {
            if (currentHands[i] === 52 || currentHands[i] === 53) {
                suits.push(4);
                numbers.push(13);
                hashTable[13].push(13);
                jokerNum++;
            }
            else {
                suits.push(Math.floor(currentHands[i] / 13)); // 0, 1, 2, 3
                number = Math.floor(currentHands[i] % 13); // 0-12
                numbers.push(number);
                hashTable[number].push(number);
            }
        }

        if (this.sameKind() && this.isIncluded(numbers, [9, 10, 11, 12, 13]) === 5) { // 同花大順
            bettingOdds = 500;
        }
        else if (this.hasNumber() === 2 && suits.includes(4)) { // 五梅
            bettingOdds = 250;
        }
        else if (this.sameKind() && this.isFlush()) { // 同花順
            bettingOdds = 100;
        }
        else if ((this.maxRepeat()) + jokerNum === 4) { // 鐵支
            bettingOdds = 40;
        }
        else if ((this.hasNumber() === 2 && this.maxRepeat() === 3)
            || (this.hasNumber() === 3 && this.maxRepeat() === 2 && jokerNum > 0)) { // 葫蘆
            bettingOdds = 10;
        }
        else if (this.sameKind()) { // 同花
            bettingOdds = 7;
        }
        else if (this.isFlush()) { // 順子
            bettingOdds = 5;
        }
        else if ((this.hasNumber() === 3 && this.maxRepeat() === 3)
            || (this.hasNumber() === 4 && this.maxRepeat() === 2 && jokerNum > 0)) { // 三條, 113 or 1112+joker
            bettingOdds = 3;
        }
        else if (this.hasNumber() === 3 && this.maxRepeat() === 2) { // 兩對
            bettingOdds = 2;
        }
        else if ((this.hasNumber() === 4 && this.maxRepeat() === 2 && this.isJUp(false))
            || (this.hasNumber() === 5 && this.isJUp(true) && jokerNum > 0)) { // 1112, 11111+joker
            bettingOdds = 1;
        }
        suits = [];
        numbers = [];
        hashTable = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [], 13: [] };

        return bettingOdds;
    }

}

// const pricing = new Pricing();
// console.log(pricing.isFlush());

module.exports = Pricing;
