/* Barron's 333 · M (magnanimity – mundane) */
VOCAB.addWords([
  {id:"magnanimity",word:"magnanimity",pos:"noun",posBn:"বিশেষ্য",def:"generosity",bn:"উদারতা, মহানুভবতা",full:"Generosity and kindness, especially toward a rival or someone who has wronged you.",ex:"In a show of magnanimity, the winning captain praised the losing team's courage.",exb:"মহানুভবতার পরিচয় দিয়ে বিজয়ী অধিনায়ক পরাজিত দলের সাহসের প্রশংসা করলেন।",hook:"magnanimous (#৫৬)-এর বিশেষ্য রূপ। magnus (বড়) + animus (মন) → বড় মন।"},
  {id:"malingerer",word:"malingerer",pos:"noun",posBn:"বিশেষ্য",def:"one who feigns illness to escape duty",bn:"কাজ এড়াতে অসুখের ভান করে যে",full:"Someone who pretends to be ill so as to avoid work or duty.",ex:"The coach suspected a malingerer when the same player got a “headache” before every fitness test.",exb:"প্রতিটি ফিটনেস টেস্টের আগে একই খেলোয়াড়ের “মাথাব্যথা” হওয়ায় কোচ সন্দেহ করলেন সে ভান করছে।",hook:"malinger (#৫৬) = অসুখের ভান করা; -er = যে করে। ছবি: পরীক্ষার দিন সকালে হঠাৎ ‘পেটব্যথা’!"},
  {id:"meticulous",word:"meticulous",pos:"adjective",posBn:"বিশেষণ",def:"excessively careful; painstaking; scrupulous",bn:"অতি যত্নশীল, খুঁতখুঁতে",full:"Very careful and precise, paying attention to every small detail.",ex:"Her meticulous notes had every date and formula neatly underlined.",exb:"তার অতি যত্নে লেখা নোটে প্রতিটি তারিখ আর সূত্র পরিপাটি করে দাগানো ছিল।",hook:"ল্যাটিন metus = ভয় → ভুল হওয়ার ভয়ে অতি সাবধান। scrupulous (#৭৬)-এর সমার্থক।"},
  {id:"misanthrope",word:"misanthrope",pos:"noun",posBn:"বিশেষ্য",def:"one who hates mankind",bn:"মানববিদ্বেষী",full:"A person who dislikes other people and avoids human company.",ex:"The old misanthrope lived alone and never opened his door to visitors.",exb:"বৃদ্ধ মানববিদ্বেষী লোকটি একা থাকতেন, অতিথিদের জন্য কখনো দরজা খুলতেন না।",hook:"গ্রিক misein (ঘৃণা করা) + anthropos (মানুষ) → মানুষকে ঘৃণা করে যে। misanthropic (#৫৮)-এর বিশেষ্য; উল্টো philanthropy (#৬৪) = মানবপ্রেম।"}
]);

