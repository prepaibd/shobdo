/* Word Smart · Quick Quiz #55 */
VOCAB.addWords([
  {id:"libel",word:"libel",pos:"noun",posBn:"বিশেষ্য",def:"written injurious falsehood",bn:"লিখিত মানহানি",full:"A false written or printed statement that damages someone's reputation.",ex:"The minister sued the newspaper for libel.",exb:"মন্ত্রী লিখিত মানহানির দায়ে পত্রিকাটির বিরুদ্ধে মামলা করলেন।",hook:"libel → library (বই) → লেখায় মানহানি। slander = মুখে মানহানি।"},
  {id:"slander",word:"slander",pos:"noun",posBn:"বিশেষ্য",def:"spoken injurious falsehood",bn:"মৌখিক মানহানি, অপবাদ",full:"A false spoken statement that damages someone's reputation.",ex:"Spreading lies about a neighbour at the tea stall is slander.",exb:"চায়ের দোকানে প্রতিবেশীর নামে মিথ্যা রটানো হলো মৌখিক মানহানি।",hook:"Slander = Spoken (দুটোই S)। defame (#৩০), malign (#১৫)-এর আত্মীয়।"},
  {id:"litigate",word:"litigate",pos:"verb",posBn:"ক্রিয়া",def:"try in court",bn:"মামলা করা, আদালতে লড়া",full:"To take a dispute to a court of law.",ex:"Instead of settling, the two companies chose to litigate.",exb:"মীমাংসা না করে দুই কোম্পানি মামলা লড়ার সিদ্ধান্ত নিল।",hook:"litigation = মামলা-মোকদ্দমা। litigant = মামলার পক্ষ।"},
  {id:"loquacious",word:"loquacious",pos:"adjective",posBn:"বিশেষণ",def:"talking a lot",bn:"বাচাল, বেশি কথা বলে এমন",full:"Talking a great deal.",ex:"The loquacious guide never stopped talking during the tour.",exb:"বাচাল গাইড পুরো ভ্রমণে একটুও কথা থামাননি।",hook:"loqu = কথা বলা (colloquial #২২, eloquent)। garrulous (#৪৫)-এর সমার্থক; laconic (#৫৪)-এর উল্টো।"},
  {id:"lucid",word:"lucid",pos:"adjective",posBn:"বিশেষণ",def:"easy to understand",bn:"স্বচ্ছ, প্রাঞ্জল",full:"Clearly expressed and easy to understand; also, thinking clearly.",ex:"The teacher gave a lucid explanation of photosynthesis.",exb:"শিক্ষক সালোকসংশ্লেষণের প্রাঞ্জল ব্যাখ্যা দিলেন।",hook:"lux = আলো → আলোয় পরিষ্কার। coherent (#২২)-এর আত্মীয়।"},
  {id:"lugubrious",word:"lugubrious",pos:"adjective",posBn:"বিশেষণ",def:"exaggeratedly mournful",bn:"অতিরিক্ত বিষণ্ণ, শোকাতুর",full:"Looking or sounding sad and gloomy, often too much so.",ex:"His lugubrious face made the party feel like a funeral.",exb:"তার বিষণ্ণ মুখ দেখে পার্টিটাকে শোকসভা মনে হচ্ছিল।",hook:"lugubrious শব্দটাই টেনে টেনে কাঁদো কাঁদো শোনায়।"},
  {id:"luminous",word:"luminous",pos:"adjective",posBn:"বিশেষণ",def:"giving off light",bn:"দীপ্তিমান, আলো ছড়ায় এমন",full:"Giving off light; shining.",ex:"The luminous hands of the clock glowed in the dark.",exb:"ঘড়ির দীপ্তিমান কাঁটাগুলো অন্ধকারে জ্বলজ্বল করছিল।",hook:"lumen = আলো (illuminate)। incandescent (#৪৯)-এর আত্মীয়।"}
]);

