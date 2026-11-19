/* Word Smart · Quick Quiz #6 */
VOCAB.addWords([
  {id:"allusion",word:"allusion",pos:"noun",posBn:"বিশেষ্য",def:"indirect reference",bn:"পরোক্ষ উল্লেখ, ইঙ্গিত",full:"A short, indirect mention of something without naming it directly.",ex:"His speech was full of allusions to Rabindranath's poems.",exb:"তার বক্তৃতা রবীন্দ্রনাথের কবিতার পরোক্ষ উল্লেখে ভরা ছিল।",hook:"allude = ইঙ্গিত করা। allusion (ইঙ্গিত) আর illusion (ভ্রম, মায়া) গুলিয়ে ফেলো না।"},
  {id:"aloof",word:"aloof",pos:"adjective",posBn:"বিশেষণ",def:"standoffish",bn:"দূরত্ব বজায় রাখে এমন, নির্লিপ্ত",full:"Cool and distant; not friendly or not involved.",ex:"The new student stayed aloof and rarely joined our games.",exb:"নতুন ছাত্রটি সবার থেকে দূরে থাকত, আমাদের খেলায় খুব কমই যোগ দিত।",hook:"aloof ≈ “a roof” → ছাদের ওপর একা বসে থাকা, সবার থেকে দূরে।"},
  {id:"altruism",word:"altruism",pos:"noun",posBn:"বিশেষ্য",def:"generosity",bn:"পরার্থপরতা, নিঃস্বার্থ পরোপকার",full:"Unselfish concern for the welfare of others.",ex:"Working in flood areas without pay is an act of altruism.",exb:"বিনা পারিশ্রমিকে বন্যাদুর্গত এলাকায় কাজ করা পরার্থপরতার কাজ।",hook:"alter = অন্য (alternative) → অন্যের জন্য ভাবা। উল্টো: egoism (আত্মকেন্দ্রিকতা)।"},
  {id:"ambience",word:"ambience",pos:"noun",posBn:"বিশেষ্য",def:"atmosphere",bn:"পরিবেশ, আবহ",full:"The mood or feeling of a place.",ex:"The café has a quiet, cosy ambience that is perfect for studying.",exb:"ক্যাফেটির শান্ত, আরামদায়ক পরিবেশ পড়াশোনার জন্য একদম উপযুক্ত।",hook:"amb = চারপাশ (ambient light) → চারপাশের আবহ।"},
  {id:"ambiguous",word:"ambiguous",pos:"adjective",posBn:"বিশেষণ",def:"confusing",bn:"দ্ব্যর্থক, অস্পষ্ট",full:"Having more than one possible meaning, so it is unclear.",ex:"The exam question was ambiguous, so students answered it in different ways.",exb:"পরীক্ষার প্রশ্নটি দ্ব্যর্থক ছিল, তাই শিক্ষার্থীরা ভিন্ন ভিন্নভাবে উত্তর দিয়েছে।",hook:"ambi = দুই (ambidextrous = দুই হাতেই দক্ষ) → দুই অর্থ হয় এমন।"},
  {id:"ambivalent",word:"ambivalent",pos:"adjective",posBn:"বিশেষণ",def:"undecided",bn:"দ্বিধাগ্রস্ত, মিশ্র অনুভূতির",full:"Having mixed or opposite feelings about something.",ex:"I'm ambivalent about studying abroad: excited, but sad to leave my family.",exb:"বিদেশে পড়তে যাওয়া নিয়ে আমি দ্বিধায় আছি: উত্তেজিত, আবার পরিবার ছেড়ে যেতে কষ্টও লাগছে।",hook:"ambi (দুই) + valent (শক্তি) → দুই দিকে সমান টান = দ্বিধা।"}
]);

