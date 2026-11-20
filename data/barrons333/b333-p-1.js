/* Barron's 333 · P · Part 1 (paragon – phlegmatic) */
VOCAB.addWords([
  {id:"paragon",word:"paragon",pos:"noun",posBn:"বিশেষ্য",def:"model of perfection",bn:"আদর্শ, নিখুঁত দৃষ্টান্ত",full:"A person or thing that is a perfect example of a quality; usually “a paragon of …”.",ex:"Our headmistress was a paragon of patience; no one ever heard her shout.",exb:"আমাদের প্রধান শিক্ষিকা ছিলেন ধৈর্যের আদর্শ; কেউ কখনো তাঁকে চেঁচাতে শোনেনি।",hook:"সাধারণত paragon of + গুণ: a paragon of virtue = সততার আদর্শ। epitome (#৩৯)-এর কাছাকাছি।"},
  {id:"pathological",word:"pathological",pos:"adjective",posBn:"বিশেষণ",def:"pertaining to disease",bn:"রোগসংক্রান্ত; রোগের মতো অস্বাভাবিক",full:"Relating to disease; also, so extreme that it seems like an illness (a pathological liar).",ex:"Scientists are studying the pathological effects of polluted water on river fish.",exb:"বিজ্ঞানীরা নদীর মাছের ওপর দূষিত পানির রোগজনিত প্রভাব নিয়ে গবেষণা করছেন।",hook:"pathology (#৬২) = রোগবিদ্যা। গ্রিক pathos (কষ্ট, রোগ) + logos (বিদ্যা)। হাসপাতালের ‘প্যাথলজি’ বিভাগ তো চেনোই!"},
  {id:"penury",word:"penury",pos:"noun",posBn:"বিশেষ্য",def:"severe poverty; stinginess",bn:"চরম দারিদ্র্য; কৃপণতা",full:"Extreme poverty; also, extreme unwillingness to spend money.",ex:"The family's penury forced the eldest son to leave school and find work.",exb:"পরিবারের চরম দারিদ্র্যের কারণে বড় ছেলেকে স্কুল ছেড়ে কাজ খুঁজতে হলো।",hook:"indigent (#৫০), destitute (#৩২)-এর সমার্থক। শুনতে penny-র মতো: পকেটে একটা penny-ও নেই = penury!"},
  {id:"perfidious",word:"perfidious",pos:"adjective",posBn:"বিশেষণ",def:"treacherous; disloyal",bn:"বিশ্বাসঘাতক",full:"Deceiving or betraying people who trust you.",ex:"The perfidious friend shared her secrets with the whole class.",exb:"বিশ্বাসঘাতক বন্ধুটি তার গোপন কথা পুরো ক্লাসে বলে দিল।",hook:"perfidy (#৬৩)-এর বিশেষণ রূপ। per + fides (বিশ্বাস) → বিশ্বাস ভেঙে ফেলা।"},
  {id:"permeable",word:"permeable",pos:"adjective",posBn:"বিশেষণ",def:"penetrable; porous; allowing liquids or gas to pass through",bn:"ভেদ্য, (তরল বা গ্যাস) ভেতরে যেতে দেয় এমন",full:"Allowing liquids or gases to pass through.",ex:"Sandy soil is permeable, so rainwater soaks into it quickly.",exb:"বেলে মাটি ভেদ্য, তাই বৃষ্টির পানি দ্রুত এতে শুষে যায়।",hook:"permeate (#৬৩) = ভেতরে ছড়িয়ে পড়া; permeable = ভেতরে যেতে দেয়। উল্টো impermeable।"},
  {id:"pervasive",word:"pervasive",pos:"adjective",posBn:"বিশেষণ",def:"spread throughout",bn:"সর্বব্যাপী, সবখানে ছড়ানো",full:"Spreading widely through every part of something.",ex:"The smell of fresh paint was pervasive throughout the new school building.",exb:"নতুন স্কুলভবনের সবখানে টাটকা রঙের গন্ধ ছড়িয়ে ছিল।",hook:"pervade (#৬৪)-এর বিশেষণ রূপ। per (সবখানে) + vadere (যাওয়া)। ubiquitous (#৮৩)-এর কাছাকাছি।"},
  {id:"phlegmatic",word:"phlegmatic",pos:"adjective",posBn:"বিশেষণ",def:"calm; not easily disturbed",bn:"ধীরস্থির, সহজে উত্তেজিত হয় না এমন",full:"Calm and unemotional; not easily excited or upset.",ex:"The phlegmatic goalkeeper barely smiled, even after saving a penalty.",exb:"পেনাল্টি ঠেকানোর পরও ধীরস্থির গোলরক্ষক সামান্যই হাসলেন।",hook:"পুরনো চিকিৎসাবিদ্যায় শরীরে phlegm (শ্লেষ্মা) বেশি = ধীর, শান্ত মেজাজ। sanguine (#৭৫) = রক্ত বেশি, হাসিখুশি। stoic (#৭৮)-এর কাছাকাছি।"}
]);