VOCAB.addLesson({
  id: "ws-q55", source: "wordsmart", order: 55,
  title: "Quick Quiz #55", titleBn: "কুইক কুইজ #৫৫",
  words: ["libel","slander","litigate","loquacious","lucid","lugubrious","luminous"],
  note: {
    title: "Light (luc-, lum-) and talk (loqu-)",
    titleBn: "আলো (luc-, lum-) আর কথা (loqu-)",
    intro: "Two light words, one talk word, and a famous legal pair.",
    introBn: "দুটি আলোর শব্দ, একটি কথার শব্দ, আর আইনের একটি বিখ্যাত জোড়া।",
    roots: [
      {parts:"lux, lucis",gloss:"light",word:"lucid",bn:"আলোকিত = স্বচ্ছ"},
      {parts:"lumen",gloss:"light",word:"luminous",bn:"আলো ছড়ায়"},
      {parts:"loqui",gloss:"speak",word:"loquacious",bn:"বেশি কথা বলে"},
      {parts:"lis, litis",gloss:"lawsuit",word:"litigate",bn:"মামলা করা"},
      {parts:"libellus",gloss:"little book",word:"libel",bn:"লিখিত মানহানি"}
    ],
    points: [
      ["libel is written (think library); slander is spoken (S for spoken).","libel লিখিত (library মনে করো); slander মৌখিক (S = spoken)।"],
      ["lucid = clear to understand. luminous = giving off light. Both come from “light”.","lucid = বোঝা সহজ। luminous = আলো ছড়ায়। দুটোরই মূল “আলো”।"]
    ]
  },
  match: {
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["giving off light","আলো ছড়ায়"], b:["try in court","আদালতে বিচার করা"], c:["exaggeratedly mournful","অতিরিক্ত শোকাতুর"], d:["easy to understand","সহজবোধ্য"],
      e:["written injurious falsehood","লিখিত ক্ষতিকর মিথ্যা"], f:["spoken injurious falsehood","মৌখিক ক্ষতিকর মিথ্যা"], g:["talking a lot","অনেক কথা বলা"]
    },
    items: [
      {word:"libel",answer:"e"},{word:"slander",answer:"f"},{word:"litigate",answer:"b"},{word:"loquacious",answer:"g"},
      {word:"lucid",answer:"d"},{word:"lugubrious",answer:"c"},{word:"luminous",answer:"a"}
    ]
  },
  sentences: [
    {text:"The false article printed about the doctor was clear ___ .",answer:"libel",word:"libel",bn:"চিকিৎসককে নিয়ে ছাপা মিথ্যা প্রতিবেদনটি ছিল স্পষ্ট লিখিত মানহানি।"},
    {text:"The lies he told aloud about his rival at the meeting amounted to ___ .",answer:"slander",word:"slander",bn:"সভায় প্রতিদ্বন্দ্বী সম্পর্কে সে যে মিথ্যা কথাগুলো মুখে বলল, তা মৌখিক মানহানির শামিল।"},
    {text:"The brothers decided to ___ rather than divide the land peacefully.",answer:"litigate",word:"litigate",bn:"ভাইয়েরা শান্তিপূর্ণভাবে জমি ভাগ না করে মামলা লড়ার সিদ্ধান্ত নিলেন।"},
    {text:"The ___ passenger told me about all twelve of his cousins.",answer:"loquacious",word:"loquacious",bn:"বাচাল যাত্রীটি আমাকে তার বারোজন চাচাতো ভাইয়ের গল্প শোনাল।"},
    {text:"Her essay was so ___ that even a child could follow it.",answer:"lucid",word:"lucid",bn:"তার রচনাটি এতটাই প্রাঞ্জল যে একটা শিশুও বুঝতে পারবে।"},
    {text:"The ___ music made the sad film even sadder.",answer:"lugubrious",word:"lugubrious",bn:"বিষণ্ণ সংগীত দুঃখের ছবিটিকে আরও করুণ করে তুলল।"},
    {text:"Fireflies made the dark field look ___ .",answer:"luminous",word:"luminous",bn:"জোনাকিরা অন্ধকার মাঠটিকে আলোকিত করে তুলল।"}
  ]
});
