const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
];
console.log(languages.length);

let newLang = new Set(languages);
console.log(newLang.size);

for (x of newLang) console.log(x);

newLang.add('Marathi');
console.log(newLang);

let counts = [];
for (l of newLang) {
  let filtered = languages.filter((lng) => lng == l);
  counts.push({ lang: l, count: filtered.length });
}
console.log(counts);
