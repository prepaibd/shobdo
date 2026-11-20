/* Barron's 333 · A · Part 2 (ambiguous – approbation) */
VOCAB.addWords([
  {id:"ambivalence",word:"ambivalence",pos:"noun",posBn:"বিশেষ্য",def:"the state of having contradictory or conflicting emotional attitudes",bn:"দোটানা, মিশ্র অনুভূতি",full:"Having mixed feelings about something, such as wanting it and not wanting it at the same time.",ex:"Rafi felt some ambivalence about moving to Dhaka: he wanted the good university but would miss his village.",exb:"ঢাকায় যাওয়া নিয়ে রাফির মনে দোটানা ছিল: ভালো বিশ্ববিদ্যালয়ে পড়তে চায়, আবার গ্রামের জন্যও মন খারাপ হবে।",hook:"ambi (দুই দিক) + valentia (শক্তি) → মন দুই দিকে সমান টানছে। ambivalent (#৬)-এর বিশেষ্য রূপ।"},
  {id:"analogous",word:"analogous",pos:"adjective",posBn:"বিশেষণ",def:"comparable",bn:"সদৃশ, তুলনীয়",full:"Similar in some way, so that the two things can be usefully compared; often used as “analogous to”.",ex:"The heart is analogous to a water pump: both push liquid through pipes.",exb:"হৃৎপিণ্ড অনেকটা পানির পাম্পের মতো: দুটোই নলের ভেতর দিয়ে তরল ঠেলে পাঠায়।",hook:"analogy (#৭) = তুলনা → analogous = তুলনা করার মতো, সদৃশ।"},
  {id:"anomalous",word:"anomalous",pos:"adjective",posBn:"বিশেষণ",def:"abnormal; irregular",bn:"অস্বাভাবিক, নিয়মছাড়া",full:"Different from what is usual or expected; not fitting the normal pattern.",ex:"Among all the A grades on her report card, the single C was anomalous.",exb:"তার রিপোর্ট কার্ডের সব A-এর মাঝে একমাত্র C-টা ছিল অস্বাভাবিক।",hook:"গ্রিক an (না) + homalos (সমান) → সমান নয়, নিয়মে পড়ে না। anomaly (#৮)-এর বিশেষণ রূপ।"},
  {id:"apprise",word:"apprise",pos:"verb",posBn:"ক্রিয়া",def:"inform",bn:"অবহিত করা, জানানো",full:"To tell someone about something, especially formally; used as “apprise someone of something”.",ex:"The pilot apprised the passengers of the delay caused by fog.",exb:"কুয়াশার কারণে দেরির কথা পাইলট যাত্রীদের জানিয়ে দিলেন।",hook:"apprise ≠ appraise! apprise = জানানো; appraise = দাম বা মান যাচাই করা। ফরাসি appris = শেখানো হয়েছে এমন → কাউকে জানিয়ে দেওয়া।"}
]);

