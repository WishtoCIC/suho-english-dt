/* 자동 생성 파일 — 직접 고치지 말고 data/sets/*.json 을 고친 뒤 python3 tools/build_content.py 실행 */
window.DT_SETS = [
 {
  "id": "2026-11-dsb1",
  "title": "DSB1 DT Preview",
  "ko": "11월 DT 시험",
  "added": "2026-11-07",
  "source": [
   "ongdollScan_20261107_0001.pdf",
   "ongdollScan_20261107_0002.pdf"
  ],
  "units": [
   {
    "id": "like",
    "color": "var(--c1)",
    "emoji": "❄️",
    "title": "Do you like ~?",
    "ko": "좋아하니?",
    "page": "DSB1 42~43p",
    "tip": "💡 <b>You</b>로 물어보면 <b>I</b>로 대답해요.<br>💡 <b>he</b>로 물어보면 <b>he</b>로, <b>she</b>로 물어보면 <b>she</b>로!<br>💡 <b>Does</b>로 물어보면 <b>does / doesn't</b>로 대답해요.<br>예) Does she ~? → Yes, she does. / No, she doesn't.",
    "pool": [
     "snowboarding",
     "summer",
     "winter",
     "swimming"
    ],
    "items": [
     {
      "pic": "🏂",
      "q": "Do you like snowboarding?",
      "yn": "👍",
      "a": "Yes, I do. I like {snowboarding}."
     },
     {
      "pic": "🏂",
      "q": "Do you like snowboarding?",
      "yn": "👎",
      "a": "No, I don't. I don't like {snowboarding}."
     },
     {
      "pic": "☀️",
      "q": "Do you like summer?",
      "yn": "👍",
      "a": "Yes, I do. I like {summer}."
     },
     {
      "pic": "☀️",
      "q": "Do you like summer?",
      "yn": "👎",
      "a": "No, I don't. I don't like {summer}."
     },
     {
      "pic": "👦🏊",
      "q": "Does he like swimming?",
      "yn": "👍",
      "a": "Yes, {he} {does}. He likes swimming."
     },
     {
      "pic": "👦🏊",
      "q": "Does he like swimming?",
      "yn": "👎",
      "a": "No, {he} {doesn't}. He doesn't like swimming."
     },
     {
      "pic": "👧🪁",
      "q": "Does she like flying kites?",
      "yn": "👍",
      "a": "Yes, {she} {does}. She likes flying kites."
     },
     {
      "pic": "👧🪁",
      "q": "Does she like flying kites?",
      "yn": "👎",
      "a": "No, {she} {doesn't}. She doesn't like flying kites."
     }
    ]
   },
   {
    "id": "can",
    "color": "var(--c4)",
    "emoji": "🎹",
    "title": "Can you play ~?",
    "ko": "~할 수 있니?",
    "page": "DSB1 90~91p",
    "tip": "💡 Can you ~? = ~할 수 있니?<br>⭕ 할 수 있어: <b>Yes, I can.</b><br>❌ 할 수 없어: <b>No, I can't.</b>",
    "pool": [
     "tennis",
     "piano"
    ],
    "items": [
     {
      "pic": "🎾",
      "q": "Can you play tennis?",
      "yn": "👍",
      "a": "Yes, I {can}. I can play tennis."
     },
     {
      "pic": "🎾",
      "q": "Can you play tennis?",
      "yn": "👎",
      "a": "No, I {can't}. I can't play tennis."
     },
     {
      "pic": "🎹",
      "q": "Can you play the piano?",
      "yn": "👍",
      "a": "Yes, I {can}. I can play the piano."
     },
     {
      "pic": "🎹",
      "q": "Can you play the piano?",
      "yn": "👎",
      "a": "No, I {can't}. I can't play the piano."
     }
    ]
   },
   {
    "id": "much",
    "color": "var(--c3)",
    "emoji": "💰",
    "title": "How much is it?",
    "ko": "얼마예요?",
    "page": "DSB2 42~43p",
    "tip": "💡 지금 가격(세일 중인 가격): <b>How much is it? / How much are they?</b><br>💡 세일하기 전 가격: <b>How much was it? / How much were they?</b><br>🧸 하나면 is / was, 👢 두 개(짝)면 are / were",
    "pool": [
     "11",
     "18",
     "30",
     "45"
    ],
    "items": [
     {
      "pic": "🧸",
      "tag": "18$ ➜ 11$",
      "q": "I want a doll. How much is it?",
      "a": "It's {11} dollars. It's on sale."
     },
     {
      "pic": "🧸",
      "tag": "18$ ➜ 11$",
      "q": "How much was it?",
      "a": "It {was} {18} dollars before."
     },
     {
      "pic": "👢",
      "tag": "45$ ➜ 30$",
      "q": "I want boots. How much are they?",
      "a": "They're {30} dollars. It's on sale."
     },
     {
      "pic": "👢",
      "tag": "45$ ➜ 30$",
      "q": "How much were they?",
      "a": "They {were} {45} dollars before."
     }
    ]
   },
   {
    "id": "eat",
    "color": "var(--c2)",
    "emoji": "🍕",
    "title": "What did you eat?",
    "ko": "뭐 먹었니?",
    "page": "DSB2 90~91p",
    "tip": "💡 eat ➜ <b>ate</b> : 먹었다<br>💡 drink ➜ <b>drank</b> : 마셨다",
    "pool": [
     "salad",
     "milk",
     "pizza",
     "water"
    ],
    "items": [
     {
      "pic": "🥗",
      "q": "What did you eat?",
      "a": "I {ate} some {salad}."
     },
     {
      "pic": "🥛",
      "q": "What did you drink?",
      "a": "I {drank} some {milk}."
     },
     {
      "pic": "🍕",
      "q": "What did you eat?",
      "a": "I {ate} some {pizza}."
     },
     {
      "pic": "💧",
      "q": "What did you drink?",
      "a": "I {drank} some {water}."
     }
    ]
   },
   {
    "id": "doing",
    "color": "var(--c5)",
    "emoji": "🎮",
    "title": "What are you doing?",
    "ko": "뭐 하고 있니?",
    "page": "DSB3 42~43p",
    "tip": "💡 <b>~ing</b> : ~하는 중이에요.<br>💡 뒤에 오는 말을 보고 알맞은 행동 단어를 넣어요.<br>water ➜ drinking, sandwich ➜ eating, video games ➜ playing, medicine ➜ taking",
    "pool": [
     "drinking",
     "eating",
     "playing",
     "taking",
     "laughing",
     "swimming"
    ],
    "items": [
     {
      "pic": "🥤",
      "q": "What are you doing?",
      "a": "I am {drinking} water."
     },
     {
      "pic": "🥪",
      "q": "What are you doing?",
      "a": "I am {eating} a sandwich."
     },
     {
      "pic": "🎮",
      "q": "What is she doing?",
      "a": "She is {playing} video games."
     },
     {
      "pic": "💊",
      "q": "What is she doing?",
      "a": "She is {taking} medicine."
     },
     {
      "pic": "😂",
      "q": "What is he doing?",
      "a": "He is {laughing}."
     },
     {
      "pic": "🏊",
      "q": "What are they doing?",
      "a": "They are {swimming}."
     }
    ]
   }
  ],
  "alt": {
   "he": [
    "she",
    "I"
   ],
   "she": [
    "he",
    "I"
   ],
   "does": [
    "do",
    "is"
   ],
   "doesn't": [
    "don't",
    "isn't"
   ],
   "can": [
    "can't",
    "do"
   ],
   "can't": [
    "can",
    "don't"
   ],
   "was": [
    "were",
    "is"
   ],
   "were": [
    "was",
    "are"
   ],
   "ate": [
    "eat",
    "drank"
   ],
   "drank": [
    "drink",
    "ate"
   ]
  },
  "vocabTitle": "DT REVIEW VOCAB LIST",
  "vocab": [
   {
    "en": "fifteen",
    "ko": "15 (열다섯)",
    "pic": "1️⃣5️⃣"
   },
   {
    "en": "run-ran",
    "ko": "뛰다",
    "pic": "🏃",
    "past": "뛰었다"
   },
   {
    "en": "count-counted",
    "ko": "숫자를 세다",
    "pic": "🔢",
    "past": "숫자를 셌다"
   },
   {
    "en": "catch-caught",
    "ko": "잡다",
    "pic": "🧤",
    "past": "잡았다"
   },
   {
    "en": "sell-sold",
    "ko": "판매하다",
    "pic": "🏪",
    "past": "팔았다"
   },
   {
    "en": "grow-grew",
    "ko": "자라나다",
    "pic": "🌱",
    "past": "자랐다"
   },
   {
    "en": "growl",
    "ko": "으르렁거리다",
    "pic": "🐻"
   },
   {
    "en": "grant-granted",
    "ko": "(소원 등을) 들어주다",
    "pic": "🌠",
    "past": "들어주었다"
   },
   {
    "en": "fly-flew",
    "ko": "날다",
    "pic": "🕊️",
    "past": "날았다"
   },
   {
    "en": "blow-blew",
    "ko": "바람 등을 입으로 불다",
    "pic": "🌬️",
    "past": "불었다"
   },
   {
    "en": "move",
    "ko": "움직이다",
    "pic": "🚚"
   },
   {
    "en": "plant",
    "ko": "심다",
    "pic": "🪴"
   },
   {
    "en": "stay",
    "ko": "머무르다",
    "pic": "🏠"
   },
   {
    "en": "behind",
    "ko": "뒤에",
    "pic": "🫣"
   },
   {
    "en": "stretch-stretched",
    "ko": "기지개를 펴다",
    "pic": "🙆",
    "past": "기지개를 폈다"
   },
   {
    "en": "foolish",
    "ko": "어리석은",
    "pic": "🤪",
    "same": "silly"
   },
   {
    "en": "silly",
    "ko": "어리석은",
    "pic": "🙃",
    "same": "foolish"
   },
   {
    "en": "nice",
    "ko": "좋은, 착한",
    "pic": "😊"
   },
   {
    "en": "wise",
    "ko": "현명한",
    "pic": "🦉"
   },
   {
    "en": "cheap",
    "ko": "저렴한",
    "pic": "🪙"
   },
   {
    "en": "expensive",
    "ko": "비싼",
    "pic": "💎"
   },
   {
    "en": "musical instrument",
    "ko": "악기",
    "pic": "🎻"
   },
   {
    "en": "piano",
    "ko": "피아노",
    "pic": "🎹"
   },
   {
    "en": "drum",
    "ko": "드럼",
    "pic": "🥁"
   },
   {
    "en": "soccer",
    "ko": "축구",
    "pic": "⚽"
   },
   {
    "en": "flute",
    "ko": "플루트",
    "pic": "🪈"
   },
   {
    "en": "bridge",
    "ko": "다리",
    "pic": "🌉"
   }
  ]
 },
 {
  "id": "2026-11-dsb1-l9",
  "title": "DSB1 Lesson9: The Silly Wishes",
  "ko": "Lesson 9 단어 시험",
  "added": "2026-11-12",
  "source": [
   "DSB PRETEST.pdf"
  ],
  "units": [],
  "vocabTitle": "DSB1 Lesson9 단어 PRETEST (20개)",
  "vocab": [
   {
    "en": "lazy",
    "ko": "게으른",
    "pic": "😴"
   },
   {
    "en": "dinner",
    "ko": "저녁 식사",
    "pic": "🍝"
   },
   {
    "en": "wish",
    "ko": "소원",
    "pic": "🌠"
   },
   {
    "en": "cupboard",
    "ko": "찬장",
    "pic": "🗄️"
   },
   {
    "en": "fridge",
    "ko": "냉장고",
    "pic": "🧊"
   },
   {
    "en": "stomach",
    "ko": "배, 복부",
    "pic": "🫃"
   },
   {
    "en": "foolish",
    "ko": "어리석은 (f로 시작)",
    "pic": "🙃"
   },
   {
    "en": "plate",
    "ko": "접시",
    "pic": "🍽️"
   },
   {
    "en": "silly",
    "ko": "어리석은 (s로 시작)",
    "pic": "🤪"
   },
   {
    "en": "meal",
    "ko": "식사",
    "pic": "🍱"
   },
   {
    "en": "waste-wasted",
    "ko": "낭비하다",
    "pic": "🗑️",
    "past": "낭비했다"
   },
   {
    "en": "return-returned",
    "ko": "돌아오다, 돌려주다",
    "pic": "🔙",
    "past": "돌아왔다, 돌려줬다"
   },
   {
    "en": "clean-cleaned",
    "ko": "청소하다, 손질하다",
    "pic": "🧹",
    "past": "청소했다, 손질했다"
   },
   {
    "en": "cook-cooked",
    "ko": "요리하다",
    "pic": "👩‍🍳",
    "past": "요리했다"
   },
   {
    "en": "grant-granted",
    "ko": "(소원 등을) 들어주다",
    "pic": "🧞",
    "past": "들어줬다"
   },
   {
    "en": "disappear-disappeared",
    "ko": "사라지다",
    "pic": "💨",
    "past": "사라졌다"
   },
   {
    "en": "growl-growled",
    "ko": "꼬르륵 소리가 나다",
    "pic": "🥣",
    "past": "꼬르륵 소리가 났다"
   },
   {
    "en": "realize-realized",
    "ko": "깨닫다",
    "pic": "💡",
    "past": "깨달았다"
   },
   {
    "en": "laugh-laughed",
    "ko": "웃다",
    "pic": "😂",
    "past": "웃었다"
   },
   {
    "en": "appear-appeared",
    "ko": "나타나다",
    "pic": "✨",
    "past": "나타났다"
   }
  ]
 },
 {
  "id": "2026-11-dsb1-l10",
  "title": "DSB1 Lesson10: What are you doing?",
  "ko": "Lesson 10 단어 시험",
  "added": "2026-11-13",
  "source": [
   "Epson_20261113173647.pdf"
  ],
  "units": [],
  "vocabTitle": "DSB1 Lesson10 단어 시험 (20개)",
  "vocab": [
   {
    "en": "street",
    "ko": "거리, 도로",
    "pic": "🛣️"
   },
   {
    "en": "bird",
    "ko": "새",
    "pic": "🐦"
   },
   {
    "en": "kitchen",
    "ko": "부엌",
    "pic": "🍳"
   },
   {
    "en": "pretty",
    "ko": "예쁜",
    "pic": "🌸"
   },
   {
    "en": "child",
    "ko": "아이",
    "pic": "🧒"
   },
   {
    "en": "little",
    "ko": "작은",
    "pic": "🐜"
   },
   {
    "en": "tweet",
    "ko": "짹짹 (새가 우는 소리)",
    "pic": "🐤"
   },
   {
    "en": "upstairs",
    "ko": "위층에, 2층에",
    "pic": "🪜"
   },
   {
    "en": "poor",
    "ko": "불쌍한, 가련한",
    "pic": "😢"
   },
   {
    "en": "tooth",
    "ko": "치아, 이빨",
    "pic": "🦷"
   },
   {
    "en": "video game",
    "ko": "비디오 게임",
    "pic": "🎮"
   },
   {
    "en": "angry",
    "ko": "화난, 성난",
    "pic": "😠"
   },
   {
    "en": "itchy",
    "ko": "가려운",
    "pic": "😖"
   },
   {
    "en": "munch-munched",
    "ko": "아삭아삭 먹다",
    "pic": "🍪",
    "past": "아삭아삭 먹었다"
   },
   {
    "en": "run-ran",
    "ko": "달리다, 뛰다",
    "pic": "🏃",
    "past": "달렸다, 뛰었다"
   },
   {
    "en": "sing-sang",
    "ko": "노래하다, 지저귀다",
    "pic": "🎵",
    "past": "노래했다, 지저귀었다"
   },
   {
    "en": "chew-chewed",
    "ko": "씹다, 물어뜯다",
    "pic": "🍬",
    "past": "씹었다, 물어뜯었다"
   },
   {
    "en": "play-played",
    "ko": "놀다, (게임을) 하다",
    "pic": "🎲",
    "past": "놀았다, 했다"
   },
   {
    "en": "visit-visited",
    "ko": "방문하다, 찾아가다",
    "pic": "🏠",
    "past": "방문했다, 찾아갔다"
   },
   {
    "en": "shout-shouted",
    "ko": "소리치다, 외치다",
    "pic": "📣",
    "past": "소리쳤다, 외쳤다"
   }
  ]
 }
];
