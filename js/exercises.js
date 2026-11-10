/* PM3 English Vocabulary 1; question, answer and explanation in one file. */
const exerciseBank={
  "English": {
    "Vocabulary 1": [
      {
        "id": "ENG-PM3-EXC-001-01",
        "q": "What is the opposite of early?",
        "options": [
          "Late",
          "Soon",
          "Fast",
          "First"
        ],
        "type": "mc",
        "correct": 0,
        "explanation": "Late is the opposite of early."
      },
      {
        "id": "ENG-PM3-EXC-001-02",
        "q": "Which word means very large?",
        "options": [
          "Tiny",
          "Narrow",
          "Brief",
          "Huge"
        ],
        "type": "mc",
        "correct": 3,
        "explanation": "Huge means very large."
      },
      {
        "id": "ENG-PM3-EXC-001-03",
        "q": "What do we call a doctor for animals?",
        "options": [
          "Baker",
          "Pilot",
          "Veterinarian",
          "Carpenter"
        ],
        "type": "mc",
        "correct": 2,
        "explanation": "Veterinarian is a doctor who treats animals."
      },
      {
        "id": "ENG-PM3-EXC-001-04",
        "q": "What does it mean to speak very softly?",
        "options": [
          "Roar",
          "Whisper",
          "Shout",
          "Scream"
        ],
        "type": "mc",
        "correct": 1,
        "explanation": "Whisper means to speak very softly."
      },
      {
        "id": "ENG-PM3-EXC-001-05",
        "q": "Which word means making little or no noise?",
        "options": [
          "Quiet",
          "Crowded",
          "Busy",
          "Loud"
        ],
        "type": "mc",
        "correct": 0,
        "explanation": "Quiet means making little or no noise."
      },
      {
        "id": "ENG-PM3-EXC-001-06",
        "q": "What structure helps people cross a river?",
        "options": [
          "Tunnel",
          "Mountain",
          "Island",
          "Bridge"
        ],
        "type": "mc",
        "correct": 3,
        "explanation": "Bridge helps people cross rivers."
      },
      {
        "id": "ENG-PM3-EXC-001-07",
        "q": "Which word means to fix something broken?",
        "options": [
          "Forget",
          "Borrow",
          "Repair",
          "Damage"
        ],
        "type": "mc",
        "correct": 2,
        "explanation": "Repair means to fix something."
      },
      {
        "id": "ENG-PM3-EXC-001-08",
        "q": "Which word describes someone who tells the truth?",
        "options": [
          "Lazy",
          "Honest",
          "Careless",
          "Rude"
        ],
        "type": "mc",
        "correct": 1,
        "explanation": "Honest describes someone who tells the truth."
      },
      {
        "id": "ENG-PM3-EXC-001-09",
        "q": "What is the opposite of empty?",
        "options": [
          "Full",
          "Hollow",
          "Blank",
          "Clear"
        ],
        "type": "mc",
        "correct": 0,
        "explanation": "Full is the opposite of empty."
      },
      {
        "id": "ENG-PM3-EXC-001-10",
        "q": "Which word means to look for something?",
        "options": [
          "Hide",
          "Lose",
          "Drop",
          "Search"
        ],
        "type": "mc",
        "correct": 3,
        "explanation": "Search means to look for something."
      }
    ]
  }
};