VOCAB.addLesson({
  id: "b333-p-1", source: "barrons333", order: 20, group: "P",
  title: "P · Part 1", titleBn: "P · পর্ব ১",
  words: ["paragon","partisan","pathological","paucity","pedantic","penchant","penury","perennial","perfidious","perfunctory","permeable","pervasive","phlegmatic"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    partisan: {def:"one-sided; prejudiced; committed to a party",pos:"adjective",posBn:"বিশেষণ",bn:"পক্ষপাতদুষ্ট, দলীয়",ex:"The newspaper's partisan report praised one side and ignored everything good about the other.",exb:"পত্রিকাটির পক্ষপাতদুষ্ট প্রতিবেদন এক পক্ষের প্রশংসা করল আর অন্য পক্ষের সব ভালো দিক উপেক্ষা করল।"},
    paucity: {def:"scarcity"},
    pedantic: {def:"showing off learning; bookish"},
    penchant: {def:"strong inclination; liking"},
    perennial: {def:"something long-lasting"},
    perfunctory: {def:"superficial; not thorough"}
  },
  note: {
    title: "per- (through, thoroughly)",
    titleBn: "per- (ভেতর দিয়ে, পুরোপুরি)",
    intro: "Latin per- means “through” or “thoroughly”. Five P words here are per- plus a root: through the years, through the material, through every part.",
    introBn: "ল্যাটিন per- মানে “ভেতর দিয়ে” বা “পুরোপুরি”। এখানে পাঁচটি P শব্দ per- আর একটি মূল দিয়ে তৈরি: বছরের পর বছর জুড়ে, বস্তুর ভেতর দিয়ে, সবখানে।",
    roots: [
      {parts:"per + annus",gloss:"through + year",word:"perennial",bn:"বছরের পর বছর টিকে থাকে"},
      {parts:"per + meare",gloss:"through + pass",word:"permeable",bn:"ভেতর দিয়ে যেতে দেয়"},
      {parts:"per + vadere",gloss:"through + go",word:"pervasive",bn:"সবখানে ছড়ানো"},
      {parts:"per + fungi",gloss:"through + perform",word:"perfunctory",bn:"কোনোমতে সেরে ফেলা, দায়সারা"},
      {parts:"per + fides",gloss:"breaking + faith",word:"perfidious",bn:"বিশ্বাসঘাতক"}
    ],
    points: [
      ["paucity = too little of something (a paucity of evidence). penury = extreme poverty (living in penury).","paucity = কোনো কিছুর স্বল্পতা (প্রমাণের স্বল্পতা)। penury = চরম দারিদ্র্য (দারিদ্র্যে দিন কাটানো)।"],
      ["phlegmatic and sanguine (#75) come from the old idea of four body fluids: phlegm made people calm, blood made them cheerful.","phlegmatic আর sanguine (#৭৫) এসেছে শরীরের চার রসের পুরনো ধারণা থেকে: শ্লেষ্মা মানুষকে শান্ত করে, রক্ত করে হাসিখুশি।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["pertaining to disease","রোগসংক্রান্ত"], b:["strong inclination; liking","প্রবল ঝোঁক"], c:["treacherous; disloyal","বিশ্বাসঘাতক"],
      d:["model of perfection","আদর্শ"], e:["penetrable; porous; allowing liquids or gas to pass through","ভেদ্য"], f:["severe poverty; stinginess","চরম দারিদ্র্য"],
      g:["calm; not easily disturbed","ধীরস্থির"], h:["scarcity","স্বল্পতা"], i:["spread throughout","সর্বব্যাপী"],
      j:["something long-lasting","চিরস্থায়ী"], k:["one-sided; prejudiced; committed to a party","পক্ষপাতদুষ্ট"], l:["superficial; not thorough","দায়সারা"],
      m:["showing off learning; bookish","পাণ্ডিত্য-দেখানো"]
    },
    items: [
      {word:"paragon",answer:"d"},{word:"partisan",answer:"k"},{word:"pathological",answer:"a"},{word:"paucity",answer:"h"},{word:"pedantic",answer:"m"},
      {word:"penchant",answer:"b"},{word:"penury",answer:"f"},{word:"perennial",answer:"j"},{word:"perfidious",answer:"c"},{word:"perfunctory",answer:"l"},
      {word:"permeable",answer:"e"},{word:"pervasive",answer:"i"},{word:"phlegmatic",answer:"g"}
    ]
  },
  sentences: [
    {text:"My grandfather was a ___ of honesty; he once walked two kilometres to return extra change.",answer:"paragon",word:"paragon",bn:"আমার দাদা ছিলেন সততার আদর্শ; একবার বাড়তি ভাংতি টাকা ফেরত দিতে তিনি দুই কিলোমিটার হেঁটে গিয়েছিলেন।"},
    {text:"The ___ crowd cheered every decision for the home team and booed every one against it.",answer:"partisan",word:"partisan",bn:"পক্ষপাতদুষ্ট দর্শকেরা স্বাগতিক দলের পক্ষের প্রতিটি সিদ্ধান্তে উল্লাস করল আর বিপক্ষের প্রতিটিতে দুয়ো দিল।"},
    {text:"The blood sample was sent to the ___ laboratory for tests.",answer:"pathological",word:"pathological",bn:"রক্তের নমুনাটি পরীক্ষার জন্য প্যাথলজি ল্যাবে পাঠানো হলো।"},
    {text:"The ___ of trained teachers in rural schools is a serious problem.",answer:"paucity",word:"paucity",bn:"গ্রামের স্কুলগুলোতে প্রশিক্ষিত শিক্ষকের স্বল্পতা একটি গুরুতর সমস্যা।"},
    {text:"The ___ guide corrected our pronunciation of every old place name instead of showing us the fort.",answer:"pedantic",word:"pedantic",bn:"পাণ্ডিত্য-দেখানো গাইড দুর্গ ঘুরিয়ে দেখানোর বদলে প্রতিটি পুরনো জায়গার নামের উচ্চারণ শুধরে দিচ্ছিলেন।"},
    {text:"Nadia has a ___ for detective novels; she reads one every week.",answer:"penchant",word:"penchant",bn:"গোয়েন্দা উপন্যাসের প্রতি নাদিয়ার প্রবল ঝোঁক; প্রতি সপ্তাহে সে একটা পড়ে।"},
    {text:"The flood left many farming families in ___ , with no crops and no savings.",answer:"penury",word:"penury",bn:"বন্যা অনেক কৃষক পরিবারকে চরম দারিদ্র্যে ফেলে দিল; না রইল ফসল, না রইল সঞ্চয়।"},
    {text:"Rabindranath's songs have ___ appeal; each new generation discovers them again.",answer:"perennial",word:"perennial",bn:"রবীন্দ্রনাথের গানের আবেদন চিরস্থায়ী; প্রতিটি নতুন প্রজন্ম আবার তা নতুন করে আবিষ্কার করে।"},
    {text:"The ___ minister in the old story sold the king's secrets to the enemy.",answer:"perfidious",word:"perfidious",bn:"পুরনো গল্পের বিশ্বাসঘাতক মন্ত্রী রাজার গোপন কথা শত্রুর কাছে বেচে দিয়েছিল।"},
    {text:"His apology was ___ : a quick “sorry” without even looking up from his phone.",answer:"perfunctory",word:"perfunctory",bn:"তার ক্ষমা চাওয়াটা ছিল দায়সারা: ফোন থেকে চোখ না তুলেই ঝটপট একটা “সরি”।"},
    {text:"Unglazed clay pots are slightly ___ , so a little water seeps through and keeps them cool.",answer:"permeable",word:"permeable",bn:"চকচকে প্রলেপহীন মাটির কলসি কিছুটা ভেদ্য, তাই সামান্য পানি চুঁইয়ে বেরিয়ে কলসিকে ঠান্ডা রাখে।"},
    {text:"The smell of smoke was ___ ; it had got into every room and every piece of clothing.",answer:"pervasive",word:"pervasive",bn:"ধোঁয়ার গন্ধ ছিল সর্বব্যাপী; প্রতিটি ঘরে, প্রতিটি কাপড়ে ঢুকে গিয়েছিল।"},
    {text:"Our ___ driver stayed calm while horns blared all around him in the traffic jam.",answer:"phlegmatic",word:"phlegmatic",bn:"যানজটে চারপাশে হর্ন বাজলেও আমাদের ধীরস্থির চালক শান্তই রইলেন।"}
  ]
});
