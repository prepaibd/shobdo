/* Barron's 333 · E · Part 2 (enhance – extrapolation) */
VOCAB.addWords([
  {id:"enhance",word:"enhance",pos:"verb",posBn:"ক্রিয়া",def:"increase; improve",bn:"বাড়ানো, উন্নত করা",full:"To improve the quality, value or strength of something.",ex:"A squeeze of lime enhances the taste of dal.",exb:"এক চিপা লেবু ডালের স্বাদ বাড়িয়ে দেয়।",hook:"augment (#১২)-এর কাছাকাছি। ফোনের ছবি enhance করা = আরও উজ্জ্বল, আরও স্পষ্ট করা।"},
  {id:"eulogy",word:"eulogy",pos:"noun",posBn:"বিশেষ্য",def:"expression of praise, often on the occasion of someone’s death",bn:"প্রশস্তি, গুণকীর্তন",full:"A speech or piece of writing that praises someone highly, especially after their death.",ex:"The newspaper printed a moving eulogy for the much-loved folk singer.",exb:"পত্রিকাটি জনপ্রিয় লোকসংগীতশিল্পীর স্মরণে হৃদয়স্পর্শী এক প্রশস্তি ছাপল।",hook:"eu (ভালো) + logos (কথা) → ভালো কথা বলা = প্রশংসা। euphemism-এও eu = ভালো। elegy = শোকের কবিতা, eulogy = প্রশংসার বক্তব্য।"},
  {id:"extrapolation",word:"extrapolation",pos:"noun",posBn:"বিশেষ্য",def:"projection; conjecture",bn:"প্রক্ষেপণ, জানা তথ্য থেকে অনুমান",full:"An estimate about the future or an unknown situation, made by extending known facts or trends.",ex:"By extrapolation from last year's figures, the school expects about 300 new students.",exb:"গত বছরের হিসাব থেকে অনুমান করে স্কুলটি প্রায় ৩০০ নতুন শিক্ষার্থী আশা করছে।",hook:"extrapolate (#৪১)-এর বিশেষ্য রূপ। extra (বাইরে) → জানা তথ্যের সীমার বাইরে রেখা টেনে অনুমান। conjecture (#২৫)-এর কাছাকাছি।"}
]);

