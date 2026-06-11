const fs   = require("fs");
const path = require("path");
const { C, printLine } = require("./ui");

const RANKING_FILE = path.join(__dirname, "ranking.json");

function loadRanking() {
  try {
    if (fs.existsSync(RANKING_FILE)) {
      return JSON.parse(fs.readFileSync(RANKING_FILE, "utf8"));
    }
  } catch (_) {}
  return [];
}

function saveRanking(ranking) {
  try {
    fs.writeFileSync(RANKING_FILE, JSON.stringify(ranking, null, 2), "utf8");
  } catch (_) {}
}

function addToRanking(playerName, questionReached, prize) {
  const ranking = loadRanking();
  ranking.push({
    name: playerName,
    questionReached,
    prize,
    date: new Date().toLocaleDateString("pt-BR"),
  });

  ranking.sort((a, b) => b.questionReached - a.questionReached);

  const top10 = ranking.slice(0, 10);
  saveRanking(top10);
  return top10;
}

function printRanking() {
  const ranking = loadRanking();
  console.log();
  console.log(C.bold + C.bYellow + "  🏆 TOP 10 RANKING\n" + C.reset);
  printLine("─", 60);

  if (ranking.length === 0) {
    console.log(C.dim + "  No scores yet. Be the first champion!" + C.reset);
  } else {
    const medals = ["🥇", "🥈", "🥉"];
    ranking.forEach((entry, i) => {
      const medal = medals[i] || `${i + 1}.`;
      const name  = entry.name.padEnd(16).slice(0, 16);
      console.log(
        `  ${medal}  ${C.bold}${name}${C.reset}  ` +
        `Q${String(entry.questionReached).padStart(2, "0")}  ` +
        `${C.bYellow}${entry.prize}${C.reset}  ` +
        `${C.dim}${entry.date}${C.reset}`
      );
    });
  }
  printLine("─", 60);
  console.log();
}

module.exports = { addToRanking, printRanking, loadRanking };