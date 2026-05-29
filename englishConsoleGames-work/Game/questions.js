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
        "Choose the correct sentence in the Present Perfect:",
      options: [
        "A) I have saw that movie before.",
        "B) I have seen that movie before.",
        "C) I has seen that movie before.",
        "D) I have see that movie before.",
      ],
      answer: "B",
      explanation:
        "Present Perfect: HAVE/HAS + past participle. 'See' → past participle is SEEN. → 'I have SEEN that movie.'",
    },
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
        "Which sentence uses the Second Conditional correctly?",
      options: [
        "A) If I would have money, I buy a car.",
        "B) If I had money, I would buy a car.",
        "C) If I have money, I would buy a car.",
        "D) If I had money, I will buy a car.",
      ],
      answer: "B",
      explanation:
        "Second Conditional: IF + Simple Past, WOULD + base verb. It expresses an unreal/hypothetical situation. → 'If I HAD money, I WOULD BUY a car.'",
    },
    {
      question:
        "Choose the correct passive voice sentence:",
      options: [
        "A) The cake was bake by Mary.",
        "B) The cake is baked by Mary. (referring to yesterday)",
        "C) The cake was baked by Mary.",
        "D) The cake were baked by Mary.",
      ],
      answer: "C",
      explanation:
        "Passive Voice in Simple Past: WAS/WERE + past participle. → 'The cake WAS BAKED by Mary.'",
    },
  ],

  hard: [
    {
      question:
        "Which sentence correctly uses the Past Perfect?",
      options: [
        "A) By the time she arrived, we have already left.",
        "B) By the time she arrived, we had already leaved.",
        "C) By the time she arrived, we had already left.",
        "D) By the time she arrived, we already left.",
      ],
      answer: "C",
      explanation:
        "Past Perfect: HAD + past participle. Used for an action completed BEFORE another past action. 'Leave' → past participle LEFT. → 'We HAD already LEFT.'",
    },
    {
      question:
        "Select the sentence with the correct use of a Modal Verb:",
      options: [
        "A) You should to rest more.",
        "B) You should resting more.",
        "C) You should rest more.",
        "D) You should rests more.",
      ],
      answer: "C",
      explanation:
        "Modal verbs (should, must, can, etc.) are ALWAYS followed by the BASE FORM of the verb (no 'to', no -ing, no -s). → 'You should REST more.'",
    },
    {
      question:
        "Which option correctly completes the Third Conditional?\n   'If she ____ harder, she ____ the exam.'",
      options: [
        "A) had studied / would have passed",
        "B) studied / would pass",
        "C) would study / had passed",
        "D) has studied / would pass",
      ],
      answer: "A",
      explanation:
        "Third Conditional: IF + Past Perfect, WOULD HAVE + past participle. It refers to hypothetical situations in the PAST. → 'If she HAD STUDIED, she WOULD HAVE PASSED.'",
    },
    {
      question:
        "Identify the sentence with the CORRECT use of Reported Speech:",
      options: [
        'A) She said that she will come tomorrow.',
        'B) She said that she would come the next day.',
        'C) She said that she comes the next day.',
        'D) She said that she would came the next day.',
      ],
      answer: "B",
      explanation:
        "In Reported Speech, 'will' becomes 'would' and 'tomorrow' becomes 'the next day'. The verb tense shifts back. → 'She said that she WOULD COME THE NEXT DAY.'",
    },
    {
      question:
        "Which sentence demonstrates correct use of the Present Perfect Continuous?",
      options: [
        "A) I have been study for three hours.",
        "B) I have been studying since three hours.",
        "C) I have been studying for three hours.",
        "D) I am been studying for three hours.",
      ],
      answer: "C",
      explanation:
        "Present Perfect Continuous: HAVE/HAS + BEEN + verb-ING + FOR/SINCE. Use FOR with a duration, SINCE with a point in time. → 'I HAVE BEEN STUDYING FOR three hours.'",
    },
  ],
};

module.exports = QUESTIONS;