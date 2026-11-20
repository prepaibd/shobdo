/* Barron's 333 · Q–R · Part 1 (qualified – refute) */
VOCAB.addWords([
  {id:"qualified",word:"qualified",pos:"adjective",posBn:"বিশেষণ",def:"limited; restricted",bn:"শর্তসাপেক্ষ, সীমিত",full:"Limited or restricted in some way; not complete (qualified praise, qualified support).",ex:"The plan won only qualified approval: the board liked it but asked for many changes.",exb:"পরিকল্পনাটি পেল কেবল শর্তসাপেক্ষ অনুমোদন: পর্ষদ পছন্দ করলেও অনেক পরিবর্তন চাইল।",hook:"সাবধান! এখানে qualified মানে ‘যোগ্য’ নয়, ‘সীমিত’। qualify (#৭০) = শর্ত জুড়ে সীমিত করা → qualified praise = শর্তযুক্ত প্রশংসা।"},
  {id:"quibble",word:"quibble",pos:"noun",posBn:"বিশেষ্য",def:"minor objection or complaint",bn:"তুচ্ছ আপত্তি, খুঁতধরা",full:"A small, unimportant objection or complaint.",ex:"Apart from one quibble about the font size, the teacher loved my poster.",exb:"অক্ষরের মাপ নিয়ে একটা তুচ্ছ আপত্তি ছাড়া আমার পোস্টার শিক্ষকের খুব পছন্দ হলো।",hook:"ছবি: পুরো খাবারটা মজার, তবু ‘লবণ একটু কম’ বলে খুঁত ধরা = quibble।"},
  {id:"quiescent",word:"quiescent",pos:"adjective",posBn:"বিশেষণ",def:"at rest; dormant; temporarily inactive",bn:"নিষ্ক্রিয়, সাময়িকভাবে থেমে থাকা",full:"Quiet and inactive, especially for a time.",ex:"The volcano has been quiescent for centuries, but scientists still watch it closely.",exb:"আগ্নেয়গিরিটি শতাব্দীর পর শতাব্দী নিষ্ক্রিয়, তবু বিজ্ঞানীরা একে কড়া নজরে রাখেন।",hook:"ল্যাটিন quies = বিশ্রাম (quiet একই মূল থেকে)। dormant (#৩৫), latent (#৫৪)-এর কাছাকাছি।"},
  {id:"rarefied",word:"rarefied",pos:"adjective",posBn:"বিশেষণ",def:"made less dense (of a gas)",bn:"হালকা, কম ঘন (বাতাস)",full:"Of air or gas, thinner and less dense than normal, as on high mountains; also, very refined or exclusive.",ex:"Climbers near the top of Everest breathe rarefied air that holds far less oxygen.",exb:"এভারেস্টের চূড়ার কাছে আরোহীরা এমন হালকা বাতাসে শ্বাস নেন, যাতে অক্সিজেন অনেক কম।",hook:"rare = বিরল → বাতাসের কণা ‘বিরল’ হয়ে গেছে = rarefied। রূপক অর্থে rarefied circles = গুটিকয় অভিজাত মহল।"},
  {id:"recluse",word:"recluse",pos:"noun",posBn:"বিশেষ্য",def:"hermit; loner",bn:"নির্জনবাসী, একাকী মানুষ",full:"A person who lives alone and avoids other people.",ex:"The famous painter became a recluse in his old age, living alone in a hill cottage.",exb:"বিখ্যাত চিত্রশিল্পী বৃদ্ধ বয়সে নির্জনবাসী হয়ে পাহাড়ি এক কুটিরে একা থাকতেন।",hook:"reclusive (#৭১)-এর বিশেষ্য রূপ। নিজেকে দরজা বন্ধ করে আড়ালে রাখে যে। misanthrope মানুষকে ঘৃণা করে; recluse শুধু একা থাকতে চায়।"},
  {id:"refractory",word:"refractory",pos:"adjective",posBn:"বিশেষণ",def:"unmanageable",bn:"অবাধ্য, বশ মানে না এমন",full:"Stubborn and hard to manage or control.",ex:"The refractory bull broke through the fence twice in one day.",exb:"অবাধ্য ষাঁড়টা এক দিনেই দুবার বেড়া ভেঙে বেরিয়ে গেল।",hook:"ল্যাটিন refringere = ভেঙে ফেলা (fracture একই মূল) → নিয়ম ভেঙে চলে। recalcitrant (#৭১)-এর সমার্থক।"}
]);

