const rl = require("readline-sync")
const QUESTIONS = require("./questions");
const lifelines = require("./lifelines");
const ranking   = require("./ranking");
const ui        = require("./ui");
const { C, PRIZE_LADDER, SAFE_HAVENS,
        printTitle, printPrizeLadder, printQuestion,
        printCorrect, printWrong, printFinalResult,
        printHelpsStatus, printLine, sleep } = ui;

const VALID_ANSWERS   = ["A", "B", "C", "D"];
const HELP_CMDS       = ["H", "HELP", "?"];
const WALK_AWAY_CMD   = ["Q", "QUIT", "WALK", "W"];
const MENU_SEPARATOR  = "\n";

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildQuestionList() {
  const easy   = shuffle([...QUESTIONS.easy]);
  const medium = shuffle([...QUESTIONS.medium]);
  const hard   = shuffle([...QUESTIONS.hard]);
  return [...easy, ...medium, ...hard];
}

function askNonEmpty(prompt) {
  let val = "";
  while (!val.trim()) {
    val = rl.question(prompt).trim();
    if (!val) console.log(C.bRed + "  ⚠  Please type something." + C.reset);
  }
  return val;
}

function askYesNo(prompt) {
  while (true) {
    const ans = rl.question(prompt + " (y/n): ").trim().toLowerCase();
    if (ans === "y" || ans === "yes") return true;
    if (ans === "n" || ans === "no")  return false;
    console.log(C.bRed + "  ⚠  Please enter Y or N." + C.reset);
  }
}

function useLifeline(lifelineName, helps, question, eliminatedOpts) {
  switch (lifelineName) {
    case "1": {  // 50:50 (skip / eliminate 2)
      if (helps.skipQuestion <= 0) {
        console.log(C.bRed + "\n  ⚠  You have already used this lifeline!\n" + C.reset);
        return false;
      }
      helps.skipQuestion--;
      const elim = lifelines.fiftyFifty(question);
      elim.forEach((e) => eliminatedOpts.add(e));
      return false; // don't re-ask question, just show result
    }
    case "2": {  // Audience Help
      if (helps.audienceHelp <= 0) {
        console.log(C.bRed + "\n  ⚠  You have already used this lifeline!\n" + C.reset);
        return false;
      }
      helps.audienceHelp--;
      lifelines.audienceHelp(question);
      return false;
    }
    case "3": {  // Call a Friend
      if (helps.callFriend <= 0) {
        console.log(C.bRed + "\n  ⚠  You have already used this lifeline!\n" + C.reset);
        return false;
      }
      helps.callFriend--;
      lifelines.callFriend(question);
      return false;
    }
    default:
      console.log(C.bRed + "\n  ⚠  Invalid lifeline choice.\n" + C.reset);
      return false;
  }
}

function playQuestion(question, questionNum, helps) {
  const eliminatedOpts = new Set();
  let attempts = 0;

  while (true) {
    // Render screen
    printTitle();
    printPrizeLadder(questionNum - 1);
    printQuestion(question, questionNum, 15);

    if (eliminatedOpts.size > 0) {
      console.log(
        C.dim + "  🚫 Eliminated by 50:50: " +
        [...eliminatedOpts].join(", ") + C.reset + "\n"
      );
    }

    console.log(C.dim +
      "  Type A / B / C / D to answer\n" +
      "  Type 1 (50:50) | 2 (Audience) | 3 (Call Friend) to use a lifeline\n" +
      "  Type W to walk away with current prize\n" + C.reset
    );

    const raw    = rl.question("  " + C.bold + "Your answer: " + C.reset).trim().toUpperCase();
    const answer = raw;

    if (WALK_AWAY_CMD.includes(answer)) {
      return "WALK";
    }

    if (["1", "2", "3"].includes(answer)) {
      useLifeline(answer, helps, question, eliminatedOpts);
      continue; // re-render
    }

    if (!VALID_ANSWERS.includes(answer)) {
      console.log(C.bRed + "\n  ⚠  Invalid input! Enter A, B, C, D, 1, 2, 3, or W.\n" + C.reset);
      sleep(600);
      continue;
    }

    if (eliminatedOpts.has(answer)) {
      console.log(C.bRed + "\n  ⚠  That option was eliminated by 50:50!\n" + C.reset);
      sleep(600);
      continue;
    }

    if (answer === question.answer) {
      printTitle();
      printCorrect(question.options.find((o) => o.startsWith(question.answer)), question.explanation);
      return "CORRECT";
    } else {
      const correctOpt = question.options.find((o) => o.startsWith(question.answer));
      const userOpt    = question.options.find((o) => o.startsWith(answer)) || answer;
      printTitle();
      printWrong(userOpt, correctOpt, question.explanation);
      return "WRONG";
    }
  }
}

