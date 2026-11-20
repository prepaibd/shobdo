/* Barron's 333 · Q–R · Part 2 (relegate – reverent) */
VOCAB.addWords([
  {id:"reprobate",word:"reprobate",pos:"noun",posBn:"বিশেষ্য",def:"person hardened in sin; devoid of a sense of decency",bn:"দুশ্চরিত্র, নীতিহীন লোক",full:"A person who behaves badly without any shame and has no sense of decency.",ex:"Everyone in the story despised the reprobate who stole from his own mother.",exb:"গল্পের সবাই সেই দুশ্চরিত্র লোকটিকে ঘৃণা করত, যে নিজের মায়ের টাকাও চুরি করেছিল।",hook:"re (না) + probare (অনুমোদন করা) → যাকে কেউ অনুমোদন করে না। probity-র ঠিক উল্টো চরিত্র। reprehensible (#৭৩) = নিন্দনীয়।"},
  {id:"rescind",word:"rescind",pos:"verb",posBn:"ক্রিয়া",def:"cancel",bn:"বাতিল করা, প্রত্যাহার করা",full:"To officially cancel a law, order or agreement.",ex:"The club rescinded his membership after he broke the rules a third time.",exb:"তৃতীয়বার নিয়ম ভাঙার পর ক্লাব তার সদস্যপদ বাতিল করল।",hook:"re (পেছনে) + scindere (কেটে ফেলা) → সিদ্ধান্তটা কেটে বাদ দেওয়া। সাধারণত আইন, আদেশ বা চুক্তির ক্ষেত্রে।"},
  {id:"resolution",word:"resolution",pos:"noun",posBn:"বিশেষ্য",def:"determination",bn:"দৃঢ়সংকল্প",full:"Firm determination to do something; also, a formal decision or a solution.",ex:"Her resolution never weakened: she practised the harmonium every single day.",exb:"তার দৃঢ়সংকল্প কখনো দুর্বল হয়নি: প্রতিদিন সে হারমোনিয়াম অনুশীলন করত।",hook:"New Year's resolution = নতুন বছরের সংকল্প! resolute (#৭৩) = দৃঢ়প্রতিজ্ঞ।"},
  {id:"resolve",word:"resolve",pos:"noun",posBn:"বিশেষ্য",def:"determination; firmness of purpose",bn:"দৃঢ়তা, অটল সংকল্প",full:"Firm determination to do something; as a verb, resolve means to decide firmly or to solve.",ex:"The heavy rain only strengthened the volunteers' resolve to finish the embankment.",exb:"ভারী বৃষ্টি বাঁধের কাজ শেষ করার ব্যাপারে স্বেচ্ছাসেবকদের সংকল্প আরও দৃঢ় করল।",hook:"resolve (বিশেষ্য) = resolution = দৃঢ় সংকল্প। ক্রিয়া হিসেবে resolve = স্থির করা বা সমাধান করা। resolute (#৭৩)-এর পরিবার; উল্টো irresolute।"},
  {id:"reverent",word:"reverent",pos:"adjective",posBn:"বিশেষণ",def:"respectful; worshipful",bn:"শ্রদ্ধাশীল, ভক্তিপূর্ণ",full:"Showing deep respect, often in a quiet and serious way.",ex:"The students turned the pages of the old manuscript with reverent care.",exb:"শিক্ষার্থীরা শ্রদ্ধাভরা যত্নে পুরনো পাণ্ডুলিপির পাতা উল্টাল।",hook:"revere (#৭৪) = গভীর শ্রদ্ধা করা → reverent = শ্রদ্ধাশীল। উল্টো irreverent = অশ্রদ্ধাশীল।"}
]);

