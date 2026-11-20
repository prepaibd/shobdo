# Shobdo · শব্দ

A bilingual (Bangla + English) vocabulary study site for Bangladeshi students. Content follows **Word Smart I & II**: each lesson is one word group from the book, with its Quick Quiz.

Plain HTML, CSS and JavaScript. No build step, no server code. Open `index.html` in a browser, or serve the folder with any web server.

## Folders

| Path | What it holds |
|---|---|
| `index.html` | The page. Loads every script below, in order. |
| `assets/registry.js` | `VOCAB`: the list of books, words and lessons that data files fill in. |
| `assets/store.js` | `Store`: all saved progress (scores, answers, review list, language). Uses the browser's localStorage today; swap the inside for API calls when you add login and a database. |
| `assets/i18n.js` | All interface text in English and Bangla (the EN / বাংলা switch). Bangla is the default. |
| `assets/app.js` | Pages and routing (`#home`, `#words`, `#review`, `#src-<id>`, `#lesson-<id>-<tab>`). |
| `assets/app.css` | Styles. |
| `assets/favicon.svg`, `favicon.ico`, `assets/apple-touch-icon.png` | Browser tab and home-screen icon: the letter শ (Hind Siliguri Bold, as outlines) on the brand green. |
| `assets/covers/` | Optional book cover images, see `assets/covers/README.txt`. |
| `data/sources.js` | The books (Word Smart, Barron's 333, …). |
| `data/wordsmart/quick-quiz-NN.js` | One file per lesson: its words, lesson note, quiz and sentences. |
| `data/barrons333/<group-id>.js` | Barron's 333: one file per alphabetical group (ids from `docs/barrons333-groups.json`). |
| `docs/barrons333-groups.json` | The Barron's list split into 28 groups: the single source of truth for Barron's words and meanings. |
| `tools/validate.mjs` | Content checker (dev only, not loaded by the site): `node tools/validate.mjs` must print `NO ERRORS`. |

## Add a new lesson

1. Copy an existing file, e.g. `data/wordsmart/quick-quiz-86.js`, to the next number.
2. Fill in `VOCAB.addWords([...])` and `VOCAB.addLesson({...})`. Quiz answers must match the book's answer key; a meaning used twice gets a third value: `d: ["bitter", "তিক্ত", 2]`.
3. Add a `<script src="data/wordsmart/quick-quiz-NN.js"></script>` line in `index.html`, after the previous lesson.

## Add a Barron's 333 group

1. Create `data/barrons333/<group-id>.js` with the group's words in the JSON's order, `source: "barrons333"`, `group` (e.g. `"A"`) and `title`/`titleBn` from the JSON.
2. Call `VOCAB.addWords` **only for new words**. A word that is already in Word Smart is just listed in `words`, with a `meanings` override: `meanings: { abate: { def: "subside, or moderate" } }` (optional `bn`, `ex`, `exb`, `pos`, `posBn`, `full`). `addWords` overwrites an existing id, so never re-add one.
3. Quiz definitions come from Barron's meaning (whole, or its first clause when long).
4. Add the `<script>` line in `index.html` after the previous Barron's group and run `node tools/validate.mjs`.

## Add interface text

Never write interface words directly in `app.js`. Add a key with both versions to `assets/i18n.js` (`en` and `bn`) and use `t("key")`.

## Deploy

```
git clone https://github.com/prepaibd/shobdo.git   # first time
git pull                                           # updates
```

Point the web server at the folder that contains `index.html`.

Every local file link in `index.html` ends in `?v=N` (e.g. `assets/app.js?v=2`). Raise the number on all of them with every release, or returning visitors keep their browser's old copy after a `git pull`:

```
sed -i '' 's/?v=2"/?v=3"/g' index.html    # macOS; on Linux drop the ''
```

Not affiliated with or endorsed by The Princeton Review or Barron's.
