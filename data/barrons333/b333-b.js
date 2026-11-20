/* Barron's 333 · B (banal – buttress) */
VOCAB.addWords([
  {id:"beneficent",word:"beneficent",pos:"adjective",posBn:"বিশেষণ",def:"kindly; doing good",bn:"উপকারী, দয়ালু",full:"Doing good for others; generous and kind in action, not only in wishes.",ex:"A beneficent businessman paid the school fees of every poor child in the village.",exb:"এক দয়ালু ব্যবসায়ী গ্রামের সব গরিব শিশুর স্কুলের বেতন দিয়ে দিলেন।",hook:"bene (ভালো) + facere (করা) → ভালো করে এমন। benefactor (#১৫) একই পরিবারের। benevolent (#১৫) = ভালো চায়; beneficent = ভালো করে।"},
  {id:"bolster",word:"bolster",pos:"verb",posBn:"ক্রিয়া",def:"support; reinforce",bn:"জোরদার করা, সমর্থন দেওয়া",full:"To support or strengthen something, such as an argument, someone's confidence or a structure.",ex:"An early win bolstered the team's confidence before the final.",exb:"শুরুর দিকের একটি জয় ফাইনালের আগে দলের আত্মবিশ্বাস বাড়িয়ে দিল।",hook:"bolster মানে লম্বা তাকিয়া বা কোলবালিশও। তাকিয়া যেমন পিঠে ঠেস দিয়ে ধরে রাখে, bolster তেমনি কোনো কিছুকে জোরালো করে।"},
  {id:"bombastic",word:"bombastic",pos:"adjective",posBn:"বিশেষণ",def:"pompous; using inflated language",bn:"আড়ম্বরপূর্ণ, ফাঁপা বুলিসর্বস্ব",full:"Using long, grand-sounding words that have little real meaning.",ex:"The candidate's bombastic speech was full of big words but had no actual plans.",exb:"প্রার্থীর আড়ম্বরপূর্ণ ভাষণে বড় বড় শব্দ ছিল, কিন্তু কোনো বাস্তব পরিকল্পনা ছিল না।",hook:"bombast আসলে ছিল জামার ভেতরে ঠাসা তুলা (padding) → ফুলিয়ে-ফাঁপিয়ে বলা কথা। শুনতে bomb-এর মতো জোরালো, ভেতরে শুধু তুলা! grandiloquent (#৪৫)-এর সমার্থক।"},
  {id:"boorish",word:"boorish",pos:"adjective",posBn:"বিশেষণ",def:"rude; insensitive",bn:"অভদ্র, রুক্ষ",full:"Rough and bad-mannered, with no thought for other people's feelings.",ex:"Talking loudly on the phone in the middle of the film was boorish.",exb:"সিনেমার মাঝখানে ফোনে জোরে কথা বলাটা ছিল অভদ্রতা।",hook:"boor = অভদ্র, রুক্ষ মানুষ; boorish = তার মতো আচরণ। philistine (#৬৪) = শিল্পবোধহীন; boorish = আচরণে অভদ্র।"},
  {id:"burnish",word:"burnish",pos:"verb",posBn:"ক্রিয়া",def:"make shiny by rubbing; polish",bn:"ঘষে চকচকে করা, পালিশ করা",full:"To polish metal or another surface by rubbing it until it shines; also, to improve someone's image.",ex:"Before Eid, my grandmother burnished the old brass plates until they gleamed.",exb:"ঈদের আগে দাদি পুরনো পিতলের থালাগুলো ঘষে ঝকঝকে করে তুললেন।",hook:"burn (পোড়া) নয়! burnish = ঘষে ঘষে এমন চকচকে করা যেন আগুনের মতো জ্বলজ্বল করে। polish-এর সমার্থক।"},
  {id:"buttress",word:"buttress",pos:"verb",posBn:"ক্রিয়া",def:"support; prop up",bn:"ঠেকনা দেওয়া, মজবুত করা",full:"To support or strengthen something; as a noun, a buttress is a structure built against a wall to hold it up.",ex:"The lawyer buttressed her argument with photographs and receipts.",exb:"আইনজীবী ছবি আর রসিদ দিয়ে তাঁর যুক্তি মজবুত করলেন।",hook:"buttress = পুরনো দুর্গ বা বড় ভবনের দেয়ালের গায়ে লাগানো ঠেকনা-দেয়াল। দেয়ালকে যেমন ঠেকিয়ে রাখে, যুক্তিকেও buttress করা যায়। bolster-এর সমার্থক।"}
]);

