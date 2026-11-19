/* Word Smart · Quick Quiz #29 */
VOCAB.addWords([
  {id:"culpable",word:"culpable",pos:"adjective",posBn:"বিশেষণ",def:"guilty",bn:"দোষী, দায়ী",full:"Deserving blame for something wrong.",ex:"The court found the factory owner culpable for the fire.",exb:"আদালত কারখানার মালিককে অগ্নিকাণ্ডের জন্য দায়ী সাব্যস্ত করল।",hook:"ল্যাটিন culpa = দোষ → culprit = অপরাধী।"},
  {id:"exculpate",word:"exculpate",pos:"verb",posBn:"ক্রিয়া",def:"free from guilt",bn:"দোষমুক্ত করা",full:"To show or declare that someone is not guilty.",ex:"New evidence exculpated the prisoner after ten years.",exb:"দশ বছর পর নতুন প্রমাণ বন্দিকে দোষমুক্ত করল।",hook:"ex (বাইরে) + culpa (দোষ) → দোষের বাইরে আনা। absolve (#১)-এর সমার্থক।"},
  {id:"cursory",word:"cursory",pos:"adjective",posBn:"বিশেষণ",def:"hasty",bn:"তাড়াহুড়ো করে, ভাসাভাসা",full:"Done quickly and without attention to detail.",ex:"He gave the newspaper a cursory glance and went out.",exb:"সে পত্রিকায় ভাসাভাসা একবার চোখ বুলিয়ে বেরিয়ে গেল।",hook:"ল্যাটিন currere = দৌড়ানো (cursor, current) → দৌড়ের ওপর দেখা।"},
  {id:"curtail",word:"curtail",pos:"verb",posBn:"ক্রিয়া",def:"shorten",bn:"কমানো, কাটছাঁট করা",full:"To reduce something or cut it short.",ex:"The government curtailed electricity use during the fuel crisis.",exb:"জ্বালানি সংকটের সময় সরকার বিদ্যুৎ ব্যবহার কমিয়ে দিল।",hook:"cur + tail (লেজ) → লেজ কেটে ছোট করা।"},
  {id:"cynic",word:"cynic",pos:"noun",posBn:"বিশেষ্য",def:"one who distrusts humanity",bn:"মানুষের সদিচ্ছায় অবিশ্বাসী, নিন্দুক",full:"A person who believes that people act only out of selfishness.",ex:"A cynic would say the minister visited the flood area only for the cameras.",exb:"একজন নিন্দুক বলবেন, মন্ত্রী শুধু ক্যামেরার জন্যই বন্যা এলাকা পরিদর্শনে গেছেন।",hook:"cynical = সবকিছুতে স্বার্থ খোঁজে এমন। গ্রিক kyon = কুকুর (প্রাচীন “কুকুর-দার্শনিক”দের নাম থেকে)।"}
]);

VOCAB.addLesson({
  id: "ws-q29", source: "wordsmart", order: 29,
  title: "Quick Quiz #29", titleBn: "কুইক কুইজ #২৯",
  words: ["culpable","exculpate","cursory","curtail","cynic"],
  note: {
    title: "culpa means blame",
    titleBn: "culpa মানে দোষ",
    intro: "A short quiz with one useful root. You already know culprit, so culpable and exculpate are easy.",
    introBn: "ছোট কুইজ, একটি দরকারি মূল। culprit (অপরাধী) তো জানোই, তাই culpable আর exculpate সহজ।",
    roots: [
      {parts:"culpa",gloss:"blame",word:"culpable",bn:"দোষ আছে = দোষী"},
      {parts:"ex + culpa",gloss:"out of blame",word:"exculpate",bn:"দোষের বাইরে = দোষমুক্ত করা"},
      {parts:"currere",gloss:"run",word:"cursory",bn:"দৌড়ের ওপর = ভাসাভাসা"},
      {parts:"kyon",gloss:"dog",word:"cynic",bn:"কুকুর-দার্শনিক = নিন্দুক"}
    ],
    points: [
      ["Synonyms you know for “free from blame”: exculpate, absolve (#1).","“দোষমুক্ত করা” অর্থে তুমি জানো: exculpate, absolve (#১)।"],
      ["Synonyms for “shorten”: curtail, abridge (#1). abridge is for texts; curtail is for activities and spending.","“ছোট করা” অর্থে: curtail, abridge (#১)। abridge লেখার ক্ষেত্রে; curtail কাজ বা খরচের ক্ষেত্রে।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["free from guilt","দোষমুক্ত করা"], b:["shorten","ছোট করা"], c:["one who distrusts humanity","মানুষে অবিশ্বাসী"], d:["hasty","তাড়াহুড়োর"], e:["guilty","দোষী"]
    },
    items: [
      {word:"culpable",answer:"e"},{word:"exculpate",answer:"a"},{word:"cursory",answer:"d"},{word:"curtail",answer:"b"},{word:"cynic",answer:"c"}
    ]
  },
  sentences: [
    {text:"Both drivers were ___ for the accident.",answer:"culpable",word:"culpable",bn:"দুর্ঘটনার জন্য দুই চালকই দায়ী ছিল।"},
    {text:"The video ___ the student who had been accused of stealing.",answer:"exculpated",word:"exculpate",bn:"ভিডিওটি চুরির অভিযোগে অভিযুক্ত শিক্ষার্থীকে দোষমুক্ত করল।"},
    {text:"A ___ reading of the contract will not reveal the hidden fees.",answer:"cursory",word:"cursory",bn:"চুক্তিপত্রে ভাসাভাসা চোখ বুলালে লুকানো ফি ধরা পড়বে না।"},
    {text:"Rain ___ the match to twenty overs.",answer:"curtailed",word:"curtail",bn:"বৃষ্টির কারণে ম্যাচটি কমিয়ে বিশ ওভারে নামানো হলো।"},
    {text:"Only a ___ would think that every volunteer secretly wants something in return.",answer:"cynic",word:"cynic",bn:"শুধু একজন নিন্দুকই ভাববে যে প্রত্যেক স্বেচ্ছাসেবক গোপনে বিনিময়ে কিছু চায়।"}
  ]
});
