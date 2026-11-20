/* Barron's 333 · E · Part 1 (ebullient – engender) */
VOCAB.addWords([
  {id:"efficacy",word:"efficacy",pos:"noun",posBn:"বিশেষ্য",def:"power to produce desired effect",bn:"কার্যকারিতা",full:"The ability of something, such as a medicine or a method, to produce the result it is meant to.",ex:"Farmers tested the efficacy of the new fertiliser on two small plots.",exb:"কৃষকেরা দুটি ছোট জমিতে নতুন সারের কার্যকারিতা পরীক্ষা করলেন।",hook:"effective-এর বিশেষ্য-ভাই: efficacy = কাজ করার ক্ষমতা। ল্যাটিন efficere (ex + facere = সম্পন্ন করা) থেকে।"},
  {id:"effrontery",word:"effrontery",pos:"noun",posBn:"বিশেষ্য",def:"impudence; shameless boldness; sheer nerve",bn:"ধৃষ্টতা, নির্লজ্জ স্পর্ধা",full:"Shocking rudeness and boldness, shown without any shame.",ex:"He had the effrontery to ask for a bonus after arriving late every day for a month.",exb:"পুরো মাস রোজ দেরিতে এসেও বোনাস চাওয়ার ধৃষ্টতা দেখাল সে।",hook:"ex (বাইরে) + frons (কপাল) → লজ্জা ছাড়াই কপাল উঁচিয়ে সামনে আসা। temerity (#৮১), audacity (#১২)-এর আত্মীয়।"},
  {id:"elegy",word:"elegy",pos:"noun",posBn:"বিশেষ্য",def:"poem or song expressing lamentation",bn:"শোকগাথা, বিলাপকাব্য",full:"A sad poem or song, usually written in memory of someone who has died.",ex:"The poet wrote an elegy for the fishermen lost in the cyclone.",exb:"ঘূর্ণিঝড়ে হারিয়ে যাওয়া জেলেদের স্মরণে কবি একটি শোকগাথা লিখলেন।",hook:"elegy = শোকের কবিতা; dirge = শোকের গান; eulogy = প্রশংসার বক্তব্য। lament (#৫৪)-এর পরিবারের শব্দ।"},
  {id:"embellish",word:"embellish",pos:"verb",posBn:"ক্রিয়া",def:"adorn; ornament; enhance, as a story",bn:"সাজানো, (গল্পে) রং চড়ানো",full:"To decorate something; also, to make a story more interesting by adding details that may not be true.",ex:"Every time Grandpa tells the story of the tiger, he embellishes it a little more.",exb:"প্রতিবার বাঘের গল্পটা বলার সময় দাদু তাতে আরেকটু রং চড়ান।",hook:"em (ভেতরে) + bel (সুন্দর; ফরাসি belle) → সুন্দর করে তোলা। গল্প embellish করা = নুন-মরিচ মিশিয়ে বলা।"}
]);

