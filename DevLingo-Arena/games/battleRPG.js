const readline = require('readline-sync');
const gameState = require('../gameState');
function battleRPG() {

    let enemyHP = 30;

    console.log("\nA Grammar Monster appears!");

    while(enemyHP > 0) {

        console.log("\nEnemy HP:", enemyHP);
        console.log("Answer correctly to attack.");
      const battle = [
        {
            text: "Past of 'go'",
            answer: "went"
        },
        {
          text: "Past of 'eat'",
          answer: "ate"
      },
      {
        text: "Present of 'see'",
        answer: "saw"
    },
    {
      text: "Past of 'run'",
      answer: "ran"
    },
    {
    text: "Past of 'buy'",
    answer: "bought"
    },
    {
      text: "Past of 'think'",
      answer: "thought"
    }]}

    battle.forEach(s => {

      console.log("Answer correctly to attack.");
      console.log(s.text);

      let answer = readline.question("Word: ").toLowerCase();

      if(answer === s.answer) {
          console.log("Correct!");
          gameState.addScore(10);
      } else {
          console.log("Wrong! Correct answer:", s.answer);
          gameState.loseLife();
      }

  });

  readline.question("\nPress ENTER to continue...");
 }





 //         let answer = readline.question("Past of 'go': ")

//         if(answer.toLowerCase() === "went") {
//             console.log("Hit!");
//             enemyHP -= 10;
//             gameState.addScore(10);
//         } else {
//             console.log("Miss! You got hit.");
//             gameState.loseLife();
//             break;
//         }
//     }

//     if(enemyHP <= 0) {
//         console.log("Monster defeated!");
//     }

//     readline.question("\nPress ENTER to continue...");
// }

module.exports = battleRPG;