/* Barron's 333 · I · Part 3 (insensible – itinerary) */
VOCAB.addWords([
  {id:"insensible",word:"insensible",pos:"adjective",posBn:"বিশেষণ",def:"unconscious; unresponsive",bn:"অচেতন, সাড়াহীন",full:"Unconscious, or unable to feel or react to something.",ex:"After the long night shift, he fell into bed and lay insensible until noon.",exb:"লম্বা রাতের ডিউটির পর সে বিছানায় পড়ে দুপুর পর্যন্ত অচেতনের মতো ঘুমাল।",hook:"in (না) + sensible (অনুভব করতে পারে) → কিছুই টের পায় না। সাবধান: এর মানে ‘বোকামিপূর্ণ’ নয়; সেটা senseless।"},
  {id:"insularity",word:"insularity",pos:"noun",posBn:"বিশেষ্য",def:"narrow-mindedness; isolation",bn:"সংকীর্ণমনা ভাব, বিচ্ছিন্নতা",full:"Interest only in your own small group or place, and no interest in outside ideas.",ex:"The village's insularity began to fade once the new road brought visitors and the internet.",exb:"নতুন রাস্তা দিয়ে বাইরের লোক আর ইন্টারনেট আসার পর গ্রামের বিচ্ছিন্ন, সংকীর্ণ মানসিকতা কমতে লাগল।",hook:"insular (#৫২)-এর বিশেষ্য রূপ। ল্যাটিন insula = দ্বীপ (peninsula শব্দে আছে) → দ্বীপের মতো বিচ্ছিন্ন মন। parochial (#৬১), provincial (#৬৯)-এর কাছাকাছি।"},
  {id:"intransigence",word:"intransigence",pos:"noun",posBn:"বিশেষ্য",def:"refusal of any compromise",bn:"আপসহীনতা, একগুঁয়েমি",full:"A stubborn refusal to change your views or agree to any compromise.",ex:"Talks between the two clubs failed because of the owners' intransigence.",exb:"মালিকদের আপসহীনতার কারণে দুই ক্লাবের আলোচনা ভেস্তে গেল।",hook:"intransigent (#৫২)-এর বিশেষ্য রূপ। in (না) + transigere (আপস করা) → আপস করবে না। adamant (#৩), obdurate (#৬০)-এর কাছাকাছি।"},
  {id:"inured",word:"inured",pos:"adjective",posBn:"বিশেষণ",def:"accustomed; hardened",bn:"অভ্যস্ত, গা-সওয়া",full:"Used to something unpleasant, so that it no longer bothers you; usually “inured to”.",ex:"After years in Dhaka, she is inured to the noise of the traffic.",exb:"ঢাকায় বহু বছর কাটিয়ে যানবাহনের শব্দ এখন তার গা-সওয়া হয়ে গেছে।",hook:"সবসময় inured TO something = কোনো কষ্টে গা-সওয়া হয়ে যাওয়া। সয়ে সয়ে শক্ত হয়ে যাওয়া।"},
  {id:"irresolute",word:"irresolute",pos:"adjective",posBn:"বিশেষণ",def:"uncertain how to act; weak",bn:"দোদুল্যমান, দ্বিধাগ্রস্ত",full:"Unable to decide what to do; lacking firmness.",ex:"Irresolute at the shop counter, he picked up and put down five different shirts.",exb:"দোকানের কাউন্টারে দ্বিধাগ্রস্ত হয়ে সে পাঁচটা আলাদা শার্ট একবার তুলল, একবার রাখল।",hook:"resolute (#৭৩) = দৃঢ়প্রতিজ্ঞ; ir (না) + resolute = সিদ্ধান্ত নিতে পারে না।"}
]);

