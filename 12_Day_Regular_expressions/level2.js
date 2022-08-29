// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
paragraph = `I love teaching If you do not love teaching what else can you love I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love`;
// console.log(tenMostFrequentWords(paragraph));
let tenMostFrequentWords = () => {
  let wordCounts = {};
  let words = paragraph.split(/[ ]\b/); //Here we have used square bracket to remove white spaces from the array.
  console.log(words);
  console.log(words.length);
  for (let i = 0; i < words.length; i++) {
    wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
  }
  console.log(wordCounts);
};
tenMostFrequentWords();
