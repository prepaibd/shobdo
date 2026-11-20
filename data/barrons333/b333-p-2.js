/* Barron's 333 · P · Part 2 (piety – presumptuous) */
VOCAB.addWords([
  {id:"piety",word:"piety",pos:"noun",posBn:"বিশেষ্য",def:"devoutness; reverence for God",bn:"ধর্মপরায়ণতা, ভক্তি",full:"Deep religious devotion and respect; more widely, dutiful respect.",ex:"Her grandmother's piety showed in her daily prayers and her kindness to the poor.",exb:"দাদির ধর্মপরায়ণতা ফুটে উঠত তাঁর প্রতিদিনের প্রার্থনায় আর গরিবদের প্রতি দয়ায়।",hook:"pious (#৬৪)-এর বিশেষ্য রূপ: pious = ধার্মিক, piety = ধার্মিকতা। উল্টো ছবি: sanctimonious (#৭৫) = ধার্মিকতার ভান।"},
  {id:"plasticity",word:"plasticity",pos:"noun",posBn:"বিশেষ্য",def:"ability to be molded",bn:"নমনীয়তা, আকার নেওয়ার ক্ষমতা",full:"The quality of being easily shaped or changed.",ex:"The plasticity of wet clay lets the potter shape it into pots and toys.",exb:"ভেজা মাটির নমনীয়তার জন্যই কুমোর তা দিয়ে হাঁড়ি আর খেলনা গড়তে পারেন।",hook:"plastic শব্দটা চেনো: গরম করলে যেকোনো আকার নেয়। গ্রিক plassein = গড়া। malleable (#৫৬)-এর বিশেষ্য-আত্মীয়।"},
  {id:"plummet",word:"plummet",pos:"verb",posBn:"ক্রিয়া",def:"fall sharply",bn:"হঠাৎ দ্রুত পড়ে যাওয়া",full:"To fall straight down very fast; also, of prices or numbers, to drop suddenly.",ex:"Onion prices plummeted when the new harvest reached the market.",exb:"নতুন ফসল বাজারে আসতেই পেঁয়াজের দাম হু হু করে কমে গেল।",hook:"plumb = দেয়াল সোজা মাপার সিসার ওলন, যা সোজা নিচে ঝোলে। plummet = সিসার টুকরোর মতো সোজা নিচে পড়া।"},
  {id:"porous",word:"porous",pos:"adjective",posBn:"বিশেষণ",def:"full of pores; like a sieve",bn:"ছিদ্রযুক্ত, ঝাঁঝরা",full:"Full of tiny holes, so that water or air can pass through; also, easy to get through (a porous border).",ex:"Brick is porous, so a damp wall soaks up rainwater.",exb:"ইট ছিদ্রযুক্ত, তাই স্যাঁতসেঁতে দেয়াল বৃষ্টির পানি শুষে নেয়।",hook:"pore = লোমকূপ, সূক্ষ্ম ছিদ্র → porous = ছিদ্রে ভরা, চালুনির মতো। permeable-এর কাছাকাছি।"},
  {id:"preamble",word:"preamble",pos:"noun",posBn:"বিশেষ্য",def:"introductory statement",bn:"ভূমিকা, প্রস্তাবনা",full:"An introduction to a speech, a document or a law.",ex:"The Constitution of Bangladesh opens with a preamble that sets out the nation's ideals.",exb:"বাংলাদেশের সংবিধান শুরু হয়েছে একটি প্রস্তাবনা দিয়ে, যেখানে জাতির আদর্শগুলো তুলে ধরা হয়েছে।",hook:"pre (আগে) + ambulare (হাঁটা) → মূল কথার আগে আগে হাঁটে। ambulance শব্দটিও ambulare থেকে!"},
  {id:"precarious",word:"precarious",pos:"adjective",posBn:"বিশেষণ",def:"uncertain; risky",bn:"অনিশ্চিত, ঝুঁকিপূর্ণ",full:"Not safe or secure; likely to fall or fail.",ex:"The bamboo ladder looked precarious, leaning against the wet wall.",exb:"ভেজা দেয়ালে হেলান দেওয়া বাঁশের মইটা ঝুঁকিপূর্ণ দেখাচ্ছিল।",hook:"ল্যাটিন precarius = প্রার্থনা করে পাওয়া (pray-এর আত্মীয়), অন্যের দয়ার ওপর নির্ভর → যেকোনো সময় হাতছাড়া হতে পারে।"},
  {id:"presumptuous",word:"presumptuous",pos:"adjective",posBn:"বিশেষণ",def:"arrogant; taking liberties",bn:"ধৃষ্ট, অনধিকারচর্চাকারী",full:"Too confident, acting as if you have rights or permission that you do not have.",ex:"It was presumptuous of him to sit in the principal's chair during the meeting.",exb:"মিটিং চলাকালে অধ্যক্ষের চেয়ারে বসে পড়া ছিল তার ধৃষ্টতা।",hook:"presume = আগেভাগে ধরে নেওয়া। presumptuous মানুষ ধরে নেয় সে সব করার অধিকার রাখে। insolent (#৫২)-এর কাছাকাছি।"}
]);

