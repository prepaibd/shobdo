/* Barron's 333 · G–H (gainsay – hyperbole) */
VOCAB.addWords([
  {id:"gainsay",word:"gainsay",pos:"verb",posBn:"ক্রিয়া",def:"deny",bn:"অস্বীকার করা, খণ্ডন করা",full:"To deny or contradict something; often used with “no one can”.",ex:"No one can gainsay her skill; she has won the national chess title three times.",exb:"তার দক্ষতা কেউ অস্বীকার করতে পারবে না; সে তিনবার জাতীয় দাবা চ্যাম্পিয়ন হয়েছে।",hook:"gain-এর পুরনো অর্থ ‘বিরুদ্ধে’ (against) + say → বিরুদ্ধে বলা। refute (#৭২), rebut (#৭১)-এর কাছাকাছি।"},
  {id:"goad",word:"goad",pos:"verb",posBn:"ক্রিয়া",def:"urge on",bn:"খোঁচানো, উসকে দেওয়া",full:"To push or provoke someone into doing something, often by annoying them.",ex:"His friends goaded him into jumping into the cold river.",exb:"বন্ধুরা খোঁচাতে খোঁচাতে তাকে ঠান্ডা নদীতে লাফ দেওয়াল।",hook:"goad = গরু তাড়ানোর চোখা লাঠি → খোঁচা দিয়ে এগিয়ে নেওয়া। গাড়োয়ান যেমন লাঠির খোঁচায় গরু চালান।"},
  {id:"gouge",word:"gouge",pos:"verb",posBn:"ক্রিয়া",def:"overcharge",bn:"গলাকাটা দাম নেওয়া",full:"(informal) To charge someone far too much money; literally, to dig out with a sharp tool.",ex:"Some shops gouge customers by doubling the price of umbrellas when it rains.",exb:"বৃষ্টি নামলেই কিছু দোকান ছাতার দাম দ্বিগুণ করে গলাকাটা দাম নেয়।",hook:"gouge আসলে বাটালি দিয়ে খুঁড়ে তোলা। ক্রেতার পকেট খুঁড়ে টাকা বের করা = gouge! বাংলায় যেমন বলি ‘গলা কাটা’।"},
  {id:"guileless",word:"guileless",pos:"adjective",posBn:"বিশেষণ",def:"without deceit",bn:"সরল, ছলনাহীন",full:"Honest and sincere, with no wish to trick anyone.",ex:"The child's guileless face made it hard to believe she had hidden the sweets.",exb:"শিশুটির সরল মুখ দেখে বিশ্বাস করা কঠিন যে সে মিষ্টিগুলো লুকিয়েছে।",hook:"guile (#৪৫) = ছলনা; guile + less = ছলনাহীন। artless আর ingenuous (#৫১)-এর সমার্থক।"},
  {id:"gullible",word:"gullible",pos:"adjective",posBn:"বিশেষণ",def:"easily deceived",bn:"সহজে ঠকে যায় এমন, সরলবিশ্বাসী",full:"Easily tricked because you believe whatever you are told.",ex:"Only a gullible person would believe a message saying he has won a lottery he never entered.",exb:"যে লটারিতে অংশই নেয়নি, তাতে জিতেছে বলে বার্তা বিশ্বাস করবে কেবল সহজে ঠকে যাওয়া মানুষই।",hook:"ছবি: সিগাল (gull) পাখি, যা ছুড়ে দাও তাতেই ঝাঁপিয়ে পড়ে। credulous (#২৮)-এর সমার্থক; gullible মানুষ সহজেই dupe হয়।"},
  {id:"harangue",word:"harangue",pos:"noun",posBn:"বিশেষ্য",def:"long, passionate, and vehement speech",bn:"লম্বা উত্তেজিত বক্তৃতা, তর্জন-গর্জন",full:"A long, loud and angry speech that criticises someone or tries to persuade them.",ex:"The manager delivered a twenty-minute harangue about punctuality.",exb:"ম্যানেজার সময়ানুবর্তিতা নিয়ে বিশ মিনিট ধরে তর্জন-গর্জন করলেন।",hook:"tirade (#৮২) আর diatribe-এর সমার্থক। ছবি: মাইক হাতে একজন, থামার নামই নেই!"}
]);

