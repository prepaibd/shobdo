/* Barron's 333 · D · Part 3 (disparate – dupe) */
VOCAB.addWords([
  {id:"dissemble",word:"dissemble",pos:"verb",posBn:"ক্রিয়া",def:"disguise; pretend",bn:"ভান করা, (মনের ভাব) লুকানো",full:"To hide your real feelings or intentions by pretending.",ex:"Rafi dissembled his disappointment and congratulated his friend on winning.",exb:"রাফি নিজের হতাশা লুকিয়ে বন্ধুকে জয়ের জন্য অভিনন্দন জানাল।",hook:"semblance (বাইরের চেহারা) মনে করো: dissemble = আসল চেহারা লুকিয়ে অন্য চেহারা দেখানো। disseminate (ছড়ানো)-এর সাথে গুলিয়ো না। duplicity (#৩৫)-এর আত্মীয়।"},
  {id:"dissonance",word:"dissonance",pos:"noun",posBn:"বিশেষ্য",def:"discord; opposite of harmony",bn:"বেসুরো ভাব, অসামঞ্জস্য",full:"A harsh mix of sounds that do not go together; also, a clash between ideas or beliefs.",ex:"There was a clear dissonance between his kind words and his angry face.",exb:"তার নরম কথা আর রাগী মুখের মধ্যে স্পষ্ট অসামঞ্জস্য ছিল।",hook:"dissonant (#২৫)-এর বিশেষ্য রূপ। dis (আলাদা) + sonare (বাজা) → সবাই আলাদা সুরে বাজছে। cacophony (#১৮)-এর কাছাকাছি।"},
  {id:"distill",word:"distill",pos:"verb",posBn:"ক্রিয়া",def:"purify; refine; concentrate",bn:"পরিশোধন করা, নির্যাস বের করা",full:"To purify a liquid by heating it and collecting the vapour; also, to pick out the most important parts of something.",ex:"The teacher distilled the long chapter into five key points.",exb:"শিক্ষক লম্বা অধ্যায়টির নির্যাস বের করে পাঁচটি মূল পয়েন্টে সাজালেন।",hook:"distilled water = পাতিত পানি (ফুটিয়ে বাষ্প জমিয়ে বানানো বিশুদ্ধ পানি)। de + stillare (ফোঁটা ফোঁটা পড়া) → ফোঁটায় ফোঁটায় খাঁটি অংশ বের করা।"},
  {id:"diverge",word:"diverge",pos:"verb",posBn:"ক্রিয়া",def:"vary; go in different directions from the same point",bn:"ভিন্ন দিকে যাওয়া, আলাদা হয়ে যাওয়া",full:"To separate and go in different directions from a common point; also, to differ.",ex:"The road diverges at the big banyan tree: left to the market, right to the river.",exb:"বড় বটগাছের কাছে রাস্তাটা দুই ভাগ হয়ে গেছে: বাঁয়ে বাজার, ডানে নদী।",hook:"di (আলাদা) + vergere (হেলে যাওয়া) → আলাদা দিকে যাওয়া। converge = এক বিন্দুতে মেলা, ঠিক উল্টো।"},
  {id:"divest",word:"divest",pos:"verb",posBn:"ক্রিয়া",def:"strip; deprive",bn:"ছিনিয়ে নেওয়া, বঞ্চিত করা",full:"To take something away from someone, such as power, rights or property; also, to get rid of something.",ex:"The club divested the captain of his armband after he broke team rules.",exb:"দলের নিয়ম ভাঙায় ক্লাব অধিনায়কের আর্মব্যান্ড কেড়ে নিল।",hook:"dis (খুলে নেওয়া) + vestire (কাপড় পরানো) → কাপড় খুলে নেওয়া। vest (জামা) তো চেনোই! উল্টো invest = আদিতে ক্ষমতার পোশাক ‘পরিয়ে দেওয়া’।"},
  {id:"document",word:"document",pos:"verb",posBn:"ক্রিয়া",def:"provide written evidence",bn:"লিখিত প্রমাণ রাখা, নথিভুক্ত করা",full:"To record something in writing, photographs or other evidence, so that it can be proved later.",ex:"The students documented the river's pollution with photos and water samples.",exb:"শিক্ষার্থীরা ছবি আর পানির নমুনা দিয়ে নদীদূষণের প্রমাণ নথিভুক্ত করল।",hook:"document (বিশেষ্য) = দলিল; document (ক্রিয়া) = দলিল দিয়ে প্রমাণ রাখা। ল্যাটিন docere (শেখানো) থেকে; doctor, docile (#৩৪)-এর আত্মীয়।"},
  {id:"dupe",word:"dupe",pos:"noun",posBn:"বিশেষ্য",def:"someone easily fooled",bn:"সহজে বোকা বনে যায় এমন লোক",full:"A person who is easily tricked or used by others; as a verb, to dupe someone is to trick them.",ex:"Don't be a dupe: a real bank will never ask for your PIN over the phone.",exb:"বোকা বনো না: আসল ব্যাংক কখনো ফোনে তোমার পিন নম্বর চাইবে না।",hook:"dupe = যাকে সহজে ঠকানো যায়। credulous (#২৮) মানুষই প্রায়ই dupe হয়।"}
]);