/* Formula Entry: PM3 Math, Multiply, ten equations on one page. */
const formulaBank={Math:{Multiply:[
  {
    "id": "MATH-PM3-QUIZ-MUL-001-01",
    "type": "formula",
    "a": 2,
    "b": 4,
    "blank": "result",
    "expected": 8,
    "q": "2 × 4 = □"
  },
  {
    "id": "MATH-PM3-QUIZ-MUL-001-02",
    "type": "formula",
    "a": 3,
    "b": 4,
    "blank": "b",
    "expected": 4,
    "q": "3 × □ = 12"
  },
  {
    "id": "MATH-PM3-QUIZ-MUL-001-03",
    "type": "formula",
    "a": 7,
    "b": 6,
    "blank": "result",
    "expected": 42,
    "q": "7 × 6 = □"
  },
  {
    "id": "MATH-PM3-QUIZ-MUL-001-04",
    "type": "formula",
    "a": 5,
    "b": 8,
    "blank": "a",
    "expected": 5,
    "q": "□ × 8 = 40"
  },
  {
    "id": "MATH-PM3-QUIZ-MUL-001-05",
    "type": "formula",
    "a": 9,
    "b": 3,
    "blank": "result",
    "expected": 27,
    "q": "9 × 3 = □"
  },
  {
    "id": "MATH-PM3-QUIZ-MUL-001-06",
    "type": "formula",
    "a": 4,
    "b": 7,
    "blank": "b",
    "expected": 7,
    "q": "4 × □ = 28"
  },
  {
    "id": "MATH-PM3-QUIZ-MUL-001-07",
    "type": "formula",
    "a": 8,
    "b": 2,
    "blank": "result",
    "expected": 16,
    "q": "8 × 2 = □"
  },
  {
    "id": "MATH-PM3-QUIZ-MUL-001-08",
    "type": "formula",
    "a": 6,
    "b": 7,
    "blank": "a",
    "expected": 6,
    "q": "□ × 7 = 42"
  },
  {
    "id": "MATH-PM3-QUIZ-MUL-001-09",
    "type": "formula",
    "a": 6,
    "b": 9,
    "blank": "result",
    "expected": 54,
    "q": "6 × 9 = □"
  },
  {
    "id": "MATH-PM3-QUIZ-MUL-001-10",
    "type": "formula",
    "a": 5,
    "b": 7,
    "blank": "b",
    "expected": 7,
    "q": "5 × □ = 35"
  }
]}};

