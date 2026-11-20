/* Barron's 333 · T (tacit – truculence) */
VOCAB.addWords([
  {id:"tortuous",word:"tortuous",pos:"adjective",posBn:"বিশেষণ",def:"winding; full of curves",bn:"আঁকাবাঁকা, প্যাঁচানো",full:"Full of twists and turns; also, too long and complicated.",ex:"The tortuous road to Bandarban climbs through dozens of hairpin bends.",exb:"বান্দরবানের আঁকাবাঁকা পথ অসংখ্য হেয়ারপিন বাঁক পেরিয়ে ওপরে ওঠে।",hook:"ল্যাটিন torquere = মোচড়ানো → মোচড়ানো পথ। সাবধান: torturous = যন্ত্রণাদায়ক; tortuous = আঁকাবাঁকা।"},
  {id:"tractable",word:"tractable",pos:"adjective",posBn:"বিশেষণ",def:"docile; easily managed",bn:"বাধ্য, সহজে বশ মানে এমন",full:"Easy to control, manage or deal with.",ex:"The young elephant was tractable and learned commands quickly.",exb:"বাচ্চা হাতিটি বাধ্য ছিল, দ্রুত নির্দেশ শিখে নিল।",hook:"ল্যাটিন tractare = সামলানো (tractor = যা টেনে নেয়)। docile (#৩৪)-এর সমার্থক; উল্টো intractable (#৫২)।"},
  {id:"transgression",word:"transgression",pos:"noun",posBn:"বিশেষ্য",def:"violation of a law; sin",bn:"সীমালঙ্ঘন, অপরাধ",full:"An act that breaks a law, rule or moral principle.",ex:"The referee punished every transgression of the rules, however small.",exb:"রেফারি নিয়মের প্রতিটি লঙ্ঘনের শাস্তি দিলেন, তা যত ছোটই হোক।",hook:"transgress (#৮২)-এর বিশেষ্য রূপ। trans (পেরিয়ে) + gradi (হাঁটা) → সীমা পেরিয়ে যাওয়া।"},
  {id:"truculence",word:"truculence",pos:"noun",posBn:"বিশেষ্য",def:"aggressiveness; ferocity",bn:"যুদ্ধংদেহী ভাব, হিংস্রতা",full:"An eager readiness to argue or fight; aggressive, defiant behaviour.",ex:"The player's truculence toward the umpire earned him a fine.",exb:"আম্পায়ারের প্রতি খেলোয়াড়ের যুদ্ধংদেহী আচরণের জন্য তাকে জরিমানা করা হলো।",hook:"ল্যাটিন trux = হিংস্র। belligerent (#১৫)-এর কাছাকাছি।"}
]);