VOCAB.addLesson({
  id: "b333-e-1", source: "barrons333", order: 10, group: "E",
  title: "E · Part 1", titleBn: "E · পর্ব ১",
  words: ["ebullient","eclectic","efficacy","effrontery","elegy","elicit","embellish","empirical","emulate","endemic","enervate","engender"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    ebullient: {def:"showing excitement; overflowing with enthusiasm"},
    eclectic: {def:"composed of elements drawn from disparate sources"},
    elicit: {def:"draw out by discussion"},
    empirical: {def:"based on experience"},
    emulate: {def:"imitate; rival"},
    endemic: {def:"prevailing among a specific group of people or in a specific area or country"},
    enervate: {def:"weaken"},
    engender: {def:"cause; produce"}
  },
  note: {
    title: "e-/ex- (out)",
    titleBn: "e-/ex- (বাইরে)",
    intro: "Latin ex- means “out”. It often shrinks to e- or changes to ef- before f. Five words here are ex- plus a root you can picture.",
    introBn: "ল্যাটিন ex- মানে “বাইরে”। প্রায়ই এটি ছোট হয়ে e- হয়, আর f-এর আগে হয় ef-। এখানে পাঁচটি শব্দ ex- আর চোখে দেখা যায় এমন একটি মূল দিয়ে তৈরি।",
    roots: [
      {parts:"ex + bullire",gloss:"out + boil",word:"ebullient",bn:"উথলে ওঠা উচ্ছ্বাস"},
      {parts:"ex + lacere",gloss:"out + lure",word:"elicit",bn:"টেনে বের করা"},
      {parts:"ex + nervus",gloss:"out + sinew",word:"enervate",bn:"শক্তি বের করে নেওয়া"},
      {parts:"ex + frons",gloss:"out + forehead",word:"effrontery",bn:"নির্লজ্জ স্পর্ধা"},
      {parts:"ex + facere",gloss:"out + do",word:"efficacy",bn:"কাজ সম্পন্ন করার ক্ষমতা"}
    ],
    points: [
      ["enervate means weaken, not energise! e- (out) + nervus (sinew): the strength is taken out.","enervate মানে দুর্বল করা, শক্তি দেওয়া নয়! e- (বাইরে) + nervus (পেশিতন্তু): শক্তি বের করে নেওয়া।"],
      ["elegy = a sad poem in memory of someone. eulogy = a speech of praise. dirge = a sad song.","elegy = কারও স্মরণে শোকের কবিতা। eulogy = প্রশংসার বক্তব্য। dirge = শোকের গান।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["power to produce desired effect","কার্যকারিতা"], b:["imitate; rival","অনুকরণ করা"], c:["draw out by discussion","বের করে আনা"],
      d:["showing excitement; overflowing with enthusiasm","উচ্ছ্বসিত"], e:["cause; produce","জন্ম দেওয়া"], f:["adorn; ornament; enhance, as a story","রং চড়ানো"],
      g:["weaken","দুর্বল করা"], h:["impudence; shameless boldness; sheer nerve","ধৃষ্টতা"], i:["prevailing among a specific group of people or in a specific area or country","স্থানীয়ভাবে বিদ্যমান"],
      j:["composed of elements drawn from disparate sources","নানা উৎস থেকে নেওয়া"], k:["based on experience","অভিজ্ঞতানির্ভর"], l:["poem or song expressing lamentation","শোকগাথা"]
    },
    items: [
      {word:"ebullient",answer:"d"},{word:"eclectic",answer:"j"},{word:"efficacy",answer:"a"},{word:"effrontery",answer:"h"},
      {word:"elegy",answer:"l"},{word:"elicit",answer:"c"},{word:"embellish",answer:"f"},{word:"empirical",answer:"k"},
      {word:"emulate",answer:"b"},{word:"endemic",answer:"i"},{word:"enervate",answer:"g"},{word:"engender",answer:"e"}
    ]
  },
  sentences: [
    {text:"Still ___ after scoring a century, Liton hugged every teammate in the dressing room.",answer:"ebullient",word:"ebullient",bn:"সেঞ্চুরির পর তখনও উচ্ছ্বসিত লিটন ড্রেসিংরুমে প্রত্যেক সতীর্থকে জড়িয়ে ধরলেন।"},
    {text:"The café's ___ menu offers biryani, pasta and Thai soup side by side.",answer:"eclectic",word:"eclectic",bn:"ক্যাফেটির বৈচিত্র্যময় মেনুতে পাশাপাশি আছে বিরিয়ানি, পাস্তা আর থাই স্যুপ।"},
    {text:"Scientists are testing the ___ of a new salt-tolerant rice in coastal fields.",answer:"efficacy",word:"efficacy",bn:"বিজ্ঞানীরা উপকূলের মাঠে লবণসহিষ্ণু নতুন ধানের কার্যকারিতা পরীক্ষা করছেন।"},
    {text:"After breaking our window, he had the ___ to ask us to return his ball.",answer:"effrontery",word:"effrontery",bn:"আমাদের জানালা ভেঙে সে উল্টো তার বল ফেরত চাওয়ার ধৃষ্টতা দেখাল।"},
    {text:"At the memorial, a student read an ___ she had written for her late teacher.",answer:"elegy",word:"elegy",bn:"স্মরণসভায় এক ছাত্রী প্রয়াত শিক্ষকের জন্য নিজের লেখা একটি শোকগাথা পড়ল।"},
    {text:"The detective's gentle questions finally ___ the truth from the frightened boy.",answer:"elicited",word:"elicit",bn:"গোয়েন্দার নরম প্রশ্নগুলো অবশেষে ভীত ছেলেটির কাছ থেকে সত্যটা বের করে আনল।"},
    {text:"Grandpa likes to ___ his fishing stories; the fish grows bigger every time.",answer:"embellish",word:"embellish",bn:"দাদু তাঁর মাছ ধরার গল্পে রং চড়াতে ভালোবাসেন; প্রতিবার মাছটা আরও বড় হয়ে যায়।"},
    {text:"The claim was based not on ___ evidence but on rumours.",answer:"empirical",word:"empirical",bn:"দাবিটি পর্যবেক্ষণভিত্তিক প্রমাণের ওপর নয়, গুজবের ওপর দাঁড়িয়ে ছিল।"},
    {text:"Rima hopes to ___ her older sister, who became the first doctor in their village.",answer:"emulate",word:"emulate",bn:"রিমা তার বড় বোনের মতো হতে চায়, যিনি তাদের গ্রামের প্রথম ডাক্তার হয়েছেন।"},
    {text:"Some diseases are ___ in hot, wet regions, where they return year after year.",answer:"endemic",word:"endemic",bn:"কিছু রোগ গরম ও আর্দ্র অঞ্চলে স্থায়ীভাবে বিদ্যমান, সেখানে বছর বছর ফিরে আসে।"},
    {text:"Three hours of standing in the sun ___ the students, and many sat down on the grass.",answer:"enervated",word:"enervate",bn:"রোদে তিন ঘণ্টা দাঁড়িয়ে থেকে শিক্ষার্থীরা নিস্তেজ হয়ে পড়ল, অনেকে ঘাসের ওপর বসে পড়ল।"},
    {text:"Poverty and unemployment can ___ crime.",answer:"engender",word:"engender",bn:"দারিদ্র্য আর বেকারত্ব অপরাধের জন্ম দিতে পারে।"}
  ]
});
