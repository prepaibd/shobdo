/* Word Smart · Quick Quiz #48 */
VOCAB.addWords([
  {id:"impervious",word:"impervious",pos:"adjective",posBn:"বিশেষণ",def:"impenetrable",bn:"অভেদ্য; প্রভাবিত হয় না এমন",full:"Not allowing water or anything else through; also, not affected by something.",ex:"He seemed impervious to criticism.",exb:"সমালোচনা তাকে একটুও প্রভাবিত করছে বলে মনে হলো না।",hook:"im (না) + pervius (পার হওয়া যায়) → ভেদ করা যায় না। waterproof = impervious to water।"},
  {id:"impetuous",word:"impetuous",pos:"adjective",posBn:"বিশেষণ",def:"impulsive",bn:"হঠকারী, ঝোঁকের বশে কাজ করে এমন",full:"Acting quickly without thinking carefully.",ex:"In an impetuous moment, he quit his job.",exb:"ঝোঁকের মাথায় সে চাকরি ছেড়ে দিল।",hook:"impetus (বেগ, ধাক্কা) → বেগের মাথায় কাজ = হঠকারী।"},
  {id:"implement",word:"implement",pos:"verb",posBn:"ক্রিয়া",def:"carry out",bn:"বাস্তবায়ন করা",full:"To put a plan or decision into effect; as a noun, a tool.",ex:"The new rules will be implemented from January.",exb:"নতুন নিয়ম জানুয়ারি থেকে বাস্তবায়ন করা হবে।",hook:"পত্রিকার পরিচিত শব্দ: প্রকল্প বাস্তবায়ন = project implementation।"},
  {id:"impotent",word:"impotent",pos:"adjective",posBn:"বিশেষণ",def:"powerless",bn:"ক্ষমতাহীন, অসহায়",full:"Unable to take effective action; powerless.",ex:"The villagers felt impotent as the river swallowed their land.",exb:"নদী তাদের জমি গিলে নিলে গ্রামবাসীরা নিজেদের অসহায় বোধ করলেন।",hook:"im (না) + potent (শক্তিশালী; potential) → শক্তিহীন।"},
  {id:"impugn",word:"impugn",pos:"verb",posBn:"ক্রিয়া",def:"attack the truth of",bn:"সত্যতা বা সততা নিয়ে প্রশ্ন তোলা",full:"To challenge or attack the honesty or truth of someone or something.",ex:"The lawyer impugned the witness's honesty.",exb:"উকিল সাক্ষীর সততা নিয়ে প্রশ্ন তুললেন।",hook:"im + pugnare (লড়াই করা; pugnacious) → বক্তব্যের বিরুদ্ধে লড়াই। উচ্চারণ “ইম্পিউন” (g নীরব)।"},
  {id:"inane",word:"inane",pos:"adjective",posBn:"বিশেষণ",def:"silly",bn:"অর্থহীন, নির্বোধ",full:"Silly and without meaning.",ex:"The talk show was full of inane chatter.",exb:"টকশোটি অর্থহীন বকবকে ভরা ছিল।",hook:"ল্যাটিন inanis = ফাঁকা → মাথা ফাঁকা কথা। fatuous (#৪২)-এর সমার্থক।"},
  {id:"inaugurate",word:"inaugurate",pos:"verb",posBn:"ক্রিয়া",def:"begin officially",bn:"উদ্বোধন করা",full:"To begin something officially, often with a ceremony.",ex:"The Prime Minister inaugurated the new bridge.",exb:"প্রধানমন্ত্রী নতুন সেতুটি উদ্বোধন করলেন।",hook:"ল্যাটিন augur = লক্ষণ দেখে ভবিষ্যৎ বলা পুরোহিত → শুভ লক্ষণ দেখে আনুষ্ঠানিক শুরু। inauguration = উদ্বোধন অনুষ্ঠান। auspicious (#১২)-এর আত্মীয়।"}
]);

