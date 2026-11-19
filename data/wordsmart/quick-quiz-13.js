/* Word Smart · Quick Quiz #13 */
VOCAB.addWords([
  {id:"autonomous",word:"autonomous",pos:"adjective",posBn:"বিশেষণ",def:"acting independently",bn:"স্বায়ত্তশাসিত, স্বাধীনভাবে চলে এমন",full:"Able to govern itself or act on its own, without outside control.",ex:"Dhaka University is an autonomous institution.",exb:"ঢাকা বিশ্ববিদ্যালয় একটি স্বায়ত্তশাসিত প্রতিষ্ঠান।",hook:"auto (নিজে) + nomos (নিয়ম) → নিজের নিয়মে চলা। autonomous car = চালকবিহীন গাড়ি।"},
  {id:"avarice",word:"avarice",pos:"noun",posBn:"বিশেষ্য",def:"greed",bn:"লোভ, অর্থলিপ্সা",full:"Extreme greed for money or possessions.",ex:"His avarice made him cheat even his own brothers.",exb:"অর্থলিপ্সার কারণে সে নিজের ভাইদেরও ঠকাল।",hook:"ল্যাটিন avere = তীব্রভাবে চাওয়া → টাকার তীব্র লোভ। avaricious = লোভী।"},
  {id:"avow",word:"avow",pos:"verb",posBn:"ক্রিয়া",def:"claim",bn:"প্রকাশ্যে ঘোষণা করা, দৃঢ়ভাবে দাবি করা",full:"To state something openly and firmly.",ex:"The candidate avowed that he had never taken a bribe.",exb:"প্রার্থী দৃঢ়ভাবে ঘোষণা করলেন যে তিনি কখনো ঘুষ নেননি।",hook:"a + vow (শপথ) → শপথের মতো জোর দিয়ে বলা। avowed enemy = প্রকাশ্য শত্রু।"},
  {id:"avuncular",word:"avuncular",pos:"adjective",posBn:"বিশেষণ",def:"like an uncle",bn:"মামা-চাচার মতো স্নেহশীল",full:"Kind and friendly toward a younger person, like a favourite uncle.",ex:"The avuncular headmaster always kept sweets for the youngest children.",exb:"মামার মতো স্নেহশীল প্রধান শিক্ষক ছোটদের জন্য সবসময় লজেন্স রাখতেন।",hook:"ল্যাটিন avunculus = মামা → মামার মতো আদুরে।"},
  {id:"awry",word:"awry",pos:"adverb",posBn:"ক্রিয়াবিশেষণ",def:"off course",bn:"বিপথে, ভেস্তে যাওয়া; বাঁকা",full:"Away from the planned course; wrong; also crooked.",ex:"Our picnic plans went awry when it started to rain.",exb:"বৃষ্টি শুরু হওয়ায় আমাদের পিকনিকের পরিকল্পনা ভেস্তে গেল।",hook:"a + wry (বাঁকা) → বাঁকা পথে চলে যাওয়া। উচ্চারণ: “আ-রাই”।"},
  {id:"axiom",word:"axiom",pos:"noun",posBn:"বিশেষ্য",def:"self-evident truth",bn:"স্বতঃসিদ্ধ সত্য",full:"A statement accepted as true without needing proof.",ex:"“The whole is greater than its part” is a basic axiom of geometry.",exb:"“সমগ্র তার অংশের চেয়ে বড়” জ্যামিতির একটি মৌলিক স্বতঃসিদ্ধ।",hook:"জ্যামিতি বইয়ের “স্বতঃসিদ্ধ” = axiom।"}
]);

VOCAB.addLesson({
  id: "ws-q13", source: "wordsmart", order: 13,
  title: "Quick Quiz #13", titleBn: "কুইক কুইজ #১৩",
  words: ["autonomous","avarice","avow","avuncular","awry","axiom"],
  note: {
    title: "auto- means self",
    titleBn: "auto- মানে নিজে",
    intro: "You met autocratic in Quiz #12. Here is its cousin, autonomous. Both are about the self being in charge.",
    introBn: "Quiz #১২-এ autocratic শিখেছ। এখানে তার আত্মীয় autonomous। দুটোতেই “নিজে” নিয়ন্ত্রণ করে।",
    roots: [
      {parts:"autos + nomos",gloss:"self + law",word:"autonomous",bn:"নিজের নিয়ম = স্বায়ত্তশাসিত"},
      {parts:"autos + kratos",gloss:"self + rule",word:"autocratic (#12)",bn:"নিজের শাসন = স্বৈরাচারী"},
      {parts:"avere",gloss:"crave",word:"avarice",bn:"তীব্রভাবে চাওয়া = লোভ"},
      {parts:"avunculus",gloss:"mother's brother",word:"avuncular",bn:"মামা = মামার মতো স্নেহশীল"},
      {parts:"axios",gloss:"worthy",word:"axiom",bn:"মেনে নেওয়ার যোগ্য = স্বতঃসিদ্ধ"}
    ],
    points: [
      ["axiom = a truth everyone accepts (in logic or maths). aphorism (#9) = a short, clever saying.","axiom = সবাই মেনে নেয় এমন সত্য (যুক্তি বা গণিতে)। aphorism (#৯) = ছোট জ্ঞানগর্ভ উক্তি।"],
      ["autonomous = runs itself. autocratic = rules others alone.","autonomous = নিজে নিজে চলে। autocratic = একা অন্যদের ওপর শাসন চালায়।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["greed","লোভ"], b:["like an uncle","মামার মতো"], c:["self-evident truth","স্বতঃসিদ্ধ সত্য"],
      d:["acting independently","স্বাধীনভাবে চলা"], e:["claim","দাবি করা"], f:["off course","পথচ্যুত"]
    },
    items: [
      {word:"autonomous",answer:"d"},{word:"avarice",answer:"a"},{word:"avow",answer:"e"},
      {word:"avuncular",answer:"b"},{word:"awry",answer:"f"},{word:"axiom",answer:"c"}
    ]
  },
  sentences: [
    {text:"Each department is ___ and chooses its own textbooks.",answer:"autonomous",word:"autonomous",bn:"প্রতিটি বিভাগ স্বাধীনভাবে চলে এবং নিজের পাঠ্যবই নিজেই বাছাই করে।"},
    {text:"The miser's ___ left him rich but friendless.",answer:"avarice",word:"avarice",bn:"কৃপণের অর্থলিপ্সা তাকে ধনী করল, কিন্তু বন্ধুহীন করে দিল।"},
    {text:"The players ___ that they would win the cup this year.",answer:"avowed",word:"avow",bn:"খেলোয়াড়রা দৃঢ়ভাবে ঘোষণা দিল যে এ বছর তারা কাপ জিতবে।"},
    {text:"Our elderly neighbour gave me ___ advice about choosing a university.",answer:"avuncular",word:"avuncular",bn:"আমাদের বয়স্ক প্রতিবেশী মামার মতো স্নেহ নিয়ে বিশ্ববিদ্যালয় বাছাইয়ের পরামর্শ দিলেন।"},
    {text:"Everything went ___ when the bus broke down on the highway.",answer:"awry",word:"awry",bn:"মহাসড়কে বাস নষ্ট হয়ে যাওয়ায় সব পরিকল্পনা ভেস্তে গেল।"},
    {text:"It is an ___ that a straight line is the shortest distance between two points.",answer:"axiom",word:"axiom",bn:"দুটি বিন্দুর মধ্যে সরলরেখাই সবচেয়ে কম দূরত্ব, এটি একটি স্বতঃসিদ্ধ।"}
  ]
});
