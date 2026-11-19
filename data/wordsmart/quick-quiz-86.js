/* Word Smart · Quick Quiz #86 */
VOCAB.addWords([
  {id:"wanton",word:"wanton",pos:"adjective",posBn:"বিশেষণ",def:"malicious",bn:"অকারণ নিষ্ঠুর, বেপরোয়া",full:"Done deliberately and cruelly, without any reason or justification.",ex:"The wanton destruction of the park benches shocked the town.",exb:"পার্কের বেঞ্চগুলো অকারণে ভাঙচুর পুরো শহরকে হতবাক করল।",hook:"wanton cruelty / wanton destruction = বিনা কারণে নিষ্ঠুরতা বা ধ্বংস।"},
  {id:"willful",word:"willful",pos:"adjective",posBn:"বিশেষণ",def:"deliberate",bn:"ইচ্ছাকৃত; একগুঁয়ে",full:"Done on purpose; also, stubbornly determined to do what you want.",ex:"The court found him guilty of willful damage.",exb:"আদালত তাকে ইচ্ছাকৃত ক্ষতির দায়ে দোষী সাব্যস্ত করল।",hook:"will (ইচ্ছা) + ful → ইচ্ছায় ভরা। ব্রিটিশ বানান wilful।"},
  {id:"wistful",word:"wistful",pos:"adjective",posBn:"বিশেষণ",def:"yearning",bn:"আকুল, স্মৃতিকাতর",full:"Full of sad longing for something lost or out of reach.",ex:"She cast a wistful look at her old school as the bus drove past.",exb:"বাস পাশ দিয়ে যাওয়ার সময় সে পুরনো স্কুলের দিকে আকুল চোখে তাকাল।",hook:"wish-এর কাছাকাছি শোনায় → হারানো কিছুর জন্য মন কেমন করা।"}
]);

VOCAB.addLesson({
  id: "ws-q86", source: "wordsmart", order: 86,
  title: "Quick Quiz #86", titleBn: "কুইক কুইজ #৮৬",
  words: ["wanton","willful","wistful"],
  note: {
    title: "Three w- words of feeling",
    titleBn: "অনুভূতির তিনটি w- শব্দ",
    intro: "A short quiz. Two words are about doing things on purpose; one is about quiet longing.",
    introBn: "ছোট কুইজ। দুটি শব্দ ইচ্ছা করে কিছু করা নিয়ে; একটি নীরব আকুলতা নিয়ে।",
    roots: [
      {parts:"will + ful",gloss:"full of will",word:"willful",bn:"ইচ্ছাকৃত, একগুঁয়ে"},
      {parts:"wan + togen",gloss:"badly brought up (Old English)",word:"wanton",bn:"অসংযত, অকারণ"},
      {parts:"wistly",gloss:"intently",word:"wistful",bn:"আকুল"}
    ],
    points: [
      ["willful = on purpose (or stubborn). wanton = on purpose AND cruel, with no reason at all.","willful = ইচ্ছাকৃত (বা একগুঁয়ে)। wanton = ইচ্ছাকৃত ও নিষ্ঠুর, কোনো কারণ ছাড়াই।"],
      ["wistful is a gentle, sad longing: think of looking at old photographs.","wistful হলো কোমল, বিষণ্ণ আকুলতা: পুরনো ছবি দেখার অনুভূতি ভাবো।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["yearning","আকুলতা"], b:["deliberate","ইচ্ছাকৃত"], c:["malicious","বিদ্বেষপূর্ণ"]
    },
    items: [
      {word:"wanton",answer:"c"},{word:"willful",answer:"b"},{word:"wistful",answer:"a"}
    ]
  },
  /* wanton is left out: willful can fill the same blanks ("willful destruction") */
  sentences: [
    {text:"The ___ child refused to put on her shoes, no matter how often she was asked.",answer:"willful",word:"willful",bn:"একগুঁয়ে শিশুটি যতবারই বলা হোক, জুতা পরতে রাজি হলো না।"},
    {text:"Looking at old photos of his village, he gave a ___ smile.",answer:"wistful",word:"wistful",bn:"নিজের গ্রামের পুরনো ছবি দেখে সে এক স্মৃতিকাতর হাসি দিল।"}
  ]
});
