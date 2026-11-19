/* Word Smart · Quick Quiz #16 */
VOCAB.addWords([
  {id:"bequest",word:"bequest",pos:"noun",posBn:"বিশেষ্য",def:"something left in a will",bn:"উইলের মাধ্যমে দেওয়া সম্পদ",full:"Money or property left to someone in a will.",ex:"The university received a large bequest from a former teacher.",exb:"এক সাবেক শিক্ষকের উইলের মাধ্যমে বিশ্ববিদ্যালয়টি বড় অঙ্কের অর্থ পেল।",hook:"bequest (বিশেষ্য) = উইলে রেখে যাওয়া জিনিস।"},
  {id:"bequeath",word:"bequeath",pos:"verb",posBn:"ক্রিয়া",def:"leaving in a will",bn:"উইল করে দিয়ে যাওয়া",full:"To leave money or property to someone in a will; also, to pass something on to later generations.",ex:"She bequeathed her house to the orphanage.",exb:"তিনি তার বাড়িটি উইল করে এতিমখানাকে দিয়ে গেলেন।",hook:"bequeath (ক্রিয়া) = উইলে দেওয়া; bequest (বিশেষ্য) = যা দেওয়া হলো।"},
  {id:"bereaved",word:"bereaved",pos:"adjective",posBn:"বিশেষণ",def:"left desolate",bn:"স্বজনহারা, শোকাহত",full:"Having lost a close relative or friend through death.",ex:"Neighbours brought food to the bereaved family.",exb:"প্রতিবেশীরা স্বজনহারা পরিবারটির জন্য খাবার নিয়ে এলেন।",hook:"be + reave (কেড়ে নেওয়া) → মৃত্যু প্রিয়জনকে কেড়ে নিয়েছে। bereavement = শোক।"},
  {id:"beset",word:"beset",pos:"verb",posBn:"ক্রিয়া",def:"harass",bn:"চারদিক থেকে ঘিরে ধরা, জর্জরিত করা",full:"To trouble someone continuously, often from all sides.",ex:"The project was beset by delays and rising costs.",exb:"প্রকল্পটি বিলম্ব আর বাড়তে থাকা খরচে জর্জরিত ছিল।",hook:"be + set → চারপাশে সমস্যা বসিয়ে দেওয়া। beleaguer (#১৪)-এর কাছাকাছি।"},
  {id:"blasphemy",word:"blasphemy",pos:"noun",posBn:"বিশেষ্য",def:"irreverence",bn:"ধর্মনিন্দা, পবিত্র বিষয়ের অবমাননা",full:"Disrespectful words or actions about God or sacred things; also, disrespect for anything greatly honoured.",ex:"In many countries, blasphemy is treated as a crime.",exb:"অনেক দেশে ধর্মনিন্দাকে অপরাধ হিসেবে গণ্য করা হয়।",hook:"গ্রিক blasphemia = নিন্দা। মজা করেও বলা হয়: ক্রিকেটপাগলের কাছে ক্রিকেটের নিন্দা blasphemy।"},
  {id:"blatant",word:"blatant",pos:"adjective",posBn:"বিশেষণ",def:"offensively noisy",bn:"নির্লজ্জভাবে স্পষ্ট; উচ্চকিত",full:"Very obvious and shameless, especially about something wrong; originally, loud and noisy.",ex:"Copying in front of the teacher was a blatant violation of the rules.",exb:"শিক্ষকের সামনেই নকল করা ছিল নিয়মের নির্লজ্জ লঙ্ঘন।",hook:"blatant lie = ডাহা মিথ্যা। বইয়ের অর্থ “offensively noisy” পুরনো; আজ বেশি চলে “চোখে লাগার মতো স্পষ্ট”।"}
]);

VOCAB.addLesson({
  id: "ws-q16", source: "wordsmart", order: 16,
  title: "Quick Quiz #16", titleBn: "কুইক কুইজ #১৬",
  words: ["bequest","bequeath","bereaved","beset","blasphemy","blatant"],
  note: {
    title: "Wills and losses",
    titleBn: "উইল আর হারানো",
    intro: "Three words here belong to the language of death and inheritance. Learn the noun and verb pair carefully.",
    introBn: "এখানে তিনটি শব্দ মৃত্যু ও উত্তরাধিকারের ভাষা। বিশেষ্য আর ক্রিয়ার জোড়াটা ভালো করে শেখো।",
    roots: [
      {parts:"be + cwethan",gloss:"say (Old English)",word:"bequeath",bn:"(উইলে) বলে দিয়ে যাওয়া"},
      {parts:"bequeath → bequest",gloss:"verb → noun",word:"bequest",bn:"যা দিয়ে যাওয়া হলো"},
      {parts:"be + reave",gloss:"rob",word:"bereaved",bn:"কেড়ে নেওয়া = স্বজনহারা"},
      {parts:"be + set",gloss:"set around",word:"beset",bn:"চারপাশে ঘিরে ধরা"}
    ],
    points: [
      ["bequeath is the action (She bequeathed her land). bequest is the thing given (a large bequest).","bequeath হলো কাজটা (She bequeathed her land)। bequest হলো যা দেওয়া হলো (a large bequest)।"],
      ["Today blatant usually means shamelessly obvious: a blatant lie, blatant cheating.","আজকাল blatant মানে সাধারণত নির্লজ্জভাবে স্পষ্ট: a blatant lie, blatant cheating।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["left desolate","শোকে নিঃসঙ্গ"], b:["something left in a will","উইলে রেখে যাওয়া সম্পদ"], c:["harass","হয়রান করা"],
      d:["offensively noisy","উৎকটভাবে শোরগোলপূর্ণ"], e:["leaving in a will","উইলে দিয়ে যাওয়া"], f:["irreverence","অশ্রদ্ধা"]
    },
    items: [
      {word:"bequest",answer:"b"},{word:"bequeath",answer:"e"},{word:"bereaved",answer:"a"},
      {word:"beset",answer:"c"},{word:"blasphemy",answer:"f"},{word:"blatant",answer:"d"}
    ]
  },
  sentences: [
    {text:"The old man left a ___ of one lakh taka to the village school.",answer:"bequest",word:"bequest",bn:"বৃদ্ধ লোকটি উইলের মাধ্যমে গ্রামের স্কুলকে এক লাখ টাকা দিয়ে গেলেন।"},
    {text:"My grandfather ___ his collection of books to me.",answer:"bequeathed",word:"bequeath",bn:"দাদা উইল করে তার বইয়ের সংগ্রহ আমাকে দিয়ে গেছেন।"},
    {text:"The ___ mother could not stop crying at the funeral.",answer:"bereaved",word:"bereaved",bn:"জানাজায় সন্তানহারা মা কান্না থামাতে পারছিলেন না।"},
    {text:"The team was ___ by injuries throughout the season.",answer:"beset",word:"beset",bn:"পুরো মৌসুম দলটি ইনজুরিতে জর্জরিত ছিল।"},
    {text:"Copying from your neighbour in front of the invigilator is ___ cheating.",answer:"blatant",word:"blatant",bn:"পরিদর্শকের সামনেই পাশের জনের খাতা দেখে লেখা নির্লজ্জ প্রতারণা।"}
  ]
});
