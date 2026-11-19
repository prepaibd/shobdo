/* Word Smart · Quick Quiz #35 */
VOCAB.addWords([
  {id:"dormant",word:"dormant",pos:"adjective",posBn:"বিশেষণ",def:"inactive",bn:"সুপ্ত, নিষ্ক্রিয়",full:"Temporarily inactive or asleep, but able to become active again.",ex:"The volcano has been dormant for two hundred years.",exb:"আগ্নেয়গিরিটি দুইশ বছর ধরে সুপ্ত।",hook:"ফরাসি dormir = ঘুমানো (dormitory = ছাত্রাবাসের শয়নকক্ষ) → ঘুমিয়ে আছে।"},
  {id:"dubiety",word:"dubiety",pos:"noun",posBn:"বিশেষ্য",def:"uncertainty",bn:"সন্দেহ, অনিশ্চয়তা",full:"A feeling of doubt or uncertainty.",ex:"There is some dubiety about whether the bridge will open on time.",exb:"সেতুটি সময়মতো খুলবে কি না, তা নিয়ে কিছুটা সন্দেহ আছে।",hook:"dubious (সন্দেহজনক) → dubiety = সন্দেহ। মূল ল্যাটিন dubius = দুই দিকে দোলা।"},
  {id:"duplicity",word:"duplicity",pos:"noun",posBn:"বিশেষ্য",def:"double-dealing",bn:"দ্বিচারিতা, প্রতারণা",full:"Deceitful behaviour; saying one thing and doing another.",ex:"The minister's duplicity was exposed when his secret deals were revealed.",exb:"গোপন চুক্তিগুলো ফাঁস হলে মন্ত্রীর দ্বিচারিতা প্রকাশ পেল।",hook:"duplicate (দুই কপি) → duplicity = দুই মুখ। মুখে এক, মনে আরেক।"}
]);

VOCAB.addLesson({
  id: "ws-q35", source: "wordsmart", order: 35,
  title: "Quick Quiz #35", titleBn: "কুইক কুইজ #৩৫",
  words: ["dormant","dubiety","duplicity"],
  note: {
    title: "Three short words, three hidden roots",
    titleBn: "তিনটি ছোট শব্দ, তিনটি লুকানো মূল",
    intro: "Each word hides an everyday English word: dormitory, dubious, duplicate.",
    introBn: "প্রতিটি শব্দে লুকিয়ে আছে একটি পরিচিত শব্দ: dormitory, dubious, duplicate।",
    roots: [
      {parts:"dormire",gloss:"sleep",word:"dormant",bn:"ঘুমিয়ে থাকা = সুপ্ত"},
      {parts:"dubius",gloss:"wavering",word:"dubiety",bn:"দোদুল্যমান = সন্দেহ"},
      {parts:"duplex",gloss:"double",word:"duplicity",bn:"দ্বিগুণ = দুই মুখো"}
    ],
    points: [
      ["dormant is used for volcanoes, seeds, talent and feelings that are “sleeping”.","dormant ব্যবহৃত হয় আগ্নেয়গিরি, বীজ, প্রতিভা বা অনুভূতির ক্ষেত্রে, যা “ঘুমিয়ে” আছে।"],
      ["duplicity ≈ chicanery (#20) and guile (#45): all are about deceiving people.","duplicity, chicanery (#২০) আর guile (#৪৫) সবই প্রতারণা বোঝায়।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: { a:["uncertainty","অনিশ্চয়তা"], b:["double-dealing","দ্বিচারিতা"], c:["inactive","নিষ্ক্রিয়"] },
    items: [ {word:"dormant",answer:"c"},{word:"dubiety",answer:"a"},{word:"duplicity",answer:"b"} ]
  },
  sentences: [
    {text:"The seeds lay ___ in the dry soil until the first rain.",answer:"dormant",word:"dormant",bn:"প্রথম বৃষ্টি না আসা পর্যন্ত বীজগুলো শুকনো মাটিতে সুপ্ত হয়ে ছিল।"},
    {text:"The coach's silence left the players in ___ about who would captain the team.",answer:"dubiety",word:"dubiety",bn:"কোচ চুপ থাকায় দলের অধিনায়ক কে হবেন, তা নিয়ে খেলোয়াড়েরা অনিশ্চয়তায় রইল।"},
    {text:"She was hurt by her friend's ___ : sweet to her face, cruel behind her back.",answer:"duplicity",word:"duplicity",bn:"বান্ধবীর দ্বিচারিতায় সে কষ্ট পেল: সামনে মিষ্টি, পেছনে নিষ্ঠুর।"}
  ]
});
