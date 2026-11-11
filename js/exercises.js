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
  "Unit 2 - Basic Operations": [
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
  "Unit 3 - Fractions, Decimals and Percentages": [
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
  "Unit 4 - Money": [
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
  "Unit 5 - Time": [
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
  "Unit 6 - Measurement": [
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
  "Unit 7 - Shapes": [
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
  "Unit 8 - Location": [
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
  "Unit 9 - Data Management": [
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
      "type": "mc",
      "q": "A pupil groups leaves by their shapes. Which skill is used?",
      "options": [
        "Communicating",
        "Predicting",
        "Measuring",
        "Classifying"
      ],
      "correct": 3,
      "explanation": "Classifying means grouping things by shared characteristics."
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-03",
      "type": "mc",
      "q": "Which tool is best for timing a short running race?",
      "options": [
        "Ruler",
        "Measuring cylinder",
        "Stopwatch",
        "Hand lens"
      ],
      "correct": 2,
      "explanation": "A stopwatch measures elapsed time."
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-04",
      "type": "mc",
      "q": "A wilted plant has dry soil. Which statement is an inference?",
      "options": [
        "Its leaves are yellow.",
        "It may not have received enough water.",
        "The soil feels dry.",
        "Its stem bends down."
      ],
      "correct": 1,
      "explanation": "An inference offers a reasonable explanation for an observation."
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-05",
      "type": "mc",
      "q": "A ball rolls towards a slope. What is a scientific prediction?",
      "options": [
        "A statement about what the ball may do next",
        "A drawing of the ball's colour",
        "The exact length of the ball",
        "A list of the ball's parts"
      ],
      "correct": 0,
      "explanation": "A prediction describes an expected event based on evidence."
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-06",
      "type": "mc",
      "q": "A pupil shows the class results in a bar chart. Which skill is demonstrated?",
      "options": [
        "Smelling",
        "Estimating",
        "Separating",
        "Communicating"
      ],
      "correct": 3,
      "explanation": "Charts are one way to communicate results."
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
      "type": "mc",
      "q": "Why should we look straight at a ruler's scale when reading it?",
      "options": [
        "To make the ruler longer",
        "To avoid an incorrect reading from an angle",
        "To change centimetres into metres",
        "To make the pencil shorter"
      ],
      "correct": 1,
      "explanation": "Eye position affects the accuracy of scale readings."
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-09",
      "type": "mc",
      "q": "What should a science sketch of a specimen include?",
      "options": [
        "Clear and accurate labels",
        "Decorative glitter",
        "An imagined colour only",
        "A made-up measurement"
      ],
      "correct": 0,
      "explanation": "Scientific sketches should be clear, accurate, and labelled."
    },
    {
      "id": "SCI-PM3-QUIZ-U01-001-10",
      "type": "mc",
      "q": "After using a beaker, what should pupils do before storing it?",
      "options": [
        "Leave liquid inside",
        "Put it away while dirty",
        "Throw it into a bin",
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
        "Mix every chemical on the table",
        "Listen to the teacher's instructions",
        "Taste an unknown liquid",
        "Run around the room"
      ],
      "correct": 1,
      "explanation": "Following the teacher's instructions helps prevent accidents."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-02",
      "type": "mc",
      "q": "What should a pupil do if a glass container breaks?",
      "options": [
        "Tell the teacher immediately",
        "Pick up shards with bare hands",
        "Hide the broken glass",
        "Kick the pieces under a desk"
      ],
      "correct": 0,
      "explanation": "The teacher should handle broken glass safely."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-03",
      "type": "mc",
      "q": "Which action is safe when carrying glass apparatus?",
      "options": [
        "Swing it while walking",
        "Throw it to a friend",
        "Hold it only by the rim when full",
        "Carry it carefully with both hands when needed"
      ],
      "correct": 3,
      "explanation": "Glass apparatus must be carried carefully."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-04",
      "type": "mc",
      "q": "Why should pupils never taste substances in a science room?",
      "options": [
        "They are always salty",
        "They are always hot",
        "They may be harmful",
        "They will stain the table"
      ],
      "correct": 2,
      "explanation": "Unknown substances can be unsafe to consume."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-05",
      "type": "mc",
      "q": "What is the correct action after spilling a liquid during an experiment?",
      "options": [
        "Walk away silently",
        "Inform the teacher and follow instructions",
        "Leave the spill for the next class",
        "Touch it to find out what it is"
      ],
      "correct": 1,
      "explanation": "Spills should be reported and cleaned using safe instructions."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-06",
      "type": "mc",
      "q": "Which behaviour is appropriate during an experiment?",
      "options": [
        "Work calmly and carefully",
        "Push classmates near the apparatus",
        "Play chase around the benches",
        "Point sharp tools at friends"
      ],
      "correct": 0,
      "explanation": "Careful behaviour reduces the risk of injury."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-07",
      "type": "mc",
      "q": "If a pupil is unsure how to use an apparatus, what should they do?",
      "options": [
        "Try a random method",
        "Let a friend guess",
        "Use it as a toy",
        "Ask the teacher for help"
      ],
      "correct": 3,
      "explanation": "Ask for guidance before using unfamiliar equipment."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-08",
      "type": "mc",
      "q": "Where should unused science apparatus be kept?",
      "options": [
        "On the floor near the door",
        "At the edge of a desk",
        "In its proper storage place",
        "Inside a school bag"
      ],
      "correct": 2,
      "explanation": "Apparatus belongs in designated storage areas."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-09",
      "type": "mc",
      "q": "Which action helps keep a science room safe for others?",
      "options": [
        "Block the doorway with bags",
        "Keep the work area tidy",
        "Leave tools on the floor",
        "Place wet equipment on electrical sockets"
      ],
      "correct": 1,
      "explanation": "A tidy work area reduces accidents."
    },
    {
      "id": "SCI-PM3-QUIZ-U02-001-10",
      "type": "mc",
      "q": "What should pupils do after finishing an investigation?",
      "options": [
        "Clean the workplace and wash their hands",
        "Leave all apparatus scattered",
        "Taste leftover mixtures",
        "Run out before packing up"
      ],
      "correct": 0,
      "explanation": "Cleaning up and washing hands are good science-room practices."
    }
  ],
  "Teeth and Dental Care": [
    {
      "id": "SCI-PM3-QUIZ-U03A-001-01",
      "type": "mc",
      "q": "Which type of tooth is mainly used to cut food?",
      "options": [
        "Molar",
        "Premolar",
        "Incisor",
        "Wisdom tooth"
      ],
      "correct": 2,
      "explanation": "The sharp-edged incisors bite and cut food."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-02",
      "type": "mc",
      "q": "What is the main job of canine teeth?",
      "options": [
        "Filtering blood",
        "Tearing food",
        "Producing saliva",
        "Measuring food"
      ],
      "correct": 1,
      "explanation": "Canine teeth help tear food."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-03",
      "type": "mc",
      "q": "Which teeth have broad surfaces for grinding food?",
      "options": [
        "Molars",
        "Incisors",
        "Canines",
        "Baby incisors only"
      ],
      "correct": 0,
      "explanation": "Molars grind food into smaller pieces."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-04",
      "type": "mc",
      "q": "What is the hard outermost layer of a tooth called?",
      "options": [
        "Gum",
        "Pulp",
        "Root",
        "Enamel"
      ],
      "correct": 3,
      "explanation": "Enamel covers the outside of the tooth's crown."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-05",
      "type": "mc",
      "q": "Where are nerves and blood vessels found inside a tooth?",
      "options": [
        "Enamel",
        "Toothbrush",
        "Pulp",
        "Tongue"
      ],
      "correct": 2,
      "explanation": "The pulp contains nerves and blood vessels."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-06",
      "type": "mc",
      "q": "What are the first teeth that children grow called?",
      "options": [
        "Permanent molars",
        "Milk teeth",
        "Artificial teeth",
        "Adult wisdom teeth"
      ],
      "correct": 1,
      "explanation": "Milk teeth are the first set of teeth."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-07",
      "type": "mc",
      "q": "Why should children look after milk teeth?",
      "options": [
        "They help chewing and speech before permanent teeth appear",
        "They never fall out",
        "They cannot decay",
        "They are made of metal"
      ],
      "correct": 0,
      "explanation": "Milk teeth have important functions even though they are temporary."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-08",
      "type": "mc",
      "q": "Which habit helps prevent tooth decay?",
      "options": [
        "Sleep with sugary sweets in the mouth",
        "Avoid cleaning between teeth",
        "Share a dirty toothbrush",
        "Brush teeth regularly with fluoride toothpaste"
      ],
      "correct": 3,
      "explanation": "Regular brushing removes plaque and protects teeth."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-09",
      "type": "mc",
      "q": "Why is it wise to limit sugary snacks and drinks?",
      "options": [
        "Sugar replaces enamel",
        "Sugar makes all teeth stronger",
        "Frequent sugar supports tooth decay",
        "Sugar cleans the mouth"
      ],
      "correct": 2,
      "explanation": "Bacteria use sugar and can produce acids that damage teeth."
    },
    {
      "id": "SCI-PM3-QUIZ-U03A-001-10",
      "type": "mc",
      "q": "Who should examine a painful or decaying tooth?",
      "options": [
        "Tailor",
        "Dentist",
        "Astronaut",
        "Mechanic"
      ],
      "correct": 1,
      "explanation": "Dentists examine and treat dental problems."
    }
  ],
  "Food and Digestion": [
    {
      "id": "SCI-PM3-QUIZ-U03B-001-01",
      "type": "mc",
      "q": "Which food class mainly supplies energy for daily activities?",
      "options": [
        "Vitamins",
        "Minerals",
        "Water",
        "Carbohydrates"
      ],
      "correct": 3,
      "explanation": "Carbohydrates are a major energy source."
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-02",
      "type": "mc",
      "q": "Which nutrient is especially important for growth and repairing body tissues?",
      "options": [
        "Fibre",
        "Water",
        "Protein",
        "Salt"
      ],
      "correct": 2,
      "explanation": "Proteins help build and repair body tissues."
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-03",
      "type": "mc",
      "q": "What is a balanced diet?",
      "options": [
        "Eating only rice at every meal",
        "Eating suitable amounts from different food groups",
        "Skipping all vegetables",
        "Eating sweets instead of meals"
      ],
      "correct": 1,
      "explanation": "A balanced diet contains a variety of nutrients in appropriate amounts."
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
      "type": "mc",
      "q": "What is the tube that carries swallowed food from mouth to stomach called?",
      "options": [
        "Windpipe",
        "Nostril",
        "Blood vessel",
        "Oesophagus"
      ],
      "correct": 3,
      "explanation": "The oesophagus moves food to the stomach."
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-06",
      "type": "mc",
      "q": "Which organ churns food and mixes it with digestive juices?",
      "options": [
        "Heart",
        "Kidney",
        "Stomach",
        "Lung"
      ],
      "correct": 2,
      "explanation": "The stomach churns food and mixes it with digestive juices."
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
      "type": "mc",
      "q": "What is one main role of the large intestine?",
      "options": [
        "Absorb water from undigested material",
        "Bite food into pieces",
        "Pump blood",
        "Carry oxygen into the lungs"
      ],
      "correct": 0,
      "explanation": "The large intestine absorbs water."
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-09",
      "type": "mc",
      "q": "Why is dietary fibre useful?",
      "options": [
        "It turns into teeth",
        "It replaces all proteins",
        "It stops the stomach from working",
        "It helps food waste move through the digestive system"
      ],
      "correct": 3,
      "explanation": "Fibre supports healthy bowel movement."
    },
    {
      "id": "SCI-PM3-QUIZ-U03B-001-10",
      "type": "mc",
      "q": "Which habit may disturb comfortable digestion?",
      "options": [
        "Eating slowly",
        "Chewing food thoroughly",
        "Rushing while eating and not chewing well",
        "Drinking enough water"
      ],
      "correct": 2,
      "explanation": "Eating too quickly can cause discomfort and poor chewing."
    }
  ],
  "Animal Eating Habits": [
    {
      "id": "SCI-PM3-QUIZ-U04-001-01",
      "type": "mc",
      "q": "An animal that eats mainly plants is called a ...",
      "options": [
        "Herbivore",
        "Carnivore",
        "Omnivore",
        "Scavenger"
      ],
      "correct": 0,
      "explanation": "Herbivores feed on plant material."
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-02",
      "type": "mc",
      "q": "What do we call an animal that eats other animals?",
      "options": [
        "Herbivore",
        "Producer",
        "Pollinator",
        "Carnivore"
      ],
      "correct": 3,
      "explanation": "Carnivores feed on other animals."
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-03",
      "type": "mc",
      "q": "Which animal is an omnivore?",
      "options": [
        "Cow",
        "Goat",
        "Chicken",
        "Lion"
      ],
      "correct": 2,
      "explanation": "Chickens eat both plant material and small animals."
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
      "type": "mc",
      "q": "Which teeth are especially useful for a cow grinding grass?",
      "options": [
        "Broad molars",
        "Pointed canines only",
        "Needle-like fangs",
        "No teeth at all"
      ],
      "correct": 0,
      "explanation": "Broad molars help herbivores grind plant material."
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-06",
      "type": "mc",
      "q": "A bird eats seeds and insects. How should its eating habit be classified?",
      "options": [
        "Strictly herbivorous",
        "Strictly carnivorous",
        "It does not eat",
        "Omnivorous"
      ],
      "correct": 3,
      "explanation": "Eating both plants and animals is an omnivorous habit."
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
      "type": "mc",
      "q": "Why do different animals have different types of teeth?",
      "options": [
        "Their teeth all do the same job",
        "Their teeth suit the foods they eat",
        "Teeth are used only to make sounds",
        "Their teeth decide the weather"
      ],
      "correct": 1,
      "explanation": "Dentition is linked to eating habits."
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-09",
      "type": "mc",
      "q": "An animal's food source changes with its surroundings. What might it do?",
      "options": [
        "Adjust the kinds of food it eats",
        "Stop needing food forever",
        "Immediately grow new wings",
        "Become a plant"
      ],
      "correct": 0,
      "explanation": "Some animals change their eating habits when food availability changes."
    },
    {
      "id": "SCI-PM3-QUIZ-U04-001-10",
      "type": "mc",
      "q": "Which evidence is most useful for studying an animal's eating habit?",
      "options": [
        "Only measuring its shadow",
        "Only checking the colour of its fur",
        "Only counting its legs",
        "Observing what it actually eats"
      ],
      "correct": 3,
      "explanation": "Direct observations of food are useful evidence of eating habits."
    }
  ],
  "Plant Reproduction": [
    {
      "id": "SCI-PM3-QUIZ-U05-001-01",
      "type": "mc",
      "q": "What is the main purpose of reproduction in plants?",
      "options": [
        "To make all leaves blue",
        "To produce new plants of the same kind",
        "To stop growth completely",
        "To remove roots"
      ],
      "correct": 1,
      "explanation": "Reproduction enables plants to produce offspring."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-02",
      "type": "mc",
      "q": "Which part of a flowering plant usually develops into seeds after fertilisation?",
      "options": [
        "Ovules inside the flower",
        "Stem surface",
        "Root hairs",
        "Old bark"
      ],
      "correct": 0,
      "explanation": "Fertilised ovules develop into seeds."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-03",
      "type": "mc",
      "q": "Which plant is commonly grown from stem cuttings?",
      "options": [
        "Paddy rice",
        "Maize",
        "Coconut",
        "Rose"
      ],
      "correct": 3,
      "explanation": "Rose plants can reproduce using stem cuttings."
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
      "type": "mc",
      "q": "Which plant is commonly reproduced using runners?",
      "options": [
        "Coconut palm",
        "Strawberry",
        "Pine tree",
        "Hibiscus seed"
      ],
      "correct": 1,
      "explanation": "Strawberry plants can form new plants along runners."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-06",
      "type": "mc",
      "q": "How can bryophyllum produce new plants?",
      "options": [
        "Plantlets grow along its leaf edges",
        "Its flowers turn into insects",
        "Its roots become stones",
        "Its stem becomes metal"
      ],
      "correct": 0,
      "explanation": "Bryophyllum leaves can grow plantlets along their margins."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-07",
      "type": "mc",
      "q": "What is one reason farmers use stem cuttings?",
      "options": [
        "To make plants stop absorbing water",
        "To remove sunlight from farms",
        "To stop every plant from flowering",
        "To grow a new plant with the parent plant's traits"
      ],
      "correct": 3,
      "explanation": "Stem cuttings produce new plants vegetatively."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-08",
      "type": "mc",
      "q": "Why is plant reproduction important to living things?",
      "options": [
        "It makes every habitat dry",
        "It eliminates all food chains",
        "It helps maintain plant populations",
        "It prevents oxygen production"
      ],
      "correct": 2,
      "explanation": "New plants replace older plants and help sustain ecosystems."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-09",
      "type": "mc",
      "q": "Which is an example of reproduction by spores?",
      "options": [
        "Mango tree",
        "Fern",
        "Bean plant",
        "Papaya tree"
      ],
      "correct": 1,
      "explanation": "Ferns reproduce using spores."
    },
    {
      "id": "SCI-PM3-QUIZ-U05-001-10",
      "type": "mc",
      "q": "What part of a ginger plant is used to grow a new ginger plant?",
      "options": [
        "Rhizome",
        "Fruit skin",
        "Flower petal",
        "Thorn"
      ],
      "correct": 0,
      "explanation": "Ginger can reproduce through its underground rhizome."
    }
  ],
  "Measuring Area": [
    {
      "id": "SCI-PM3-QUIZ-U06A-001-01",
      "type": "mc",
      "q": "What does the area of a flat surface describe?",
      "options": [
        "How heavy it is",
        "How loud it sounds",
        "How much surface it covers",
        "How long it lasts"
      ],
      "correct": 2,
      "explanation": "Area measures the size of a surface."
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-02",
      "type": "mc",
      "q": "Which unit is suitable for a schoolbook cover's area?",
      "options": [
        "Litres",
        "Square centimetres",
        "Kilograms",
        "Seconds"
      ],
      "correct": 1,
      "explanation": "Surface area can be measured in cm²."
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-03",
      "type": "mc",
      "q": "A rectangle is 4 cm long and 3 cm wide. What is its area?",
      "options": [
        "12 cm²",
        "7 cm²",
        "14 cm²",
        "24 cm²"
      ],
      "correct": 0,
      "explanation": "A rectangle's area is length multiplied by width: 4 × 3 = 12 cm²."
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
      "type": "mc",
      "q": "A grid contains 8 complete 1 cm² squares inside a shape. What is their total area?",
      "options": [
        "1 cm²",
        "16 cm²",
        "8 cm²",
        "4 cm²"
      ],
      "correct": 2,
      "explanation": "Eight full unit squares cover 8 cm²."
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-06",
      "type": "mc",
      "q": "How can pupils estimate the area of an irregular leaf shape?",
      "options": [
        "Weigh the leaf on a scale",
        "Count full and approximate partial squares on grid paper",
        "Time how long it falls",
        "Count its veins only"
      ],
      "correct": 1,
      "explanation": "Grid squares can be used to estimate irregular areas."
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
      "type": "mc",
      "q": "What is the difference between length and area?",
      "options": [
        "Both measure temperature",
        "Area is always in seconds",
        "Length measures only liquids",
        "Length measures distance; area measures surface covered"
      ],
      "correct": 3,
      "explanation": "Length has linear units, while area has square units."
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-09",
      "type": "mc",
      "q": "Which shape has an area of 9 cm²?",
      "options": [
        "A 2 cm by 3 cm rectangle",
        "A 4 cm by 2 cm rectangle",
        "A 3 cm by 3 cm square",
        "A 5 cm by 1 cm rectangle"
      ],
      "correct": 2,
      "explanation": "3 × 3 = 9 cm²."
    },
    {
      "id": "SCI-PM3-QUIZ-U06A-001-10",
      "type": "mc",
      "q": "Why should square units be the same size when comparing two areas?",
      "options": [
        "To make the ruler bend",
        "To make the comparison fair",
        "To increase the number of corners",
        "To change centimetres to litres"
      ],
      "correct": 1,
      "explanation": "Consistent unit squares make area measurements comparable."
    }
  ],
  "Measuring Volume": [
    {
      "id": "SCI-PM3-QUIZ-U06B-001-01",
      "type": "mc",
      "q": "What does volume measure?",
      "options": [
        "The colour of a liquid",
        "The mass of an object only",
        "How long an event lasts",
        "The space an object or substance occupies"
      ],
      "correct": 3,
      "explanation": "Volume describes occupied space."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-02",
      "type": "mc",
      "q": "Which unit is commonly used to measure a small amount of water?",
      "options": [
        "Centimetre",
        "Gram",
        "Millilitre",
        "Minute"
      ],
      "correct": 2,
      "explanation": "Small liquid volumes are measured in millilitres."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-03",
      "type": "mc",
      "q": "Which tool measures the volume of a liquid most accurately?",
      "options": [
        "Ruler",
        "Measuring cylinder",
        "Thermometer",
        "Stopwatch"
      ],
      "correct": 1,
      "explanation": "A measuring cylinder has volume markings."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-04",
      "type": "mc",
      "q": "How should a pupil read liquid volume in a measuring cylinder?",
      "options": [
        "At eye level at the bottom of the meniscus for water",
        "From high above the cylinder",
        "From underneath the table",
        "By looking only at the colour"
      ],
      "correct": 0,
      "explanation": "Read the lower meniscus at eye level for water."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-05",
      "type": "mc",
      "q": "A rectangular box is 3 cm long, 2 cm wide and 4 cm high. What is its volume?",
      "options": [
        "9 cm³",
        "12 cm³",
        "18 cm³",
        "24 cm³"
      ],
      "correct": 3,
      "explanation": "Box volume is length × width × height: 3 × 2 × 4 = 24 cm³."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-06",
      "type": "mc",
      "q": "What is the volume of a cube with 2 cm sides?",
      "options": [
        "4 cm³",
        "6 cm³",
        "8 cm³",
        "12 cm³"
      ],
      "correct": 2,
      "explanation": "2 × 2 × 2 = 8 cm³."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-07",
      "type": "mc",
      "q": "A stone raises water in a cylinder from 40 mL to 55 mL. What is the stone's volume?",
      "options": [
        "95 cm³",
        "15 cm³",
        "40 cm³",
        "55 cm³"
      ],
      "correct": 1,
      "explanation": "Displaced volume is 55 − 40 = 15 mL, equivalent to 15 cm³."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-08",
      "type": "mc",
      "q": "Why is water displacement useful for an irregular solid?",
      "options": [
        "Its volume cannot be found easily using simple length measurements",
        "It makes the solid lighter",
        "It turns the solid into a liquid",
        "It measures the solid's temperature"
      ],
      "correct": 0,
      "explanation": "Displaced liquid reveals the solid's volume."
    },
    {
      "id": "SCI-PM3-QUIZ-U06B-001-09",
      "type": "mc",
      "q": "Which statement about 1 mL is correct?",
      "options": [
        "It equals 1 litre",
        "It equals 100 cm³",
        "It measures only weight",
        "It is equal to 1 cm³"
      ],
      "correct": 3,
      "explanation": "One millilitre is one cubic centimetre."
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
      "type": "mc",
      "q": "What does density compare?",
      "options": [
        "Colour with smell",
        "Time with distance",
        "Temperature with sound",
        "Mass with volume"
      ],
      "correct": 3,
      "explanation": "Density is the amount of mass per unit volume."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-03",
      "type": "mc",
      "q": "Why does a metal coin usually sink in water?",
      "options": [
        "It has a round shape",
        "It is shiny",
        "It is denser than water",
        "It is colder than the water"
      ],
      "correct": 2,
      "explanation": "Objects denser than water tend to sink."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-04",
      "type": "mc",
      "q": "What happens to a floating object when it is pushed beneath water and released?",
      "options": [
        "It becomes heavier permanently",
        "It rises to the surface again",
        "It disappears",
        "It always dissolves"
      ],
      "correct": 1,
      "explanation": "Buoyancy brings a floating object back to the surface."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-05",
      "type": "mc",
      "q": "Why can a large ship made of steel float?",
      "options": [
        "Its hollow shape gives it a low average density",
        "All steel floats by itself",
        "The sea has no gravity",
        "Its paint removes its mass"
      ],
      "correct": 0,
      "explanation": "The ship displaces enough water because of its overall shape."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-06",
      "type": "mc",
      "q": "Adding enough salt to water can help an egg float. Why?",
      "options": [
        "The egg loses all its mass",
        "Salt makes gravity stop",
        "The egg becomes hollow",
        "The water becomes denser"
      ],
      "correct": 3,
      "explanation": "Dissolved salt increases the water's density."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-07",
      "type": "mc",
      "q": "Oil commonly forms a layer above water. What does that suggest?",
      "options": [
        "Oil has no volume",
        "Water is always solid",
        "Oil is less dense than water",
        "Oil turns into air"
      ],
      "correct": 2,
      "explanation": "Oil typically floats above water because of its lower density."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-08",
      "type": "mc",
      "q": "Two equal-sized blocks have different masses. Which is denser?",
      "options": [
        "The lighter block",
        "The heavier block",
        "Both must have the same density",
        "Neither has volume"
      ],
      "correct": 1,
      "explanation": "For equal volumes, the greater mass means greater density."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-09",
      "type": "mc",
      "q": "What would happen to a piece of plastic that is less dense than water?",
      "options": [
        "It would tend to float",
        "It must sink to the bottom",
        "It would change into metal",
        "It must dissolve instantly"
      ],
      "correct": 0,
      "explanation": "Objects less dense than water tend to float."
    },
    {
      "id": "SCI-PM3-QUIZ-U07-001-10",
      "type": "mc",
      "q": "Why do some people float more easily in the sea than in a freshwater pool?",
      "options": [
        "Seawater has no pressure",
        "Freshwater has no mass",
        "The Sun pulls harder at sea",
        "Seawater is usually denser because it contains salts"
      ],
      "correct": 3,
      "explanation": "Saltier water gives greater buoyancy."
    }
  ],
  "Acid and Alkali": [
    {
      "id": "SCI-PM3-QUIZ-U08-001-01",
      "type": "mc",
      "q": "What happens to blue litmus paper in an acidic solution?",
      "options": [
        "It turns green",
        "It turns red",
        "It turns black",
        "It remains blue and glows"
      ],
      "correct": 1,
      "explanation": "Acids change blue litmus paper to red."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-02",
      "type": "mc",
      "q": "What happens to red litmus paper in an alkaline solution?",
      "options": [
        "It turns blue",
        "It turns yellow",
        "It turns white",
        "It becomes transparent"
      ],
      "correct": 0,
      "explanation": "Alkalis change red litmus paper to blue."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-03",
      "type": "mc",
      "q": "Which household liquid is commonly acidic?",
      "options": [
        "Soap solution",
        "Baking soda solution",
        "Plain tap water",
        "Vinegar"
      ],
      "correct": 3,
      "explanation": "Vinegar contains acetic acid."
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
      "type": "mc",
      "q": "What is a neutral substance?",
      "options": [
        "One that must taste sweet",
        "One that is neither acidic nor alkaline",
        "One that turns all paper red",
        "One that is always poisonous"
      ],
      "correct": 1,
      "explanation": "Neutral means neither acidic nor alkaline."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-06",
      "type": "mc",
      "q": "Which substance is often used as a neutral comparison in a basic school test?",
      "options": [
        "Distilled water",
        "Lemon juice",
        "Vinegar",
        "Dishwashing soap solution"
      ],
      "correct": 0,
      "explanation": "Distilled water is generally neutral."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-07",
      "type": "mc",
      "q": "Why should pupils test unknown liquids with indicator paper instead of tasting them?",
      "options": [
        "Indicators are always edible",
        "Unknown liquids are always water",
        "Taste gives an exact pH reading",
        "Tasting unknown liquids can be dangerous"
      ],
      "correct": 3,
      "explanation": "Indicators provide safer evidence of acidity or alkalinity."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-08",
      "type": "mc",
      "q": "A solution turns red litmus blue. How should the solution be classified?",
      "options": [
        "Acidic",
        "Neutral",
        "Alkaline",
        "Magnetic"
      ],
      "correct": 2,
      "explanation": "Turning red litmus blue indicates an alkali."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-09",
      "type": "mc",
      "q": "Which statement about neutral water and litmus is correct?",
      "options": [
        "It turns both colours black",
        "It does not change red or blue litmus",
        "It always turns blue litmus red",
        "It always turns red litmus blue"
      ],
      "correct": 1,
      "explanation": "Neutral water does not change either litmus colour."
    },
    {
      "id": "SCI-PM3-QUIZ-U08-001-10",
      "type": "mc",
      "q": "Which natural plant extract can sometimes act as an acid–alkali indicator?",
      "options": [
        "Purple cabbage juice",
        "Cooking oil",
        "Clear sugar water",
        "Plain salt crystals"
      ],
      "correct": 0,
      "explanation": "Pigments in purple cabbage change colour with acidity."
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
      "type": "mc",
      "q": "Which planet is closest to the Sun?",
      "options": [
        "Venus",
        "Mercury",
        "Earth",
        "Mars"
      ],
      "correct": 1,
      "explanation": "Mercury is the innermost planet."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-03",
      "type": "mc",
      "q": "Which planet is the third from the Sun?",
      "options": [
        "Earth",
        "Mars",
        "Venus",
        "Jupiter"
      ],
      "correct": 0,
      "explanation": "Earth is the third planet outward from the Sun."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-04",
      "type": "mc",
      "q": "Which planet is the largest in our Solar System?",
      "options": [
        "Mercury",
        "Mars",
        "Venus",
        "Jupiter"
      ],
      "correct": 3,
      "explanation": "Jupiter is the largest planet."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-05",
      "type": "mc",
      "q": "Which planet is famous for its prominent rings?",
      "options": [
        "Mercury",
        "Mars",
        "Saturn",
        "Earth"
      ],
      "correct": 2,
      "explanation": "Saturn has a striking ring system."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-06",
      "type": "mc",
      "q": "Which planet is farthest from the Sun among the eight planets?",
      "options": [
        "Uranus",
        "Neptune",
        "Saturn",
        "Jupiter"
      ],
      "correct": 1,
      "explanation": "Neptune is the eighth planet."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-07",
      "type": "mc",
      "q": "What is an orbit?",
      "options": [
        "The path an object follows around another object",
        "A mark on a ruler",
        "The surface of a star",
        "A type of microscope"
      ],
      "correct": 0,
      "explanation": "Planets follow orbits around the Sun."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-08",
      "type": "mc",
      "q": "Which planet takes the least time to revolve around the Sun?",
      "options": [
        "Earth",
        "Jupiter",
        "Neptune",
        "Mercury"
      ],
      "correct": 3,
      "explanation": "Mercury completes its orbit fastest."
    },
    {
      "id": "SCI-PM3-QUIZ-U09-001-09",
      "type": "mc",
      "q": "Why is Venus usually hotter at its surface than Mercury?",
      "options": [
        "It is the largest planet",
        "It has rings made of fire",
        "Its thick atmosphere traps heat",
        "It is farther from the Sun than Neptune"
      ],
      "correct": 2,
      "explanation": "Venus's atmosphere creates an intense greenhouse effect."
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
        "A container for measuring liquids",
        "A type of plant root",
        "A tool for seeing tiny cells",
        "A grooved wheel used with a rope or belt"
      ],
      "correct": 3,
      "explanation": "A pulley has a grooved wheel for a rope or belt."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-02",
      "type": "mc",
      "q": "What is the main benefit of a simple fixed pulley?",
      "options": [
        "It always halves the load's mass",
        "It removes gravity",
        "It changes the direction of the pulling force",
        "It needs no rope"
      ],
      "correct": 2,
      "explanation": "A fixed pulley helps lift by redirecting the pull."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-03",
      "type": "mc",
      "q": "Which action uses a fixed pulley?",
      "options": [
        "Writing with a pencil",
        "Raising a flag on a flagpole",
        "Drinking from a cup",
        "Rubbing a balloon"
      ],
      "correct": 1,
      "explanation": "Flagpoles often use fixed pulleys."
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
      "type": "mc",
      "q": "Which part turns when a rope moves over a pulley?",
      "options": [
        "Wall",
        "Load's colour",
        "Handle of a spoon",
        "Wheel"
      ],
      "correct": 3,
      "explanation": "The grooved wheel rotates as the rope travels."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-06",
      "type": "mc",
      "q": "What is attached to the rope to lift an object safely?",
      "options": [
        "A loose sheet of paper only",
        "A glass of water without support",
        "A securely fastened load",
        "A floating balloon only"
      ],
      "correct": 2,
      "explanation": "The load must be fastened securely."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-07",
      "type": "mc",
      "q": "What is a movable pulley?",
      "options": [
        "A pulley fixed permanently to a ceiling",
        "A pulley that moves with the load",
        "A pulley without a wheel",
        "A pulley made only of string"
      ],
      "correct": 1,
      "explanation": "A movable pulley travels with the load."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-08",
      "type": "mc",
      "q": "Why might a system with multiple pulleys make lifting easier?",
      "options": [
        "It can reduce the pulling force needed",
        "It makes an object weightless",
        "It changes steel into plastic",
        "It removes the need for any movement"
      ],
      "correct": 0,
      "explanation": "Multiple pulleys can provide a mechanical advantage."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-09",
      "type": "mc",
      "q": "Which is an everyday application of a pulley system?",
      "options": [
        "A fork cutting bread",
        "A thermometer checking temperature",
        "A mirror reflecting light",
        "A crane lifting construction materials"
      ],
      "correct": 3,
      "explanation": "Cranes use pulley systems to lift heavy loads."
    },
    {
      "id": "SCI-PM3-QUIZ-U10-001-10",
      "type": "mc",
      "q": "What should pupils check before testing a model pulley?",
      "options": [
        "The rope is frayed",
        "The support is wobbling",
        "The rope, support and load are secure",
        "The load is hanging over someone's head"
      ],
      "correct": 2,
      "explanation": "A secure setup is essential for safe testing."
    }
  ]
} });