VOCAB.addLesson({
  id: "b333-e-2", source: "barrons333", order: 11, group: "E",
  title: "E · Part 2", titleBn: "E · পর্ব ২",
  words: ["enhance","ephemeral","equanimity","equivocate","erudite","esoteric","eulogy","euphemism","exacerbate","exculpate","exigency","extrapolation"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    ephemeral: {def:"short-lived; fleeting"},
    equanimity: {def:"calmness of temperament; composure"},
    equivocate: {def:"lie; mislead; attempt to conceal the truth"},
    erudite: {def:"learned; scholarly"},
    esoteric: {def:"hard to understand; known only to the chosen few"},
    euphemism: {def:"mild expression in place of an unpleasant one"},
    exacerbate: {def:"worsen; embitter"},
    exculpate: {def:"clear from blame"},
    exigency: {def:"urgent situation; pressing needs or demands"}
  },
  note: {
    title: "equ- (equal), eu- (good), ex- (out)",
    titleBn: "equ- (সমান), eu- (ভালো), ex- (বাইরে)",
    intro: "Three small beginnings unlock most of this group: Latin aequus, “equal”; Greek eu, “good, well”; and Latin ex, “out” or “thoroughly”.",
    introBn: "তিনটি ছোট শুরু চিনলেই এই গ্রুপের বেশিরভাগ শব্দ খুলে যায়: ল্যাটিন aequus (সমান), গ্রিক eu (ভালো), আর ল্যাটিন ex (বাইরে বা পুরোপুরি)।",
    roots: [
      {parts:"aequus + animus",gloss:"equal + mind",word:"equanimity",bn:"মনের সমতা, স্থিরতা"},
      {parts:"aequus + vox",gloss:"equal + voice",word:"equivocate",bn:"দুই অর্থে সমান কথা, গোঁজামিল"},
      {parts:"eu + logos",gloss:"good + word",word:"eulogy",bn:"প্রশংসার কথা"},
      {parts:"ex + culpa",gloss:"out + blame",word:"exculpate",bn:"দোষমুক্ত করা"},
      {parts:"ex + acerbus",gloss:"thoroughly + bitter",word:"exacerbate",bn:"আরও তিক্ত, আরও খারাপ করা"}
    ],
    points: [
      ["euphemism (eu = good + pheme = speech) = a gentle way to say something unpleasant: “passed away” for “died”.","euphemism (eu = ভালো + pheme = কথা) = অপ্রিয় কথা কোমল করে বলা: “died”-এর জায়গায় “passed away”।"],
      ["exculpate (ex + culpa) = clear from blame. culpable = deserving blame. Same root, opposite direction.","exculpate (ex + culpa) = দোষ থেকে মুক্ত করা। culpable = দোষী, দোষের যোগ্য। মূল একই, দিক উল্টো।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["short-lived; fleeting","ক্ষণস্থায়ী"], b:["mild expression in place of an unpleasant one","কোমল বিকল্প শব্দ"], c:["lie; mislead; attempt to conceal the truth","গোঁজামিল দেওয়া"],
      d:["clear from blame","দোষমুক্ত করা"], e:["hard to understand; known only to the chosen few","গূঢ়"], f:["projection; conjecture","প্রক্ষেপণ"],
      g:["increase; improve","বাড়ানো"], h:["expression of praise, often on the occasion of someone’s death","প্রশস্তি"], i:["urgent situation; pressing needs or demands","জরুরি অবস্থা"],
      j:["calmness of temperament; composure","মানসিক স্থিরতা"], k:["worsen; embitter","আরও খারাপ করা"], l:["learned; scholarly","বিদ্বান"]
    },
    items: [
      {word:"enhance",answer:"g"},{word:"ephemeral",answer:"a"},{word:"equanimity",answer:"j"},{word:"equivocate",answer:"c"},
      {word:"erudite",answer:"l"},{word:"esoteric",answer:"e"},{word:"eulogy",answer:"h"},{word:"euphemism",answer:"b"},
      {word:"exacerbate",answer:"k"},{word:"exculpate",answer:"d"},{word:"exigency",answer:"i"},{word:"extrapolation",answer:"f"}
    ]
  },
  sentences: [
    {text:"A new coat of paint will ___ the look of the old library.",answer:"enhance",word:"enhance",bn:"নতুন করে রং করলে পুরনো লাইব্রেরিটার চেহারা আরও সুন্দর হবে।"},
    {text:"The rainbow was ___ ; within a minute it had faded from the sky.",answer:"ephemeral",word:"ephemeral",bn:"রংধনুটা ছিল ক্ষণস্থায়ী; এক মিনিটের মধ্যেই আকাশ থেকে মিলিয়ে গেল।"},
    {text:"Even when the power went out during the exam, Nabila kept her ___ and finished by candlelight.",answer:"equanimity",word:"equanimity",bn:"পরীক্ষার সময় বিদ্যুৎ চলে গেলেও নাবিলা মাথা ঠান্ডা রাখল এবং মোমবাতির আলোয় লেখা শেষ করল।"},
    {text:"When the reporter asked whether the bridge would open on time, the engineer began to ___ .",answer:"equivocate",word:"equivocate",bn:"সাংবাদিক যখন জিজ্ঞেস করলেন সেতুটি সময়মতো খুলবে কি না, প্রকৌশলী তখন গোঁজামিল দিতে শুরু করলেন।"},
    {text:"The ___ old librarian seemed to have read every book on the shelves.",answer:"erudite",word:"erudite",bn:"বিদ্বান বৃদ্ধ লাইব্রেরিয়ান যেন তাকের প্রতিটি বইই পড়ে ফেলেছেন।"},
    {text:"Only a handful of experts understand the ___ rules of that ancient board game.",answer:"esoteric",word:"esoteric",bn:"সেই প্রাচীন বোর্ড-খেলার গূঢ় নিয়মগুলো হাতে গোনা কয়েকজন বিশেষজ্ঞই বোঝেন।"},
    {text:"At the farewell programme, the principal gave a warm ___ praising the retiring teacher's forty years of service.",answer:"eulogy",word:"eulogy",bn:"বিদায় অনুষ্ঠানে অধ্যক্ষ অবসরে যাওয়া শিক্ষকের চল্লিশ বছরের সেবার প্রশংসা করে আন্তরিক বক্তব্য দিলেন।"},
    {text:"“Between jobs” is a polite ___ for “unemployed”.",answer:"euphemism",word:"euphemism",bn:"“unemployed” (বেকার)-এর ভদ্র বিকল্প হলো “between jobs”।"},
    {text:"Building houses on the riverbank will ___ the flooding in the town below.",answer:"exacerbate",word:"exacerbate",bn:"নদীর পাড়ে ঘরবাড়ি বানালে নিচের শহরের বন্যা পরিস্থিতি আরও খারাপ হবে।"},
    {text:"The CCTV footage ___ the bus driver; it showed the other car had run the red light.",answer:"exculpated",word:"exculpate",bn:"সিসিটিভি ফুটেজ বাসচালককে দোষমুক্ত করল; তাতে দেখা গেল অন্য গাড়িটিই লাল বাতি অমান্য করেছিল।"},
    {text:"The flood created an ___ : thousands of families needed food and shelter at once.",answer:"exigency",word:"exigency",bn:"বন্যা এক জরুরি অবস্থা তৈরি করল: হাজার হাজার পরিবারের তখনই খাবার ও আশ্রয় দরকার ছিল।"},
    {text:"Based on ___ from the last five years, the company expects its sales to double.",answer:"extrapolation",word:"extrapolation",bn:"গত পাঁচ বছরের তথ্য থেকে অনুমান করে কোম্পানিটি আশা করছে তাদের বিক্রি দ্বিগুণ হবে।"}
  ]
});
