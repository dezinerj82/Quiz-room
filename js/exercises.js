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
  "q": "Which word means to make something better?",
  "options": [
    "Borrow",
    "Forget",
    "Damage",
    "Improve"
  ],
  "type": "mc",
  "correct": 3,
  "explanation": "Improve means to make something better."
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
      "q": "Fill in the blank: I borrowed a book from the ____.",
      "type": "text",
      "expected": "library",
      "explanation": "A library is a place where people can borrow books."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-09",
      "q": "Fill in the blank: After running in the sun, I was very ____ and needed water.",
      "type": "text",
      "expected": "thirsty",
      "explanation": "Thirsty means needing or wanting a drink."
    },
    {
      "id": "ENG-PM3-QUIZ-VOC-002-10",
      "q": "Fill in the blank: A person who writes books is called an ____.",
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
    "Where you are going?"
  ],
  "correct": 1,
  "explanation": "A direct question uses a capital letter, natural question word order and a question mark."
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
      "q": "Fill in the blank: Yesterday, I ____ my homework before dinner.",
      "type": "text",
      "expected": "did",
      "explanation": "Did is the past tense of do."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-09",
      "q": "Fill in the blank: I saw ____ elephant at the zoo.",
      "type": "text",
      "expected": "an",
      "explanation": "An is used before the vowel sound at the beginning of elephant."
    },
    {
      "id": "ENG-PM3-QUIZ-GRM-001-10",
      "q": "Fill in the blank: They ____ playing in the park now.",
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
  "b": 9,
  "blank": "result",
  "expected": 63,
  "q": "7 × 9 = □"
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

/* PM3 Mathematics Units 2–9: Unit 2–3 general Year 3 practice, Unit 4–9 aligned with Part 2 textbook topics. */
Object.assign(exerciseBank,{Math:{
  "Basic Operations": [
    {
      "type": "mc",
      "q": "What is 347 + 258?",
      "options": [
        "595",
        "605",
        "615",
        "505"
      ],
      "correct": 1,
      "explanation": "347 + 258 = 605.",
      "id": "MATH-PM3-QUIZ-U02-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 800 − 275 = ____.",
      "expected": "525",
      "explanation": "800 − 275 = 525.",
      "id": "MATH-PM3-QUIZ-U02-001-02"
    },
    {
      "type": "mc",
      "q": "What is 6 × 8?",
      "options": [
        "42",
        "46",
        "48",
        "56"
      ],
      "correct": 2,
      "explanation": "Six groups of eight make 48.",
      "id": "MATH-PM3-QUIZ-U02-001-03"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 63 ÷ 7 = ____.",
      "expected": "9",
      "explanation": "63 ÷ 7 = 9 because 7 × 9 = 63.",
      "id": "MATH-PM3-QUIZ-U02-001-04"
    },
    {
      "type": "tf",
      "q": "450 + 125 = 575.",
      "expected": true,
      "explanation": "450 + 125 = 575.",
      "id": "MATH-PM3-QUIZ-U02-001-05"
    },
    {
      "type": "tf",
      "q": "900 − 450 = 550.",
      "expected": false,
      "explanation": "900 − 450 = 450, not 550.",
      "id": "MATH-PM3-QUIZ-U02-001-06"
    },
    {
      "type": "mc",
      "q": "There are 8 boxes with 7 pencils in each box. How many pencils are there?",
      "options": [
        "54",
        "56",
        "63",
        "64"
      ],
      "correct": 1,
      "explanation": "8 × 7 = 56 pencils.",
      "id": "MATH-PM3-QUIZ-U02-001-07"
    },
    {
      "type": "mc",
      "q": "72 sweets are shared equally among 9 children. How many sweets does each child get?",
      "options": [
        "7",
        "8",
        "9",
        "6"
      ],
      "correct": 1,
      "explanation": "72 ÷ 9 = 8 sweets for each child.",
      "id": "MATH-PM3-QUIZ-U02-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 4 × 9 = ____.",
      "expected": "36",
      "explanation": "4 × 9 = 36.",
      "id": "MATH-PM3-QUIZ-U02-001-09"
    },
    {
      "type": "mc",
      "q": "A shop had 1,000 stickers. It sold 250 in the morning and 150 in the afternoon. How many stickers are left?",
      "options": [
        "500",
        "550",
        "600",
        "650"
      ],
      "correct": 2,
      "explanation": "250 + 150 = 400, and 1,000 − 400 = 600.",
      "id": "MATH-PM3-QUIZ-U02-001-10"
    }
  ],
  "Fractions, Decimals and Percentages": [
    {
      "type": "text",
      "q": "Fill in the blank: Half of 18 is ____.",
      "expected": "9",
      "explanation": "18 ÷ 2 = 9.",
      "id": "MATH-PM3-QUIZ-U03-001-01"
    },
    {
      "type": "mc",
      "q": "What does the fraction 3/4 mean?",
      "options": [
        "Three out of four equal parts",
        "Four out of three equal parts",
        "Three complete wholes",
        "One out of four equal parts"
      ],
      "correct": 0,
      "explanation": "3/4 represents three of four equal parts of a whole.",
      "id": "MATH-PM3-QUIZ-U03-001-02"
    },
    {
      "type": "tf",
      "q": "0.7 is equal to seven tenths.",
      "expected": true,
      "explanation": "Seven tenths is written as 0.7.",
      "id": "MATH-PM3-QUIZ-U03-001-03"
    },
    {
      "type": "tf",
      "q": "0.5 is greater than 0.8.",
      "expected": false,
      "explanation": "0.5 is less than 0.8.",
      "id": "MATH-PM3-QUIZ-U03-001-04"
    },
    {
      "type": "mc",
      "q": "What is 25% of 40?",
      "options": [
        "5",
        "10",
        "15",
        "20"
      ],
      "correct": 1,
      "explanation": "25% means one quarter; 40 ÷ 4 = 10.",
      "id": "MATH-PM3-QUIZ-U03-001-05"
    },
    {
      "type": "mc",
      "q": "Which decimal is equal to 3/10?",
      "options": [
        "0.03",
        "0.3",
        "3.0",
        "0.13"
      ],
      "correct": 1,
      "explanation": "3/10 is three tenths, or 0.3.",
      "id": "MATH-PM3-QUIZ-U03-001-06"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 1/4 is ____%.",
      "expected": "25",
      "explanation": "One quarter is 25%.",
      "id": "MATH-PM3-QUIZ-U03-001-07"
    },
    {
      "type": "mc",
      "q": "Which decimal is smaller?",
      "options": [
        "1.52",
        "1.25",
        "1.75",
        "1.62"
      ],
      "correct": 1,
      "explanation": "1.25 is smaller than the other three decimals.",
      "id": "MATH-PM3-QUIZ-U03-001-08"
    },
    {
      "type": "tf",
      "q": "Two quarters make one half.",
      "expected": true,
      "explanation": "1/4 + 1/4 = 2/4 = 1/2.",
      "id": "MATH-PM3-QUIZ-U03-001-09"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 0.6 + 0.2 = ____.",
      "expected": "0.8",
      "explanation": "Six tenths plus two tenths equals eight tenths, or 0.8.",
      "id": "MATH-PM3-QUIZ-U03-001-10"
    }
  ],
  "Money": [
    {
      "type": "mc",
      "q": "A notebook costs RM12 and a pencil case costs RM8. How much do they cost altogether?",
      "options": [
        "RM18",
        "RM19",
        "RM20",
        "RM21"
      ],
      "correct": 2,
      "explanation": "RM12 + RM8 = RM20.",
      "id": "MATH-PM3-QUIZ-U04-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: RM50 − RM17 = RM____.",
      "expected": "33",
      "explanation": "RM50 − RM17 = RM33.",
      "id": "MATH-PM3-QUIZ-U04-001-02"
    },
    {
      "type": "mc",
      "q": "What is RM4.50 + RM2.20?",
      "options": [
        "RM6.50",
        "RM6.70",
        "RM7.20",
        "RM5.70"
      ],
      "correct": 1,
      "explanation": "RM4.50 + RM2.20 = RM6.70.",
      "id": "MATH-PM3-QUIZ-U04-001-03"
    },
    {
      "type": "tf",
      "q": "Three pencils costing RM2 each cost RM6 altogether.",
      "expected": true,
      "explanation": "3 × RM2 = RM6.",
      "id": "MATH-PM3-QUIZ-U04-001-04"
    },
    {
      "type": "text",
      "q": "Fill in the blank: RM10.00 − RM4.75 = RM____.",
      "expected": "5.25",
      "explanation": "The change is RM5.25.",
      "id": "MATH-PM3-QUIZ-U04-001-05"
    },
    {
      "type": "tf",
      "q": "RM30 is enough to buy two toys costing RM18 and RM15.",
      "expected": false,
      "explanation": "The toys cost RM33, which is RM3 more than RM30.",
      "id": "MATH-PM3-QUIZ-U04-001-06"
    },
    {
      "type": "mc",
      "q": "Two books cost RM7 each. A pen costs RM3. How much is the total?",
      "options": [
        "RM14",
        "RM16",
        "RM17",
        "RM18"
      ],
      "correct": 2,
      "explanation": "RM7 + RM7 + RM3 = RM17.",
      "id": "MATH-PM3-QUIZ-U04-001-07"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 500 sen = RM____.",
      "expected": "5",
      "explanation": "100 sen = RM1, so 500 sen = RM5.",
      "id": "MATH-PM3-QUIZ-U04-001-08"
    },
    {
      "type": "tf",
      "q": "RM6.40 + RM1.60 = RM8.00.",
      "expected": true,
      "explanation": "RM6.40 + RM1.60 = RM8.00.",
      "id": "MATH-PM3-QUIZ-U04-001-09"
    },
    {
      "type": "mc",
      "q": "You pay RM20.00 for an item costing RM7.50. How much change should you receive?",
      "options": [
        "RM11.50",
        "RM12.00",
        "RM12.50",
        "RM13.50"
      ],
      "correct": 2,
      "explanation": "RM20.00 − RM7.50 = RM12.50.",
      "id": "MATH-PM3-QUIZ-U04-001-10"
    }
  ],
  "Time": [
    {
      "type": "mc",
      "q": "How many minutes are in one hour?",
      "options": [
        "30",
        "45",
        "60",
        "100"
      ],
      "correct": 2,
      "explanation": "One hour contains 60 minutes.",
      "id": "MATH-PM3-QUIZ-U05-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 2 hours 15 minutes = ____ minutes.",
      "expected": "135",
      "explanation": "2 × 60 + 15 = 135 minutes.",
      "id": "MATH-PM3-QUIZ-U05-001-02"
    },
    {
      "type": "mc",
      "q": "What time is 30 minutes after 2:30 p.m.?",
      "options": [
        "2:45 p.m.",
        "3:00 p.m.",
        "3:15 p.m.",
        "4:00 p.m."
      ],
      "correct": 1,
      "explanation": "30 minutes after 2:30 p.m. is 3:00 p.m.",
      "id": "MATH-PM3-QUIZ-U05-001-03"
    },
    {
      "type": "tf",
      "q": "90 seconds is equal to 1 minute 30 seconds.",
      "expected": true,
      "explanation": "60 seconds + 30 seconds = 90 seconds.",
      "id": "MATH-PM3-QUIZ-U05-001-04"
    },
    {
      "type": "tf",
      "q": "Three hours is equal to 180 minutes.",
      "expected": true,
      "explanation": "3 × 60 = 180 minutes.",
      "id": "MATH-PM3-QUIZ-U05-001-05"
    },
    {
      "type": "tf",
      "q": "One hour 40 minutes is equal to 140 minutes.",
      "expected": false,
      "explanation": "One hour 40 minutes is 60 + 40 = 100 minutes.",
      "id": "MATH-PM3-QUIZ-U05-001-06"
    },
    {
      "type": "text",
      "q": "Fill in the blank: From 9:15 a.m. to 10:00 a.m. is ____ minutes.",
      "expected": "45",
      "explanation": "It takes 45 minutes to go from 9:15 to 10:00.",
      "id": "MATH-PM3-QUIZ-U05-001-07"
    },
    {
      "type": "mc",
      "q": "A lesson begins at 7:30 a.m. and ends at 8:10 a.m. How long does it last?",
      "options": [
        "30 minutes",
        "40 minutes",
        "50 minutes",
        "60 minutes"
      ],
      "correct": 1,
      "explanation": "From 7:30 to 8:00 is 30 minutes, then 10 more minutes.",
      "id": "MATH-PM3-QUIZ-U05-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 120 seconds = ____ minutes.",
      "expected": "2",
      "explanation": "120 ÷ 60 = 2 minutes.",
      "id": "MATH-PM3-QUIZ-U05-001-09"
    },
    {
  "type": "mc",
  "q": "What time is 45 minutes after 4:20 p.m.?",
  "options": [
    "4:55 p.m.",
    "5:00 p.m.",
    "5:05 p.m.",
    "5:15 p.m."
  ],
  "correct": 2,
  "explanation": "From 4:20 p.m. to 5:00 p.m. is 40 minutes, then another 5 minutes reaches 5:05 p.m.",
  "id": "MATH-PM3-QUIZ-U05-001-10"
}
  ],
  "Measurement": [
    {
      "type": "mc",
      "q": "How many centimetres are in 1 metre?",
      "options": [
        "10",
        "100",
        "1,000",
        "50"
      ],
      "correct": 1,
      "explanation": "1 metre is 100 centimetres.",
      "id": "MATH-PM3-QUIZ-U06-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 2 kg = ____ g.",
      "expected": "2000",
      "explanation": "2 × 1,000 = 2,000 grams.",
      "id": "MATH-PM3-QUIZ-U06-001-02"
    },
    {
      "type": "tf",
      "q": "One litre is equal to 1,000 millilitres.",
      "expected": true,
      "explanation": "1 L = 1,000 mL.",
      "id": "MATH-PM3-QUIZ-U06-001-03"
    },
    {
      "type": "mc",
      "q": "350 cm is the same length as which measurement?",
      "options": [
        "3 m 5 cm",
        "3 m 50 cm",
        "35 m",
        "30 m 5 cm"
      ],
      "correct": 1,
      "explanation": "300 cm is 3 m and 50 cm remains.",
      "id": "MATH-PM3-QUIZ-U06-001-04"
    },
    {
      "type": "text",
      "q": "Fill in the blank: Four bottles contain 250 mL each. Their total volume is ____ mL.",
      "expected": "1000",
      "explanation": "4 × 250 mL = 1,000 mL.",
      "id": "MATH-PM3-QUIZ-U06-001-05"
    },
    {
      "type": "tf",
      "q": "2 kg 500 g is equal to 2,500 g.",
      "expected": true,
      "explanation": "2 kg = 2,000 g; add 500 g.",
      "id": "MATH-PM3-QUIZ-U06-001-06"
    },
    {
      "type": "tf",
      "q": "Three metres is equal to 30 centimetres.",
      "expected": false,
      "explanation": "3 metres is 300 centimetres.",
      "id": "MATH-PM3-QUIZ-U06-001-07"
    },
    {
      "type": "mc",
      "q": "What is 750 mL + 250 mL?",
      "options": [
        "500 mL",
        "900 mL",
        "1,000 mL",
        "1,250 mL"
      ],
      "correct": 2,
      "explanation": "750 + 250 = 1,000 mL.",
      "id": "MATH-PM3-QUIZ-U06-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: 5 kg − 2 kg = ____ kg.",
      "expected": "3",
      "explanation": "5 − 2 = 3 kilograms.",
      "id": "MATH-PM3-QUIZ-U06-001-09"
    },
    {
      "type": "mc",
      "q": "A ribbon is 1 m 20 cm long. What is the total length of two such ribbons?",
      "options": [
        "2 m 20 cm",
        "2 m 40 cm",
        "2 m 60 cm",
        "1 m 40 cm"
      ],
      "correct": 1,
      "explanation": "120 cm × 2 = 240 cm = 2 m 40 cm.",
      "id": "MATH-PM3-QUIZ-U06-001-10"
    }
  ],
  "Shapes": [
    {
      "type": "tf",
      "q": "All four sides of a square have equal lengths.",
      "expected": true,
      "explanation": "A square has four equal sides.",
      "id": "MATH-PM3-QUIZ-U07-001-01"
    },
    {
      "type": "tf",
      "q": "A triangle has four corners.",
      "expected": false,
      "explanation": "A triangle has three corners.",
      "id": "MATH-PM3-QUIZ-U07-001-02"
    },
    {
      "type": "mc",
      "q": "How many flat faces does a cube have?",
      "options": [
        "4",
        "5",
        "6",
        "8"
      ],
      "correct": 2,
      "explanation": "A cube has six square faces.",
      "id": "MATH-PM3-QUIZ-U07-001-03"
    },
    {
      "type": "text",
      "q": "Fill in the blank: A rectangle has ____ sides.",
      "expected": "4",
      "explanation": "A rectangle has four sides.",
      "id": "MATH-PM3-QUIZ-U07-001-04"
    },
    {
      "type": "mc",
      "q": "How many flat faces does a sphere have?",
      "options": [
        "0",
        "1",
        "2",
        "4"
      ],
      "correct": 0,
      "explanation": "A sphere has a curved surface and no flat faces.",
      "id": "MATH-PM3-QUIZ-U07-001-05"
    },
    {
      "type": "text",
      "q": "Fill in the blank: A cuboid has ____ vertices.",
      "expected": "8",
      "explanation": "A cuboid has eight corners, called vertices.",
      "id": "MATH-PM3-QUIZ-U07-001-06"
    },
    {
      "type": "mc",
      "q": "How many sides does a pentagon have?",
      "options": [
        "4",
        "5",
        "6",
        "8"
      ],
      "correct": 1,
      "explanation": "A pentagon has five sides.",
      "id": "MATH-PM3-QUIZ-U07-001-07"
    },
    {
      "type": "mc",
      "q": "Which shape has a curved boundary and no straight sides?",
      "options": [
        "Triangle",
        "Rectangle",
        "Circle",
        "Pentagon"
      ],
      "correct": 2,
      "explanation": "A circle has a curved boundary.",
      "id": "MATH-PM3-QUIZ-U07-001-08"
    },
    {
      "type": "tf",
      "q": "A cylinder has two flat circular faces.",
      "expected": true,
      "explanation": "A cylinder has a circular face at each end.",
      "id": "MATH-PM3-QUIZ-U07-001-09"
    },
    {
      "type": "text",
      "q": "Fill in the blank: A hexagon has ____ sides.",
      "expected": "6",
      "explanation": "A hexagon has six sides.",
      "id": "MATH-PM3-QUIZ-U07-001-10"
    }
  ],
  "Location": [
    {
      "type": "tf",
      "q": "On a grid with letters marking columns and numbers marking rows, C2 means column C and row 2.",
      "expected": true,
      "explanation": "The letter identifies the column and the number identifies the row.",
      "id": "MATH-PM3-QUIZ-U08-001-01"
    },
    {
      "type": "tf",
      "q": "On a grid with lettered columns and numbered rows, B3 means column 3 and row B.",
      "expected": false,
      "explanation": "B3 means column B and row 3.",
      "id": "MATH-PM3-QUIZ-U08-001-02"
    },
    {
      "type": "mc",
      "q": "A grid has columns A, B, C, D from left to right and rows 1, 2, 3, 4 from top to bottom. A toy is in column C, row 2. What is its position?",
      "options": [
        "B2",
        "C2",
        "C3",
        "D2"
      ],
      "correct": 1,
      "explanation": "Column C and row 2 give C2.",
      "id": "MATH-PM3-QUIZ-U08-001-03"
    },
    {
      "type": "text",
      "q": "Fill in the blank: On a grid with columns A to D, one column to the right of B2 is ____.",
      "expected": "C2",
      "explanation": "Moving right from B goes to C while the row remains 2.",
      "id": "MATH-PM3-QUIZ-U08-001-04"
    },
    {
      "type": "mc",
      "q": "A grid has numbered rows increasing downward. Which position is one row below C3?",
      "options": [
        "B3",
        "C2",
        "C4",
        "D3"
      ],
      "correct": 2,
      "explanation": "Moving down one row changes 3 to 4; the column stays C.",
      "id": "MATH-PM3-QUIZ-U08-001-05"
    },
    {
      "type": "text",
      "q": "Fill in the blank: One column to the left of D1 is ____.",
      "expected": "C1",
      "explanation": "C is immediately to the left of D.",
      "id": "MATH-PM3-QUIZ-U08-001-06"
    },
    {
      "type": "tf",
      "q": "On a grid with row numbers increasing downward, one row above B4 is B3.",
      "expected": true,
      "explanation": "Moving up one row changes 4 to 3.",
      "id": "MATH-PM3-QUIZ-U08-001-07"
    },
    {
      "type": "tf",
      "q": "If columns A–D run left to right and rows 1–4 run top to bottom, A1 is the top-left cell.",
      "expected": true,
      "explanation": "Column A is at the left, and row 1 is at the top.",
      "id": "MATH-PM3-QUIZ-U08-001-08"
    },
    {
      "type": "mc",
      "q": "Start at B2 on a grid with columns A to D from left to right. Move two columns right. Where are you?",
      "options": [
        "C2",
        "D2",
        "B4",
        "A2"
      ],
      "correct": 1,
      "explanation": "B to C is one column, then C to D is the second.",
      "id": "MATH-PM3-QUIZ-U08-001-09"
    },
    {
      "type": "tf",
      "q": "B3 and B4 are in the same row on a letter-column, number-row grid.",
      "expected": false,
      "explanation": "They are in the same column B but in different rows, 3 and 4.",
      "id": "MATH-PM3-QUIZ-U08-001-10"
    }
  ],
  "Data Management": [
    {
      "type": "tf",
      "q": "Four tally marks represent a frequency of four.",
      "expected": true,
      "explanation": "Each of the four tally marks counts one item.",
      "id": "MATH-PM3-QUIZ-U09-001-01"
    },
    {
      "type": "mc",
      "q": "A fruit survey recorded 4 apples, 7 bananas and 2 oranges. Which fruit was chosen most?",
      "options": [
        "Apples",
        "Bananas",
        "Oranges",
        "All equally"
      ],
      "correct": 1,
      "explanation": "Bananas have the greatest frequency, 7.",
      "id": "MATH-PM3-QUIZ-U09-001-02"
    },
    {
  "type": "text",
  "q": "A class votes for a class pet: 5 pupils choose fish, 6 choose rabbits and 4 choose hamsters. How many votes are there?",
  "expected": "15",
  "explanation": "5 + 6 + 4 = 15 votes.",
  "id": "MATH-PM3-QUIZ-U09-001-03"
},
    {
  "type": "mc",
  "q": "A class counts 11 red pencils and 6 blue pencils. How many more red pencils are there?",
  "options": [
    "4",
    "6",
    "5",
    "17"
  ],
  "correct": 2,
  "explanation": "11 − 6 = 5 more red pencils.",
  "id": "MATH-PM3-QUIZ-U09-001-04"
},
    {
      "type": "mc",
      "q": "A class recorded: bicycles 6, trains 3, cars 8 and walking 5. How many pupils were counted?",
      "options": [
        "19",
        "20",
        "21",
        "22"
      ],
      "correct": 3,
      "explanation": "6 + 3 + 8 + 5 = 22.",
      "id": "MATH-PM3-QUIZ-U09-001-05"
    },
    {
      "type": "tf",
      "q": "A pie chart can show how a whole is divided into parts.",
      "expected": true,
      "explanation": "Each sector of a pie chart represents part of the whole.",
      "id": "MATH-PM3-QUIZ-U09-001-06"
    },
    {
      "type": "tf",
      "q": "Five items can be recorded using four vertical tally marks crossed by a fifth mark.",
      "expected": true,
      "explanation": "A group of five tally marks is usually drawn as four lines crossed by a fifth.",
      "id": "MATH-PM3-QUIZ-U09-001-07"
    },
    {
      "type": "mc",
      "q": "Votes were Blue 8, Red 5 and Green 6. Which colour received the fewest votes?",
      "options": [
        "Blue",
        "Red",
        "Green",
        "All equally"
      ],
      "correct": 1,
      "explanation": "Red received 5 votes, fewer than blue or green.",
      "id": "MATH-PM3-QUIZ-U09-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: A table records 12 cats and 9 dogs. There are ____ more cats than dogs.",
      "expected": "3",
      "explanation": "12 − 9 = 3.",
      "id": "MATH-PM3-QUIZ-U09-001-09"
    },
    {
      "type": "mc",
      "q": "A pictograph uses one picture to represent 2 pupils. What do 4 pictures represent?",
      "options": [
        "4 pupils",
        "6 pupils",
        "8 pupils",
        "10 pupils"
      ],
      "correct": 2,
      "explanation": "4 pictures × 2 pupils per picture = 8 pupils.",
      "id": "MATH-PM3-QUIZ-U09-001-10"
    }
  ]
}});

/* Nine general PM3 English practice quizzes. Original quizzes and question IDs remain intact. */
Object.assign(exerciseBank.English,{
  "Daily Routines": [
    {
      "type": "mc",
      "q": "Which activity do people usually do before going to school?",
      "options": [
        "Go to bed",
        "Eat breakfast",
        "Have dinner",
        "Watch the sunset"
      ],
      "correct": 1,
      "explanation": "Breakfast is usually eaten in the morning, before school.",
      "id": "ENG-PM3-QUIZ-T01-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank with the correct verb: I ____ my teeth every morning. (brush / brushes)",
      "expected": "brush",
      "explanation": "Use brush with I.",
      "id": "ENG-PM3-QUIZ-T01-001-02"
    },
    {
      "type": "tf",
      "q": "The word 'daily' means happening every day.",
      "expected": true,
      "explanation": "Daily means every day.",
      "id": "ENG-PM3-QUIZ-T01-001-03"
    },
    {
      "type": "mc",
      "q": "Which sentence describes a habit?",
      "options": [
        "I am swimming now.",
        "I played yesterday.",
        "I walk to school every day.",
        "I will travel tomorrow."
      ],
      "correct": 2,
      "explanation": "The present simple describes a regular habit.",
      "id": "ENG-PM3-QUIZ-T01-001-04"
    },
    {
      "type": "text",
      "q": "Fill in the blank: She ____ up at seven every morning. (wake / wakes)",
      "expected": "wakes",
      "explanation": "The verb takes -s with she.",
      "id": "ENG-PM3-QUIZ-T01-001-05"
    },
    {
      "type": "mc",
      "q": "Which phrase tells us how often something happens?",
      "options": [
        "Last night",
        "Every Monday",
        "Next year",
        "At this moment"
      ],
      "correct": 1,
      "explanation": "Every Monday describes a repeated routine.",
      "id": "ENG-PM3-QUIZ-T01-001-06"
    },
    {
      "type": "tf",
      "q": "In the sentence 'He goes to school by bus', 'goes' describes a regular action.",
      "expected": true,
      "explanation": "The present simple can describe routines.",
      "id": "ENG-PM3-QUIZ-T01-001-07"
    },
    {
  "type": "mc",
  "q": "Which sentence correctly describes something your brother does every day?",
  "options": [
    "My brother play football daily.",
    "My brother plays football daily.",
    "My brother playing football daily.",
    "My brother played football daily tomorrow."
  ],
  "correct": 1,
  "explanation": "He or my brother takes plays in the present simple.",
  "id": "ENG-PM3-QUIZ-T01-001-08"
},
    {
      "type": "text",
      "q": "Fill in the blank: We usually eat lunch at ____. (noon / midnight)",
      "expected": "noon",
      "explanation": "Noon is twelve o'clock in the middle of the day.",
      "id": "ENG-PM3-QUIZ-T01-001-09"
    },
    {
      "type": "tf",
      "q": "The sentence 'I goes to school' uses the correct verb form.",
      "expected": false,
      "explanation": "With I, use go: I go to school.",
      "id": "ENG-PM3-QUIZ-T01-001-10"
    }
  ],
  "Actions Happening Now": [
    {
      "type": "mc",
      "q": "Which sentence shows something happening right now?",
      "options": [
        "She reads every Sunday.",
        "She is reading now.",
        "She read yesterday.",
        "She will read tomorrow."
      ],
      "correct": 1,
      "explanation": "Is reading describes an action in progress.",
      "id": "ENG-PM3-QUIZ-T02-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: The children ____ playing outside now. (is / are)",
      "expected": "are",
      "explanation": "Use are with the plural subject children.",
      "id": "ENG-PM3-QUIZ-T02-001-02"
    },
    {
      "type": "tf",
      "q": "In 'He is running', the action is happening now.",
      "expected": true,
      "explanation": "Is running is in the present continuous.",
      "id": "ENG-PM3-QUIZ-T02-001-03"
    },
    {
  "type": "mc",
  "q": "Which sentence correctly uses 'am' to describe an action happening now?",
  "options": [
    "I am eating lunch.",
    "I is eating lunch.",
    "I are eating lunch.",
    "I be eating lunch."
  ],
  "correct": 0,
  "explanation": "Use am with I in the present continuous.",
  "id": "ENG-PM3-QUIZ-T02-001-04"
},
    {
      "type": "text",
      "q": "Fill in the blank: The baby is ____. (sleep / sleeping)",
      "expected": "sleeping",
      "explanation": "The present continuous uses the -ing form.",
      "id": "ENG-PM3-QUIZ-T02-001-05"
    },
    {
      "type": "mc",
      "q": "Which word correctly completes 'She is ____ a picture'?",
      "options": [
        "draw",
        "draws",
        "drawing",
        "drew"
      ],
      "correct": 2,
      "explanation": "Is drawing is the present continuous form.",
      "id": "ENG-PM3-QUIZ-T02-001-06"
    },
    {
      "type": "tf",
      "q": "The sentence 'They are swim in the pool' is grammatically correct.",
      "expected": false,
      "explanation": "It should be They are swimming in the pool.",
      "id": "ENG-PM3-QUIZ-T02-001-07"
    },
    {
  "type": "mc",
  "q": "Which question correctly asks what someone is doing right now?",
  "options": [
    "What you are doing?",
    "What are you doing?",
    "What did you do yesterday?",
    "What do you usually do?"
  ],
  "correct": 1,
  "explanation": "'What are you doing?' correctly asks about an action happening now.",
  "id": "ENG-PM3-QUIZ-T02-001-08"
},
    {
      "type": "text",
      "q": "Fill in the blank: I ____ doing my homework right now. (am / is)",
      "expected": "am",
      "explanation": "Use I am, not I is.",
      "id": "ENG-PM3-QUIZ-T02-001-09"
    },
    {
      "type": "tf",
      "q": "In 'We are dancing', the word 'are' is a helping verb.",
      "expected": true,
      "explanation": "Are helps form the present continuous tense.",
      "id": "ENG-PM3-QUIZ-T02-001-10"
    }
  ],
  "Months and Weather": [
    {
      "type": "mc",
      "q": "Which month comes after April?",
      "options": [
        "March",
        "May",
        "June",
        "July"
      ],
      "correct": 1,
      "explanation": "May follows April.",
      "id": "ENG-PM3-QUIZ-T03-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: There are ____ months in a year. (12 / 10)",
      "expected": "12",
      "explanation": "A year has twelve months.",
      "id": "ENG-PM3-QUIZ-T03-001-02"
    },
    {
      "type": "tf",
      "q": "December comes before November.",
      "expected": false,
      "explanation": "November comes before December.",
      "id": "ENG-PM3-QUIZ-T03-001-03"
    },
    {
      "type": "mc",
      "q": "What would you most likely use on a rainy day?",
      "options": [
        "An umbrella",
        "Sunglasses",
        "A fan",
        "A swimsuit"
      ],
      "correct": 0,
      "explanation": "An umbrella helps keep you dry in the rain.",
      "id": "ENG-PM3-QUIZ-T03-001-04"
    },
    {
      "type": "text",
      "q": "Fill in the blank: January is the ____ month of the year. (first / last)",
      "expected": "first",
      "explanation": "January is month one.",
      "id": "ENG-PM3-QUIZ-T03-001-05"
    },
    {
  "type": "mc",
  "q": "Which word describes a day with a gentle wind?",
  "options": [
    "Breezy",
    "Silent",
    "Dry",
    "Dark"
  ],
  "correct": 0,
  "explanation": "Breezy means that a gentle wind is blowing.",
  "id": "ENG-PM3-QUIZ-T03-001-06"
},
    {
      "type": "tf",
      "q": "The word 'cloudy' describes a sky with many clouds.",
      "expected": true,
      "explanation": "Cloudy means covered with or having many clouds.",
      "id": "ENG-PM3-QUIZ-T03-001-07"
    },
    {
  "type": "mc",
  "q": "Which sentence correctly describes rainy weather today?",
  "options": [
    "It raining today.",
    "It is raining today.",
    "It are raining today.",
    "It rain today now."
  ],
  "correct": 1,
  "explanation": "It is raining is the correct present continuous sentence.",
  "id": "ENG-PM3-QUIZ-T03-001-08"
},
    {
      "type": "text",
      "q": "Fill in the blank: The month after August is ____. (September / July)",
      "expected": "September",
      "explanation": "September comes immediately after August.",
      "id": "ENG-PM3-QUIZ-T03-001-09"
    },
    {
      "type": "tf",
      "q": "February is always the longest month of the year.",
      "expected": false,
      "explanation": "February has fewer days than the other months.",
      "id": "ENG-PM3-QUIZ-T03-001-10"
    }
  ],
  "My Home": [
    {
      "type": "mc",
      "q": "Where would you usually prepare a meal?",
      "options": [
        "Bathroom",
        "Kitchen",
        "Bedroom",
        "Garage"
      ],
      "correct": 1,
      "explanation": "Meals are commonly prepared in the kitchen.",
      "id": "ENG-PM3-QUIZ-T04-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: There ____ two windows in this room. (is / are)",
      "expected": "are",
      "explanation": "Use are with the plural two windows.",
      "id": "ENG-PM3-QUIZ-T04-001-02"
    },
    {
      "type": "tf",
      "q": "The word 'furniture' includes chairs and tables.",
      "expected": true,
      "explanation": "Chairs and tables are furniture.",
      "id": "ENG-PM3-QUIZ-T04-001-03"
    },
    {
      "type": "mc",
      "q": "Which sentence describes an object's position?",
      "options": [
        "The room is clean.",
        "The bag is under the table.",
        "The door is blue.",
        "The chair is wooden."
      ],
      "correct": 1,
      "explanation": "Under the table describes a position.",
      "id": "ENG-PM3-QUIZ-T04-001-04"
    },
    {
      "type": "text",
      "q": "Fill in the blank: The cat is ____ the box, not outside it. (inside / above)",
      "expected": "inside",
      "explanation": "Inside means within the box.",
      "id": "ENG-PM3-QUIZ-T04-001-05"
    },
    {
      "type": "mc",
      "q": "Which word means the opposite of 'upstairs'?",
      "options": [
        "Outside",
        "Downstairs",
        "Inside",
        "Nearby"
      ],
      "correct": 1,
      "explanation": "Downstairs refers to a lower floor.",
      "id": "ENG-PM3-QUIZ-T04-001-06"
    },
    {
      "type": "tf",
      "q": "In 'The lamp is beside the sofa', 'beside' tells us the lamp's position.",
      "expected": true,
      "explanation": "Beside means next to.",
      "id": "ENG-PM3-QUIZ-T04-001-07"
    },
    {
      "type": "mc",
      "q": "Choose the grammatically correct sentence.",
      "options": [
        "There is three chairs.",
        "There are three chairs.",
        "There am three chairs.",
        "There be three chairs."
      ],
      "correct": 1,
      "explanation": "Use there are with plural chairs.",
      "id": "ENG-PM3-QUIZ-T04-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: A person usually sleeps in a ____. (bed / sink)",
      "expected": "bed",
      "explanation": "A bed is used for sleeping.",
      "id": "ENG-PM3-QUIZ-T04-001-09"
    },
    {
      "type": "tf",
      "q": "The word 'behind' means the same as 'in front of'.",
      "expected": false,
      "explanation": "Behind refers to the back of something.",
      "id": "ENG-PM3-QUIZ-T04-001-10"
    }
  ],
  "Food and Meals": [
    {
      "type": "mc",
      "q": "Which food is a fruit?",
      "options": [
        "Carrot",
        "Apple",
        "Rice",
        "Bread"
      ],
      "correct": 1,
      "explanation": "An apple is a fruit.",
      "id": "ENG-PM3-QUIZ-T05-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: I would like ____ orange. (a / an)",
      "expected": "an",
      "explanation": "Orange begins with a vowel sound, so use an.",
      "id": "ENG-PM3-QUIZ-T05-001-02"
    },
    {
      "type": "tf",
      "q": "We use 'some' with plural nouns, as in 'some apples'.",
      "expected": true,
      "explanation": "Some can be used with plural countable nouns.",
      "id": "ENG-PM3-QUIZ-T05-001-03"
    },
    {
  "type": "mc",
  "q": "Which sentence correctly uses 'a' before a food name?",
  "options": [
    "I have an banana.",
    "I have a banana.",
    "I has a banana.",
    "I having a banana."
  ],
  "correct": 1,
  "explanation": "Banana begins with a consonant sound, so use a.",
  "id": "ENG-PM3-QUIZ-T05-001-04"
},
    {
      "type": "text",
      "q": "Fill in the blank: She drinks a glass of ____. (water / plate)",
      "expected": "water",
      "explanation": "Water is a drink; a plate is not.",
      "id": "ENG-PM3-QUIZ-T05-001-05"
    },
    {
      "type": "mc",
      "q": "Which food is made mainly from milk?",
      "options": [
        "Cheese",
        "Carrot",
        "Rice",
        "Apple"
      ],
      "correct": 0,
      "explanation": "Cheese is made from milk.",
      "id": "ENG-PM3-QUIZ-T05-001-06"
    },
    {
      "type": "tf",
      "q": "The phrase 'two breads' is the usual way to count two slices of bread.",
      "expected": false,
      "explanation": "Say two slices of bread.",
      "id": "ENG-PM3-QUIZ-T05-001-07"
    },
    {
      "type": "mc",
      "q": "What is the plural of 'tomato'?",
      "options": [
        "Tomatos",
        "Tomatoes",
        "Tomato's",
        "Tomatoies"
      ],
      "correct": 1,
      "explanation": "Tomato becomes tomatoes in the plural.",
      "id": "ENG-PM3-QUIZ-T05-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: The soup is very ____. (hot / loudly)",
      "expected": "hot",
      "explanation": "Hot is an adjective describing the soup's temperature.",
      "id": "ENG-PM3-QUIZ-T05-001-09"
    },
    {
      "type": "tf",
      "q": "A recipe gives instructions for preparing food.",
      "expected": true,
      "explanation": "A recipe lists ingredients and steps for cooking.",
      "id": "ENG-PM3-QUIZ-T05-001-10"
    }
  ],
  "Around Town": [
    {
      "type": "mc",
      "q": "Where can someone borrow books?",
      "options": [
        "Library",
        "Hospital",
        "Bank",
        "Restaurant"
      ],
      "correct": 0,
      "explanation": "Libraries lend books.",
      "id": "ENG-PM3-QUIZ-T06-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: The doctor works at a ____. (hospital / cinema)",
      "expected": "hospital",
      "explanation": "Doctors commonly work in hospitals.",
      "id": "ENG-PM3-QUIZ-T06-001-02"
    },
    {
      "type": "tf",
      "q": "A pedestrian is a person who travels on foot.",
      "expected": true,
      "explanation": "A pedestrian walks.",
      "id": "ENG-PM3-QUIZ-T06-001-03"
    },
    {
      "type": "mc",
      "q": "Which place is used to send letters and parcels?",
      "options": [
        "Post office",
        "Swimming pool",
        "Museum",
        "Playground"
      ],
      "correct": 0,
      "explanation": "A post office handles mail and parcels.",
      "id": "ENG-PM3-QUIZ-T06-001-04"
    },
    {
      "type": "text",
      "q": "Fill in the blank: We wait for the bus at the bus ____. (stop / shop)",
      "expected": "stop",
      "explanation": "The place where buses pick up passengers is a bus stop.",
      "id": "ENG-PM3-QUIZ-T06-001-05"
    },
    {
      "type": "mc",
      "q": "Which instruction tells you to turn in a direction?",
      "options": [
        "Go left",
        "Eat lunch",
        "Read silently",
        "Wake up"
      ],
      "correct": 0,
      "explanation": "Go left tells you to change direction.",
      "id": "ENG-PM3-QUIZ-T06-001-06"
    },
    {
      "type": "tf",
      "q": "A zebra crossing is a marked place where pedestrians can cross the road.",
      "expected": true,
      "explanation": "Zebra crossings are marked for pedestrians.",
      "id": "ENG-PM3-QUIZ-T06-001-07"
    },
    {
      "type": "mc",
      "q": "Which is the correct sentence?",
      "options": [
        "The shop is next to the bank.",
        "The shop next the bank.",
        "The shop are next the bank.",
        "The shop beside of bank."
      ],
      "correct": 0,
      "explanation": "Next to is a correct phrase for position.",
      "id": "ENG-PM3-QUIZ-T06-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: Stop when the traffic light is ____. (red / green)",
      "expected": "red",
      "explanation": "A red traffic light means stop.",
      "id": "ENG-PM3-QUIZ-T06-001-09"
    },
    {
      "type": "tf",
      "q": "The word 'opposite' can mean across from another place.",
      "expected": true,
      "explanation": "Opposite describes something on the other side.",
      "id": "ENG-PM3-QUIZ-T06-001-10"
    }
  ],
  "Yesterday and the Past": [
    {
      "type": "mc",
      "q": "What is the past tense of 'eat'?",
      "options": [
        "Eated",
        "Ate",
        "Eating",
        "Eats"
      ],
      "correct": 1,
      "explanation": "Ate is the past tense of eat.",
      "id": "ENG-PM3-QUIZ-T07-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: Yesterday, we ____ football. (played / play)",
      "expected": "played",
      "explanation": "Yesterday indicates a completed action in the past.",
      "id": "ENG-PM3-QUIZ-T07-001-02"
    },
    {
  "type": "tf",
  "q": "The word 'built' is the past tense of 'build'.",
  "expected": true,
  "explanation": "Built is the irregular past tense of build.",
  "id": "ENG-PM3-QUIZ-T07-001-03"
},
    {
  "type": "mc",
  "q": "Which sentence correctly tells us about a visit that happened yesterday?",
  "options": [
    "She visit her aunt yesterday.",
    "She visited her aunt yesterday.",
    "She visiting her aunt yesterday.",
    "She visits her aunt yesterday tomorrow."
  ],
  "correct": 1,
  "explanation": "Visited is the past-tense verb.",
  "id": "ENG-PM3-QUIZ-T07-001-04"
},
    {
      "type": "text",
      "q": "Fill in the blank: Last night, I ____ a storybook. (read / reads)",
      "expected": "read",
      "explanation": "The past tense of read is spelled read.",
      "id": "ENG-PM3-QUIZ-T07-001-05"
    },
    {
      "type": "mc",
      "q": "Which is the past tense of 'buy'?",
      "options": [
        "Buyed",
        "Bought",
        "Buying",
        "Buys"
      ],
      "correct": 1,
      "explanation": "Bought is the past tense of buy.",
      "id": "ENG-PM3-QUIZ-T07-001-06"
    },
    {
      "type": "tf",
      "q": "In the sentence 'He was happy yesterday', 'was' is in the past tense.",
      "expected": true,
      "explanation": "Was is a past-tense form of be.",
      "id": "ENG-PM3-QUIZ-T07-001-07"
    },
    {
      "type": "mc",
      "q": "Which word is the past tense of 'see'?",
      "options": [
        "Saw",
        "Seen",
        "Seeing",
        "Sees"
      ],
      "correct": 0,
      "explanation": "Saw is the simple past form of see.",
      "id": "ENG-PM3-QUIZ-T07-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: They ____ at home yesterday. (were / was)",
      "expected": "were",
      "explanation": "Use were with they in the past.",
      "id": "ENG-PM3-QUIZ-T07-001-09"
    },
    {
      "type": "tf",
      "q": "The sentence 'I goed to the park' uses the correct past tense.",
      "expected": false,
      "explanation": "The past tense is went, not goed.",
      "id": "ENG-PM3-QUIZ-T07-001-10"
    }
  ],
  "Trips and Holidays": [
    {
      "type": "mc",
      "q": "Where do passengers wait to board a plane?",
      "options": [
        "Airport",
        "Library",
        "Hospital",
        "Market"
      ],
      "correct": 0,
      "explanation": "Passengers board planes at airports.",
      "id": "ENG-PM3-QUIZ-T08-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: We packed our clothes in a ____. (suitcase / saucepan)",
      "expected": "suitcase",
      "explanation": "A suitcase is used to carry clothes for travel.",
      "id": "ENG-PM3-QUIZ-T08-001-02"
    },
    {
      "type": "tf",
      "q": "A passport is an official document used for international travel.",
      "expected": true,
      "explanation": "Passports identify travellers at international borders.",
      "id": "ENG-PM3-QUIZ-T08-001-03"
    },
    {
  "type": "mc",
  "q": "What is the past tense of 'travel' in British English?",
  "options": [
    "Travels",
    "Travelled",
    "Travelling",
    "Travel"
  ],
  "correct": 1,
  "explanation": "'Travelled' is the usual British English past-tense spelling.",
  "id": "ENG-PM3-QUIZ-T08-001-04"
},
    {
      "type": "text",
      "q": "Fill in the blank: Last weekend, my family ____ the museum. (visited / visits)",
      "expected": "visited",
      "explanation": "Last weekend calls for the past tense.",
      "id": "ENG-PM3-QUIZ-T08-001-05"
    },
    {
      "type": "mc",
      "q": "Which word means a place where tourists stay overnight?",
      "options": [
        "Hotel",
        "Bus stop",
        "Museum",
        "Supermarket"
      ],
      "correct": 0,
      "explanation": "Hotels provide accommodation.",
      "id": "ENG-PM3-QUIZ-T08-001-06"
    },
    {
      "type": "tf",
      "q": "A timetable may tell travellers when a train or bus leaves.",
      "expected": true,
      "explanation": "Timetables list scheduled departure times.",
      "id": "ENG-PM3-QUIZ-T08-001-07"
    },
    {
      "type": "mc",
      "q": "Which sentence is about a future holiday?",
      "options": [
        "We are at the beach now.",
        "We visited the beach yesterday.",
        "We will visit the beach next week.",
        "We visited the beach last year."
      ],
      "correct": 2,
      "explanation": "Will visit next week describes a future plan.",
      "id": "ENG-PM3-QUIZ-T08-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: We took many ____ on our holiday. (photos / photo)",
      "expected": "photos",
      "explanation": "Many takes the plural photos.",
      "id": "ENG-PM3-QUIZ-T08-001-09"
    },
    {
      "type": "tf",
      "q": "The word 'departure' means arriving at a destination.",
      "expected": false,
      "explanation": "Departure means leaving; arrival means reaching a place.",
      "id": "ENG-PM3-QUIZ-T08-001-10"
    }
  ],
  "Nature and Animals": [
    {
      "type": "mc",
      "q": "Which animal is a mammal?",
      "options": [
        "Frog",
        "Butterfly",
        "Dolphin",
        "Lizard"
      ],
      "correct": 2,
      "explanation": "Dolphins are mammals.",
      "id": "ENG-PM3-QUIZ-T09-001-01"
    },
    {
      "type": "text",
      "q": "Fill in the blank: A young cat is called a ____. (kitten / puppy)",
      "expected": "kitten",
      "explanation": "A kitten is a young cat.",
      "id": "ENG-PM3-QUIZ-T09-001-02"
    },
    {
      "type": "tf",
      "q": "A butterfly has six legs.",
      "expected": true,
      "explanation": "Butterflies are insects, and adult insects have six legs.",
      "id": "ENG-PM3-QUIZ-T09-001-03"
    },
    {
      "type": "mc",
      "q": "Which part of a plant usually absorbs water from the soil?",
      "options": [
        "Flower",
        "Leaf",
        "Root",
        "Fruit"
      ],
      "correct": 2,
      "explanation": "Roots absorb water from the soil.",
      "id": "ENG-PM3-QUIZ-T09-001-04"
    },
    {
      "type": "text",
      "q": "Fill in the blank: Birds use their ____ to fly. (wings / fins)",
      "expected": "wings",
      "explanation": "Birds fly using wings.",
      "id": "ENG-PM3-QUIZ-T09-001-05"
    },
    {
      "type": "mc",
      "q": "Which habitat is home to many fish?",
      "options": [
        "Ocean",
        "Desert",
        "Mountain peak",
        "Grassland"
      ],
      "correct": 0,
      "explanation": "The ocean is an aquatic habitat.",
      "id": "ENG-PM3-QUIZ-T09-001-06"
    },
    {
      "type": "tf",
      "q": "The word 'nocturnal' describes animals that are active mainly at night.",
      "expected": true,
      "explanation": "Nocturnal animals are mainly active at night.",
      "id": "ENG-PM3-QUIZ-T09-001-07"
    },
    {
      "type": "mc",
      "q": "Which word is an adjective in 'The tall tree gives shade'?",
      "options": [
        "Tree",
        "Gives",
        "Tall",
        "Shade"
      ],
      "correct": 2,
      "explanation": "Tall describes the noun tree.",
      "id": "ENG-PM3-QUIZ-T09-001-08"
    },
    {
      "type": "text",
      "q": "Fill in the blank: A plant needs water and ____ to grow well. (light / plastic)",
      "expected": "light",
      "explanation": "Plants generally need light to grow.",
      "id": "ENG-PM3-QUIZ-T09-001-09"
    },
    {
      "type": "tf",
      "q": "The word 'habitat' means an animal's natural home.",
      "expected": true,
      "explanation": "A habitat is the place an organism naturally lives.",
      "id": "ENG-PM3-QUIZ-T09-001-10"
    }
  ]
});

/* One shared drag-and-drop conversion for existing fill-in questions. */
const qrDropDistractors = {
  "ENG-PM3-QUIZ-VOC-002-08": "hospital",
  "ENG-PM3-QUIZ-VOC-002-09": "hungry",
  "ENG-PM3-QUIZ-VOC-002-10": "actor",
  "ENG-PM3-QUIZ-GRM-001-08": "do",
  "ENG-PM3-QUIZ-GRM-001-09": "a",
  "ENG-PM3-QUIZ-GRM-001-10": "is",
  "ENG-PM3-QUIZ-T01-001-02": "brushes",
  "ENG-PM3-QUIZ-T01-001-05": "wake",
  "ENG-PM3-QUIZ-T01-001-09": "midnight",
  "ENG-PM3-QUIZ-T02-001-02": "is",
  "ENG-PM3-QUIZ-T02-001-05": "sleep",
  "ENG-PM3-QUIZ-T02-001-09": "is",
  "ENG-PM3-QUIZ-T03-001-02": "10",
  "ENG-PM3-QUIZ-T03-001-05": "last",
  "ENG-PM3-QUIZ-T03-001-09": "July",
  "ENG-PM3-QUIZ-T04-001-02": "is",
  "ENG-PM3-QUIZ-T04-001-05": "above",
  "ENG-PM3-QUIZ-T04-001-09": "sink",
  "ENG-PM3-QUIZ-T05-001-02": "a",
  "ENG-PM3-QUIZ-T05-001-05": "plate",
  "ENG-PM3-QUIZ-T05-001-09": "loudly",
  "ENG-PM3-QUIZ-T06-001-02": "cinema",
  "ENG-PM3-QUIZ-T06-001-05": "shop",
  "ENG-PM3-QUIZ-T06-001-09": "green",
  "ENG-PM3-QUIZ-T07-001-02": "play",
  "ENG-PM3-QUIZ-T07-001-05": "reads",
  "ENG-PM3-QUIZ-T07-001-09": "was",
  "ENG-PM3-QUIZ-T08-001-02": "saucepan",
  "ENG-PM3-QUIZ-T08-001-05": "visits",
  "ENG-PM3-QUIZ-T08-001-09": "photo",
  "ENG-PM3-QUIZ-T09-001-02": "puppy",
  "ENG-PM3-QUIZ-T09-001-05": "fins",
  "ENG-PM3-QUIZ-T09-001-09": "plastic",
  "MATH-PM3-QUIZ-U02-001-02": "535",
  "MATH-PM3-QUIZ-U02-001-04": "8",
  "MATH-PM3-QUIZ-U02-001-09": "32",
  "MATH-PM3-QUIZ-U03-001-01": "8",
  "MATH-PM3-QUIZ-U03-001-07": "20",
  "MATH-PM3-QUIZ-U03-001-10": "0.7",
  "MATH-PM3-QUIZ-U04-001-02": "37",
  "MATH-PM3-QUIZ-U04-001-05": "5.75",
  "MATH-PM3-QUIZ-U04-001-08": "50",
  "MATH-PM3-QUIZ-U05-001-02": "125",
  "MATH-PM3-QUIZ-U05-001-07": "35",
  "MATH-PM3-QUIZ-U05-001-09": "12",
  "MATH-PM3-QUIZ-U06-001-02": "200",
  "MATH-PM3-QUIZ-U06-001-05": "900",
  "MATH-PM3-QUIZ-U06-001-09": "2",
  "MATH-PM3-QUIZ-U07-001-04": "3",
  "MATH-PM3-QUIZ-U07-001-06": "6",
  "MATH-PM3-QUIZ-U07-001-10": "5",
  "MATH-PM3-QUIZ-U08-001-04": "D2",
  "MATH-PM3-QUIZ-U08-001-06": "B1",
  "MATH-PM3-QUIZ-U09-001-03": "12",
  "MATH-PM3-QUIZ-U09-001-09": "4"
};
for(const subjectBank of Object.values(exerciseBank))for(const questions of Object.values(subjectBank))for(const question of questions){
 if(question.type!=='text')continue;
 const wrong=qrDropDistractors[question.id];
 if(!wrong)throw Error('Missing drag-and-drop choice for '+question.id);
 question.type='drop';question.options=[String(question.expected),wrong];
}


/* PM3 Science: 12 original ten-question sets aligned to the DLP Year 3 science units.
   U03 and U06 are split into two non-overlapping quiz topics. */
Object.assign(exerciseBank, { Science: {
  "Scientific Skills": [
    {
      "id": "SCI-PM3-QUIZ-U01-001-01",
      "type": "mc",
      "q": "Which science skill uses our senses to gather information?",
      "options": [
        "Observing",
        "Predicting",
        "Measuring",
        "Classifying"
      ],
      "correct": 0,
      "explanation": "We observe by using our senses."
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-02",
      "type": "tf",
      "q": "Grouping leaves by their shapes is an example of classifying.",
      "explanation": "Classifying means putting things into groups by features they share.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-03",
      "type": "drop",
      "q": "A ____ is used to measure the time taken to run a short race.",
      "explanation": "A stopwatch measures how much time has passed.",
      "expected": "stopwatch",
      "options": [
        "stopwatch",
        "thermometer"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-04",
      "type": "mc",
      "q": "A plant's leaves are drooping, and the soil is very dry. What is a likely reason?",
      "options": [
        "The plant has too many flowers.",
        "The plant has not received enough water.",
        "The plant has been watered too often.",
        "The plant has been moved to a bigger pot."
      ],
      "correct": 1,
      "explanation": "Dry soil and drooping leaves suggest the plant may need water. Using clues to explain something is called making an inference."
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-05",
      "type": "tf",
      "q": "A prediction describes only what has already happened.",
      "explanation": "A prediction tells us what we think may happen next.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-06",
      "type": "drop",
      "q": "A pupil uses a bar chart to ____ the results of an experiment.",
      "explanation": "A bar chart helps share experiment results.",
      "expected": "share",
      "options": [
        "share",
        "hide"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-07",
      "type": "mc",
      "q": "Where should the end of a pencil be placed when measuring with a ruler?",
      "options": [
        "At the 1 cm mark",
        "At the final number",
        "At the zero mark",
        "At the ruler's midpoint"
      ],
      "correct": 2,
      "explanation": "Align the object's end with the zero mark."
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-08",
      "type": "tf",
      "q": "Looking straight at a ruler's markings helps us read a measurement correctly.",
      "explanation": "Reading the ruler at eye level helps prevent errors.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-09",
      "type": "drop",
      "q": "A clear science drawing should include useful ____.",
      "explanation": "Labels help explain the parts being observed.",
      "expected": "labels",
      "options": [
        "labels",
        "decorations"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-10",
      "type": "mc",
      "q": "After using a beaker, what should pupils do before storing it?",
      "options": [
        "Store it without cleaning.",
        "Leave it on the bench until tomorrow.",
        "Rinse it and put it away while still wet.",
        "Clean and dry it"
      ],
      "correct": 3,
      "explanation": "Used apparatus should be cleaned and dried before storage."
    }
  ],
  "Science Room Rules": [
    {
      "id": "SCI-PM3-QUIZ-U02-001-01",
      "type": "mc",
      "q": "Before starting a science activity, what should pupils do?",
      "options": [
        "Start mixing materials straight away.",
        "Listen to the teacher's instructions",
        "Choose tools before listening.",
        "Begin while the teacher is speaking."
      ],
      "correct": 1,
      "explanation": "Pupils should follow the teacher's instructions before beginning an experiment."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-02",
      "type": "tf",
      "q": "It is safe for pupils to pick up broken glass with bare hands.",
      "explanation": "Broken glass may cause cuts. Tell the teacher.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-03",
      "type": "drop",
      "q": "Glass containers should be carried ____ to avoid accidents.",
      "explanation": "Careful handling helps prevent breakages.",
      "expected": "carefully",
      "options": [
        "carefully",
        "quickly"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-04",
      "type": "mc",
      "q": "Why should pupils never taste substances in a science room?",
      "options": [
        "The labels may be missing.",
        "The liquid may look like water.",
        "They may be harmful",
        "The container may be made of glass."
      ],
      "correct": 2,
      "explanation": "A substance may be harmful even if it looks harmless, so it must never be tasted."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-05",
      "type": "tf",
      "q": "Pupils should tell the teacher when a liquid is spilled in the science room.",
      "explanation": "Spills should be reported to the teacher.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-06",
      "type": "drop",
      "q": "During an experiment, pupils should work ____.",
      "explanation": "Calm, careful work helps prevent accidents.",
      "expected": "calmly",
      "options": [
        "calmly",
        "roughly"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-07",
      "type": "mc",
      "q": "If a pupil is unsure how to use an apparatus, what should they do?",
      "options": [
        "Copy how another pupil uses it without checking.",
        "Use it first and ask questions later.",
        "Guess which part to switch on.",
        "Ask the teacher for help"
      ],
      "correct": 3,
      "explanation": "Pupils should ask their teacher before using unfamiliar science equipment."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-08",
      "type": "tf",
      "q": "Unused science equipment should be returned to its proper place.",
      "explanation": "Putting equipment away correctly keeps the room safe.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-09",
      "type": "drop",
      "q": "Keeping the science work area ____ helps prevent accidents.",
      "explanation": "A tidy work area is safer.",
      "expected": "tidy",
      "options": [
        "tidy",
        "messy"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-10",
      "type": "mc",
      "q": "What should pupils do after finishing an investigation?",
      "options": [
        "Clean the workplace and wash their hands",
        "Leave apparatus on the workbench.",
        "Put equipment away without cleaning it.",
        "Leave spills for the next class."
      ],
      "correct": 0,
      "explanation": "At the end of a science activity, clean and store equipment properly and wash your hands."
    }
  ],
  "Teeth and Dental Care": [
    {
      "id": "SCI-PM3-QUIZ-U03A-001-01",
      "type": "mc",
      "q": "Which type of tooth is mainly used to cut food?",
      "options": [
        "Molar",
        "Canine",
        "Incisor",
        "Gum"
      ],
      "correct": 2,
      "explanation": "Incisors are the front teeth that bite and cut food."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-02",
      "type": "tf",
      "q": "Canine teeth help us tear food.",
      "explanation": "Canines are pointed teeth that tear food.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-03",
      "type": "drop",
      "q": "The broad back teeth used for grinding food are called ____.",
      "explanation": "Molars are back teeth used for grinding.",
      "expected": "molars",
      "options": [
        "molars",
        "incisors"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-04",
      "type": "mc",
      "q": "What is the hard outermost layer of a tooth called?",
      "options": [
        "Pulp",
        "Root",
        "Gum",
        "Enamel"
      ],
      "correct": 3,
      "explanation": "Enamel is the hard outer covering of the tooth."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-05",
      "type": "tf",
      "q": "The nerves inside a tooth are found in its enamel.",
      "explanation": "Nerves are found in the pulp inside the tooth.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-06",
      "type": "drop",
      "q": "The first teeth children grow are called ____ teeth.",
      "explanation": "Milk teeth grow before permanent teeth.",
      "expected": "milk",
      "options": [
        "milk",
        "permanent"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-07",
      "type": "mc",
      "q": "Why is it important to take care of milk teeth?",
      "options": [
        "They help children chew and speak clearly.",
        "They can never be damaged.",
        "They will stay forever.",
        "They do not need brushing."
      ],
      "correct": 0,
      "explanation": "Milk teeth help with eating and speaking before permanent teeth grow."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-08",
      "type": "tf",
      "q": "Brushing our teeth regularly helps prevent tooth decay.",
      "explanation": "Regular brushing helps remove plaque.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-09",
      "type": "drop",
      "q": "Eating sugary snacks too often can lead to tooth ____.",
      "explanation": "Frequent sugar intake can increase tooth decay.",
      "expected": "decay",
      "options": [
        "decay",
        "growth"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-10",
      "type": "mc",
      "q": "Who should examine a painful or decaying tooth?",
      "options": [
        "Pharmacist",
        "Dentist",
        "Optician",
        "Veterinarian"
      ],
      "correct": 1,
      "explanation": "Dentists examine and treat dental problems."
    }
  ],
  "Food and Digestion": [
    {
      "id": "SCI-PM3-QUIZ-U03B-001-01",
      "type": "mc",
      "q": "What does digestion do to the food we eat?",
      "options": [
        "Moves oxygen around the body.",
        "Pumps blood to body organs.",
        "Controls how quickly we breathe.",
        "Breaks food into smaller, simpler substances."
      ],
      "correct": 3,
      "explanation": "Digestion breaks down food so the body can absorb and use nutrients."
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-02",
      "type": "tf",
      "q": "Chewing food breaks it into smaller pieces before swallowing.",
      "explanation": "Teeth break food into smaller pieces for swallowing.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-03",
      "type": "drop",
      "q": "Digestion helps our bodies absorb useful ____ from food.",
      "explanation": "Digestion allows nutrients to be absorbed.",
      "expected": "nutrients",
      "options": [
        "nutrients",
        "shadows"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-04",
      "type": "mc",
      "q": "Which part of the digestive system first chews and mixes food with saliva?",
      "options": [
        "Mouth",
        "Small intestine",
        "Large intestine",
        "Stomach"
      ],
      "correct": 0,
      "explanation": "Digestion begins in the mouth."
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-05",
      "type": "tf",
      "q": "The windpipe carries swallowed food into the stomach.",
      "explanation": "Food passes through the oesophagus, not the windpipe.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-06",
      "type": "drop",
      "q": "The ____ mixes food with digestive juices.",
      "explanation": "The stomach churns food with digestive juices.",
      "expected": "stomach",
      "options": [
        "stomach",
        "heart"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-07",
      "type": "mc",
      "q": "Where are most digested nutrients absorbed into the blood?",
      "options": [
        "Mouth",
        "Small intestine",
        "Large intestine",
        "Oesophagus"
      ],
      "correct": 1,
      "explanation": "Most nutrient absorption happens in the small intestine."
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-08",
      "type": "tf",
      "q": "The large intestine absorbs water from undigested food.",
      "explanation": "The large intestine absorbs water from food waste.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-09",
      "type": "drop",
      "q": "Undigested food leaves the body as ____.",
      "explanation": "Undigested waste eventually leaves the body as faeces.",
      "expected": "faeces",
      "options": [
        "faeces",
        "saliva"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-10",
      "type": "mc",
      "q": "Which action helps the digestive system work well when eating?",
      "options": [
        "Swallow large pieces of food.",
        "Eat very quickly without chewing.",
        "Chew food properly before swallowing.",
        "Take large bites while talking."
      ],
      "correct": 2,
      "explanation": "Chewing food well helps start digestion and makes swallowing easier."
    }
  ],
  "Animal Eating Habits": [
    {
      "id": "SCI-PM3-QUIZ-U04-001-01",
      "type": "mc",
      "q": "An animal that feeds mainly on plants is called a ...",
      "options": [
        "Herbivore",
        "Carnivore",
        "Omnivore",
        "Insectivore"
      ],
      "correct": 0,
      "explanation": "A herbivore is an animal that eats plants."
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-02",
      "type": "tf",
      "q": "A carnivore is an animal that eats other animals.",
      "explanation": "Carnivores eat other animals.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-03",
      "type": "drop",
      "q": "A chicken eats seeds and insects, so it is an ____.",
      "explanation": "An omnivore eats both plant and animal food.",
      "expected": "omnivore",
      "options": [
        "omnivore",
        "herbivore"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-04",
      "type": "mc",
      "q": "A tiger has long, sharp canine teeth. What are these adapted for?",
      "options": [
        "Grinding grass",
        "Holding and tearing meat",
        "Cracking seeds only",
        "Sucking nectar"
      ],
      "correct": 1,
      "explanation": "Sharp canine teeth help meat-eating animals tear flesh."
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-05",
      "type": "tf",
      "q": "Cows use long, pointed fangs to grind grass.",
      "explanation": "Cows use broad molars to grind grass.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-06",
      "type": "drop",
      "q": "A bird that eats seeds and insects eats food from plants and ____.",
      "explanation": "Seeds are plant food, and insects are animals.",
      "expected": "animals",
      "options": [
        "animals",
        "stones"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-07",
      "type": "mc",
      "q": "Which of these animals mainly feeds on leaves?",
      "options": [
        "Eagle",
        "Crocodile",
        "Giraffe",
        "Shark"
      ],
      "correct": 2,
      "explanation": "Giraffes are plant-eating herbivores."
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-08",
      "type": "tf",
      "q": "Different animals have teeth suited to the foods they eat.",
      "explanation": "Teeth help animals eat their different foods.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-09",
      "type": "drop",
      "q": "A rabbit mainly eats ____ such as grass and leaves.",
      "explanation": "Rabbits eat plant food such as grass and leaves.",
      "expected": "plants",
      "options": [
        "plants",
        "meat"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-10",
      "type": "mc",
      "q": "How can we find out what a pet eats?",
      "options": [
        "Measure the length of its tail.",
        "Count its spots.",
        "Look only at its sleeping place.",
        "Watch what food it chooses and eats."
      ],
      "correct": 3,
      "explanation": "Observing what an animal eats helps us understand its eating habits."
    }
  ],
  "Plant Reproduction": [
    {
      "id": "SCI-PM3-QUIZ-U05-001-01",
      "type": "mc",
      "q": "Why do plants reproduce?",
      "options": [
        "To absorb more water.",
        "To grow more plants of the same kind.",
        "To store extra food.",
        "To grow taller."
      ],
      "correct": 1,
      "explanation": "Reproduction allows new plants of the same kind to grow."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-02",
      "type": "tf",
      "q": "A seed can grow into a new plant when conditions are suitable.",
      "explanation": "Seeds can germinate and grow under suitable conditions.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-03",
      "type": "drop",
      "q": "A ____ plant can grow from a stem cutting.",
      "explanation": "Rose plants can grow from stem cuttings.",
      "expected": "rose",
      "options": [
        "rose",
        "coconut"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-04",
      "type": "mc",
      "q": "Which plant can reproduce through underground tubers?",
      "options": [
        "Sunflower",
        "Watermelon",
        "Potato",
        "Mango"
      ],
      "correct": 2,
      "explanation": "Potatoes can sprout from buds on tubers."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-05",
      "type": "tf",
      "q": "Strawberry plants can grow new plants along runners.",
      "explanation": "Runners help strawberry plants reproduce.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-06",
      "type": "drop",
      "q": "The setawar plant can grow small new plants from its ____.",
      "explanation": "Setawar produces little plantlets along its leaves.",
      "expected": "leaves",
      "options": [
        "leaves",
        "fruits"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-07",
      "type": "mc",
      "q": "Why might a gardener plant a rose stem cutting?",
      "options": [
        "To make the flowers change colour.",
        "To make the stem dry out.",
        "To make the original rose stop growing.",
        "To grow a new rose plant."
      ],
      "correct": 3,
      "explanation": "Some plants, such as roses, can grow new plants from stem cuttings."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-08",
      "type": "tf",
      "q": "Plants never need to reproduce because they live forever.",
      "explanation": "Plants reproduce so their kind can continue.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-09",
      "type": "drop",
      "q": "Ferns reproduce using ____ rather than seeds.",
      "explanation": "Ferns produce spores.",
      "expected": "spores",
      "options": [
        "spores",
        "flowers"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-10",
      "type": "mc",
      "q": "Which part of ginger can grow into a new plant?",
      "options": [
        "Its underground stem",
        "Its flower petals",
        "Its old leaves",
        "Its dried fruit skin"
      ],
      "correct": 0,
      "explanation": "Ginger can grow new plants from its underground stem, called a rhizome."
    }
  ],
  "Measuring Area": [
    {
      "id": "SCI-PM3-QUIZ-U06A-001-01",
      "type": "mc",
      "q": "What do we measure when we find the area of a book cover?",
      "options": [
        "How thick the book is.",
        "How much the book weighs.",
        "The amount of surface it covers.",
        "How many pages the book has."
      ],
      "correct": 2,
      "explanation": "Area tells us how much flat surface something covers."
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-02",
      "type": "tf",
      "q": "Square centimetres can be used to measure a book cover's area.",
      "explanation": "Area uses square units such as cm².",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-03",
      "type": "drop",
      "q": "A rectangle measuring 4 cm by 3 cm has an area of ____ cm².",
      "explanation": "4 × 3 = 12 cm².",
      "expected": "12",
      "options": [
        "12",
        "7"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-04",
      "type": "mc",
      "q": "A square has sides of 5 cm. What is its area?",
      "options": [
        "10 cm²",
        "20 cm²",
        "15 cm²",
        "25 cm²"
      ],
      "correct": 3,
      "explanation": "The area of a square is side × side: 5 × 5 = 25 cm²."
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-05",
      "type": "tf",
      "q": "Eight complete 1 cm² squares cover an area of 8 cm².",
      "explanation": "Eight unit squares cover 8 cm².",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-06",
      "type": "drop",
      "q": "To estimate the area of a leaf, count the ____ on squared paper.",
      "explanation": "Count whole and partly covered squares.",
      "expected": "squares",
      "options": [
        "squares",
        "lines"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-07",
      "type": "mc",
      "q": "A rectangle measures 6 cm by 2 cm. Which change doubles its area?",
      "options": [
        "Increase the width to 4 cm",
        "Reduce the width to 1 cm",
        "Reduce the length to 3 cm",
        "Keep both dimensions unchanged"
      ],
      "correct": 0,
      "explanation": "Changing width from 2 to 4 doubles the rectangle's area from 12 to 24 cm²."
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-08",
      "type": "tf",
      "q": "Area tells us how heavy an object is.",
      "explanation": "Area measures a surface, not weight.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-09",
      "type": "drop",
      "q": "A 3 cm by 3 cm square has an area of ____ cm².",
      "explanation": "3 × 3 = 9 cm².",
      "expected": "9",
      "options": [
        "9",
        "6"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-10",
      "type": "mc",
      "q": "Why must we use equal-sized squares when comparing areas?",
      "options": [
        "Because all leaves are the same shape.",
        "So the measurements are fair.",
        "Because using larger squares is always more accurate.",
        "Because only square leaves can be measured."
      ],
      "correct": 1,
      "explanation": "Using the same size of square makes area comparisons fair."
    }
  ],
  "Measuring Volume": [
    {
      "id": "SCI-PM3-QUIZ-U06B-001-01",
      "type": "mc",
      "q": "What does the volume of a box tell us?",
      "options": [
        "How heavy the box is.",
        "How long one edge of the box is.",
        "How much of the table the box covers.",
        "How much space the box takes up."
      ],
      "correct": 3,
      "explanation": "Volume measures the space an object occupies."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-02",
      "type": "tf",
      "q": "Millilitres can measure the volume of a small amount of water.",
      "explanation": "Millilitres measure liquid volume.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-03",
      "type": "drop",
      "q": "We can measure liquid volume using a measuring ____.",
      "explanation": "A measuring cylinder has volume markings.",
      "expected": "cylinder",
      "options": [
        "cylinder",
        "ruler"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-04",
      "type": "mc",
      "q": "How should you look at the water level in a measuring cylinder?",
      "options": [
        "At eye level.",
        "From directly above.",
        "From far below.",
        "From the other side of the classroom."
      ],
      "correct": 0,
      "explanation": "Read the water level at eye level to avoid a wrong measurement."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-05",
      "type": "tf",
      "q": "A box 3 cm long, 2 cm wide and 4 cm high has a volume of 9 cm³.",
      "explanation": "Its volume is 3 × 2 × 4 = 24 cm³.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-06",
      "type": "drop",
      "q": "A cube with sides of 2 cm has a volume of ____ cm³.",
      "explanation": "2 × 2 × 2 = 8 cm³.",
      "expected": "8",
      "options": [
        "8",
        "6"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-07",
      "type": "mc",
      "q": "A stone is placed in water. The water level rises from 40 mL to 55 mL. What is the stone's volume?",
      "options": [
        "40 mL",
        "15 mL",
        "55 mL",
        "95 mL"
      ],
      "correct": 1,
      "explanation": "55 mL − 40 mL = 15 mL. This is also 15 cm³."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-08",
      "type": "tf",
      "q": "When a small stone is placed in water, the rise in water level can show its volume.",
      "explanation": "Water displacement can show the stone's volume.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-09",
      "type": "drop",
      "q": "One millilitre (1 mL) equals one cubic ____.",
      "explanation": "One millilitre equals one cubic centimetre (1 cm³).",
      "expected": "centimetre",
      "options": [
        "centimetre",
        "metre"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-10",
      "type": "mc",
      "q": "A container holds 250 mL of juice. How much does it hold in litres?",
      "options": [
        "2.5 L",
        "25 L",
        "0.25 L",
        "0.025 L"
      ],
      "correct": 2,
      "explanation": "1,000 mL make 1 L, so 250 mL = 0.25 L."
    }
  ],
  "Density": [
    {
      "id": "SCI-PM3-QUIZ-U07-001-01",
      "type": "mc",
      "q": "Which object is most likely to float on water?",
      "options": [
        "A dry cork",
        "A steel spoon",
        "A glass marble",
        "A metal coin"
      ],
      "correct": 0,
      "explanation": "Cork is typically less dense than water."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-02",
      "type": "tf",
      "q": "Density depends on how much mass is in a certain volume.",
      "explanation": "Density compares mass with volume.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-03",
      "type": "drop",
      "q": "A metal coin usually sinks because it is ____ than water.",
      "explanation": "Objects denser than water usually sink.",
      "expected": "denser",
      "options": [
        "denser",
        "less dense"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-04",
      "type": "mc",
      "q": "A cork is pushed under water and then released. What will it do?",
      "options": [
        "Sink to the bottom.",
        "Rise and float again.",
        "Stay where it was released.",
        "Dissolve into the water."
      ],
      "correct": 1,
      "explanation": "Cork is less dense than water, so it rises and floats."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-05",
      "type": "tf",
      "q": "A wooden raft can float on water.",
      "explanation": "Wood is usually less dense than water.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-06",
      "type": "drop",
      "q": "Adding enough salt to water makes the water ____.",
      "explanation": "Dissolved salt increases water's density.",
      "expected": "denser",
      "options": [
        "denser",
        "less dense"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-07",
      "type": "mc",
      "q": "Oil commonly forms a layer above water. What does that suggest?",
      "options": [
        "Oil is denser than water.",
        "Oil and water have exactly the same density.",
        "Oil is less dense than water",
        "Oil dissolves completely in water."
      ],
      "correct": 2,
      "explanation": "Oil typically floats above water because of its lower density."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-08",
      "type": "tf",
      "q": "When two blocks are the same size, the lighter block is always denser.",
      "explanation": "The heavier one has more mass in the same volume.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-09",
      "type": "drop",
      "q": "A piece of plastic that is less dense than water will usually ____.",
      "explanation": "An object less dense than water usually floats.",
      "expected": "float",
      "options": [
        "float",
        "sink"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-10",
      "type": "mc",
      "q": "Why is it often easier to float in seawater than in freshwater?",
      "options": [
        "Freshwater is always deeper.",
        "Salt removes the swimmer's weight.",
        "Seawater contains fewer dissolved materials.",
        "Seawater contains salt, making it denser."
      ],
      "correct": 3,
      "explanation": "Dissolved salt makes seawater denser and helps objects float."
    }
  ],
  "Acid and Alkali": [
    {
      "id": "SCI-PM3-QUIZ-U08-001-01",
      "type": "mc",
      "q": "What happens to blue litmus paper in an acidic solution?",
      "options": [
        "It stays blue.",
        "It turns red",
        "It turns yellow.",
        "It turns green."
      ],
      "correct": 1,
      "explanation": "Acids change blue litmus paper to red."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-02",
      "type": "tf",
      "q": "An alkaline liquid turns red litmus paper blue.",
      "explanation": "Red litmus changes to blue in an alkali.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-03",
      "type": "drop",
      "q": "Vinegar is an example of an ____ liquid.",
      "explanation": "Vinegar contains an acid.",
      "expected": "acidic",
      "options": [
        "acidic",
        "alkaline"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-04",
      "type": "mc",
      "q": "Which of these substances is usually alkaline?",
      "options": [
        "Lemon juice",
        "Orange juice",
        "Soap solution",
        "Vinegar"
      ],
      "correct": 2,
      "explanation": "Many soap solutions are alkaline."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-05",
      "type": "tf",
      "q": "A neutral liquid is neither acidic nor alkaline.",
      "explanation": "Neutral means neither acidic nor alkaline.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-06",
      "type": "drop",
      "q": "Distilled water is generally ____.",
      "explanation": "Pure distilled water is generally neutral.",
      "expected": "neutral",
      "options": [
        "neutral",
        "acidic"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-07",
      "type": "mc",
      "q": "Why do we use indicator paper to test an unknown liquid instead of tasting it?",
      "options": [
        "The liquid might look clear.",
        "Indicator paper always smells stronger.",
        "Every unknown liquid tastes sour.",
        "Tasting unknown liquids may be unsafe."
      ],
      "correct": 3,
      "explanation": "Indicator paper can help test acidity without tasting potentially harmful liquids."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-08",
      "type": "tf",
      "q": "A liquid that turns red litmus paper blue is acidic.",
      "explanation": "An alkali turns red litmus blue.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-09",
      "type": "drop",
      "q": "Neutral water does not ____ the colour of red or blue litmus paper.",
      "explanation": "Neutral water does not change either litmus colour.",
      "expected": "change",
      "options": [
        "change",
        "darken"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-10",
      "type": "mc",
      "q": "Which plant material can change colour in acids and alkalis?",
      "options": [
        "Purple cabbage juice",
        "Cooking oil",
        "Clear sugar water",
        "Plain salt water"
      ],
      "correct": 0,
      "explanation": "Purple cabbage juice contains natural colour pigments that react to acids and alkalis."
    }
  ],
  "The Solar System": [
    {
      "id": "SCI-PM3-QUIZ-U09-001-01",
      "type": "mc",
      "q": "Which star is at the centre of our Solar System?",
      "options": [
        "The Moon",
        "Earth",
        "The Sun",
        "Jupiter"
      ],
      "correct": 2,
      "explanation": "The planets orbit the Sun."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-02",
      "type": "tf",
      "q": "Mercury is the planet closest to the Sun.",
      "explanation": "Mercury is nearest to the Sun.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-03",
      "type": "drop",
      "q": "The third planet from the Sun is ____.",
      "explanation": "Earth is third from the Sun.",
      "expected": "Earth",
      "options": [
        "Earth",
        "Mars"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-04",
      "type": "mc",
      "q": "Which planet is the largest in our Solar System?",
      "options": [
        "Saturn",
        "Neptune",
        "Uranus",
        "Jupiter"
      ],
      "correct": 3,
      "explanation": "Jupiter is the largest planet."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-05",
      "type": "tf",
      "q": "Saturn is known for its large ring system.",
      "explanation": "Saturn has prominent rings.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-06",
      "type": "drop",
      "q": "The farthest of the eight planets from the Sun is ____.",
      "explanation": "Neptune is the eighth planet.",
      "expected": "Neptune",
      "options": [
        "Neptune",
        "Uranus"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-07",
      "type": "mc",
      "q": "What is the path a planet follows around the Sun called?",
      "options": [
        "An orbit",
        "An axis",
        "A ring",
        "A shadow"
      ],
      "correct": 0,
      "explanation": "A planet travels along an orbit around the Sun."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-08",
      "type": "tf",
      "q": "Neptune takes the shortest time to travel around the Sun.",
      "explanation": "Mercury has the shortest orbit time.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-09",
      "type": "drop",
      "q": "The planet known as the Red Planet is ____.",
      "explanation": "Mars looks reddish because of iron-rich dust.",
      "expected": "Mars",
      "options": [
        "Mars",
        "Venus"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-10",
      "type": "mc",
      "q": "Which of these is a natural satellite of Earth?",
      "options": [
        "Mars",
        "The Moon",
        "Saturn",
        "The Sun"
      ],
      "correct": 1,
      "explanation": "The Moon naturally orbits Earth."
    }
  ],
  "Pulleys and Machines": [
    {
      "id": "SCI-PM3-QUIZ-U10-001-01",
      "type": "mc",
      "q": "What is a pulley?",
      "options": [
        "A flat board used as a ramp.",
        "A bar that moves around a fixed point.",
        "A wheel used without any rope.",
        "A wheel with a groove for a rope."
      ],
      "correct": 3,
      "explanation": "A pulley has a grooved wheel that holds a rope."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-02",
      "type": "tf",
      "q": "A fixed pulley can change the direction of a pulling force.",
      "explanation": "A fixed pulley can let us pull down to lift something up.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-03",
      "type": "drop",
      "q": "A flagpole uses a ____ to raise and lower its flag.",
      "explanation": "Flagpoles commonly use pulleys.",
      "expected": "pulley",
      "options": [
        "pulley",
        "ruler"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-04",
      "type": "mc",
      "q": "When lifting a load with a fixed pulley, in which direction can the person pull?",
      "options": [
        "Downwards",
        "Only upwards",
        "Only sideways",
        "In a circle only"
      ],
      "correct": 0,
      "explanation": "Pulling down can raise the load."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-05",
      "type": "tf",
      "q": "The wheel of a pulley turns when the rope moves over it.",
      "explanation": "The grooved wheel turns with the rope.",
      "expected": true
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-06",
      "type": "drop",
      "q": "A bucket must be tied ____ to the rope before lifting it.",
      "explanation": "A load must be fastened securely before it is lifted.",
      "expected": "securely",
      "options": [
        "securely",
        "loosely"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-07",
      "type": "mc",
      "q": "Where might you find a pulley used to lift a bucket of water?",
      "options": [
        "Beside a classroom desk.",
        "At a well",
        "On a kitchen shelf.",
        "Inside a schoolbag."
      ],
      "correct": 1,
      "explanation": "A pulley can be used to lift a bucket from a well."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-08",
      "type": "tf",
      "q": "Using several pulleys always makes a heavy load even heavier.",
      "explanation": "Multiple pulleys can reduce the force needed to lift a heavy load.",
      "expected": false
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-09",
      "type": "drop",
      "q": "A ____ may use pulleys to lift construction materials.",
      "explanation": "Cranes use pulleys to lift heavy loads.",
      "expected": "crane",
      "options": [
        "crane",
        "thermometer"
      ]
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-10",
      "type": "mc",
      "q": "What should you check before using a model pulley?",
      "options": [
        "The rope is loose.",
        "The support is unstable.",
        "The rope and support are secure.",
        "The load hangs above other pupils."
      ],
      "correct": 2,
      "explanation": "Always check that the pulley, support and rope are secure before using it."
    }
  ]
} });


/* PM2 Korean and PM1 Malay revision quizzes. English is revealed after answering. */
Object.assign(exerciseBank, {
  "Korean": {
    "어휘": [
      {
        "type": "mc",
        "q": "다음 중 과일은 무엇인가요?",
        "options": [
          "사과",
          "책",
          "의자",
          "문"
        ],
        "correct": 0,
        "translation": {
          "question": "Which of these is a fruit?",
          "options": [
            "Apple",
            "Book",
            "Chair",
            "Door"
          ]
        },
        "explanation": "An apple is a fruit you can eat.",
        "id": "KOR-PM2-QUIZ-VOC-001-01"
      },
      {
        "type": "tf",
        "q": "고양이는 동물이에요.",
        "expected": true,
        "translation": {
          "question": "A cat is an animal.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "A cat is an animal, not a plant.",
        "id": "KOR-PM2-QUIZ-VOC-001-02"
      },
      {
        "type": "drop",
        "q": "물을 마실 때 ____을 사용해요.",
        "expected": "컵",
        "options": [
          "컵",
          "책"
        ],
        "translation": {
          "question": "We use a ____ to drink water.",
          "options": [
            "Cup",
            "Book"
          ]
        },
        "explanation": "We drink from a cup.",
        "id": "KOR-PM2-QUIZ-VOC-001-03"
      },
      {
        "type": "mc",
        "q": "다음 중 색깔을 나타내는 말은 무엇인가요?",
        "options": [
          "학교",
          "파란색",
          "연필",
          "가방"
        ],
        "correct": 1,
        "translation": {
          "question": "Which word names a colour?",
          "options": [
            "School",
            "Blue",
            "Pencil",
            "Bag"
          ]
        },
        "explanation": "Blue is a colour.",
        "id": "KOR-PM2-QUIZ-VOC-001-04"
      },
      {
        "type": "tf",
        "q": "책상은 먹는 음식이에요.",
        "expected": false,
        "translation": {
          "question": "A desk is something we eat.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "We use a desk for work, not for eating.",
        "id": "KOR-PM2-QUIZ-VOC-001-05"
      },
      {
        "type": "drop",
        "q": "글씨를 쓸 때 ____을 사용해요.",
        "expected": "연필",
        "options": [
          "연필",
          "우산"
        ],
        "translation": {
          "question": "We use a ____ to write.",
          "options": [
            "Pencil",
            "Umbrella"
          ]
        },
        "explanation": "We write with a pencil.",
        "id": "KOR-PM2-QUIZ-VOC-001-06"
      },
      {
        "type": "mc",
        "q": "다음 중 가족을 나타내는 말은 무엇인가요?",
        "options": [
          "친구",
          "엄마",
          "버스",
          "바나나"
        ],
        "correct": 1,
        "translation": {
          "question": "Which word means a family member?",
          "options": [
            "Friend",
            "Mother",
            "Bus",
            "Banana"
          ]
        },
        "explanation": "A mother is part of a family.",
        "id": "KOR-PM2-QUIZ-VOC-001-07"
      },
      {
        "type": "tf",
        "q": "하나는 숫자 1을 뜻해요.",
        "expected": true,
        "translation": {
          "question": "하나 means the number one.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "Hana means one when counting.",
        "id": "KOR-PM2-QUIZ-VOC-001-08"
      },
      {
        "type": "drop",
        "q": "추울 때 ____을 입어요.",
        "expected": "외투",
        "options": [
          "외투",
          "수영복"
        ],
        "translation": {
          "question": "We wear a ____ when it is cold.",
          "options": [
            "Coat",
            "Swimsuit"
          ]
        },
        "explanation": "A coat keeps us warm.",
        "id": "KOR-PM2-QUIZ-VOC-001-09"
      },
      {
        "type": "mc",
        "q": "다음 중 장소를 나타내는 말은 무엇인가요?",
        "options": [
          "달리다",
          "맛있다",
          "병원",
          "작다"
        ],
        "correct": 2,
        "translation": {
          "question": "Which word names a place?",
          "options": [
            "To run",
            "To be tasty",
            "Hospital",
            "To be small"
          ]
        },
        "explanation": "A hospital is a place where people get help when sick.",
        "id": "KOR-PM2-QUIZ-VOC-001-10"
      }
    ],
    "문법": [
      {
        "type": "mc",
        "q": "알맞은 문장을 고르세요.",
        "options": [
          "저는 학생이에요.",
          "저는 학생예요.",
          "저는 학생에요.",
          "저는 학생가요."
        ],
        "correct": 0,
        "translation": {
          "question": "Choose the correct sentence.",
          "options": [
            "I am a student.",
            "Incorrect ending for student.",
            "Incorrect ending for student.",
            "Incorrect ending for student."
          ]
        },
        "explanation": "Use 이에요 after 학생 to say 'is a student'.",
        "id": "KOR-PM2-QUIZ-GRM-001-01"
      },
      {
        "type": "tf",
        "q": "“저는”은 자기 자신을 말할 때 쓸 수 있어요.",
        "expected": true,
        "translation": {
          "question": "저는 can be used when talking about yourself.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "저는 is used when talking about yourself.",
        "id": "KOR-PM2-QUIZ-GRM-001-02"
      },
      {
        "type": "drop",
        "q": "저는 학교____ 가요.",
        "expected": "에",
        "options": [
          "에",
          "를"
        ],
        "translation": {
          "question": "I go ____ school.",
          "options": [
            "To (destination)",
            "Object marker"
          ]
        },
        "explanation": "에 tells us where someone is going.",
        "id": "KOR-PM2-QUIZ-GRM-001-03"
      },
      {
        "type": "mc",
        "q": "“이것은 ____.”에 알맞은 말을 고르세요.",
        "options": [
          "책이에요",
          "책예요",
          "책을요",
          "책가요"
        ],
        "correct": 0,
        "translation": {
          "question": "Choose the correct ending: 'This is a book.'",
          "options": [
            "It is a book.",
            "Incorrect ending",
            "Incorrect ending",
            "Incorrect ending"
          ]
        },
        "explanation": "Use 이에요 after 책 to say 'is a book'.",
        "id": "KOR-PM2-QUIZ-GRM-001-04"
      },
      {
        "type": "tf",
        "q": "“사과가 있어요.”는 사과가 없다는 뜻이에요.",
        "expected": false,
        "translation": {
          "question": "사과가 있어요 means there are no apples.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "있어요 means something is there.",
        "id": "KOR-PM2-QUIZ-GRM-001-05"
      },
      {
        "type": "drop",
        "q": "가방____ 있어요.",
        "expected": "이",
        "options": [
          "이",
          "가"
        ],
        "translation": {
          "question": "There is a bag. Choose the correct particle.",
          "options": [
            "Subject particle after a consonant",
            "Subject particle after a vowel"
          ]
        },
        "explanation": "가방 ends in a consonant, so we use 이.",
        "id": "KOR-PM2-QUIZ-GRM-001-06"
      },
      {
        "type": "mc",
        "q": "물어보는 문장은 무엇인가요?",
        "options": [
          "이것은 책이에요.",
          "어디에 가요?",
          "저는 밥을 먹어요.",
          "날씨가 좋아요."
        ],
        "correct": 1,
        "translation": {
          "question": "Which sentence asks a question?",
          "options": [
            "This is a book.",
            "Where are you going?",
            "I eat a meal.",
            "The weather is nice."
          ]
        },
        "explanation": "The question asks where someone is going.",
        "id": "KOR-PM2-QUIZ-GRM-001-07"
      },
      {
        "type": "tf",
        "q": "“학교에 가요.”는 학교로 간다는 뜻이에요.",
        "expected": true,
        "translation": {
          "question": "학교에 가요 means going to school.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "에 shows that school is the destination.",
        "id": "KOR-PM2-QUIZ-GRM-001-08"
      },
      {
        "type": "drop",
        "q": "저____ 학생이에요.",
        "expected": "는",
        "options": [
          "는",
          "를"
        ],
        "translation": {
          "question": "I am a student. Choose the correct particle.",
          "options": [
            "Topic particle",
            "Object particle"
          ]
        },
        "explanation": "저는 means 'I' when introducing yourself.",
        "id": "KOR-PM2-QUIZ-GRM-001-09"
      },
      {
        "type": "mc",
        "q": "친구가 오는 것을 바르게 나타낸 문장은 무엇인가요?",
        "options": [
          "친구가 와요.",
          "친구를 와요.",
          "친구에 와요.",
          "친구는가 와요."
        ],
        "correct": 0,
        "translation": {
          "question": "Which sentence correctly says 'A friend comes'?",
          "options": [
            "A friend comes.",
            "Incorrect object marker",
            "Incorrect destination marker",
            "Incorrect particle combination"
          ]
        },
        "explanation": "Use 가 with 친구 to say a friend is coming.",
        "id": "KOR-PM2-QUIZ-GRM-001-10"
      }
    ]
  },
  "Malay": {
    "Kosa Kata": [
      {
        "type": "mc",
        "q": "Yang manakah nama haiwan?",
        "options": [
          "Meja",
          "Kucing",
          "Buku",
          "Pintu"
        ],
        "correct": 1,
        "translation": {
          "question": "Which word names an animal?",
          "options": [
            "Table",
            "Cat",
            "Book",
            "Door"
          ]
        },
        "explanation": "A cat is an animal.",
        "id": "MAL-PM1-QUIZ-VOC-001-01"
      },
      {
        "type": "tf",
        "q": "Pisang ialah sejenis buah.",
        "expected": true,
        "translation": {
          "question": "A banana is a type of fruit.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "A banana is a fruit.",
        "id": "MAL-PM1-QUIZ-VOC-001-02"
      },
      {
        "type": "drop",
        "q": "Saya minum air menggunakan ____.",
        "expected": "cawan",
        "options": [
          "cawan",
          "kasut"
        ],
        "translation": {
          "question": "I drink water using a ____.",
          "options": [
            "Cup",
            "Shoes"
          ]
        },
        "explanation": "We use a cup to drink.",
        "id": "MAL-PM1-QUIZ-VOC-001-03"
      },
      {
        "type": "mc",
        "q": "Yang manakah warna?",
        "options": [
          "Kuning",
          "Sekolah",
          "Kereta",
          "Taman"
        ],
        "correct": 0,
        "translation": {
          "question": "Which word names a colour?",
          "options": [
            "Yellow",
            "School",
            "Car",
            "Park"
          ]
        },
        "explanation": "Yellow is a colour.",
        "id": "MAL-PM1-QUIZ-VOC-001-04"
      },
      {
        "type": "tf",
        "q": "Ayam ialah sejenis tumbuhan.",
        "expected": false,
        "translation": {
          "question": "A chicken is a type of plant.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "A chicken is an animal, not a plant.",
        "id": "MAL-PM1-QUIZ-VOC-001-05"
      },
      {
        "type": "drop",
        "q": "Saya menulis dengan ____.",
        "expected": "pensel",
        "options": [
          "pensel",
          "sudu"
        ],
        "translation": {
          "question": "I write with a ____.",
          "options": [
            "Pencil",
            "Spoon"
          ]
        },
        "explanation": "We write with a pencil.",
        "id": "MAL-PM1-QUIZ-VOC-001-06"
      },
      {
        "type": "mc",
        "q": "Yang manakah anggota badan?",
        "options": [
          "Hidung",
          "Bantal",
          "Pinggan",
          "Bakul"
        ],
        "correct": 0,
        "translation": {
          "question": "Which word names a body part?",
          "options": [
            "Nose",
            "Pillow",
            "Plate",
            "Basket"
          ]
        },
        "explanation": "We use our nose to smell.",
        "id": "MAL-PM1-QUIZ-VOC-001-07"
      },
      {
        "type": "tf",
        "q": "Satu ialah nombor 1.",
        "expected": true,
        "translation": {
          "question": "Satu is the number one.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "Satu means one.",
        "id": "MAL-PM1-QUIZ-VOC-001-08"
      },
      {
        "type": "drop",
        "q": "Saya tidur di atas ____.",
        "expected": "katil",
        "options": [
          "katil",
          "basikal"
        ],
        "translation": {
          "question": "I sleep on a ____.",
          "options": [
            "Bed",
            "Bicycle"
          ]
        },
        "explanation": "We sleep on a bed.",
        "id": "MAL-PM1-QUIZ-VOC-001-09"
      },
      {
        "type": "mc",
        "q": "Yang manakah tempat untuk belajar?",
        "options": [
          "Pasar",
          "Sekolah",
          "Dapur",
          "Pantai"
        ],
        "correct": 1,
        "translation": {
          "question": "Which place is used for learning?",
          "options": [
            "Market",
            "School",
            "Kitchen",
            "Beach"
          ]
        },
        "explanation": "We go to school to learn.",
        "id": "MAL-PM1-QUIZ-VOC-001-10"
      }
    ],
    "Tatabahasa": [
      {
        "type": "mc",
        "q": "Pilih ayat yang betul.",
        "options": [
          "Saya makan nasi.",
          "Saya nasi sedang makan.",
          "Saya makan sedang nasi.",
          "Makan sedang saya nasi."
        ],
        "correct": 0,
        "translation": {
          "question": "Choose the correctly ordered sentence.",
          "options": [
            "I eat rice.",
            "Incorrect word order",
            "Incorrect word order",
            "Incorrect word order"
          ]
        },
        "explanation": "Saya makan nasi is in the right word order.",
        "id": "MAL-PM1-QUIZ-GRM-001-01"
      },
      {
        "type": "tf",
        "q": "Perkataan “saya” digunakan untuk diri sendiri.",
        "expected": true,
        "translation": {
          "question": "The word saya refers to yourself.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "Saya is what you call yourself.",
        "id": "MAL-PM1-QUIZ-GRM-001-02"
      },
      {
        "type": "drop",
        "q": "Ali ____ buku.",
        "expected": "membaca",
        "options": [
          "membaca",
          "minum"
        ],
        "translation": {
          "question": "Ali ____ a book.",
          "options": [
            "Reads",
            "Drinks"
          ]
        },
        "explanation": "Ali can read a book.",
        "id": "MAL-PM1-QUIZ-GRM-001-03"
      },
      {
        "type": "mc",
        "q": "Pilih kata ganti nama diri untuk ramai orang.",
        "options": [
          "Dia",
          "Saya",
          "Mereka",
          "Awak"
        ],
        "correct": 2,
        "translation": {
          "question": "Choose the pronoun for several people.",
          "options": [
            "He or she",
            "I",
            "They",
            "You"
          ]
        },
        "explanation": "Mereka means more than one person.",
        "id": "MAL-PM1-QUIZ-GRM-001-04"
      },
      {
        "type": "tf",
        "q": "Ayat tanya biasanya diakhiri tanda soal (?).",
        "expected": true,
        "translation": {
          "question": "A question usually ends with a question mark (?).",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "Questions end with a question mark.",
        "id": "MAL-PM1-QUIZ-GRM-001-05"
      },
      {
        "type": "drop",
        "q": "Baju itu ____.",
        "expected": "merah",
        "options": [
          "merah",
          "membaca"
        ],
        "translation": {
          "question": "That shirt is ____.",
          "options": [
            "Red",
            "Reading"
          ]
        },
        "explanation": "Merah tells us the shirt's colour.",
        "id": "MAL-PM1-QUIZ-GRM-001-06"
      },
      {
        "type": "mc",
        "q": "Pilih perkataan yang sesuai. “Bola itu ____.”",
        "options": [
          "bulat",
          "berlari",
          "membaca",
          "tidur"
        ],
        "correct": 0,
        "translation": {
          "question": "Choose the suitable word: 'The ball is ____.'",
          "options": [
            "Round",
            "Running",
            "Reading",
            "Sleeping"
          ]
        },
        "explanation": "Bulat tells us the ball's shape.",
        "id": "MAL-PM1-QUIZ-GRM-001-07"
      },
      {
        "type": "tf",
        "q": "Perkataan “cantik” ialah kata kerja.",
        "expected": false,
        "translation": {
          "question": "The word cantik is a verb.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "Cantik describes how something looks.",
        "id": "MAL-PM1-QUIZ-GRM-001-08"
      },
      {
        "type": "drop",
        "q": "Ibu memasak ____ dapur.",
        "expected": "di",
        "options": [
          "di",
          "ke"
        ],
        "translation": {
          "question": "Mother cooks ____ the kitchen.",
          "options": [
            "In",
            "To"
          ]
        },
        "explanation": "Di tells us where Mum cooks.",
        "id": "MAL-PM1-QUIZ-GRM-001-09"
      },
      {
        "type": "mc",
        "q": "Pilih ayat tanya.",
        "options": [
          "Adik sedang tidur.",
          "Di manakah beg saya?",
          "Saya suka susu.",
          "Kereta itu biru."
        ],
        "correct": 1,
        "translation": {
          "question": "Choose the question sentence.",
          "options": [
            "My younger sibling is sleeping.",
            "Where is my bag?",
            "I like milk.",
            "That car is blue."
          ]
        },
        "explanation": "A question asks something and ends with ?.",
        "id": "MAL-PM1-QUIZ-GRM-001-10"
      }
    ]
  }
});


/* PM3 Malay new vocabulary practice sets, original questions and bilingual feedback. */
Object.assign(exerciseBank.Malay, {
  "Keluarga dan Rakan": [
    {
      "type": "mc",
      "q": "Siapakah ibu kepada ayah kita?",
      "options": [
        "Nenek",
        "Kakak",
        "Mak cik",
        "Adik"
      ],
      "correct": 0,
      "translation": {
        "question": "Who is our father's mother?",
        "options": [
          "Grandmother",
          "Older sister",
          "Aunt",
          "Younger sibling"
        ]
      },
      "explanation": "Your father's mother is your grandmother.",
      "id": "MAL-PM3-QUIZ-VOC-002-01"
    },
    {
      "type": "tf",
      "q": "Abang ialah saudara lelaki yang lebih tua.",
      "expected": true,
      "translation": {
        "question": "Abang is an older brother.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Abang means an older brother.",
      "id": "MAL-PM3-QUIZ-VOC-002-02"
    },
    {
      "type": "drop",
      "q": "Saya bermain dengan ____ di taman.",
      "expected": "kawan",
      "options": [
        "kawan",
        "nenek"
      ],
      "translation": {
        "question": "I play with my ____ at the park.",
        "options": [
          "Friend",
          "Grandmother"
        ]
      },
      "explanation": "A kawan is someone you can play with.",
      "id": "MAL-PM3-QUIZ-VOC-002-03"
    },
    {
      "type": "mc",
      "q": "Apakah panggilan untuk saudara perempuan yang lebih muda?",
      "options": [
        "Kakak",
        "Adik perempuan",
        "Ibu",
        "Nenek"
      ],
      "correct": 1,
      "translation": {
        "question": "What do we call a younger sister?",
        "options": [
          "Older sister",
          "Younger sister",
          "Mother",
          "Grandmother"
        ]
      },
      "explanation": "Adik perempuan means a younger sister.",
      "id": "MAL-PM3-QUIZ-VOC-002-04"
    },
    {
      "type": "tf",
      "q": "Datuk ialah bapa kepada ibu atau ayah kita.",
      "expected": true,
      "translation": {
        "question": "Datuk is the father of our mother or father.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Your parent's father is your grandfather.",
      "id": "MAL-PM3-QUIZ-VOC-002-05"
    },
    {
      "type": "drop",
      "q": "Bapa saya juga dipanggil ____.",
      "expected": "ayah",
      "options": [
        "ayah",
        "cucu"
      ],
      "translation": {
        "question": "My father is also called ____.",
        "options": [
          "Dad",
          "Grandchild"
        ]
      },
      "explanation": "Ayah is another word for Dad.",
      "id": "MAL-PM3-QUIZ-VOC-002-06"
    },
    {
      "type": "mc",
      "q": "Siapakah anak kepada anak kita?",
      "options": [
        "Cucu",
        "Sepupu",
        "Pak cik",
        "Kakak"
      ],
      "correct": 0,
      "translation": {
        "question": "Who is our child's child?",
        "options": [
          "Grandchild",
          "Cousin",
          "Uncle",
          "Older sister"
        ]
      },
      "explanation": "Your child's child is your grandchild.",
      "id": "MAL-PM3-QUIZ-VOC-002-07"
    },
    {
      "type": "tf",
      "q": "Sepupu ialah anak kepada datuk atau nenek kita.",
      "expected": false,
      "translation": {
        "question": "A cousin is the child of our grandfather or grandmother.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "A cousin is your aunt's or uncle's child.",
      "id": "MAL-PM3-QUIZ-VOC-002-08"
    },
    {
      "type": "drop",
      "q": "Kakak saya ialah saudara ____ yang lebih tua.",
      "expected": "perempuan",
      "options": [
        "perempuan",
        "lelaki"
      ],
      "translation": {
        "question": "My older sister is an older ____ sibling.",
        "options": [
          "Female",
          "Male"
        ]
      },
      "explanation": "Kakak means an older sister.",
      "id": "MAL-PM3-QUIZ-VOC-002-09"
    },
    {
      "type": "mc",
      "q": "Apakah panggilan untuk anak kepada pak cik kita?",
      "options": [
        "Cucu",
        "Sepupu",
        "Nenek",
        "Ibu"
      ],
      "correct": 1,
      "translation": {
        "question": "What do we call our uncle's child?",
        "options": [
          "Grandchild",
          "Cousin",
          "Grandmother",
          "Mother"
        ]
      },
      "explanation": "Your uncle's child is your cousin.",
      "id": "MAL-PM3-QUIZ-VOC-002-10"
    }
  ],
  "Makanan dan Minuman": [
    {
      "type": "mc",
      "q": "Yang manakah makanan yang dibuat daripada susu?",
      "options": [
        "Keju",
        "Roti",
        "Nasi",
        "Mi"
      ],
      "correct": 0,
      "translation": {
        "question": "Which food is made from milk?",
        "options": [
          "Cheese",
          "Bread",
          "Rice",
          "Noodles"
        ]
      },
      "explanation": "Cheese is made from milk.",
      "id": "MAL-PM3-QUIZ-VOC-003-01"
    },
    {
      "type": "tf",
      "q": "Air kosong ialah minuman tanpa gula tambahan.",
      "expected": true,
      "translation": {
        "question": "Plain water is a drink without added sugar.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Plain water has no added sugar.",
      "id": "MAL-PM3-QUIZ-VOC-003-02"
    },
    {
      "type": "drop",
      "q": "Saya makan sup menggunakan ____.",
      "expected": "sudu",
      "options": [
        "sudu",
        "garpu"
      ],
      "translation": {
        "question": "I eat soup using a ____.",
        "options": [
          "Spoon",
          "Fork"
        ]
      },
      "explanation": "A spoon is good for eating soup.",
      "id": "MAL-PM3-QUIZ-VOC-003-03"
    },
    {
      "type": "mc",
      "q": "Apakah nama waktu makan pada waktu pagi?",
      "options": [
        "Sarapan",
        "Makan malam",
        "Minum petang",
        "Makan tengah hari"
      ],
      "correct": 0,
      "translation": {
        "question": "What is the morning meal called?",
        "options": [
          "Breakfast",
          "Dinner",
          "Afternoon tea",
          "Lunch"
        ]
      },
      "explanation": "Breakfast is the meal we eat in the morning.",
      "id": "MAL-PM3-QUIZ-VOC-003-04"
    },
    {
      "type": "tf",
      "q": "Garam biasanya memberi rasa manis kepada makanan.",
      "expected": false,
      "translation": {
        "question": "Salt usually gives food a sweet taste.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Salt tastes salty, not sweet.",
      "id": "MAL-PM3-QUIZ-VOC-003-05"
    },
    {
      "type": "drop",
      "q": "Jus oren dibuat daripada buah ____.",
      "expected": "oren",
      "options": [
        "oren",
        "epal"
      ],
      "translation": {
        "question": "Orange juice is made from ____ fruit.",
        "options": [
          "Orange",
          "Apple"
        ]
      },
      "explanation": "Orange juice comes from oranges.",
      "id": "MAL-PM3-QUIZ-VOC-003-06"
    },
    {
      "type": "mc",
      "q": "Yang manakah digunakan untuk memotong makanan?",
      "options": [
        "Pisau",
        "Mangkuk",
        "Cawan",
        "Pinggan"
      ],
      "correct": 0,
      "translation": {
        "question": "Which item is used to cut food?",
        "options": [
          "Knife",
          "Bowl",
          "Cup",
          "Plate"
        ]
      },
      "explanation": "A knife is used for cutting.",
      "id": "MAL-PM3-QUIZ-VOC-003-07"
    },
    {
      "type": "tf",
      "q": "Sayur-sayuran boleh dimasak sebelum dimakan.",
      "expected": true,
      "translation": {
        "question": "Vegetables can be cooked before eating.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "We can cook vegetables before eating them.",
      "id": "MAL-PM3-QUIZ-VOC-003-08"
    },
    {
      "type": "drop",
      "q": "Saya menuang air ke dalam ____.",
      "expected": "gelas",
      "options": [
        "gelas",
        "pinggan"
      ],
      "translation": {
        "question": "I pour water into a ____.",
        "options": [
          "Glass",
          "Plate"
        ]
      },
      "explanation": "A glass can hold water.",
      "id": "MAL-PM3-QUIZ-VOC-003-09"
    },
    {
      "type": "mc",
      "q": "Yang manakah rasa buah limau?",
      "options": [
        "Masam",
        "Masin",
        "Pedas",
        "Pahit"
      ],
      "correct": 0,
      "translation": {
        "question": "What taste does a lime usually have?",
        "options": [
          "Sour",
          "Salty",
          "Spicy",
          "Bitter"
        ]
      },
      "explanation": "Limes usually taste sour.",
      "id": "MAL-PM3-QUIZ-VOC-003-10"
    }
  ],
  "Haiwan dan Tumbuhan": [
    {
      "type": "mc",
      "q": "Haiwan manakah boleh terbang dengan sayap?",
      "options": [
        "Burung merpati",
        "Ikan emas",
        "Kura-kura",
        "Kambing"
      ],
      "correct": 0,
      "translation": {
        "question": "Which animal can fly using wings?",
        "options": [
          "Pigeon",
          "Goldfish",
          "Tortoise",
          "Goat"
        ]
      },
      "explanation": "A pigeon uses its wings to fly.",
      "id": "MAL-PM3-QUIZ-VOC-004-01"
    },
    {
      "type": "tf",
      "q": "Ikan hidup di dalam air.",
      "expected": true,
      "translation": {
        "question": "Fish live in water.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Fish live in water and breathe through gills.",
      "id": "MAL-PM3-QUIZ-VOC-004-02"
    },
    {
      "type": "drop",
      "q": "Pokok menyerap air melalui ____.",
      "expected": "akar",
      "options": [
        "akar",
        "bunga"
      ],
      "translation": {
        "question": "A plant absorbs water through its ____.",
        "options": [
          "Roots",
          "Flower"
        ]
      },
      "explanation": "Roots take in water from the soil.",
      "id": "MAL-PM3-QUIZ-VOC-004-03"
    },
    {
      "type": "mc",
      "q": "Apakah bahagian tumbuhan yang biasanya berwarna hijau?",
      "options": [
        "Daun",
        "Akar",
        "Biji benih",
        "Batang kayu"
      ],
      "correct": 0,
      "translation": {
        "question": "Which plant part is usually green?",
        "options": [
          "Leaf",
          "Root",
          "Seed",
          "Woody stem"
        ]
      },
      "explanation": "Leaves are usually green.",
      "id": "MAL-PM3-QUIZ-VOC-004-04"
    },
    {
      "type": "tf",
      "q": "Rama-rama mempunyai enam kaki.",
      "expected": true,
      "translation": {
        "question": "A butterfly has six legs.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Butterflies have six legs because they are insects.",
      "id": "MAL-PM3-QUIZ-VOC-004-05"
    },
    {
      "type": "drop",
      "q": "Anak ayam keluar daripada ____.",
      "expected": "telur",
      "options": [
        "telur",
        "sarang"
      ],
      "translation": {
        "question": "A chick hatches from an ____.",
        "options": [
          "Egg",
          "Nest"
        ]
      },
      "explanation": "Chicks hatch from eggs.",
      "id": "MAL-PM3-QUIZ-VOC-004-06"
    },
    {
      "type": "mc",
      "q": "Haiwan manakah mempunyai belalai?",
      "options": [
        "Gajah",
        "Harimau",
        "Arnab",
        "Kuda"
      ],
      "correct": 0,
      "translation": {
        "question": "Which animal has a trunk?",
        "options": [
          "Elephant",
          "Tiger",
          "Rabbit",
          "Horse"
        ]
      },
      "explanation": "Elephants use their trunks to pick things up.",
      "id": "MAL-PM3-QUIZ-VOC-004-07"
    },
    {
      "type": "tf",
      "q": "Bunga ialah bahagian tumbuhan yang berada di bawah tanah.",
      "expected": false,
      "translation": {
        "question": "A flower is a plant part found underground.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Flowers grow above the soil; roots grow below.",
      "id": "MAL-PM3-QUIZ-VOC-004-08"
    },
    {
      "type": "drop",
      "q": "Lebah mengumpul ____ daripada bunga.",
      "expected": "nektar",
      "options": [
        "nektar",
        "madu"
      ],
      "translation": {
        "question": "Bees collect ____ from flowers.",
        "options": [
          "Nectar",
          "Honey"
        ]
      },
      "explanation": "Bees collect nectar and turn it into honey.",
      "id": "MAL-PM3-QUIZ-VOC-004-09"
    },
    {
      "type": "mc",
      "q": "Haiwan manakah biasanya bergerak dengan melompat?",
      "options": [
        "Katak",
        "Ular",
        "Siput",
        "Ikan"
      ],
      "correct": 0,
      "translation": {
        "question": "Which animal usually moves by hopping?",
        "options": [
          "Frog",
          "Snake",
          "Snail",
          "Fish"
        ]
      },
      "explanation": "Frogs use strong back legs to jump.",
      "id": "MAL-PM3-QUIZ-VOC-004-10"
    }
  ],
  "Tempat dan Perjalanan": [
    {
      "type": "mc",
      "q": "Di manakah kita membeli ubat daripada ahli farmasi?",
      "options": [
        "Farmasi",
        "Perpustakaan",
        "Pejabat pos",
        "Stesen bas"
      ],
      "correct": 0,
      "translation": {
        "question": "Where do we buy medicine from a pharmacist?",
        "options": [
          "Pharmacy",
          "Library",
          "Post office",
          "Bus station"
        ]
      },
      "explanation": "A pharmacy is where we get medicine.",
      "id": "MAL-PM3-QUIZ-VOC-005-01"
    },
    {
      "type": "tf",
      "q": "Perpustakaan ialah tempat untuk membaca dan meminjam buku.",
      "expected": true,
      "translation": {
        "question": "A library is a place to read and borrow books.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "We can read and borrow books at a library.",
      "id": "MAL-PM3-QUIZ-VOC-005-02"
    },
    {
      "type": "drop",
      "q": "Saya menaiki ____ untuk terbang ke negara lain.",
      "expected": "kapal terbang",
      "options": [
        "kapal terbang",
        "bas"
      ],
      "translation": {
        "question": "I take an ____ to fly to another country.",
        "options": [
          "Aeroplane",
          "Bus"
        ]
      },
      "explanation": "An aeroplane flies through the sky.",
      "id": "MAL-PM3-QUIZ-VOC-005-03"
    },
    {
      "type": "mc",
      "q": "Di manakah orang menunggu kereta api?",
      "options": [
        "Stesen kereta api",
        "Balai bomba",
        "Klinik",
        "Kedai buku"
      ],
      "correct": 0,
      "translation": {
        "question": "Where do people wait for trains?",
        "options": [
          "Train station",
          "Fire station",
          "Clinic",
          "Bookshop"
        ]
      },
      "explanation": "People wait for trains at train stations.",
      "id": "MAL-PM3-QUIZ-VOC-005-04"
    },
    {
      "type": "tf",
      "q": "Lampu isyarat membantu mengawal lalu lintas.",
      "expected": true,
      "translation": {
        "question": "Traffic lights help control traffic.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Traffic lights tell us when to stop or go.",
      "id": "MAL-PM3-QUIZ-VOC-005-05"
    },
    {
      "type": "drop",
      "q": "Kita melintas jalan di lintasan ____.",
      "expected": "belang",
      "options": [
        "belang",
        "bas"
      ],
      "translation": {
        "question": "We cross the road at a ____ crossing.",
        "options": [
          "Zebra",
          "Bus"
        ]
      },
      "explanation": "A zebra crossing helps people cross the road.",
      "id": "MAL-PM3-QUIZ-VOC-005-06"
    },
    {
      "type": "mc",
      "q": "Apakah kenderaan yang bergerak di atas landasan?",
      "options": [
        "Kereta api",
        "Motosikal",
        "Basikal",
        "Bot"
      ],
      "correct": 0,
      "translation": {
        "question": "Which vehicle travels on tracks?",
        "options": [
          "Train",
          "Motorcycle",
          "Bicycle",
          "Boat"
        ]
      },
      "explanation": "Trains travel on tracks.",
      "id": "MAL-PM3-QUIZ-VOC-005-07"
    },
    {
      "type": "tf",
      "q": "Pelabuhan ialah tempat kapal berlabuh.",
      "expected": true,
      "translation": {
        "question": "A harbour is a place where ships dock.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Ships stop at a harbour.",
      "id": "MAL-PM3-QUIZ-VOC-005-08"
    },
    {
      "type": "drop",
      "q": "Saya menghantar surat di ____.",
      "expected": "pejabat pos",
      "options": [
        "pejabat pos",
        "hospital"
      ],
      "translation": {
        "question": "I send a letter at the ____.",
        "options": [
          "Post office",
          "Hospital"
        ]
      },
      "explanation": "A post office is where we send letters.",
      "id": "MAL-PM3-QUIZ-VOC-005-09"
    },
    {
      "type": "mc",
      "q": "Di manakah kita boleh melihat banyak haiwan liar yang dijaga?",
      "options": [
        "Zoo",
        "Pasar raya",
        "Bank",
        "Stadium"
      ],
      "correct": 0,
      "translation": {
        "question": "Where can we see many wild animals being cared for?",
        "options": [
          "Zoo",
          "Supermarket",
          "Bank",
          "Stadium"
        ]
      },
      "explanation": "A zoo is a place where animals are cared for.",
      "id": "MAL-PM3-QUIZ-VOC-005-10"
    }
  ],
  "Barang dan Pakaian": [
    {
      "type": "mc",
      "q": "Apakah yang dipakai pada kaki sebelum kasut?",
      "options": [
        "Stoking",
        "Sarung tangan",
        "Topi",
        "Tali pinggang"
      ],
      "correct": 0,
      "translation": {
        "question": "What do we wear on our feet before shoes?",
        "options": [
          "Socks",
          "Gloves",
          "Hat",
          "Belt"
        ]
      },
      "explanation": "We wear socks inside shoes.",
      "id": "MAL-PM3-QUIZ-VOC-006-01"
    },
    {
      "type": "tf",
      "q": "Payung boleh melindungi kita daripada hujan.",
      "expected": true,
      "translation": {
        "question": "An umbrella can protect us from rain.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "An umbrella helps keep the rain off.",
      "id": "MAL-PM3-QUIZ-VOC-006-02"
    },
    {
      "type": "drop",
      "q": "Saya menyikat rambut dengan ____.",
      "expected": "sikat",
      "options": [
        "sikat",
        "berus gigi"
      ],
      "translation": {
        "question": "I comb my hair with a ____.",
        "options": [
          "Comb",
          "Toothbrush"
        ]
      },
      "explanation": "A comb helps tidy our hair.",
      "id": "MAL-PM3-QUIZ-VOC-006-03"
    },
    {
      "type": "mc",
      "q": "Apakah alat untuk melihat masa?",
      "options": [
        "Jam tangan",
        "Cermin",
        "Kunci",
        "Beg"
      ],
      "correct": 0,
      "translation": {
        "question": "Which item is used to tell the time?",
        "options": [
          "Watch",
          "Mirror",
          "Key",
          "Bag"
        ]
      },
      "explanation": "A watch tells us the time.",
      "id": "MAL-PM3-QUIZ-VOC-006-04"
    },
    {
      "type": "tf",
      "q": "Sarung tangan biasanya dipakai pada kepala.",
      "expected": false,
      "translation": {
        "question": "Gloves are usually worn on the head.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Gloves go on our hands, not our heads.",
      "id": "MAL-PM3-QUIZ-VOC-006-05"
    },
    {
      "type": "drop",
      "q": "Saya mengelap badan dengan ____ selepas mandi.",
      "expected": "tuala",
      "options": [
        "tuala",
        "selimut"
      ],
      "translation": {
        "question": "I dry my body with a ____ after bathing.",
        "options": [
          "Towel",
          "Blanket"
        ]
      },
      "explanation": "A towel helps dry our skin.",
      "id": "MAL-PM3-QUIZ-VOC-006-06"
    },
    {
      "type": "mc",
      "q": "Apakah barang yang digunakan untuk membuka kunci pintu?",
      "options": [
        "Anak kunci",
        "Pembaris",
        "Pemadam",
        "Penyepit"
      ],
      "correct": 0,
      "translation": {
        "question": "Which item unlocks a door?",
        "options": [
          "Key",
          "Ruler",
          "Eraser",
          "Tongs"
        ]
      },
      "explanation": "A key opens a lock.",
      "id": "MAL-PM3-QUIZ-VOC-006-07"
    },
    {
      "type": "tf",
      "q": "Bantal digunakan untuk menyokong kepala ketika tidur.",
      "expected": true,
      "translation": {
        "question": "A pillow supports the head when sleeping.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "A pillow supports our head in bed.",
      "id": "MAL-PM3-QUIZ-VOC-006-08"
    },
    {
      "type": "drop",
      "q": "Saya memakai ____ untuk melindungi kepala daripada panas matahari.",
      "expected": "topi",
      "options": [
        "topi",
        "stoking"
      ],
      "translation": {
        "question": "I wear a ____ to protect my head from the sun.",
        "options": [
          "Hat",
          "Socks"
        ]
      },
      "explanation": "A hat shades our head from the sun.",
      "id": "MAL-PM3-QUIZ-VOC-006-09"
    },
    {
      "type": "mc",
      "q": "Apakah alat untuk membersihkan lantai dengan menyapu?",
      "options": [
        "Penyapu",
        "Penyepit",
        "Penapis",
        "Pembuka botol"
      ],
      "correct": 0,
      "translation": {
        "question": "Which tool sweeps the floor?",
        "options": [
          "Broom",
          "Tongs",
          "Strainer",
          "Bottle opener"
        ]
      },
      "explanation": "A broom sweeps dirt from the floor.",
      "id": "MAL-PM3-QUIZ-VOC-006-10"
    }
  ]
});


/* PM3 Malay grammar practice sets, original questions and bilingual feedback. */
Object.assign(exerciseBank.Malay, {
  "Kata Nama": [
    {
      "type": "mc",
      "q": "Yang manakah kata nama bagi manusia?",
      "options": [
        "Doktor",
        "Berjalan",
        "Bersih",
        "Cepat"
      ],
      "correct": 0,
      "translation": {
        "question": "Which word is a noun for a person?",
        "options": [
          "Doctor",
          "Walking",
          "Clean",
          "Fast"
        ]
      },
      "explanation": "A doctor helps people when they are sick.",
      "id": "MAL-PM3-QUIZ-GRM-002-01"
    },
    {
      "type": "tf",
      "q": "Perkataan “rumah” ialah kata nama.",
      "expected": true,
      "translation": {
        "question": "The word rumah is a noun.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "A house is a place where people live.",
      "id": "MAL-PM3-QUIZ-GRM-002-02"
    },
    {
      "type": "drop",
      "q": "Perkataan “____” ialah nama seekor haiwan.",
      "expected": "arnab",
      "options": [
        "arnab",
        "berlari"
      ],
      "translation": {
        "question": "The word ____ is the name of an animal.",
        "options": [
          "Rabbit",
          "Running"
        ]
      },
      "explanation": "A rabbit is an animal. Running is an action.",
      "id": "MAL-PM3-QUIZ-GRM-002-03"
    },
    {
      "type": "mc",
      "q": "Yang manakah kata nama khas?",
      "options": [
        "Malaysia",
        "negara",
        "bandar",
        "sungai"
      ],
      "correct": 0,
      "translation": {
        "question": "Which is a proper noun?",
        "options": [
          "Malaysia",
          "Country",
          "City",
          "River"
        ]
      },
      "explanation": "Malaysia is the name of one country, so it begins with a capital letter.",
      "id": "MAL-PM3-QUIZ-GRM-002-04"
    },
    {
      "type": "tf",
      "q": "Kata nama boleh digunakan untuk menamakan tempat.",
      "expected": true,
      "translation": {
        "question": "A noun can be used to name a place.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "A school is a place, and nouns can name places.",
      "id": "MAL-PM3-QUIZ-GRM-002-05"
    },
    {
      "type": "drop",
      "q": "“____” ialah kata nama bagi tempat menyimpan buku.",
      "expected": "rak",
      "options": [
        "rak",
        "tinggi"
      ],
      "translation": {
        "question": "____ is a noun for something that holds books.",
        "options": [
          "Shelf",
          "Tall"
        ]
      },
      "explanation": "A shelf holds books. 'Tall' only describes its height.",
      "id": "MAL-PM3-QUIZ-GRM-002-06"
    },
    {
      "type": "mc",
      "q": "Dalam ayat “Mira memegang belon”, yang manakah kata nama bagi benda?",
      "options": [
        "belon",
        "memegang",
        "Mira memegang",
        "pegang"
      ],
      "correct": 0,
      "translation": {
        "question": "In 'Mira holds a balloon', which word is a noun for an object?",
        "options": [
          "Balloon",
          "Holds",
          "Mira holds",
          "Hold"
        ]
      },
      "explanation": "A balloon is the thing Mira is holding.",
      "id": "MAL-PM3-QUIZ-GRM-002-07"
    },
    {
      "type": "tf",
      "q": "Dalam ayat “Adik menari”, perkataan “menari” ialah kata nama.",
      "expected": false,
      "translation": {
        "question": "In 'Younger sibling dances', menari is a noun.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Dancing is an action, not the name of a thing.",
      "id": "MAL-PM3-QUIZ-GRM-002-08"
    },
    {
      "type": "drop",
      "q": "Nama hari “____” mesti bermula dengan huruf besar.",
      "expected": "Isnin",
      "options": [
        "Isnin",
        "isnin"
      ],
      "translation": {
        "question": "The day name ____ must begin with a capital letter.",
        "options": [
          "Monday (capitalised)",
          "Monday (lowercase)"
        ]
      },
      "explanation": "Day names like Isnin begin with a capital letter.",
      "id": "MAL-PM3-QUIZ-GRM-002-09"
    },
    {
      "type": "mc",
      "q": "Yang manakah nama sebuah sungai yang khusus?",
      "options": [
        "Sungai Pahang",
        "sungai",
        "air",
        "tebing"
      ],
      "correct": 0,
      "translation": {
        "question": "Which is the name of a specific river?",
        "options": [
          "Pahang River",
          "River",
          "Water",
          "Riverbank"
        ]
      },
      "explanation": "Sungai Pahang is one particular river, not just any river.",
      "id": "MAL-PM3-QUIZ-GRM-002-10"
    }
  ],
  "Kata Kerja": [
    {
      "type": "mc",
      "q": "Dalam ayat “Sara menyiram bunga”, perkataan manakah menunjukkan perbuatan?",
      "options": [
        "menyiram",
        "Sara",
        "bunga",
        "dalam"
      ],
      "correct": 0,
      "translation": {
        "question": "In 'Sara waters flowers', which word shows an action?",
        "options": [
          "Waters",
          "Sara",
          "Flowers",
          "In"
        ]
      },
      "explanation": "Menyiram is the action of watering.",
      "id": "MAL-PM3-QUIZ-GRM-003-01"
    },
    {
      "type": "tf",
      "q": "Perkataan “menyanyi” menunjukkan suatu perbuatan.",
      "expected": true,
      "translation": {
        "question": "The word menyanyi shows an action.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Menyanyi is something we do with our voice.",
      "id": "MAL-PM3-QUIZ-GRM-003-02"
    },
    {
      "type": "drop",
      "q": "Amir ____ bola ke arah rakannya.",
      "expected": "menendang",
      "options": [
        "menendang",
        "melukis"
      ],
      "translation": {
        "question": "Amir ____ the ball towards his friend.",
        "options": [
          "Kicks",
          "Draws"
        ]
      },
      "explanation": "Menendang means kicking with a foot.",
      "id": "MAL-PM3-QUIZ-GRM-003-03"
    },
    {
      "type": "mc",
      "q": "Apakah kata kerja yang sesuai untuk ayat “Nina ____ pintu”?",
      "options": [
        "menutup",
        "merah",
        "bulat",
        "cantik"
      ],
      "correct": 0,
      "translation": {
        "question": "Which verb fits 'Nina ____ the door'?",
        "options": [
          "Closes",
          "Red",
          "Round",
          "Beautiful"
        ]
      },
      "explanation": "Menutup means closing something.",
      "id": "MAL-PM3-QUIZ-GRM-003-04"
    },
    {
      "type": "tf",
      "q": "“Tidur” boleh digunakan sebagai kata kerja.",
      "expected": true,
      "translation": {
        "question": "Tidur can be used as a verb.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Tidur is the action of sleeping.",
      "id": "MAL-PM3-QUIZ-GRM-003-05"
    },
    {
      "type": "drop",
      "q": "Abang ____ gigi sebelum tidur.",
      "expected": "menggosok",
      "options": [
        "menggosok",
        "memotong"
      ],
      "translation": {
        "question": "Older brother ____ his teeth before sleeping.",
        "options": [
          "Brushes",
          "Cuts"
        ]
      },
      "explanation": "Menggosok gigi means brushing teeth.",
      "id": "MAL-PM3-QUIZ-GRM-003-06"
    },
    {
      "type": "mc",
      "q": "Apakah yang dilakukan oleh seseorang yang “berenang”?",
      "options": [
        "Bergerak di dalam air",
        "Berjalan di jalan raya",
        "Menulis pada kertas",
        "Duduk di atas kerusi"
      ],
      "correct": 0,
      "translation": {
        "question": "What does a person who berenang do?",
        "options": [
          "Moves through water",
          "Walks on a road",
          "Writes on paper",
          "Sits on a chair"
        ]
      },
      "explanation": "Berenang means moving through water.",
      "id": "MAL-PM3-QUIZ-GRM-003-07"
    },
    {
      "type": "tf",
      "q": "“Besar” ialah kata kerja yang menunjukkan perbuatan.",
      "expected": false,
      "translation": {
        "question": "Besar is an action verb.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Besar tells us the size, not an action.",
      "id": "MAL-PM3-QUIZ-GRM-003-08"
    },
    {
      "type": "drop",
      "q": "Ibu ____ pakaian yang sudah kotor.",
      "expected": "membasuh",
      "options": [
        "membasuh",
        "membaca"
      ],
      "translation": {
        "question": "Mother ____ the dirty clothes.",
        "options": [
          "Washes",
          "Reads"
        ]
      },
      "explanation": "Membasuh means washing something.",
      "id": "MAL-PM3-QUIZ-GRM-003-09"
    },
    {
      "type": "mc",
      "q": "Ayat manakah mempunyai kata kerja “melompat”?",
      "options": [
        "Kelinci melompat tinggi.",
        "Kelinci berbulu putih.",
        "Kelinci sangat kecil.",
        "Kelinci di tepi pagar."
      ],
      "correct": 0,
      "translation": {
        "question": "Which sentence contains the verb melompat?",
        "options": [
          "The rabbit jumps high.",
          "The rabbit has white fur.",
          "The rabbit is very small.",
          "The rabbit is by the fence."
        ]
      },
      "explanation": "Melompat is the action of jumping.",
      "id": "MAL-PM3-QUIZ-GRM-003-10"
    }
  ],
  "Kata Adjektif": [
    {
      "type": "mc",
      "q": "Perkataan manakah sesuai untuk menerangkan saiz gajah?",
      "options": [
        "besar",
        "makan",
        "berjalan",
        "kebun"
      ],
      "correct": 0,
      "translation": {
        "question": "Which word describes an elephant's size?",
        "options": [
          "Big",
          "Eat",
          "Walk",
          "Garden"
        ]
      },
      "explanation": "Besar tells us something is big.",
      "id": "MAL-PM3-QUIZ-GRM-004-01"
    },
    {
      "type": "tf",
      "q": "“Lembut” boleh digunakan untuk menerangkan bantal.",
      "expected": true,
      "translation": {
        "question": "Lembut can describe a pillow.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Lembut tells us something feels soft.",
      "id": "MAL-PM3-QUIZ-GRM-004-02"
    },
    {
      "type": "drop",
      "q": "Air batu terasa ____ apabila disentuh.",
      "expected": "sejuk",
      "options": [
        "sejuk",
        "panas"
      ],
      "translation": {
        "question": "Ice feels ____ when touched.",
        "options": [
          "Cold",
          "Hot"
        ]
      },
      "explanation": "Ice feels cold, so sejuk fits.",
      "id": "MAL-PM3-QUIZ-GRM-004-03"
    },
    {
      "type": "mc",
      "q": "Apakah kata adjektif bagi bunyi loceng yang kuat?",
      "options": [
        "nyaring",
        "perlahan",
        "pahit",
        "kasar"
      ],
      "correct": 0,
      "translation": {
        "question": "Which adjective can describe the loud ringing of a bell?",
        "options": [
          "Loud and clear",
          "Slow",
          "Bitter",
          "Rough"
        ]
      },
      "explanation": "Nyaring describes a high, clear sound.",
      "id": "MAL-PM3-QUIZ-GRM-004-04"
    },
    {
      "type": "tf",
      "q": "Kata adjektif boleh menerangkan bentuk sesuatu benda.",
      "expected": true,
      "translation": {
        "question": "Adjectives can describe an object's shape.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Words like lonjong tell us about shape.",
      "id": "MAL-PM3-QUIZ-GRM-004-05"
    },
    {
      "type": "drop",
      "q": "Langit pada waktu malam kelihatan ____.",
      "expected": "gelap",
      "options": [
        "gelap",
        "terang"
      ],
      "translation": {
        "question": "The sky at night looks ____.",
        "options": [
          "Dark",
          "Bright"
        ]
      },
      "explanation": "At night the sky is usually dark.",
      "id": "MAL-PM3-QUIZ-GRM-004-06"
    },
    {
      "type": "mc",
      "q": "Yang manakah kata adjektif bagi rasa gula?",
      "options": [
        "manis",
        "masam",
        "masin",
        "pedas"
      ],
      "correct": 0,
      "translation": {
        "question": "Which adjective describes the taste of sugar?",
        "options": [
          "Sweet",
          "Sour",
          "Salty",
          "Spicy"
        ]
      },
      "explanation": "Sugar tastes sweet.",
      "id": "MAL-PM3-QUIZ-GRM-004-07"
    },
    {
      "type": "tf",
      "q": "Dalam ayat “Kereta itu laju”, perkataan “laju” ialah kata kerja.",
      "expected": false,
      "translation": {
        "question": "In 'The car is fast', laju is a verb.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Laju tells us how fast the car goes.",
      "id": "MAL-PM3-QUIZ-GRM-004-08"
    },
    {
      "type": "drop",
      "q": "Bulu arnab itu sangat ____.",
      "expected": "halus",
      "options": [
        "halus",
        "keras"
      ],
      "translation": {
        "question": "The rabbit's fur is very ____.",
        "options": [
          "Fine and soft",
          "Hard"
        ]
      },
      "explanation": "Halus means the fur feels fine and soft.",
      "id": "MAL-PM3-QUIZ-GRM-004-09"
    },
    {
      "type": "mc",
      "q": "Perkataan manakah sesuai untuk menerangkan jalan yang tidak rata?",
      "options": [
        "berlubang",
        "ceria",
        "manis",
        "sunyi"
      ],
      "correct": 0,
      "translation": {
        "question": "Which word describes a road with holes?",
        "options": [
          "Full of holes",
          "Cheerful",
          "Sweet",
          "Quiet"
        ]
      },
      "explanation": "Berlubang means the road has holes.",
      "id": "MAL-PM3-QUIZ-GRM-004-10"
    }
  ],
  "Kata Ganti Nama": [
    {
      "type": "mc",
      "q": "Pilih kata ganti nama untuk bercakap dengan seorang kawan.",
      "options": [
        "kamu",
        "mereka",
        "dia",
        "kami"
      ],
      "correct": 0,
      "translation": {
        "question": "Choose the pronoun for speaking to one friend.",
        "options": [
          "You",
          "They",
          "He or she",
          "We (excluding you)"
        ]
      },
      "explanation": "Kamu means the person you're talking to.",
      "id": "MAL-PM3-QUIZ-GRM-005-01"
    },
    {
      "type": "tf",
      "q": "“Dia” boleh digunakan untuk merujuk kepada seorang lelaki atau perempuan.",
      "expected": true,
      "translation": {
        "question": "Dia can refer to a man or a woman.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Dia means one person, boy or girl.",
      "id": "MAL-PM3-QUIZ-GRM-005-02"
    },
    {
      "type": "drop",
      "q": "“____ suka membaca,” kata Lina tentang dirinya.",
      "expected": "Saya",
      "options": [
        "Saya",
        "Dia"
      ],
      "translation": {
        "question": "'____ like reading,' Lina says about herself.",
        "options": [
          "I",
          "He or she"
        ]
      },
      "explanation": "Saya means 'I' when talking about yourself.",
      "id": "MAL-PM3-QUIZ-GRM-005-03"
    },
    {
      "type": "mc",
      "q": "Dalam ayat “Farid sedang makan. ____ lapar”, kata ganti nama yang sesuai ialah?",
      "options": [
        "Dia",
        "Kita",
        "Mereka",
        "Awak"
      ],
      "correct": 0,
      "translation": {
        "question": "In 'Farid is eating. ____ is hungry', which pronoun fits?",
        "options": [
          "He",
          "We (including you)",
          "They",
          "You"
        ]
      },
      "explanation": "Dia can stand for Farid.",
      "id": "MAL-PM3-QUIZ-GRM-005-04"
    },
    {
      "type": "tf",
      "q": "“Mereka” digunakan untuk merujuk kepada lebih daripada seorang.",
      "expected": true,
      "translation": {
        "question": "Mereka refers to more than one person.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Mereka means a group of people.",
      "id": "MAL-PM3-QUIZ-GRM-005-05"
    },
    {
      "type": "drop",
      "q": "Ali dan Bakar sedang bermain. ____ gembira.",
      "expected": "Mereka",
      "options": [
        "Mereka",
        "Saya"
      ],
      "translation": {
        "question": "Ali and Bakar are playing. ____ are happy.",
        "options": [
          "They",
          "I"
        ]
      },
      "explanation": "Mereka means both Ali and Bakar.",
      "id": "MAL-PM3-QUIZ-GRM-005-06"
    },
    {
      "type": "mc",
      "q": "Manakah kata ganti nama yang merujuk kepada orang yang bercakap?",
      "options": [
        "aku",
        "dia",
        "kamu",
        "mereka"
      ],
      "correct": 0,
      "translation": {
        "question": "Which pronoun refers to the speaker?",
        "options": [
          "I",
          "He or she",
          "You",
          "They"
        ]
      },
      "explanation": "Aku is a casual way to say 'I'.",
      "id": "MAL-PM3-QUIZ-GRM-005-07"
    },
    {
      "type": "tf",
      "q": "“Awak” ialah kata ganti nama untuk orang yang sedang diajak bercakap.",
      "expected": true,
      "translation": {
        "question": "Awak is a pronoun for the person being spoken to.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Awak means the person you are talking to.",
      "id": "MAL-PM3-QUIZ-GRM-005-08"
    },
    {
      "type": "drop",
      "q": "“____ hendak ke taman?” tanya Aina kepada kawannya.",
      "expected": "Awak",
      "options": [
        "Awak",
        "Dia"
      ],
      "translation": {
        "question": "'____ want to go to the park?' Aina asks her friend.",
        "options": [
          "You",
          "He or she"
        ]
      },
      "explanation": "Awak fits when talking to your friend.",
      "id": "MAL-PM3-QUIZ-GRM-005-09"
    },
    {
      "type": "mc",
      "q": "Ali dan saya pergi bersama, tetapi kamu tidak ikut. Perkataan manakah menggantikan “Ali dan saya”?",
      "options": [
        "Kami",
        "Kita",
        "Mereka",
        "Dia"
      ],
      "correct": 0,
      "translation": {
        "question": "Ali and I go together, but you do not join us. Which pronoun replaces 'Ali and I'?",
        "options": [
          "We (excluding you)",
          "We (including you)",
          "They",
          "He or she"
        ]
      },
      "explanation": "Kami means 'we', but not the person you're talking to.",
      "id": "MAL-PM3-QUIZ-GRM-005-10"
    }
  ],
  "Ayat Mudah": [
    {
      "type": "mc",
      "q": "Ayat manakah bermula dengan huruf besar dan berakhir dengan noktah?",
      "options": [
        "Rina bermain bola.",
        "rina bermain bola.",
        "Rina bermain bola",
        "rina bermain bola"
      ],
      "correct": 0,
      "translation": {
        "question": "Which sentence starts with a capital letter and ends with a full stop?",
        "options": [
          "Rina plays ball.",
          "rina plays ball.",
          "Rina plays ball (no full stop)",
          "rina plays ball (no full stop)"
        ]
      },
      "explanation": "Start with a capital letter and finish with a full stop.",
      "id": "MAL-PM3-QUIZ-GRM-006-01"
    },
    {
      "type": "tf",
      "q": "Ayat “Buku itu baharu.” ialah ayat penyata.",
      "expected": true,
      "translation": {
        "question": "'That book is new.' is a statement.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "This sentence tells us something, so it is a statement.",
      "id": "MAL-PM3-QUIZ-GRM-006-02"
    },
    {
      "type": "drop",
      "q": "“Di manakah ____ saya?” ialah ayat tanya yang lengkap.",
      "expected": "kasut",
      "options": [
        "kasut",
        "merah"
      ],
      "translation": {
        "question": "'Where are my ____?' completes the question.",
        "options": [
          "Shoes",
          "Red"
        ]
      },
      "explanation": "Kasut means shoes. Merah means red. We are asking where our shoes are.",
      "id": "MAL-PM3-QUIZ-GRM-006-03"
    },
    {
      "type": "mc",
      "q": "Pilih ayat yang sesuai untuk meminta seseorang duduk.",
      "options": [
        "Sila duduk.",
        "Siapa duduk?",
        "Saya duduk.",
        "Dia sedang duduk."
      ],
      "correct": 0,
      "translation": {
        "question": "Which sentence politely asks someone to sit?",
        "options": [
          "Please sit.",
          "Who is sitting?",
          "I sit.",
          "He or she is sitting."
        ]
      },
      "explanation": "Sila duduk is a polite way to ask someone to sit.",
      "id": "MAL-PM3-QUIZ-GRM-006-04"
    },
    {
      "type": "tf",
      "q": "Ayat tanya boleh dimulakan dengan perkataan “mengapa”.",
      "expected": true,
      "translation": {
        "question": "A question can start with mengapa (why).",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "Mengapa starts a question asking why.",
      "id": "MAL-PM3-QUIZ-GRM-006-05"
    },
    {
      "type": "drop",
      "q": "“____ kamu menangis?” ialah soalan tentang sebab.",
      "expected": "Mengapa",
      "options": [
        "Mengapa",
        "Di mana"
      ],
      "translation": {
        "question": "'____ are you crying?' asks for a reason.",
        "options": [
          "Why",
          "Where"
        ]
      },
      "explanation": "Mengapa asks for a reason.",
      "id": "MAL-PM3-QUIZ-GRM-006-06"
    },
    {
      "type": "mc",
      "q": "Ayat manakah menunjukkan rasa terkejut?",
      "options": [
        "Wah, besarnya hadiah itu!",
        "Saya minum teh.",
        "Dia membawa buku.",
        "Bas itu berwarna biru."
      ],
      "correct": 0,
      "translation": {
        "question": "Which sentence shows surprise?",
        "options": [
          "Wow, that present is big!",
          "I drink tea.",
          "He or she carries a book.",
          "The bus is blue."
        ]
      },
      "explanation": "Wah! shows someone is surprised.",
      "id": "MAL-PM3-QUIZ-GRM-006-07"
    },
    {
      "type": "tf",
      "q": "Ayat “Tolong tutup pintu.” ialah ayat tanya.",
      "expected": false,
      "translation": {
        "question": "'Please close the door.' is a question.",
        "options": [
          "True",
          "False"
        ]
      },
      "explanation": "That sentence asks someone to close a door; it isn't a question.",
      "id": "MAL-PM3-QUIZ-GRM-006-08"
    },
    {
      "type": "drop",
      "q": "“Saya pergi ke sekolah ____ bas.”",
      "expected": "menaiki",
      "options": [
        "menaiki",
        "makan"
      ],
      "translation": {
        "question": "'I go to school by ____ a bus.'",
        "options": [
          "Riding",
          "Eating"
        ]
      },
      "explanation": "Menaiki means travelling on a bus or other vehicle.",
      "id": "MAL-PM3-QUIZ-GRM-006-09"
    },
    {
      "type": "mc",
      "q": "Ayat manakah mempunyai susunan kata yang betul?",
      "options": [
        "Adik minum susu.",
        "Susu adik sedang minum.",
        "Minum susu adik sedang.",
        "Adik susu minum sedang."
      ],
      "correct": 0,
      "translation": {
        "question": "Which sentence has the correct word order?",
        "options": [
          "Younger sibling drinks milk.",
          "Incorrect word order",
          "Incorrect word order",
          "Incorrect word order"
        ]
      },
      "explanation": "Adik minum susu puts the words in the right order.",
      "id": "MAL-PM3-QUIZ-GRM-006-10"
    }
  ]
});
