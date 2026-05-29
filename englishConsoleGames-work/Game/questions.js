/*
 Questões organizadas por dificuldade de níveis.
*/

const QUESTIONS = {
  easy: [
    {
      question: "Which sentence is correct in the Simple Present?",
      options: [
        "A) She go to school every day.",
        "B) She goes to school every day.",
        "C) She going to school every day.",
        "D) She gone to school every day.",
      ],
      answer: "B",
      explanation:
        "In the Simple Present, we add -es to the verb for he/she/it. → 'She GOES to school.'",
    },
    {
      question: "What is the past tense of the verb 'GO'?",
      options: ["A) Goed", "B) Goes", "C) Went", "D) Gone"],
      answer: "C",
      explanation:
        "'Go' is an irregular verb. Its Simple Past form is WENT. → 'I went to the store.'",
    },
    {
      question: "Choose the correct sentence in Simple Past:",
      options: [
        "A) They plaied football yesterday.",
        "B) They plays football yesterday.",
        "C) They played football yesterday.",
        "D) They playing football yesterday.",
      ],
      answer: "C",
      explanation:
        "For regular verbs, we add -ED in the Simple Past. → 'They PLAYED football yesterday.'",
    },
    {
      question: "Which is the correct negative form in Simple Present?",
      options: [
        "A) He don't like coffee.",
        "B) He doesn't likes coffee.",
        "C) He doesn't like coffee.",
        "D) He not like coffee.",
      ],
      answer: "C",
      explanation:
        "For he/she/it in negative Simple Present, we use DOESN'T + verb (base form). → 'He DOESN'T LIKE coffee.'",
    },
    {
      question: "Fill in the blank: 'They ____ watching TV right now.'",
      options: ["A) is", "B) are", "C) am", "D) be"],
      answer: "B",
      explanation:
        "For plural subjects (they), we use ARE in the Present Continuous. → 'They ARE watching TV.'",
    },
  ],

  medium: [
    {
      question:
        "Which sentence correctly uses the Past Continuous?",
      options: [
        "A) She was study when I called.",
        "B) She studying when I called.",
        "C) She was studying when I called.",
        "D) She were studying when I called.",
      ],
      answer: "C",
      explanation:
        "Past Continuous: WAS/WERE + verb-ING. For she/he/it, use WAS. → 'She WAS STUDYING when I called.'",
    },
    {
      question:
        "Select the correct Future Simple form:",
      options: [
        "A) I am going to will travel next year.",
        "B) I will traveled next year.",
        "C) I will travel next year.",
        "D) I will travels next year.",
      ],
      answer: "C",
      explanation:
        "Future Simple: WILL + base form of verb (no changes). → 'I WILL TRAVEL next year.'",
    },
  ],
}
module.exports = QUESTIONS;