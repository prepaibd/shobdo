/* Shobdo app: router + pages. Content comes from VOCAB (registry.js + data/*), progress from Store (store.js),
   interface text from I18N (i18n.js). Interface text is never written here directly: use t("key"). */
{
const V = window.VOCAB, S = window.Store, I = window.I18N;
const app = document.getElementById("app");
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const bnNum = n => String(n).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);

/* ---------- language ---------- */
let lang = S.lang();
const isBn = () => lang === "bn";
const N = n => (isBn() ? bnNum(n) : String(n));                        // numbers in the interface language
const t = (k, ...a) => { const v = I[lang][k] ?? I.en[k]; return typeof v === "function" ? v(...a.map(x => (typeof x === "number" ? N(x) : x))) : v; };

const W = id => V.words[id] || {id, word:id, def:"", bn:""};
const TABS = ["learn", "cards", "quiz", "sentences", "tips"];
const lessonsOf = src => V.lessons.filter(l => l.source === src).sort((a,b) => a.order - b.order);
const lessonById = id => V.lessons.find(l => l.id === id);
const sourceById = id => V.sources.find(s => s.id === id);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const isDone = l => { const b = S.best(l.id, "quiz"); return l.match ? !!(b && b[0] === b[1]) : false; };
const isStarted = l => !!(S.best(l.id, "quiz") || S.best(l.id, "sentences") || S.answers(l.id, "quiz").some(Boolean));
/* optional book cover: drop a file at assets/covers/<source id>.jpg; if it is missing the image removes itself */
const cover = (s, cls) => `<img class="cover${cls ? " " + cls : ""}" src="assets/covers/${esc(s.id)}.jpg" alt="" loading="lazy" onerror="this.remove()">`;
/* source kind: "quickquiz" (Word Smart, the default) or "alphabetical" (Barron's 333) */
const kindOf = srcId => (sourceById(srcId) || {}).kind || "quickquiz";
const isAlpha = l => kindOf(l.source) === "alphabetical";
const lessonName = l => isAlpha(l) ? (isBn() && l.titleBn ? l.titleBn : l.title) : t("lessonN", l.order);
/* a word as shown inside one lesson: the lesson's own meaning (l.meanings) replaces the word's fields */
const LW = (l, id) => { const w = W(id), o = l && l.meanings && l.meanings[id]; return o ? {...w, ...o} : w; };
const lessonsFor = id => V.lessons.filter(l => l.words.includes(id));
const srcLessonName = l => `${(sourceById(l.source) || {}).title || ""} · ${lessonName(l)}`;
const lessonRange = l => `${W(l.words[0]).word} – ${W(l.words[l.words.length - 1]).word}`;
const posText = w => isBn() && w.posBn ? `${w.pos} · ${w.posBn}` : (w.pos || "");

let keyHandler = null;
document.addEventListener("keydown", e => {
  if (["INPUT","SELECT","TEXTAREA"].includes(e.target.tagName)) return;
  if (keyHandler) keyHandler(e);
});

const updateBadge = () => { const n = S.reviewIds().length; document.querySelectorAll(".badge").forEach(b => { b.textContent = n ? N(n) : ""; }); };

/* header, footer and the EN | বাংলা switch (they live outside #app) */
function paintChrome() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach(el => { el.textContent = t(el.dataset.t); });
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  const g = document.querySelector(".lang"); if (g) g.setAttribute("aria-label", t("langGroup"));
  const mn = document.querySelector(".mainnav"); if (mn) mn.setAttribute("aria-label", t("navMain"));
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-lang]"); if (!b || b.dataset.lang === lang) return;
  lang = b.dataset.lang; S.setLang(lang); paintChrome(); route(true);
});

/* ⭐ buttons anywhere: add/remove a word from the review list */
const starBtn = (id, extra = "") => { const on = S.inReview(id); return `<button class="star" ${extra} data-star="${esc(id)}" aria-pressed="${on}" aria-label="${esc(on ? t("starRemove") : t("starAdd"))}" title="${esc(on ? t("starRemove") : t("starAdd"))}">${on ? "★" : "☆"}</button>`; };
app.addEventListener("click", e => {
  const b = e.target.closest("[data-star]"); if (!b) return;
  e.preventDefault();
  const id = b.dataset.star, on = S.toggleReview(id);
  [...document.querySelectorAll("[data-star]")].filter(x => x.dataset.star === id).forEach(x => { x.setAttribute("aria-pressed", on); x.textContent = on ? "★" : "☆"; x.setAttribute("aria-label", on ? t("starRemove") : t("starAdd")); x.title = on ? t("starRemove") : t("starAdd"); });
  updateBadge();
});

