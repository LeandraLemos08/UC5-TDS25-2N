# 🎓 English Millionaire

> **Who Wants to Be an English Millionaire?**
> A terminal-based English grammar game inspired by "Who Wants to Be a Millionaire".

---

## 👥 Integrante

- Trabalho por Leandra Lemos

---

## 🚀 Como Executar

### Requisitos

- Node.js instalado (versão 14 ou superior)

### Instalação

```bash
# Instale a dependência
npm install readline-sync

# Execute o jogo
node main.js
```

## 🎮 Regras do Jogo

1. **15 perguntas** sobre gramática inglesa divididas em 3 níveis:
   - Questões 1–5: **FÁCIL** 
   - Questões 6–10: **MÉDIO** 
   - Questões 11–15: **DIFÍCIL** 

2. **Prêmios** crescem a cada resposta correta (de R$ 1.000 até R$ 2.000.000).

3. **Zonas Seguras** (Safe Havens) nas questões **5** e **10**:
   - Se errar depois de uma zona segura, você leva o prêmio dela garantido.

4. **3 Ajudas** disponíveis (uma vez cada):
   - `1` → **50:50** — Elimina 2 alternativas erradas
   - `2` → **Ajuda da Plateia** — Exibe votação da audiência em %
   - `3` → **Ligar para um Amigo** — Um amigo dá uma dica com grau de confiança

5. **Desistir (`W`)** — A qualquer momento, você pode sair com o prêmio atual.

6. **Feedback** após cada pergunta — resposta correta destacada + explicação gramatical.

---

## 🏆 Funcionalidades Implementadas

| Requisito                        | ✅ |
|----------------------------------|----|
| Desenvolvido em JavaScript       | ✅ |
| Usa `readline-sync`              | ✅ |
| Roda completamente no terminal   | ✅ |
| Sistema de pontuação             | ✅ |
| Mensagens organizadas e legíveis | ✅ |
| Mínimo 10 perguntas (temos 15)   | ✅ |
| Menu inicial                     | ✅ |
| Opção de reiniciar               | ✅ |
| Feedback de acerto e erro        | ✅ |
| Estruturas de repetição          | ✅ |
| Condicionais                     | ✅ |
| Arrays e objetos                 | ✅ |
| Funções                          | ✅ |
| Tratamento de entradas inválidas | ✅ |

### 🌟 Extras Implementados

- **Ranking persistente** — Top 10 salvo em `ranking.json`
- **Cores no terminal** — Interface rica com ANSI colors
- **Ladder visual** — Escada de prêmios exibida na tela
- **3 tipos de ajuda** animadas (50:50, Plateia, Amigo)
- **Dificuldade progressiva** — Fácil → Médio → Difícil
- **Zonas seguras** — Protegem o progresso do jogador
- **Explicações gramaticais** — Após cada pergunta
- **Opção de desistir** — Com proteção do prêmio atual
- **Perguntas embaralhadas** — Ordem aleatória a cada partida

---

## 📁 Estrutura do Projeto

```
english-millionaire/
├── main.js          # Ponto de entrada e lógica principal
├── questions.js     # Banco de perguntas (15 questões)
├── lifelines.js     # Sistema de ajudas (50:50, plateia, amigo)
├── ranking.js       # Ranking e persistência de scores
├── ui.js            # Interface visual (cores, formatação)
├── ranking.json     # Gerado automaticamente ao jogar
├── package.json
└── README.md
```