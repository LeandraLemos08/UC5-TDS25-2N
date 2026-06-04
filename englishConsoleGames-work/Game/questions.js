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
    {
      question:
      "Complete with did: ____ you see the movie yesterday?",
      options: [
        "A) Do", "B) Does", "C) Did", "Doed"
      ],
      answer: "A",
      explanation:
      "We use do with I, you, we, they. You  requires do."
    },
    {
      question:
        "What does Simple Present express? Choose the BEST answer.",
      options: [
        "A) An action happenning right now.",
        "B) An action that happened yesterday.",
        "C) Habits, routines and general truths.",
        "D) An action that will happen tomorrow."
      ],
      answer: "C",
      explanation:
      "Simple Present is used for habits, routines and general truths. For example: 'The sun RISES in the east'."
    },
    {
      question:
      "Wich sentence is in the Present Continuous NEGATIVE?",
      options: [
        "A) I am not sleeping.",
        "B) I is not sleeping.",
        "C) I are not sleeping.",
        "D) I not sleeping."
      ],
      answer: "A",
      explanation: 
      "Present Continuous Negative: AM/ IS/ ARE + not + verbING. For 'I' use am not. Like 'I am not...'"
    }
  ],

  hard: [
    {
      question:
      "Wich sentence is correctly written in the Simple Past?",
      options: [
        "A) She goed to the market yesterday.",
        "B) She go to the market yesterday.",
        "C) She went to the market yesterday.",
        "D) She goes to the market yesterday."
      ],
      answer: "C",
      explanation:
      "'Go' is an irregular verb. Its Simple Past form is 'went'."
    }, 
    {
      question:
      "Choose the correct future sentence using WILL:",
      options: [
        "A) She will goes to the gym tomorrow.",
        "B) She will going to the gym tomorrow.",
        "C) She will go to the gym tomorrow.",
        "D) She wills go to the gym tomorrow."
      ],
      answer: "C",
      explanation:
      "Future with WILL: Will + base form."

    }, 
    {
     question:
     "Wich is a correctly regular verb in the Simple Past?",
     options: [
      "A) I buyed a new phone.",
      "B) I buied a new phone.",
      "C) I buys a new phone.",
      "D) I bought a new phone."
     ],
     answer: "D",
     explanation:
     "'Buy' is an irregular verb. Its Simple Past form is 'Bought'."
    }, 
    {
     question:
     "Wich sentence uses 'GOING TO' correctly for the future?",
     options: [
      "A) They are going to travels next week.",
      "B) They are going to travel next week.",
      "C) They is going to travel next week.",
      "D) They going to travel next week."
     ],
     answer: "B",
     explanation:
     "Future with GOING TO: AM/ IS/ ARE + GOING TO + base verb. For 'they', use 'are'."
    },
    {
     questions:
     "What is the difference between WILL and GOING TO?",
     options: [
      "A) They mean the same thing and can always be swapped.",
      "B) WILL is for past, GOING TO is for present.",
      "C) WILL is for future actions; GOING TO is for planned actions.",
      "D) GOING TO is only used in negative sentences.",
     ],
     answer: "C",
     explanation:
     "Will is for future actions. GOING TO is for planned actions. Like 'I will study tomorrow' and 'I am going to study.'"
    },
  ]
}
module.exports = QUESTIONS;