// makeing variabels, and we're giving them values
let playerCardsOne = 0;
let playerCardsTwo = 0;

let dealerCardsOne = 0;
let dealerCardsTwo = 0;
// we're makeing a function to alow us to repeat
// this code. In this function, we're geting
// a random number between 0-11
function getCards() {
    return Math.ceil(Math.random()*12);
}
console.log(getCards);

// we're starting the game, it will work once its called
function startGame() {
    playerCardsOne = getCards();
    playerCardsTwo = getcards();
}