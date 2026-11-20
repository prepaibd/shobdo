/* Barron's 333 · L (laconic – luminous) */
VOCAB.addWords([
  {id:"lassitude",word:"lassitude",pos:"noun",posBn:"বিশেষ্য",def:"languor; weariness",bn:"অবসাদ, ক্লান্তি",full:"A feeling of tiredness and lack of energy or interest.",ex:"A strange lassitude came over the whole class on the hot, still afternoon.",exb:"গুমোট গরম দুপুরে পুরো ক্লাসে এক অদ্ভুত অবসাদ নেমে এল।",hook:"ল্যাটিন lassus = ক্লান্ত। languish (#৫৪), lethargy (#৫৪)-এর কাছাকাছি; কিছু যখন enervate (#৩৮) করে, তখন আসে lassitude।"},
  {id:"lethargic",word:"lethargic",pos:"adjective",posBn:"বিশেষণ",def:"drowsy; dull",bn:"ঝিমুনিভরা, নিস্তেজ",full:"Sleepy, slow and lacking energy.",ex:"After the big Eid lunch, everyone felt lethargic and dozed on the sofa.",exb:"ঈদের ভারী দুপুরের খাবারের পর সবাই ঝিমিয়ে পড়ল, সোফাতেই ঢুলতে লাগল।",hook:"lethargy (#৫৪)-এর বিশেষণ রূপ। গ্রিক lethe = বিস্মৃতি → সব ভুলে ঘুমঘুম ভাব। torpor (#৮২)-এর কাছাকাছি।"},
  {id:"levee",word:"levee",pos:"noun",posBn:"বিশেষ্য",def:"stone embankment to prevent flooding",bn:"(বন্যা ঠেকানোর) বাঁধ",full:"A raised bank of earth or stone built along a river to stop it flooding the land.",ex:"Villagers worked through the night to strengthen the levee before the river rose.",exb:"নদীর পানি বাড়ার আগে বাঁধ মজবুত করতে গ্রামবাসী সারা রাত কাজ করলেন।",hook:"নদীর পাড়ের বেড়িবাঁধ = levee। ফরাসি lever = উঁচু করা (elevate একই মূল থেকে) → উঁচু করে তোলা মাটির পাড়।"},
  {id:"log",word:"log",pos:"noun",posBn:"বিশেষ্য",def:"record of a voyage or flight; record of day-to-day activities",bn:"দৈনিক বিবরণী, লগবই",full:"An official written record of a journey, or of daily events and activities.",ex:"The ship's captain wrote the storm into the log: wind speed, time and position.",exb:"জাহাজের ক্যাপ্টেন ঝড়ের কথা লগবইয়ে লিখলেন: বাতাসের গতি, সময় আর অবস্থান।",hook:"log মানে কাঠের গুঁড়িও। পুরনো নাবিকেরা দড়িতে বাঁধা কাঠের টুকরো পানিতে ফেলে জাহাজের গতি মাপত আর তা লিখে রাখত logbook-এ।"}
]);

