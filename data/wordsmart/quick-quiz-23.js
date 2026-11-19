/* Word Smart · Quick Quiz #23 */
VOCAB.addWords([
  {id:"complacent",word:"complacent",pos:"adjective",posBn:"বিশেষণ",def:"self-satisfied",bn:"আত্মতুষ্ট, গা-ছাড়া",full:"Too satisfied with yourself, so that you stop trying or ignore danger.",ex:"After three wins, the team became complacent and lost to the weakest side.",exb:"তিন ম্যাচ জেতার পর দলটি আত্মতুষ্ট হয়ে সবচেয়ে দুর্বল দলের কাছে হেরে গেল।",hook:"complacent = “আমি তো পারিই” ভাব। আত্মতুষ্টি = complacency।"},
  {id:"complement",word:"complement",pos:"verb",posBn:"ক্রিয়া",def:"complete",bn:"পরিপূরক হওয়া, সম্পূর্ণ করা",full:"To go well with something and make it complete; as a noun, something that completes.",ex:"A cup of tea complements a plate of singara perfectly.",exb:"এক কাপ চা এক প্লেট সিঙ্গাড়ার নিখুঁত পরিপূরক।",hook:"complEment = complEte (দুটোতেই e)। compliment (i দিয়ে) = প্রশংসা।"},
  {id:"complicity",word:"complicity",pos:"noun",posBn:"বিশেষ্য",def:"participation in wrongdoing",bn:"অপকর্মে সহযোগিতা",full:"Taking part, with others, in a crime or wrongdoing.",ex:"CCTV footage proved the guard's complicity in the theft.",exb:"সিসিটিভি ফুটেজে চুরিতে প্রহরীর সহযোগিতা প্রমাণিত হলো।",hook:"accomplice = অপরাধের সহযোগী → complicity = সহযোগিতা।"},
  {id:"comprehensive",word:"comprehensive",pos:"adjective",posBn:"বিশেষণ",def:"covering everything",bn:"ব্যাপক, সর্বাঙ্গীণ, পূর্ণাঙ্গ",full:"Including all or nearly all parts or details.",ex:"The book offers a comprehensive guide to the HSC syllabus.",exb:"বইটি এইচএসসি পাঠ্যক্রমের একটি পূর্ণাঙ্গ নির্দেশিকা।",hook:"comprehend = বোঝা, ধারণ করা → সবকিছু ধারণ করে এমন।"},
  {id:"comprise",word:"comprise",pos:"verb",posBn:"ক্রিয়া",def:"consist of",bn:"নিয়ে গঠিত হওয়া",full:"To be made up of; to include. The whole comprises the parts.",ex:"Bangladesh comprises eight divisions.",exb:"বাংলাদেশ আটটি বিভাগ নিয়ে গঠিত।",hook:"সম্পূর্ণটা অংশগুলোকে comprise করে: The whole comprises the parts। “comprised of” লেখা ঠিক নয়।"},
  {id:"compose",word:"compose",pos:"verb",posBn:"ক্রিয়া",def:"make up",bn:"গঠন করা; রচনা করা",full:"To form or make up a whole; also, to write music or poetry. The parts compose the whole.",ex:"Eleven players compose a cricket team.",exb:"এগারোজন খেলোয়াড় নিয়ে একটি ক্রিকেট দল গঠিত হয়।",hook:"অংশগুলো সম্পূর্ণকে compose করে। be composed of = নিয়ে গঠিত।"},
  {id:"constitute",word:"constitute",pos:"verb",posBn:"ক্রিয়া",def:"make up",bn:"গঠন করা; হিসেবে গণ্য হওয়া",full:"To form or make up a whole; also, to amount to.",ex:"Women constitute more than half of the garment workforce.",exb:"পোশাকশিল্পের শ্রমিকদের অর্ধেকের বেশি নারী।",hook:"constitution = সংবিধান, যা একটি রাষ্ট্রকে গঠন করে।"},
  {id:"conciliatory",word:"conciliatory",pos:"adjective",posBn:"বিশেষণ",def:"making peace",bn:"আপসমূলক, মিটমাটের",full:"Intended to make someone less angry or to end a quarrel.",ex:"He sent a conciliatory message after their fight.",exb:"ঝগড়ার পর সে মিটমাটের উদ্দেশ্যে একটি বার্তা পাঠাল।",hook:"reconcile = মিটমাট করা → conciliatory = মিটমাট করতে চায় এমন।"},
  {id:"concise",word:"concise",pos:"adjective",posBn:"বিশেষণ",def:"brief and to the point",bn:"সংক্ষিপ্ত ও সারগর্ভ",full:"Giving a lot of information clearly in few words.",ex:"Write a concise answer of no more than fifty words.",exb:"পঞ্চাশ শব্দের মধ্যে একটি সংক্ষিপ্ত ও সারগর্ভ উত্তর লেখো।",hook:"con + cise (কাটা; scissors) → বাড়তি অংশ কেটে ফেলা। brevity (#১৭)-এর গুণ।"}
]);