VOCAB.addLesson({
  id: "b333-qr-2", source: "barrons333", order: 24, group: "Q–R",
  title: "Q–R · Part 2", titleBn: "Q–R · পর্ব ২",
  words: ["relegate","reproach","reprobate","repudiate","rescind","resolution","resolve","reticent","reverent"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    relegate: {def:"banish to an inferior position; delegate; assign"},
    reproach: {def:"express disapproval or disappointment"},
    repudiate: {def:"disown; disavow"},
    reticent: {def:"reserved; uncommunicative; inclined to silence"}
  },
  note: {
    title: "re- (back, again)",
    titleBn: "re- (পেছনে, আবার)",
    intro: "Almost every word in this group starts with Latin re-. The root after it carries the picture: sending away, cutting off, loosening into a firm decision, standing in awe.",
    introBn: "এই গ্রুপের প্রায় প্রতিটি শব্দ ল্যাটিন re- দিয়ে শুরু। পরের মূলটাই ছবি দেয়: দূরে পাঠানো, কেটে বাদ দেওয়া, জট খুলে দৃঢ় সিদ্ধান্তে পৌঁছানো, শ্রদ্ধায় ভয় পাওয়া।",
    roots: [
      {parts:"re + legare",gloss:"away + send",word:"relegate",bn:"নিচে বা দূরে পাঠানো"},
      {parts:"re + scindere",gloss:"back + cut",word:"rescind",bn:"কেটে বাদ দেওয়া, বাতিল"},
      {parts:"re + probare",gloss:"not + approve",word:"reprobate",bn:"অননুমোদিত, দুশ্চরিত্র"},
      {parts:"re + solvere",gloss:"again + loosen, settle",word:"resolve",bn:"জট খুলে স্থির সংকল্প"},
      {parts:"re + vereri",gloss:"intensive + stand in awe",word:"reverent",bn:"শ্রদ্ধাশীল"}
    ],
    points: [
      ["resolve and resolution both mean “determination” here, so the quiz uses one meaning twice: “determination (2)”.","এখানে resolve আর resolution দুটোরই মানে দৃঢ় সংকল্প, তাই কুইজে একটি অর্থ দুবার: “determination (2)”।"],
      ["reproach = express disappointment at someone. repudiate = refuse to accept something as yours. rescind = cancel an official decision.","reproach = কারও প্রতি অসন্তোষ জানানো। repudiate = কোনো কিছুকে নিজের বলে অস্বীকার করা। rescind = দাপ্তরিক সিদ্ধান্ত বাতিল করা।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    /* resolution ("determination") and resolve ("determination; firmness of purpose") share one option, used twice */
    options: {
      a:["disown; disavow","অস্বীকার করা"], b:["express disapproval or disappointment","ভর্ৎসনা করা"], c:["respectful; worshipful","শ্রদ্ধাশীল"],
      d:["determination","দৃঢ়সংকল্প",2], e:["banish to an inferior position; delegate; assign","নিচে সরিয়ে দেওয়া"], f:["reserved; uncommunicative; inclined to silence","মিতবাক"],
      g:["person hardened in sin; devoid of a sense of decency","দুশ্চরিত্র লোক"], h:["cancel","বাতিল করা"]
    },
    items: [
      {word:"relegate",answer:"e"},{word:"reproach",answer:"b"},{word:"reprobate",answer:"g"},{word:"repudiate",answer:"a"},{word:"rescind",answer:"h"},
      {word:"resolution",answer:"d"},{word:"resolve",answer:"d"},{word:"reticent",answer:"f"},{word:"reverent",answer:"c"}
    ]
  },
  /* resolution is left out: it and resolve can fill the same blanks */
  sentences: [
    {text:"After losing every match, the team was ___ to the second division.",answer:"relegated",word:"relegate",bn:"সব ম্যাচ হেরে দলটিকে দ্বিতীয় বিভাগে নামিয়ে দেওয়া হলো।"},
    {text:"Ma didn't shout; she just ___ me with a sad look for coming home late.",answer:"reproached",word:"reproach",bn:"মা চেঁচালেন না; দেরিতে বাড়ি ফেরার জন্য শুধু দুঃখী চোখে তাকিয়ে আমাকে ভর্ৎসনা করলেন।"},
    {text:"The village elders warned the boys to stay away from the old ___ who cheated travellers at cards.",answer:"reprobate",word:"reprobate",bn:"গ্রামের মুরব্বিরা ছেলেদের সাবধান করলেন, তাসে পথিকদের ঠকানো সেই দুশ্চরিত্র বুড়োর কাছ থেকে দূরে থাকতে।"},
    {text:"The famous actor ___ the fake interview that had spread online under his name.",answer:"repudiated",word:"repudiate",bn:"বিখ্যাত অভিনেতা তাঁর নামে অনলাইনে ছড়ানো ভুয়া সাক্ষাৎকারটি নিজের নয় বলে অস্বীকার করলেন।"},
    {text:"After the protest, the city ___ its order to cut down the old trees.",answer:"rescinded",word:"rescind",bn:"প্রতিবাদের পর সিটি কর্তৃপক্ষ পুরনো গাছগুলো কাটার আদেশ বাতিল করল।"},
    {text:"Failing the first time only strengthened her ___ to pass the driving test.",answer:"resolve",word:"resolve",bn:"প্রথমবার ফেল করায় ড্রাইভিং টেস্টে পাস করার ব্যাপারে তার সংকল্প আরও দৃঢ় হলো।"},
    {text:"Usually ___ , Tamim surprised everyone by giving a long speech at the farewell.",answer:"reticent",word:"reticent",bn:"সাধারণত মিতবাক তামিম বিদায় অনুষ্ঠানে লম্বা বক্তৃতা দিয়ে সবাইকে অবাক করে দিল।"},
    {text:"The crowd stood in ___ silence as the national anthem played.",answer:"reverent",word:"reverent",bn:"জাতীয় সংগীত বাজার সময় জনতা শ্রদ্ধাভরে নীরবে দাঁড়িয়ে রইল।"}
  ]
});
