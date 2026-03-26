//Variáveis
let score = 0;
let lives = 3;
// Pontuação
function addScore(points){
    score += points;
}
// Perder vida
function loseLife(){
    lives --;
    if (lives < 0){
        lives = 0;
    }
}
// Retorna o score
function getScore(){
  return score;
}
// Retorna vidas atuais
function getLives() {
    return lives;
}
// Reinicia o jogo
function resetGame() {
    score = 0;
    lives = 3;
}
// Exportamos as funções
module.exports = {
    addScore,
    loseLife,
    getScore,
    getLives,
    resetGame
};

