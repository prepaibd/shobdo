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
| `assets/covers/` | Optional book cover images, see `assets/covers/README.txt`. |
| `data/sources.js` | The books (Word Smart, Barron's 333, …). |
| `data/wordsmart/quick-quiz-NN.js` | One file per lesson: its words, lesson note, quiz and sentences. |

## Add a new lesson

1. Copy an existing file, e.g. `data/wordsmart/quick-quiz-86.js`, to the next number.
2. Fill in `VOCAB.addWords([...])` and `VOCAB.addLesson({...})`. Quiz answers must match the book's answer key; a meaning used twice gets a third value: `d: ["bitter", "তিক্ত", 2]`.
3. Add a `<script src="data/wordsmart/quick-quiz-NN.js"></script>` line in `index.html`, after the previous lesson.

## Add interface text

Never write interface words directly in `app.js`. Add a key with both versions to `assets/i18n.js` (`en` and `bn`) and use `t("key")`.

## Deploy

```
git clone https://github.com/prepaibd/shobdo.git   # first time
git pull                                           # updates
```

Point the web server at the folder that contains `index.html`.

Not affiliated with or endorsed by The Princeton Review or Barron's.
