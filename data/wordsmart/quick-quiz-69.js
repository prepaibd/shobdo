/* Word Smart · Quick Quiz #69 */
VOCAB.addWords([
  {id:"provincial",word:"provincial",pos:"adjective",posBn:"বিশেষণ",def:"narrow in outlook",bn:"সংকীর্ণমনা; মফস্বলি",full:"Narrow-minded and unsophisticated; also, relating to a province.",ex:"His provincial attitude made him suspicious of new ideas.",exb:"তার সংকীর্ণ মনোভাব তাকে নতুন ধারণার প্রতি সন্দিহান করে তুলেছিল।",hook:"province (প্রদেশ, রাজধানীর বাইরে) → রাজধানীর বাইরের সংকীর্ণ দৃষ্টি। parochial (#৬১)-এর সমার্থক।"},
  {id:"provisional",word:"provisional",pos:"adjective",posBn:"বিশেষণ",def:"conditional",bn:"অস্থায়ী, শর্তসাপেক্ষ",full:"Arranged for now but likely to change later.",ex:"The admission list is provisional until documents are checked.",exb:"কাগজপত্র যাচাই না হওয়া পর্যন্ত ভর্তির তালিকাটি অস্থায়ী।",hook:"provisional government = অস্থায়ী সরকার (যেমন ১৯৭১-এর মুজিবনগর সরকার)।"},
  {id:"proximity",word:"proximity",pos:"noun",posBn:"বিশেষ্য",def:"nearness",bn:"নৈকট্য, সান্নিধ্য",full:"Nearness in space, time or relationship.",ex:"The flat's proximity to the school was its best feature.",exb:"স্কুলের কাছে হওয়াই ফ্ল্যাটটির সবচেয়ে বড় সুবিধা।",hook:"ল্যাটিন proximus = নিকটতম (approximate = প্রায়)।"},
  {id:"prudent",word:"prudent",pos:"adjective",posBn:"বিশেষণ",def:"careful",bn:"বিচক্ষণ, সাবধানী",full:"Acting with care and thought for the future.",ex:"It is prudent to save some money for emergencies.",exb:"জরুরি অবস্থার জন্য কিছু টাকা জমিয়ে রাখা বিচক্ষণতার কাজ।",hook:"prudence = বিচক্ষণতা। judicious (#৫৪), circumspect (#২১)-এর সমার্থক।"},
  {id:"purported",word:"purported",pos:"adjective",posBn:"বিশেষণ",def:"rumored",bn:"কথিত, দাবিকৃত",full:"Said or claimed to be true, though not proven.",ex:"The purported letter from the minister turned out to be fake.",exb:"মন্ত্রীর কথিত চিঠিটি ভুয়া প্রমাণিত হলো।",hook:"purport = দাবি করা। alleged (#৫)-এর কাছাকাছি।"},
  {id:"putative",word:"putative",pos:"adjective",posBn:"বিশেষণ",def:"commonly accepted",bn:"সাধারণভাবে স্বীকৃত, ধরে নেওয়া",full:"Generally believed or assumed to be something.",ex:"He is the putative owner of the land, though no one has seen the deed.",exb:"তিনিই জমির সাধারণভাবে স্বীকৃত মালিক, যদিও দলিল কেউ দেখেনি।",hook:"ল্যাটিন putare = মনে করা (compute, reputation) → সবাই যা মনে করে।"}
]);

VOCAB.addLesson({
  id: "ws-q69", source: "wordsmart", order: 69,
  title: "Quick Quiz #69", titleBn: "কুইক কুইজ #৬৯",
  words: ["provincial","provisional","proximity","prudent","purported","putative"],
  note: {
    title: "Unproven but believed: purported and putative",
    titleBn: "প্রমাণ নেই কিন্তু বিশ্বাস: purported আর putative",
    intro: "Two words here describe things people believe but haven't proved. Newspapers use them to stay careful.",
    introBn: "এখানে দুটি শব্দ এমন জিনিস বোঝায় যা মানুষ বিশ্বাস করে কিন্তু প্রমাণিত নয়। সতর্ক থাকতে পত্রিকাগুলো এগুলো ব্যবহার করে।",
    roots: [
      {parts:"pro + ponere",gloss:"put in place for now",word:"provisional",bn:"আপাতত রাখা = অস্থায়ী"},
      {parts:"proximus",gloss:"nearest",word:"proximity",bn:"নৈকট্য"},
      {parts:"putare",gloss:"think",word:"putative",bn:"সবাই যা মনে করে"},
      {parts:"providens",gloss:"foreseeing",word:"prudent",bn:"আগে থেকে ভাবে = বিচক্ষণ"}
    ],
    points: [
      ["purported = claimed (often doubtful). putative = generally accepted (but not proven).","purported = দাবিকৃত (প্রায়ই সন্দেহজনক)। putative = সাধারণভাবে স্বীকৃত (প্রমাণিত নয়)।"],
      ["provincial (narrow-minded) vs provisional (temporary). One letter group, two meanings.","provincial (সংকীর্ণমনা) বনাম provisional (অস্থায়ী)।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["commonly accepted","সাধারণভাবে স্বীকৃত"], b:["nearness","নৈকট্য"], c:["narrow in outlook","সংকীর্ণ দৃষ্টিভঙ্গি"], d:["rumored","গুজবে শোনা"], e:["careful","সাবধানী"], f:["conditional","শর্তসাপেক্ষ"]
    },
    items: [
      {word:"provincial",answer:"c"},{word:"provisional",answer:"f"},{word:"proximity",answer:"b"},{word:"prudent",answer:"e"},{word:"purported",answer:"d"},{word:"putative",answer:"a"}
    ]
  },
  /* putative is left out: it and purported can fill the same blanks */
  sentences: [
    {text:"He mocked the village fair as ___ , but secretly enjoyed it.",answer:"provincial",word:"provincial",bn:"সে গ্রামের মেলাকে মফস্বলি বলে ঠাট্টা করল, কিন্তু গোপনে উপভোগ করল।"},
    {text:"The exam date is ___ and may change if it rains.",answer:"provisional",word:"provisional",bn:"পরীক্ষার তারিখ অস্থায়ী; বৃষ্টি হলে বদলাতে পারে।"},
    {text:"Living in close ___ to a factory can harm your health.",answer:"proximity",word:"proximity",bn:"কারখানার খুব কাছে বাস করা স্বাস্থ্যের ক্ষতি করতে পারে।"},
    {text:"It would be ___ to carry an umbrella in the monsoon.",answer:"prudent",word:"prudent",bn:"বর্ষায় ছাতা সাথে রাখা বিচক্ষণতার কাজ হবে।"},
    {text:"The ___ cure, sold online, had never been tested by doctors.",answer:"purported",word:"purported",bn:"অনলাইনে বিক্রি হওয়া কথিত প্রতিকারটি কখনো চিকিৎসকেরা পরীক্ষা করেননি।"}
  ]
});