VOCAB.addLesson({
  id: "ws-q06", source: "wordsmart", order: 6,
  title: "Quick Quiz #6", titleBn: "কুইক কুইজ #৬",
  words: ["allusion","aloof","altruism","ambience","ambiguous","ambivalent"],
  note: {
    title: "ambi- means “both”; amb- means “around”",
    titleBn: "ambi- মানে “দুই”; amb- মানে “চারপাশ”",
    intro: "Two of these words have two sides inside them, and one is about what surrounds you.",
    introBn: "দুটি শব্দের ভেতরে “দুই দিক” লুকিয়ে আছে, আর একটি শব্দ চারপাশের আবহ নিয়ে।",
    roots: [
      {parts:"ambi + agere",gloss:"drive both ways",word:"ambiguous",bn:"দুই দিকে যায় = দ্ব্যর্থক"},
      {parts:"ambi + valere",gloss:"be strong both ways",word:"ambivalent",bn:"দুই দিকে টান = দ্বিধা"},
      {parts:"ambi",gloss:"around",word:"ambience",bn:"চারপাশ = পরিবেশ"},
      {parts:"alter",gloss:"other",word:"altruism",bn:"অন্যের জন্য = পরার্থপরতা"},
      {parts:"ad + ludere",gloss:"play",word:"allusion",bn:"খেলাচ্ছলে ইঙ্গিত = পরোক্ষ উল্লেখ"}
    ],
    points: [
      ["ambiguous is about meaning (an ambiguous sentence). ambivalent is about feelings (I feel ambivalent).","ambiguous অর্থ নিয়ে (দ্ব্যর্থক বাক্য)। ambivalent অনুভূতি নিয়ে (আমি দ্বিধায় আছি)।"],
      ["allusion = an indirect mention. illusion = something false that seems real.","allusion = পরোক্ষ উল্লেখ। illusion = যা সত্য মনে হয় কিন্তু সত্য নয় (ভ্রম)।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["atmosphere","পরিবেশ"], b:["standoffish","দূরত্ব রাখে এমন"], c:["confusing","বিভ্রান্তিকর"],
      d:["generosity","উদারতা"], e:["indirect reference","পরোক্ষ উল্লেখ"], f:["undecided","দ্বিধাগ্রস্ত"]
    },
    items: [
      {word:"allusion",answer:"e"},{word:"aloof",answer:"b"},{word:"altruism",answer:"d"},
      {word:"ambience",answer:"a"},{word:"ambiguous",answer:"c"},{word:"ambivalent",answer:"f"}
    ]
  },
  sentences: [
    {text:"The poem's title is an ___ to an old folk song.",answer:"allusion",word:"allusion",bn:"কবিতার শিরোনামটি একটি পুরনো লোকগানের প্রতি ইঙ্গিত।"},
    {text:"The manager seemed ___ and never ate lunch with his team.",answer:"aloof",word:"aloof",bn:"ম্যানেজার সবার থেকে দূরত্ব রাখতেন, কখনো দলের সাথে দুপুরের খাবার খেতেন না।"},
    {text:"Giving blood to strangers is a simple form of ___ .",answer:"altruism",word:"altruism",bn:"অপরিচিত মানুষকে রক্ত দেওয়া পরার্থপরতার একটি সহজ রূপ।"},
    {text:"Soft music and candlelight gave the restaurant a peaceful ___ .",answer:"ambience",word:"ambience",bn:"মৃদু সংগীত আর মোমের আলো রেস্তোরাঁয় এক শান্ত পরিবেশ তৈরি করল।"},
    {text:"Her message “See you later” was ___ ; I didn't know which day she meant.",answer:"ambiguous",word:"ambiguous",bn:"তার “পরে দেখা হবে” বার্তাটি অস্পষ্ট ছিল; কোন দিনের কথা বলছে বুঝিনি।"},
    {text:"He felt ___ about the job offer: a good salary, but very long hours.",answer:"ambivalent",word:"ambivalent",bn:"চাকরির প্রস্তাব নিয়ে তার মিশ্র অনুভূতি: বেতন ভালো, কিন্তু কাজের সময় অনেক বেশি।"}
  ]
});
