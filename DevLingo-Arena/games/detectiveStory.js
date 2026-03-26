const readline = require('readline-sync'); // Importa readline
const gameState = require('../gameState'); // Importa gameState

function detectiveStory() {
    console.log("\nYou are a detective solving a mystery.");
    console.log("\nChoose the correct word:");
    const investigation = [

        {
            text: "The suspect ____ nervous.",
            options: ["1) look", "2) looks", "3) looking"],
            answer: "2"
        },
        {
            text: "You ____ a strange key in your pocket.",
            options: ["1) found", "2) find", "3) finding"],
            answer: "2"
        },
        {
            text: "You are ____ for the locked location at the crime scene.",
            options: ["1) look", "2) looks", "3) looking"],
            answer: "3"
        },
        {
            text: "You can't find any door that it ___ open.",
            options: ["1) was", "2) go", "3) will"],
            answer: "3"
        },
        {
            text: "Until the key ___ the window.",
            options: ["1) open", "2) opens", "3) opened"],
            answer: "2"
        },
        {
            text: "You find all the ____ computers.",
            options: ["1) stole", "2) steal", "3) stolen"],
            answer: "3"
        }
    ]
    investigation.forEach(t => {

        console.log("\n" + t.text);
        t.options.forEach(opt => console.log(opt));

        let answer = readline.question("Option: ");

        if (answer === t.answer) {
            console.log("Correct! You investigate it");
            gameState.addScore(10);
        } else {
            console.log("Wrong! You lose your work");
            gameState.loseLife();
        }

    });

    readline.question("\nPress ENTER to continue...");
}


module.exports = detectiveStory;