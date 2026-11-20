/* Barron's 333 · C · Part 1 (capricious – compliant) */
VOCAB.addWords([
  {id:"castigation",word:"castigation",pos:"noun",posBn:"বিশেষ্য",def:"punishment; severe criticism",bn:"কঠোর তিরস্কার, শাস্তি",full:"Severe criticism or punishment for doing something wrong.",ex:"After losing 5–0 at home, the team faced harsh castigation from fans and newspapers.",exb:"ঘরের মাঠে ৫–০ গোলে হারার পর দলটি সমর্থক আর পত্রিকার কঠোর সমালোচনার মুখে পড়ল।",hook:"castigate (#১৮) = কঠোর তিরস্কার করা; castigation = সেই তিরস্কার বা শাস্তি। ল্যাটিন castus (শুদ্ধ) → শুধরে দিতে শাসন।"},
  {id:"coagulate",word:"coagulate",pos:"verb",posBn:"ক্রিয়া",def:"thicken; congeal; clot",bn:"জমাট বাঁধা, ঘন হওয়া",full:"To change from a liquid into a thick, semi-solid mass.",ex:"Blood coagulates quickly to seal a small cut.",exb:"ছোট কাটা জায়গা বন্ধ করতে রক্ত দ্রুত জমাট বাঁধে।",hook:"দুধ কেটে ছানা হওয়া = coagulate! রক্ত জমাট বাঁধাকেও বলে blood coagulates। ল্যাটিন cogere (co + agere = একসাথে তাড়ানো) থেকে।"},
  {id:"coda",word:"coda",pos:"noun",posBn:"বিশেষ্য",def:"concluding section of a musical or literary composition",bn:"সমাপ্তি অংশ, উপসংহার",full:"The final part of a piece of music, a book or a speech, which rounds it off or sums it up.",ex:"The novel ends with a short coda set twenty years later.",exb:"উপন্যাসটি শেষ হয়েছে বিশ বছর পরের এক ছোট সমাপ্তি অংশ দিয়ে।",hook:"ইতালীয় coda = লেজ (ল্যাটিন cauda)। গান বা লেখার লেজ = শেষ অংশ।"},
  {id:"complaisant",word:"complaisant",pos:"adjective",posBn:"বিশেষণ",def:"trying to please; overly polite; obliging",bn:"অন্যকে খুশি রাখতে ব্যস্ত, অতিবিনয়ী",full:"Eager to please others and willing to go along with what they want, sometimes too much.",ex:"The complaisant shop assistant smiled and agreed with every complaint, even the unfair ones.",exb:"অতিবিনয়ী দোকান-সহকারী হাসিমুখে প্রতিটি অভিযোগে সায় দিলেন, এমনকি অন্যায্যগুলোতেও।",hook:"complaisant-এর ভেতরে plais = please (খুশি করা)। complacent (#২৩) = আত্মতুষ্ট, একেবারে আলাদা! complaisant মানুষ অন্যকে খুশি করে, complacent মানুষ নিজেকে নিয়ে খুশি।"},
  {id:"compliant",word:"compliant",pos:"adjective",posBn:"বিশেষণ",def:"yielding; conforming to requirements",bn:"বাধ্য, নিয়ম মেনে চলে এমন",full:"Willing to obey, or following the rules and requirements that apply.",ex:"All new buildings must be compliant with the earthquake safety code.",exb:"সব নতুন ভবনকে ভূমিকম্প-নিরাপত্তা বিধিমালা মেনে চলতে হবে।",hook:"comply (মেনে চলা) → compliant = মেনে চলে এমন। acquiesce (#২), docile (#৩৪)-এর কাছাকাছি।"}
]);