/* ---------- shared pieces ---------- */
const alsoIn = (w, l) => { const o = lessonsFor(w.id).filter(x => x !== l); return o.length ? `<p class="also">${esc(t("alsoIn"))} ${o.map(x => `<a href="#lesson-${esc(x.id)}">${esc(srcLessonName(x))}</a>`).join(", ")}</p>` : ""; };
const wordCard = (w, i, l) => `<article class="w">${starBtn(w.id)}<h3>${i != null ? (i + 1) + ". " : ""}${esc(w.word)}<span>${esc(posText(w))}</span></h3>
<div class="def">${esc(w.def)}</div><div class="bnm">${esc(w.bn)}</div>
${w.full ? `<p>${esc(w.full)}</p>` : ""}${w.ex ? `<p class="ex">“${esc(w.ex)}”</p>` : ""}${w.exb ? `<p class="bn">${esc(w.exb)}</p>` : ""}
${w.hook ? `<span class="tag">${esc(t("memoryTrick"))}</span><p class="bn">${esc(w.hook)}</p>` : ""}${l ? alsoIn(w, l) : ""}</article>`;

/* Flashcard deck. mode "study" = next/back/shuffle; mode "review" = I know it / Still learning */
function deck(ids, mode, kicker, get = W) {
  const html = `<div class="flipzone">${kicker ? `<div class="kicker">${esc(kicker)}</div>` : ""}
<button class="card" id="fcard" aria-label="Flashcard"><div class="inner">
<div class="face front"><div class="big" id="fw"></div><div class="pos" id="fp"></div><div class="hint">${esc(t("tapFlip"))}</div></div>
<div class="face back"><div class="d" id="fd"></div><div class="db" id="fdb"></div><div class="e" id="fe"></div><div class="eb bn" id="feb"></div></div>
</div></button>
${mode === "review"
  ? `<div class="row"><button id="fno">${esc(t("notYet"))}</button><span class="count" id="fc"></span><button class="good" id="fyes">${esc(t("know"))}</button></div><div class="streak" id="fs"></div>`
  : `<div class="row"><button id="fprev">${esc(t("prev"))}</button><span class="count" id="fc"></span><button id="fnext">${esc(t("next"))}</button><button id="fshuf">${esc(t("shuffle"))}</button></div><div class="row" id="fstar"></div>`}
</div>`;
  const bind = onEmpty => {
    let list = ids.slice(), i = 0;
    const show = () => {
      if (!list.length) { onEmpty && onEmpty(); return; }
      i = (i + list.length) % list.length;
      const w = get(list[i]);
      $("fcard").classList.remove("on");
      $("fw").textContent = w.word; $("fp").textContent = posText(w);
      $("fd").textContent = w.def; $("fdb").textContent = w.bn; $("fe").textContent = w.ex || ""; $("feb").textContent = w.exb || "";
      $("fc").textContent = `${N(i + 1)} / ${N(list.length)}`;
      if (mode === "review") $("fs").textContent = t("streak", S.streak(w.id), S.REVIEW_DONE);
      else $("fstar").innerHTML = `${starBtn(w.id, 'style="position:static"')}<span class="streak">${esc(t("starHint"))}</span>`;
    };
    $("fcard").addEventListener("click", () => $("fcard").classList.toggle("on"));
    if (mode === "review") {
      const mark = ok => { const id = list[i], still = S.reviewMark(id, ok); if (!still) list.splice(i, 1); else i++; updateBadge(); show(); };
      $("fyes").addEventListener("click", () => mark(true));
      $("fno").addEventListener("click", () => mark(false));
      keyHandler = e => { if (e.key === " ") { e.preventDefault(); $("fcard").click(); } };
    } else {
      if (ids.length < 2) ["fprev", "fnext", "fshuf", "fc"].forEach(x => { $(x).hidden = true; });
      $("fnext").addEventListener("click", () => { i++; show(); });
      $("fprev").addEventListener("click", () => { i--; show(); });
      $("fshuf").addEventListener("click", () => { list = shuffle(list); i = 0; show(); });
      keyHandler = e => { if (e.key === "ArrowRight") $("fnext").click(); if (e.key === "ArrowLeft") $("fprev").click(); if (e.key === " ") { e.preventDefault(); $("fcard").click(); } };
    }
    show();
  };
  return { html, bind };
}