function playGame(playerName) {
  const questions = buildQuestionList();
  const helps = {
    skipQuestion: 1,   // 50:50
    audienceHelp: 1,
    callFriend:   1,
  };

  let questionNum = 1;
  let lastSafePrize = "R$ 0,00";

  for (let i = 0; i < questions.length; i++) {
    questionNum = i + 1;
    const question = questions[i];

    const result = playQuestion(question, questionNum, helps);

    if (result === "CORRECT") {
      // Check safe haven
      if (SAFE_HAVENS.includes(i)) {
        lastSafePrize = PRIZE_LADDER[i];
        console.log(
          C.bgGreen + C.black + C.bold +
          `  🛡️  SAFE HAVEN REACHED! You're guaranteed ${lastSafePrize}!  ` +
          C.reset
        );
        rl.question(C.dim + "  Press ENTER to continue..." + C.reset);
      }

      if (questionNum === 15) {
        // WON!
        printTitle();
        printFinalResult(questionNum, PRIZE_LADDER[14], true);
        ranking.addToRanking(playerName, questionNum, PRIZE_LADDER[14]);
        return;
      }

      console.log(
        C.bGreen + `\n  ✅ Correct! You've won ${PRIZE_LADDER[i]}!\n` + C.reset
      );
      rl.question(C.dim + "  Press ENTER for next question..." + C.reset);

    } else if (result === "WALK") {
      const walkPrize = i > 0 ? PRIZE_LADDER[i - 1] : "R$ 0,00";
      printTitle();
      console.log(C.bYellow + C.bold + "\n  🚶 You chose to walk away!\n" + C.reset);
      printFinalResult(questionNum, walkPrize, true);
      ranking.addToRanking(playerName, questionNum, walkPrize);
      return;

    } else {
      // WRONG
      printFinalResult(questionNum, lastSafePrize, false);
      ranking.addToRanking(playerName, questionNum, lastSafePrize);
      return;
    }
  }
}

function showMenu() {
  while (true) {
    printTitle();

    console.log(C.bold + "  📋 MAIN MENU\n" + C.reset);
    console.log("  " + C.bGreen + "1)" + C.reset + " ▶  Play Game");
    console.log("  " + C.bYellow + "2)" + C.reset + " 🏆  View Ranking");
    console.log("  " + C.bCyan + "3)" + C.reset + " 📖  How to Play");
    console.log("  " + C.bRed + "4)" + C.reset + " 🚪  Quit");
    console.log();

    const choice = rl.question("  " + C.bold + "Choose an option (1-4): " + C.reset).trim();

    switch (choice) {
      case "1":
        startGame();
        break;

      case "2":
        printTitle();
        ranking.printRanking();
        rl.question(C.dim + "  Press ENTER to return to menu..." + C.reset);
        break;

      case "3":
        showHowToPlay();
        break;

      case "4":
        printTitle();
        console.log(C.bYellow + C.bold + "  Thanks for playing English Millionaire! 🎓\n" + C.reset);
        console.log(C.dim + "  Keep studying English and come back stronger!\n" + C.reset);
        process.exit(0);
        break;

      default:
        console.log(C.bRed + "\n  ⚠  Invalid option. Please enter 1, 2, 3, or 4.\n" + C.reset);
        sleep(600);
    }
  }
}

function showHowToPlay() {
  printTitle();
  console.log(C.bold + C.bCyan + "  📖 HOW TO PLAY\n" + C.reset);
  printLine("─", 60);
  const rules = [
    "• Answer 15 grammar questions about English.",
    "• Questions go from EASY (1-5) → MEDIUM (6-10) → HARD (11-15).",
    "• Prizes double as you advance up the ladder.",
    "• Two SAFE HAVENS at questions 5 and 10 protect your winnings.",
    "• Wrong answer → you keep only your last safe haven prize.",
    "",
    "  🛟  LIFELINES  (one use each):",
    "  1) 50:50      → Eliminates 2 wrong answers.",
    "  2) Audience   → See how the audience voted (%).",
    "  3) Call Friend→ A friend gives you a hint.",
    "",
    "  W  → Walk away with your current prize at any time.",
    "",
    "  All questions are about English grammar and verb tenses.",
  ];
  rules.forEach((r) => console.log("  " + r));
  printLine("─", 60);
  console.log();
  rl.question(C.dim + "  Press ENTER to return to menu..." + C.reset);
}

function startGame() {
  printTitle();
  console.log(C.bold + "  🎮 NEW GAME\n" + C.reset);
  const playerName = askNonEmpty("  Enter your name: ");

  console.log();
  console.log(C.bYellow + `  Welcome, ${playerName}! Good luck! 🍀\n` + C.reset);
  sleep(400);

  playGame(playerName);

  console.log();
  const again = askYesNo("  Would you like to play again?");
  if (again) {
    startGame();
  }
}

showMenu();