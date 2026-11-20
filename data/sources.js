/* Books and word lists. status: "active" shows lessons; "soon" shows a Coming soon card.
   kind: "quickquiz" (default when missing) = lessons follow the book's Quick Quizzes;
         "alphabetical" = the list is split into A–Z groups, lessons named by their own title. */
VOCAB.addSource({
  id: "wordsmart",
  title: "Word Smart I & II",
  titleBn: "ওয়ার্ড স্মার্ট ১ ও ২",
  by: "The Princeton Review",
  desc: "Core vocabulary for SAT, GRE, IELTS and university admission tests.",
  descBn: "SAT, GRE, IELTS ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য গুরুত্বপূর্ণ শব্দ।",
  status: "active",
  kind: "quickquiz",
  color: "#1f46c8"
});

VOCAB.addSource({
  id: "barrons333",
  title: "Barron's 333",
  titleBn: "ব্যারন'স ৩৩৩",
  by: "Barron's",
  desc: "Barron's GRE high-frequency list: 332 words in 28 alphabetical groups.",
  descBn: "Barron's-এর GRE high-frequency তালিকা: ২৮টি বর্ণানুক্রমিক গ্রুপে ৩৩২টি শব্দ।",
  status: "active",
  kind: "alphabetical",
  color: "#0b6e4f"
});

VOCAB.addSource({
  id: "more",
  title: "More sources",
  titleBn: "আরও উৎস",
  by: "",
  desc: "More books and word lists will be added here.",
  descBn: "আরও বই ও শব্দতালিকা এখানে যোগ হবে।",
  status: "soon",
  color: "#8a5a00"
});
