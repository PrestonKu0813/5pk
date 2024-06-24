let bet_amount;
const suits_array = ["spade", "heart", "diamond", "club"];
let hands_array = []
let suits = [];
let numbers = [];
let hashTable = {};

function start() {
    console.log("遊戲規則")
}

function convert() {
    var converted_array = []
    var suits;
    var number;

    for (let i = 0; i < hands_array.length; i++) {
        if (hands_array[i] >= 52) {
            converted_array[i] = "joker"
        } else {
            suits = Math.floor(hands_array[i] / 13); //0, 1, 2, 3
            number = Math.floor(hands_array[i] % 13)// 0-12

            converted_array[i] = suits_array[suits] + (number + 1)
        }
    }
    return converted_array
}

document.getElementById("submit").onclick = function wager() {
    bet_amount = document.getElementById("bet_value").value;
    document.getElementById("bet_value").value = "";
    console.log(bet_amount);
    if (bet_amount < 100) {
        console.log("最低押分需大於100");
        bet_amount = 0;
    } else if (bet_amount > 2000) {
        console.log("最高押分需小於2000");
        bet_amount = 0;
    } else {
        deck();
    }
}

function deck() {
    var counter = 0;
    while (counter < 5) {
        new_card = Math.floor(((Math.random() * 54))); //0-53

        if (hands_array.includes(new_card)) {
            continue;
        } else {
            hands_array.push(new_card);
            counter++;
        }
    }
    console.log(convert());
}

document.getElementById("switchButton").onclick = function switch_cards() {
    var counter = 1;

    while (counter < 6) {
        if (document.getElementById("card" + counter).checked) { // checked is true
            new_card = Math.floor(((Math.random() * 54))); //0-53
            if (hands_array.includes(new_card)) {
                continue;
            } else {
                hands_array[counter - 1] = new_card;
                counter++;
            }
        } else {
            counter++;
        }
    }
    console.log(convert())
}

function isEqual() {
    var size;
    size = new Set(suits).size;
    if (suits.includes(4)) { // 有鬼牌
        size--;
    }
    return size == 1;
}

function maxRepeat() {
    var max = 0;
    for (let key in hashTable) {
        if (hashTable[key].length > max) {
            hashTable[key].length = max;
        }
    }
    return max;
}

/**
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns 
 */
function isIncluded(arr1, arr2) {
    const filteredArray = arr1.filter(value => arr2.includes(value)); //intersection
    return Object.keys(filteredArray).length
}

function isFlush() {
    var counter = 0; // 計算共有幾張鬼牌

    if ("13" in hashTable) {
        counter = hashTable[13].length
    }
    arr.sort(function (a, b) { return a - b });

    for (let i = 0; i < arr.length - 1; i++) {
        if (!arr[i] == arr[i + 1] + 1) {
            if (counter > 0) {
                counter--;
                continue;
            }
            return false;
        }
    }
    return true;
}

function isJUp(joker) {
    var max = 0;
    var index = 0;

    if (joker) {
        for (let key in hashTable) {
            if ((Number(key) >= 10 && Number(key) <= 12) || Number(key) == 0) {
                return true;
            }
        }
    } else {
        for (let key in hashTable) {
            if (hashTable[key].length > max) {
                hashTable[key].length = max;
                index = Number(key);
            }
        }
        if ((index >= 10 && index <= 12) || index == 0) {
            return true;
        } else {
            return false;
        }
    }
}

function prices() {
    var betting_odds;
    var number;
    var joker_num = 0;

    for (let i = 0; i < 5; i++) {
        if (hands_array[i] == 52 || hands_array[i] == 53) {
            suits.push(4);
            numbers.push(13);
            joker_num++;
            if (!("13" in hashTable)) { // 提早創keys
                hashTable[13] = [13];
            } else {
                hashTable[13].push(13);
            }
        } else {
            suits.push(Math.floor(hands_array[i] / 13)); //0, 1, 2, 3
            number = Math.floor(hands_array[i] % 13) // 0-12
            numbers.push(number);
            if (!(toString(number) in hashTable)) {
                hashTable[number] = [number];
            } else {
                hashTable[number].push(number);
            }
        }
    }

    if (isEqual() && isIncluded(numbers, [9, 10, 11, 12, 13]) == 5) { // 同花大順
        betting_odds = 500;
    } else if (Object.keys(hashTable).length == 2 && suits.includes(4)) { // 五梅
        betting_odds = 250;
    } else if (isEqual() && isFlush()) { // 同花順
        betting_odds = 100;
    } else if ((maxRepeat() == 4) || (maxRepeat() == 3 && joker_num == 1) || (maxRepeat() == 2 && joker_num == 2)) { // 鐵支
        betting_odds = 40;
    } else if ((Object.keys(hashTable).length == 2 && maxRepeat() == 3) ||
        (Object.keys(hashTable).length == 3 && maxRepeat() == 2 && joker_num > 0)) { //葫蘆
        betting_odds = 10;
    } else if (isEqual(0)) { //同花
        betting_odds = 7;
    } else if (isFlush()) { //順子
        betting_odds = 5;
    } else if ((Object.keys(hashTable).length == 3 && maxRepeat() == 3) ||
        (Object.keys(hashTable).length == 4 && maxRepeat() == 2 && joker_num > 0)) { //三條, 113 or 1112+joker
        betting_odds = 3;
    } else if (Object.keys(hashTable).length == 3 && maxRepeat() == 2) { //兩對
        betting_odds = 2;
    } else if (Object.keys(hashTable).length == 4 && maxRepeat() == 2 && isJUp(false) ||
        (Object.keys(hashTable).length == 5 && isJUp(true) && joker_num > 0)) { // 1112, 11111+joker
        betting_odds = 1;
    }
    return betting_odds;
}

function proportion(){

}