VOCAB.addLesson({
  id: "b333-p-2", source: "barrons333", order: 21, group: "P",
  title: "P · Part 2", titleBn: "P · পর্ব ২",
  words: ["piety","placate","plasticity","platitude","plethora","plummet","porous","pragmatic","preamble","precarious","precipitate","precursor","presumptuous"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    placate: {def:"pacify; conciliate"},
    platitude: {def:"trite remark; commonplace statement"},
    plethora: {def:"excess; overabundance"},
    pragmatic: {def:"practical (as opposed to idealistic)"},
    precipitate: {def:"rash, premature, hasty, sudden",pos:"adjective",posBn:"বিশেষণ",bn:"হঠকারী, তড়িঘড়ি",full:"As an adjective (pri-SIP-i-tit): done too quickly, without enough thought.",ex:"Selling the land after one bad harvest was a precipitate decision.",exb:"এক মৌসুম খারাপ ফসলের পরই জমি বিক্রি করে দেওয়া ছিল হঠকারী সিদ্ধান্ত।"},
    precursor: {def:"forerunner"}
  },
  note: {
    title: "pre- (before)",
    titleBn: "pre- (আগে)",
    intro: "Latin prae-, “before, in front”, starts four words here. Add the root and you get a picture: walking ahead, running ahead, falling head first, taking for granted.",
    introBn: "ল্যাটিন prae- (আগে, সামনে) দিয়ে এখানে চারটি শব্দ শুরু। মূল জুড়লেই ছবি পাওয়া যায়: আগে আগে হাঁটা, আগে আগে দৌড়ানো, মাথা নিচু করে পড়া, আগেভাগে ধরে নেওয়া।",
    roots: [
      {parts:"pre + ambulare",gloss:"before + walk",word:"preamble",bn:"ভূমিকা"},
      {parts:"pre + currere",gloss:"before + run",word:"precursor",bn:"অগ্রদূত"},
      {parts:"pre + caput",gloss:"before + head (headlong)",word:"precipitate",bn:"হঠকারী, মাথা আগে ঝাঁপ"},
      {parts:"pre + sumere",gloss:"before + take",word:"presumptuous",bn:"আগেভাগে অধিকার ধরে নেওয়া"},
      {parts:"plassein",gloss:"to mould",word:"plasticity",bn:"নমনীয়তা"}
    ],
    points: [
      ["piety = true religious devotion; pious (#64) is the adjective. sanctimonious (#75) = only pretending to be pious.","piety = সত্যিকারের ধর্মভক্তি; এর বিশেষণ pious (#৬৪)। sanctimonious (#৭৫) = শুধু ধার্মিকতার ভান।"],
      ["precipitate (verb) = cause something suddenly. precipitate (adjective, as Barron's uses it) = rash, hasty. precipitous (#65) = very steep.","precipitate (ক্রিয়া) = হঠাৎ ঘটিয়ে দেওয়া। precipitate (বিশেষণ, Barron's-এর অর্থে) = হঠকারী। precipitous (#৬৫) = খাড়া।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["ability to be molded","নমনীয়তা"], b:["practical (as opposed to idealistic)","বাস্তববাদী"], c:["fall sharply","হু হু করে পড়া"],
      d:["forerunner","পূর্বসূরি"], e:["uncertain; risky","ঝুঁকিপূর্ণ"], f:["devoutness; reverence for God","ধর্মপরায়ণতা"],
      g:["arrogant; taking liberties","ধৃষ্ট"], h:["trite remark; commonplace statement","জীর্ণ বুলি"], i:["rash, premature, hasty, sudden","হঠকারী"],
      j:["full of pores; like a sieve","ছিদ্রযুক্ত"], k:["pacify; conciliate","শান্ত করা"], l:["introductory statement","ভূমিকা"],
      m:["excess; overabundance","ছড়াছড়ি"]
    },
    items: [
      {word:"piety",answer:"f"},{word:"placate",answer:"k"},{word:"plasticity",answer:"a"},{word:"platitude",answer:"h"},{word:"plethora",answer:"m"},
      {word:"plummet",answer:"c"},{word:"porous",answer:"j"},{word:"pragmatic",answer:"b"},{word:"preamble",answer:"l"},{word:"precarious",answer:"e"},
      {word:"precipitate",answer:"i"},{word:"precursor",answer:"d"},{word:"presumptuous",answer:"g"}
    ]
  },
  sentences: [
    {text:"The pilgrims' quiet ___ at dawn moved everyone who saw them.",answer:"piety",word:"piety",bn:"ভোরবেলা তীর্থযাত্রীদের নীরব ভক্তি যারা দেখল তাদের সবাইকে আবেগাপ্লুত করল।"},
    {text:"To ___ the crying child, her father bought her a balloon.",answer:"placate",word:"placate",bn:"কাঁদতে থাকা মেয়েকে শান্ত করতে বাবা তাকে একটা বেলুন কিনে দিলেন।"},
    {text:"The ___ of a young child's brain makes it easy to learn two languages at once.",answer:"plasticity",word:"plasticity",bn:"ছোট শিশুর মস্তিষ্কের নমনীয়তার কারণে একসাথে দুটি ভাষা শেখা সহজ হয়।"},
    {text:"“Hard work always pays off,” said the speaker, offering yet another ___ .",answer:"platitude",word:"platitude",bn:"“পরিশ্রম সবসময় ফল দেয়,” বললেন বক্তা, আরও একটি জীর্ণ বুলি শুনিয়ে।"},
    {text:"The new food court offers a ___ of stalls, from fuchka to fried chicken.",answer:"plethora",word:"plethora",bn:"নতুন ফুড কোর্টে ফুচকা থেকে ফ্রায়েড চিকেন পর্যন্ত দোকানের ছড়াছড়ি।"},
    {text:"The temperature ___ overnight, and we woke up to thick fog.",answer:"plummeted",word:"plummet",bn:"রাতারাতি তাপমাত্রা হু হু করে নেমে গেল, আর সকালে উঠে দেখি ঘন কুয়াশা।"},
    {text:"Bread is ___ ; look closely and you can see thousands of tiny air holes.",answer:"porous",word:"porous",bn:"পাউরুটি ছিদ্রযুক্ত; ভালো করে দেখলে হাজার হাজার ছোট্ট বাতাসের ছিদ্র চোখে পড়বে।"},
    {text:"Instead of dreaming of a new building, the ___ headmaster fixed the leaking roof first.",answer:"pragmatic",word:"pragmatic",bn:"নতুন ভবনের স্বপ্ন না দেখে বাস্তববাদী প্রধান শিক্ষক আগে চুইয়ে পড়া ছাদটা সারালেন।"},
    {text:"After a long ___ about the club's history, the president finally announced the winners.",answer:"preamble",word:"preamble",bn:"ক্লাবের ইতিহাস নিয়ে লম্বা ভূমিকার পর সভাপতি অবশেষে বিজয়ীদের নাম ঘোষণা করলেন।"},
    {text:"The boy was balanced in a ___ position on the edge of the roof.",answer:"precarious",word:"precarious",bn:"ছেলেটি ছাদের কিনারে এক ঝুঁকিপূর্ণ অবস্থায় ভারসাম্য রেখে দাঁড়িয়ে ছিল।"},
    {text:"Don't make a ___ decision about your university; take a week to think.",answer:"precipitate",word:"precipitate",bn:"বিশ্ববিদ্যালয় নিয়ে তড়িঘড়ি করে সিদ্ধান্ত নিয়ো না; এক সপ্তাহ ভেবে দেখো।"},
    {text:"Dark clouds piling up in the north-west are often a ___ of a kalbaishakhi storm.",answer:"precursor",word:"precursor",bn:"উত্তর-পশ্চিম আকাশে জমে ওঠা কালো মেঘ প্রায়ই কালবৈশাখীর পূর্বাভাস।"},
    {text:"It was ___ of the new student to tell the teacher how to run the class.",answer:"presumptuous",word:"presumptuous",bn:"শিক্ষককে ক্লাস কীভাবে চালাতে হবে তা বলে দেওয়া ছিল নতুন ছাত্রটির ধৃষ্টতা।"}
  ]
});
