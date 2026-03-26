const readline = require('readline-sync'); // Importa readline
const gameState = require('../gameState'); // Importa gameState

function quiz() {

    const questions = [
        {
            question: "She ____ my friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "2"
        },
        {
            question: "They ____ students.",
            options: ["1) is", "2) am", "3) are"],
            answer: "3"
        },
        {
            question: "We ____ astronauts.",
            options: ["1) are", "2) am", "3) is"],
            answer: "1"
        },
        {
            question: "He ____ a teacher.",
            options: ["1) is", "2) are", "3) am"],
            answer: "1"
        },
        {
            question: "I ____ happy today.",
            options: ["1) am", "2) are", "3) is"],
            answer: "3"
        },
        {
            question: "She ____ my best friend.",
            options: ["1) are", "2) is", "3) am"],
            answer: "2"
        }
    ];

    questions.forEach(q => {

        console.log("\n" + q.question);
        q.options.forEach(opt => console.log(opt));

        let answer = readline.question("Answer: ");

        if(answer === q.answer) {
            console.log("Correct!");
            gameState.addScore(10);
        } else {
            console.log("Wrong!");
            gameState.loseLife();
        }

    });

    readline.question("\nPress ENTER to continue...");
}

module.exports = quiz;