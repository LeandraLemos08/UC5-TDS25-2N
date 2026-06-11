const { C, sleep} = require("./ui")
 
 function fiftyFifty(question){
    const correct = question.answer
    const allOpts = ["A", "B", "C", "D"];
    const wrongs = allOpts.filter( (o) => o !== correct);
    const keepWrong = wrongs.splice(Math.floor(Math.random()* wrongs.length),1)[0];
    const eliminated = wrongs;
    console.log();
    console.log(C.bYellow+ "50:50 - Eliminated options:" + eliminated.join("and") + C.reset);
    console.log(C.dim + `Remaining: ${correct} and ${keepWrong}` + C.reset);
    console.log();
    return eliminated
 }

function audienceHelp(question){
    const correct = question.answer;
    const allOpts = ["A", "B", "C", "D"]
    const correctPct = 45 + Math.floor(Math.random() * 31);
    const remainder = 100 - correctPct;

const wrongPcts = [];
  let remaining = remainder;
  for (let i = 0; i < 2; i++) {
    const p = Math.floor(Math.random() * remaining);
    wrongPcts.push(p);
    remaining -= p;
  }
  wrongPcts.push(remaining);

 
  const wrongs = allOpts.filter((o) => o !== correct);
  const shuffled = wrongPcts.sort(() => Math.random() - 0.5);

  const poll = {};
  poll[correct] = correctPct;
  wrongs.forEach((opt, i) => (poll[opt] = shuffled[i]));

  console.log();
  console.log(C.bYellow + "  👥 AUDIENCE POLL" + C.reset);
  console.log(C.dim + "  (The audience has voted!)\n" + C.reset);

  allOpts.forEach((opt) => {
    const pct = poll[opt];
    const bar = "█".repeat(Math.floor(pct / 3));
    const color = opt === correct ? C.bGreen : C.dim;
    console.log(`  ${C.bold}${opt})${C.reset} ${color}${bar.padEnd(34)} ${pct}%${C.reset}`);
  });
  console.log();

  sleep(1500);

}

function callFriend(question) {
  const correct   = question.answer;
  const allOpts   = ["A", "B", "C", "D"];
  const names     = ["Carlos", "Ana", "Pedro", "Julia", "Michael", "Sarah"];
  const friend    = names[Math.floor(Math.random() * names.length)];

  const isRight   = Math.random() < 0.80;
  const guessed   = isRight
    ? correct
    : allOpts.filter((o) => o !== correct)[Math.floor(Math.random() * 3)];

  const confidence = isRight
    ? 70 + Math.floor(Math.random() * 26)   // 70-95%
    : 40 + Math.floor(Math.random() * 31);  // 40-70%

  const phrases = [
    `I'm pretty sure it's ${guessed}...`,
    `I think the answer is ${guessed}, but I'm not 100% certain.`,
    `It should be ${guessed}. I remember studying this!`,
    `My gut says ${guessed}. I'd go with it!`,
    `Hmm, it's either ${guessed} or another one... I'd say ${guessed}.`,
  ];
  const msg = phrases[Math.floor(Math.random() * phrases.length)];

  console.log();
  console.log(C.bYellow + `  📞 Calling ${friend}...` + C.reset);
  sleep(800);
  console.log();
  console.log(C.bCyan + `  ${friend}: "${msg}"` + C.reset);
  console.log(C.dim + `  Confidence: ${confidence}%` + C.reset);
  console.log();
  sleep(1300);
}

module.exports = { fiftyFifty, audienceHelp, callFriend };