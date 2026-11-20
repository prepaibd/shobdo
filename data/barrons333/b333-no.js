/* Barron's 333 · N–O (negate – ostentatious) */
VOCAB.addWords([
  {id:"negate",word:"negate",pos:"verb",posBn:"ক্রিয়া",def:"cancel out; nullify; deny",bn:"নাকচ করা, প্রভাব বাতিল করে দেওয়া",full:"To cancel the effect of something, or to say that it is not true.",ex:"Eating a big packet of chips after the gym will negate the benefits of your workout.",exb:"জিমের পর বড় এক প্যাকেট চিপস খেলে ব্যায়ামের সব উপকারই বাতিল হয়ে যাবে।",hook:"ল্যাটিন negare = না বলা (negative একই মূল থেকে)। negate = ‘না’ করে দেওয়া, প্রভাব শূন্য করে দেওয়া।"},
  {id:"neophyte",word:"neophyte",pos:"noun",posBn:"বিশেষ্য",def:"recent convert; beginner",bn:"নবিশ, শিক্ষানবিশ",full:"A beginner who has just started learning a skill or joined a group; originally, a new convert.",ex:"As a neophyte at chess, Tuhin lost every game in his first month.",exb:"দাবায় নবিশ তুহিন প্রথম মাসে প্রতিটি খেলাই হারল।",hook:"গ্রিক neos (নতুন) + phytos (রোপিত) → সদ্য লাগানো চারা। fledgling আর novice-এর সমার্থক।"},
  {id:"obviate",word:"obviate",pos:"verb",posBn:"ক্রিয়া",def:"make unnecessary; get rid of",bn:"অপ্রয়োজনীয় করে তোলা, এড়িয়ে যাওয়ার ব্যবস্থা করা",full:"To remove a need or a problem, so that something is no longer necessary.",ex:"Online admission forms obviate the need to stand in long queues.",exb:"অনলাইন ভর্তি ফর্ম লম্বা লাইনে দাঁড়ানোর প্রয়োজনই দূর করে দিয়েছে।",hook:"প্রায়ই আসে obviate the need for = প্রয়োজনটাই মিটিয়ে দেওয়া। ob (সামনে) + via (পথ) → সমস্যাকে পথেই আটকে দেওয়া। preclude (#৬৬)-এর কাছাকাছি।"},
  {id:"occlude",word:"occlude",pos:"verb",posBn:"ক্রিয়া",def:"shut; close",bn:"বন্ধ করা, মুখ আটকে দেওয়া",full:"To block or close an opening or passage.",ex:"A fallen branch occluded the drain, and the street flooded.",exb:"একটা ভাঙা ডাল নালার মুখ আটকে দিল, আর রাস্তায় পানি জমে গেল।",hook:"ob (সামনে) + claudere (বন্ধ করা) → মুখ বন্ধ করে দেওয়া। include, exclude, conclude-এও claudere।"},
  {id:"opprobrium",word:"opprobrium",pos:"noun",posBn:"বিশেষ্য",def:"infamy; vilification",bn:"কলঙ্ক, তীব্র নিন্দা",full:"Harsh public criticism and disgrace caused by shameful behaviour.",ex:"The factory owner faced public opprobrium after dumping waste into the river.",exb:"নদীতে বর্জ্য ফেলার পর কারখানার মালিক জনসাধারণের তীব্র নিন্দার মুখে পড়লেন।",hook:"ob + probrum (লজ্জাজনক কাজ) → লজ্জার জন্য নিন্দা। ignominy (#৪৭), infamous (#৫০), vilify (#৮৪)-এর পরিবার।"},
  {id:"oscillate",word:"oscillate",pos:"verb",posBn:"ক্রিয়া",def:"vibrate; waver",bn:"দোল খাওয়া, দোদুল্যমান থাকা",full:"To swing back and forth; also, to keep changing between two opinions or feelings.",ex:"The table fan oscillates from side to side to cool the whole room.",exb:"টেবিল ফ্যানটি এপাশ-ওপাশ ঘুরে পুরো ঘর ঠান্ডা রাখে।",hook:"ফ্যানের ‘oscillation’ বাটন চেনো? চাপলে ফ্যান এপাশ-ওপাশ দোলে। vacillate (#৮৪) = মন দোলে; oscillate = জিনিস বা মন দুই-ই।"}
]);

