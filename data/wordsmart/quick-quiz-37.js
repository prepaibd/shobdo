/* Word Smart · Quick Quiz #37 */
VOCAB.addWords([
  {id:"elicit",word:"elicit",pos:"verb",posBn:"ক্রিয়া",def:"bring out",bn:"বের করে আনা, আদায় করা",full:"To draw out a response, answer or reaction from someone.",ex:"The teacher's joke elicited laughter from the whole class.",exb:"শিক্ষকের কৌতুক পুরো ক্লাস থেকে হাসি বের করে আনল।",hook:"e (বাইরে) + licere (টেনে আনা) → টেনে বের করা। illicit (অবৈধ) নয়!"},
  {id:"elliptical",word:"elliptical",pos:"adjective",posBn:"বিশেষণ",def:"obscure",bn:"অস্পষ্ট, কথা বাদ দিয়ে বলা; উপবৃত্তাকার",full:"Hard to understand because words are left out; also, oval-shaped.",ex:"His elliptical reply left us wondering what he meant.",exb:"তার অস্পষ্ট উত্তর শুনে আমরা ভাবতে লাগলাম সে আসলে কী বোঝাতে চাইল।",hook:"ellipsis (…) = বাদ দেওয়া শব্দের চিহ্ন → কথা বাদ দিয়ে বলা = অস্পষ্ট। জ্যামিতিতে ellipse = উপবৃত্ত।"},
  {id:"elusive",word:"elusive",pos:"adjective",posBn:"বিশেষণ",def:"hard to pin down",bn:"অধরা, ধরা-ছোঁয়ার বাইরে",full:"Difficult to find, catch, achieve or remember.",ex:"For years, the World Cup trophy remained elusive for the team.",exb:"বছরের পর বছর বিশ্বকাপ ট্রফি দলটির কাছে অধরাই থেকে গেল।",hook:"elude = ফসকে যাওয়া → elusive = বারবার ফসকে যায়।"},
  {id:"emigrate",word:"emigrate",pos:"verb",posBn:"ক্রিয়া",def:"move from a country",bn:"(নিজের দেশ ছেড়ে) অন্য দেশে চলে যাওয়া",full:"To leave your own country to live permanently in another.",ex:"His family emigrated to Canada in 2010.",exb:"তার পরিবার ২০১০ সালে কানাডায় চলে যায়।",hook:"e (বাইরে) + migrate → দেশের বাইরে যাওয়া। emigrant = যে দেশ ছেড়ে যায়।"},
  {id:"immigration",word:"immigration",pos:"noun",posBn:"বিশেষ্য",def:"moving into a country",bn:"অভিবাসন (অন্য দেশে এসে বসবাস)",full:"The act of coming to live permanently in a foreign country.",ex:"You must pass through immigration at the airport.",exb:"বিমানবন্দরে তোমাকে ইমিগ্রেশন পার হতে হবে।",hook:"im (ভেতরে) + migrate → দেশের ভেতরে আসা। immigrant = যে নতুন দেশে আসে।"},
  {id:"eminent",word:"eminent",pos:"adjective",posBn:"বিশেষণ",def:"well-known",bn:"বিশিষ্ট, খ্যাতিমান",full:"Famous and respected within a particular field.",ex:"Jamal Nazrul Islam was an eminent mathematician and physicist.",exb:"জামাল নজরুল ইসলাম ছিলেন একজন খ্যাতিমান গণিতবিদ ও পদার্থবিদ।",hook:"e (বাইরে) + minere (উঁচু হয়ে থাকা) → ভিড়ের মধ্যে উঁচু হয়ে চোখে পড়ে। imminent (আসন্ন) নয়!"},
  {id:"empirical",word:"empirical",pos:"adjective",posBn:"বিশেষণ",def:"relying on experience",bn:"অভিজ্ঞতা বা পর্যবেক্ষণনির্ভর",full:"Based on observation, experiment or experience rather than theory.",ex:"There is no empirical evidence that the herbal tea cures diabetes.",exb:"ভেষজ চা ডায়াবেটিস সারায়, এর কোনো পর্যবেক্ষণভিত্তিক প্রমাণ নেই।",hook:"গ্রিক empeiria = অভিজ্ঞতা → empirical = দেখে-শুনে-পরীক্ষা করে পাওয়া।"}
]);