VOCAB.addLesson({
  id: "b333-b", source: "barrons333", order: 4, group: "B",
  title: "B", titleBn: "B",
  words: ["banal","belie","beneficent","bolster","bombastic","boorish","burgeon","burnish","buttress"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    banal: {def:"hackneyed; commonplace; trite; lacking originality"},
    belie: {def:"contradict; give a false impression"},
    burgeon: {def:"grow forth; send out buds",bn:"অঙ্কুরিত হওয়া, দ্রুত বেড়ে ওঠা",ex:"After the first spring rain, the bare mango trees burgeoned with new leaves.",exb:"বসন্তের প্রথম বৃষ্টির পর ন্যাড়া আমগাছগুলোতে নতুন পাতা গজিয়ে উঠল।"}
  },
  note: {
    title: "From objects to ideas",
    titleBn: "বস্তু থেকে ভাব",
    intro: "Several B words began as everyday objects or physical actions and later took on a figurative meaning. Picture the object and the meaning follows.",
    introBn: "কয়েকটি B শব্দ শুরুতে ছিল সাধারণ জিনিস বা হাতের কাজের নাম, পরে সেগুলো রূপক অর্থ পেয়েছে। জিনিসটা চোখে ভাসাও, অর্থ মনে পড়বে।",
    roots: [
      {parts:"bolster",gloss:"a long pillow",word:"bolster",bn:"ঠেস দিয়ে জোরদার করা"},
      {parts:"buttress",gloss:"a support built against a wall",word:"buttress",bn:"ঠেকনা দেওয়া"},
      {parts:"bombast",gloss:"cotton padding",word:"bombastic",bn:"ফোলানো-ফাঁপানো কথা"},
      {parts:"burnish",gloss:"polish metal",word:"burnish",bn:"ঘষে উজ্জ্বল করা"},
      {parts:"burgeon",gloss:"a bud",word:"burgeon",bn:"কুঁড়ি গজানো, বেড়ে ওঠা"}
    ],
    points: [
      ["bolster and buttress both mean “support”: you can bolster or buttress an argument, a team's confidence or an old wall.","bolster আর buttress দুটোরই মানে “সমর্থন দেওয়া, জোরদার করা”: যুক্তি, দলের আত্মবিশ্বাস বা পুরনো দেয়াল, সবই bolster বা buttress করা যায়।"],
      ["beneficent (bene + facere) = doing good. benevolent (#15) = wishing good. A beneficent person turns the wish into action.","beneficent (bene + facere) = ভালো করে। benevolent (#১৫) = ভালো চায়। beneficent মানুষ সেই ইচ্ছাকে কাজে রূপ দেয়।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    /* bolster ("support; reinforce") and buttress ("support; prop up") share one option, used twice */
    options: {
      a:["rude; insensitive","অভদ্র"], b:["grow forth; send out buds","অঙ্কুরিত হওয়া"], c:["hackneyed; commonplace; trite; lacking originality","গতানুগতিক"],
      d:["support","সমর্থন, ঠেকনা",2], e:["make shiny by rubbing; polish","ঘষে চকচকে করা"], f:["kindly; doing good","উপকারী"],
      g:["pompous; using inflated language","আড়ম্বরপূর্ণ"], h:["contradict; give a false impression","ভুল ধারণা দেওয়া"]
    },
    items: [
      {word:"banal",answer:"c"},{word:"belie",answer:"h"},{word:"beneficent",answer:"f"},{word:"bolster",answer:"d"},{word:"bombastic",answer:"g"},
      {word:"boorish",answer:"a"},{word:"burgeon",answer:"b"},{word:"burnish",answer:"e"},{word:"buttress",answer:"d"}
    ]
  },
  /* buttress is left out: it and bolster can fill the same blanks */
  sentences: [
    {text:"The speech was so ___ , full of phrases we had heard a hundred times, that half the hall fell asleep.",answer:"banal",word:"banal",bn:"ভাষণটি এতই গতানুগতিক ছিল, শতবার শোনা কথায় ভরা, যে হলের অর্ধেক মানুষ ঘুমিয়ে পড়ল।"},
    {text:"Her cheerful smile ___ the worry she felt about her exam results.",answer:"belied",word:"belie",bn:"তার হাসিখুশি মুখ দেখে পরীক্ষার ফল নিয়ে ভেতরের দুশ্চিন্তা বোঝার উপায় ছিল না।"},
    {text:"The ___ old doctor treated poor patients in the village for free every Friday.",answer:"beneficent",word:"beneficent",bn:"দয়ালু বৃদ্ধ ডাক্তার প্রতি শুক্রবার গ্রামের গরিব রোগীদের বিনা পয়সায় চিকিৎসা করতেন।"},
    {text:"A good score in the mock test ___ Tania's confidence before the real exam.",answer:"bolstered",word:"bolster",bn:"মডেল টেস্টে ভালো নম্বর আসল পরীক্ষার আগে তানিয়ার আত্মবিশ্বাস বাড়িয়ে দিল।"},
    {text:"The ___ speaker used words like “unprecedented magnificence” to describe a small new bus stand.",answer:"bombastic",word:"bombastic",bn:"আড়ম্বরপ্রিয় বক্তা ছোট্ট একটা নতুন বাসস্ট্যান্ড বোঝাতে “অভূতপূর্ব মহিমা”-র মতো শব্দ ব্যবহার করলেন।"},
    {text:"The ___ passenger pushed to the front of the queue and shouted at the ticket seller.",answer:"boorish",word:"boorish",bn:"অভদ্র যাত্রীটি ধাক্কা দিয়ে লাইনের সামনে চলে গেল আর টিকিট বিক্রেতার ওপর চেঁচাল।"},
    {text:"Within a week of the first rain, the bare branches ___ with tiny green buds.",answer:"burgeoned",word:"burgeon",bn:"প্রথম বৃষ্টির এক সপ্তাহের মধ্যে ন্যাড়া ডালগুলোতে ছোট ছোট সবুজ কুঁড়ি গজিয়ে উঠল।"},
    {text:"Every morning the shopkeeper ___ the brass pots so they would shine in the window.",answer:"burnished",word:"burnish",bn:"প্রতিদিন সকালে দোকানি পিতলের হাঁড়িগুলো ঘষে চকচকে করতেন, যাতে জানালায় সেগুলো ঝকঝক করে।"}
  ]
});