VOCAB.addLesson({
  id: "ws-q48", source: "wordsmart", order: 48,
  title: "Quick Quiz #48", titleBn: "কুইক কুইজ #৪৮",
  words: ["impervious","impetuous","implement","impotent","impugn","inane","inaugurate"],
  note: {
    title: "Two different im-s",
    titleBn: "দুই ধরনের im-",
    intro: "Sometimes im- means “not” (impervious, impotent); sometimes it means “in, onto” (impugn, implement).",
    introBn: "কখনো im- মানে “না” (impervious, impotent); কখনো মানে “ভেতরে, ওপরে” (impugn, implement)।",
    roots: [
      {parts:"im + pervius",gloss:"not passable",word:"impervious",bn:"অভেদ্য"},
      {parts:"im + potens",gloss:"not powerful",word:"impotent",bn:"ক্ষমতাহীন"},
      {parts:"im + pugnare",gloss:"fight against",word:"impugn",bn:"প্রশ্ন তোলা"},
      {parts:"impetus",gloss:"rush, force",word:"impetuous",bn:"হঠকারী"},
      {parts:"inanis",gloss:"empty",word:"inane",bn:"অর্থহীন"}
    ],
    points: [
      ["impetuous = acting without thinking. impervious = not affected. Both start with imp- but are unrelated.","impetuous = না ভেবে কাজ করা। impervious = প্রভাবিত হয় না। দুটোই imp- দিয়ে শুরু, কিন্তু সম্পর্কহীন।"],
      ["You implement a plan, inaugurate a building, and impugn a claim.","পরিকল্পনা implement করো, ভবন inaugurate করো, দাবি impugn করো।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["begin officially","আনুষ্ঠানিক শুরু"], b:["carry out","বাস্তবায়ন করা"], c:["powerless","ক্ষমতাহীন"], d:["impenetrable","অভেদ্য"],
      e:["silly","নির্বোধ"], f:["attack the truth of","সত্যতা নিয়ে আক্রমণ"], g:["impulsive","হঠকারী"]
    },
    items: [
      {word:"impervious",answer:"d"},{word:"impetuous",answer:"g"},{word:"implement",answer:"b"},{word:"impotent",answer:"c"},
      {word:"impugn",answer:"f"},{word:"inane",answer:"e"},{word:"inaugurate",answer:"a"}
    ]
  },
  sentences: [
    {text:"This jacket is ___ to rain.",answer:"impervious",word:"impervious",bn:"এই জ্যাকেটে বৃষ্টির পানি ঢোকে না।"},
    {text:"The ___ young man jumped into the river without checking how deep it was.",answer:"impetuous",word:"impetuous",bn:"হঠকারী যুবকটি গভীরতা না দেখেই নদীতে ঝাঁপ দিল।"},
    {text:"It is easy to make a plan but hard to ___ it.",answer:"implement",word:"implement",bn:"পরিকল্পনা বানানো সহজ, কিন্তু বাস্তবায়ন করা কঠিন।"},
    {text:"Without money or support, the committee was ___ .",answer:"impotent",word:"impotent",bn:"অর্থ বা সমর্থন ছাড়া কমিটিটি ছিল ক্ষমতাহীন।"},
    {text:"Nobody dared to ___ the honesty of the respected teacher.",answer:"impugn",word:"impugn",bn:"সম্মানিত শিক্ষকের সততা নিয়ে প্রশ্ন তোলার সাহস কারও হলো না।"},
    {text:"He kept asking ___ questions like “Is water wet?”",answer:"inane",word:"inane",bn:"সে “পানি কি ভেজা?”-র মতো অর্থহীন প্রশ্ন করেই যাচ্ছিল।"},
    {text:"The vice-chancellor will ___ the new library on Monday.",answer:"inaugurate",word:"inaugurate",bn:"উপাচার্য সোমবার নতুন গ্রন্থাগার উদ্বোধন করবেন।"}
  ]
});