VOCAB.addLesson({
  id: "b333-i-3", source: "barrons333", order: 16, group: "I",
  title: "I · Part 3", titleBn: "I · পর্ব ৩",
  words: ["insensible","insinuate","insipid","insularity","intractable","intransigence","inundate","inured","invective","irascible","irresolute","itinerary"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    insinuate: {def:"hint; imply; creep in"},
    insipid: {def:"lacking in flavor; dull"},
    intractable: {def:"unruly; stubborn; unyielding"},
    inundate: {def:"overwhelm; flood; submerge"},
    invective: {def:"abuse"},
    irascible: {def:"irritable; easily angered"},
    itinerary: {def:"plan of a trip"}
  },
  note: {
    title: "in-/ir- (not), and one wave",
    titleBn: "in-/ir- (না), আর একটি ঢেউ",
    intro: "Most words here are in- (ir- before r), “not”, plus a word you may know: sensible, resolute, tractable. inundate is different: in + unda, “wave”.",
    introBn: "এখানে বেশিরভাগ শব্দ in- (r-এর আগে ir-), মানে “না”, আর একটি চেনা শব্দ: sensible, resolute, tractable। inundate আলাদা: in + unda (ঢেউ)।",
    roots: [
      {parts:"in + sapidus",gloss:"not + tasty",word:"insipid",bn:"স্বাদহীন"},
      {parts:"in + tractabilis",gloss:"not + manageable",word:"intractable",bn:"বশ মানে না"},
      {parts:"in + transigere",gloss:"not + compromise",word:"intransigence",bn:"আপসহীনতা"},
      {parts:"ir + resolutus",gloss:"not + firm",word:"irresolute",bn:"দ্বিধাগ্রস্ত"},
      {parts:"in + unda",gloss:"onto + wave",word:"inundate",bn:"ঢেউয়ে ভাসিয়ে দেওয়া"}
    ],
    points: [
      ["intractable = hard to control or solve (an intractable problem). intransigence = refusing to compromise (a person's attitude).","intractable = নিয়ন্ত্রণ বা সমাধান করা কঠিন (দুরূহ সমস্যা)। intransigence = আপস করতে অস্বীকৃতি (মানুষের মনোভাব)।"],
      ["insensible = unconscious or unaware. It does not mean “foolish”; that is senseless.","insensible = অচেতন বা টের পায় না। এর মানে ‘বোকামিপূর্ণ’ নয়; সেটা senseless।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["lacking in flavor; dull","পানসে"], b:["overwhelm; flood; submerge","প্লাবিত করা"], c:["uncertain how to act; weak","দ্বিধাগ্রস্ত"],
      d:["unruly; stubborn; unyielding","দুর্দমনীয়"], e:["abuse","গালিগালাজ"], f:["plan of a trip","ভ্রমণসূচি"],
      g:["unconscious; unresponsive","অচেতন"], h:["irritable; easily angered","খিটখিটে"], i:["narrow-mindedness; isolation","সংকীর্ণমনা ভাব"],
      j:["accustomed; hardened","গা-সওয়া"], k:["hint; imply; creep in","ইঙ্গিত করা"], l:["refusal of any compromise","আপসহীনতা"]
    },
    items: [
      {word:"insensible",answer:"g"},{word:"insinuate",answer:"k"},{word:"insipid",answer:"a"},{word:"insularity",answer:"i"},
      {word:"intractable",answer:"d"},{word:"intransigence",answer:"l"},{word:"inundate",answer:"b"},{word:"inured",answer:"j"},
      {word:"invective",answer:"e"},{word:"irascible",answer:"h"},{word:"irresolute",answer:"c"},{word:"itinerary",answer:"f"}
    ]
  },
  sentences: [
    {text:"Knocked over by a big wave, the swimmer lay ___ on the sand until the lifeguard revived him.",answer:"insensible",word:"insensible",bn:"বড় এক ঢেউয়ের ধাক্কায় সাঁতারু বালুর ওপর অচেতন হয়ে পড়ে রইলেন, যতক্ষণ না লাইফগার্ড তাঁর জ্ঞান ফেরালেন।"},
    {text:"By asking where I had “really” been last night, my brother tried to ___ that I had lied.",answer:"insinuate",word:"insinuate",bn:"কাল রাতে আমি “আসলে” কোথায় ছিলাম জিজ্ঞেস করে আমার ভাই ইঙ্গিতে বোঝাতে চাইল যে আমি মিথ্যা বলেছি।"},
    {text:"Without salt, the dal tasted ___ .",answer:"insipid",word:"insipid",bn:"লবণ ছাড়া ডালটা পানসে লাগল।"},
    {text:"The club's ___ kept it from welcoming new members from other neighbourhoods.",answer:"insularity",word:"insularity",bn:"সংকীর্ণমনা মনোভাবের কারণে ক্লাবটি অন্য পাড়ার নতুন সদস্যদের স্বাগত জানাতে পারেনি।"},
    {text:"The ___ pony refused to let anyone ride it.",answer:"intractable",word:"intractable",bn:"অবাধ্য টাট্টু ঘোড়াটি কাউকেই তার পিঠে চড়তে দিল না।"},
    {text:"The ___ of both sides meant the meeting ended without any agreement.",answer:"intransigence",word:"intransigence",bn:"দুই পক্ষের আপসহীনতার কারণে বৈঠকটি কোনো সমঝোতা ছাড়াই শেষ হলো।"},
    {text:"After the free-ticket offer, the website was ___ with requests and crashed.",answer:"inundated",word:"inundate",bn:"বিনামূল্যে টিকিটের অফারের পর ওয়েবসাইটে অনুরোধের বন্যা বয়ে গেল, আর সেটা অচল হয়ে পড়ল।"},
    {text:"Fishermen on the coast are ___ to cold winds and rough seas.",answer:"inured",word:"inured",bn:"উপকূলের জেলেদের কাছে ঠান্ডা বাতাস আর উত্তাল সমুদ্র গা-সওয়া।"},
    {text:"Instead of answering the question, the debater launched into personal ___ against his opponent.",answer:"invective",word:"invective",bn:"প্রশ্নের উত্তর না দিয়ে বিতার্কিক প্রতিপক্ষের বিরুদ্ধে ব্যক্তিগত গালিগালাজ শুরু করলেন।"},
    {text:"My ___ uncle loses his temper if his tea is even slightly cold.",answer:"irascible",word:"irascible",bn:"আমার খিটখিটে চাচা চা সামান্য ঠান্ডা হলেই মেজাজ হারান।"},
    {text:"Standing where the road split in two, the ___ traveller could not decide which way to go.",answer:"irresolute",word:"irresolute",bn:"রাস্তা যেখানে দুই ভাগ হয়েছে সেখানে দাঁড়িয়ে দ্বিধাগ্রস্ত পথিক ঠিক করতে পারছিলেন না কোন দিকে যাবেন।"},
    {text:"Our ___ for the school trip includes Paharpur, Mahasthangarh and a night in Bogura.",answer:"itinerary",word:"itinerary",bn:"আমাদের স্কুল-ভ্রমণের সূচিতে আছে পাহাড়পুর, মহাস্থানগড় আর বগুড়ায় এক রাত।"}
  ]
});
