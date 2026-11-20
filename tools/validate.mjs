#!/usr/bin/env node
/* Shobdo content validator. Dev tool only: the site never loads this file.
   Run from the repository root:   node tools/validate.mjs
   It loads the data files in the same order as index.html and prints NO ERRORS or a list of problems. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");
const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

/* ---------- load the data the way index.html does ---------- */
const html = read("index.html");
const scripts = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map(m => m[1]);
const dataScripts = scripts.filter(s => s === "assets/registry.js" || s.startsWith("data/"));
const ctx = { window: {} };
ctx.window = ctx;
vm.createContext(ctx);

const wordFile = {};          // word id → file that added it
let current = "";
for (const s of dataScripts) {
  current = s;
  vm.runInContext(read(s), ctx, { filename: s });
  if (s === "assets/registry.js") {
    // wrap the registry so every call is recorded with the file that made it
    const V = ctx.VOCAB, addWords = V.addWords.bind(V), addLesson = V.addLesson.bind(V);
    V.addWords = list => {
      for (const w of list) {
        if (wordFile[w.id]) err(current, `word id "${w.id}" is added again (first added in ${wordFile[w.id]}); addWords would overwrite it`);
        else wordFile[w.id] = current;
      }
      addWords(list);
    };
    V.addLesson = l => { l.__file = current; addLesson(l); };
  }
}
const V = ctx.VOCAB;

// every lesson file on disk must be registered in index.html
for (const dir of fs.readdirSync(path.join(ROOT, "data"), { withFileTypes: true }).filter(d => d.isDirectory())) {
  for (const f of fs.readdirSync(path.join(ROOT, "data", dir.name)).filter(f => f.endsWith(".js"))) {
    const rel = `data/${dir.name}/${f}`;
    if (!dataScripts.includes(rel)) err(rel, "file is not loaded in index.html");
  }
}
// Barron's files must come after the Word Smart files
{
  const lastWS = Math.max(...dataScripts.map((s, i) => (s.startsWith("data/wordsmart/") ? i : -1)));
  dataScripts.forEach((s, i) => { if (s.startsWith("data/barrons333/") && i < lastWS) err(s, "must be loaded after the Word Smart files"); });
}

/* ---------- helpers ---------- */
const WORD_FIELDS = ["id", "word", "pos", "posBn", "def", "bn", "full", "ex", "exb", "hook"];
const LESSON_FIELDS = ["id", "source", "order", "title", "titleBn", "words", "note", "match", "sentences"];
const filled = v => typeof v === "string" ? v.trim() !== "" : v != null;
const bnDigits = s => s.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));
const norm = s => String(s).toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, " ").trim();
const sourceOf = id => V.sources.find(s => s.id === id);
const kindOf = id => (sourceOf(id) || {}).kind || "quickquiz";
const wsLessonByOrder = n => V.lessons.find(l => l.source === "wordsmart" && l.order === n);

/* "a"/"an" agreement: true when the word starts with a vowel sound */
const YOU_SOUND = /^(uni(?!n)|us[aeu]|ut[iuo]|ur[aei]|eu|ew|one(?![r])|once|uk)/; // unique, usual, utopia, urine, eulogy, one… (not onerous)
const SILENT_H = /^(honest|honor|honour|hour|heir)/;
const vowelSound = w => { w = w.toLowerCase(); if (SILENT_H.test(w)) return true; if (YOU_SOUND.test(w)) return false; return /^[aeiou]/.test(w); };

/* "(#N)" / "(#বাংলা N)" references: the word right before must be in that Word Smart lesson.
   strict (Barron's files): exactly a word id of that lesson.
   lenient (Word Smart, written earlier): another form (alleged → allege) or a short phrase (abject poverty) is accepted. */