VOCAB.addLesson({
  id: "b333-gh", source: "barrons333", order: 13, group: "G–H",
  title: "G–H", titleBn: "G–H",
  words: ["gainsay","garrulous","goad","gouge","grandiloquent","gregarious","guileless","gullible","harangue","homogeneous","hyperbole"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    garrulous: {def:"loquacious; talkative; wordy"},
    grandiloquent: {def:"pompous; bombastic; using high-sounding language"},
    gregarious: {def:"sociable"},
    homogeneous: {def:"of the same kind"},
    hyperbole: {def:"exaggeration; overstatement"}
  },
  note: {
    title: "Ways of talking",
    titleBn: "কথা বলার নানা ধরন",
    intro: "Five words here describe ways of talking: too much, too grandly, too angrily, bigger than the truth, or against someone. The roots show how.",
    introBn: "এখানে পাঁচটি শব্দ কথা বলার ধরন বোঝায়: অতিরিক্ত, অতি জাঁকালো, অতি রাগী, সত্যের চেয়ে বড় করে, কিংবা কারও বিরুদ্ধে। মূলগুলোই তা দেখিয়ে দেয়।",
    roots: [
      {parts:"garrire",gloss:"chatter",word:"garrulous",bn:"বাচাল"},
      {parts:"grandis + loqui",gloss:"grand + speak",word:"grandiloquent",bn:"জাঁকালো ভাষায় কথা"},
      {parts:"hyper + ballein",gloss:"beyond + throw",word:"hyperbole",bn:"সত্যের সীমা ছাড়িয়ে ছোড়া"},
      {parts:"gain + say",gloss:"against + say",word:"gainsay",bn:"বিরুদ্ধে বলা"},
      {parts:"harangue",gloss:"a speech to a crowd",word:"harangue",bn:"জনতার সামনে চড়া গলায় ভাষণ"}
    ],
    points: [
      ["gregarious and aggregate share Latin grex, “flock”: a gregarious person loves being with the flock.","gregarious আর aggregate-এর মূল একই: ল্যাটিন grex (পাল)। gregarious মানুষ দলের মধ্যে থাকতে ভালোবাসে।"],
      ["guileless = honest, with no tricks of your own. gullible = easily tricked by others. One person can be both, but the words are not the same.","guileless = ছলনাহীন, নিজে কাউকে ঠকায় না। gullible = অন্যরা সহজে ঠকাতে পারে। একজন মানুষ দুটোই হতে পারে, তবে শব্দ দুটি এক নয়।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["urge on","খোঁচানো"], b:["long, passionate, and vehement speech","তর্জন-গর্জন"], c:["pompous; bombastic; using high-sounding language","বাগাড়ম্বরী"],
      d:["without deceit","ছলনাহীন"], e:["exaggeration; overstatement","অতিশয়োক্তি"], f:["deny","অস্বীকার করা"],
      g:["of the same kind","সমজাতীয়"], h:["sociable","মিশুক"], i:["loquacious; talkative; wordy","বাচাল"],
      j:["easily deceived","সহজে ঠকে"], k:["overcharge","গলাকাটা দাম নেওয়া"]
    },
    items: [
      {word:"gainsay",answer:"f"},{word:"garrulous",answer:"i"},{word:"goad",answer:"a"},{word:"gouge",answer:"k"},
      {word:"grandiloquent",answer:"c"},{word:"gregarious",answer:"h"},{word:"guileless",answer:"d"},{word:"gullible",answer:"j"},
      {word:"harangue",answer:"b"},{word:"homogeneous",answer:"g"},{word:"hyperbole",answer:"e"}
    ]
  },
  sentences: [
    {text:"No one could ___ the evidence; the photos showed exactly what had happened.",answer:"gainsay",word:"gainsay",bn:"প্রমাণটি কেউ অস্বীকার করতে পারল না; ছবিগুলোতে ঠিক কী ঘটেছিল তা স্পষ্ট দেখা যাচ্ছিল।"},
    {text:"The ___ barber talked nonstop about cricket while cutting my hair.",answer:"garrulous",word:"garrulous",bn:"বাচাল নাপিত আমার চুল কাটতে কাটতে একটানা ক্রিকেট নিয়ে কথা বলে গেলেন।"},
    {text:"The older boys ___ him into climbing the tall mango tree.",answer:"goaded",word:"goad",bn:"বড় ছেলেরা খোঁচাতে খোঁচাতে তাকে উঁচু আমগাছে চড়তে বাধ্য করল।"},
    {text:"Some drivers at the station ___ tourists by charging three times the normal fare.",answer:"gouge",word:"gouge",bn:"স্টেশনের কিছু চালক স্বাভাবিক ভাড়ার তিনগুণ চেয়ে পর্যটকদের কাছ থেকে গলাকাটা ভাড়া আদায় করেন।"},
    {text:"The ___ speaker called the new public toilet “a magnificent monument to the glory of our town”.",answer:"grandiloquent",word:"grandiloquent",bn:"বাগাড়ম্বরী বক্তা নতুন গণশৌচাগারটিকে বললেন “আমাদের শহরের গৌরবের এক মহিমান্বিত স্মারক”।"},
    {text:"Our ___ neighbour invites half the street to her house every Friday evening.",answer:"gregarious",word:"gregarious",bn:"আমাদের মিশুক প্রতিবেশী প্রতি শুক্রবার সন্ধ্যায় পাড়ার অর্ধেক মানুষকে বাড়িতে দাওয়াত দেন।"},
    {text:"The ___ boy simply told the truth, not realising it would get his friend into trouble.",answer:"guileless",word:"guileless",bn:"সরল ছেলেটি সোজাসুজি সত্যি কথা বলে দিল, বুঝতেই পারল না এতে তার বন্ধু বিপদে পড়বে।"},
    {text:"The ___ old man believed the caller who said he had won a car, and sent him money.",answer:"gullible",word:"gullible",bn:"সরলবিশ্বাসী বৃদ্ধ লোকটি ফোনকারীর কথা বিশ্বাস করলেন যে তিনি একটি গাড়ি জিতেছেন, আর তাকে টাকা পাঠিয়ে দিলেন।"},
    {text:"The coach's half-time ___ was so loud that people in the stands could hear it.",answer:"harangue",word:"harangue",bn:"বিরতির সময় কোচের তর্জন-গর্জন এত জোরে ছিল যে গ্যালারির দর্শকেরাও শুনতে পাচ্ছিলেন।"},
    {text:"Our class is far from ___ ; the students come from twelve different districts.",answer:"homogeneous",word:"homogeneous",bn:"আমাদের ক্লাস মোটেই সমজাতীয় নয়; শিক্ষার্থীরা এসেছে বারোটি ভিন্ন জেলা থেকে।"},
    {text:"Saying “I'm so hungry I could eat a whole cow” is ___ , not a real plan.",answer:"hyperbole",word:"hyperbole",bn:"“এত খিদে পেয়েছে যে আস্ত একটা গরু খেয়ে ফেলতে পারি” বলাটা অতিশয়োক্তি, সত্যিকারের পরিকল্পনা নয়।"}
  ]
});
