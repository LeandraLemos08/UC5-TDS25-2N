const C = {
  reset:   "\x1b[0m",
  bold:    "\x1b[1m",
  dim:     "\x1b[2m",

  black:   "\x1b[30m",
  red:     "\x1b[31m",
  green:   "\x1b[32m",
  yellow:  "\x1b[33m",
  blue:    "\x1b[34m",
  magenta: "\x1b[35m",
  cyan:    "\x1b[36m",
  white:   "\x1b[37m",

  bRed:    "\x1b[91m",
  bGreen:  "\x1b[92m",
  bYellow: "\x1b[93m",
  bBlue:   "\x1b[94m",
  bMagenta:"\x1b[95m",
  bCyan:   "\x1b[96m",
  bWhite:  "\x1b[97m",

  bgBlue:  "\x1b[44m",
  bgGreen: "\x1b[42m",
  bgRed:   "\x1b[41m",
  bgYellow:"\x1b[43m",
  bgBlack: "\x1b[40m",
};

const PRIZE_LADDER = [
  "R$ 1.000",
  "R$ 2.000",
  "R$ 3.000",
  "R$ 5.000",
  "R$ 10.000",   // Safe haven 1 (index 4)
  "R$ 20.000",
  "R$ 40.000",
  "R$ 70.000",
  "R$ 100.000",
  "R$ 150.000",  // Safe haven 2 (index 9)
  "R$ 250.000",
  "R$ 500.000",
  "R$ 750.000",
  "R$ 1.000.000",
  "R$ 2.000.000",
];

const SAFE_HAVENS = [4, 9]; // question indices (0-based) that are guaranteed prizes

function clearScreen() {
  process.stdout.write("\x1Bc");
}

function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {} // busy wait (sync)
}

function printLine(char = "─", length = 60, color = C.dim) {
  console.log(color + char.repeat(length) + C.reset);
}

function printDoubleLine(length = 60) {
  console.log(C.bYellow + "═".repeat(length) + C.reset);
}

function centerText(text, width = 60) {
  const plain = text.replace(/\x1b\[[0-9;]*m/g, ""); // strip ANSI for length calc
  const pad = Math.max(0, Math.floor((width - plain.length) / 2));
  return " ".repeat(pad) + text;
}

function printTitle() {
  clearScreen();
  printDoubleLine();
  console.log(centerText(C.bYellow + C.bold + "🎓  ENGLISH MILLIONAIRE  🎓" + C.reset));
  console.log(centerText(C.dim + "Who Wants to Be an English Millionaire?" + C.reset));
  printDoubleLine();
  console.log();
}

function printPrizeLadder(currentIndex) {
  console.log(C.bold + C.bCyan + "\n  💰 PRIZE LADDER\n" + C.reset);
  for (let i = PRIZE_LADDER.length - 1; i >= 0; i--) {
    const isSafe = SAFE_HAVENS.includes(i);
    const isCurrent = i === currentIndex;
    const isWon = i < currentIndex;

    let prefix = "  ";
    let label = `${String(i + 1).padStart(2, " ")}. ${PRIZE_LADDER[i]}`;

    if (isCurrent) {
      console.log(
        C.bgBlue + C.bWhite + C.bold +
        `  ► ${label}` +
        (isSafe ? "  🛡️  SAFE" : "") +
        C.reset
      );
    } else if (isWon) {
      console.log(C.green + `  ✓ ${label}` + C.reset);
    } else if (isSafe) {
      console.log(C.bYellow + `  ${prefix}${label}  🛡️  SAFE` + C.reset);
    } else {
      console.log(C.dim + `  ${prefix}${label}` + C.reset);
    }
  }
  console.log();
}

function printQuestion(q, questionNum, totalQuestions) {
  const difficulty = questionNum <= 5 ? "EASY" : questionNum <= 10 ? "MEDIUM" : "HARD";
  const diffColor  = questionNum <= 5 ? C.bGreen : questionNum <= 10 ? C.bYellow : C.bRed;

  printLine("─", 60, C.dim);
  console.log(
    `  ${C.bold}Question ${questionNum}${C.reset}` +
    `  |  ${diffColor}${difficulty}${C.reset}` +
    `  |  Prize: ${C.bYellow}${PRIZE_LADDER[questionNum - 1]}${C.reset}`
  );
  printLine("─", 60, C.dim);
  console.log();
  console.log("  " + C.bold + q.question + C.reset);
  console.log();
  q.options.forEach((opt) => console.log("  " + C.bCyan + opt + C.reset));
  console.log();
}

function printCorrect(answer, explanation) {
  console.log();
  console.log(C.bgGreen + C.black + C.bold + "  ✅  CORRECT!  " + C.reset);
  console.log();
  console.log(C.bGreen + "  " + answer + C.reset);
  console.log();
  console.log(C.dim + "  📖 Explanation:" + C.reset);
  console.log("  " + explanation);
  console.log();
  sleep(600);
}

function printWrong(userAns, correctAns, explanation) {
  console.log();
  console.log(C.bgRed + C.bWhite + C.bold + "  ❌  WRONG!  " + C.reset);
  console.log();
  console.log(C.bRed + "  You answered: " + userAns + C.reset);
  console.log(C.bGreen + "  Correct answer: " + correctAns + C.reset);
  console.log();
  console.log(C.dim + "  📖 Explanation:" + C.reset);
  console.log("  " + explanation);
  console.log();
}

function printFinalResult(questionNum, prize, won) {
  printDoubleLine();
  if (won) {
    console.log(centerText(C.bYellow + C.bold + "🏆  CONGRATULATIONS!  🏆" + C.reset));
    console.log(centerText(C.bWhite + "You won: " + C.bYellow + C.bold + prize + C.reset));
  } else {
    const safeIndex = SAFE_HAVENS.filter((i) => i < questionNum - 1).pop();
    const safePrize = safeIndex !== undefined ? PRIZE_LADDER[safeIndex] : "R$ 0,00";
    console.log(centerText(C.bRed + C.bold + "💔  GAME OVER  💔" + C.reset));
    console.log(centerText(C.white + "You take home: " + C.bYellow + C.bold + safePrize + C.reset));
  }
  printDoubleLine();
  console.log();
}

function printHelpsStatus(helps) {
  const items = [
    helps.skipQuestion > 0
      ? C.bGreen + `⏭  Skip (${helps.skipQuestion}x)` + C.reset
      : C.dim + "⏭  Skip (used)" + C.reset,
    helps.audienceHelp > 0
      ? C.bGreen + `👥  Audience (${helps.audienceHelp}x)` + C.reset
      : C.dim + "👥  Audience (used)" + C.reset,
    helps.callFriend > 0
      ? C.bGreen + `📞  Call Friend (${helps.callFriend}x)` + C.reset
      : C.dim + "📞  Call Friend (used)" + C.reset,
  ];
  console.log("  " + items.join("   "));
  console.log();
}

module.exports = {
  C,
  PRIZE_LADDER,
  SAFE_HAVENS,
  clearScreen,
  sleep,
  printLine,
  printDoubleLine,
  centerText,
  printTitle,
  printPrizeLadder,
  printQuestion,
  printCorrect,
  printWrong,
  printFinalResult,
  printHelpsStatus,
};