VOCAB.addLesson({
  id: "b333-l", source: "barrons333", order: 17, group: "L",
  title: "L", titleBn: "L",
  words: ["laconic","lassitude","latent","laud","lethargic","levee","levity","log","loquacious","lucid","luminous"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    laconic: {def:"brief and to the point"},
    latent: {def:"potential but undeveloped; dormant; hidden"},
    laud: {def:"praise"},
    levity: {def:"lack of seriousness or steadiness; frivolity"},
    loquacious: {def:"talkative"},
    lucid: {def:"easily understood; clear; intelligible"},
    luminous: {def:"shining; issuing light"}
  },
  note: {
    title: "Two kinds of “light”: lev- and luc-/lum-",
    titleBn: "দুই রকম “light”: lev- আর luc-/lum-",
    intro: "English “light” has two meanings, and Latin has a root for each: levis, “not heavy”, and lux/lumen, “brightness”.",
    introBn: "ইংরেজি “light”-এর দুটি অর্থ, আর ল্যাটিনে প্রতিটির আলাদা মূল আছে: levis (ভারী নয়) আর lux/lumen (আলো)।",
    roots: [
      {parts:"levis",gloss:"light in weight",word:"levity",bn:"লঘুতা, গুরুত্বহীন ভাব"},
      {parts:"levare",gloss:"lift, raise",word:"levee",bn:"উঁচু করা পাড়, বাঁধ"},
      {parts:"lux / lucere",gloss:"light, shine",word:"lucid",bn:"আলোর মতো স্পষ্ট"},
      {parts:"lumen",gloss:"light",word:"luminous",bn:"আলো ছড়ায়"}
    ],
    points: [
      ["laconic (few words) is the opposite of loquacious (many words). Laconia, the land of ancient Sparta, was famous for very short replies.","laconic (অল্প কথা) আর loquacious (অনেক কথা) একে অপরের বিপরীত। প্রাচীন স্পার্টার অঞ্চল লাকোনিয়ার মানুষ খুব ছোট উত্তরের জন্য বিখ্যাত ছিল।"],
      ["lassitude (noun) and lethargic (adjective) both describe tired, low-energy states: “a feeling of lassitude”, “a lethargic student”.","lassitude (বিশেষ্য) আর lethargic (বিশেষণ) দুটোই ক্লান্ত, নিস্তেজ অবস্থা বোঝায়: “a feeling of lassitude”, “a lethargic student”।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["languor; weariness","অবসাদ"], b:["stone embankment to prevent flooding","বাঁধ"], c:["easily understood; clear; intelligible","প্রাঞ্জল"],
      d:["praise","প্রশংসা করা"], e:["record of a voyage or flight; record of day-to-day activities","লগবই"], f:["shining; issuing light","দীপ্তিমান"],
      g:["lack of seriousness or steadiness; frivolity","লঘুতা"], h:["brief and to the point","সংক্ষিপ্ত"], i:["talkative","বাচাল"],
      j:["potential but undeveloped; dormant; hidden","সুপ্ত"], k:["drowsy; dull","ঝিমুনিভরা"]
    },
    items: [
      {word:"laconic",answer:"h"},{word:"lassitude",answer:"a"},{word:"latent",answer:"j"},{word:"laud",answer:"d"},
      {word:"lethargic",answer:"k"},{word:"levee",answer:"b"},{word:"levity",answer:"g"},{word:"log",answer:"e"},
      {word:"loquacious",answer:"i"},{word:"lucid",answer:"c"},{word:"luminous",answer:"f"}
    ]
  },
  sentences: [
    {text:"The ___ farmer answered all our questions with a nod or a single word.",answer:"laconic",word:"laconic",bn:"স্বল্পভাষী কৃষক আমাদের সব প্রশ্নের উত্তর দিলেন মাথা নেড়ে বা একটি শব্দে।"},
    {text:"In the humid heat, a deep ___ settled over the market, and even the hawkers stopped calling out.",answer:"lassitude",word:"lassitude",bn:"ভ্যাপসা গরমে বাজারজুড়ে গভীর অবসাদ নেমে এল, ফেরিওয়ালারাও হাঁকডাক থামিয়ে দিল।"},
    {text:"Moving to a town with a big library awakened her ___ love of reading.",answer:"latent",word:"latent",bn:"বড় লাইব্রেরিওয়ালা শহরে আসার পর তার সুপ্ত পড়ার নেশা জেগে উঠল।"},
    {text:"Newspapers ___ the young engineer who built a cheap water filter for her village.",answer:"lauded",word:"laud",bn:"নিজের গ্রামের জন্য সস্তা পানির ফিল্টার বানানো তরুণ প্রকৌশলীর উচ্চ প্রশংসা করল পত্রিকাগুলো।"},
    {text:"The cold medicine made him ___ , so he slept through the afternoon.",answer:"lethargic",word:"lethargic",bn:"সর্দির ওষুধে সে ঝিমিয়ে পড়ল, তাই পুরো বিকেল ঘুমিয়ে কাটাল।"},
    {text:"When the river rose, the earthen ___ kept the village dry.",answer:"levee",word:"levee",bn:"নদীর পানি বাড়লে মাটির বাঁধটিই গ্রামকে শুকনো রাখল।"},
    {text:"His ___ during the serious meeting annoyed the headmaster.",answer:"levity",word:"levity",bn:"গুরুত্বপূর্ণ সভায় তার হালকা চপলতা প্রধান শিক্ষককে বিরক্ত করল।"},
    {text:"The pilot recorded the engine trouble in the flight ___ .",answer:"log",word:"log",bn:"পাইলট ইঞ্জিনের সমস্যার কথা ফ্লাইট লগে লিখে রাখলেন।"},
    {text:"The ___ rickshaw puller told us about his whole family during the short ride.",answer:"loquacious",word:"loquacious",bn:"বাচাল রিকশাচালক ছোট্ট যাত্রাপথেই আমাদের তাঁর পুরো পরিবারের গল্প শুনিয়ে দিলেন।"},
    {text:"Her ___ notes made a difficult chapter easy to understand.",answer:"lucid",word:"lucid",bn:"তার প্রাঞ্জল নোট একটা কঠিন অধ্যায়কে সহজবোধ্য করে দিল।"},
    {text:"The ___ stars on the ceiling of the child's room glowed after the lights went out.",answer:"luminous",word:"luminous",bn:"বাতি নেভার পর শিশুর ঘরের ছাদের দীপ্তিমান তারাগুলো জ্বলজ্বল করতে লাগল।"}
  ]
});