VOCAB.addLesson({
  id: "b333-t", source: "barrons333", order: 27, group: "T",
  title: "T", titleBn: "T",
  words: ["tacit","tangential","tenuous","tirade","torpor","tortuous","tractable","transgression","truculence"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    tacit: {def:"understood; not put into words"},
    tangential: {def:"peripheral; only slightly connected; digressing"},
    tenuous: {def:"thin; rare; slim"},
    tirade: {def:"extended scolding; denunciation; harangue"},
    torpor: {def:"lethargy; sluggishness; dormancy"}
  },
  note: {
    title: "Latin verbs you can act out",
    titleBn: "অভিনয় করে দেখানো যায় এমন ল্যাটিন ক্রিয়া",
    intro: "Most T words here hide a simple Latin action: being silent, touching, twisting, dragging, stepping across. Act out the verb and the word's meaning follows.",
    introBn: "এখানে বেশিরভাগ T শব্দে লুকিয়ে আছে একটি সহজ ল্যাটিন কাজ: চুপ থাকা, ছোঁয়া, মোচড়ানো, টেনে নেওয়া, সীমা পেরোনো। কাজটা অভিনয় করে দেখো, অর্থ মনে থাকবে।",
    roots: [
      {parts:"tacere",gloss:"be silent",word:"tacit",bn:"না বলেও বোঝানো"},
      {parts:"tangere",gloss:"touch",word:"tangential",bn:"শুধু ছুঁয়ে যায়"},
      {parts:"torquere",gloss:"twist",word:"tortuous",bn:"মোচড়ানো, আঁকাবাঁকা"},
      {parts:"tractare",gloss:"handle, drag",word:"tractable",bn:"সহজে সামলানো যায়"},
      {parts:"trans + gradi",gloss:"across + step",word:"transgression",bn:"সীমা পেরোনো"}
    ],
    points: [
      ["tortuous = winding (a tortuous road). torturous = painful, like torture. One letter makes the difference.","tortuous = আঁকাবাঁকা (আঁকাবাঁকা পথ)। torturous = যন্ত্রণাদায়ক। একটা অক্ষরেই পার্থক্য।"],
      ["tractable (easy to manage) is the opposite of intractable (#52). tacit (unspoken) shares its root with taciturn (#81).","tractable (সহজে বশ মানে)-এর উল্টো intractable (#৫২)। tacit (অব্যক্ত) আর taciturn (#৮১)-এর মূল একই।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["thin; rare; slim","ক্ষীণ"], b:["docile; easily managed","বাধ্য"], c:["lethargy; sluggishness; dormancy","জড়তা"],
      d:["aggressiveness; ferocity","যুদ্ধংদেহী ভাব"], e:["understood; not put into words","অব্যক্ত"], f:["violation of a law; sin","সীমালঙ্ঘন"],
      g:["extended scolding; denunciation; harangue","তীব্র ভর্ৎসনা"], h:["peripheral; only slightly connected; digressing","অবান্তর"], i:["winding; full of curves","আঁকাবাঁকা"]
    },
    items: [
      {word:"tacit",answer:"e"},{word:"tangential",answer:"h"},{word:"tenuous",answer:"a"},{word:"tirade",answer:"g"},{word:"torpor",answer:"c"},
      {word:"tortuous",answer:"i"},{word:"tractable",answer:"b"},{word:"transgression",answer:"f"},{word:"truculence",answer:"d"}
    ]
  },
  sentences: [
    {text:"By saying nothing when we asked to leave early, the teacher gave her ___ permission.",answer:"tacit",word:"tacit",bn:"আগে চলে যেতে চাইলে কিছু না বলে শিক্ষিকা আমাদের নীরব সম্মতি দিলেন।"},
    {text:"Stick to the question; your point about cricket is only ___ to the topic of the essay.",answer:"tangential",word:"tangential",bn:"প্রশ্নের মধ্যে থাকো; ক্রিকেট নিয়ে তোমার কথাটা রচনার বিষয়ের সাথে সামান্যই সম্পর্কিত।"},
    {text:"Her hold on the slippery branch was ___ , and she called for help.",answer:"tenuous",word:"tenuous",bn:"পিচ্ছিল ডালে তার হাতের মুঠো ছিল ক্ষীণ, তাই সে সাহায্যের জন্য ডাকল।"},
    {text:"Instead of a calm talk, Abba gave me a ten-minute ___ about the phone bill.",answer:"tirade",word:"tirade",bn:"শান্তভাবে কথা না বলে আব্বা ফোনের বিল নিয়ে আমাকে দশ মিনিট ধরে কড়া ভর্ৎসনা করলেন।"},
    {text:"Some snakes fall into a winter ___ and barely move until the weather warms up.",answer:"torpor",word:"torpor",bn:"কিছু সাপ শীতকালে জড়তায় চলে যায়, আবহাওয়া গরম না হওয়া পর্যন্ত প্রায় নড়েই না।"},
    {text:"The ___ mountain road made half the passengers feel sick.",answer:"tortuous",word:"tortuous",bn:"আঁকাবাঁকা পাহাড়ি পথে অর্ধেক যাত্রীর বমি বমি লাগছিল।"},
    {text:"Unlike his stubborn brother, the younger boy was ___ and did whatever the teacher asked.",answer:"tractable",word:"tractable",bn:"একগুঁয়ে বড় ভাইয়ের মতো নয়, ছোট ছেলেটি বাধ্য ছিল, শিক্ষক যা বলতেন তাই করত।"},
    {text:"In the school's view, copying homework was a serious ___ .",answer:"transgression",word:"transgression",bn:"স্কুলের দৃষ্টিতে হোমওয়ার্ক নকল করা ছিল গুরুতর নিয়মভঙ্গ।"},
    {text:"The bully's ___ frightened the younger students, who began to avoid the playground.",answer:"truculence",word:"truculence",bn:"দাপুটে ছেলেটির যুদ্ধংদেহী আচরণে ছোট শিক্ষার্থীরা ভয় পেয়ে খেলার মাঠ এড়িয়ে চলতে লাগল।"}
  ]
});