VOCAB.addLesson({
  id: "b333-d-3", source: "barrons333", order: 9, group: "D",
  title: "D · Part 3", titleBn: "D · পর্ব ৩",
  words: ["disparate","dissemble","disseminate","dissolution","dissonance","distend","distill","diverge","divest","document","dogmatic","dormant","dupe"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    disparate: {def:"basically different; unrelated"},
    disseminate: {def:"distribute; spread; scatter (like seeds)"},
    dissolution: {def:"disintegration; looseness in morals"},
    distend: {def:"expand; swell out"},
    dogmatic: {def:"opinionated; arbitrary; doctrinal"},
    dormant: {def:"sleeping; lethargic; latent"}
  },
  note: {
    title: "dis-/di- (apart) and their opposites",
    titleBn: "dis-/di- (আলাদা) আর তাদের বিপরীত শব্দ",
    intro: "Latin dis-/di- means “apart” or “undo”. Several of these words have an easy opposite, so learn them in pairs.",
    introBn: "ল্যাটিন dis-/di- মানে “আলাদা” বা “খুলে ফেলা”। এদের কয়েকটির সহজ বিপরীত শব্দ আছে, তাই জোড়ায় জোড়ায় শেখো।",
    roots: [
      {parts:"di + vergere",gloss:"apart + bend",word:"diverge",bn:"আলাদা দিকে যাওয়া (↔ converge)"},
      {parts:"dis + vestire",gloss:"undo + clothe",word:"divest",bn:"কেড়ে নেওয়া (↔ invest)"},
      {parts:"dis + semen",gloss:"apart + seed",word:"disseminate",bn:"বীজের মতো ছড়ানো"},
      {parts:"dis + sonare",gloss:"apart + sound",word:"dissonance",bn:"বেসুরো ভাব (↔ harmony)"},
      {parts:"dis + tendere",gloss:"apart + stretch",word:"distend",bn:"টেনে ফুলিয়ে তোলা"}
    ],
    points: [
      ["dissemble = hide your feelings by pretending. disseminate = spread widely. Both start dis-s, so read carefully.","dissemble = ভান করে মনের ভাব লুকানো। disseminate = চারদিকে ছড়িয়ে দেওয়া। দুটোই dis-s দিয়ে শুরু, তাই সাবধানে পড়ো।"],
      ["diverge (go apart) is the opposite of converge (come together). divest (take away) is the opposite of invest (give power).","diverge (আলাদা হয়ে যাওয়া)-এর উল্টো converge (এক বিন্দুতে মেলা)। divest (কেড়ে নেওয়া)-এর উল্টো invest (ক্ষমতা দেওয়া)।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["disintegration; looseness in morals","বিলুপ্তি, ভাঙন"], b:["vary; go in different directions from the same point","ভিন্ন দিকে যাওয়া"], c:["disguise; pretend","ভান করা"],
      d:["sleeping; lethargic; latent","সুপ্ত"], e:["provide written evidence","নথিভুক্ত করা"], f:["expand; swell out","ফুলে ওঠা"],
      g:["someone easily fooled","সহজে ঠকে যে"], h:["basically different; unrelated","সম্পূর্ণ ভিন্ন"], i:["opinionated; arbitrary; doctrinal","গোঁড়া"],
      j:["purify; refine; concentrate","নির্যাস বের করা"], k:["distribute; spread; scatter (like seeds)","ছড়িয়ে দেওয়া"], l:["strip; deprive","ছিনিয়ে নেওয়া"],
      m:["discord; opposite of harmony","বেসুরো ভাব"]
    },
    items: [
      {word:"disparate",answer:"h"},{word:"dissemble",answer:"c"},{word:"disseminate",answer:"k"},{word:"dissolution",answer:"a"},{word:"dissonance",answer:"m"},
      {word:"distend",answer:"f"},{word:"distill",answer:"j"},{word:"diverge",answer:"b"},{word:"divest",answer:"l"},{word:"document",answer:"e"},
      {word:"dogmatic",answer:"i"},{word:"dormant",answer:"d"},{word:"dupe",answer:"g"}
    ]
  },
  sentences: [
    {text:"The new class brought together ___ students: a cricketer, a chess champion and a young poet.",answer:"disparate",word:"disparate",bn:"নতুন ক্লাসে একত্র হলো সম্পূর্ণ ভিন্ন ধরনের শিক্ষার্থী: একজন ক্রিকেটার, একজন দাবা চ্যাম্পিয়ন আর এক তরুণ কবি।"},
    {text:"Although she was upset, she ___ well and smiled through the whole party.",answer:"dissembled",word:"dissemble",bn:"মন খারাপ থাকলেও সে ভালোভাবেই তা লুকাল, পুরো পার্টিতে হাসিমুখে রইল।"},
    {text:"Volunteers went door to door to ___ leaflets about clean drinking water.",answer:"disseminate",word:"disseminate",bn:"বিশুদ্ধ খাবার পানি নিয়ে লিফলেট ছড়িয়ে দিতে স্বেচ্ছাসেবকেরা বাড়ি বাড়ি গেলেন।"},
    {text:"After years of quarrels, the members voted for the ___ of the club.",answer:"dissolution",word:"dissolution",bn:"বছরের পর বছর ঝগড়ার পর সদস্যরা ক্লাবটি ভেঙে দেওয়ার পক্ষে ভোট দিলেন।"},
    {text:"The ___ of horns, hawkers and loudspeakers in the bazaar gave me a headache.",answer:"dissonance",word:"dissonance",bn:"বাজারে হর্ন, ফেরিওয়ালা আর মাইকের বেসুরো শব্দে আমার মাথা ধরে গেল।"},
    {text:"The balloon began to ___ as the boy pumped more air into it.",answer:"distend",word:"distend",bn:"ছেলেটি আরও বাতাস ভরতে থাকায় বেলুনটি ফুলে উঠতে লাগল।"},
    {text:"Can you ___ this ten-page report into one clear paragraph?",answer:"distill",word:"distill",bn:"দশ পাতার এই প্রতিবেদনের নির্যাস কি তুমি একটি স্পষ্ট অনুচ্ছেদে বের করে আনতে পারবে?"},
    {text:"Our paths ___ after school: Tanvir went to medical college and I joined an engineering university.",answer:"diverged",word:"diverge",bn:"স্কুলের পর আমাদের পথ আলাদা হয়ে গেল: তানভীর গেল মেডিকেল কলেজে, আর আমি ভর্তি হলাম প্রকৌশল বিশ্ববিদ্যালয়ে।"},
    {text:"The court ___ the dishonest official of all his powers.",answer:"divested",word:"divest",bn:"আদালত অসৎ কর্মকর্তাটির সব ক্ষমতা কেড়ে নিল।"},
    {text:"The journalist carefully ___ every case with photos and signed statements.",answer:"documented",word:"document",bn:"সাংবাদিক ছবি আর স্বাক্ষরিত বিবৃতি দিয়ে প্রতিটি ঘটনার প্রমাণ যত্ন করে নথিভুক্ত করলেন।"},
    {text:"My ___ cousin insists his favourite team is the best and will not listen to any argument.",answer:"dogmatic",word:"dogmatic",bn:"আমার গোঁড়া চাচাতো ভাই জোর দিয়ে বলে তার প্রিয় দলই সেরা, কোনো যুক্তিই সে শোনে না।"},
    {text:"The seeds lay ___ in the dry soil until the first monsoon rain woke them.",answer:"dormant",word:"dormant",bn:"বর্ষার প্রথম বৃষ্টি জাগিয়ে না তোলা পর্যন্ত বীজগুলো শুকনো মাটিতে সুপ্ত হয়ে পড়ে ছিল।"},
    {text:"The con man saw the tourist as an easy ___ and sold him glass beads as pearls.",answer:"dupe",word:"dupe",bn:"প্রতারক পর্যটকটিকে সহজ শিকার ভেবে কাচের পুঁতিকে মুক্তা বলে বিক্রি করে দিল।"}
  ]
});