VOCAB.addLesson({
  id: "b333-no", source: "barrons333", order: 19, group: "N–O",
  title: "N–O", titleBn: "N–O",
  words: ["negate","neophyte","obdurate","obsequious","obviate","occlude","officious","onerous","opprobrium","oscillate","ostentatious"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    obdurate: {def:"stubborn"},
    obsequious: {def:"lavishly attentive; servile; sycophantic"},
    officious: {def:"meddlesome; excessively pushy in offering one’s services"},
    onerous: {def:"burdensome"},
    ostentatious: {def:"showy; pretentious; trying to attract attention"}
  },
  note: {
    title: "ob- (against, in the way)",
    titleBn: "ob- (বিরুদ্ধে, পথ আগলে)",
    intro: "Latin ob- means “against, toward, in the way”. Before c and p it becomes oc- and op-. Five O words here are ob- plus a root.",
    introBn: "ল্যাটিন ob- মানে “বিরুদ্ধে, দিকে, পথ আগলে”। c আর p-এর আগে এটি হয়ে যায় oc- আর op-। এখানে পাঁচটি O শব্দ ob- আর একটি মূল দিয়ে তৈরি।",
    roots: [
      {parts:"ob + durus",gloss:"against + hard",word:"obdurate",bn:"কঠিন, একগুঁয়ে"},
      {parts:"ob + via",gloss:"in the way + road",word:"obviate",bn:"পথেই আটকে দেওয়া"},
      {parts:"ob + claudere",gloss:"in the way + shut",word:"occlude",bn:"মুখ বন্ধ করা"},
      {parts:"ob + sequi",gloss:"toward + follow",word:"obsequious",bn:"পিছু পিছু ঘোরা, তোষামুদে"},
      {parts:"ob + probrum",gloss:"against + shameful act",word:"opprobrium",bn:"কলঙ্ক, নিন্দা"}
    ],
    points: [
      ["obsequious = too eager to obey (servile). officious = too eager to give unwanted help or orders (meddlesome).","obsequious = অতি বাধ্য, তোষামুদে। officious = অযাচিত সাহায্য বা হুকুম দিতে ব্যস্ত, গায়ে-পড়া।"],
      ["neophyte comes from Greek neos, “new”, like neon and neolithic (the New Stone Age).","neophyte এসেছে গ্রিক neos (নতুন) থেকে; neon আর neolithic (নব্য প্রস্তর যুগ) শব্দেও এটি আছে।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["lavishly attentive; servile; sycophantic","তোষামুদে"], b:["burdensome","দুর্বহ"], c:["recent convert; beginner","নবিশ"],
      d:["showy; pretentious; trying to attract attention","লোক-দেখানো"], e:["shut; close","বন্ধ করা"], f:["vibrate; waver","দোল খাওয়া"],
      g:["cancel out; nullify; deny","নাকচ করা"], h:["meddlesome; excessively pushy in offering one’s services","গায়ে-পড়া"], i:["infamy; vilification","কলঙ্ক"],
      j:["stubborn","একগুঁয়ে"], k:["make unnecessary; get rid of","অপ্রয়োজনীয় করা"]
    },
    items: [
      {word:"negate",answer:"g"},{word:"neophyte",answer:"c"},{word:"obdurate",answer:"j"},{word:"obsequious",answer:"a"},
      {word:"obviate",answer:"k"},{word:"occlude",answer:"e"},{word:"officious",answer:"h"},{word:"onerous",answer:"b"},
      {word:"opprobrium",answer:"i"},{word:"oscillate",answer:"f"},{word:"ostentatious",answer:"d"}
    ]
  },
  sentences: [
    {text:"One careless over at the end can ___ a whole day of good bowling.",answer:"negate",word:"negate",bn:"শেষে একটা অসতর্ক ওভার সারা দিনের ভালো বোলিংকে বৃথা করে দিতে পারে।"},
    {text:"The ___ cook burned the rice twice before learning to lower the flame.",answer:"neophyte",word:"neophyte",bn:"নবিশ রাঁধুনি আঁচ কমাতে শেখার আগে দুবার ভাত পুড়িয়ে ফেলল।"},
    {text:"The ___ shopkeeper refused to take back the torn shirt, even with the receipt.",answer:"obdurate",word:"obdurate",bn:"রসিদ থাকা সত্ত্বেও একগুঁয়ে দোকানি ছেঁড়া শার্টটা ফেরত নিতে রাজি হলেন না।"},
    {text:"The ___ waiter kept bowing and calling the rich guest “sir” after every word.",answer:"obsequious",word:"obsequious",bn:"তোষামুদে ওয়েটার বারবার মাথা নুইয়ে প্রতিটি কথার পর ধনী অতিথিকে “স্যার” ডাকছিলেন।"},
    {text:"The new footbridge will ___ the need to dodge cars on the busy road.",answer:"obviate",word:"obviate",bn:"নতুন ফুটওভারব্রিজ ব্যস্ত রাস্তায় গাড়ি এড়িয়ে পার হওয়ার প্রয়োজনই দূর করবে।"},
    {text:"Thick clouds began to ___ the sun, and the afternoon turned dark.",answer:"occlude",word:"occlude",bn:"ঘন মেঘ সূর্যকে ঢেকে দিতে লাগল, আর বিকেলটা অন্ধকার হয়ে এল।"},
    {text:"Though we asked for no help, the ___ hotel porter insisted on choosing our room, carrying our bags and planning our day.",answer:"officious",word:"officious",bn:"আমরা কোনো সাহায্য না চাইলেও গায়ে-পড়া হোটেল-কুলি জোর করে আমাদের ঘর বেছে দিলেন, ব্যাগ বয়ে নিলেন, এমনকি সারা দিনের পরিকল্পনাও করে দিলেন।"},
    {text:"Carrying water from the far well every morning was an ___ task for the children.",answer:"onerous",word:"onerous",bn:"প্রতিদিন সকালে দূরের কুয়া থেকে পানি বয়ে আনা ছিল শিশুদের জন্য এক দুর্বহ কাজ।"},
    {text:"The player who cheated earned the ___ of fans across the country.",answer:"opprobrium",word:"opprobrium",bn:"প্রতারণা করা খেলোয়াড়টি সারা দেশের সমর্থকদের তীব্র নিন্দা কুড়াল।"},
    {text:"Her mood seemed to ___ between excitement and fear as results day came closer.",answer:"oscillate",word:"oscillate",bn:"ফলাফলের দিন যত ঘনিয়ে এল, তার মন উত্তেজনা আর ভয়ের মধ্যে দোল খেতে লাগল।"},
    {text:"The ___ house had golden gates, marble lions and a fountain shaped like a peacock.",answer:"ostentatious",word:"ostentatious",bn:"লোক-দেখানো বাড়িটিতে ছিল সোনালি ফটক, মার্বেলের সিংহ আর ময়ূরের আকৃতির ফোয়ারা।"}
  ]
});
