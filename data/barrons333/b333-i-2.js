/* Barron's 333 · I · Part 2 (inadvertently – innocuous) */
VOCAB.addWords([
  {id:"inadvertently",word:"inadvertently",pos:"adverb",posBn:"ক্রিয়াবিশেষণ",def:"unintentionally; by oversight; carelessly",bn:"অনিচ্ছাকৃতভাবে, অসাবধানে",full:"Without meaning to; by accident or oversight.",ex:"I inadvertently sent the message to the family group instead of to my friend.",exb:"অসাবধানে বার্তাটা বন্ধুকে না পাঠিয়ে পরিবারের গ্রুপে পাঠিয়ে ফেললাম।",hook:"in (না) + advertere (মনোযোগ ফেরানো) → মনোযোগ না দিয়ে। advertisement-ও আমাদের মনোযোগ টানে!"},
  {id:"inchoate",word:"inchoate",pos:"adjective",posBn:"বিশেষণ",def:"recently begun; rudimentary; elementary",bn:"সবে শুরু হওয়া, অপরিণত",full:"Just begun and not yet fully formed or developed.",ex:"At the first meeting, the plan for the science fair was still inchoate: just a few ideas on the board.",exb:"প্রথম মিটিংয়ে বিজ্ঞানমেলার পরিকল্পনা ছিল একদম প্রাথমিক পর্যায়ে: বোর্ডে কয়েকটা ধারণা মাত্র।",hook:"ল্যাটিন incohare = শুরু করা। rudimentary (#৭৪)-এর কাছাকাছি। উচ্চারণ in-KOH-it; ‘chaotic’-এর সাথে গুলিয়ো না, inchoate মানে সবে শুরু।"},
  {id:"incongruity",word:"incongruity",pos:"noun",posBn:"বিশেষ্য",def:"lack of harmony; absurdity",bn:"অসংগতি, বেমানান ভাব",full:"The quality of being out of place, or not fitting with what is around it.",ex:"The incongruity of a man in a thick winter coat on a hot July day made people stare.",exb:"জুলাইয়ের গরম দিনে মোটা শীতের কোট পরা লোকটির বেমানান চেহারা দেখে সবাই তাকিয়ে রইল।",hook:"incongruous (#৪৯)-এর বিশেষ্য রূপ। in (না) + congruere (মেলা) → মেলে না।"},
  {id:"inconsequential",word:"inconsequential",pos:"adjective",posBn:"বিশেষণ",def:"insignificant; unimportant",bn:"তুচ্ছ, গুরুত্বহীন",full:"Not important or significant.",ex:"Don't waste exam time on inconsequential details.",exb:"পরীক্ষার সময় তুচ্ছ খুঁটিনাটিতে নষ্ট কোরো না।",hook:"in (না) + consequence (ফলাফল, গুরুত্ব) → যার কোনো ফল বা গুরুত্ব নেই।"},
  {id:"incorporate",word:"incorporate",pos:"verb",posBn:"ক্রিয়া",def:"introduce something into a larger whole; combine; unite",bn:"অন্তর্ভুক্ত করা, যুক্ত করা",full:"To include something as part of a larger whole.",ex:"The new textbook incorporates more examples from Bangladeshi life.",exb:"নতুন পাঠ্যবইয়ে বাংলাদেশের জীবনের আরও উদাহরণ অন্তর্ভুক্ত করা হয়েছে।",hook:"in (ভেতরে) + corpus (দেহ) → দেহের ভেতরে নিয়ে নেওয়া। corporation = বহু মানুষ মিলে এক ‘দেহ’।"},
  {id:"indeterminate",word:"indeterminate",pos:"adjective",posBn:"বিশেষণ",def:"uncertain; not clearly fixed; indefinite",bn:"অনির্দিষ্ট, অনিশ্চিত",full:"Not exactly known, fixed or measured.",ex:"The tea-stall owner was a man of indeterminate age, somewhere between forty and sixty.",exb:"চা-দোকানি ছিলেন অনির্দিষ্ট বয়সের মানুষ, চল্লিশ থেকে ষাটের মাঝামাঝি কোথাও।",hook:"in (না) + determine (নির্দিষ্ট করা) → যা নির্দিষ্ট করা যায়নি।"},
  {id:"indigence",word:"indigence",pos:"noun",posBn:"বিশেষ্য",def:"poverty",bn:"দারিদ্র্য, অভাব",full:"Extreme poverty.",ex:"The scholarship helps students from families living in indigence.",exb:"বৃত্তিটি চরম দারিদ্র্যে থাকা পরিবারের শিক্ষার্থীদের সাহায্য করে।",hook:"indigent (#৫০)-এর বিশেষ্য রূপ। indigenous (#৫০, আদিবাসী)-এর সাথে গুলিয়ো না! destitute (#৩২)-এর কাছাকাছি।"}
]);

