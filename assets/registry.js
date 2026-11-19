/* The content registry. Every data file calls VOCAB.addSource / addWords / addLesson.
   Later, when content lives in a database, fill these same three lists from an API instead. */
window.VOCAB = {
  config: {
    name: "Shobdo",
    nameBn: "শব্দ",
    tagline: "Learn English vocabulary in English + বাংলা"
  },
  sources: [],
  words: {},
  lessons: [],
  addSource(s) { this.sources.push(s); },
  addWords(list) { for (const w of list) this.words[w.id] = w; },
  addLesson(l) { this.lessons.push(l); }
};
