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
        "explanation": "Fragile describes something that breaks easily, such as thin glass."
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
        "explanation": "Enormous means extremely big, like a giant whale."
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
        "explanation": "To protect something means to keep it safe from harm."
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
        "explanation": "Ordinary describes something usual or common in everyday life."
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
        "explanation": "Generous describes someone who is happy to give or share."
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
        "type": "drop",
        "expected": "library",
        "options": [
          "library",
          "hospital"
        ],
        "explanation": "A library is a place where people can read or borrow books."
      },
      {
        "id": "ENG-PM3-QUIZ-VOC-002-09",
        "q": "Fill in the blank: After running in the sun, I was very ____ and needed water.",
        "type": "drop",
        "expected": "thirsty",
        "options": [
          "thirsty",
          "hungry"
        ],
        "explanation": "Thirsty means needing something to drink."
      },
      {
        "id": "ENG-PM3-QUIZ-VOC-002-10",
        "q": "Fill in the blank: A person who writes books is called an ____.",
        "type": "drop",
        "expected": "author",
        "options": [
          "author",
          "actor"
        ],
        "explanation": "An author is someone who writes books."
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
        "explanation": "Went is the past tense of go. We use it for an action that already happened."
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
        "explanation": "Children is the plural of child. It means more than one child."
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
        "explanation": "With she, we use goes to describe something she does regularly."
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
        "explanation": "A question ends with a question mark (?) to show that someone is asking something."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-05",
        "q": "In 'The cats are sleeping,' the word 'cats' is plural.",
        "type": "tf",
        "expected": true,
        "explanation": "Cats is plural because the s shows there is more than one cat."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-06",
        "q": "In 'He play football every Sunday,' the verb agrees with the subject.",
        "type": "tf",
        "expected": false,
        "explanation": "With he, the verb play becomes plays when describing something he does regularly."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-07",
        "q": "In 'She ran quickly,' the word 'quickly' is an adverb.",
        "type": "tf",
        "expected": true,
        "explanation": "Quickly is an adverb because it tells us how she ran."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-08",
        "q": "Fill in the blank: Yesterday, I ____ my homework before dinner.",
        "type": "drop",
        "expected": "did",
        "options": [
          "did",
          "do"
        ],
        "explanation": "Did is the past tense of do. We use it for an action that already happened."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-09",
        "q": "Fill in the blank: I saw ____ elephant at the zoo.",
        "type": "drop",
        "expected": "an",
        "options": [
          "an",
          "a"
        ],
        "explanation": "We use an before elephant because elephant starts with a vowel sound."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-10",
        "q": "Fill in the blank: They ____ playing in the park now.",
        "type": "drop",
        "expected": "are",
        "options": [
          "are",
          "is"
        ],
        "explanation": "Are is used with they because English uses are with plural subjects, such as we and they."
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
        "id": "MAL-PM1-QUIZ-VOC-001-01",
        "explanation": "Kucing means cat. A cat is an animal that has fur, whiskers and four legs."
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
        "explanation": "Pisang means banana. A banana is a fruit that grows on a plant."
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
        "explanation": "Cawan means cup. We use a cup to hold water or other drinks."
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
        "explanation": "Kuning means yellow. Yellow is a colour, like the colour of a ripe banana."
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
        "explanation": "Ayam means chicken. A chicken is a bird, which is a type of animal."
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
        "explanation": "Pensel means pencil. A pencil is used for writing and drawing on paper."
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
        "explanation": "Hidung means nose. Your nose is a body part that helps you smell."
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
        "explanation": "Satu means one. It is the number we start with when counting."
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
        "explanation": "Katil means bed. A bed is where we lie down to sleep."
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
        "explanation": "Sekolah means school. A school is where children go to learn new things."
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
        "explanation": "Saya means I, makan means eat, and nasi means rice. This order tells us who is eating and what they eat."
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
        "explanation": "Saya means I. We use it when talking about ourselves."
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
        "explanation": "Membaca means read. It is the action we do when looking at the words in a book."
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
        "explanation": "Mereka means they. We use it when talking about a group of people."
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
        "explanation": "An ayat tanya is a question. It usually ends with a question mark (?)."
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
        "explanation": "Merah means red. It describes the colour of the shirt."
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
        "explanation": "Bulat means round. It describes the shape of the ball."
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
        "explanation": "Cantik means beautiful. It is a describing word, called a kata adjektif."
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
        "explanation": "Di means in, at or on. Here it tells us where Mum is cooking."
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
        "explanation": "Di manakah means where. It is used to ask about the place of something."
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
        "explanation": "사과 means apple. An apple is a fruit that grows on a tree."
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
        "explanation": "고양이 means cat. A cat is an animal with fur and whiskers."
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
        "explanation": "컵 means cup. We use a cup to hold water when drinking."
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
        "explanation": "파란색 means blue. Blue is a colour, like the colour of a clear sky."
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
        "explanation": "책상 means desk. A desk is furniture where we can sit to study or write."
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
        "explanation": "연필 means pencil. A pencil is used to write or draw on paper."
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
        "explanation": "엄마 means Mum. Your mum is a member of your family."
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
        "explanation": "하나 means one. We use it when counting one thing."
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
        "explanation": "외투 means coat. A coat is a warm outer layer of clothing worn in cold weather."
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
        "explanation": "병원 means hospital. A hospital is a place where people receive medical care."
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
        "explanation": "저는 학생이에요 means I am a student. 학생 ends with a consonant sound, so we use 이에요."
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
        "explanation": "저 means I, and 는 marks who the sentence is about. 저는 is a polite way to start talking about yourself."
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
        "explanation": "에 marks a destination. 학교에 가요 means going to school."
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
        "explanation": "책이에요 means it is a book. 책 ends with a consonant sound, so we add 이에요."
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
        "explanation": "있어요 means there is or there are. 사과가 있어요 means there are apples."
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
        "explanation": "가방 ends with a consonant sound, so we add 이 to mark it as the subject."
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
        "explanation": "어디에 가요? means Where are you going? It is a question asking about a destination."
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
        "explanation": "학교에 가요 means going to school. The particle 에 shows the destination."
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
        "explanation": "저 ends with a vowel sound, so we add 는 to show who the sentence is about."
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
        "explanation": "친구 ends with a vowel sound, so we add 가 to mark it as the subject."
      }
    ],
    "가족과 사람": [
      {
        "type": "mc",
        "q": "아버지를 뜻하는 말은 무엇인가요?",
        "options": [
          "아버지",
          "동생",
          "할머니",
          "선생님"
        ],
        "correct": 0,
        "translation": {
          "question": "Which word means father?",
          "options": [
            "Father",
            "Younger sibling",
            "Grandmother",
            "Teacher"
          ]
        },
        "explanation": "아버지 means father, a male parent in the family.",
        "id": "KOR-PM3-QUIZ-002-01"
      },
      {
        "type": "tf",
        "q": "할아버지는 가족을 나타내는 말이에요.",
        "expected": true,
        "translation": {
          "question": "Grandfather is a word for a family member.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "할아버지 means grandfather, the father of a parent.",
        "id": "KOR-PM3-QUIZ-002-02"
      },
      {
        "type": "drop",
        "q": "나보다 어린 형제나 자매는 ____이에요.",
        "expected": "동생",
        "options": [
          "동생",
          "할머니"
        ],
        "translation": {
          "question": "A younger brother or sister is a ____.",
          "options": [
            "Younger sibling",
            "Grandmother"
          ]
        },
        "explanation": "동생 means a younger brother or sister.",
        "id": "KOR-PM3-QUIZ-002-03"
      },
      {
        "type": "mc",
        "q": "할머니는 누구인가요?",
        "options": [
          "언니",
          "할머니",
          "아기",
          "친구"
        ],
        "correct": 1,
        "translation": {
          "question": "Which word means grandmother?",
          "options": [
            "Older sister",
            "Grandmother",
            "Baby",
            "Friend"
          ]
        },
        "explanation": "할머니 means grandmother, the mother of a parent.",
        "id": "KOR-PM3-QUIZ-002-04"
      },
      {
        "type": "tf",
        "q": "선생님은 할머니를 뜻하는 말이에요.",
        "expected": false,
        "translation": {
          "question": "선생님 means grandmother.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "선생님 means teacher, someone who helps pupils learn.",
        "id": "KOR-PM3-QUIZ-002-05"
      },
      {
        "type": "drop",
        "q": "나보다 나이가 많은 남자 형제는 ____예요.",
        "expected": "형",
        "options": [
          "형",
          "아기"
        ],
        "translation": {
          "question": "An older brother (said by a boy) is ____.",
          "options": [
            "Older brother",
            "Baby"
          ]
        },
        "explanation": "형 means older brother when a boy is speaking.",
        "id": "KOR-PM3-QUIZ-002-06"
      },
      {
        "type": "mc",
        "q": "어린 아이를 나타내는 말은 무엇인가요?",
        "options": [
          "고모",
          "아기",
          "삼촌",
          "아버지"
        ],
        "correct": 1,
        "translation": {
          "question": "Which word means baby?",
          "options": [
            "Aunt",
            "Baby",
            "Uncle",
            "Father"
          ]
        },
        "explanation": "아기 means baby, a very young child.",
        "id": "KOR-PM3-QUIZ-002-07"
      },
      {
        "type": "tf",
        "q": "삼촌은 남자 친척을 나타내는 말이에요.",
        "expected": true,
        "translation": {
          "question": "삼촌 is a word for a male relative.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "삼촌 means uncle, a male relative in the family.",
        "id": "KOR-PM3-QUIZ-002-08"
      },
      {
        "type": "drop",
        "q": "어머니의 어머니는 ____예요.",
        "expected": "외할머니",
        "options": [
          "외할머니",
          "아버지"
        ],
        "translation": {
          "question": "Mother's mother is ____.",
          "options": [
            "Maternal grandmother",
            "Father"
          ]
        },
        "explanation": "외할머니 means the mother of your mother.",
        "id": "KOR-PM3-QUIZ-002-09"
      },
      {
        "type": "mc",
        "q": "어머니의 남자 형제는 누구인가요?",
        "options": [
          "외삼촌",
          "할아버지",
          "아기",
          "동생"
        ],
        "correct": 0,
        "translation": {
          "question": "Which word means mother's brother?",
          "options": [
            "Maternal uncle",
            "Grandfather",
            "Baby",
            "Younger sibling"
          ]
        },
        "explanation": "외삼촌 means an uncle who is your mother's brother.",
        "id": "KOR-PM3-QUIZ-002-10"
      }
    ],
    "음식과 음료": [
      {
        "type": "mc",
        "q": "밥을 뜻하는 말은 무엇인가요?",
        "options": [
          "우유",
          "밥",
          "주스",
          "빵"
        ],
        "correct": 1,
        "translation": {
          "question": "Which word means cooked rice or a meal?",
          "options": [
            "Milk",
            "Rice or meal",
            "Juice",
            "Bread"
          ]
        },
        "explanation": "밥 means cooked rice or a meal.",
        "id": "KOR-PM3-QUIZ-003-01"
      },
      {
        "type": "tf",
        "q": "우유는 마실 수 있는 음료예요.",
        "expected": true,
        "translation": {
          "question": "Milk is a drink.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "우유 means milk, a drink that comes from animals such as cows.",
        "id": "KOR-PM3-QUIZ-003-02"
      },
      {
        "type": "drop",
        "q": "생일에 먹는 달콤한 음식은 ____예요.",
        "expected": "케이크",
        "options": [
          "케이크",
          "소금"
        ],
        "translation": {
          "question": "A sweet food we eat on birthdays is ____.",
          "options": [
            "Cake",
            "Salt"
          ]
        },
        "explanation": "케이크 means cake, a sweet food often eaten at celebrations.",
        "id": "KOR-PM3-QUIZ-003-03"
      },
      {
        "type": "mc",
        "q": "국을 뜻하는 말은 무엇인가요?",
        "options": [
          "국",
          "물",
          "빵",
          "과자"
        ],
        "correct": 0,
        "translation": {
          "question": "Which word means soup?",
          "options": [
            "Soup",
            "Water",
            "Bread",
            "Snack"
          ]
        },
        "explanation": "국 means soup, a food made with liquid and other ingredients.",
        "id": "KOR-PM3-QUIZ-003-04"
      },
      {
        "type": "tf",
        "q": "소금은 달콤한 음식이에요.",
        "expected": false,
        "translation": {
          "question": "Salt is a sweet food.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "소금 means salt, which gives food a salty taste.",
        "id": "KOR-PM3-QUIZ-003-05"
      },
      {
        "type": "drop",
        "q": "목이 마를 때 마시는 것은 ____예요.",
        "expected": "물",
        "options": [
          "물",
          "밥"
        ],
        "translation": {
          "question": "When thirsty, we drink ____.",
          "options": [
            "Water",
            "Cooked rice"
          ]
        },
        "explanation": "물 means water, a liquid we drink to stay hydrated.",
        "id": "KOR-PM3-QUIZ-003-06"
      },
      {
        "type": "mc",
        "q": "당근은 어떤 음식인가요?",
        "options": [
          "음료",
          "채소",
          "과자",
          "고기"
        ],
        "correct": 1,
        "translation": {
          "question": "Carrot belongs to which food group?",
          "options": [
            "Drink",
            "Vegetable",
            "Snack",
            "Meat"
          ]
        },
        "explanation": "당근 means carrot, a vegetable that grows in the ground.",
        "id": "KOR-PM3-QUIZ-003-07"
      },
      {
        "type": "tf",
        "q": "빵은 먹는 음식이에요.",
        "expected": true,
        "translation": {
          "question": "Bread is food that people eat.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "빵 means bread, a food made from flour and baked.",
        "id": "KOR-PM3-QUIZ-003-08"
      },
      {
        "type": "drop",
        "q": "아침에 마시는 흰색 음료는 ____예요.",
        "expected": "우유",
        "options": [
          "우유",
          "소금"
        ],
        "translation": {
          "question": "A white drink we can have at breakfast is ____.",
          "options": [
            "Milk",
            "Salt"
          ]
        },
        "explanation": "우유 means milk, a white drink.",
        "id": "KOR-PM3-QUIZ-003-09"
      },
      {
        "type": "mc",
        "q": "맛이 달콤한 것을 나타내는 말은 무엇인가요?",
        "options": [
          "짜요",
          "매워요",
          "달아요",
          "써요"
        ],
        "correct": 2,
        "translation": {
          "question": "Which word means tastes sweet?",
          "options": [
            "Salty",
            "Spicy",
            "Sweet",
            "Bitter"
          ]
        },
        "explanation": "달아요 means something tastes sweet.",
        "id": "KOR-PM3-QUIZ-003-10"
      }
    ],
    "학교와 물건": [
      {
        "type": "mc",
        "q": "지우개는 무엇인가요?",
        "options": [
          "자",
          "지우개",
          "책",
          "가방"
        ],
        "correct": 1,
        "translation": {
          "question": "Which word means eraser?",
          "options": [
            "Ruler",
            "Eraser",
            "Book",
            "Bag"
          ]
        },
        "explanation": "지우개 means eraser, a tool for removing pencil marks.",
        "id": "KOR-PM3-QUIZ-004-01"
      },
      {
        "type": "tf",
        "q": "공책은 글씨를 쓰는 데 사용해요.",
        "expected": true,
        "translation": {
          "question": "A notebook is used for writing.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "공책 means notebook, which has pages for writing.",
        "id": "KOR-PM3-QUIZ-004-02"
      },
      {
        "type": "drop",
        "q": "길이를 잴 때 ____를 사용해요.",
        "expected": "자",
        "options": [
          "자",
          "우산"
        ],
        "translation": {
          "question": "We use a ____ to measure length.",
          "options": [
            "Ruler",
            "Umbrella"
          ]
        },
        "explanation": "자 means ruler, a tool used to measure length.",
        "id": "KOR-PM3-QUIZ-004-03"
      },
      {
        "type": "mc",
        "q": "교실을 나타내는 말은 무엇인가요?",
        "options": [
          "운동장",
          "교실",
          "식당",
          "병원"
        ],
        "correct": 1,
        "translation": {
          "question": "Which word means classroom?",
          "options": [
            "Playground",
            "Classroom",
            "Canteen",
            "Hospital"
          ]
        },
        "explanation": "교실 means classroom, where pupils learn lessons.",
        "id": "KOR-PM3-QUIZ-004-04"
      },
      {
        "type": "tf",
        "q": "가위는 종이를 붙이는 도구예요.",
        "expected": false,
        "translation": {
          "question": "Scissors are a tool for sticking paper.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "가위 means scissors, a tool used to cut paper.",
        "id": "KOR-PM3-QUIZ-004-05"
      },
      {
        "type": "drop",
        "q": "책을 넣어 가지고 다니는 것은 ____이에요.",
        "expected": "가방",
        "options": [
          "가방",
          "의자"
        ],
        "translation": {
          "question": "We carry books in a ____.",
          "options": [
            "Bag",
            "Chair"
          ]
        },
        "explanation": "가방 means bag, something used to carry books and other things.",
        "id": "KOR-PM3-QUIZ-004-06"
      },
      {
        "type": "mc",
        "q": "칠판은 무엇인가요?",
        "options": [
          "시계",
          "칠판",
          "공책",
          "신발"
        ],
        "correct": 1,
        "translation": {
          "question": "Which word means board used for teaching?",
          "options": [
            "Clock",
            "Board",
            "Notebook",
            "Shoes"
          ]
        },
        "explanation": "칠판 means board, where teachers can write during lessons.",
        "id": "KOR-PM3-QUIZ-004-07"
      },
      {
        "type": "tf",
        "q": "도서관은 책을 읽거나 빌리는 곳이에요.",
        "expected": true,
        "translation": {
          "question": "A library is a place to read or borrow books.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "도서관 means library, a place to read or borrow books.",
        "id": "KOR-PM3-QUIZ-004-08"
      },
      {
        "type": "drop",
        "q": "종이를 자를 때 ____를 사용해요.",
        "expected": "가위",
        "options": [
          "가위",
          "지우개"
        ],
        "translation": {
          "question": "We use ____ to cut paper.",
          "options": [
            "Scissors",
            "Eraser"
          ]
        },
        "explanation": "가위 means scissors, a tool with blades for cutting.",
        "id": "KOR-PM3-QUIZ-004-09"
      },
      {
        "type": "mc",
        "q": "체육을 하는 장소를 나타내는 말은 무엇인가요?",
        "options": [
          "운동장",
          "교실",
          "도서관",
          "화장실"
        ],
        "correct": 0,
        "translation": {
          "question": "Which word means a school playground or sports ground?",
          "options": [
            "Sports ground",
            "Classroom",
            "Library",
            "Bathroom"
          ]
        },
        "explanation": "운동장 means playground or sports ground, where pupils can exercise.",
        "id": "KOR-PM3-QUIZ-004-10"
      }
    ],
    "날씨와 옷": [
      {
        "type": "mc",
        "q": "비가 오는 날 사용하는 물건은 무엇인가요?",
        "options": [
          "모자",
          "우산",
          "장갑",
          "양말"
        ],
        "correct": 1,
        "translation": {
          "question": "What do we use on a rainy day?",
          "options": [
            "Hat",
            "Umbrella",
            "Gloves",
            "Socks"
          ]
        },
        "explanation": "우산 means umbrella, which helps keep us dry in the rain.",
        "id": "KOR-PM3-QUIZ-005-01"
      },
      {
        "type": "tf",
        "q": "눈은 추운 날에 내릴 수 있어요.",
        "expected": true,
        "translation": {
          "question": "Snow can fall on cold days.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "눈 means snow when talking about weather. Snow forms in very cold clouds.",
        "id": "KOR-PM3-QUIZ-005-02"
      },
      {
        "type": "drop",
        "q": "발에 신는 것은 ____이에요.",
        "expected": "신발",
        "options": [
          "신발",
          "모자"
        ],
        "translation": {
          "question": "We wear ____ on our feet.",
          "options": [
            "Shoes",
            "Hat"
          ]
        },
        "explanation": "신발 means shoes, clothing worn on our feet.",
        "id": "KOR-PM3-QUIZ-005-03"
      },
      {
        "type": "mc",
        "q": "햇빛이 강할 때 머리에 쓰는 것은 무엇인가요?",
        "options": [
          "장갑",
          "모자",
          "양말",
          "바지"
        ],
        "correct": 1,
        "translation": {
          "question": "What can we wear on our head in strong sunlight?",
          "options": [
            "Gloves",
            "Hat",
            "Socks",
            "Trousers"
          ]
        },
        "explanation": "모자 means hat, which can shade our head from sunlight.",
        "id": "KOR-PM3-QUIZ-005-04"
      },
      {
        "type": "tf",
        "q": "장갑은 발에 신는 옷이에요.",
        "expected": false,
        "translation": {
          "question": "Gloves are worn on feet.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "장갑 means gloves, which cover and protect our hands.",
        "id": "KOR-PM3-QUIZ-005-05"
      },
      {
        "type": "drop",
        "q": "비가 오면 하늘에서 ____가 내려요.",
        "expected": "비",
        "options": [
          "비",
          "바람"
        ],
        "translation": {
          "question": "When it rains, ____ falls from the sky.",
          "options": [
            "Rain",
            "Wind"
          ]
        },
        "explanation": "비 means rain, water droplets falling from clouds.",
        "id": "KOR-PM3-QUIZ-005-06"
      },
      {
        "type": "mc",
        "q": "흐린 날씨를 나타내는 말은 무엇인가요?",
        "options": [
          "맑아요",
          "흐려요",
          "더워요",
          "추워요"
        ],
        "correct": 1,
        "translation": {
          "question": "Which phrase means the weather is cloudy?",
          "options": [
            "Clear",
            "Cloudy",
            "Hot",
            "Cold"
          ]
        },
        "explanation": "흐려요 describes cloudy weather when clouds cover much of the sky.",
        "id": "KOR-PM3-QUIZ-005-07"
      },
      {
        "type": "tf",
        "q": "양말은 발에 신는 옷이에요.",
        "expected": true,
        "translation": {
          "question": "Socks are worn on feet.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "양말 means socks, soft clothing worn on our feet.",
        "id": "KOR-PM3-QUIZ-005-08"
      },
      {
        "type": "drop",
        "q": "추울 때 손을 따뜻하게 하려면 ____을 껴요.",
        "expected": "장갑",
        "options": [
          "장갑",
          "신발"
        ],
        "translation": {
          "question": "We wear ____ to keep our hands warm.",
          "options": [
            "Gloves",
            "Shoes"
          ]
        },
        "explanation": "장갑 means gloves, which help keep our hands warm.",
        "id": "KOR-PM3-QUIZ-005-09"
      },
      {
        "type": "mc",
        "q": "바지는 몸의 어느 부분에 입나요?",
        "options": [
          "머리",
          "다리",
          "손",
          "목"
        ],
        "correct": 1,
        "translation": {
          "question": "Trousers are worn on which part of the body?",
          "options": [
            "Head",
            "Legs",
            "Hands",
            "Neck"
          ]
        },
        "explanation": "바지 means trousers, which cover the legs.",
        "id": "KOR-PM3-QUIZ-005-10"
      }
    ],
    "주격 조사 이와 가": [
      {
        "type": "mc",
        "q": "‘고양이____ 자요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "이",
          "가",
          "을",
          "에"
        ],
        "correct": 1,
        "translation": {
          "question": "Choose the subject particle: 'The cat is sleeping.'",
          "options": [
            "Subject particle after consonant",
            "Subject particle after vowel",
            "Object particle",
            "Location particle"
          ]
        },
        "explanation": "고양이 ends with a vowel sound, so the subject particle is 가.",
        "id": "KOR-PM3-QUIZ-006-01"
      },
      {
        "type": "tf",
        "q": "‘책이 있어요.’에서 ‘이’는 주어를 나타내요.",
        "expected": true,
        "translation": {
          "question": "In 'There is a book,' 이 marks the subject.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "이 marks the subject after a word ending in a consonant sound.",
        "id": "KOR-PM3-QUIZ-006-02"
      },
      {
        "type": "drop",
        "q": "‘물이 있어요.’에서 물 뒤에는 ____를 써요.",
        "expected": "이",
        "options": [
          "이",
          "가"
        ],
        "translation": {
          "question": "After 물 in 'There is water', use ____.",
          "options": [
            "Subject marker after consonant",
            "Subject marker after vowel"
          ]
        },
        "explanation": "물 ends with the consonant ㄹ, so we add 이 to mark the subject.",
        "id": "KOR-PM3-QUIZ-006-03"
      },
      {
        "type": "mc",
        "q": "‘아기____ 웃어요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "을",
          "이",
          "가",
          "는"
        ],
        "correct": 2,
        "translation": {
          "question": "Choose the subject particle: 'The baby smiles.'",
          "options": [
            "Object particle",
            "Subject marker after consonant",
            "Subject marker after vowel",
            "Topic particle"
          ]
        },
        "explanation": "아기 ends with a vowel sound, so we use 가.",
        "id": "KOR-PM3-QUIZ-006-04"
      },
      {
        "type": "tf",
        "q": "‘꽃가 피어요.’는 주격 조사를 바르게 사용한 문장이에요.",
        "expected": false,
        "translation": {
          "question": "'꽃가 피어요' uses the correct subject particle.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "꽃 ends with a consonant sound, so its subject particle is 이: 꽃이 피어요.",
        "id": "KOR-PM3-QUIZ-006-05"
      },
      {
        "type": "drop",
        "q": "‘사람____ 와요.’에서 사람 뒤에는 ____를 써요.",
        "expected": "이",
        "options": [
          "이",
          "가"
        ],
        "translation": {
          "question": "In 'A person is coming', use ____ after 사람.",
          "options": [
            "Subject marker after consonant",
            "Subject marker after vowel"
          ]
        },
        "explanation": "사람 ends with a consonant sound, so we add 이.",
        "id": "KOR-PM3-QUIZ-006-06"
      },
      {
        "type": "mc",
        "q": "‘비____ 와요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "가",
          "을",
          "이",
          "에"
        ],
        "correct": 0,
        "translation": {
          "question": "Choose the subject particle: 'It rains.'",
          "options": [
            "Subject particle after vowel",
            "Object particle",
            "Subject particle after consonant",
            "Location particle"
          ]
        },
        "explanation": "비 ends with a vowel sound, so 비가 와요 uses 가.",
        "id": "KOR-PM3-QUIZ-006-07"
      },
      {
        "type": "tf",
        "q": "‘나무가 커요.’에서 ‘가’는 주어를 나타내요.",
        "expected": true,
        "translation": {
          "question": "In 'The tree is big,' 가 marks the subject.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "나무 ends with a vowel sound, so 가 marks it as the subject.",
        "id": "KOR-PM3-QUIZ-006-08"
      },
      {
        "type": "drop",
        "q": "‘산____ 높아요.’에서 산 뒤에는 ____를 써요.",
        "expected": "이",
        "options": [
          "이",
          "가"
        ],
        "translation": {
          "question": "In 'The mountain is high,' use ____ after 산.",
          "options": [
            "Subject marker after consonant",
            "Subject marker after vowel"
          ]
        },
        "explanation": "산 ends with the consonant ㄴ, so we add 이.",
        "id": "KOR-PM3-QUIZ-006-09"
      },
      {
        "type": "mc",
        "q": "주어가 ‘바다’일 때 알맞은 표현은 무엇인가요?",
        "options": [
          "바다이",
          "바다가",
          "바다을",
          "바다를"
        ],
        "correct": 1,
        "translation": {
          "question": "Which form correctly marks 바다 (sea) as the subject?",
          "options": [
            "Incorrect particle",
            "Correct subject form",
            "Object particle form",
            "Object particle form"
          ]
        },
        "explanation": "바다 ends in a vowel sound, so 바다가 marks it as the subject.",
        "id": "KOR-PM3-QUIZ-006-10"
      }
    ],
    "주제 조사 은과 는": [
      {
        "type": "mc",
        "q": "‘저____ 학생이에요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "은",
          "는",
          "을",
          "가"
        ],
        "correct": 1,
        "translation": {
          "question": "Choose the topic particle: 'I am a student.'",
          "options": [
            "Topic after consonant",
            "Topic after vowel",
            "Object marker",
            "Subject marker"
          ]
        },
        "explanation": "저 ends in a vowel sound, so we add 는 to make 저는.",
        "id": "KOR-PM3-QUIZ-007-01"
      },
      {
        "type": "tf",
        "q": "‘선생님은 친절해요.’에서 ‘은’은 화제를 나타내요.",
        "expected": true,
        "translation": {
          "question": "In 'The teacher is kind,' 은 marks the topic.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "선생님 ends in a consonant sound, so 은 marks the topic.",
        "id": "KOR-PM3-QUIZ-007-02"
      },
      {
        "type": "drop",
        "q": "‘오늘____ 날씨가 좋아요.’에서 오늘 뒤에는 ____를 써요.",
        "expected": "은",
        "options": [
          "은",
          "는"
        ],
        "translation": {
          "question": "In 'Today the weather is nice,' use ____ after 오늘.",
          "options": [
            "Topic marker after consonant",
            "Topic marker after vowel"
          ]
        },
        "explanation": "오늘 ends with a consonant sound, so we add 은.",
        "id": "KOR-PM3-QUIZ-007-03"
      },
      {
        "type": "mc",
        "q": "‘우리____ 친구예요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "을",
          "은",
          "는",
          "를"
        ],
        "correct": 2,
        "translation": {
          "question": "Choose the topic particle: 'We are friends.'",
          "options": [
            "Object marker",
            "Topic after consonant",
            "Topic after vowel",
            "Object marker"
          ]
        },
        "explanation": "우리 ends in a vowel sound, so 우리는 uses 는.",
        "id": "KOR-PM3-QUIZ-007-04"
      },
      {
        "type": "tf",
        "q": "‘책는 재미있어요.’는 조사를 바르게 사용한 문장이에요.",
        "expected": false,
        "translation": {
          "question": "'책는 재미있어요' uses the correct topic particle.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "책 ends with a consonant sound, so we use 은: 책은 재미있어요.",
        "id": "KOR-PM3-QUIZ-007-05"
      },
      {
        "type": "drop",
        "q": "‘집____ 커요.’에서 집 뒤에는 ____를 써요.",
        "expected": "은",
        "options": [
          "은",
          "는"
        ],
        "translation": {
          "question": "In 'The house is big,' use ____ after 집.",
          "options": [
            "Topic after consonant",
            "Topic after vowel"
          ]
        },
        "explanation": "집 ends with a consonant sound, so 집은 uses 은.",
        "id": "KOR-PM3-QUIZ-007-06"
      },
      {
        "type": "mc",
        "q": "‘사과____ 달아요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "는",
          "은",
          "가",
          "을"
        ],
        "correct": 0,
        "translation": {
          "question": "Choose the topic particle: 'The apple is sweet.'",
          "options": [
            "Topic after vowel",
            "Topic after consonant",
            "Subject particle",
            "Object particle"
          ]
        },
        "explanation": "사과 ends in a vowel sound, so 사과는 uses 는.",
        "id": "KOR-PM3-QUIZ-007-07"
      },
      {
        "type": "tf",
        "q": "‘학교는 커요.’에서 ‘는’은 화제를 나타내요.",
        "expected": true,
        "translation": {
          "question": "In 'The school is big,' 는 marks the topic.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "학교 ends with a vowel sound, so 는 marks the topic.",
        "id": "KOR-PM3-QUIZ-007-08"
      },
      {
        "type": "drop",
        "q": "‘이름____ 민수예요.’에서 이름 뒤에는 ____를 써요.",
        "expected": "은",
        "options": [
          "은",
          "는"
        ],
        "translation": {
          "question": "In 'The name is Minsu,' use ____ after 이름.",
          "options": [
            "Topic after consonant",
            "Topic after vowel"
          ]
        },
        "explanation": "이름 ends with a consonant sound, so 이름은 uses 은.",
        "id": "KOR-PM3-QUIZ-007-09"
      },
      {
        "type": "mc",
        "q": "‘날씨’를 화제로 나타낸 표현은 무엇인가요?",
        "options": [
          "날씨은",
          "날씨는",
          "날씨를",
          "날씨이"
        ],
        "correct": 1,
        "translation": {
          "question": "Which form marks 날씨 (weather) as the topic?",
          "options": [
            "Wrong topic form",
            "Topic form",
            "Object form",
            "Wrong subject form"
          ]
        },
        "explanation": "날씨 ends with a vowel sound, so 날씨는 is the topic form.",
        "id": "KOR-PM3-QUIZ-007-10"
      }
    ],
    "장소 조사 에와 에서": [
      {
        "type": "mc",
        "q": "‘학교____ 가요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "에서",
          "에",
          "를",
          "이"
        ],
        "correct": 1,
        "translation": {
          "question": "Choose the particle: 'Go to school.'",
          "options": [
            "Place of action",
            "Destination",
            "Object particle",
            "Subject particle"
          ]
        },
        "explanation": "에 shows a destination, the place someone goes to.",
        "id": "KOR-PM3-QUIZ-008-01"
      },
      {
        "type": "tf",
        "q": "‘도서관에서 책을 읽어요.’에서 ‘에서’는 행동이 일어나는 장소예요.",
        "expected": true,
        "translation": {
          "question": "In 'Read a book at the library,' 에서 marks where the action happens.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "에서 marks the place where an action happens.",
        "id": "KOR-PM3-QUIZ-008-02"
      },
      {
        "type": "drop",
        "q": "‘집____ 돌아가요.’에서 집 뒤에는 ____를 써요.",
        "expected": "에",
        "options": [
          "에",
          "에서"
        ],
        "translation": {
          "question": "In 'Return home,' use ____ after 집.",
          "options": [
            "Destination marker",
            "Place of action marker"
          ]
        },
        "explanation": "집에 돌아가요 uses 에 because home is the destination.",
        "id": "KOR-PM3-QUIZ-008-03"
      },
      {
        "type": "mc",
        "q": "‘공원____ 놀아요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "에서",
          "에",
          "을",
          "이"
        ],
        "correct": 0,
        "translation": {
          "question": "Choose the particle: 'Play in the park.'",
          "options": [
            "Place of action",
            "Destination",
            "Object",
            "Subject"
          ]
        },
        "explanation": "에서 tells us where playing happens.",
        "id": "KOR-PM3-QUIZ-008-04"
      },
      {
        "type": "tf",
        "q": "‘식당에 밥을 먹어요.’는 행동 장소 조사를 바르게 사용한 문장이에요.",
        "expected": false,
        "translation": {
          "question": "'식당에 밥을 먹어요' uses the correct place-of-action particle.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "식당에서 밥을 먹어요 uses 에서 because eating happens at the restaurant.",
        "id": "KOR-PM3-QUIZ-008-05"
      },
      {
        "type": "drop",
        "q": "‘운동장____ 달려요.’에서 운동장 뒤에는 ____를 써요.",
        "expected": "에서",
        "options": [
          "에서",
          "에"
        ],
        "translation": {
          "question": "In 'Run on the sports ground,' use ____ after 운동장.",
          "options": [
            "Place of action",
            "Destination"
          ]
        },
        "explanation": "에서 shows where running takes place.",
        "id": "KOR-PM3-QUIZ-008-06"
      },
      {
        "type": "mc",
        "q": "‘병원____ 가요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "에서",
          "에",
          "를",
          "는"
        ],
        "correct": 1,
        "translation": {
          "question": "Choose the particle: 'Go to the hospital.'",
          "options": [
            "Place of action",
            "Destination",
            "Object",
            "Topic"
          ]
        },
        "explanation": "에 shows the destination, so 병원에 가요 means going to hospital.",
        "id": "KOR-PM3-QUIZ-008-07"
      },
      {
        "type": "tf",
        "q": "‘교실에서 공부해요.’에서 ‘에서’는 공부하는 장소를 나타내요.",
        "expected": true,
        "translation": {
          "question": "In 'Study in the classroom,' 에서 marks where studying happens.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "에서 tells us the place where studying happens.",
        "id": "KOR-PM3-QUIZ-008-08"
      },
      {
        "type": "drop",
        "q": "‘집____ 숙제를 해요.’에서 집 뒤에는 ____를 써요.",
        "expected": "에서",
        "options": [
          "에서",
          "에"
        ],
        "translation": {
          "question": "In 'Do homework at home,' use ____ after 집.",
          "options": [
            "Place of action",
            "Destination"
          ]
        },
        "explanation": "집에서 숙제를 해요 uses 에서 because homework is done at home.",
        "id": "KOR-PM3-QUIZ-008-09"
      },
      {
        "type": "mc",
        "q": "‘가게에 가요.’에서 ‘에’는 무엇을 나타내나요?",
        "options": [
          "목적지",
          "사람",
          "시간",
          "색깔"
        ],
        "correct": 0,
        "translation": {
          "question": "In 'Go to the shop,' what does 에 tell us?",
          "options": [
            "Destination",
            "Person",
            "Time",
            "Colour"
          ]
        },
        "explanation": "에 marks the destination, the shop someone is going to.",
        "id": "KOR-PM3-QUIZ-008-10"
      }
    ],
    "현재형 문장": [
      {
        "type": "mc",
        "q": "‘저는 밥을 ____.’에 알맞은 말은 무엇인가요?",
        "options": [
          "먹어요",
          "먹었어요",
          "먹을 거예요",
          "먹는"
        ],
        "correct": 0,
        "translation": {
          "question": "Choose the present polite verb: 'I eat rice.'",
          "options": [
            "Eat (polite present)",
            "Ate (past)",
            "Will eat (future)",
            "Eating form"
          ]
        },
        "explanation": "먹어요 is the polite present form of 먹다, meaning to eat.",
        "id": "KOR-PM3-QUIZ-009-01"
      },
      {
        "type": "tf",
        "q": "‘물을 마셔요.’는 현재 하는 일을 나타낼 수 있어요.",
        "expected": true,
        "translation": {
          "question": "'Drink water' can describe something happening now.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "마셔요 is a polite present form of 마시다, meaning to drink.",
        "id": "KOR-PM3-QUIZ-009-02"
      },
      {
        "type": "drop",
        "q": "‘저는 책을 ____.’에 알맞은 현재형은 무엇인가요?",
        "expected": "읽어요",
        "options": [
          "읽어요",
          "읽었어요"
        ],
        "translation": {
          "question": "Complete 'I read a book' with the present polite verb ____.",
          "options": [
            "Read",
            "Read (past)"
          ]
        },
        "explanation": "읽어요 is the polite present form of 읽다, meaning to read.",
        "id": "KOR-PM3-QUIZ-009-03"
      },
      {
        "type": "mc",
        "q": "‘학교에 ____.’에 알맞은 현재형 동사는 무엇인가요?",
        "options": [
          "갔어요",
          "가요",
          "갈 거예요",
          "가는"
        ],
        "correct": 1,
        "translation": {
          "question": "Choose the present polite verb: 'Go to school.'",
          "options": [
            "Went",
            "Go",
            "Will go",
            "Going form"
          ]
        },
        "explanation": "가요 is the polite present form of 가다, meaning to go.",
        "id": "KOR-PM3-QUIZ-009-04"
      },
      {
        "type": "tf",
        "q": "‘어제 밥을 먹었어요.’는 현재형 문장이에요.",
        "expected": false,
        "translation": {
          "question": "'I ate rice yesterday' is a present-tense sentence.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "먹었어요 is a past form, used for an action that already happened.",
        "id": "KOR-PM3-QUIZ-009-05"
      },
      {
        "type": "drop",
        "q": "‘아기가 ____.’에 알맞은 현재형은 무엇인가요?",
        "expected": "자요",
        "options": [
          "자요",
          "잤어요"
        ],
        "translation": {
          "question": "Complete 'The baby sleeps' with the present polite verb ____.",
          "options": [
            "Sleeps",
            "Slept"
          ]
        },
        "explanation": "자요 is the polite present form of 자다, meaning to sleep.",
        "id": "KOR-PM3-QUIZ-009-06"
      },
      {
        "type": "mc",
        "q": "‘음악을 ____.’에 알맞은 현재형은 무엇인가요?",
        "options": [
          "들었어요",
          "들어요",
          "들을 거예요",
          "듣는"
        ],
        "correct": 1,
        "translation": {
          "question": "Choose the present polite verb: 'Listen to music.'",
          "options": [
            "Listened",
            "Listen",
            "Will listen",
            "Listening form"
          ]
        },
        "explanation": "들어요 is the polite present form of 듣다, meaning to listen.",
        "id": "KOR-PM3-QUIZ-009-07"
      },
      {
        "type": "tf",
        "q": "‘매일 운동해요.’는 습관을 나타낼 수 있어요.",
        "expected": true,
        "translation": {
          "question": "'I exercise every day' can describe a habit.",
          "options": [
            "True",
            "False"
          ]
        },
        "explanation": "운동해요 means exercise, and 매일 means every day, describing a regular habit.",
        "id": "KOR-PM3-QUIZ-009-08"
      },
      {
        "type": "drop",
        "q": "‘저는 친구를 ____.’에 알맞은 현재형은 무엇인가요?",
        "expected": "만나요",
        "options": [
          "만나요",
          "만났어요"
        ],
        "translation": {
          "question": "Complete 'I meet my friend' with the present polite verb ____.",
          "options": [
            "Meet",
            "Met"
          ]
        },
        "explanation": "만나요 is the polite present form of 만나다, meaning to meet.",
        "id": "KOR-PM3-QUIZ-009-09"
      },
      {
        "type": "mc",
        "q": "‘지금 무엇을 해요?’에서 ‘해요’의 기본형은 무엇인가요?",
        "options": [
          "하다",
          "가다",
          "오다",
          "읽다"
        ],
        "correct": 0,
        "translation": {
          "question": "What is the dictionary form of 해요 in 'What are you doing now?'",
          "options": [
            "Do",
            "Go",
            "Come",
            "Read"
          ]
        },
        "explanation": "해요 is the polite present form of 하다, meaning to do.",
        "id": "KOR-PM3-QUIZ-009-10"
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
        "explanation": "347 + 258 = 605."
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 800 − 275 = ____.",
        "expected": "525",
        "id": "MATH-PM3-QUIZ-U02-001-02",
        "options": [
          "525",
          "535"
        ],
        "explanation": "800 − 275 = 525."
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
        "explanation": "6 × 8 = 48."
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 63 ÷ 7 = ____.",
        "expected": "9",
        "id": "MATH-PM3-QUIZ-U02-001-04",
        "options": [
          "9",
          "8"
        ],
        "explanation": "63 ÷ 7 = 9."
      },
      {
        "type": "tf",
        "q": "450 + 125 = 575.",
        "expected": true,
        "id": "MATH-PM3-QUIZ-U02-001-05",
        "explanation": "450 + 125 = 575."
      },
      {
        "type": "tf",
        "q": "900 − 450 = 550.",
        "expected": false,
        "id": "MATH-PM3-QUIZ-U02-001-06",
        "explanation": "900 − 450 = 450."
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
        "explanation": "8 × 7 = 56."
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
        "explanation": "72 ÷ 9 = 8."
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 4 × 9 = ____.",
        "expected": "36",
        "id": "MATH-PM3-QUIZ-U02-001-09",
        "options": [
          "36",
          "32"
        ],
        "explanation": "4 × 9 = 36."
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
        "explanation": "1,000 − 250 − 150 = 600."
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
        "explanation": "Observing means using our senses, such as sight, hearing and touch, to learn about things."
      },
      {
        "id": "SCI-PM3-QUIZ-U01-001-02",
        "type": "tf",
        "q": "Grouping leaves by their shapes is an example of classifying.",
        "expected": true,
        "explanation": "Classifying means putting things into groups based on features they share, such as shape."
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
        "explanation": "A stopwatch measures how much time has passed, such as the time taken to run a race."
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
        "explanation": "Dry soil and drooping leaves are clues that a plant may need water."
      },
      {
        "id": "SCI-PM3-QUIZ-U01-001-05",
        "type": "tf",
        "q": "A prediction describes only what has already happened.",
        "expected": false,
        "explanation": "A prediction tells us what we think might happen next."
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
        "explanation": "A bar chart helps us show and share the results of an experiment."
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
        "explanation": "Starting at the zero mark helps us measure the full length of an object."
      },
      {
        "id": "SCI-PM3-QUIZ-U01-001-08",
        "type": "tf",
        "q": "Looking straight at a ruler's markings helps us read a measurement correctly.",
        "expected": true,
        "explanation": "Looking straight at the ruler helps us read its markings accurately."
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
        "explanation": "Labels name the parts of a science drawing so others can understand it."
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
        "explanation": "Cleaning and drying a beaker helps keep it ready and safe for its next use."
      }
    ]
  }
};
/* No formula-entry sets are active in this eight-quiz revision. */
const formulaBank={Math:{}};