VOCAB.addLesson({
  id: "b333-c-1", source: "barrons333", order: 5, group: "C",
  title: "C · Part 1", titleBn: "C · পর্ব ১",
  words: ["capricious","castigation","catalyst","caustic","chicanery","coagulate","coda","cogent","commensurate","compendium","complaisant","compliant"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    capricious: {def:"unpredictable; fickle"},
    catalyst: {def:"agent that increases the pace of a chemical action"},
    caustic: {def:"burning; sarcastically biting"},
    chicanery: {def:"trickery; deception"},
    cogent: {def:"convincing"},
    commensurate: {def:"corresponding in extent, degree, etc.; proportionate"},
    compendium: {def:"brief, comprehensive summary"}
  },
  note: {
    title: "com-/co- (together, with)",
    titleBn: "com-/co- (একসাথে, সঙ্গে)",
    intro: "Many C words begin with Latin com-/co-, “together, with”. Two even share one root: cogere, “drive together”, gives both coagulate and cogent.",
    introBn: "অনেক C শব্দ ল্যাটিন com-/co- (একসাথে, সঙ্গে) দিয়ে শুরু। দুটি শব্দের মূল এমনকি একই: cogere (একসাথে তাড়ানো) থেকে এসেছে coagulate আর cogent দুটোই।",
    roots: [
      {parts:"co + agere",gloss:"together + drive",word:"coagulate",bn:"এক জায়গায় জমাট"},
      {parts:"cogere",gloss:"drive together, compel",word:"cogent",bn:"মানতে বাধ্য করে এমন যুক্তি"},
      {parts:"com + mensura",gloss:"together + measure",word:"commensurate",bn:"মাপে সমান"},
      {parts:"com + pendere",gloss:"together + weigh",word:"compendium",bn:"সব এক জায়গায় সংক্ষেপে"},
      {parts:"com + placere",gloss:"with + please",word:"complaisant",bn:"খুশি করতে ব্যস্ত"}
    ],
    points: [
      ["complaisant = eager to please. compliant = willing to obey. complacent (#23) = pleased with yourself. Three look-alikes, three meanings.","complaisant = খুশি করতে ব্যস্ত। compliant = মেনে চলতে রাজি। complacent (#২৩) = আত্মতুষ্ট। দেখতে একই রকম, অর্থ তিন রকম।"],
      ["castigation is the noun of castigate (#18): to criticise or punish severely.","castigation হলো castigate (#১৮)-এর বিশেষ্য রূপ: কঠোরভাবে তিরস্কার বা শাস্তি দেওয়া।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["agent that increases the pace of a chemical action","অনুঘটক"], b:["concluding section of a musical or literary composition","সমাপ্তি অংশ"], c:["trying to please; overly polite; obliging","অতিবিনয়ী"],
      d:["trickery; deception","ছলচাতুরী"], e:["corresponding in extent, degree, etc.; proportionate","সমানুপাতিক"], f:["yielding; conforming to requirements","নিয়ম মেনে চলা"],
      g:["unpredictable; fickle","খামখেয়ালি"], h:["convincing","বিশ্বাসযোগ্য"], i:["brief, comprehensive summary","সারসংকলন"],
      j:["punishment; severe criticism","কঠোর তিরস্কার"], k:["burning; sarcastically biting","ঝাঁঝালো, ক্ষয়কারী"], l:["thicken; congeal; clot","জমাট বাঁধা"]
    },
    items: [
      {word:"capricious",answer:"g"},{word:"castigation",answer:"j"},{word:"catalyst",answer:"a"},{word:"caustic",answer:"k"},
      {word:"chicanery",answer:"d"},{word:"coagulate",answer:"l"},{word:"coda",answer:"b"},{word:"cogent",answer:"h"},
      {word:"commensurate",answer:"e"},{word:"compendium",answer:"i"},{word:"complaisant",answer:"c"},{word:"compliant",answer:"f"}
    ]
  },
  sentences: [
    {text:"The ___ boss changed the office rules every week, so no one knew what to expect.",answer:"capricious",word:"capricious",bn:"খামখেয়ালি বস প্রতি সপ্তাহে অফিসের নিয়ম বদলাতেন, তাই কেউ জানত না কী হবে।"},
    {text:"After the team's poor display, the coach's public ___ of the players shocked the fans.",answer:"castigation",word:"castigation",bn:"দলের বাজে খেলার পর কোচের প্রকাশ্যে খেলোয়াড়দের কঠোর তিরস্কার সমর্থকদের চমকে দিল।"},
    {text:"In the experiment, a tiny amount of a ___ made the reaction finish in seconds.",answer:"catalyst",word:"catalyst",bn:"পরীক্ষায় সামান্য একটু অনুঘটক বিক্রিয়াটিকে কয়েক সেকেন্ডে শেষ করে দিল।"},
    {text:"Her ___ remark, “How kind of you to finally show up,” made the latecomer blush.",answer:"caustic",word:"caustic",bn:"তার ঝাঁঝালো মন্তব্য, “অবশেষে আসার জন্য কী দয়া তোমার,” শুনে দেরিতে আসা লোকটি লজ্জায় লাল হলো।"},
    {text:"The company used legal ___ to avoid paying its workers.",answer:"chicanery",word:"chicanery",bn:"শ্রমিকদের পাওনা না দিতে কোম্পানিটি আইনি ছলচাতুরীর আশ্রয় নিল।"},
    {text:"Add a little lemon juice and the hot milk will ___ into soft chhana.",answer:"coagulate",word:"coagulate",bn:"একটু লেবুর রস দিলেই গরম দুধ জমাট বেঁধে নরম ছানা হয়ে যাবে।"},
    {text:"The film ends with a brief ___ that shows the hero as an old man.",answer:"coda",word:"coda",bn:"ছবিটি শেষ হয় একটি সংক্ষিপ্ত সমাপ্তি অংশ দিয়ে, যেখানে নায়ককে বৃদ্ধ বয়সে দেখানো হয়।"},
    {text:"Rina's ___ argument, backed by clear facts, won over the whole debate panel.",answer:"cogent",word:"cogent",bn:"স্পষ্ট তথ্যে ভরা রিনার জোরালো যুক্তি পুরো বিতর্ক-প্যানেলকে রাজি করিয়ে ফেলল।"},
    {text:"A punishment should be ___ with the offence; a small mistake deserves a small penalty.",answer:"commensurate",word:"commensurate",bn:"শাস্তি হওয়া উচিত অপরাধের সমানুপাতিক; ছোট ভুলের জন্য ছোট শাস্তি।"},
    {text:"This slim book is a ___ of all the grammar rules you need for the admission test.",answer:"compendium",word:"compendium",bn:"এই পাতলা বইটি ভর্তি পরীক্ষার জন্য দরকারি সব ব্যাকরণ-নিয়মের এক সারসংকলন।"},
    {text:"Eager to keep every guest happy, the ___ host laughed even at jokes he did not find funny.",answer:"complaisant",word:"complaisant",bn:"প্রত্যেক অতিথিকে খুশি রাখতে ব্যস্ত অতিবিনয়ী গৃহকর্তা এমন কৌতুকেও হাসলেন, যা তাঁর কাছে মজার লাগেনি।"},
    {text:"The factory added fire exits to make the building ___ with the new safety law.",answer:"compliant",word:"compliant",bn:"ভবনটিকে নতুন নিরাপত্তা আইনের উপযোগী করতে কারখানাটি অগ্নি-নির্গমন পথ যোগ করল।"}
  ]
});