VOCAB.addLesson({
  id: "b333-m", source: "barrons333", order: 18, group: "M",
  title: "M", titleBn: "M",
  words: ["magnanimity","malingerer","malleable","maverick","mendacious","metamorphosis","meticulous","misanthrope","mitigate","mollify","morose","mundane"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    malleable: {def:"capable of being shaped by pounding; impressionable"},
    maverick: {def:"rebel; nonconformist"},
    mendacious: {def:"lying; habitually dishonest"},
    metamorphosis: {def:"change of form"},
    mitigate: {def:"moderate"},
    mollify: {def:"soothe"},
    morose: {def:"ill-humored; sullen; melancholy"},
    mundane: {def:"worldly as opposed to spiritual; everyday",bn:"জাগতিক, দৈনন্দিন"}
  },
  note: {
    title: "Roots inside M words",
    titleBn: "M শব্দের ভেতরের মূল",
    intro: "Several M words are built from Greek or Latin pieces you can learn once and use again: great + mind, hate + human, change + form, hammer, soft.",
    introBn: "কয়েকটি M শব্দ গ্রিক বা ল্যাটিন টুকরো দিয়ে তৈরি, যা একবার শিখলে বারবার কাজে লাগে: বড় + মন, ঘৃণা + মানুষ, পরিবর্তন + রূপ, হাতুড়ি, নরম।",
    roots: [
      {parts:"magnus + animus",gloss:"great + mind",word:"magnanimity",bn:"বড় মন, উদারতা"},
      {parts:"misein + anthropos",gloss:"hate + human",word:"misanthrope",bn:"মানববিদ্বেষী"},
      {parts:"meta + morphe",gloss:"change + form",word:"metamorphosis",bn:"রূপান্তর"},
      {parts:"malleus",gloss:"hammer",word:"malleable",bn:"পিটিয়ে আকার দেওয়া যায়"},
      {parts:"mollis",gloss:"soft",word:"mollify",bn:"নরম করা, শান্ত করা"}
    ],
    points: [
      ["mitigate = make something bad less severe (mitigate damage). mollify = calm an angry person (mollify a customer).","mitigate = খারাপ কিছুর তীব্রতা কমানো (ক্ষতি কমানো)। mollify = রাগী মানুষকে শান্ত করা (খদ্দেরকে শান্ত করা)।"],
      ["misanthrope (hates people) is the opposite of philanthropist (loves people and gives to help them). Both use Greek anthropos, “human”.","misanthrope (মানুষকে ঘৃণা করে) আর philanthropist (মানুষকে ভালোবাসে, দান করে) বিপরীত। দুটোতেই গ্রিক anthropos (মানুষ)।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["capable of being shaped by pounding; impressionable","নমনীয়"], b:["one who hates mankind","মানববিদ্বেষী"], c:["lying; habitually dishonest","মিথ্যাবাদী"],
      d:["worldly as opposed to spiritual; everyday","জাগতিক, দৈনন্দিন"], e:["soothe","শান্ত করা"], f:["generosity","উদারতা"],
      g:["ill-humored; sullen; melancholy","গোমড়ামুখো"], h:["change of form","রূপান্তর"], i:["moderate","তীব্রতা কমানো"],
      j:["one who feigns illness to escape duty","অসুখের ভানকারী"], k:["excessively careful; painstaking; scrupulous","অতি যত্নশীল"], l:["rebel; nonconformist","প্রথাবিরোধী"]
    },
    items: [
      {word:"magnanimity",answer:"f"},{word:"malingerer",answer:"j"},{word:"malleable",answer:"a"},{word:"maverick",answer:"l"},
      {word:"mendacious",answer:"c"},{word:"metamorphosis",answer:"h"},{word:"meticulous",answer:"k"},{word:"misanthrope",answer:"b"},
      {word:"mitigate",answer:"i"},{word:"mollify",answer:"e"},{word:"morose",answer:"g"},{word:"mundane",answer:"d"}
    ]
  },
  sentences: [
    {text:"Showing great ___ , the shopkeeper forgave the boy who had stolen a mango and gave him two more.",answer:"magnanimity",word:"magnanimity",bn:"গভীর মহানুভবতা দেখিয়ে দোকানি আম চুরি করা ছেলেটিকে ক্ষমা করলেন আর তাকে আরও দুটো আম দিলেন।"},
    {text:"Everyone knew he was a ___ ; his “fever” always disappeared as soon as the exam was cancelled.",answer:"malingerer",word:"malingerer",bn:"সবাই জানত সে অসুখের ভান করে; পরীক্ষা বাতিল হলেই তার “জ্বর” উধাও হয়ে যেত।"},
    {text:"Young children's minds are ___ , so good teachers matter a great deal.",answer:"malleable",word:"malleable",bn:"শিশুদের মন নমনীয়, তাই ভালো শিক্ষকের গুরুত্ব অনেক।"},
    {text:"A ___ in the cricket world, she ignored the coaching manuals and invented her own bowling style.",answer:"maverick",word:"maverick",bn:"ক্রিকেট-জগতের এক প্রথাবিরোধী মানুষ তিনি; কোচিং বইয়ের তোয়াক্কা না করে নিজের বোলিং ধরন তৈরি করেছিলেন।"},
    {text:"The ___ seller swore the “pure honey” had no sugar, though it was mostly syrup.",answer:"mendacious",word:"mendacious",bn:"মিথ্যাবাদী বিক্রেতা কসম কেটে বলল “খাঁটি মধু”-তে কোনো চিনি নেই, অথচ সেটা ছিল প্রায় পুরোটাই সিরাপ।"},
    {text:"With new paint, plants and benches, the dusty schoolyard went through a complete ___ .",answer:"metamorphosis",word:"metamorphosis",bn:"নতুন রং, গাছপালা আর বেঞ্চে ধুলোমাখা স্কুলমাঠটির পুরো রূপান্তর ঘটল।"},
    {text:"The ___ tailor measured me five times before cutting the cloth.",answer:"meticulous",word:"meticulous",bn:"খুঁতখুঁতে দর্জি কাপড় কাটার আগে আমার মাপ পাঁচবার নিলেন।"},
    {text:"Only a ___ could hate the cheerful noise of children playing in the park.",answer:"misanthrope",word:"misanthrope",bn:"পার্কে খেলা শিশুদের আনন্দের কোলাহল কেবল একজন মানববিদ্বেষীই অপছন্দ করতে পারে।"},
    {text:"Planting mangrove forests along the coast can ___ the damage done by storm surges.",answer:"mitigate",word:"mitigate",bn:"উপকূলজুড়ে ম্যানগ্রোভ বন লাগালে জলোচ্ছ্বাসের ক্ষয়ক্ষতি কমানো যায়।"},
    {text:"The waiter brought a free dessert to ___ the customer, who was angry about the slow service.",answer:"mollify",word:"mollify",bn:"ধীর সেবায় রেগে যাওয়া খদ্দেরকে শান্ত করতে ওয়েটার বিনামূল্যে একটা মিষ্টান্ন নিয়ে এলেন।"},
    {text:"The ___ old man sighed at everything and never returned anyone's greeting.",answer:"morose",word:"morose",bn:"গোমড়ামুখো বুড়ো লোকটি সব কিছুতেই দীর্ঘশ্বাস ফেলতেন, কারও সালামের জবাবও দিতেন না।"},
    {text:"After the excitement of the holiday, she returned to the ___ routine of school, homework and chores.",answer:"mundane",word:"mundane",bn:"ছুটির উত্তেজনার পর সে ফিরে এল স্কুল, হোমওয়ার্ক আর ঘরের কাজের দৈনন্দিন রুটিনে।"}
  ]
});
