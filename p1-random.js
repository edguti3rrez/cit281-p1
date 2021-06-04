/*
    CIT 281 Project 1
    Name: Edwin Gutierrez
*/

// alphabet array to make my random letter words
const lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// will hold a random string of random letters
let randomWord = "";

// combines letters randomly to form a random word and displays it, does this a random amount of times, based on getRandomIntegers(5, 26)
for (let i = 0; i <= getRandomInteger(5,26); i++) {
    randomWord = randomWord + lowerCaseAlphabet[getRandomInteger(0, 26)];
}
//Displays random new string
console.log(randomWord)

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}