/* Five PM3 practice quizzes to calibrate answer explanations. */
const exerciseBank={
  "English": {
    "PM3 Practice": [
      {
        "type": "mc",
        "q": "Which sentence is grammatically correct?",
        "options": [
          "The shop next the bank.",
          "The shop is next to the bank.",
          "The shop are next the bank.",
          "The shop beside of bank."
        ],
        "correct": 1,
        "explanation": "'Is' connects the singular subject 'the shop' to its location. 'Next to' tells us that the shop is beside the bank.",
        "id": "ENG-PM3-PRACTICE-001-01"
      },
      {
        "type": "mc",
        "q": "Which word means 'easy to break'?",
        "options": [
          "Ordinary",
          "Enormous",
          "Fragile",
          "Generous"
        ],
        "correct": 2,
        "explanation": "'Fragile' describes something that can break easily, such as thin glass.",
        "id": "ENG-PM3-PRACTICE-001-02"
      },
      {
        "type": "mc",
        "q": "Which sentence describes a regular habit?",
        "options": [
          "I am walking now.",
          "I walk to school every day.",
          "I walked yesterday.",
          "I will walk tomorrow."
        ],
        "correct": 1,
        "explanation": "'I walk to school every day' describes a habit. 'Every day' tells us the action happens regularly, so we use the present simple tense.",
        "id": "ENG-PM3-PRACTICE-001-03"
      },
      {
        "type": "tf",
        "q": "The sentence 'She wakes up early' uses the present simple tense correctly.",
        "expected": true,
        "explanation": "'Wakes' is the present simple form used with 'she'. We usually add '-s' to a verb when the subject is 'he', 'she' or 'it'.",
        "id": "ENG-PM3-PRACTICE-001-04"
      },
      {
        "type": "tf",
        "q": "The sentence 'I goes to school' uses the correct verb form.",
        "expected": false,
        "explanation": "'Go' is the present simple form used with 'I', 'you', 'we' and 'they'. 'Goes' is used with 'he', 'she' and 'it'.",
        "id": "ENG-PM3-PRACTICE-001-05"
      },
      {
        "type": "text",
        "q": "Fill in the blank: They ____ playing in the park now.",
        "expected": "are",
        "explanation": "'Are' is a helping verb used with 'they', 'we' and 'you'. Together with a verb ending in '-ing', it shows something happening now.",
        "id": "ENG-PM3-PRACTICE-001-06"
      },
      {
        "type": "text",
        "q": "Fill in the blank: Yesterday, I ____ to the library.",
        "expected": "went",
        "explanation": "'Went' is the past tense of 'go'. We use it when someone travelled somewhere in the past.",
        "id": "ENG-PM3-PRACTICE-001-07"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: I saw ____ elephant at the zoo.",
        "expected": "an",
        "options": [
          "an",
          "a"
        ],
        "explanation": "'An' is used before a word beginning with a vowel sound. 'Elephant' starts with the vowel sound 'e'.",
        "id": "ENG-PM3-PRACTICE-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: After running in the sun, I felt ____ and drank some water.",
        "expected": "thirsty",
        "options": [
          "thirsty",
          "hungry"
        ],
        "explanation": "'Thirsty' means feeling that you need something to drink, especially water.",
        "id": "ENG-PM3-PRACTICE-001-09"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: She ____ her teeth every morning.",
        "expected": "brushes",
        "options": [
          "brushes",
          "brush"
        ],
        "explanation": "'Brushes' is the present simple form of 'brush' used with 'she'. The ending '-es' is added because 'brush' ends in '-sh'.",
        "id": "ENG-PM3-PRACTICE-001-10"
      }
    ]
  },
  "Malay": {
    "Latihan PM3": [
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
        "explanation": "'Sekolah' means school. It's a place where pupils go to learn, practise skills and study new things.",
        "translation": {
          "question": "Which place is used for learning?",
          "options": [
            "Market",
            "School",
            "Kitchen",
            "Beach"
          ]
        },
        "id": "MAL-PM3-PRACTICE-001-01"
      },
      {
        "type": "mc",
        "q": "Pilih ayat yang betul.",
        "options": [
          "Saya nasi makan.",
          "Makan saya nasi.",
          "Saya makan nasi.",
          "Nasi saya makan sedang."
        ],
        "correct": 2,
        "explanation": "'Saya makan nasi' means 'I eat rice'. In a simple Malay sentence, the person usually comes first, followed by the action and then the object.",
        "translation": {
          "question": "Choose the correct sentence.",
          "options": [
            "I rice eat (wrong order)",
            "Eat I rice (wrong order)",
            "I eat rice",
            "Rice I eat am (wrong order)"
          ]
        },
        "id": "MAL-PM3-PRACTICE-001-02"
      },
      {
        "type": "mc",
        "q": "Manakah kata adjektif dalam ayat 'Bunga itu cantik'?",
        "options": [
          "Bunga",
          "Itu",
          "Cantik",
          "Ayat"
        ],
        "correct": 2,
        "explanation": "'Cantik' means beautiful. It's a 'kata adjektif', a describing word that tells us what the flower looks like.",
        "translation": {
          "question": "Which word is the adjective in 'That flower is beautiful'?",
          "options": [
            "Flower",
            "That",
            "Beautiful",
            "Sentence"
          ]
        },
        "id": "MAL-PM3-PRACTICE-001-03"
      },
      {
        "type": "tf",
        "q": "Perkataan 'mereka' digunakan untuk lebih daripada seorang.",
        "expected": true,
        "explanation": "'Mereka' means they. It's a 'kata ganti nama', or pronoun, used for a group of people.",
        "translation": {
          "question": "The word mereka is used for more than one person.",
          "options": [
            "True",
            "False"
          ]
        },
        "id": "MAL-PM3-PRACTICE-001-04"
      },
      {
        "type": "tf",
        "q": "Perkataan 'menari' ialah kata nama.",
        "expected": false,
        "explanation": "'Menari' means dancing. It's a 'kata kerja', or verb, because it describes an action someone does.",
        "translation": {
          "question": "The word menari is a noun.",
          "options": [
            "True",
            "False"
          ]
        },
        "id": "MAL-PM3-PRACTICE-001-05"
      },
      {
        "type": "text",
        "q": "Isi tempat kosong: Saya minum air menggunakan ____.",
        "expected": "cawan",
        "explanation": "'Cawan' means cup. It's a container we use to hold water or another drink.",
        "translation": {
          "question": "Fill in the blank: I drink water using a ____. ",
          "options": []
        },
        "id": "MAL-PM3-PRACTICE-001-06"
      },
      {
        "type": "text",
        "q": "Isi tempat kosong: Ibu memasak ____ dapur.",
        "expected": "di",
        "explanation": "'Di' means in, at or on. It's a location word that tells us where an action happens, so 'di dapur' means 'in the kitchen'.",
        "translation": {
          "question": "Fill in the blank: Mum is cooking ____ the kitchen.",
          "options": []
        },
        "id": "MAL-PM3-PRACTICE-001-07"
      },
      {
        "type": "drop",
        "q": "Isi tempat kosong: Arnab itu sangat ____.",
        "expected": "comel",
        "options": [
          "comel",
          "berenang"
        ],
        "explanation": "'Comel' means cute. It's a 'kata adjektif' because it describes how the rabbit looks.",
        "translation": {
          "question": "Fill in the blank: The rabbit is very ____. ",
          "options": [
            "Cute",
            "Swimming"
          ]
        },
        "id": "MAL-PM3-PRACTICE-001-08"
      },
      {
        "type": "drop",
        "q": "Isi tempat kosong: Saya menulis dengan ____.",
        "expected": "pensel",
        "options": [
          "pensel",
          "bantal"
        ],
        "explanation": "'Pensel' means pencil. It's a tool for writing or drawing on paper.",
        "translation": {
          "question": "Fill in the blank: I write with a ____. ",
          "options": [
            "Pencil",
            "Pillow"
          ]
        },
        "id": "MAL-PM3-PRACTICE-001-09"
      },
      {
        "type": "drop",
        "q": "Isi tempat kosong: Ali dan Bakar bermain bersama. ____ gembira.",
        "expected": "Mereka",
        "options": [
          "Mereka",
          "Dia"
        ],
        "explanation": "'Mereka' means they. We use this pronoun because 'Ali' and 'Bakar' are two people.",
        "translation": {
          "question": "Fill in the blank: Ali and Bakar play together. ____ are happy.",
          "options": [
            "They",
            "He/She"
          ]
        },
        "id": "MAL-PM3-PRACTICE-001-10"
      }
    ]
  },
  "Korean": {
    "연습 퀴즈": [
      {
        "type": "mc",
        "q": "다음 중 과일은 무엇인가요?",
        "options": [
          "사과",
          "연필",
          "가방",
          "의자"
        ],
        "correct": 0,
        "explanation": "'사과' means apple. An apple is a fruit that grows on a tree and contains seeds.",
        "translation": {
          "question": "Which of these is a fruit?",
          "options": [
            "Apple",
            "Pencil",
            "Bag",
            "Chair"
          ]
        },
        "id": "KOR-PM3-PRACTICE-001-01"
      },
      {
        "type": "mc",
        "q": "‘학교____ 가요.’에 알맞은 조사는 무엇인가요?",
        "options": [
          "이",
          "에서",
          "에",
          "를"
        ],
        "correct": 2,
        "explanation": "'에' marks a destination, the place someone is going to. '학교에 가요' means 'I go to school'.",
        "translation": {
          "question": "Which particle completes 'I go to school'?",
          "options": [
            "Subject particle after consonant",
            "Place of action",
            "Destination particle",
            "Object particle"
          ]
        },
        "id": "KOR-PM3-PRACTICE-001-02"
      },
      {
        "type": "mc",
        "q": "‘저는 학생____.’에 알맞은 말은 무엇인가요?",
        "options": [
          "예요",
          "이에요",
          "가요",
          "에서"
        ],
        "correct": 1,
        "explanation": "'이에요' means 'am' or 'is' in this sentence. We use '이에요' after a noun ending in a consonant sound, like '학생'.",
        "translation": {
          "question": "Complete 'I am a student' with the correct ending.",
          "options": [
            "Copula after vowel",
            "Copula after consonant",
            "Go",
            "Place of action"
          ]
        },
        "id": "KOR-PM3-PRACTICE-001-03"
      },
      {
        "type": "tf",
        "q": "책상은 먹는 음식이에요.",
        "expected": false,
        "explanation": "'책상' means desk. It's a piece of furniture we use for studying, reading or writing.",
        "translation": {
          "question": "A desk is something we eat.",
          "options": [
            "True",
            "False"
          ]
        },
        "id": "KOR-PM3-PRACTICE-001-04"
      },
      {
        "type": "tf",
        "q": "‘고양이가 자요.’에서 ‘가’는 주어를 나타내요.",
        "expected": true,
        "explanation": "'가' is a subject particle. We use it after a noun ending in a vowel sound, like '고양이', to show who is doing the action.",
        "translation": {
          "question": "In 'The cat sleeps', 가 marks the subject.",
          "options": [
            "True",
            "False"
          ]
        },
        "id": "KOR-PM3-PRACTICE-001-05"
      },
      {
        "type": "text",
        "q": "빈칸에 알맞은 말을 쓰세요: 저____ 학생이에요.",
        "expected": "는",
        "explanation": "'는' is a topic particle. We use it after words ending in a vowel sound, like '저', to introduce the topic of the sentence.",
        "translation": {
          "question": "Fill in the blank: As for me, I am a student.",
          "options": []
        },
        "id": "KOR-PM3-PRACTICE-001-06"
      },
      {
        "type": "text",
        "q": "빈칸에 알맞은 말을 쓰세요: 가방____ 있어요.",
        "expected": "이",
        "explanation": "'이' marks the subject after a noun ending in a consonant sound. '가방' ends with 'ㅇ', so we use '이'.",
        "translation": {
          "question": "Fill in the blank: There is a bag.",
          "options": []
        },
        "id": "KOR-PM3-PRACTICE-001-07"
      },
      {
        "type": "drop",
        "q": "추울 때 ____을 입어요.",
        "expected": "외투",
        "options": [
          "외투",
          "수영복"
        ],
        "explanation": "'외투' means coat. It's a warm outer layer of clothing that helps keep us comfortable in cold weather.",
        "translation": {
          "question": "When it's cold, I wear a ____. ",
          "options": [
            "Coat",
            "Swimsuit"
          ]
        },
        "id": "KOR-PM3-PRACTICE-001-08"
      },
      {
        "type": "drop",
        "q": "물을 마실 때 ____을 사용해요.",
        "expected": "컵",
        "options": [
          "컵",
          "신발"
        ],
        "explanation": "'컵' means cup. A cup is a container used for holding water or other drinks.",
        "translation": {
          "question": "When drinking water, we use a ____. ",
          "options": [
            "Cup",
            "Shoes"
          ]
        },
        "id": "KOR-PM3-PRACTICE-001-09"
      },
      {
        "type": "drop",
        "q": "도서관____ 책을 읽어요.",
        "expected": "에서",
        "options": [
          "에서",
          "에"
        ],
        "explanation": "'에서' marks the place where an action happens. '도서관에서 책을 읽어요' means 'I read books at the library'.",
        "translation": {
          "question": "I read books ____ the library.",
          "options": [
            "At (place of action)",
            "To (destination)"
          ]
        },
        "id": "KOR-PM3-PRACTICE-001-10"
      }
    ]
  },
  "Math": {},
  "Science": {
    "Scientific Skills": [
      {
        "type": "mc",
        "q": "Which science skill uses our senses to gather information?",
        "options": [
          "Classifying",
          "Observing",
          "Measuring",
          "Predicting"
        ],
        "correct": 1,
        "explanation": "'Observing' means using our senses, like seeing, hearing or touching, to notice what's happening and collect information.",
        "id": "SCI-PM3-PRACTICE-001-01"
      },
      {
        "type": "mc",
        "q": "Where should we place the end of an object when measuring with a ruler?",
        "options": [
          "At the zero mark",
          "At the middle",
          "At the last number",
          "Anywhere on the ruler"
        ],
        "correct": 0,
        "explanation": "The 'zero mark' is the starting point on a ruler. Lining the object up with zero helps us measure its full length.",
        "id": "SCI-PM3-PRACTICE-001-02"
      },
      {
        "type": "mc",
        "q": "A plant has drooping leaves and very dry soil. What could it need?",
        "options": [
          "More water",
          "More stones",
          "Less space",
          "A taller pot"
        ],
        "correct": 0,
        "explanation": "'Water' helps plants move nutrients and keep their stems and leaves firm. Dry soil and drooping leaves can be signs that the plant needs water.",
        "id": "SCI-PM3-PRACTICE-001-03"
      },
      {
        "type": "tf",
        "q": "Grouping leaves by their shape is an example of classifying.",
        "expected": true,
        "explanation": "'Classifying' means sorting things into groups by features they share, like shape, size or colour.",
        "id": "SCI-PM3-PRACTICE-001-04"
      },
      {
        "type": "tf",
        "q": "A prediction tells us only what has already happened.",
        "expected": false,
        "explanation": "A 'prediction' is an idea about what might happen next. We make one using clues from what we know or observe.",
        "id": "SCI-PM3-PRACTICE-001-05"
      },
      {
        "type": "text",
        "q": "Fill in the blank: A ____ measures how many seconds a race takes.",
        "expected": "stopwatch",
        "explanation": "A 'stopwatch' measures the amount of time that passes between starting and stopping it.",
        "id": "SCI-PM3-PRACTICE-001-06"
      },
      {
        "type": "text",
        "q": "Fill in the blank: Plants absorb water from the soil through their ____.",
        "expected": "roots",
        "explanation": "'Roots' are the parts of a plant that take in water and minerals from the soil.",
        "id": "SCI-PM3-PRACTICE-001-07"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A science drawing should include clear ____.",
        "expected": "labels",
        "options": [
          "labels",
          "numbers"
        ],
        "explanation": "'Labels' are words that name parts of a drawing, helping us understand what each part shows.",
        "id": "SCI-PM3-PRACTICE-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A bar chart helps us ____ results.",
        "expected": "compare",
        "options": [
          "compare",
          "hide"
        ],
        "explanation": "'Compare' means looking at two or more things to see how they differ. A bar chart makes results easy to compare using bars of different lengths.",
        "id": "SCI-PM3-PRACTICE-001-09"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A plant needs sunlight to make ____.",
        "expected": "food",
        "options": [
          "food",
          "soil"
        ],
        "explanation": "Plants use sunlight to make 'food' through photosynthesis. That food gives the plant energy to grow.",
        "id": "SCI-PM3-PRACTICE-001-10"
      }
    ]
  }
};
/* Equation-form multiplication, with the blank randomized for each attempt. */
const formulaBank={Math:{"Basic Operations (Multiply)":[
  {
    "id": "MATH-PM3-MULTIPLY-001-01",
    "type": "equation",
    "operation": "multiply",
    "a": 2,
    "b": 3
  },
  {
    "id": "MATH-PM3-MULTIPLY-001-02",
    "type": "equation",
    "operation": "multiply",
    "a": 3,
    "b": 5
  },
  {
    "id": "MATH-PM3-MULTIPLY-001-03",
    "type": "equation",
    "operation": "multiply",
    "a": 7,
    "b": 2
  },
  {
    "id": "MATH-PM3-MULTIPLY-001-04",
    "type": "equation",
    "operation": "multiply",
    "a": 4,
    "b": 6
  },
  {
    "id": "MATH-PM3-MULTIPLY-001-05",
    "type": "equation",
    "operation": "multiply",
    "a": 8,
    "b": 4
  },
  {
    "id": "MATH-PM3-MULTIPLY-001-06",
    "type": "equation",
    "operation": "multiply",
    "a": 5,
    "b": 9
  },
  {
    "id": "MATH-PM3-MULTIPLY-001-07",
    "type": "equation",
    "operation": "multiply",
    "a": 6,
    "b": 7
  },
  {
    "id": "MATH-PM3-MULTIPLY-001-08",
    "type": "equation",
    "operation": "multiply",
    "a": 9,
    "b": 8
  },
  {
    "id": "MATH-PM3-MULTIPLY-001-09",
    "type": "equation",
    "operation": "multiply",
    "a": 4,
    "b": 7
  },
  {
    "id": "MATH-PM3-MULTIPLY-001-10",
    "type": "equation",
    "operation": "multiply",
    "a": 6,
    "b": 6
  }
]}};
