var readline = require('readline-sync');
const Dealer = require('./dealer.js');
const Pricing = require('./pricing.js')
const Transition = require('./transition.js')

let betAmount;
var bettingOdds;
var points;
let currentHands = []

function start() {
    console.log("遊戲規則")
}

// document.getElementById("betButton").onclick = 
function wager() {
    const dealer = new Dealer();
    const transition = new Transition();
    // betAmount = document.getElementById("betValue").value;
    // document.getElementById("betValue").value = "";

    betAmount = transition.wager();
    // document.getElementById("switch").style.display = "block"

    currentHands = dealer.deal();
    console.log(dealer.convert(currentHands));
}

// document.getElementById("switchButton").onclick = 
function switchCards() {
    var idString;
    var ids = []

    idString = readline.question("which cards do you want to switch (input in the format of 1,2,5 with no spaces): ");
    ids = idString.split(",")

    // for (let i = 0; i < 5; i++) {
    //     if (document.getElementById("card" + (i + 1)).checked) {
    //         ids.push(i)
    //     }
    // }

    const dealer = new Dealer();
    currentHands = dealer.switch(currentHands, ids);
    console.log(dealer.convert(currentHands));

    const pricing = new Pricing();
    bettingOdds = pricing.prices(currentHands);
    points = betAmount * bettingOdds;
}

wager();
switchCards();
const transition = new Transition();
transition.transition(betAmount, bettingOdds);

