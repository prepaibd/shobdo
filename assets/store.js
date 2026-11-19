/* Progress storage. Every read and write of a learner's progress goes through this object.
   Today it keeps progress in the browser (localStorage).
   When you add login + a database, replace the inside of these methods with API calls;
   the pages in app.js do not need to change. */
window.Store = (() => {
  const KEY = "shobdo:v1";
  let d = null;
  try { d = JSON.parse(localStorage.getItem(KEY)); } catch (e) { d = null; }
  if (!d || typeof d !== "object") d = {};
  d.lessons = d.lessons || {};
  d.review = d.review || {};

  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} };
  const L = id => d.lessons[id] || (d.lessons[id] = {});
  const REVIEW_DONE = 3; // "মনে আছে" this many times in a row → word leaves the review list

  return {
    REVIEW_DONE,
    // exercise answers (unfinished work is kept)
    answers: (id, kind) => (d.lessons[id] || {})["ans_" + kind] || [],
    saveAnswers(id, kind, vals) { L(id)["ans_" + kind] = vals; save(); },
    // best scores
    best: (id, kind) => (d.lessons[id] || {})["best_" + kind] || null,
    saveScore(id, kind, ok, total) {
      const l = L(id), b = l["best_" + kind];
      if (!b || ok > b[0]) l["best_" + kind] = [ok, total];
      save();
    },
    // where the learner was
    visit(id) { d.lastLesson = id; save(); },
    lastLesson: () => d.lastLesson || null,
    // review list: word id → how many times in a row it was remembered
    inReview: w => Object.prototype.hasOwnProperty.call(d.review, w),
    reviewIds: () => Object.keys(d.review),
    streak: w => d.review[w] || 0,
    addReview(w) { if (!(w in d.review)) { d.review[w] = 0; save(); } },
    toggleReview(w) { if (w in d.review) delete d.review[w]; else d.review[w] = 0; save(); return w in d.review; },
    reviewMark(w, ok) {
      if (!(w in d.review)) return false;
      if (ok) { d.review[w]++; if (d.review[w] >= REVIEW_DONE) delete d.review[w]; }
      else d.review[w] = 0;
      save();
      return w in d.review;
    },
    // interface language: "bn" (default) or "en"
    lang: () => (d.lang === "en" ? "en" : "bn"),
    setLang(l) { d.lang = l === "en" ? "en" : "bn"; save(); },
    // whole-progress helpers (useful when moving to a server)
    exportData: () => JSON.stringify(d),
    resetAll() { d = { lessons: {}, review: {}, lang: d.lang }; save(); }
  };
})();