/* Additional PM3 Quiz sets; original question banks and IDs stay unchanged. */
Object.assign(exerciseBank.English,{
  "Word Meanings 2": [
    {
      "id": "ENG-PM3-QUIZ-VOC-002-01",
      "q": "Which word means 'easy to break'?",
      "type": "mc",
      "options": [
        "Fragile",
        "Heavy",
        "Smooth",
        "Strong"
      ],
      "correct": 0,
      "explanation": "Fragile means easily broken."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-02",
      "q": "Which word means 'very big'?",
      "type": "mc",
      "options": [
        "Narrow",
        "Enormous",
        "Shallow",
        "Tiny"
      ],
      "correct": 1,
      "explanation": "Enormous means very big."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-03",
      "q": "What does 'protect' mean?",
      "type": "mc",
      "options": [
        "To throw away",
        "To keep safe",
        "To forget",
        "To copy"
      ],
      "correct": 1,
      "explanation": "To protect something is to keep it safe."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-04",
      "q": "Which word means 'usual or not special'?",
      "type": "mc",
      "options": [
        "Ordinary",
        "Rare",
        "Famous",
        "Secret"
      ],
      "correct": 0,
      "explanation": "Ordinary means usual or not special."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-05",
      "q": "The word 'ancient' means very old.",
      "type": "tf",
      "expected": true,
      "explanation": "Ancient describes something from a very long time ago."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-06",
      "q": "The word 'generous' means unwilling to share.",
      "type": "tf",
      "expected": false,
      "explanation": "Generous means willing to give or share."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-07",
      "q": "A journey is a trip from one place to another.",
      "type": "tf",
      "expected": true,
      "explanation": "A journey is a trip from one place to another."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-08",
      "q": "Complete with a place: I borrowed a book from the ____.",
      "type": "text",
      "expected": "library",
      "explanation": "A library is a place where people can borrow books."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-09",
      "q": "Complete with a feeling: After running in the sun, I was very ____ and needed water.",
      "type": "text",
      "expected": "thirsty",
      "explanation": "Thirsty means needing or wanting a drink."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-10",
      "q": "Complete with a job: A person who writes books is called an ____.",
      "type": "text",
      "expected": "author",
      "explanation": "An author writes books."
    }
  ],
  "Grammar Practice": [
    {
      "id": "ENG-PM3-QUIZ-GRM-001-01",
      "q": "Which is the past tense of 'go'?",
      "type": "mc",
      "options": [
        "Goed",
        "Going",
        "Went",
        "Goes"
      ],
      "correct": 2,
      "explanation": "Went is the past tense of go."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-02",
      "q": "What is the plural of 'child'?",
      "type": "mc",
      "options": [
        "Childs",
        "Childes",
        "Child's",
        "Children"
      ],
      "correct": 3,
      "explanation": "Children is the irregular plural of child."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-03",
      "q": "Choose the correct word: She ____ to school every day.",
      "type": "mc",
      "options": [
        "go",
        "goes",
        "going",
        "gone"
      ],
      "correct": 1,
      "explanation": "She goes uses the correct verb form for a singular subject in the present simple."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-04",
      "q": "Which sentence has the correct punctuation?",
      "type": "mc",
      "options": [
        "Where are you going.",
        "Where are you going?",
        "Where are you going!",
        "where are you going?"
      ],
      "correct": 1,
      "explanation": "A direct question begins with a capital letter and ends with a question mark."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-05",
      "q": "In 'The cats are sleeping,' the word 'cats' is plural.",
      "type": "tf",
      "expected": true,
      "explanation": "Cats refers to more than one cat."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-06",
      "q": "In 'He play football every Sunday,' the verb agrees with the subject.",
      "type": "tf",
      "expected": false,
      "explanation": "With he in the present simple, the verb should be plays."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-07",
      "q": "In 'She ran quickly,' the word 'quickly' is an adverb.",
      "type": "tf",
      "expected": true,
      "explanation": "Quickly describes how she ran."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-08",
      "q": "Complete with the past tense of 'do': Yesterday, I ____ my homework before dinner.",
      "type": "text",
      "expected": "did",
      "explanation": "Did is the past tense of do."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-09",
      "q": "Complete with 'a' or 'an': I saw ____ elephant at the zoo.",
      "type": "text",
      "expected": "an",
      "explanation": "An is used before the vowel sound at the beginning of elephant."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-10",
      "q": "Complete with the correct word: They ____ playing in the park now.",
      "type": "text",
      "expected": "are",
      "explanation": "They are playing uses the correct present continuous form."
    }
  ]
});
Object.assign(formulaBank.Math,{
  "Multiply 2": [
    {
      "id": "MATH-PM3-QUIZ-MUL-002-01",
      "type": "formula",
      "operation": "multiply",
      "a": 8,
      "b": 7,
      "blank": "result",
      "expected": 56,
      "q": "8 × 7 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-MUL-002-02",
      "type": "formula",
      "operation": "multiply",
      "a": 9,
      "b": 6,
      "blank": "b",
      "expected": 6,
      "q": "9 × □ = 54"
    },
    {
      "id": "MATH-PM3-QUIZ-MUL-002-03",
      "type": "formula",
      "operation": "multiply",
      "a": 4,
      "b": 9,
      "blank": "a",
      "expected": 4,
      "q": "□ × 9 = 36"
    },
    {
      "id": "MATH-PM3-QUIZ-MUL-002-04",
      "type": "formula",
      "operation": "multiply",
      "a": 7,
      "b": 8,
      "blank": "result",
      "expected": 56,
      "q": "7 × 8 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-MUL-002-05",
      "type": "formula",
      "operation": "multiply",
      "a": 6,
      "b": 4,
      "blank": "b",
      "expected": 4,
      "q": "6 × □ = 24"
    },
    {
      "id": "MATH-PM3-QUIZ-MUL-002-06",
      "type": "formula",
      "operation": "multiply",
      "a": 9,
      "b": 9,
      "blank": "result",
      "expected": 81,
      "q": "9 × 9 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-MUL-002-07",
      "type": "formula",
      "operation": "multiply",
      "a": 3,
      "b": 8,
      "blank": "a",
      "expected": 3,
      "q": "□ × 8 = 24"
    },
    {
      "id": "MATH-PM3-QUIZ-MUL-002-08",
      "type": "formula",
      "operation": "multiply",
      "a": 7,
      "b": 5,
      "blank": "result",
      "expected": 35,
      "q": "7 × 5 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-MUL-002-09",
      "type": "formula",
      "operation": "multiply",
      "a": 8,
      "b": 6,
      "blank": "b",
      "expected": 6,
      "q": "8 × □ = 48"
    },
    {
      "id": "MATH-PM3-QUIZ-MUL-002-10",
      "type": "formula",
      "operation": "multiply",
      "a": 9,
      "b": 4,
      "blank": "a",
      "expected": 9,
      "q": "□ × 4 = 36"
    }
  ],
  "Divide 1": [
    {
      "id": "MATH-PM3-QUIZ-DIV-001-01",
      "type": "formula",
      "operation": "divide",
      "a": 24,
      "b": 3,
      "blank": "result",
      "expected": 8,
      "q": "24 ÷ 3 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-001-02",
      "type": "formula",
      "operation": "divide",
      "a": 45,
      "b": 5,
      "blank": "b",
      "expected": 5,
      "q": "45 ÷ □ = 9"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-001-03",
      "type": "formula",
      "operation": "divide",
      "a": 56,
      "b": 7,
      "blank": "a",
      "expected": 56,
      "q": "□ ÷ 7 = 8"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-001-04",
      "type": "formula",
      "operation": "divide",
      "a": 36,
      "b": 6,
      "blank": "result",
      "expected": 6,
      "q": "36 ÷ 6 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-001-05",
      "type": "formula",
      "operation": "divide",
      "a": 72,
      "b": 9,
      "blank": "b",
      "expected": 9,
      "q": "72 ÷ □ = 8"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-001-06",
      "type": "formula",
      "operation": "divide",
      "a": 18,
      "b": 2,
      "blank": "result",
      "expected": 9,
      "q": "18 ÷ 2 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-001-07",
      "type": "formula",
      "operation": "divide",
      "a": 42,
      "b": 7,
      "blank": "a",
      "expected": 42,
      "q": "□ ÷ 7 = 6"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-001-08",
      "type": "formula",
      "operation": "divide",
      "a": 63,
      "b": 9,
      "blank": "result",
      "expected": 7,
      "q": "63 ÷ 9 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-001-09",
      "type": "formula",
      "operation": "divide",
      "a": 32,
      "b": 4,
      "blank": "b",
      "expected": 4,
      "q": "32 ÷ □ = 8"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-001-10",
      "type": "formula",
      "operation": "divide",
      "a": 27,
      "b": 3,
      "blank": "a",
      "expected": 27,
      "q": "□ ÷ 3 = 9"
    }
  ],
  "Divide 2": [
    {
      "id": "MATH-PM3-QUIZ-DIV-002-01",
      "type": "formula",
      "operation": "divide",
      "a": 54,
      "b": 6,
      "blank": "result",
      "expected": 9,
      "q": "54 ÷ 6 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-002-02",
      "type": "formula",
      "operation": "divide",
      "a": 48,
      "b": 8,
      "blank": "b",
      "expected": 8,
      "q": "48 ÷ □ = 6"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-002-03",
      "type": "formula",
      "operation": "divide",
      "a": 28,
      "b": 7,
      "blank": "a",
      "expected": 28,
      "q": "□ ÷ 7 = 4"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-002-04",
      "type": "formula",
      "operation": "divide",
      "a": 81,
      "b": 9,
      "blank": "result",
      "expected": 9,
      "q": "81 ÷ 9 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-002-05",
      "type": "formula",
      "operation": "divide",
      "a": 35,
      "b": 5,
      "blank": "b",
      "expected": 5,
      "q": "35 ÷ □ = 7"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-002-06",
      "type": "formula",
      "operation": "divide",
      "a": 64,
      "b": 8,
      "blank": "result",
      "expected": 8,
      "q": "64 ÷ 8 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-002-07",
      "type": "formula",
      "operation": "divide",
      "a": 21,
      "b": 3,
      "blank": "a",
      "expected": 21,
      "q": "□ ÷ 3 = 7"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-002-08",
      "type": "formula",
      "operation": "divide",
      "a": 49,
      "b": 7,
      "blank": "result",
      "expected": 7,
      "q": "49 ÷ 7 = □"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-002-09",
      "type": "formula",
      "operation": "divide",
      "a": 36,
      "b": 4,
      "blank": "b",
      "expected": 4,
      "q": "36 ÷ □ = 9"
    },
    {
      "id": "MATH-PM3-QUIZ-DIV-002-10",
      "type": "formula",
      "operation": "divide",
      "a": 16,
      "b": 2,
      "blank": "a",
      "expected": 16,
      "q": "□ ÷ 2 = 8"
    }
  ]
});