VOCAB.addLesson({
  id: "ws-q37", source: "wordsmart", order: 37,
  title: "Quick Quiz #37", titleBn: "কুইক কুইজ #৩৭",
  words: ["elicit","elliptical","elusive","emigrate","immigration","eminent","empirical"],
  note: {
    title: "e- (out) vs im- (in)",
    titleBn: "e- (বাইরে) বনাম im- (ভেতরে)",
    intro: "Two pairs of famous look-alikes are hiding in this quiz. Notice which way each word points.",
    introBn: "এই কুইজে দুই জোড়া বিখ্যাত দেখতে-একই শব্দ লুকিয়ে আছে। প্রতিটি শব্দ কোন দিকে নির্দেশ করে খেয়াল করো।",
    roots: [
      {parts:"e + migrare",gloss:"move out",word:"emigrate",bn:"দেশ ছেড়ে যাওয়া"},
      {parts:"im + migrare",gloss:"move in",word:"immigration",bn:"দেশে আসা"},
      {parts:"e + licere",gloss:"draw out",word:"elicit",bn:"বের করে আনা"},
      {parts:"e + minere",gloss:"stand out",word:"eminent",bn:"চোখে পড়ার মতো = বিশিষ্ট"},
      {parts:"e + ludere",gloss:"play out of reach",word:"elusive",bn:"ফসকে যায় = অধরা"}
    ],
    points: [
      ["A person who leaves Bangladesh emigrates FROM Bangladesh and immigrates TO Canada.","বাংলাদেশ ছেড়ে কানাডায় গেলে: বাংলাদেশ থেকে emigrate, কানাডায় immigrate।"],
      ["eminent = famous. imminent = about to happen. elicit = draw out. illicit = illegal.","eminent = বিশিষ্ট। imminent = আসন্ন। elicit = বের করে আনা। illicit = অবৈধ।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["well-known","সুপরিচিত"], b:["bring out","বের করে আনা"], c:["hard to pin down","অধরা"], d:["relying on experience","অভিজ্ঞতানির্ভর"],
      e:["move from a country","দেশ ছেড়ে যাওয়া"], f:["moving into a country","দেশে আসা"], g:["obscure","অস্পষ্ট"]
    },
    items: [
      {word:"elicit",answer:"b"},{word:"elliptical",answer:"g"},{word:"elusive",answer:"c"},{word:"emigrate",answer:"e"},
      {word:"immigration",answer:"f"},{word:"eminent",answer:"a"},{word:"empirical",answer:"d"}
    ]
  },
  sentences: [
    {text:"The detective's clever questions ___ a confession from the thief.",answer:"elicited",word:"elicit",bn:"গোয়েন্দার চতুর প্রশ্ন চোরের কাছ থেকে স্বীকারোক্তি আদায় করল।"},
    {text:"The poet's ___ lines left out so much that readers argued about their meaning.",answer:"elliptical",word:"elliptical",bn:"কবির অস্পষ্ট পঙ্‌ক্তিগুলোতে এত কিছু বাদ দেওয়া যে পাঠকেরা অর্থ নিয়ে তর্ক করল।"},
    {text:"Sleep remained ___ the night before the exam.",answer:"elusive",word:"elusive",bn:"পরীক্ষার আগের রাতে ঘুম অধরাই থেকে গেল।"},
    {text:"Thousands of young people ___ every year to work in the Middle East.",answer:"emigrate",word:"emigrate",bn:"প্রতি বছর হাজার হাজার তরুণ মধ্যপ্রাচ্যে কাজ করতে দেশ ছেড়ে যান।"},
    {text:"Canada encourages ___ of skilled workers.",answer:"immigration",word:"immigration",bn:"কানাডা দক্ষ শ্রমিকদের অভিবাসনে উৎসাহ দেয়।"},
    {text:"An ___ scientist will speak at our college on Friday.",answer:"eminent",word:"eminent",bn:"শুক্রবার আমাদের কলেজে একজন খ্যাতিমান বিজ্ঞানী বক্তৃতা দেবেন।"},
    {text:"The study is ___ : it is based on data from 5,000 patients.",answer:"empirical",word:"empirical",bn:"গবেষণাটি পর্যবেক্ষণনির্ভর: এটি ৫,০০০ রোগীর তথ্যের ওপর ভিত্তি করে।"}
  ]
});
