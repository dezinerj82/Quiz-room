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
      "explanation": "20 minutes to 4:40, then 25 minutes to 5:05 p.m.",
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
      "q": "Fill in the blank: A survey has 4 apple votes, 7 banana votes and 2 orange votes. The total number of votes is ____.",
      "expected": "13",
      "explanation": "4 + 7 + 2 = 13.",
      "id": "MATH-PM3-QUIZ-U09-001-03"
    },
    {
      "type": "mc",
      "q": "In a survey, 7 pupils chose bananas and 2 chose oranges. How many more chose bananas?",
      "options": [
        "3",
        "4",
        "5",
        "9"
      ],
      "correct": 2,
      "explanation": "7 − 2 = 5.",
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