/* Exercise sheet: rows of select boxes with Check / Bangla hint / Show answer / Clear */
function sheetHTML(px, inst, rowsHTML, sentClass, head) {
  return `<div class="sheet${sentClass ? " sent" : ""}" id="${px}sheet">${head ? `<h2 class="qq">${esc(head)}</h2>` : ""}
<p class="inst">${esc(inst)}</p>
<div>${rowsHTML}</div>
<div class="score" id="${px}score" aria-live="polite"></div>
<div class="row btns"><button class="pri" id="${px}check">${esc(t("check"))}</button><button id="${px}hint">${esc(t("hintOn"))}</button><button id="${px}reveal">${esc(t("reveal"))}</button><button id="${px}reset">${esc(t("clear"))}</button></div></div>`;
}
const qRow = (px, i, labelHTML, opts) => `<div class="q" id="${px}r${i}">${labelHTML}<select id="${px}s${i}"><option value="">${esc(t("select"))}</option>${opts}</select><span class="mk" id="${px}m${i}"></span></div>`;

function exercise(c) {
  const px = c.px, n = c.keys.length, sel = i => $(px + "s" + i), row = i => $(px + "r" + i), mk = i => $(px + "m" + i);
  let revealed = false, saved = [];
  const vals = () => Array.from({length:n}, (_, i) => sel(i).value);
  const hintOn = () => $(px + "sheet").classList.contains("showbn");
  const clearMark = i => { row(i).className = "q"; mk(i).textContent = ""; };
  const mark = (i, ok) => { row(i).className = "q " + (ok ? "ok" : "no"); mk(i).textContent = ok ? "✓" : "✗"; };
  const acc = i => [].concat(c.keys[i]);            // accepted answers for row i (first = shown by Show answer)
  const max = v => (c.max ? c.max(v) : 1);          // how many rows may use a choice, e.g. “bitter (2)”
  // a choice that is used up in other rows is greyed out (✓)
  const refresh = () => { const v = vals(); for (let i = 0; i < n; i++) for (const o of sel(i).options) { if (!o.value) continue; const used = v.filter((x, j) => j !== i && x === o.value).length; o.disabled = v[i] !== o.value && used >= max(o.value); o.textContent = (c.text ? c.text(o.value, hintOn()) : o.value) + (o.disabled ? " ✓" : ""); }
    // the meanings panel mirrors the dropdowns: a meaning that is used up gets ✓
    const pn = $(px + "panel"); if (pn) pn.querySelectorAll("li[data-v]").forEach(li => { const full = v.filter(x => x === li.dataset.v).length >= max(li.dataset.v); li.classList.toggle("used", full); li.querySelector(".ck").textContent = full ? "✓" : ""; }); };
  const setHint = on => { $(px + "sheet").classList.toggle("showbn", on); $(px + "hint").textContent = on ? t("hintOff") : t("hintOn"); refresh(); };
  const setReveal = on => { revealed = on; $(px + "reveal").textContent = on ? t("unreveal") : t("reveal"); $(px + "check").disabled = on; for (let i = 0; i < n; i++) sel(i).disabled = on; };
  const save = () => c.onSave && c.onSave(vals());
  for (let i = 0; i < n; i++) sel(i).addEventListener("change", () => { clearMark(i); $(px + "score").textContent = ""; save(); refresh(); });
  $(px + "check").addEventListener("click", () => {
    let ok = 0, blank = 0; const wrong = [];
    c.keys.forEach((k, i) => { const v = sel(i).value; if (!v) { blank++; clearMark(i); return; } const good = acc(i).includes(v); if (good) ok++; else wrong.push(i); mark(i, good); });
    if (blank === n) { $(px + "score").textContent = t("pickOne"); return; }
    $(px + "score").textContent = t("score", n, ok) + (blank ? ` · ${t("left", blank)}` : "") + (ok === n ? ` · ${t("great")}` : wrong.length ? ` · ${t("retry")}` : "");
    c.onCheck && c.onCheck(ok, n, wrong, blank);
  });
  $(px + "reveal").addEventListener("click", () => {
    if (!revealed) { saved = vals(); c.keys.forEach((k, i) => { sel(i).value = acc(i)[0]; mark(i, true); }); setReveal(true); refresh(); $(px + "score").textContent = t("revealed"); }
    else { saved.forEach((v, i) => { sel(i).value = v; clearMark(i); }); setReveal(false); refresh(); $(px + "score").textContent = ""; }
  });
  $(px + "hint").addEventListener("click", () => setHint(!hintOn()));
  $(px + "reset").addEventListener("click", () => { setReveal(false); saved = []; for (let i = 0; i < n; i++) { sel(i).value = ""; clearMark(i); } $(px + "score").textContent = ""; save(); setHint(false); });
  (c.saved || []).forEach((v, i) => { if (i < n && [...sel(i).options].some(o => o.value === v)) sel(i).value = v; });
  refresh();
}