VOCAB.addLesson({
  id: "b333-a-2", source: "barrons333", order: 2, group: "A",
  title: "A · Part 2", titleBn: "A · পর্ব ২",
  words: ["ambiguous","ambivalence","ameliorate","anachronism","analogous","anarchy","anomalous","antipathy","apathy","appease","apprise","approbation"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    ambiguous: {def:"unclear or doubtful in meaning"},
    ameliorate: {def:"improve"},
    anachronism: {def:"something or someone misplaced in time"},
    anarchy: {def:"absence of governing body; state of disorder"},
    antipathy: {def:"aversion; dislike"},
    apathy: {def:"lack of caring; indifference"},
    appease: {def:"pacify or soothe; relieve"},
    approbation: {def:"approval"}
  },
  note: {
    title: "Greek a-/an- (without) and pathos (feeling)",
    titleBn: "গ্রিক a-/an- (ছাড়া) আর pathos (অনুভূতি)",
    intro: "Several words here are Greek. a-/an- means “without”, pathos means “feeling”, and ana- means “back” or “against”. Take the words apart and the meaning appears.",
    introBn: "এখানে কয়েকটি শব্দ গ্রিক। a-/an- মানে “ছাড়া”, pathos মানে “অনুভূতি”, আর ana- মানে “পেছনে” বা “বিপরীতে”। শব্দ ভেঙে দেখলেই অর্থ বেরিয়ে আসে।",
    roots: [
      {parts:"an + arkhos",gloss:"without + ruler",word:"anarchy",bn:"শাসকহীন, নৈরাজ্য"},
      {parts:"an + homalos",gloss:"not + even",word:"anomalous",bn:"নিয়মছাড়া"},
      {parts:"a + pathos",gloss:"without + feeling",word:"apathy",bn:"উদাসীনতা"},
      {parts:"anti + pathos",gloss:"against + feeling",word:"antipathy",bn:"বিরাগ"},
      {parts:"ana + khronos",gloss:"back + time",word:"anachronism",bn:"কালবিভ্রাট"}
    ],
    points: [
      ["apathy = no feeling at all. antipathy = a strong feeling against something.","apathy = কোনো অনুভূতিই নেই। antipathy = কোনো কিছুর বিরুদ্ধে প্রবল অনুভূতি।"],
      ["ambiguous = a message with two possible meanings. ambivalence = a person with two opposite feelings. Both start with ambi-, “both”.","ambiguous = বার্তার দুই রকম অর্থ হতে পারে। ambivalence = মানুষের মনে দুই রকম বিপরীত অনুভূতি। দুটোই ambi- (দুই দিক) দিয়ে শুরু।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["improve","উন্নত করা"], b:["aversion; dislike","বিরাগ"], c:["absence of governing body; state of disorder","নৈরাজ্য"],
      d:["inform","জানানো"], e:["unclear or doubtful in meaning","অস্পষ্ট"], f:["pacify or soothe; relieve","শান্ত করা"],
      g:["something or someone misplaced in time","কালবিভ্রাট"], h:["approval","অনুমোদন"], i:["abnormal; irregular","নিয়মছাড়া"],
      j:["the state of having contradictory or conflicting emotional attitudes","দোটানা"], k:["lack of caring; indifference","উদাসীনতা"], l:["comparable","তুলনীয়"]
    },
    items: [
      {word:"ambiguous",answer:"e"},{word:"ambivalence",answer:"j"},{word:"ameliorate",answer:"a"},{word:"anachronism",answer:"g"},
      {word:"analogous",answer:"l"},{word:"anarchy",answer:"c"},{word:"anomalous",answer:"i"},{word:"antipathy",answer:"b"},
      {word:"apathy",answer:"k"},{word:"appease",answer:"f"},{word:"apprise",answer:"d"},{word:"approbation",answer:"h"}
    ]
  },
  sentences: [
    {text:"The notice was ___ : “next Friday” could mean this week or the week after.",answer:"ambiguous",word:"ambiguous",bn:"নোটিশটি ছিল অস্পষ্ট: “আগামী শুক্রবার” মানে এই সপ্তাহও হতে পারে, পরের সপ্তাহও।"},
    {text:"Her ___ about the job offer was clear: she liked the salary but hated the long journey to work.",answer:"ambivalence",word:"ambivalence",bn:"চাকরির প্রস্তাব নিয়ে তার দোটানা স্পষ্ট ছিল: বেতনটা পছন্দ, কিন্তু অফিসে যাওয়ার লম্বা পথ একদম অপছন্দ।"},
    {text:"The new water filters greatly ___ the health of the villagers.",answer:"ameliorated",word:"ameliorate",bn:"নতুন পানির ফিল্টার গ্রামবাসীর স্বাস্থ্যের অনেক উন্নতি ঘটাল।"},
    {text:"A mobile phone in a play about the Liberation War of 1971 would be an ___ .",answer:"anachronism",word:"anachronism",bn:"১৯৭১-এর মুক্তিযুদ্ধ নিয়ে নাটকে মোবাইল ফোন দেখালে তা হবে কালবিভ্রাট।"},
    {text:"A head teacher's job is ___ to a ship captain's: both must keep everyone safe and on course.",answer:"analogous",word:"analogous",bn:"প্রধান শিক্ষকের কাজ অনেকটা জাহাজের ক্যাপ্টেনের মতো: দুজনকেই সবাইকে নিরাপদে ও ঠিক পথে রাখতে হয়।"},
    {text:"When the referee walked off the field, the match fell into ___ .",answer:"anarchy",word:"anarchy",bn:"রেফারি মাঠ ছেড়ে চলে গেলে খেলাটা পুরো বিশৃঙ্খলায় পরিণত হলো।"},
    {text:"Among all the A grades on her report card, the single C looked ___ .",answer:"anomalous",word:"anomalous",bn:"তার রিপোর্ট কার্ডের সব A-এর মাঝে একমাত্র C-টা অস্বাভাবিক দেখাল।"},
    {text:"Ever since a dog bit him as a child, he has felt a strong ___ toward dogs.",answer:"antipathy",word:"antipathy",bn:"ছোটবেলায় কুকুরের কামড় খাওয়ার পর থেকে কুকুরের প্রতি তার তীব্র বিরাগ।"},
    {text:"Nobody voted in the class election, and nobody even asked who had won; such ___ worried the teachers.",answer:"apathy",word:"apathy",bn:"ক্লাস নির্বাচনে কেউ ভোট দিল না, কে জিতল তাও কেউ জিজ্ঞেস করল না; এমন উদাসীনতা শিক্ষকদের চিন্তায় ফেলল।"},
    {text:"To ___ the angry passengers, the bus company gave them free tickets for their next trip.",answer:"appease",word:"appease",bn:"রাগান্বিত যাত্রীদের শান্ত করতে বাস কোম্পানি তাদের পরের যাত্রার টিকিট বিনামূল্যে দিল।"},
    {text:"Please ___ me of any change in the train schedule.",answer:"apprise",word:"apprise",bn:"ট্রেনের সময়সূচিতে কোনো পরিবর্তন হলে আমাকে জানিয়ে দিও।"},
    {text:"The young singer's performance won the ___ of even the strictest judge.",answer:"approbation",word:"approbation",bn:"তরুণ গায়িকার পরিবেশনা সবচেয়ে কড়া বিচারকেরও প্রশংসা পেল।"}
  ]
});
