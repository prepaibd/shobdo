/* Barron's 333 · A · Part 1 (abate – amalgamate) */
VOCAB.addWords([
  {id:"aberrant",word:"aberrant",pos:"adjective",posBn:"বিশেষণ",def:"abnormal, or deviant",bn:"অস্বাভাবিক, বিপথগামী",full:"Different from what is normal or expected, often in a way that is worrying.",ex:"The scientist repeated the test because one aberrant result did not match the others.",exb:"একটি অস্বাভাবিক ফল বাকিগুলোর সাথে না মেলায় বিজ্ঞানী পরীক্ষাটি আবার করলেন।",hook:"ab (দূরে) + errare (ভুল পথে ঘোরা) → ঠিক পথ থেকে সরে যাওয়া। error শব্দটিও একই মূল থেকে। aberration (#১)-এর বিশেষণ রূপ।"},
  {id:"abeyance",word:"abeyance",pos:"noun",posBn:"বিশেষ্য",def:"suspended action",bn:"স্থগিত অবস্থা, মুলতবি",full:"A state of temporary suspension; something that is “in abeyance” is put on hold for now.",ex:"The road-widening plan is in abeyance until the monsoon ends.",exb:"বর্ষা শেষ না হওয়া পর্যন্ত রাস্তা প্রশস্ত করার পরিকল্পনাটি স্থগিত আছে।",hook:"প্রায় সবসময় “in abeyance” রূপে আসে = আপাতত থেমে আছে। ছবি: জাহাজ উপসাগরে (bay) নোঙর ফেলে অপেক্ষা করছে, যাত্রা স্থগিত।"},
  {id:"abscond",word:"abscond",pos:"verb",posBn:"ক্রিয়া",def:"depart secretly and hide",bn:"গা ঢাকা দেওয়া, পালিয়ে যাওয়া",full:"To leave suddenly and secretly, usually to escape the law or to run off with something that is not yours.",ex:"The manager of the fake savings company absconded with the villagers' money.",exb:"ভুয়া সঞ্চয় কোম্পানির ম্যানেজার গ্রামবাসীর টাকা নিয়ে গা ঢাকা দিল।",hook:"abs (দূরে) + condere (রাখা, লুকানো) → নিজেকে দূরে লুকিয়ে ফেলা। প্রায়ই “abscond with the money” = টাকা নিয়ে উধাও।"},
  {id:"abstemious",word:"abstemious",pos:"adjective",posBn:"বিশেষণ",def:"sparing in eating and drinking; temperate",bn:"মিতাহারী, সংযমী",full:"Careful not to eat or drink too much; moderate in enjoying pleasures.",ex:"Even at wedding feasts, my abstemious grandfather takes only a little rice and dal.",exb:"বিয়ের দাওয়াতেও আমার মিতাহারী দাদা অল্প একটু ভাত আর ডাল নেন।",hook:"abs (দূরে) + temetum (কড়া পানীয়) → পানীয় থেকে দূরে থাকা, পরে খাওয়াদাওয়াতেও সংযম। abstinent (#২), temperate (#৮১)-এর কাছাকাছি।"},
  {id:"amalgamate",word:"amalgamate",pos:"verb",posBn:"ক্রিয়া",def:"combine; unite in one body",bn:"একীভূত করা, মিলিয়ে এক করা",full:"To join two or more things, such as companies, groups or ideas, into one.",ex:"The two small banks amalgamated to form one stronger bank.",exb:"ছোট দুটি ব্যাংক একীভূত হয়ে একটি শক্তিশালী ব্যাংক গঠন করল।",hook:"amalgam = পারদের সাথে অন্য ধাতুর মিশ্রণ (দাঁতের ফিলিংয়ে ব্যবহৃত হয়) → মিশিয়ে এক করা। coalesce (#২২)-এর সমার্থক।"}
]);