const plain = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
function checkRefs(where, text, strict) {
  if (typeof text !== "string") return;
  for (const m of text.matchAll(/\(#([0-9০-৯]+)\)/g)) {
    const n = Number(bnDigits(m[1])), l = wsLessonByOrder(n);
    const before = text.slice(0, m.index).match(/([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ-]*)(?:\s+([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ-]*))?\s*$/);
    if (!l) { err(where, `"(#${m[1]})": there is no Word Smart lesson ${n}`); continue; }
    if (!before) { if (strict) err(where, `"(#${m[1]})" needs the English word right before it`); continue; }
    const last = plain(before[2] || before[1]), prev = before[2] ? plain(before[1]) : null;
    const form = (a, b) => a === b || a.startsWith(b) || b.startsWith(a);
    const ok = strict ? l.words.includes(last) : l.words.some(w => form(w, last) || (prev && form(w, prev)));
    if (!ok) err(where, `"${last} (#${m[1]})": Word Smart lesson ${n} does not contain "${last}"`);
  }
}

/* Barron's quiz/def rule: the full Barron's meaning, or a run of its ";"-separated clauses
   (first clause when the meaning is long, or a distinguishing clause). */
function fitsMeaning(def, meaning) {
  const d = norm(def), cl = meaning.split(";").map(norm).filter(Boolean);
  if (d === norm(meaning)) return true;
  for (let i = 0; i < cl.length; i++) for (let j = i + 1; j <= cl.length; j++) if (cl.slice(i, j).join("; ") === d) return true;
  return false;
}

/* ---------- words ---------- */
for (const w of Object.values(V.words)) {
  for (const f of WORD_FIELDS) if (!filled(w[f])) err(wordFile[w.id] || "?", `word "${w.id}" is missing "${f}"`);
  if (w.id !== String(w.id).toLowerCase()) err(wordFile[w.id], `word id "${w.id}" is not lowercase`);
  checkRefs(`${wordFile[w.id]} · ${w.id}.hook`, w.hook, String(wordFile[w.id]).startsWith("data/barrons333/"));
}

/* ---------- lessons ---------- */
const lessonIds = new Set();
for (const l of V.lessons) {
  const where = `${l.__file} · ${l.id}`;
  if (lessonIds.has(l.id)) err(where, "duplicate lesson id"); lessonIds.add(l.id);
  for (const f of LESSON_FIELDS) if (!filled(l[f])) err(where, `lesson is missing "${f}"`);
  if (!sourceOf(l.source)) err(where, `unknown source "${l.source}"`);
  const words = l.words || [];
  if (new Set(words).size !== words.length) err(where, "a word is listed twice in words");
  for (const id of words) if (!V.words[id]) err(where, `word "${id}" does not exist`);

  // note
  const n = l.note, strict = l.source === "barrons333";
  if (n) {
    for (const f of ["title", "titleBn", "intro", "introBn"]) { if (!filled(n[f])) err(where, `note is missing "${f}"`); checkRefs(`${where} · note.${f}`, n[f], strict); }
    for (const r of n.roots || []) { for (const f of ["parts", "gloss", "word", "bn"]) if (!filled(r[f])) err(where, `note root is missing "${f}"`); checkRefs(`${where} · note.roots`, r.word, strict); }
    for (const p of n.points || []) { if (!Array.isArray(p) || p.length !== 2 || !p.every(filled)) err(where, "each note point must be an [English, Bangla] pair"); else p.forEach(x => checkRefs(`${where} · note.points`, x, strict)); }
  }

  // match
  const m = l.match;
  if (m) {
    const items = m.items || [], opts = m.options || {};
    const iw = items.map(x => x.word);
    if (JSON.stringify(iw) !== JSON.stringify(words)) err(where, `match.items words must equal the lesson words in the same order`);
    const used = {};
    for (const it of items) {
      if (!opts[it.answer]) err(where, `match answer "${it.answer}" for "${it.word}" is not an option`);
      used[it.answer] = (used[it.answer] || 0) + 1;
    }
    for (const [k, o] of Object.entries(opts)) {
      const cnt = o[2] || 1;
      if (!filled(o[0]) || !filled(o[1])) err(where, `option ${k} needs [definition, Bangla hint]`);
      if ((used[k] || 0) !== cnt) err(where, `option ${k} is used ${used[k] || 0} time(s), expected ${cnt}`);
    }
  }

  // sentences
  const ss = l.sentences || [], answers = new Set(), sw = new Set();
  for (const [i, x] of ss.entries()) {
    const sw_ = `${where} · sentence ${i + 1}`;
    const blanks = (x.text || "").split("___").length - 1;
    if (blanks !== 1) err(sw_, `must have exactly one ___ (has ${blanks})`);
    if (!filled(x.answer)) err(sw_, "missing answer");
    if (answers.has(x.answer)) err(sw_, `answer "${x.answer}" is used twice in this lesson`); answers.add(x.answer);
    if (!words.includes(x.word)) err(sw_, `word "${x.word}" is not in this lesson`);
    if (sw.has(x.word)) err(sw_, `word "${x.word}" has two sentences`); sw.add(x.word);
    const k = Math.min(4, String(x.word).length);
    if (x.answer && x.word && x.answer.toLowerCase().slice(0, k) !== String(x.word).slice(0, k)) err(sw_, `answer "${x.answer}" is not a form of "${x.word}"`);
    if (!filled(x.bn)) err(sw_, "bn is empty");
    const art = (x.text || "").match(/\b(a|an)\s+___/i);
    if (art && x.answer) {
      const want = vowelSound(x.answer) ? "an" : "a";
      if (art[1].toLowerCase() !== want) err(sw_, `"${art[1]} ___" does not agree with "${x.answer}" (use "${want}")`);
    }
  }

  // meanings overrides
  for (const [id, o] of Object.entries(l.meanings || {})) {
    if (!words.includes(id)) err(where, `meanings has "${id}", which is not in this lesson`);
    if (!filled(o.def)) err(where, `meanings.${id} is missing "def"`);
    for (const f of Object.keys(o)) if (!["def", "bn", "ex", "exb"].includes(f)) err(where, `meanings.${id} has unknown field "${f}"`);
  }
  if (kindOf(l.source) === "alphabetical" && !filled(l.group)) err(where, `lesson is missing "group"`);
}

/* ---------- Barron's 333 against docs/barrons333-groups.json ---------- */
const J = JSON.parse(read("docs/barrons333-groups.json"));
const bLessons = V.lessons.filter(l => l.source === "barrons333");
const gById = Object.fromEntries(J.groups.map((g, i) => [g.id, { ...g, order: i + 1 }]));
const mean = {}; for (const g of J.groups) for (const w of g.words) mean[w.word] = w;

for (const l of bLessons) {
  const where = `${l.__file} · ${l.id}`, g = gById[l.id];
  if (!g) { err(where, "lesson id is not a group id in docs/barrons333-groups.json"); continue; }
  if (l.__file !== `data/barrons333/${l.id}.js`) err(where, `file should be data/barrons333/${l.id}.js`);
  if (l.order !== g.order) err(where, `order is ${l.order}, expected ${g.order}`);
  if (l.title !== g.title) err(where, `title is "${l.title}", expected "${g.title}"`);
  if (l.titleBn !== g.titleBn) err(where, `titleBn is "${l.titleBn}", expected "${g.titleBn}"`);
  if (l.group !== g.letters) err(where, `group is "${l.group}", expected "${g.letters}"`);
  const exp = g.words.map(w => w.word);
  if (JSON.stringify(l.words) !== JSON.stringify(exp)) err(where, `words differ from the JSON group.\n    expected: ${exp.join(", ")}\n    got:      ${(l.words || []).join(", ")}`);
  if (l.match && l.match.instruction !== "Match each word with its meaning.") err(where, `match.instruction must be "Match each word with its meaning."`);
  if (l.match && l.match.instructionBn !== "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।") err(where, `match.instructionBn must be "প্রতিটি শব্দকে তার সঠিক অর্থের সাথে মেলাও।"`);

  for (const id of l.words || []) {
    const jw = mean[id]; if (!jw) continue;
    const shared = !!jw.alsoInWordSmart;
    if (shared) {
      if (wordFile[id] && wordFile[id].startsWith("data/barrons333/")) err(where, `"${id}" is a Word Smart word; Barron's must not add it again`);
      if (!(l.meanings && l.meanings[id])) err(where, `shared word "${id}" needs a meanings override`);
      else if (!fitsMeaning(l.meanings[id].def, jw.barronsMeaning)) err(where, `meanings.${id}.def "${l.meanings[id].def}" does not match Barron's "${jw.barronsMeaning}"`);
    } else {
      if (wordFile[id] !== l.__file) err(where, `new word "${id}" must be added by this lesson's file (added by ${wordFile[id] || "nobody"})`);
      else if (!fitsMeaning(V.words[id].def, jw.barronsMeaning)) err(where, `"${id}".def "${V.words[id].def}" does not match Barron's "${jw.barronsMeaning}"`);
      if (jw.posHint && V.words[id] && V.words[id].pos !== jw.posHint) err(where, `"${id}".pos is "${V.words[id].pos}", the list says "${jw.posHint}"`);
    }
  }
  // every quiz option definition must come from the Barron's meaning of each word that uses it
  if (l.match) for (const it of l.match.items || []) {
    const o = (l.match.options || {})[it.answer], jw = mean[it.word];
    if (o && jw && !fitsMeaning(o[0], jw.barronsMeaning)) err(where, `quiz option ${it.answer} "${o[0]}" for "${it.word}" does not match Barron's "${jw.barronsMeaning}"`);
  }
  // two different options with the same text cannot be told apart
  if (l.match) {
    const seen = {};
    for (const [k, o] of Object.entries(l.match.options || {})) { const d = norm(o[0]); if (seen[d]) err(where, `options ${seen[d]} and ${k} have the same definition; use one option with count 2`); seen[d] = k; }
  }
}

/* ---------- report ---------- */
if (errors.length) {
  console.log(errors.map(e => "✗ " + e).join("\n"));
  console.log(`\n${errors.length} problem(s). Sources: ${V.sources.length}, lessons: ${V.lessons.length}, words: ${Object.keys(V.words).length}`);
  process.exit(1);
}
console.log(`NO ERRORS  (lessons: ${V.lessons.length}, words: ${Object.keys(V.words).length}, Barron's groups: ${bLessons.length}/${J.groups.length})`);