VOCAB.addLesson({
  id: "ws-q23", source: "wordsmart", order: 23,
  title: "Quick Quiz #23", titleBn: "কুইক কুইজ #২৩",
  words: ["complacent","complement","complicity","comprehensive","comprise","compose","constitute","conciliatory","concise"],
  note: {
    title: "comprise, compose, constitute: which way round?",
    titleBn: "comprise, compose, constitute: কোনটা কোন দিকে?",
    intro: "These three are a classic exam trap. The difference is direction: who contains whom.",
    introBn: "এই তিনটি শব্দ পরীক্ষার পরিচিত ফাঁদ। পার্থক্যটা দিকের: কে কাকে ধারণ করে।",
    roots: [
      {parts:"WHOLE comprises PARTS",gloss:"whole → parts",word:"comprise",bn:"The team comprises 11 players."},
      {parts:"PARTS compose WHOLE",gloss:"parts → whole",word:"compose",bn:"11 players compose the team."},
      {parts:"PARTS constitute WHOLE",gloss:"parts → whole",word:"constitute",bn:"11 players constitute the team."},
      {parts:"com + plere",gloss:"fill up",word:"complement",bn:"পূর্ণ করা = পরিপূরক"},
      {parts:"con + caedere",gloss:"cut",word:"concise",bn:"কেটে ছোট = সংক্ষিপ্ত"}
    ],
    points: [
      ["“make up (2)” means compose and constitute share it. Either order is right.","“make up (2)” মানে compose আর constitute দুটোরই এই অর্থ। যেকোনো ক্রমে বসালেই সঠিক।"],
      ["complement (e) = completes. compliment (i) = praise.","complement (e) = পূর্ণ করে। compliment (i) = প্রশংসা।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["covering everything","সবকিছু অন্তর্ভুক্ত"], b:["complete","সম্পূর্ণ করা"], c:["consist of","নিয়ে গঠিত হওয়া"], d:["make up","গঠন করা",2],
      e:["brief and to the point","সংক্ষিপ্ত ও সারগর্ভ"], f:["making peace","মিটমাটমূলক"], g:["participation in wrongdoing","অপকর্মে অংশগ্রহণ"], h:["self-satisfied","আত্মতুষ্ট"]
    },
    items: [
      {word:"complacent",answer:"h"},{word:"complement",answer:"b"},{word:"complicity",answer:"g"},{word:"comprehensive",answer:"a"},
      {word:"comprise",answer:"c"},{word:"compose",answer:"d"},{word:"constitute",answer:"d"},{word:"conciliatory",answer:"f"},{word:"concise",answer:"e"}
    ]
  },
  /* compose is left out: it and constitute can fill the same blanks */
  sentences: [
    {text:"Don't become ___ just because you did well in the first test.",answer:"complacent",word:"complacent",bn:"প্রথম পরীক্ষায় ভালো করেছ বলে আত্মতুষ্ট হয়ে যেয়ো না।"},
    {text:"The red scarf ___ her green sari beautifully.",answer:"complements",word:"complement",bn:"লাল ওড়নাটি তার সবুজ শাড়ির সুন্দর পরিপূরক হয়েছে।"},
    {text:"The clerk denied any ___ in the fraud.",answer:"complicity",word:"complicity",bn:"কেরানি জালিয়াতিতে কোনো সহযোগিতার কথা অস্বীকার করলেন।"},
    {text:"The doctor ordered a ___ health check, from blood tests to an X-ray.",answer:"comprehensive",word:"comprehensive",bn:"চিকিৎসক রক্ত পরীক্ষা থেকে এক্স-রে পর্যন্ত পূর্ণাঙ্গ স্বাস্থ্য পরীক্ষা করতে বললেন।"},
    {text:"The committee ___ five teachers and two students.",answer:"comprises",word:"comprise",bn:"কমিটিটি পাঁচজন শিক্ষক ও দুজন শিক্ষার্থী নিয়ে গঠিত।"},
    {text:"Imported goods ___ a large share of the market.",answer:"constitute",word:"constitute",bn:"বাজারের বড় অংশ আমদানি করা পণ্য।"},
    {text:"After the strike, the owners made a ___ offer to the workers.",answer:"conciliatory",word:"conciliatory",bn:"ধর্মঘটের পর মালিকেরা শ্রমিকদের কাছে মিটমাটের প্রস্তাব দিলেন।"},
    {text:"Your summary should be ___ : one paragraph is enough.",answer:"concise",word:"concise",bn:"তোমার সারাংশ সংক্ষিপ্ত ও সারগর্ভ হওয়া উচিত: এক অনুচ্ছেদই যথেষ্ট।"}
  ]
});