VOCAB.addLesson({
  id: "b333-a-1", source: "barrons333", order: 1, group: "A",
  title: "A · Part 1", titleBn: "A · পর্ব ১",
  words: ["abate","aberrant","abeyance","abscond","abstemious","admonish","adulterate","aesthetic","aggregate","alacrity","alleviate","amalgamate"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    abate: {def:"subside, or moderate"},
    admonish: {def:"warn; reprove"},
    adulterate: {def:"make impure by adding inferior or tainted substances"},
    aesthetic: {def:"artistic"},
    aggregate: {def:"gather; accumulate",bn:"(ক্রিয়া) একত্র করা, জড়ো করা",ex:"The app aggregates bus timetables from every company into one list.",exb:"অ্যাপটি সব কোম্পানির বাসের সময়সূচি একত্র করে এক তালিকায় দেখায়।"},
    alacrity: {def:"cheerful promptness; eagerness"},
    alleviate: {def:"relieve"}
  },
  note: {
    title: "ab- (away from) and ad- (toward)",
    titleBn: "ab- (দূরে) আর ad- (দিকে)",
    intro: "Three words here start with Latin ab-/abs-, “away from”. Two others hide ad-, “toward”: admonish, and aggregate, where ad- changed to ag- to match the next letter.",
    introBn: "এখানে তিনটি শব্দ ল্যাটিন ab-/abs- (দূরে) দিয়ে শুরু। আরও দুটিতে লুকিয়ে আছে ad- (দিকে): admonish, আর aggregate, যেখানে পরের অক্ষরের সাথে মিল রেখে ad- হয়ে গেছে ag-।",
    roots: [
      {parts:"ab + errare",gloss:"away + wander",word:"aberrant",bn:"পথ থেকে সরে যাওয়া"},
      {parts:"abs + condere",gloss:"away + hide",word:"abscond",bn:"গা ঢাকা দেওয়া"},
      {parts:"abs + temetum",gloss:"away + strong drink",word:"abstemious",bn:"মিতাহারী"},
      {parts:"ad + monere",gloss:"toward + warn",word:"admonish",bn:"সতর্ক করা"},
      {parts:"ad + grex",gloss:"toward + flock",word:"aggregate",bn:"এক পালে জড়ো করা"}
    ],
    points: [
      ["aberrant is the adjective of aberration (#1): both mean going off the normal path.","aberrant হলো aberration (#১)-এর বিশেষণ রূপ: দুটোই স্বাভাবিক পথ থেকে সরে যাওয়া বোঝায়।"],
      ["abate = to become less by itself (the storm abated). alleviate = to make pain or a problem less (alleviate suffering).","abate = নিজে থেকে কমে আসা (ঝড় কমল)। alleviate = কষ্ট বা সমস্যা কমানো (দুর্ভোগ লাঘব করা)।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["depart secretly and hide","গোপনে পালানো"], b:["gather; accumulate","জড়ো করা"], c:["make impure by adding inferior or tainted substances","ভেজাল মেশানো"],
      d:["abnormal, or deviant","অস্বাভাবিক"], e:["relieve","লাঘব করা"], f:["sparing in eating and drinking; temperate","মিতাহারী"],
      g:["cheerful promptness; eagerness","সাগ্রহ তৎপরতা"], h:["subside, or moderate","কমে আসা"], i:["combine; unite in one body","একীভূত করা"],
      j:["artistic","নান্দনিক"], k:["suspended action","স্থগিত অবস্থা"], l:["warn; reprove","সতর্ক করা"]
    },
    items: [
      {word:"abate",answer:"h"},{word:"aberrant",answer:"d"},{word:"abeyance",answer:"k"},{word:"abscond",answer:"a"},
      {word:"abstemious",answer:"f"},{word:"admonish",answer:"l"},{word:"adulterate",answer:"c"},{word:"aesthetic",answer:"j"},
      {word:"aggregate",answer:"b"},{word:"alacrity",answer:"g"},{word:"alleviate",answer:"e"},{word:"amalgamate",answer:"i"}
    ]
  },
  sentences: [
    {text:"We waited under the tin roof of the tea stall until the rain ___ .",answer:"abated",word:"abate",bn:"চা-দোকানের টিনের চালার নিচে আমরা বৃষ্টি কমে না আসা পর্যন্ত অপেক্ষা করলাম।"},
    {text:"The scientists threw out one ___ reading that was far from all the others.",answer:"aberrant",word:"aberrant",bn:"অন্য সব মাপ থেকে অনেক দূরে থাকা একটি অস্বাভাবিক রিডিং বিজ্ঞানীরা বাদ দিলেন।"},
    {text:"The plan to build a new bridge is in ___ until the government finds the money.",answer:"abeyance",word:"abeyance",bn:"সরকার টাকা জোগাড় না করা পর্যন্ত নতুন সেতু বানানোর পরিকল্পনাটি স্থগিত আছে।"},
    {text:"The cashier ___ with the shop's money and has not been seen since.",answer:"absconded",word:"abscond",bn:"ক্যাশিয়ার দোকানের টাকা নিয়ে গা ঢাকা দিয়েছে, তারপর থেকে তাকে আর দেখা যায়নি।"},
    {text:"My ___ uncle ate just one piece of hilsa while everyone else had three.",answer:"abstemious",word:"abstemious",bn:"সবাই যখন তিন টুকরো ইলিশ খেল, আমার মিতাহারী চাচা খেলেন মাত্র এক টুকরো।"},
    {text:"The librarian ___ the students for talking loudly in the reading room.",answer:"admonished",word:"admonish",bn:"পাঠকক্ষে জোরে কথা বলায় লাইব্রেরিয়ান শিক্ষার্থীদের সতর্ক করে দিলেন।"},
    {text:"Some dishonest traders ___ turmeric powder with cheap coloured dust.",answer:"adulterate",word:"adulterate",bn:"কিছু অসৎ ব্যবসায়ী হলুদের গুঁড়ায় সস্তা রঙিন ধুলা মিশিয়ে ভেজাল করে।"},
    {text:"The architect chose red brick for ___ reasons: it simply looks beautiful against the green trees.",answer:"aesthetic",word:"aesthetic",bn:"স্থপতি নান্দনিক কারণে লাল ইট বেছে নিলেন: সবুজ গাছের পাশে এটা দেখতে সুন্দর লাগে।"},
    {text:"The website ___ news from dozens of newspapers onto a single page.",answer:"aggregates",word:"aggregate",bn:"ওয়েবসাইটটি কয়েক ডজন পত্রিকার খবর একত্র করে এক পাতায় দেখায়।"},
    {text:"When the coach asked for volunteers to carry the kit, the boys agreed with ___ .",answer:"alacrity",word:"alacrity",bn:"কোচ কিট বয়ে নেওয়ার জন্য স্বেচ্ছাসেবক চাইলে ছেলেরা সাগ্রহে, সঙ্গে সঙ্গে রাজি হলো।"},
    {text:"Volunteers handed out dry food and clean water to ___ the suffering of the flood victims.",answer:"alleviate",word:"alleviate",bn:"বন্যাদুর্গতদের দুর্ভোগ লাঘব করতে স্বেচ্ছাসেবকেরা শুকনো খাবার আর বিশুদ্ধ পানি বিতরণ করলেন।"},
    {text:"The two small cricket clubs decided to ___ and form one stronger club.",answer:"amalgamate",word:"amalgamate",bn:"ছোট দুটি ক্রিকেট ক্লাব একীভূত হয়ে একটি শক্তিশালী ক্লাব গড়ার সিদ্ধান্ত নিল।"}
  ]
});
