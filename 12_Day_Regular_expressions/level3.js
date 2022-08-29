// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
// let cleanText = (sent) => {
//   let a = /[^a-zA-Z0-9]/g;
//   return sent.replace(a, ' ');
// };
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
let a = /[^a-zA-Z0-9]/g;
console.log(sentence.replace(a, ' '));
// conso`le.log(cleanText(sentence));

// let wordCounts = {};
// let words = sentence.split(/\b/g);
// console.log(words);
