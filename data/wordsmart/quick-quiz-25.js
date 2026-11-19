/* Word Smart · Quick Quiz #25 */
VOCAB.addWords([
  {id:"conjecture",word:"conjecture",pos:"noun",posBn:"বিশেষ্য",def:"guess",bn:"অনুমান",full:"An opinion formed without complete evidence; a guess.",ex:"Without the report, everything about the cause of the fire is just conjecture.",exb:"প্রতিবেদন ছাড়া আগুনের কারণ নিয়ে সবকিছুই নিছক অনুমান।",hook:"con + ject (ছুঁড়ে দেওয়া; abject #১) → আন্দাজে ছুঁড়ে দেওয়া কথা।"},
  {id:"conjure",word:"conjure",pos:"verb",posBn:"ক্রিয়া",def:"summon as if by magic",bn:"জাদুবলে হাজির করা; মনে ফুটিয়ে তোলা",full:"To make something appear as if by magic; also, to call up a picture in the mind.",ex:"The smell of rain conjures up memories of my village.",exb:"বৃষ্টির গন্ধ আমার গ্রামের স্মৃতি মনে জাগিয়ে তোলে।",hook:"conjurer = জাদুকর। conjure up = মনে ছবি ভাসিয়ে আনা।"},
  {id:"connoisseur",word:"connoisseur",pos:"noun",posBn:"বিশেষ্য",def:"artistic expert",bn:"রসজ্ঞ, সমঝদার",full:"An expert judge of art, food, music or other matters of taste.",ex:"My uncle is a connoisseur of classical music.",exb:"আমার মামা শাস্ত্রীয় সংগীতের সমঝদার।",hook:"ফরাসি connaître = জানা → যে ভালো জানে। উচ্চারণ “কনোসার”।"},
  {id:"consecrate",word:"consecrate",pos:"verb",posBn:"ক্রিয়া",def:"make sacred",bn:"পবিত্র ঘোষণা করা, উৎসর্গ করা",full:"To declare something holy in a religious ceremony; also, to dedicate to a purpose.",ex:"The new church was consecrated last Sunday.",exb:"গত রবিবার নতুন গির্জাটি আনুষ্ঠানিকভাবে পবিত্র ঘোষণা করা হয়।",hook:"con + secr (পবিত্র; sacred) → পবিত্র করা। উল্টো: desecrate।"},
  {id:"desecrate",word:"desecrate",pos:"verb",posBn:"ক্রিয়া",def:"treat irreverently",bn:"অপবিত্র করা, অবমাননা করা",full:"To damage or treat a holy or respected place or thing without respect.",ex:"Vandals desecrated the war memorial with graffiti.",exb:"দুর্বৃত্তরা দেয়াললিখন দিয়ে যুদ্ধস্মৃতিসৌধের অবমাননা করল।",hook:"de (উল্টো) + secr (পবিত্র) → পবিত্রতা নষ্ট করা।"},
  {id:"consensus",word:"consensus",pos:"noun",posBn:"বিশেষ্য",def:"unanimity",bn:"ঐকমত্য, সর্বসম্মতি",full:"General agreement among a group.",ex:"The committee reached a consensus after a long debate.",exb:"দীর্ঘ বিতর্কের পর কমিটি ঐকমত্যে পৌঁছাল।",hook:"con + sens (অনুভব; sense) → সবার একই অনুভব = ঐকমত্য।"},
  {id:"consonant",word:"consonant",pos:"adjective",posBn:"বিশেষণ",def:"harmonious",bn:"সংগতিপূর্ণ, সামঞ্জস্যপূর্ণ",full:"In agreement or harmony with something; usually “consonant with”.",ex:"His actions are consonant with his words.",exb:"তার কাজ তার কথার সাথে সংগতিপূর্ণ।",hook:"con + son (শব্দ; sonic) → একসাথে মিলে বাজা। এখানে ব্যঞ্জনবর্ণ (consonant) নয়, বিশেষণ।"},
  {id:"dissonant",word:"dissonant",pos:"adjective",posBn:"বিশেষণ",def:"incompatible; inharmonious",bn:"বেসুরো, অসংগত, বেমানান",full:"Not in harmony; clashing.",ex:"The glass tower looks dissonant among the old buildings of Old Dhaka.",exb:"পুরান ঢাকার পুরনো দালানগুলোর মাঝে কাচের টাওয়ারটি বেমানান দেখায়।",hook:"dis (আলাদা) + son (শব্দ) → আলাদা আলাদা সুরে বাজা = বেসুরো।"}
]);

