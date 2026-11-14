/* Eight PM3 revision quizzes. Original question IDs are kept for score history. */
const exerciseBank={
  
  "English": {
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
        "explanationCorrect": "Fragile means easy to break.",
        "explanationIncorrect": "Fragile describes something that can break easily."
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
        "explanationCorrect": "Enormous means extremely big.",
        "explanationIncorrect": "Enormous describes something very big, not small."
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
        "explanationCorrect": "To protect means to keep something safe.",
        "explanationIncorrect": "To protect something is to keep it from harm."
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
        "explanationCorrect": "Ordinary means normal or not special.",
        "explanationIncorrect": "Ordinary describes something common or usual."
      },
      {
        "id": "ENG-PM3-QUIZ-VOC-002-05",
        "q": "The word 'ancient' means very old.",
        "type": "tf",
        "expected": true,
        "explanationCorrect": "Ancient means very old.",
        "explanationIncorrect": "Ancient describes something from long ago."
      },
      {
        "id": "ENG-PM3-QUIZ-VOC-002-06",
        "q": "The word 'generous' means unwilling to share.",
        "type": "tf",
        "expected": false,
        "explanationCorrect": "Generous means willing to share.",
        "explanationIncorrect": "Generous means happy to give or share, not unwilling."
      },
      {
        "id": "ENG-PM3-QUIZ-VOC-002-07",
        "q": "A journey is a trip from one place to another.",
        "type": "tf",
        "expected": true,
        "explanationCorrect": "A journey is a trip from one place to another.",
        "explanationIncorrect": "A journey means travelling from one place to another."
      },
      {
        "id": "ENG-PM3-QUIZ-VOC-002-08",
        "q": "Fill in the blank: I borrowed a book from the ____.",
        "type": "drop",
        "expected": "library",
        "explanationCorrect": "A library is a place to read or borrow books.",
        "explanationIncorrect": "A library is where people can borrow books.",
        "options": [
          "library",
          "hospital"
        ]
      },
      {
        "id": "ENG-PM3-QUIZ-VOC-002-09",
        "q": "Fill in the blank: After running in the sun, I was very ____ and needed water.",
        "type": "drop",
        "expected": "thirsty",
        "explanationCorrect": "Thirsty means needing a drink.",
        "explanationIncorrect": "Thirsty means wanting something to drink, not food.",
        "options": [
          "thirsty",
          "hungry"
        ]
      },
      {
        "id": "ENG-PM3-QUIZ-VOC-002-10",
        "q": "Fill in the blank: A person who writes books is called an ____.",
        "type": "drop",
        "expected": "author",
        "explanationCorrect": "An author is someone who writes books.",
        "explanationIncorrect": "An author writes books; an actor performs in plays or films.",
        "options": [
          "author",
          "actor"
        ]
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
        "explanationCorrect": "Went is the past tense of go.",
        "explanationIncorrect": "We use went for the past, not goed."
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
        "explanationCorrect": "Children is the plural of child.",
        "explanationIncorrect": "We say children for more than one child, not childs."
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
        "explanationCorrect": "We use goes with she for everyday actions.",
        "explanationIncorrect": "With she, we say goes, not go."
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
        "explanationCorrect": "A question ends with a question mark (?).",
        "explanationIncorrect": "A question needs a question mark, not a full stop."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-05",
        "q": "In 'The cats are sleeping,' the word 'cats' is plural.",
        "type": "tf",
        "expected": true,
        "explanationCorrect": "Cats is plural because it means more than one cat.",
        "explanationIncorrect": "The s in cats shows there is more than one."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-06",
        "q": "In 'He play football every Sunday,' the verb agrees with the subject.",
        "type": "tf",
        "expected": false,
        "explanationCorrect": "We say he plays, not he play.",
        "explanationIncorrect": "With he, add s to play: he plays."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-07",
        "q": "In 'She ran quickly,' the word 'quickly' is an adverb.",
        "type": "tf",
        "expected": true,
        "explanationCorrect": "Quickly tells us how she ran.",
        "explanationIncorrect": "Quickly describes how an action happens."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-08",
        "q": "Fill in the blank: Yesterday, I ____ my homework before dinner.",
        "type": "drop",
        "expected": "did",
        "explanationCorrect": "Did is the past tense of do.",
        "explanationIncorrect": "We use did for something done yesterday.",
        "options": [
          "did",
          "do"
        ]
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-09",
        "q": "Fill in the blank: I saw ____ elephant at the zoo.",
        "type": "drop",
        "expected": "an",
        "explanationCorrect": "We use an before the vowel sound in elephant.",
        "explanationIncorrect": "Elephant starts with a vowel sound, so we say an elephant.",
        "options": [
          "an",
          "a"
        ]
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-10",
        "q": "Fill in the blank: They ____ playing in the park now.",
        "type": "drop",
        "expected": "are",
        "explanationCorrect": "We say they are playing, not they is playing.",
        "explanationIncorrect": "Use are with they: they are playing.",
        "options": [
          "are",
          "is"
        ]
      }
    ]
  }
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
        "id": "MAL-PM1-QUIZ-VOC-001-01",
        "explanationCorrect": "A cat is an animal, just like a dog.",
        "explanationIncorrect": "Kucing means cat. A cat is an animal, not furniture."
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
        "id": "MAL-PM1-QUIZ-VOC-001-02",
        "explanationCorrect": "Bananas grow on plants and are eaten as fruit.",
        "explanationIncorrect": "A banana is a fruit, not a vegetable."
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
        "id": "MAL-PM1-QUIZ-VOC-001-03",
        "explanationCorrect": "A cup holds a drink.",
        "explanationIncorrect": "We write with a pencil, but drink from a cup."
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
        "id": "MAL-PM1-QUIZ-VOC-001-04",
        "explanationCorrect": "Yellow is a colour we can see.",
        "explanationIncorrect": "Kuning means yellow. The other choices name places or things."
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
        "id": "MAL-PM1-QUIZ-VOC-001-05",
        "explanationCorrect": "A chicken is a bird, so it is an animal.",
        "explanationIncorrect": "Chickens are animals, not plants."
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
        "id": "MAL-PM1-QUIZ-VOC-001-06",
        "explanationCorrect": "A pencil makes marks on paper.",
        "explanationIncorrect": "We write with a pencil, not a spoon."
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
        "id": "MAL-PM1-QUIZ-VOC-001-07",
        "explanationCorrect": "Our nose helps us smell.",
        "explanationIncorrect": "Hidung means nose. It is part of our body."
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
        "id": "MAL-PM1-QUIZ-VOC-001-08",
        "explanationCorrect": "Satu is the first number when counting.",
        "explanationIncorrect": "Satu means one, so the statement is true."
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
        "id": "MAL-PM1-QUIZ-VOC-001-09",
        "explanationCorrect": "A bed is made for sleeping.",
        "explanationIncorrect": "We sleep on a bed, not a bicycle."
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
        "id": "MAL-PM1-QUIZ-VOC-001-10",
        "explanationCorrect": "Children go to school to learn.",
        "explanationIncorrect": "Sekolah means school. A market is for shopping, not lessons."
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
        "id": "MAL-PM1-QUIZ-GRM-001-01",
        "explanationCorrect": "Saya tells us who is eating, before the action makan.",
        "explanationIncorrect": "Start with who is eating, then what they are doing: Saya makan nasi."
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
        "id": "MAL-PM1-QUIZ-GRM-001-02",
        "explanationCorrect": "Saya is used when we talk about ourselves.",
        "explanationIncorrect": "Saya means I, so the statement is true."
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
        "id": "MAL-PM1-QUIZ-GRM-001-03",
        "explanationCorrect": "We read books, so membaca fits.",
        "explanationIncorrect": "Membaca means read; minum means drink."
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
        "id": "MAL-PM1-QUIZ-GRM-001-04",
        "explanationCorrect": "Mereka refers to a group of people.",
        "explanationIncorrect": "Mereka means they, not just one person."
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
        "id": "MAL-PM1-QUIZ-GRM-001-05",
        "explanationCorrect": "A question usually ends with a question mark.",
        "explanationIncorrect": "A question ends with ?, so the statement is true."
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
        "id": "MAL-PM1-QUIZ-GRM-001-06",
        "explanationCorrect": "Merah tells us the colour of the shirt.",
        "explanationIncorrect": "Merah means red; membaca means reading."
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
        "id": "MAL-PM1-QUIZ-GRM-001-07",
        "explanationCorrect": "Bulat tells us the ball's shape.",
        "explanationIncorrect": "A ball is round. Bulat means round."
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
        "id": "MAL-PM1-QUIZ-GRM-001-08",
        "explanationCorrect": "Cantik describes how something looks.",
        "explanationIncorrect": "Cantik means beautiful; it is not an action."
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
        "id": "MAL-PM1-QUIZ-GRM-001-09",
        "explanationCorrect": "Di tells us where someone is.",
        "explanationIncorrect": "Mum is cooking in the kitchen, not going to it."
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
        "id": "MAL-PM1-QUIZ-GRM-001-10",
        "explanationCorrect": "Di manakah asks where something is.",
        "explanationIncorrect": "This sentence asks where the bag is, so it ends with ?."
      }
    ]
  },
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
        "id": "KOR-PM2-QUIZ-VOC-001-01",
        "explanationCorrect": "Apples are fruits we can eat.",
        "explanationIncorrect": "사과 means apple, which is a fruit, not furniture."
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
        "id": "KOR-PM2-QUIZ-VOC-001-02",
        "explanationCorrect": "A cat is an animal.",
        "explanationIncorrect": "고양이 means cat, and cats are animals."
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
        "id": "KOR-PM2-QUIZ-VOC-001-03",
        "explanationCorrect": "A cup holds water for drinking.",
        "explanationIncorrect": "컵 means cup. We drink from a cup, not a book."
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
        "id": "KOR-PM2-QUIZ-VOC-001-04",
        "explanationCorrect": "Blue is a colour we can see.",
        "explanationIncorrect": "파란색 means blue, not school or a bag."
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
        "id": "KOR-PM2-QUIZ-VOC-001-05",
        "explanationCorrect": "A desk is furniture we use for studying.",
        "explanationIncorrect": "책상 means desk, which is not food."
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
        "id": "KOR-PM2-QUIZ-VOC-001-06",
        "explanationCorrect": "A pencil helps us write.",
        "explanationIncorrect": "연필 means pencil. An umbrella cannot be used for writing."
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
        "id": "KOR-PM2-QUIZ-VOC-001-07",
        "explanationCorrect": "A mother is part of a family.",
        "explanationIncorrect": "엄마 means Mum, a family member."
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
        "id": "KOR-PM2-QUIZ-VOC-001-08",
        "explanationCorrect": "하나 is used when counting one thing.",
        "explanationIncorrect": "하나 means one, so the statement is true."
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
        "id": "KOR-PM2-QUIZ-VOC-001-09",
        "explanationCorrect": "A coat keeps us warm in cold weather.",
        "explanationIncorrect": "외투 means coat. A swimsuit is for swimming, not staying warm."
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
        "id": "KOR-PM2-QUIZ-VOC-001-10",
        "explanationCorrect": "A hospital is a place people can visit.",
        "explanationIncorrect": "병원 means hospital, which is a place."
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
        "id": "KOR-PM2-QUIZ-GRM-001-01",
        "explanationCorrect": "학생 ends with a consonant, so we add 이에요.",
        "explanationIncorrect": "We use 이에요 after 학생 because its last sound is a consonant."
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
        "id": "KOR-PM2-QUIZ-GRM-001-02",
        "explanationCorrect": "저는 is used when speaking politely about yourself.",
        "explanationIncorrect": "저 means I, and 는 tells us we are talking about that person."
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
        "id": "KOR-PM2-QUIZ-GRM-001-03",
        "explanationCorrect": "에 shows the place someone is going to.",
        "explanationIncorrect": "학교에 가요 means going to school. 에 marks the destination."
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
        "id": "KOR-PM2-QUIZ-GRM-001-04",
        "explanationCorrect": "책 ends with a consonant, so we add 이에요.",
        "explanationIncorrect": "We say 책이에요 because 책 ends with a consonant sound."
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
        "id": "KOR-PM2-QUIZ-GRM-001-05",
        "explanationCorrect": "있어요 tells us something is there.",
        "explanationIncorrect": "사과가 있어요 means there are apples, not that they are missing."
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
        "id": "KOR-PM2-QUIZ-GRM-001-06",
        "explanationCorrect": "가방 ends with a consonant, so we use 이.",
        "explanationIncorrect": "We use 이 after 가방 because its last sound is a consonant."
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
        "id": "KOR-PM2-QUIZ-GRM-001-07",
        "explanationCorrect": "어디에 가요? asks where someone is going.",
        "explanationIncorrect": "This sentence asks a question, while the others make statements."
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
        "id": "KOR-PM2-QUIZ-GRM-001-08",
        "explanationCorrect": "에 shows that school is the destination.",
        "explanationIncorrect": "학교에 가요 means going to school, so the statement is true."
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
        "id": "KOR-PM2-QUIZ-GRM-001-09",
        "explanationCorrect": "저 ends with a vowel, so we add 는.",
        "explanationIncorrect": "Use 는 after 저 because its last sound is a vowel."
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
        "id": "KOR-PM2-QUIZ-GRM-001-10",
        "explanationCorrect": "친구 ends with a vowel, so we add 가.",
        "explanationIncorrect": "친구 ends in a vowel sound, so 가 is the right subject marker."
      }
    ]
  },
  "Math": {
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
        "id": "MATH-PM3-QUIZ-U02-001-01",
        "explanationCorrect": "Add the hundreds, tens and ones to get 605.",
        "explanationIncorrect": "347 plus 258 gives 605, not 595 or 615."
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 800 − 275 = ____.",
        "expected": "525",
        "id": "MATH-PM3-QUIZ-U02-001-02",
        "explanationCorrect": "Subtract 275 from 800 to get 525.",
        "explanationIncorrect": "800 minus 275 leaves 525.",
        "options": [
          "525",
          "535"
        ]
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
        "id": "MATH-PM3-QUIZ-U02-001-03",
        "explanationCorrect": "Six groups of eight make 48.",
        "explanationIncorrect": "6 times 8 is 48, not 42 or 56."
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 63 ÷ 7 = ____.",
        "expected": "9",
        "id": "MATH-PM3-QUIZ-U02-001-04",
        "explanationCorrect": "Seven groups of nine make 63.",
        "explanationIncorrect": "63 divided into seven equal groups gives 9 in each group.",
        "options": [
          "9",
          "8"
        ]
      },
      {
        "type": "tf",
        "q": "450 + 125 = 575.",
        "expected": true,
        "id": "MATH-PM3-QUIZ-U02-001-05",
        "explanationCorrect": "Adding 450 and 125 gives 575.",
        "explanationIncorrect": "450 + 125 really does equal 575."
      },
      {
        "type": "tf",
        "q": "900 − 450 = 550.",
        "expected": false,
        "id": "MATH-PM3-QUIZ-U02-001-06",
        "explanationCorrect": "Subtracting 450 from 900 leaves 450.",
        "explanationIncorrect": "900 minus 450 is 450, not 550."
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
        "id": "MATH-PM3-QUIZ-U02-001-07",
        "explanationCorrect": "Eight boxes of seven pencils make 56.",
        "explanationIncorrect": "Multiply 8 boxes by 7 pencils: 8 × 7 = 56."
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
        "id": "MATH-PM3-QUIZ-U02-001-08",
        "explanationCorrect": "Nine groups of eight sweets make 72.",
        "explanationIncorrect": "Sharing 72 equally among 9 children gives 8 each."
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 4 × 9 = ____.",
        "expected": "36",
        "id": "MATH-PM3-QUIZ-U02-001-09",
        "explanationCorrect": "Four groups of nine make 36.",
        "explanationIncorrect": "4 multiplied by 9 gives 36.",
        "options": [
          "36",
          "32"
        ]
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
        "id": "MATH-PM3-QUIZ-U02-001-10",
        "explanationCorrect": "The shop sold 400 stickers, leaving 600.",
        "explanationIncorrect": "250 + 150 = 400 sold. 1,000 − 400 = 600 left."
      }
    ]
  },
  "Science": {
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
        "explanationCorrect": "Observing means using our senses, like sight and hearing.",
        "explanationIncorrect": "We use our senses to observe things around us."
      },
      {
        "id": "SCI-PM3-QUIZ-U01-001-02",
        "type": "tf",
        "q": "Grouping leaves by their shapes is an example of classifying.",
        "expected": true,
        "explanationCorrect": "Classifying means sorting things by what they have in common.",
        "explanationIncorrect": "Grouping leaves by shape is classifying, so the statement is true."
      },
      {
        "id": "SCI-PM3-QUIZ-U01-001-03",
        "type": "drop",
        "q": "A ____ is used to measure the time taken to run a short race.",
        "expected": "stopwatch",
        "options": [
          "stopwatch",
          "thermometer"
        ],
        "explanationCorrect": "A stopwatch measures how much time has passed.",
        "explanationIncorrect": "A stopwatch measures time; a thermometer measures temperature."
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
        "explanationCorrect": "Dry soil and drooping leaves suggest the plant needs water.",
        "explanationIncorrect": "The dry soil is a clue that the plant has not had enough water."
      },
      {
        "id": "SCI-PM3-QUIZ-U01-001-05",
        "type": "tf",
        "q": "A prediction describes only what has already happened.",
        "expected": false,
        "explanationCorrect": "A prediction says what might happen next.",
        "explanationIncorrect": "A prediction is about what may happen, not only what already happened."
      },
      {
        "id": "SCI-PM3-QUIZ-U01-001-06",
        "type": "drop",
        "q": "A pupil uses a bar chart to ____ the results of an experiment.",
        "expected": "share",
        "options": [
          "share",
          "hide"
        ],
        "explanationCorrect": "Bar charts help other people understand results.",
        "explanationIncorrect": "We share experiment results with a chart, not hide them."
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
        "explanationCorrect": "We start from zero so the length is measured correctly.",
        "explanationIncorrect": "Put the pencil's end at zero on the ruler."
      },
      {
        "id": "SCI-PM3-QUIZ-U01-001-08",
        "type": "tf",
        "q": "Looking straight at a ruler's markings helps us read a measurement correctly.",
        "expected": true,
        "explanationCorrect": "Looking straight at the ruler helps us read it accurately.",
        "explanationIncorrect": "Reading at eye level helps prevent mistakes."
      },
      {
        "id": "SCI-PM3-QUIZ-U01-001-09",
        "type": "drop",
        "q": "A clear science drawing should include useful ____.",
        "expected": "labels",
        "options": [
          "labels",
          "decorations"
        ],
        "explanationCorrect": "Labels tell us which part is which.",
        "explanationIncorrect": "Labels help readers understand a science drawing."
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
        "explanationCorrect": "Clean and dry equipment before putting it away.",
        "explanationIncorrect": "A wet or dirty beaker should be cleaned and dried before storage."
      }
    ]
  }
};
/* No formula-entry sets are active in this eight-quiz revision. */
const formulaBank={Math:{}};
