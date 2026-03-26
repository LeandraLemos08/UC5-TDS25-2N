const readline = require('readline-sync');
const gameState = require('../gameState');

function sentenceBuilder() {


const challenge = [
    {
        words: ["developer", "is", "he", "a"],
        answer: "He is a developer"
    },
    {
        words: ["write", "I", "code", "a"],
        answer: "I write a code"
    },
    {
        words: ["system", "The", "works"],
        answer: "The system works"
    },
    {
        words: ["app", "saves", "The", "data"],
        answer: "The app saves data"
    },
    {
        words: ["program", "The", "runs"],
        answer: "The program runs"
    },
    {
        words: ["The", "tests", "developer", "code"],
        answer: "The developer tests code"
    }
]

challenge.forEach(c => {
    console.log("Reorder the words to form a sentence: ");
    console.log(c.words.join(" | "))

    let answer = readline.question("Write the sentence in the right order: ")
    if (answer === c.answer) {
        console.log("Correct!")
        gameState.addScore(10);
    } else {
        console.log("Wrong! The right anser is:", c.answer);
        gameState.loseLife();
    }
})

}
module.exports = sentenceBuilder;