VOCAB.addLesson({
  id: "b333-i-2", source: "barrons333", order: 15, group: "I",
  title: "I · Part 2", titleBn: "I · পর্ব ২",
  words: ["inadvertently","inchoate","incongruity","inconsequential","incorporate","indeterminate","indigence","indolent","inert","ingenuous","inherent","innocuous"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    indolent: {def:"lazy"},
    inert: {def:"inactive; lacking power to move"},
    ingenuous: {def:"naive and trusting; young; unsophisticated"},
    inherent: {def:"firmly established by nature or habit"},
    innocuous: {def:"harmless"}
  },
  note: {
    title: "in- (not), and one in- (into)",
    titleBn: "in- (না), আর একটি in- (ভেতরে)",
    intro: "Most words here begin with Latin in-, “not”, followed by a root or word you know. incorporate is the odd one out: its in- means “into”.",
    introBn: "এখানে বেশিরভাগ শব্দ ল্যাটিন in- (না) দিয়ে শুরু, তারপর একটি চেনা মূল বা শব্দ। ব্যতিক্রম incorporate: এর in- মানে “ভেতরে”।",
    roots: [
      {parts:"in + nocere",gloss:"not + harm",word:"innocuous",bn:"ক্ষতি করে না"},
      {parts:"in + advertere",gloss:"not + turn attention",word:"inadvertently",bn:"মনোযোগ না দিয়ে"},
      {parts:"in + congruere",gloss:"not + agree",word:"incongruity",bn:"মেলে না, বেমানান"},
      {parts:"in + dolere",gloss:"not + take pains",word:"indolent",bn:"কষ্ট করতে চায় না, অলস"},
      {parts:"in + corpus",gloss:"into + body",word:"incorporate",bn:"ভেতরে যুক্ত করা"}
    ],
    points: [
      ["indigence = poverty (indigent #50). indigenous (#50) = native to a place. They look alike but mean different things.","indigence = দারিদ্র্য (indigent #৫০)। indigenous (#৫০) = আদিবাসী, স্থানীয়। দেখতে কাছাকাছি, অর্থ একেবারে আলাদা।"],
      ["indolent = a lazy person. inert = a thing that does not move or react. People are indolent; gases and rocks are inert.","indolent = অলস মানুষ। inert = নড়াচড়া বা বিক্রিয়া করে না এমন জিনিস। মানুষ indolent হয়; গ্যাস বা পাথর inert।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["lack of harmony; absurdity","অসংগতি"], b:["lazy","অলস"], c:["introduce something into a larger whole; combine; unite","অন্তর্ভুক্ত করা"],
      d:["harmless","নিরীহ"], e:["naive and trusting; young; unsophisticated","সরল"], f:["unintentionally; by oversight; carelessly","অনিচ্ছাকৃতভাবে"],
      g:["inactive; lacking power to move","নিষ্ক্রিয়"], h:["uncertain; not clearly fixed; indefinite","অনির্দিষ্ট"], i:["firmly established by nature or habit","সহজাত"],
      j:["recently begun; rudimentary; elementary","সবে শুরু"], k:["poverty","দারিদ্র্য"], l:["insignificant; unimportant","তুচ্ছ"]
    },
    items: [
      {word:"inadvertently",answer:"f"},{word:"inchoate",answer:"j"},{word:"incongruity",answer:"a"},{word:"inconsequential",answer:"l"},
      {word:"incorporate",answer:"c"},{word:"indeterminate",answer:"h"},{word:"indigence",answer:"k"},{word:"indolent",answer:"b"},
      {word:"inert",answer:"g"},{word:"ingenuous",answer:"e"},{word:"inherent",answer:"i"},{word:"innocuous",answer:"d"}
    ]
  },
  sentences: [
    {text:"Rina ___ left her umbrella on the bus and only noticed when it started to rain.",answer:"inadvertently",word:"inadvertently",bn:"রিনা অসাবধানে ছাতাটা বাসে ফেলে এসেছিল, বৃষ্টি শুরু হওয়ার পর খেয়াল করল।"},
    {text:"Her idea for a small business was still ___ : a name, a logo and nothing more.",answer:"inchoate",word:"inchoate",bn:"তার ছোট ব্যবসার ভাবনাটা তখনও একদম প্রাথমিক পর্যায়ে: একটা নাম, একটা লোগো, এর বেশি কিছু নয়।"},
    {text:"Everyone laughed at the ___ of a tiny puppy wearing a policeman's cap.",answer:"incongruity",word:"incongruity",bn:"পুলিশের টুপি পরা এক পুঁচকে কুকুরছানার বেমানান চেহারা দেখে সবাই হেসে উঠল।"},
    {text:"Don't worry about such ___ mistakes; focus on the big questions.",answer:"inconsequential",word:"inconsequential",bn:"এমন তুচ্ছ ভুল নিয়ে চিন্তা কোরো না; বড় প্রশ্নগুলোতে মন দাও।"},
    {text:"The chef decided to ___ local mangoes into the new dessert.",answer:"incorporate",word:"incorporate",bn:"রাঁধুনি নতুন মিষ্টান্নে স্থানীয় আম যুক্ত করার সিদ্ধান্ত নিলেন।"},
    {text:"The bus was delayed for an ___ period because of an accident on the road ahead.",answer:"indeterminate",word:"indeterminate",bn:"সামনের রাস্তায় দুর্ঘটনার কারণে বাসটি অনির্দিষ্ট সময়ের জন্য আটকে রইল।"},
    {text:"Many families in the slum live in ___ , with barely enough money for food.",answer:"indigence",word:"indigence",bn:"বস্তির অনেক পরিবার চরম দারিদ্র্যে থাকে, খাবার কেনার টাকাও কোনোরকমে জোটে।"},
    {text:"The ___ boy lay in bed until noon and left all his chores for his sister.",answer:"indolent",word:"indolent",bn:"অলস ছেলেটি দুপুর পর্যন্ত বিছানায় শুয়ে রইল আর সব কাজ বোনের ঘাড়ে চাপিয়ে দিল।"},
    {text:"The old engine lay ___ in the yard, rusting in the rain.",answer:"inert",word:"inert",bn:"পুরনো ইঞ্জিনটা উঠোনে নিষ্ক্রিয় পড়ে রইল, বৃষ্টিতে মরচে ধরতে লাগল।"},
    {text:"The ___ newcomer believed the seniors when they told him lunch was free on Fridays.",answer:"ingenuous",word:"ingenuous",bn:"সরল নবাগত ছেলেটি সিনিয়রদের কথা বিশ্বাস করল যে শুক্রবার দুপুরের খাবার বিনামূল্যে।"},
    {text:"Curiosity is ___ in children; nobody has to teach it to them.",answer:"inherent",word:"inherent",bn:"কৌতূহল শিশুদের মধ্যে সহজাত; কাউকে তা শেখাতে হয় না।"},
    {text:"The mushroom looked ___ , but it was actually poisonous.",answer:"innocuous",word:"innocuous",bn:"ব্যাঙের ছাতাটা দেখতে নিরীহ লাগছিল, কিন্তু আসলে সেটা বিষাক্ত ছিল।"}
  ]
});
