let input;
const suits_array = ["spade", "heart", "diamond", "club"];
let hands_array = []

function start() {
    console.log("遊戲規則")
}

document.getElementById("submit").onclick = function wager() {
    input = document.getElementById("bet_value").value;
    console.log(input);
    if (input < 100) {
        console.log("最低押分需大於100");
        input = 0;
    } else if (input > 2000) {
        console.log("最高押分需小於2000");
        input = 0;
    } else {
        deck();
    }
}

function deck() {
    var random_number;
    var random_suits;
    var counter = 0;
    while (counter < 5) {
        random_number = Math.floor(((Math.random() * 13))) + 1;
        random_suits = Math.floor(((Math.random() * 4)));

        new_card = suits_array[random_suits] + " " + random_number;
        if (hands_array.includes(new_card)) {
            continue
        } else {
            hands_array.push(new_card);
            counter++;
        }
    }
    console.log(hands_array)
}

function switch_cards() {
    
}