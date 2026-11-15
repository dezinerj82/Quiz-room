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
        "explanation": "Fragile means easily broken, like a thin glass."
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
        "explanation": "Ordinary means something common or usual in everyday life."
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
        "explanation": "Generous describes someone who willingly gives or shares with others."
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
        "explanation": "An author is a person who writes books."
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
        "explanation": "Went is the past tense of go. We use it when the action has already happened."
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
        "explanation": "In the present tense, we usually add s or es to the verb with he, she or it. That is why she goes is correct."
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
        "explanation": "A question mark (?) shows that a sentence is asking something. That is why 'Where are you going?' ends with one."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-05",
        "q": "In 'The cats are sleeping,' the word 'cats' is plural.",
        "type": "tf",
        "expected": true,
        "explanation": "Cats is plural because the s at the end tells us there is more than one cat."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-06",
        "q": "In 'He play football every Sunday,' the verb agrees with the subject.",
        "type": "tf",
        "expected": false,
        "explanation": "In the present tense, we add s to play when the subject is he, she or it. That makes 'He plays football' correct."
      },
      {
        "id": "ENG-PM3-QUIZ-GRM-001-07",
        "q": "In 'She ran quickly,' the word 'quickly' is an adverb.",
        "type": "tf",
        "expected": true,
        "explanation": "Quickly is an adverb because it describes how she ran, rather than naming a person or thing."
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
        "explanation": "Did is the past tense of do. Yesterday tells us the action happened in the past."
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
        "explanation": "An goes before a word that starts with a vowel sound. Elephant begins with the vowel sound e."
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
    ],
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
        "explanation": "Breakfast is the morning meal. People often eat it before leaving for school.",
        "id": "ENG-PM3-QUIZ-T01-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank with the correct verb: I ____ my teeth every morning. (brush / brushes)",
        "expected": "brush",
        "explanation": "Brush stays in its base form with I in the present simple tense. We say 'I brush my teeth' for a regular habit.",
        "id": "ENG-PM3-QUIZ-T01-001-02",
        "options": [
          "brush",
          "brushes"
        ]
      },
      {
        "type": "tf",
        "q": "The word 'daily' means happening every day.",
        "expected": true,
        "explanation": "Daily means something that happens every day, such as brushing your teeth each morning.",
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
        "explanation": "'I walk to school every day' describes a habit because 'every day' tells us the action happens regularly. We use the present simple for habits.",
        "id": "ENG-PM3-QUIZ-T01-001-04"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: She ____ up at seven every morning. (wake / wakes)",
        "expected": "wakes",
        "explanation": "In the present simple, we usually add s to the verb with he, she or it. That is why wake becomes wakes with she.",
        "id": "ENG-PM3-QUIZ-T01-001-05",
        "options": [
          "wakes",
          "wake"
        ]
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
        "explanation": "Every Monday tells us an action happens once each week, so it describes how often the action repeats.",
        "id": "ENG-PM3-QUIZ-T01-001-06"
      },
      {
        "type": "tf",
        "q": "In the sentence 'He goes to school by bus', 'goes' describes a regular action.",
        "expected": true,
        "explanation": "Goes is in the present simple tense, which we use for regular activities such as travelling to school.",
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
        "explanation": "My brother means he. In the present simple, we add s to play with he, making plays for a daily habit.",
        "id": "ENG-PM3-QUIZ-T01-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: We usually eat lunch at ____. (noon / midnight)",
        "expected": "noon",
        "explanation": "Noon means 12 o'clock in the middle of the day, when many people eat lunch.",
        "id": "ENG-PM3-QUIZ-T01-001-09",
        "options": [
          "noon",
          "midnight"
        ]
      },
      {
        "type": "tf",
        "q": "The sentence 'I goes to school' uses the correct verb form.",
        "expected": false,
        "explanation": "I is followed by the base form of the verb in the present simple tense. That is why the sentence is 'I go to school'.",
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
        "explanation": "'She is reading now' uses is plus reading to show an action happening at this moment.",
        "id": "ENG-PM3-QUIZ-T02-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: The children ____ playing outside now. (is / are)",
        "expected": "are",
        "explanation": "Children refers to more than one child. We use are with plural subjects when describing an action happening now.",
        "id": "ENG-PM3-QUIZ-T02-001-02",
        "options": [
          "are",
          "is"
        ]
      },
      {
        "type": "tf",
        "q": "In 'He is running', the action is happening now.",
        "expected": true,
        "explanation": "'Is running' uses is with an -ing verb to show that he is running at the moment.",
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
        "explanation": "Am goes with I. Adding an -ing verb, as in 'I am eating', shows what is happening right now.",
        "id": "ENG-PM3-QUIZ-T02-001-04"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: The baby is ____. (sleep / sleeping)",
        "expected": "sleeping",
        "explanation": "To describe an action happening now, we use is with a verb ending in -ing. Sleep becomes sleeping.",
        "id": "ENG-PM3-QUIZ-T02-001-05",
        "options": [
          "sleeping",
          "sleep"
        ]
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
        "explanation": "Drawing is the -ing form of draw. With 'she is', it shows the action is happening right now.",
        "id": "ENG-PM3-QUIZ-T02-001-06"
      },
      {
        "type": "tf",
        "q": "The sentence 'They are swim in the pool' is grammatically correct.",
        "expected": false,
        "explanation": "After are, the action verb takes -ing when describing something happening now. Swim becomes swimming.",
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
        "explanation": "'What are you doing?' uses are and doing to ask about an action happening at this moment.",
        "id": "ENG-PM3-QUIZ-T02-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: I ____ doing my homework right now. (am / is)",
        "expected": "am",
        "explanation": "Am is the helping verb used with I. 'I am doing' describes an action happening now.",
        "id": "ENG-PM3-QUIZ-T02-001-09",
        "options": [
          "am",
          "is"
        ]
      },
      {
        "type": "tf",
        "q": "In 'We are dancing', the word 'are' is a helping verb.",
        "expected": true,
        "explanation": "Are helps join we with dancing to show an action happening now. This form is called the present continuous.",
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
        "explanation": "May is the fifth month of the year, immediately after April.",
        "id": "ENG-PM3-QUIZ-T03-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: There are ____ months in a year. (12 / 10)",
        "expected": "12",
        "explanation": "There are 12 months in one year, beginning with January and ending with December.",
        "id": "ENG-PM3-QUIZ-T03-001-02",
        "options": [
          "12",
          "10"
        ]
      },
      {
        "type": "tf",
        "q": "December comes before November.",
        "expected": false,
        "explanation": "November is the eleventh month, followed by December, the twelfth.",
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
        "explanation": "An umbrella helps keep rain off your head and body when walking outside.",
        "id": "ENG-PM3-QUIZ-T03-001-04"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: January is the ____ month of the year. (first / last)",
        "expected": "first",
        "explanation": "January is the first month because it comes at the beginning of the calendar year.",
        "id": "ENG-PM3-QUIZ-T03-001-05",
        "options": [
          "first",
          "last"
        ]
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
        "explanation": "Breezy describes weather with a gentle wind blowing.",
        "id": "ENG-PM3-QUIZ-T03-001-06"
      },
      {
        "type": "tf",
        "q": "The word 'cloudy' describes a sky with many clouds.",
        "expected": true,
        "explanation": "Cloudy describes a sky with many clouds covering it.",
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
        "explanation": "'It is raining today' uses is and the -ing form raining to describe weather happening now.",
        "id": "ENG-PM3-QUIZ-T03-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: The month after August is ____. (September / July)",
        "expected": "September",
        "explanation": "September is the ninth month of the year, immediately after August.",
        "id": "ENG-PM3-QUIZ-T03-001-09",
        "options": [
          "September",
          "July"
        ]
      },
      {
        "type": "tf",
        "q": "February is always the longest month of the year.",
        "expected": false,
        "explanation": "February has 28 days in most years and 29 in leap years, making it the shortest month.",
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
        "explanation": "A kitchen is the room where food is commonly prepared and cooked.",
        "id": "ENG-PM3-QUIZ-T04-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: There ____ two windows in this room. (is / are)",
        "expected": "are",
        "explanation": "Two windows means more than one window. We use are with plural subjects.",
        "id": "ENG-PM3-QUIZ-T04-001-02",
        "options": [
          "are",
          "is"
        ]
      },
      {
        "type": "tf",
        "q": "The word 'furniture' includes chairs and tables.",
        "expected": true,
        "explanation": "Furniture means movable items used in a home, such as chairs, tables and beds.",
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
        "explanation": "Under tells us the bag is in a lower position than the table. It describes where the bag is.",
        "id": "ENG-PM3-QUIZ-T04-001-04"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: The cat is ____ the box, not outside it. (inside / above)",
        "expected": "inside",
        "explanation": "Inside means within something, such as a cat sitting within a box.",
        "id": "ENG-PM3-QUIZ-T04-001-05",
        "options": [
          "inside",
          "above"
        ]
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
        "explanation": "Downstairs means on a lower floor of a building.",
        "id": "ENG-PM3-QUIZ-T04-001-06"
      },
      {
        "type": "tf",
        "q": "In 'The lamp is beside the sofa', 'beside' tells us the lamp's position.",
        "expected": true,
        "explanation": "Beside means next to. It tells us the lamp is next to the sofa.",
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
        "explanation": "We say 'there are' when talking about more than one item. Three chairs is plural.",
        "id": "ENG-PM3-QUIZ-T04-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A person usually sleeps in a ____. (bed / sink)",
        "expected": "bed",
        "explanation": "A bed is a piece of furniture where people lie down to sleep.",
        "id": "ENG-PM3-QUIZ-T04-001-09",
        "options": [
          "bed",
          "sink"
        ]
      },
      {
        "type": "tf",
        "q": "The word 'behind' means the same as 'in front of'.",
        "expected": false,
        "explanation": "Behind means at the back of something, such as a bag behind a chair.",
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
        "explanation": "An apple is a fruit that grows on a tree and contains seeds.",
        "id": "ENG-PM3-QUIZ-T05-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: I would like ____ orange. (a / an)",
        "expected": "an",
        "explanation": "An is used before words that begin with a vowel sound. Orange starts with the vowel sound o.",
        "id": "ENG-PM3-QUIZ-T05-001-02",
        "options": [
          "an",
          "a"
        ]
      },
      {
        "type": "tf",
        "q": "We use 'some' with plural nouns, as in 'some apples'.",
        "expected": true,
        "explanation": "Some can describe an unspecified number of things, such as some apples or some bananas.",
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
        "explanation": "A goes before a singular word beginning with a consonant sound. Banana starts with the b sound.",
        "id": "ENG-PM3-QUIZ-T05-001-04"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: She drinks a glass of ____. (water / plate)",
        "expected": "water",
        "explanation": "Water is a liquid that people drink to stay hydrated.",
        "id": "ENG-PM3-QUIZ-T05-001-05",
        "options": [
          "water",
          "plate"
        ]
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
        "explanation": "Cheese is a food made by turning milk into a solid food.",
        "id": "ENG-PM3-QUIZ-T05-001-06"
      },
      {
        "type": "tf",
        "q": "The phrase 'two breads' is the usual way to count two slices of bread.",
        "expected": false,
        "explanation": "Bread is usually counted by slices or loaves. Two slices of bread means two individual pieces.",
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
        "explanation": "Tomato becomes tomatoes in the plural. We add es to this word when talking about more than one.",
        "id": "ENG-PM3-QUIZ-T05-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: The soup is very ____. (hot / loudly)",
        "expected": "hot",
        "explanation": "Hot is an adjective because it describes the temperature of the soup.",
        "id": "ENG-PM3-QUIZ-T05-001-09",
        "options": [
          "hot",
          "loudly"
        ]
      },
      {
        "type": "tf",
        "q": "A recipe gives instructions for preparing food.",
        "expected": true,
        "explanation": "A recipe explains which ingredients to use and the steps needed to prepare a dish.",
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
        "explanation": "A library lends books so people can read them at home or in the library.",
        "id": "ENG-PM3-QUIZ-T06-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: The doctor works at a ____. (hospital / cinema)",
        "expected": "hospital",
        "explanation": "A hospital is a place where doctors and nurses care for people who are ill or injured.",
        "id": "ENG-PM3-QUIZ-T06-001-02",
        "options": [
          "hospital",
          "cinema"
        ]
      },
      {
        "type": "tf",
        "q": "A pedestrian is a person who travels on foot.",
        "expected": true,
        "explanation": "A pedestrian is a person travelling on foot, such as someone walking along a pavement.",
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
        "explanation": "A post office is a place where people can send letters and parcels.",
        "id": "ENG-PM3-QUIZ-T06-001-04"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: We wait for the bus at the bus ____. (stop / shop)",
        "expected": "stop",
        "explanation": "A bus stop is a marked place where buses stop to pick up or drop off passengers.",
        "id": "ENG-PM3-QUIZ-T06-001-05",
        "options": [
          "stop",
          "shop"
        ]
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
        "explanation": "Go left gives a direction by telling someone to turn towards their left side.",
        "id": "ENG-PM3-QUIZ-T06-001-06"
      },
      {
        "type": "tf",
        "q": "A zebra crossing is a marked place where pedestrians can cross the road.",
        "expected": true,
        "explanation": "A zebra crossing is a marked area on the road that helps pedestrians cross safely.",
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
        "explanation": "Next to means beside. It tells us the shop is beside the bank.",
        "id": "ENG-PM3-QUIZ-T06-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: Stop when the traffic light is ____. (red / green)",
        "expected": "red",
        "explanation": "A red traffic light tells road users to stop so other traffic can move safely.",
        "id": "ENG-PM3-QUIZ-T06-001-09",
        "options": [
          "red",
          "green"
        ]
      },
      {
        "type": "tf",
        "q": "The word 'opposite' can mean across from another place.",
        "expected": true,
        "explanation": "Opposite can mean on the other side of a street or facing another place.",
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
        "explanation": "Ate is the past tense of eat. We use ate for food eaten earlier.",
        "id": "ENG-PM3-QUIZ-T07-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: Yesterday, we ____ football. (played / play)",
        "expected": "played",
        "explanation": "Played is the past tense of play. We add ed to many regular verbs to describe actions that already happened.",
        "id": "ENG-PM3-QUIZ-T07-001-02",
        "options": [
          "played",
          "play"
        ]
      },
      {
        "type": "tf",
        "q": "The word 'built' is the past tense of 'build'.",
        "expected": true,
        "explanation": "Built is the past tense of build. It changes spelling instead of taking the usual ed ending.",
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
        "explanation": "Visited has an ed ending because visit is a regular verb describing an action in the past.",
        "id": "ENG-PM3-QUIZ-T07-001-04"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: Last night, I ____ a storybook. (read / reads)",
        "expected": "read",
        "explanation": "Read is spelled the same in the present and past, but the past form is pronounced 'red'.",
        "id": "ENG-PM3-QUIZ-T07-001-05",
        "options": [
          "read",
          "reads"
        ]
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
        "explanation": "Bought is the past tense of buy. Its spelling changes when we describe an earlier purchase.",
        "id": "ENG-PM3-QUIZ-T07-001-06"
      },
      {
        "type": "tf",
        "q": "In the sentence 'He was happy yesterday', 'was' is in the past tense.",
        "expected": true,
        "explanation": "Was is the past form of am or is. Yesterday tells us the feeling happened in the past.",
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
        "explanation": "Saw is the past tense of see. We use saw for something seen earlier.",
        "id": "ENG-PM3-QUIZ-T07-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: They ____ at home yesterday. (were / was)",
        "expected": "were",
        "explanation": "Were is the past form of are when used with they or we.",
        "id": "ENG-PM3-QUIZ-T07-001-09",
        "options": [
          "were",
          "was"
        ]
      },
      {
        "type": "tf",
        "q": "The sentence 'I goed to the park' uses the correct past tense.",
        "expected": false,
        "explanation": "Went is the past tense of go. It changes spelling because go is an irregular verb.",
        "id": "ENG-PM3-QUIZ-T07-001-10"
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
        "explanation": "A dolphin is a mammal because it breathes air, gives birth to live young and feeds its babies milk.",
        "id": "ENG-PM3-QUIZ-T09-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A young cat is called a ____. (kitten / puppy)",
        "expected": "kitten",
        "explanation": "A kitten is a young cat. A puppy is a young dog.",
        "id": "ENG-PM3-QUIZ-T09-001-02",
        "options": [
          "kitten",
          "puppy"
        ]
      },
      {
        "type": "tf",
        "q": "A butterfly has six legs.",
        "expected": true,
        "explanation": "An adult butterfly is an insect. Insects have six legs, so butterflies have six legs too.",
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
        "explanation": "Roots absorb water from the soil and carry it to the rest of the plant.",
        "id": "ENG-PM3-QUIZ-T09-001-04"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: Birds use their ____ to fly. (wings / fins)",
        "expected": "wings",
        "explanation": "Wings help birds move through the air when they fly.",
        "id": "ENG-PM3-QUIZ-T09-001-05",
        "options": [
          "wings",
          "fins"
        ]
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
        "explanation": "The ocean is a large body of salt water where many fish live.",
        "id": "ENG-PM3-QUIZ-T09-001-06"
      },
      {
        "type": "tf",
        "q": "The word 'nocturnal' describes animals that are active mainly at night.",
        "expected": true,
        "explanation": "Nocturnal means active mainly at night, like many owls and bats.",
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
        "explanation": "Tall is an adjective because it describes the height of the tree.",
        "id": "ENG-PM3-QUIZ-T09-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A plant needs water and ____ to grow well. (light / plastic)",
        "expected": "light",
        "explanation": "Plants use light to make food through photosynthesis, which helps them grow.",
        "id": "ENG-PM3-QUIZ-T09-001-09",
        "options": [
          "light",
          "plastic"
        ]
      },
      {
        "type": "tf",
        "q": "The word 'habitat' means an animal's natural home.",
        "expected": true,
        "explanation": "A habitat is the natural place where an animal or plant lives and finds what it needs.",
        "id": "ENG-PM3-QUIZ-T09-001-10"
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
        "explanation": "Kucing means cat. A cat is an animal with fur, whiskers and four legs."
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
        "explanation": "Pisang means banana. A banana is a fruit that grows in bunches on a banana plant."
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
        "explanation": "Cawan means cup. A cup is used to hold water or another drink."
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
        "explanation": "Ayam means chicken. A chicken is a bird, and birds are animals."
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
        "explanation": "Pensel means pencil. A pencil is a tool for writing and drawing on paper."
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
        "explanation": "Hidung means nose. It is a body part that helps us smell and breathe."
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
        "explanation": "Satu means one. It is the first number when we count upwards."
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
        "explanation": "Katil means bed. A bed is furniture made for lying down and sleeping."
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
        "explanation": "Sekolah means school. It is a place where pupils go to study and learn."
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
        "explanation": "Saya means I, makan means eat and nasi means rice. Malay sentences usually put the person first, then the action, then the thing affected by the action."
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
        "explanation": "Saya means I. We use it to talk about ourselves, the person speaking."
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
        "explanation": "Membaca means reading. It is a kata kerja, or action word, because it tells us what Ali does with the book."
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
        "explanation": "Mereka means they. It is a kata ganti nama, or pronoun, used for a group of people."
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
        "explanation": "Ayat tanya means a question sentence. A question mark (?) at the end shows that someone is asking something."
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
        "explanation": "Merah means red. It is a kata adjektif, or describing word, because it tells us the shirt's colour."
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
        "explanation": "Bulat means round. It is a kata adjektif because it describes the ball's shape."
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
        "explanation": "Cantik means beautiful. It is a kata adjektif because it describes how something looks."
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
        "explanation": "Di means in, at or on. It tells us where something happens, so di dapur means in the kitchen."
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
        "explanation": "Di manakah means where. It makes the sentence a question asking about the bag's location."
      }
    ],
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
        "explanation": "Nenek means grandmother. Your father's mother is your grandmother because she is the mother of one of your parents.",
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
        "explanation": "Abang means older brother. It describes a male sibling who is older than you.",
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
        "explanation": "Kawan means friend. A friend is someone you know and enjoy spending time or playing with.",
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
        "explanation": "Adik perempuan means younger sister. Adik shows that the sibling is younger, and perempuan means female.",
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
        "explanation": "Datuk means grandfather. Your mother's or father's father is your grandfather.",
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
        "explanation": "Ayah means father or Dad. It is a word children use to address or talk about their father.",
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
        "explanation": "Cucu means grandchild. Your child's son or daughter is your grandchild.",
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
        "explanation": "Sepupu means cousin. A cousin is the child of your aunt or uncle.",
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
        "explanation": "Kakak means older sister. Kakak tells us the sibling is a girl or woman who is older.",
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
        "explanation": "Sepupu means cousin. Your uncle's or aunt's child is your cousin.",
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
        "explanation": "Keju means cheese. Cheese is made from milk, which is turned into a thicker, solid food.",
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
        "explanation": "Air kosong means plain water. It is water without added sugar or flavouring.",
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
        "explanation": "Sudu means spoon. Its bowl-shaped end helps us scoop up soup and other foods.",
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
        "explanation": "Sarapan means breakfast. It is the first meal of the day, usually eaten in the morning.",
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
        "explanation": "Garam means salt. Salt gives food a salty taste.",
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
        "explanation": "Oren means orange. Orange juice is made by squeezing or processing oranges.",
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
        "explanation": "Pisau means knife. Its sharp blade is used to cut food into pieces.",
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
        "explanation": "Sayur-sayuran means vegetables. Many vegetables can be cooked, such as carrots and spinach.",
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
        "explanation": "Gelas means drinking glass. It is a container for holding drinks such as water or juice.",
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
        "explanation": "Masam means sour. Limes taste sour because their juice contains natural acids.",
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
        "explanation": "Burung merpati means pigeon. Pigeons have wings and feathers that help them fly.",
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
        "explanation": "Ikan means fish. Fish live in water and most use gills to take in oxygen from it.",
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
        "explanation": "Akar means roots. Roots absorb water and minerals from the soil for the plant.",
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
        "explanation": "Daun means leaf. Most leaves look green because they contain a green pigment called chlorophyll.",
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
        "explanation": "Rama-rama means butterfly. An adult butterfly is an insect, and insects have six legs.",
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
        "explanation": "Telur means egg. A chick develops inside an egg and hatches when it is ready.",
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
        "explanation": "Gajah means elephant. An elephant uses its long trunk to breathe, smell and pick up things.",
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
        "explanation": "Bunga means flower. Flowers usually grow on the stems or branches of a plant, above the soil.",
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
        "explanation": "Nektar means nectar. Bees collect this sweet liquid from flowers and use it to make honey.",
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
        "explanation": "Katak means frog. A frog's long, strong back legs help it push off the ground and jump.",
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
        "explanation": "Farmasi means pharmacy. A pharmacy is where a pharmacist prepares or supplies medicines.",
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
        "explanation": "Perpustakaan means library. It is a place where people can read and borrow books.",
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
        "explanation": "Kapal terbang means aeroplane. It has wings and engines that allow it to travel through the air.",
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
        "explanation": "Stesen kereta api means railway station. It is where people wait for, board or leave trains.",
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
        "explanation": "Lampu isyarat means traffic light. Its different coloured lights tell road users when to stop or move.",
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
        "explanation": "Lintasan belang means zebra crossing. Its painted stripes mark a place for people to cross the road.",
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
        "explanation": "Kereta api means train. A train travels along tracks called railway lines.",
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
        "explanation": "Pelabuhan means harbour or port. It is a place where ships can stop and dock.",
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
        "explanation": "Pejabat pos means post office. People use it to send letters and parcels.",
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
        "explanation": "Zoo means zoo. It is a place where different animals are cared for and can be seen by visitors.",
        "id": "MAL-PM3-QUIZ-VOC-005-10"
      }
    ],
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
        "explanation": "Doktor means doctor. It is a kata nama because it names a person who helps care for sick people.",
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
        "explanation": "Rumah means house. It is a kata nama because nouns can name places as well as people and things.",
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
        "explanation": "Arnab means rabbit. It is a kata nama because it names an animal.",
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
        "explanation": "Malaysia is a kata nama khas, or proper noun, because it names one particular country. Proper nouns begin with capital letters.",
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
        "explanation": "Kata nama means noun. Nouns can name places, such as school, market or park.",
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
        "explanation": "Rak means shelf. It is a kata nama because it names a thing used for keeping books.",
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
        "explanation": "Belon means balloon. It is a kata nama because it names the object Mira is holding.",
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
        "explanation": "Menari means dancing. It is a kata kerja, or verb, because it names an action someone does.",
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
        "explanation": "Isnin means Monday. Day names are proper nouns, so they begin with capital letters.",
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
        "explanation": "Sungai Pahang names one particular river. That makes it a kata nama khas, or proper noun.",
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
        "explanation": "Menyiram means watering. It is a kata kerja because it tells us the action Sara is doing to the flowers.",
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
        "explanation": "Menyanyi means singing. It is a kata kerja because it describes an action someone can do.",
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
        "explanation": "Menendang means kicking. We use this word for hitting a ball with the foot.",
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
        "explanation": "Menutup means closing. It describes the action of moving a door into its closed position.",
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
        "explanation": "Tidur means sleeping. It can be a kata kerja because it describes an action or state someone is in.",
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
        "explanation": "Menggosok gigi means brushing teeth. Menggosok describes the action of rubbing or brushing.",
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
        "explanation": "Berenang means swimming. It describes moving through water using the body.",
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
        "explanation": "Besar means big. It describes size, so it is a kata adjektif, or adjective.",
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
        "explanation": "Membasuh means washing. It is an action we do to clean dirty clothes with water.",
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
        "explanation": "Melompat means jumping. In 'Kelinci melompat tinggi', it tells us what the rabbit is doing.",
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
        "explanation": "Besar means big. It is a kata adjektif because it describes the elephant's size.",
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
        "explanation": "Lembut means soft. It describes how a pillow feels when we touch it.",
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
        "explanation": "Sejuk means cold. It describes the temperature we feel when touching ice.",
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
        "explanation": "Nyaring describes a clear, high-pitched sound, such as the ringing of a bell.",
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
        "explanation": "Kata adjektif means adjective. Adjectives can describe shapes, such as bulat (round).",
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
        "explanation": "Gelap means dark. It describes the sky when there is very little light.",
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
        "explanation": "Manis means sweet. It describes the taste of sugar.",
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
        "explanation": "Laju means fast. It describes the car's speed, so it is a kata adjektif.",
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
        "explanation": "Halus means fine or delicate. It can describe the thin, soft texture of a rabbit's fur.",
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
        "explanation": "Berlubang means full of holes. It describes a road with holes in its surface.",
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
        "explanation": "Kamu means you. It is a pronoun used when speaking directly to someone.",
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
        "explanation": "Dia means he or she. Malay uses the same pronoun for one male or female person.",
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
        "explanation": "Saya means I. Lina uses saya because she is talking about herself.",
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
        "explanation": "Dia means he or she. It replaces Farid's name because the sentence talks about one person.",
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
        "explanation": "Mereka means they. It refers to a group of people instead of naming each one.",
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
        "explanation": "Mereka means they. Ali and Bakar are two people, so this pronoun refers to both of them.",
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
        "explanation": "Aku means I. It is a familiar, casual pronoun for the person who is speaking.",
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
        "explanation": "Awak means you. It is used to address the person we are speaking to.",
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
        "explanation": "Awak means you. Aina uses it because she is asking her friend a question.",
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
        "explanation": "Kami means we and includes the speaker and others. It is used when the listener is outside that group.",
        "id": "MAL-PM3-QUIZ-GRM-005-10"
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
        "explanation": "사과 means apple. Apples are fruits that grow on trees and contain seeds."
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
        "explanation": "고양이 means cat. Cats are animals with fur, whiskers and four legs."
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
        "explanation": "컵 means cup. It is a container for holding water or other drinks."
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
        "explanation": "파란색 means blue. It is a colour, like the colour of a clear daytime sky."
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
        "explanation": "책상 means desk. It is a piece of furniture used for studying, reading or writing."
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
        "explanation": "연필 means pencil. It is a tool for making marks on paper when writing or drawing."
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
        "explanation": "엄마 means Mum. A mother is a member of a child's family."
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
        "explanation": "하나 means one. Korean uses this word when counting one thing, such as one apple."
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
        "explanation": "외투 means coat. A coat is outer clothing that helps keep us warm in cold weather."
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
        "explanation": "병원 means hospital. It is a place where doctors and nurses care for patients."
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
        "explanation": "저는 학생이에요 means 'I am a student'. 학생 ends with the consonant sound ㅇ, so we use 이에요 after it."
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
        "explanation": "저 means I, and 는 marks the topic of the sentence. 저는 is a polite way to say 'as for me' when talking about yourself."
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
        "explanation": "에 marks a destination, or where someone is going. 학교에 가요 means 'I go to school'."
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
        "explanation": "책이에요 means 'It is a book'. 책 ends with the consonant sound ㄱ, so we use 이에요 after it."
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
        "explanation": "있어요 means 'there is' or 'there are'. 사과가 있어요 says that apples are present."
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
        "explanation": "가방 ends with the consonant sound ㅇ. Korean uses the subject particle 이 after a word ending in a consonant."
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
        "explanation": "어디에 가요? means 'Where are you going?' 어디에 asks about the destination, so the sentence is a question."
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
        "explanation": "학교에 가요 means 'go to school'. The particle 에 shows that school is the destination."
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
        "explanation": "저 ends in the vowel sound ㅓ. Korean uses the topic particle 는 after a vowel, making 저는."
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
        "explanation": "친구 ends in the vowel sound ㅜ. Korean uses the subject particle 가 after a vowel, making 친구가."
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
        "explanation": "아버지 means father. It is a respectful Korean word for a male parent.",
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
        "explanation": "할아버지 means grandfather. A grandfather is the father of your mother or father.",
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
        "explanation": "동생 means younger sibling. It can describe a younger brother or a younger sister.",
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
        "explanation": "할머니 means grandmother. A grandmother is the mother of your mother or father.",
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
        "explanation": "선생님 means teacher. It is a respectful word for someone who teaches pupils.",
        "id": "KOR-PM3-QUIZ-002-05"
      },
      {
        "type": "drop",
        "q": "남학생이 자기보다 나이가 많은 남자 형제를 말할 때 ____이라고 해요.",
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
        "explanation": "형 means older brother when a boy or man talks about his older brother. Girls or women use 오빠.",
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
        "explanation": "아기 means baby. A baby is a very young child.",
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
        "explanation": "삼촌 means uncle. It is a family word for an older male relative such as an uncle.",
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
        "explanation": "외할머니 means maternal grandmother. It refers specifically to your mother's mother.",
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
        "explanation": "외삼촌 means maternal uncle. It refers to your mother's brother.",
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
        "explanation": "밥 means cooked rice. In everyday Korean, it can also mean a meal.",
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
        "explanation": "우유 means milk. It is a drink often made from cow's milk.",
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
        "explanation": "케이크 means cake. It is a sweet baked food often served at birthdays.",
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
        "explanation": "국 means soup. It is a dish with broth and other ingredients.",
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
        "explanation": "소금 means salt. Salt gives food a salty taste.",
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
        "explanation": "물 means water. It is a liquid people drink when they are thirsty.",
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
        "explanation": "당근 means carrot. Carrots are vegetables that grow underground.",
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
        "explanation": "빵 means bread. Bread is a food usually made from flour and baked.",
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
        "explanation": "우유 means milk. Milk is a white drink, often made from cow's milk.",
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
        "explanation": "달아요 means 'it tastes sweet'. It describes a taste like sugar or honey.",
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
        "explanation": "지우개 means eraser. An eraser removes pencil marks from paper.",
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
        "explanation": "공책 means notebook. A notebook has pages for writing notes or doing schoolwork.",
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
        "explanation": "자 means ruler in this sentence. A ruler has marks for measuring length.",
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
        "explanation": "교실 means classroom. Pupils learn and teachers give lessons in a classroom.",
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
        "explanation": "가위 means scissors. Their blades help cut paper or other materials.",
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
        "explanation": "가방 means bag. A school bag is used to carry books and other school supplies.",
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
        "explanation": "칠판 means classroom board. A teacher can write or draw on it during lessons.",
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
        "explanation": "도서관 means library. People can read or borrow books there.",
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
        "explanation": "가위 means scissors. Their two blades close together to cut paper.",
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
        "explanation": "운동장 means sports ground or playground. Pupils can run, play and exercise there.",
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
        "explanation": "우산 means umbrella. Its cover helps shield people from falling rain.",
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
        "explanation": "눈 means snow when talking about weather. Snow is made of frozen ice crystals that fall from clouds.",
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
        "explanation": "신발 means shoes. Shoes cover and protect our feet when we walk.",
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
        "explanation": "모자 means hat. A hat covers our head and can provide shade from sunlight.",
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
        "explanation": "장갑 means gloves. Gloves cover our hands and can help keep them warm.",
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
        "explanation": "비 means rain. Rain is water falling from clouds in drops.",
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
        "explanation": "흐려요 means 'it is cloudy'. Clouds cover much of the sky in cloudy weather.",
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
        "explanation": "양말 means socks. Socks are soft clothing worn around our feet inside shoes.",
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
        "explanation": "장갑 means gloves. They cover our fingers and hands to help keep them warm.",
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
        "explanation": "바지 means trousers or pants. They cover our waist and legs.",
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
        "explanation": "고양이 ends with the vowel ㅣ. We add 가 after vowel-ending nouns to mark the subject: 고양이가 자요.",
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
        "explanation": "책 ends with the consonant ㄱ. We use 이 after consonant-ending nouns to mark the subject: 책이 있어요.",
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
        "explanation": "물 ends with the consonant ㄹ. We add 이 to mark it as the subject: 물이 있어요.",
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
        "explanation": "아기 ends with the vowel ㅣ. We add 가 after vowel-ending nouns to mark the subject: 아기가 웃어요.",
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
        "explanation": "꽃 ends with the consonant ㅊ. We use 이 after a consonant-ending noun: 꽃이 피어요.",
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
        "explanation": "사람 ends with the consonant ㅁ. We add 이 to mark the subject: 사람이 와요.",
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
        "explanation": "비 ends with the vowel ㅣ. We add 가 to mark the subject: 비가 와요.",
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
        "explanation": "나무 ends with the vowel ㅜ. The subject marker 가 follows vowel-ending nouns: 나무가 커요.",
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
        "explanation": "산 ends with the consonant ㄴ. We add 이 to mark it as the subject: 산이 높아요.",
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
        "explanation": "바다 ends with the vowel ㅏ. We add 가 to make 바다가 when it is the subject.",
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
        "explanation": "저 ends with the vowel ㅓ. We add the topic marker 는 after vowel-ending words: 저는 학생이에요.",
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
        "explanation": "선생님 ends with the consonant ㅁ. We add 은 to show the teacher is the topic: 선생님은 친절해요.",
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
        "explanation": "오늘 ends with the consonant ㄹ. We add 은 after consonant-ending words to mark the topic: 오늘은.",
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
        "explanation": "우리 ends with the vowel ㅣ. We add 는 to mark the topic: 우리는 친구예요.",
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
        "explanation": "책 ends with the consonant ㄱ. We use 은 after consonant-ending words to mark the topic: 책은 재미있어요.",
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
        "explanation": "집 ends with the consonant ㅂ. We add 은 when the house is the topic: 집은 커요.",
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
        "explanation": "사과 ends with the vowel ㅏ. We add 는 to mark the topic: 사과는 달아요.",
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
        "explanation": "학교 ends with the vowel ㅛ. We add 는 to mark the topic: 학교는 커요.",
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
        "explanation": "이름 ends with the consonant ㅁ. We add 은 when the name is the topic: 이름은 민수예요.",
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
        "explanation": "날씨 ends with the vowel ㅣ. We add 는 to mark the topic: 날씨는.",
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
        "explanation": "에 marks a destination, the place someone goes to. 학교에 가요 means going to school.",
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
        "explanation": "에서 marks the location where an action happens. Reading is done at the library: 도서관에서 책을 읽어요.",
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
        "explanation": "에 marks the destination of movement. 집에 돌아가요 means returning home.",
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
        "explanation": "에서 marks where an action takes place. 공원에서 놀아요 means playing in the park.",
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
        "explanation": "에서 marks where an action happens. Eating takes place at the restaurant: 식당에서 밥을 먹어요.",
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
        "explanation": "에서 marks the place where running happens. 운동장에서 달려요 means running on the sports ground.",
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
        "explanation": "에 marks the destination. 병원에 가요 means going to the hospital.",
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
        "explanation": "에서 marks the place where studying happens. 교실에서 공부해요 means studying in the classroom.",
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
        "explanation": "에서 marks the place where an action happens. 집에서 숙제를 해요 means doing homework at home.",
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
        "explanation": "목적지 means destination. In 가게에 가요, the particle 에 marks the shop as the place someone is going to.",
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
        "explanation": "먹어요 means 'eat' in polite present tense. It comes from 먹다 and describes eating now or regularly.",
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
        "explanation": "마셔요 means 'drink' in polite present tense. It comes from 마시다 and can describe drinking now.",
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
        "explanation": "읽어요 means 'read' in polite present tense. It comes from 읽다 and describes reading now or regularly.",
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
        "explanation": "가요 means 'go' in polite present tense. It comes from 가다 and can describe going somewhere now or regularly.",
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
        "explanation": "먹었어요 is a polite past-tense form of 먹다. The ending -었어요 shows the eating happened earlier.",
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
        "explanation": "자요 means 'sleep' in polite present tense. It comes from 자다 and can describe sleeping now or regularly.",
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
        "explanation": "들어요 means 'listen' in polite present tense. It comes from 듣다, whose final consonant changes in this form.",
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
        "explanation": "운동해요 means 'exercise' in polite present tense. 매일 means every day, so the sentence describes a habit.",
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
        "explanation": "만나요 means 'meet' in polite present tense. It comes from 만나다 and can describe meeting now or regularly.",
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
        "explanation": "하다 means 'to do' and is the dictionary form. Its polite present form is 해요, as in 무엇을 해요?",
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
        "explanation": "Each of the 8 boxes has 7 pencils. Multiply the boxes by the pencils in each box: 8 × 7 = 56."
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
        "explanation": "Sharing 72 sweets equally among 9 children means dividing: 72 ÷ 9 = 8 sweets each."
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
        "explanation": "The shop sold 250 + 150 = 400 stickers. Subtract these from the original 1,000: 1,000 − 400 = 600."
      }
    ],
    "Fractions, Decimals and Percentages": [
      {
        "type": "drop",
        "q": "Fill in the blank: Half of 18 is ____.",
        "expected": "9",
        "explanation": "Half means one of two equal parts, so 18 ÷ 2 = 9.",
        "id": "MATH-PM3-QUIZ-U03-001-01",
        "options": [
          "9",
          "8"
        ]
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
        "explanation": "The bottom number, 4, tells us the whole has four equal parts. The top number, 3, means we take three of them.",
        "id": "MATH-PM3-QUIZ-U03-001-02"
      },
      {
        "type": "tf",
        "q": "0.7 is equal to seven tenths.",
        "expected": true,
        "explanation": "0.7 means seven tenths because the 7 is in the tenths place.",
        "id": "MATH-PM3-QUIZ-U03-001-03"
      },
      {
        "type": "tf",
        "q": "0.5 is greater than 0.8.",
        "expected": false,
        "explanation": "Both numbers have zero ones. Compare the tenths: 5 tenths is smaller than 8 tenths, so 0.5 is smaller.",
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
        "explanation": "25% means one quarter. To find one quarter of 40, divide by four: 40 ÷ 4 = 10.",
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
        "explanation": "The bottom number 10 means tenths. Three tenths is written as 0.3.",
        "id": "MATH-PM3-QUIZ-U03-001-06"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 1/4 is ____%.",
        "expected": "25",
        "explanation": "One quarter is one of four equal parts. 100% ÷ 4 = 25%.",
        "id": "MATH-PM3-QUIZ-U03-001-07",
        "options": [
          "25",
          "20"
        ]
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
        "explanation": "Compare the whole-number parts first, then the decimal digits. 1.25 has the smallest value.",
        "id": "MATH-PM3-QUIZ-U03-001-08"
      },
      {
        "type": "tf",
        "q": "Two quarters make one half.",
        "expected": true,
        "explanation": "1/4 + 1/4 = 2/4. Two out of four equal parts is the same as one half.",
        "id": "MATH-PM3-QUIZ-U03-001-09"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 0.6 + 0.2 = ____.",
        "expected": "0.8",
        "explanation": "0.6 + 0.2 = 0.8. Six tenths plus two tenths makes eight tenths.",
        "id": "MATH-PM3-QUIZ-U03-001-10",
        "options": [
          "0.8",
          "0.7"
        ]
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
        "type": "drop",
        "q": "Fill in the blank: RM50 − RM17 = RM____.",
        "expected": "33",
        "explanation": "RM50 − RM17 = RM33.",
        "id": "MATH-PM3-QUIZ-U04-001-02",
        "options": [
          "33",
          "37"
        ]
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
        "type": "drop",
        "q": "Fill in the blank: RM10.00 − RM4.75 = RM____.",
        "expected": "5.25",
        "explanation": "RM10.00 − RM4.75 = RM5.25.",
        "id": "MATH-PM3-QUIZ-U04-001-05",
        "options": [
          "5.25",
          "5.75"
        ]
      },
      {
        "type": "tf",
        "q": "RM30 is enough to buy two toys costing RM18 and RM15.",
        "expected": false,
        "explanation": "RM18 + RM15 = RM33. The toys cost RM33 altogether, which is more than the RM30 available.",
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
        "explanation": "Two books cost 2 × RM7 = RM14. Add the pen: RM14 + RM3 = RM17.",
        "id": "MATH-PM3-QUIZ-U04-001-07"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 500 sen = RM____.",
        "expected": "5",
        "explanation": "100 sen makes RM1, so 500 ÷ 100 = RM5.",
        "id": "MATH-PM3-QUIZ-U04-001-08",
        "options": [
          "5",
          "50"
        ]
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
        "explanation": "Change is the money left after paying: RM20.00 − RM7.50 = RM12.50.",
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
        "explanation": "One hour has 60 minutes.",
        "id": "MATH-PM3-QUIZ-U05-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 2 hours 15 minutes = ____ minutes.",
        "expected": "135",
        "explanation": "2 × 60 + 15 = 135 minutes.",
        "id": "MATH-PM3-QUIZ-U05-001-02",
        "options": [
          "135",
          "125"
        ]
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
        "explanation": "2:30 p.m. + 30 minutes = 3:00 p.m.",
        "id": "MATH-PM3-QUIZ-U05-001-03"
      },
      {
        "type": "tf",
        "q": "90 seconds is equal to 1 minute 30 seconds.",
        "expected": true,
        "explanation": "One minute has 60 seconds, so 60 + 30 = 90 seconds.",
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
        "explanation": "One hour is 60 minutes, so 60 + 40 = 100 minutes.",
        "id": "MATH-PM3-QUIZ-U05-001-06"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: From 9:15 a.m. to 10:00 a.m. is ____ minutes.",
        "expected": "45",
        "explanation": "From 9:15 a.m. to 10:00 a.m. is 45 minutes.",
        "id": "MATH-PM3-QUIZ-U05-001-07",
        "options": [
          "45",
          "35"
        ]
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
        "explanation": "From 7:30 a.m. to 8:00 a.m. is 30 minutes. Add 10 minutes to reach 8:10 a.m., giving 40 minutes.",
        "id": "MATH-PM3-QUIZ-U05-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 120 seconds = ____ minutes.",
        "expected": "2",
        "explanation": "120 ÷ 60 = 2 minutes.",
        "id": "MATH-PM3-QUIZ-U05-001-09",
        "options": [
          "2",
          "12"
        ]
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
        "explanation": "From 4:20 p.m. to 5:00 p.m. is 40 minutes. Add 5 more minutes to reach 5:05 p.m.",
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
        "explanation": "One metre equals 100 centimetres. A metre is a larger unit of length.",
        "id": "MATH-PM3-QUIZ-U06-001-01"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 2 kg = ____ g.",
        "expected": "2000",
        "explanation": "2 × 1,000 = 2,000 grams.",
        "id": "MATH-PM3-QUIZ-U06-001-02",
        "options": [
          "2000",
          "200"
        ]
      },
      {
        "type": "tf",
        "q": "One litre is equal to 1,000 millilitres.",
        "expected": true,
        "explanation": "1 litre = 1,000 millilitres.",
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
        "explanation": "100 centimetres make 1 metre. 350 cm = 300 cm + 50 cm = 3 m 50 cm.",
        "id": "MATH-PM3-QUIZ-U06-001-04"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: Four bottles contain 250 mL each. Their total volume is ____ mL.",
        "expected": "1000",
        "explanation": "4 × 250 mL = 1,000 mL.",
        "id": "MATH-PM3-QUIZ-U06-001-05",
        "options": [
          "1000",
          "900"
        ]
      },
      {
        "type": "tf",
        "q": "2 kg 500 g is equal to 2,500 g.",
        "expected": true,
        "explanation": "2 kg = 2,000 g. Add 500 g to get 2,500 g.",
        "id": "MATH-PM3-QUIZ-U06-001-06"
      },
      {
        "type": "tf",
        "q": "Three metres is equal to 30 centimetres.",
        "expected": false,
        "explanation": "1 metre = 100 centimetres, so 3 × 100 = 300 centimetres.",
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
        "explanation": "750 mL + 250 mL = 1,000 mL.",
        "id": "MATH-PM3-QUIZ-U06-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: 5 kg − 2 kg = ____ kg.",
        "expected": "3",
        "explanation": "5 kg − 2 kg = 3 kg.",
        "id": "MATH-PM3-QUIZ-U06-001-09",
        "options": [
          "3",
          "2"
        ]
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
        "explanation": "1 m 20 cm = 120 cm. Two ribbons measure 120 × 2 = 240 cm = 2 m 40 cm.",
        "id": "MATH-PM3-QUIZ-U06-001-10"
      }
    ],
    "Shapes": [
      {
        "type": "tf",
        "q": "All four sides of a square have equal lengths.",
        "expected": true,
        "explanation": "A square has four straight sides, and all four are the same length.",
        "id": "MATH-PM3-QUIZ-U07-001-01"
      },
      {
        "type": "tf",
        "q": "A triangle has four corners.",
        "expected": false,
        "explanation": "A triangle has three sides meeting at three corners, called vertices.",
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
        "explanation": "A cube has six flat square faces: top, bottom, front, back and two sides.",
        "id": "MATH-PM3-QUIZ-U07-001-03"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A rectangle has ____ sides.",
        "expected": "4",
        "explanation": "A rectangle has four straight sides, with opposite sides the same length.",
        "id": "MATH-PM3-QUIZ-U07-001-04",
        "options": [
          "4",
          "3"
        ]
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
        "explanation": "A sphere is completely curved, like a ball, so it has zero flat faces.",
        "id": "MATH-PM3-QUIZ-U07-001-05"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A cuboid has ____ vertices.",
        "expected": "8",
        "explanation": "A vertex is a corner where edges meet. A cuboid has eight such corners.",
        "id": "MATH-PM3-QUIZ-U07-001-06",
        "options": [
          "8",
          "6"
        ]
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
        "explanation": "A pentagon is a flat shape with five straight sides.",
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
        "explanation": "A circle has one continuous curved boundary and zero straight sides.",
        "id": "MATH-PM3-QUIZ-U07-001-08"
      },
      {
        "type": "tf",
        "q": "A cylinder has two flat circular faces.",
        "expected": true,
        "explanation": "A cylinder has one flat circular face at each end, giving two circular faces.",
        "id": "MATH-PM3-QUIZ-U07-001-09"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A hexagon has ____ sides.",
        "expected": "6",
        "explanation": "A hexagon is a flat shape with six straight sides.",
        "id": "MATH-PM3-QUIZ-U07-001-10",
        "options": [
          "6",
          "5"
        ]
      }
    ],
    "Location": [
      {
        "type": "tf",
        "q": "On a grid with letters marking columns and numbers marking rows, C2 means column C and row 2.",
        "expected": true,
        "explanation": "In a grid reference, the letter names the column and the number names the row. C2 means column C, row 2.",
        "id": "MATH-PM3-QUIZ-U08-001-01"
      },
      {
        "type": "tf",
        "q": "On a grid with lettered columns and numbered rows, B3 means column 3 and row B.",
        "expected": false,
        "explanation": "On this grid, letters name columns and numbers name rows. B3 means column B and row 3.",
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
        "explanation": "The letter C identifies the column and 2 identifies the row, so the toy is at C2.",
        "id": "MATH-PM3-QUIZ-U08-001-03"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: On a grid with columns A to D, one column to the right of B2 is ____.",
        "expected": "C2",
        "explanation": "Moving right from column B reaches column C. The row stays 2, so the answer is C2.",
        "id": "MATH-PM3-QUIZ-U08-001-04",
        "options": [
          "C2",
          "D2"
        ]
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
        "explanation": "One row below row 3 is row 4. The column stays C, giving C4.",
        "id": "MATH-PM3-QUIZ-U08-001-05"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: One column to the left of D1 is ____.",
        "expected": "C1",
        "explanation": "C comes immediately before D in the lettered columns. The row stays 1, so the answer is C1.",
        "id": "MATH-PM3-QUIZ-U08-001-06",
        "options": [
          "C1",
          "B1"
        ]
      },
      {
        "type": "tf",
        "q": "On a grid with row numbers increasing downward, one row above B4 is B3.",
        "expected": true,
        "explanation": "Moving up from row 4 reaches row 3. The column stays B, giving B3.",
        "id": "MATH-PM3-QUIZ-U08-001-07"
      },
      {
        "type": "tf",
        "q": "If columns A–D run left to right and rows 1–4 run top to bottom, A1 is the top-left cell.",
        "expected": true,
        "explanation": "A is the leftmost column and 1 is the top row, so their meeting point A1 is the top-left cell.",
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
        "explanation": "From B, move right to C and then to D. Two columns right of B2 is D2.",
        "id": "MATH-PM3-QUIZ-U08-001-09"
      },
      {
        "type": "tf",
        "q": "B3 and B4 are in the same row on a letter-column, number-row grid.",
        "expected": false,
        "explanation": "B3 and B4 share column B. The numbers 3 and 4 show that they are in different rows.",
        "id": "MATH-PM3-QUIZ-U08-001-10"
      }
    ],
    "Data Management": [
      {
        "type": "tf",
        "q": "Four tally marks represent a frequency of four.",
        "expected": true,
        "explanation": "One tally mark counts one item. Four tally marks therefore show four items.",
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
        "explanation": "The most popular fruit has the highest count. Bananas have 7 votes, more than the other fruits.",
        "id": "MATH-PM3-QUIZ-U09-001-02"
      },
      {
        "type": "drop",
        "q": "A class votes for a class pet: 5 pupils choose fish, 6 choose rabbits and 4 choose hamsters. Total votes: ____.",
        "expected": "15",
        "explanation": "Add all the votes: 5 + 6 + 4 = 15.",
        "id": "MATH-PM3-QUIZ-U09-001-03",
        "options": [
          "15",
          "12"
        ]
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
        "explanation": "To find how many more, subtract the smaller count: 11 − 6 = 5.",
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
        "explanation": "Add the four groups: 6 + 3 + 8 + 5 = 22 pupils.",
        "id": "MATH-PM3-QUIZ-U09-001-05"
      },
      {
        "type": "tf",
        "q": "A pie chart can show how a whole is divided into parts.",
        "expected": true,
        "explanation": "A pie chart is a circle divided into sections. Each section shows one part of the whole.",
        "id": "MATH-PM3-QUIZ-U09-001-06"
      },
      {
        "type": "tf",
        "q": "Five items can be recorded using four vertical tally marks crossed by a fifth mark.",
        "expected": true,
        "explanation": "Tally marks are grouped in fives. The fifth mark crosses the first four so five items are easy to count.",
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
        "explanation": "The fewest votes means the smallest number. Red has 5, compared with 8 for blue and 6 for green.",
        "id": "MATH-PM3-QUIZ-U09-001-08"
      },
      {
        "type": "drop",
        "q": "Fill in the blank: A table records 12 cats and 9 dogs. There are ____ more cats than dogs.",
        "expected": "3",
        "explanation": "12 − 9 = 3.",
        "id": "MATH-PM3-QUIZ-U09-001-09",
        "options": [
          "3",
          "4"
        ]
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
        "explanation": "Each picture represents 2 pupils. Four pictures show 4 × 2 = 8 pupils.",
        "id": "MATH-PM3-QUIZ-U09-001-10"
      }
    ],
    "Numbers Up to 10 000": [
      {
        "id": "MATH-PM3-QUIZ-U01-001-01",
        "type": "mc",
        "q": "What is the value of 7 in 7,426?",
        "options": [
          "7",
          "70",
          "700",
          "7,000"
        ],
        "correct": 3,
        "explanation": "The digit 7 is in the thousands place, so it represents 7 × 1,000 = 7,000."
      },
      {
        "id": "MATH-PM3-QUIZ-U01-001-02",
        "type": "tf",
        "q": "3,905 is greater than 3,950.",
        "expected": false,
        "explanation": "Both numbers have 3 thousands. Compare the rest: 905 is smaller than 950, so 3,905 is smaller."
      },
      {
        "id": "MATH-PM3-QUIZ-U01-001-03",
        "type": "drop",
        "q": "Round 2,648 to the nearest ten: ____.",
        "expected": "2,650",
        "options": [
          "2,650",
          "2,640"
        ],
        "explanation": "To round to the nearest ten, check the ones digit. It is 8, so 2,648 rounds up to 2,650."
      },
      {
        "id": "MATH-PM3-QUIZ-U01-001-04",
        "type": "mc",
        "q": "Which number comes immediately after 5,999?",
        "options": [
          "5,998",
          "5,990",
          "6,000",
          "6,999"
        ],
        "correct": 2,
        "explanation": "Add one to the last digit of 5,999. The hundreds, tens and ones roll over, making 6,000."
      },
      {
        "id": "MATH-PM3-QUIZ-U01-001-05",
        "type": "tf",
        "q": "In 4,381, the digit 3 has a value of 300.",
        "expected": true,
        "explanation": "The digit 3 is in the hundreds place, so it represents 3 × 100 = 300."
      },
      {
        "id": "MATH-PM3-QUIZ-U01-001-06",
        "type": "drop",
        "q": "Complete the pattern: 1,250, 1,350, 1,450, ____.",
        "expected": "1,550",
        "options": [
          "1,550",
          "1,500"
        ],
        "explanation": "The pattern adds 100 each time. 1,450 + 100 = 1,550."
      },
      {
        "id": "MATH-PM3-QUIZ-U01-001-07",
        "type": "mc",
        "q": "Which number is the smallest?",
        "options": [
          "2,704",
          "2,740",
          "2,074",
          "2,407"
        ],
        "correct": 2,
        "explanation": "All choices have 2 thousands. Compare the hundreds digits next: 0 is the smallest, so 2,074 is smallest."
      },
      {
        "id": "MATH-PM3-QUIZ-U01-001-08",
        "type": "tf",
        "q": "8,000 + 500 + 20 + 6 = 8,526.",
        "expected": true,
        "explanation": "Add each place value: 8,000 + 500 + 20 + 6 = 8,526."
      },
      {
        "id": "MATH-PM3-QUIZ-U01-001-09",
        "type": "drop",
        "q": "Round 7,349 to the nearest hundred: ____.",
        "expected": "7,300",
        "options": [
          "7,300",
          "7,400"
        ],
        "explanation": "To round to the nearest hundred, check the tens digit. It is 4, so 7,349 rounds to 7,300."
      },
      {
        "id": "MATH-PM3-QUIZ-U01-001-10",
        "type": "mc",
        "q": "What number is 6,000 + 40 + 9?",
        "options": [
          "6,490",
          "6,049",
          "6,409",
          "6,940"
        ],
        "correct": 1,
        "explanation": "6,000 + 40 + 9 = 6,049."
      }
    ],
    "Multiplication and Division": [
      {
        "id": "MATH-PM3-QUIZ-U02B-001-01",
        "type": "mc",
        "q": "What is 7 × 8?",
        "options": [
          "54",
          "56",
          "64",
          "48"
        ],
        "correct": 1,
        "explanation": "7 × 8 = 56."
      },
      {
        "id": "MATH-PM3-QUIZ-U02B-001-02",
        "type": "tf",
        "q": "9 × 6 = 54.",
        "expected": true,
        "explanation": "9 × 6 = 54."
      },
      {
        "id": "MATH-PM3-QUIZ-U02B-001-03",
        "type": "drop",
        "q": "Fill in the blank: 72 ÷ 8 = ____.",
        "expected": "9",
        "options": [
          "9",
          "8"
        ],
        "explanation": "72 ÷ 8 = 9."
      },
      {
        "id": "MATH-PM3-QUIZ-U02B-001-04",
        "type": "mc",
        "q": "There are 6 rows with 9 chairs in each row. How many chairs are there?",
        "options": [
          "45",
          "48",
          "54",
          "63"
        ],
        "correct": 2,
        "explanation": "Each row has 9 chairs. Multiply the 6 rows by 9 chairs: 6 × 9 = 54."
      },
      {
        "id": "MATH-PM3-QUIZ-U02B-001-05",
        "type": "tf",
        "q": "42 ÷ 7 = 8.",
        "expected": false,
        "explanation": "42 ÷ 7 = 6."
      },
      {
        "id": "MATH-PM3-QUIZ-U02B-001-06",
        "type": "drop",
        "q": "Fill in the blank: 8 × ____ = 64.",
        "expected": "8",
        "options": [
          "8",
          "7"
        ],
        "explanation": "8 × 8 = 64."
      },
      {
        "id": "MATH-PM3-QUIZ-U02B-001-07",
        "type": "mc",
        "q": "What is 48 ÷ 6?",
        "options": [
          "6",
          "8",
          "9",
          "7"
        ],
        "correct": 1,
        "explanation": "48 ÷ 6 = 8."
      },
      {
        "id": "MATH-PM3-QUIZ-U02B-001-08",
        "type": "tf",
        "q": "5 × 9 = 45.",
        "expected": true,
        "explanation": "5 × 9 = 45."
      },
      {
        "id": "MATH-PM3-QUIZ-U02B-001-09",
        "type": "drop",
        "q": "Fill in the blank: ____ ÷ 4 = 7.",
        "expected": "28",
        "options": [
          "28",
          "24"
        ],
        "explanation": "28 ÷ 4 = 7."
      },
      {
        "id": "MATH-PM3-QUIZ-U02B-001-10",
        "type": "mc",
        "q": "A baker fills 6 bags with 8 biscuits each. How many biscuits are there?",
        "options": [
          "40",
          "42",
          "48",
          "54"
        ],
        "correct": 2,
        "explanation": "Each bag has 8 biscuits. Multiply the 6 bags by 8 biscuits: 6 × 8 = 48."
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
        "explanation": "Unknown substances in a science room can be harmful. Ask the teacher how to handle them safely."
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
        "explanation": "Swallowed food travels down the oesophagus to reach the stomach.",
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
        "explanation": "Neutral water leaves red and blue litmus paper unchanged.",
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
  }
};
/* No formula-entry sets are active in this eight-quiz revision. */
const formulaBank={Math:{}};
