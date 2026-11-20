/* Barron's 333 · A · Part 3 (appropriate – aver) */
VOCAB.addWords([
  {id:"artless",word:"artless",pos:"adjective",posBn:"বিশেষণ",def:"without guile; open and honest",bn:"সরল, কপটতাহীন",full:"Simple, natural and honest, with no wish to trick or impress anyone.",ex:"The child's artless answer, “I ate the sweets because they were tasty,” made everyone laugh.",exb:"শিশুটির সরল উত্তর, “মিষ্টিগুলো মজা ছিল বলে খেয়ে ফেলেছি,” শুনে সবাই হেসে উঠল।",hook:"এখানে art মানে চালাকি বা কৌশল (artful #১১ = ধূর্ত)। art + less = চালাকিহীন, সরল। guile (#৪৫) নেই বলে guileless।"},
  {id:"attenuate",word:"attenuate",pos:"verb",posBn:"ক্রিয়া",def:"make thinner",bn:"পাতলা করা, দুর্বল করা",full:"To make something thinner, weaker, or smaller in amount or force.",ex:"Thick walls attenuate the noise of the traffic outside.",exb:"পুরু দেয়াল বাইরের যানবাহনের শব্দ অনেকটা কমিয়ে দেয়।",hook:"ল্যাটিন tenuis = পাতলা (tenuous #৮২-এও আছে)। ad + tenuare → attenuate = পাতলা বা দুর্বল করা।"},
  {id:"audacious",word:"audacious",pos:"adjective",posBn:"বিশেষণ",def:"daring; bold",bn:"দুঃসাহসী, বেপরোয়া",full:"Willing to take bold risks; sometimes also shockingly bold or rude.",ex:"Chasing a big total, the openers began with an audacious attack on the fast bowlers.",exb:"বড় লক্ষ্য তাড়া করতে নেমে ওপেনাররা ফাস্ট বোলারদের ওপর দুঃসাহসী আক্রমণ দিয়ে শুরু করল।",hook:"ল্যাটিন audax = সাহসী (audere = সাহস করা)। audacity (#১২)-এর বিশেষণ রূপ।"},
  {id:"aver",word:"aver",pos:"verb",posBn:"ক্রিয়া",def:"assert confidently or declare",bn:"জোর দিয়ে বলা, দৃঢ়ভাবে দাবি করা",full:"To state firmly that something is true; in law, to state something formally as a fact.",ex:"The fish seller averred that the hilsa had been caught that very morning.",exb:"মাছবিক্রেতা জোর দিয়ে বললেন, ইলিশগুলো সেদিন সকালেই ধরা।",hook:"ল্যাটিন verus = সত্য (very, verify একই মূল) → aver = সত্য বলে ঘোষণা করা। averse (#৪) একেবারে আলাদা শব্দ!"}
]);

