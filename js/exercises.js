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