VOCAB.addLesson({
  id: "b333-qr-1", source: "barrons333", order: 23, group: "Q–R",
  title: "Q–R · Part 1", titleBn: "Q–R · পর্ব ১",
  words: ["qualified","quibble","quiescent","rarefied","recalcitrant","recant","recluse","recondite","refractory","refute"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    recalcitrant: {def:"determined to resist authority"},
    recant: {def:"retract a previous statement"},
    recondite: {def:"abstruse; profound; secret"},
    refute: {def:"disprove"}
  },
  note: {
    title: "re- (back, against)",
    titleBn: "re- (পেছনে, বিরুদ্ধে)",
    intro: "Five R words here begin with Latin re-, “back” or “against”. Each root is a vivid action: kicking back, singing back, shutting away, breaking, beating back.",
    introBn: "এখানে পাঁচটি R শব্দ ল্যাটিন re- (পেছনে, বিরুদ্ধে) দিয়ে শুরু। প্রতিটি মূলই জীবন্ত এক কাজ: পেছনে লাথি, কথা ফিরিয়ে নেওয়া, দরজা বন্ধ করে থাকা, ভেঙে ফেলা, পাল্টা আঘাত।",
    roots: [
      {parts:"re + calx",gloss:"back + heel (kick back)",word:"recalcitrant",bn:"পেছনের পায়ে লাথি, অবাধ্য"},
      {parts:"re + cantare",gloss:"back + sing",word:"recant",bn:"কথা ফিরিয়ে নেওয়া"},
      {parts:"re + claudere",gloss:"away + shut",word:"recluse",bn:"নিজেকে আড়াল করা"},
      {parts:"re + frangere",gloss:"back + break",word:"refractory",bn:"নিয়ম ভাঙে, অবাধ্য"},
      {parts:"re + futare",gloss:"back + beat",word:"refute",bn:"যুক্তি দিয়ে পাল্টা আঘাত"}
    ],
    points: [
      ["recalcitrant and refractory both mean stubborn and hard to control. recalcitrant pictures a mule kicking back with its heels.","recalcitrant আর refractory দুটোরই মানে একগুঁয়ে, বশ মানে না। recalcitrant-এর ছবি: খচ্চর পেছনের পা দিয়ে লাথি ছুড়ছে।"],
      ["qualified here means “limited”, not “having the right skills”: qualified praise = praise with reservations.","এখানে qualified মানে ‘যোগ্য’ নয়, ‘সীমিত’: qualified praise = শর্তযুক্ত, আংশিক প্রশংসা।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    /* recalcitrant and refractory are near-synonyms in Barron's; each option uses a different clause of its own meaning */
    options: {
      a:["at rest; dormant; temporarily inactive","নিষ্ক্রিয়"], b:["retract a previous statement","বক্তব্য প্রত্যাহার"], c:["abstruse; profound; secret","দুর্বোধ্য"],
      d:["limited; restricted","সীমিত"], e:["disprove","খণ্ডন করা"], f:["determined to resist authority","কর্তৃপক্ষ মানে না"],
      g:["unmanageable","বশ মানে না"], h:["minor objection or complaint","তুচ্ছ আপত্তি"], i:["hermit; loner","নির্জনবাসী"],
      j:["made less dense (of a gas)","হালকা (বাতাস)"]
    },
    items: [
      {word:"qualified",answer:"d"},{word:"quibble",answer:"h"},{word:"quiescent",answer:"a"},{word:"rarefied",answer:"j"},{word:"recalcitrant",answer:"f"},
      {word:"recant",answer:"b"},{word:"recluse",answer:"i"},{word:"recondite",answer:"c"},{word:"refractory",answer:"g"},{word:"refute",answer:"e"}
    ]
  },
  /* refractory is left out: it and recalcitrant can fill the same blanks */
  sentences: [
    {text:"The critic gave the film only ___ praise, liking the songs but not the story.",answer:"qualified",word:"qualified",bn:"সমালোচক ছবিটির কেবল শর্তসাপেক্ষ প্রশংসা করলেন: গান ভালো লাগলেও গল্প নয়।"},
    {text:"My only ___ with the hotel was the slow lift; everything else was perfect.",answer:"quibble",word:"quibble",bn:"হোটেলটি নিয়ে আমার একমাত্র তুচ্ছ আপত্তি ছিল ধীরগতির লিফট; বাকি সব নিখুঁত।"},
    {text:"In the dry season the waterfall is ___ , but in the monsoon it roars.",answer:"quiescent",word:"quiescent",bn:"শুকনো মৌসুমে ঝরনাটি নিস্তব্ধ থাকে, কিন্তু বর্ষায় গর্জে ওঠে।"},
    {text:"At the top of the high mountain pass, the ___ air left us breathless after a few steps.",answer:"rarefied",word:"rarefied",bn:"উঁচু গিরিপথের চূড়ায় হালকা বাতাসে কয়েক পা হাঁটতেই আমরা হাঁপিয়ে উঠলাম।"},
    {text:"The ___ student refused to follow any school rule, no matter who asked.",answer:"recalcitrant",word:"recalcitrant",bn:"অবাধ্য ছাত্রটি কে বলল তার তোয়াক্কা না করে স্কুলের কোনো নিয়মই মানত না।"},
    {text:"After seeing the new evidence, the scientist publicly ___ her earlier theory.",answer:"recanted",word:"recant",bn:"নতুন প্রমাণ দেখার পর বিজ্ঞানী প্রকাশ্যে তাঁর আগের তত্ত্ব প্রত্যাহার করলেন।"},
    {text:"After retiring, the writer became a ___ and rarely left his village home.",answer:"recluse",word:"recluse",bn:"অবসরের পর লেখক নির্জনবাসী হয়ে গেলেন, গ্রামের বাড়ি থেকে খুব কমই বের হতেন।"},
    {text:"The talk on ancient Sanskrit metre was too ___ for most of the audience.",answer:"recondite",word:"recondite",bn:"প্রাচীন সংস্কৃত ছন্দ নিয়ে আলোচনাটি বেশিরভাগ শ্রোতার কাছে বড় দুর্বোধ্য ছিল।"},
    {text:"Rina ___ her brother's claim by showing the receipt with the real price.",answer:"refuted",word:"refute",bn:"আসল দাম লেখা রসিদ দেখিয়ে রিনা তার ভাইয়ের দাবি খণ্ডন করল।"}
  ]
});
