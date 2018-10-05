// Word list //
var selectWords = [
    "frozen",
    "sleeping-beauty",
    "cinderella",
    "aladdin",
    "beauty-and-the-beast",
    "the-lion-king",
];



// An array that list of all letter under user's guess//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];


var totalWins = document.getElementById("total-wins");
var currentWord = document.getElementById("current-Word");
var remainingGuess = document.getElementById("remaining-guess");
var guessedText = document.getElementById("guessed-letter");

// PLAY SONGS
function playsong() {

}

// 
var wins = 0;
var guessingWord = []; // letters that have been properly guessed//
var guessedLs = []; // letters that have already guessed//
var remainingGuesses = 12; // the value of maxTries (-1 for every wrong guessed)//
var Endgame = false;
var img;
var selectWordsNum = 0

// 
document.body.onkeydown = function (event) {
    if (Endgame) {
        img.style.display = "none"
        Endgame = false
    }
    var guessedLetter = event.key;
    console.log(guessedLetter);

    guessedLs.push(guessedLetter);
    guessedText.innerText = guessedLs.join()
    fillingLetter(guessedLetter)

};

// SET UP GAME
function setup() {
    // Math floor to round the random down to the nearest whole
    selectWordsNum = Math.floor(Math.random() * selectWords.length)
    totalWins.innerText = wins
    remainingGuess.innerText = remainingGuesses

    // Clear out arrays
    guessedLs = []
    guessingWord = []

    var arr = selectWords[selectWordsNum].split("")

    var newarr = arr.map(function (char) {

        if (guessedLs.includes(char)) {
            return char

        } else if (char == "-") {
            return "-"
        } else {
            return "_"
        }
    })

    currentWord.innerText = newarr.join()
}

// FILLING LETTERS
function fillingLetter(L) {
    var arr = selectWords[selectWordsNum].split("")
    if (arr.includes(L)) {
        var newarr = arr.map(function (char) {

            if (guessedLs.includes(char)) {
                return char

            } else if (char == "-") {
                return "-"
            } else {
                return "_"
            }
        })
        if (arr.join() == newarr.join()) {
            Endgame = true
            img = document.getElementById(selectWords[selectWordsNum])
            img.style.display = "inline"
            wins++
            totalWins.innerText = wins
            remainingGuesses = 12
            guessedLs = []
            remainingGuess.innerText = remainingGuesses
            setup()
            fillingLetter("")

        }
        if (!Endgame) {
            currentWord.innerText = newarr.join()
        }

    } else {
        remainingGuesses--
        if (remainingGuesses === 0) {
            remainingGuesses = 12
            guessedLs = []
            alert("YOU LOSE!! PRESS SPACEBAR TO STARTS AGAIN")
            setup()
            fillingLetter("")
        } else {
            remainingGuess.innerText = remainingGuesses

        }

    }
}

setup()
fillingLetter()




