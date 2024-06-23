let bet_amount;
const suits_array = ["spade", "heart", "diamond", "club"];
let hands_array = []

function start() {
    console.log("遊戲規則")
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

function random_cards() { //未加鬼牌
    var random_number;
    var random_suits;

    random_number = Math.floor(((Math.random() * 13))) + 1;
    random_suits = Math.floor(((Math.random() * 4)));
    new_card = suits_array[random_suits] + " " + random_number;
    return new_card
}

function deck() {
    var counter = 0;
    while (counter < 5) {
        new_card = random_cards();

        if (hands_array.includes(new_card)) {
            continue;
        } else {
            hands_array.push(new_card);
            counter++;
        }
    }
    console.log(hands_array);
}

function switch_cards() {

    var counter = 1;
    while (counter < 6) {
        if (document.getElementById("card" + counter).checked) {
            new_card = random_cards();
            if (hands_array.includes(new_card)) {
                continue;
            } else {
                hands_array[counter - 1] = new_card;
                counter++;
            }
        }
    }
}

function prices() {

}