VOCAB.addLesson({
  id: "ws-q25", source: "wordsmart", order: 25,
  title: "Quick Quiz #25", titleBn: "কুইক কুইজ #২৫",
  words: ["conjecture","conjure","connoisseur","consecrate","desecrate","consensus","consonant","dissonant"],
  note: {
    title: "Opposite pairs: con-/de- and con-/dis-",
    titleBn: "বিপরীত জোড়া: con-/de- আর con-/dis-",
    intro: "Two pairs in this quiz are exact opposites. Change only the prefix and the meaning flips.",
    introBn: "এই কুইজে দুটি জোড়া একেবারে বিপরীত। শুধু উপসর্গ বদলালেই অর্থ উল্টে যায়।",
    roots: [
      {parts:"con + sacrare ↔ de + sacrare",gloss:"make holy ↔ unmake holy",word:"consecrate ↔ desecrate",bn:"পবিত্র করা ↔ অপবিত্র করা"},
      {parts:"con + sonare ↔ dis + sonare",gloss:"sound together ↔ apart",word:"consonant ↔ dissonant",bn:"সুরে মেলে ↔ বেসুরো"},
      {parts:"con + jacere",gloss:"throw together",word:"conjecture",bn:"আন্দাজে ছোঁড়া = অনুমান"},
      {parts:"con + sentire",gloss:"feel together",word:"consensus",bn:"একসাথে অনুভব = ঐকমত্য"}
    ],
    points: [
      ["conjecture = a guess (noun). conjure = make appear as if by magic (verb).","conjecture = অনুমান (বিশেষ্য)। conjure = জাদুর মতো হাজির করা (ক্রিয়া)।"],
      ["Avoid “general consensus” in formal writing; consensus already means general agreement.","আনুষ্ঠানিক লেখায় “general consensus” এড়িয়ে চলো; consensus মানেই সবার মত।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["incompatible","বেমানান"], b:["harmonious","সংগতিপূর্ণ"], c:["make sacred","পবিত্র করা"], d:["unanimity","ঐকমত্য"],
      e:["summon as if by magic","জাদুবলে হাজির করা"], f:["treat irreverently","অশ্রদ্ধা করা"], g:["artistic expert","রসজ্ঞ"], h:["guess","অনুমান"]
    },
    items: [
      {word:"conjecture",answer:"h"},{word:"conjure",answer:"e"},{word:"connoisseur",answer:"g"},{word:"consecrate",answer:"c"},
      {word:"desecrate",answer:"f"},{word:"consensus",answer:"d"},{word:"consonant",answer:"b"},{word:"dissonant",answer:"a"}
    ]
  },
  sentences: [
    {text:"Nobody knows why he left; it is all ___ .",answer:"conjecture",word:"conjecture",bn:"সে কেন চলে গেল কেউ জানে না; সবই অনুমান।"},
    {text:"The magician ___ a pigeon out of an empty hat.",answer:"conjured",word:"conjure",bn:"জাদুকর খালি টুপি থেকে একটা কবুতর বের করে আনলেন।"},
    {text:"Only a true ___ can tell a real Jamdani from a machine-made copy.",answer:"connoisseur",word:"connoisseur",bn:"শুধু একজন প্রকৃত সমঝদারই আসল জামদানি আর মেশিনে বোনা নকলের পার্থক্য ধরতে পারেন।"},
    {text:"The ground was ___ as a cemetery in 1950.",answer:"consecrated",word:"consecrate",bn:"১৯৫০ সালে জায়গাটি আনুষ্ঠানিকভাবে সমাধিক্ষেত্র হিসেবে পবিত্র ঘোষণা করা হয়।"},
    {text:"Thieves ___ the old temple by stealing its ancient lamps.",answer:"desecrated",word:"desecrate",bn:"চোরেরা পুরনো মন্দিরের প্রাচীন প্রদীপগুলো চুরি করে এর অবমাননা করল।"},
    {text:"There is a growing ___ that plastic bags should be banned.",answer:"consensus",word:"consensus",bn:"প্লাস্টিক ব্যাগ নিষিদ্ধ করা উচিত, এ বিষয়ে ঐকমত্য বাড়ছে।"},
    {text:"The new policy is ___ with the school's values.",answer:"consonant",word:"consonant",bn:"নতুন নীতিটি স্কুলের মূল্যবোধের সাথে সংগতিপূর্ণ।"},
    {text:"The loud, ___ music clashed with the quiet mood of the ceremony.",answer:"dissonant",word:"dissonant",bn:"উচ্চস্বরের বেসুরো সংগীত অনুষ্ঠানের শান্ত আবহের সাথে বেমানান ছিল।"}
  ]
});