VOCAB.addLesson({
  id: "b333-a-3", source: "barrons333", order: 3, group: "A",
  title: "A · Part 3", titleBn: "A · পর্ব ৩",
  words: ["appropriate","arduous","artless","ascetic","assiduous","assuage","attenuate","audacious","austere","autonomous","aver"],
  /* Barron's meanings for the words that are also in Word Smart */
  meanings: {
    appropriate: {def:"acquire; take possession of for one’s own use"},
    arduous: {def:"hard; strenuous"},
    ascetic: {def:"practicing self-denial"},
    assiduous: {def:"diligent"},
    assuage: {def:"ease or lessen (pain); satisfy (hunger); soothe (anger)"},
    austere: {def:"forbiddingly stern; severely simple and unornamented"},
    autonomous: {def:"self-governing; independent"}
  },
  note: {
    title: "ad- in disguise: ap-, as-, at-",
    titleBn: "ছদ্মবেশী ad-: ap-, as-, at-",
    intro: "Latin ad-, “to, toward”, changes its d to match the next letter. Spot the double letter (pp, ss, tt) and you often find ad- plus a root you can guess.",
    introBn: "ল্যাটিন ad- (দিকে) পরের অক্ষরের সাথে মিল রেখে d বদলে ফেলে। জোড়া অক্ষর (pp, ss, tt) দেখলেই বুঝবে প্রায়ই সেখানে ad- আর একটা চেনা মূল লুকিয়ে আছে।",
    roots: [
      {parts:"ad + proprius",gloss:"to + one's own",word:"appropriate",bn:"নিজের করে নেওয়া"},
      {parts:"ad + sedere",gloss:"to + sit (sit beside)",word:"assiduous",bn:"লেগে থাকা, অধ্যবসায়ী"},
      {parts:"ad + suavis",gloss:"to + sweet",word:"assuage",bn:"মিষ্টি করে প্রশমিত করা"},
      {parts:"ad + tenuis",gloss:"to + thin",word:"attenuate",bn:"পাতলা করা"},
      {parts:"ad + verus",gloss:"to + true",word:"aver",bn:"সত্য বলে ঘোষণা"}
    ],
    points: [
      ["ascetic = a way of life without comforts. austere = a strict person, or a plain room or building.","ascetic = আরাম-আয়েশহীন জীবনযাপন। austere = কঠোর মানুষ, বা সাদামাটা ঘর বা ভবন।"],
      ["arduous describes the task (an arduous climb). assiduous describes the person (an assiduous student).","arduous কাজকে বোঝায় (কষ্টসাধ্য চড়াই)। assiduous মানুষকে বোঝায় (অধ্যবসায়ী ছাত্র)।"]
    ]
  },
  match: {
    instruction: "Match each word with its meaning.",
    instructionBn: "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।",
    options: {
      a:["practicing self-denial","আত্মসংযমী"], b:["daring; bold","দুঃসাহসী"], c:["hard; strenuous","কষ্টসাধ্য"],
      d:["ease or lessen (pain); satisfy (hunger); soothe (anger)","প্রশমিত করা"], e:["self-governing; independent","স্বায়ত্তশাসিত"], f:["acquire; take possession of for one’s own use","নিজের করে নেওয়া"],
      g:["assert confidently or declare","জোর দিয়ে বলা"], h:["make thinner","পাতলা করা"], i:["without guile; open and honest","সরল"],
      j:["forbiddingly stern; severely simple and unornamented","কঠোর, আড়ম্বরহীন"], k:["diligent","অধ্যবসায়ী"]
    },
    items: [
      {word:"appropriate",answer:"f"},{word:"arduous",answer:"c"},{word:"artless",answer:"i"},{word:"ascetic",answer:"a"},
      {word:"assiduous",answer:"k"},{word:"assuage",answer:"d"},{word:"attenuate",answer:"h"},{word:"audacious",answer:"b"},
      {word:"austere",answer:"j"},{word:"autonomous",answer:"e"},{word:"aver",answer:"g"}
    ]
  },
  /* ascetic is left out: it and austere can fill the same blanks (an ascetic / austere life) */
  sentences: [
    {text:"The older boys ___ the only cricket bat and would not let the younger ones play.",answer:"appropriated",word:"appropriate",bn:"বড় ছেলেরা একমাত্র ক্রিকেট ব্যাটটা নিজেদের দখলে নিয়ে নিল, ছোটদের খেলতেই দিল না।"},
    {text:"The climb up the steep, muddy path was so ___ that we had to rest every ten minutes.",answer:"arduous",word:"arduous",bn:"খাড়া, কাদামাখা পথ বেয়ে ওঠা এতটাই কষ্টসাধ্য ছিল যে প্রতি দশ মিনিটে আমাদের বিশ্রাম নিতে হচ্ছিল।"},
    {text:"With ___ honesty, the little boy told the guest, “Mum cleaned the house only because you were coming.”",answer:"artless",word:"artless",bn:"সরল সততায় ছোট ছেলেটি অতিথিকে বলে ফেলল, “তুমি আসবে বলেই আম্মু ঘর পরিষ্কার করেছে।”"},
    {text:"Nadia was so ___ that she practised bowling every evening, even during the Eid holidays.",answer:"assiduous",word:"assiduous",bn:"নাদিয়া এতটাই অধ্যবসায়ী ছিল যে ঈদের ছুটিতেও প্রতি সন্ধ্যায় বোলিং অনুশীলন করত।"},
    {text:"After the long walk in the sun, nothing could ___ our thirst like fresh coconut water.",answer:"assuage",word:"assuage",bn:"রোদে লম্বা হাঁটার পর ডাবের পানির মতো আর কিছুই আমাদের তৃষ্ণা মেটাতে পারত না।"},
    {text:"Heavy curtains ___ the noise from the busy road outside.",answer:"attenuate",word:"attenuate",bn:"ভারী পর্দাগুলো বাইরের ব্যস্ত রাস্তার শব্দ অনেকটা কমিয়ে দেয়।"},
    {text:"It was ___ of the young climber to try the peak alone, with no rope and no guide.",answer:"audacious",word:"audacious",bn:"দড়ি ও গাইড ছাড়াই একা চূড়ায় ওঠার চেষ্টা করা ছিল তরুণ পর্বতারোহীর দুঃসাহসী কাজ।"},
    {text:"The hostel room was ___ : bare white walls, an iron bed and a single table.",answer:"austere",word:"austere",bn:"হোস্টেলের ঘরটি ছিল একদম আড়ম্বরহীন: খালি সাদা দেয়াল, একটি লোহার খাট আর একটি টেবিল।"},
    {text:"The university is ___ , so it sets its own admission rules without asking the ministry.",answer:"autonomous",word:"autonomous",bn:"বিশ্ববিদ্যালয়টি স্বায়ত্তশাসিত, তাই মন্ত্রণালয়কে না জিজ্ঞেস করেই নিজের ভর্তির নিয়ম ঠিক করে।"},
    {text:"The witness ___ that she had seen the man at the bus stop at nine o'clock.",answer:"averred",word:"aver",bn:"সাক্ষী জোর দিয়ে বললেন যে তিনি লোকটিকে নয়টায় বাসস্ট্যান্ডে দেখেছেন।"}
  ]
});