/* ---------- pages ---------- */
function pageHome() {
  const all = Object.keys(V.words), active = V.sources.filter(s => s.status === "active");
  const allLessons = V.lessons, done = allLessons.filter(isDone).length;
  const day = Math.floor(Date.now() / 864e5), wod = all.length ? W(all[day % all.length]) : null;
  const last = lessonById(S.lastLesson());
  const first = active.length ? lessonsOf(active[0].id)[0] : null;
  const go = last || first;
  const d = wod ? deck([wod.id], "study", t("wordOfDay")) : null;
  const srcCard = s => {
    const ls = lessonsOf(s.id), words = new Set(ls.flatMap(l => l.words)).size, dn = ls.filter(isDone).length;
    const g = kindOf(s.id) === "alphabetical";
    const inner = `<span class="chip ${s.status === "active" ? "go" : ""}">${s.status === "active" ? esc(t(g ? "srcCountG" : "srcCount", ls.length, words)) : esc(t("soon"))}</span>
<h3>${esc(s.title)}</h3>${s.by ? `<p class="by">${esc(s.by)}</p>` : ""}<p>${esc(isBn() && s.descBn ? s.descBn : s.desc)}</p>
${s.status === "active" ? `<div class="bar" aria-hidden="true"><i style="width:${ls.length ? Math.round(dn / ls.length * 100) : 0}%"></i></div><p class="streak" style="text-align:left">${esc(t(g ? "srcDoneG" : "srcDone", dn, ls.length))}</p>` : ""}`;
    return s.status === "active" ? `<a class="src" href="#src-${esc(s.id)}" style="--c:${esc(s.color)}">${cover(s)}<div class="sbody">${inner}</div></a>` : `<div class="src soon">${cover(s)}<div class="sbody">${inner}</div></div>`;
  };
  const steps = t("steps");
  return {
    title: `${V.config.name} · ${V.config.nameBn}`,
    html: `<section class="band"><div class="wrap hero"><div>
<h1>${t("heroH1")}</h1>
<p class="lead">${esc(t("heroLead"))}</p>
<div class="stats"><div class="stat"><b>${N(all.length)}</b><span>${esc(t("statWords"))}</span></div><div class="stat"><b>${N(done)}/${N(allLessons.length)}</b><span>${esc(t("statLessons"))}</span></div><div class="stat"><b>${N(S.reviewIds().length)}</b><span>${esc(t("statReview"))}</span></div></div>
<div class="cta">${go ? `<a class="btn pri" href="#lesson-${esc(go.id)}">${esc(last ? t("resume") : t("start"))}: ${esc(lessonName(go))} →</a>` : ""}${S.reviewIds().length ? `<a class="btn" href="#review">${esc(t("reviewNow"))}</a>` : ""}</div>
</div><div>${d ? d.html : ""}</div></div></section>
<section class="band"><div class="wrap"><h2>${esc(t("chooseSource"))}</h2><div class="grid">${V.sources.map(srcCard).join("")}</div></div></section>
<section class="band"><div class="wrap"><h2>${esc(t("howTo"))}</h2><div class="steps4">
${steps.map(([h, p]) => `<div><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("")}</div></div></section>`,
    after: () => d && d.bind()
  };
}

function pageSource(id) {
  const s = sourceById(id);
  if (!s) return notFound();
  const ls = lessonsOf(id), alpha = kindOf(id) === "alphabetical";
  const row = (l, i) => {
    const b = S.best(l.id, "quiz"), chip = isDone(l) ? `<span class="chip done">${esc(t("done"))}</span>` : isStarted(l) ? `<span class="chip go">${esc(t("inProgress"))}</span>` : `<span class="chip">${esc(t("notStarted"))}</span>`;
    return `<a class="lrow nonum" href="#lesson-${esc(l.id)}"><span><h3>${esc(lessonName(l))}</h3>${alpha ? "" : `<span class="bq">${esc(t("bookQuiz", String(l.order)))}</span>`}<span class="ws">${l.words.slice(0, 5).map(w => esc(W(w).word)).join(", ")}${l.words.length > 5 ? "…" : ""} · ${esc(t("nWords", l.words.length))}</span></span>
<span class="sc">${chip}${b ? `<br>${esc(t("quizScore", b[0], b[1]))}` : ""}</span></a>`;
  };
  return {
    title: s.title,
    html: `<section class="band"><div class="wrap"><div class="crumb"><a href="#home">${esc(t("home"))}</a> › ${esc(s.title)}</div>
<div class="shead">${cover(s, "lg")}<div><h1>${esc(s.title)}</h1><p class="lead">${esc(isBn() && s.descBn ? s.descBn : s.desc)}</p></div></div>
${s.status === "active" && ls.length && alpha ? `<section class="about" aria-labelledby="abouth"><h2 id="abouth">${esc(t("aboutAlphaH"))}</h2>
<p class="ex">🔤 ${esc(t("aboutAlphaP1"))}</p><p class="ex">💻 ${esc(t("aboutAlphaP2"))}</p></section>
` : ""}${s.status === "active" && ls.length && !alpha ? `<section class="about" aria-labelledby="abouth"><h2 id="abouth">${esc(t("aboutH"))}</h2>
<div class="map"><div class="side"><span class="ico" aria-hidden="true">📖</span><b>${esc(t("aboutBook"))}</b><p>${esc(t("aboutBookP"))}</p></div>
<span class="eqs" aria-hidden="true">=</span>
<div class="side here"><span class="ico" aria-hidden="true">💻</span><b>${esc(t("aboutHere"))}</b><p>${esc(t("aboutHereP"))}</p></div></div>
<p class="ex">${esc(t("aboutEx"))}</p></section>` : ""}
${s.status !== "active" ? `<div class="empty"><h3>${esc(t("soon"))}</h3></div>` :
 ls.length ? (alpha ? alphaList(ls, row) : `<div class="lessons">${ls.map(row).join("")}</div>`) : `<div class="empty"><h3>${esc(t("noLessons"))}</h3></div>`}
</div></section>`,
    after: alpha ? () => app.querySelectorAll("[data-jump]").forEach(b => b.addEventListener("click", () => $("letter-" + b.dataset.jump)?.scrollIntoView({behavior:"smooth", block:"start"}))) : null
  };
}

/* alphabetical sources: an A–Z jump bar, then a letter heading before each letter's groups.
   The bar uses buttons, not #links, because # is the page router. */
function alphaList(ls, row) {
  const letters = [...new Set(ls.map(l => l.group))];
  const slug = g => String(g).replace(/[^A-Za-z]/g, "");
  return `<nav class="jump" aria-label="${esc(t("jumpLabel"))}">${letters.map(g => `<button type="button" data-jump="${esc(slug(g))}">${esc(g)}</button>`).join("")}</nav>
${letters.map(g => `<h2 class="lhead" id="letter-${esc(slug(g))}">${esc(g)}</h2><div class="lessons">${ls.filter(l => l.group === g).map(row).join("")}</div>`).join("")}`;
}

function pageLesson(id, tab) {
  const l = lessonById(id);
  if (!l) return notFound();
  S.visit(l.id);
  const s = sourceById(l.source) || {title:"", id:""};
  const tabs = TABS.filter(x => (x !== "quiz" || l.match) && (x !== "sentences" || (l.sentences && l.sentences.length)));
  if (!tabs.includes(tab)) tab = "learn";
  const sib = lessonsOf(l.source), k = sib.indexOf(l), prev = sib[k - 1], next = sib[k + 1];
  const tIdx = tabs.indexOf(tab), nextTab = tabs[tIdx + 1];
  const tabName = x => t("tabs")[x];
  let body = "", after = null;

  if (tab === "learn") {
    const n = l.note, nTitle = n ? n.title.replace(/^the pattern:\s*/i, "") : "";
    body = `${n ? `<details class="note" id="note"><summary><span class="ttl">💡 <b>The pattern:</b> ${esc(nTitle)}</span><span class="more" aria-hidden="true" data-more="${esc(t("showMore"))}" data-less="${esc(t("showLess"))}"></span></summary>
<div class="nbody"><div><p class="bn" style="font-weight:600">${esc(n.titleBn)}</p><p>${esc(n.intro || "")}</p><p class="bn">${esc(n.introBn || "")}</p>${(n.points || []).map(([e, b]) => `<p>${esc(e)}</p><p class="bn">${esc(b)}</p>`).join("")}</div>
<div class="eq">${(n.roots || []).map(r => `<div><b>${esc(r.parts)}</b> (${esc(r.gloss)}) → <b>${esc(r.word)}</b><span class="bn">${esc(r.bn)}</span></div>`).join("")}</div></div></details>` : ""}
<div class="grid">${l.words.map((w, i) => wordCard(LW(l, w), i, l)).join("")}</div>`;
  }
  if (tab === "cards") {
    const d = deck(l.words, "study", null, id => LW(l, id));
    body = `<p class="lead">${esc(t("cardsLead"))}</p>${d.html}`;
    after = () => d.bind();
  }
  if (tab === "quiz") {
    const m = l.match, px = "m", keys = Object.keys(m.options);
    const cnt = v => m.options[v][2] || 1, multi = keys.some(v => cnt(v) > 1);
    const optText = (v, on) => `${v}. ${m.options[v][0]}` + (cnt(v) > 1 ? ` (${cnt(v)})` : "") + (on ? ` (${m.options[v][1]})` : "");
    const opts = keys.map(v => `<option value="${esc(v)}">${esc(optText(v, false))}</option>`).join("");
    const rows = m.items.map((it, i) => qRow(px, i, `<label for="${px}s${i}">${i + 1}. ${esc(W(it.word).word)}<span class="bn">${esc(LW(l, it.word).bn)}</span></label>`, opts)).join("");
    const panel = `<details class="mpanel" id="${px}panel" open><summary>${esc(t("meanings"))} (${esc(keys[0])}–${esc(keys[keys.length - 1])})</summary><ol>${keys.map(v => `<li data-v="${esc(v)}"><b>${esc(v)}</b><span><span class="df">${esc(m.options[v][0])}</span>${cnt(v) > 1 ? ` <span class="n2">(${cnt(v)})</span>` : ""}<span class="bn">${esc(m.options[v][1])}</span></span><span class="ck"></span></li>`).join("")}</ol></details>`;
    // Word Smart: the book's own instruction, always in English as printed, under the book's quiz title.
    // Alphabetical sources: the quiz is Shobdo's own, so heading and instruction are interface text.
    const alpha = isAlpha(l);
    body = `<p class="lead">${esc(t("quizLead", multi))}</p>
${sheetHTML(px, alpha ? t("quizInst") : m.instruction, `<div class="qwrap"><div>${rows}</div>${panel}</div>`, false, alpha ? t("quizH") : l.title)}`;
    after = () => exercise({
      px, keys: m.items.map(x => x.answer), saved: S.answers(l.id, "quiz"),
      text: optText, max: cnt,
      onSave: v => S.saveAnswers(l.id, "quiz", v),
      onCheck: (ok, n, wrong) => { S.saveScore(l.id, "quiz", ok, n); wrong.forEach(i => S.addReview(m.items[i].word)); updateBadge(); }
    });
  }
  if (tab === "sentences") {
    const ss = l.sentences, px = "t", choices = [...new Set(ss.map(x => x.answer))].sort();
    const opts = choices.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join("");
    const rows = ss.map((x, i) => qRow(px, i, `<p>${i + 1}. ${esc(x.text).replace("___", `<span class="blank"></span>`)}<span class="bn">${esc(x.bn)}</span></p>`, opts)).join("");
    body = `<p class="lead">${esc(t("sentLead"))}</p>
${sheetHTML(px, t("sentInst"), rows, true)}`;
    after = () => exercise({
      px, keys: ss.map(x => x.answer), saved: S.answers(l.id, "sentences"),
      onSave: v => S.saveAnswers(l.id, "sentences", v),
      onCheck: (ok, n, wrong) => { S.saveScore(l.id, "sentences", ok, n); wrong.forEach(i => ss[i].word && S.addReview(ss[i].word)); updateBadge(); }
    });
  }
  if (tab === "tips") {
    body = `<h3>${esc(t("tipsH"))}</h3>
<ol class="steps">${t("tips").map(([h, p]) => `<li><b>${esc(h)}</b> ${esc(p)}</li>`).join("")}</ol>
<h3 style="margin-top:28px">${esc(t("quickReview"))}</h3>
<div class="rev">${l.words.map(id => LW(l, id)).map(w => `<div><b>${esc(w.word)}</b> = ${esc(w.def)} = <span class="bn">${esc(w.bn)}</span></div>`).join("")}</div>`;
  }

  const b = S.best(l.id, "quiz"), al = isAlpha(l);
  return {
    title: `${lessonName(l)} · ${s.title}`,
    html: `<section class="band"><div class="wrap">
<div class="crumb"><a href="#home">${esc(t("home"))}</a> › <a href="#src-${esc(s.id)}">${esc(s.title)}</a> › ${esc(lessonName(l))}</div>
<h1>${esc(lessonName(l))}</h1><p class="meta">${esc(lessonRange(l))} · ${esc(t("nWords", l.words.length))}${b ? ` · ${esc(t("best", b[0], b[1]))}` : ""}</p>
<nav class="tabs" aria-label="${esc(t("tabsLabel"))}">${tabs.map((x, i) => `<a class="tab${x === tab ? " on" : ""}" href="#lesson-${esc(l.id)}-${x}"><span class="tn">${N(i + 1)}. </span>${esc(tabName(x))}</a>`).join("")}</nav>
<div style="margin-top:8px">${body}</div>
<div class="pager">${nextTab ? `<a class="btn pri" href="#lesson-${esc(l.id)}-${nextTab}">${esc(t("nextStep", tabName(nextTab)))}</a>` : next ? `<a class="btn pri" href="#lesson-${esc(next.id)}">${esc(t(al ? "nextGroup" : "nextLesson", lessonName(next)))}</a>` : `<a class="btn" href="#src-${esc(s.id)}">${esc(t(al ? "allGroups" : "allLessons"))}</a>`}
${prev ? `<a class="btn" href="#lesson-${esc(prev.id)}">${esc(t(al ? "prevGroup" : "prevLesson", lessonName(prev)))}</a>` : ""}</div>
</div></section>`,
    after
  };
}

function pageWords() {
  // each source's meaning of a word (a lesson's meanings override wins over the word's own def)
  const srcDefs = w => { const m = new Map(); for (const l of lessonsFor(w.id)) if (!m.has(l.source)) m.set(l.source, LW(l, w.id).def); return m; };
  const bySource = w => { const m = srcDefs(w); if (new Set(m.values()).size < 2) return "";
    return `<div class="bysrc"><b>${esc(t("bySource"))}</b>${[...m].map(([sid, d]) => `<p><b>${esc((sourceById(sid) || {}).title || sid)}:</b> ${esc(d)}</p>`).join("")}</div>`; };
  const lessonLink = (w, l) => new Set(lessonsFor(w.id).map(x => x.source)).size > 1 ? srcLessonName(l) : lessonName(l);
  const srcOpts = V.sources.filter(s => s.status === "active").map(s => `<option value="${esc(s.id)}">${esc(s.title)}</option>`).join("");
  return {
    title: `${t("wordsH")} · Shobdo`,
    html: `<section class="band"><div class="wrap">
<h1>${esc(t("wordsH"))}</h1><p class="lead">${esc(t("wordsLead"))}</p>
<div class="filters"><input id="q" type="search" placeholder="${esc(t("search"))}" aria-label="${esc(t("search"))}"><select id="src" aria-label="${esc(t("allSources"))}"><option value="">${esc(t("allSources"))}</option>${srcOpts}</select>
<label class="check"><input type="checkbox" id="onlyStar"> ${esc(t("starOnly"))}</label></div>
<p class="streak" id="wcount" style="text-align:left;margin-top:10px"></p><div class="wlist" id="wlist"></div></div></section>`,
    after: () => {
      const draw = () => {
        const norm = x => (x || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
        const q = norm($("q").value.trim()), src = $("src").value, st = $("onlyStar").checked;
        const list = Object.values(V.words).filter(w => (!q || [w.word, w.def, w.bn, ...srcDefs(w).values()].some(x => norm(x).includes(q))) && (!src || lessonsFor(w.id).some(l => l.source === src)) && (!st || S.inReview(w.id))).sort((a, b) => a.word.localeCompare(b.word));
        $("wcount").textContent = t("nWords", list.length);
        $("wlist").innerHTML = list.length ? list.map(w => `<details><summary><b>${esc(w.word)}</b><span class="d">${esc(w.def)}</span><span class="bn">${esc(w.bn)}</span></summary>
<div class="body">${wordCard(w)}${bySource(w)}<p class="streak" style="text-align:left">${esc(t("lessonsLbl"))} ${lessonsFor(w.id).map(l => `<a href="#lesson-${esc(l.id)}">${esc(lessonLink(w, l))}</a>`).join(", ")}</p></div></details>`).join("")
          : `<div class="empty"><h3>${esc(t("noWordsH"))}</h3><p>${esc(t("noWordsP"))}</p></div>`;
      };
      ["q", "src", "onlyStar"].forEach(id => $(id).addEventListener("input", draw));
      draw();
    }
  };
}

function pageReview() {
  const ids = S.reviewIds().filter(id => V.words[id]);
  const empty = `<div class="empty"><h3>${esc(t("reviewEmptyH"))}</h3><p>${esc(t("reviewEmptyP"))}</p><a class="btn pri" href="#home">${esc(t("backToLessons"))}</a></div>`;
  const d = ids.length ? deck(shuffle(ids), "review", t("reviewKicker")) : null;
  return {
    title: `${t("reviewH")} · Shobdo`,
    html: `<section class="band"><div class="wrap">
<h1>${esc(t("reviewH"))}</h1>
<p class="lead">${esc(t("reviewLead", S.REVIEW_DONE))}</p>
<div id="rv">${d ? d.html : empty}</div></div></section>`,
    after: () => d && d.bind(() => { $("rv").innerHTML = empty; keyHandler = null; })
  };
}

const notFound = () => ({ title: "Not found", html: `<section class="band"><div class="wrap"><div class="empty"><h3>${esc(t("notFoundH"))}</h3><a class="btn pri" href="#home">${esc(t("goHome"))}</a></div></div></section>` });

/* ---------- router (plain #names so links can be shared) ---------- */
let lastLessonId = null;
function route(keepScroll) {
  keyHandler = null;
  const h = decodeURIComponent(location.hash.slice(1)) || "home";
  let p, nav = "", lessonId = null;
  if (h === "home") { p = pageHome(); nav = "home"; }
  else if (h === "words") { p = pageWords(); nav = "words"; }
  else if (h === "review") { p = pageReview(); nav = "review"; }
  else if (h.startsWith("src-")) p = pageSource(h.slice(4));
  else if (h.startsWith("lesson-")) {
    let rest = h.slice(7), tab = "learn";
    for (const x of TABS) if (rest.endsWith("-" + x)) { tab = x; rest = rest.slice(0, -x.length - 1); break; }
    lessonId = rest; p = pageLesson(rest, tab);
  } else p = notFound();
  const y = window.scrollY;
  app.innerHTML = p.html;
  document.title = p.title;
  document.querySelectorAll("[data-nav]").forEach(a => { a.classList.toggle("on", a.dataset.nav === nav); if (a.dataset.nav === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  if (p.after) p.after();
  updateBadge();
  // keep the active lesson tab visible on narrow screens (horizontal scroll only)
  const tOn = document.querySelector(".tab.on");
  if (tOn) { const row = tOn.parentElement; row.scrollLeft = Math.max(0, tOn.offsetLeft - row.offsetLeft - 16); }
  if (keepScroll === true) window.scrollTo(0, y);                       // language switch: stay where you are
  // switching tabs inside the same lesson keeps the tabs in view; any other move starts at the top
  else if (lessonId && lessonId === lastLessonId) document.querySelector(".tabs")?.scrollIntoView({block:"nearest"});
  else window.scrollTo(0, 0);
  lastLessonId = lessonId;
}
window.addEventListener("hashchange", () => route());
paintChrome();
route();
}
