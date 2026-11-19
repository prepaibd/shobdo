/* TEMPLATE for a new lesson. This file is NOT loaded by the site.
   1. Copy it to data/<source-id>/<lesson-name>.js  (e.g. data/wordsmart/quick-quiz-02.js)
   2. Fill in the words and the lesson.
   3. Add one line to index.html, next to the other lesson files:
        <script src="data/wordsmart/quick-quiz-02.js"></script>
   Word ids must be unique across the whole site. If a word already exists in another
   lesson, don't add it again: just list its id in "words". */

VOCAB.addWords([
  {
    id: "example",            // lowercase, unique
    word: "example",
    pos: "noun",  posBn: "বিশেষ্য",   // verb ক্রিয়া · adjective বিশেষণ · adverb ক্রিয়াবিশেষণ
    def: "short quiz definition",
    bn: "বাংলা অর্থ",
    full: "A fuller English explanation.",
    ex: "An example sentence using the word.",
    exb: "উদাহরণ বাক্যের বাংলা।",
    hook: "মনে রাখার কৌশল (Bangla or English)."
  }
]);

VOCAB.addLesson({
  id: "ws-q02",               // unique lesson id: letters, digits, hyphens
  source: "wordsmart",        // must match an id in data/sources.js
  order: 2,                   // position in the source's lesson list
  title: "Quick Quiz #2",
  titleBn: "কুইক কুইজ #২",
  words: ["example"],

  // note: { ... }            // optional, see quick-quiz-01.js

  match: {                    // optional
    instruction: "Match each word in the first column with its definition in the second column.",
    instructionBn: "প্রথম কলামের প্রতিটি শব্দকে দ্বিতীয় কলামের সঠিক অর্থের সাথে মেলাও।",
    options: { a: ["short quiz definition", "বাংলা হিন্ট"] },
    items: [ { word: "example", answer: "a" } ]
  },

  sentences: [                // optional
    { text: "This is an ___ sentence.", answer: "example", word: "example", bn: "বাক্যের বাংলা অর্থ।" }
  ]
});
